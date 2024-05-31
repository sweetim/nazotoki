import * as ethers from "ethers"
import { utils } from "zksync-ethers"
import {
  deployContract,
  getProvider,
  getWallet,
  LOCAL_RICH_WALLETS,
} from "../deploy/utils"
import {
  Riddle,
  SchoolPaymaster,
} from "../typechain-types"

describe("School Paymaster", function() {
  async function deployRiddleContract() {
    const wallet = getWallet(LOCAL_RICH_WALLETS[0].privateKey)
    const user_1 = getWallet(LOCAL_RICH_WALLETS[1].privateKey)
    const user_1_address = await user_1.getAddress()

    const riddle: Riddle = await deployContract(
      "Riddle",
      [],
      {
        wallet,
        silent: true,
      },
    ) as any

    const schoolPaymaster: SchoolPaymaster = await deployContract(
      "SchoolPaymaster",
      [],
      {
        wallet,
        silent: true,
      },
    ) as any

    return {
      riddle,
      riddleAddress: await riddle.getAddress(),
      schoolPaymaster,
      schoolPaymasterAddress: await schoolPaymaster.getAddress(),
      wallet,
      user_1,
      user_1_address,
    }
  }

  it("should pay gas fee by paymaster", async () => {
    const {
      user_1,
      user_1_address,
      wallet,
      riddle,
      schoolPaymasterAddress,
    } = await deployRiddleContract()

    await (
      await wallet.sendTransaction({
        to: schoolPaymasterAddress,
        value: ethers.parseEther("1"),
      })
    ).wait()

    const provider = getProvider()
    const schoolPaymasterBefore = await provider.getBalance(schoolPaymasterAddress)
    const user_1_before = await provider.getBalance(user_1_address)

    const paymasterParams = utils.getPaymasterParams(
      schoolPaymasterAddress,
      {
        type: "General",
        innerInput: new Uint8Array(),
      },
    )

    const gasPrice = await provider.getGasPrice()

    riddle.connect(user_1)
    await (await riddle.createItem(
      {
        owner: user_1_address,
        title: "title 2",
        description: "description 2",
        uri: "uri 2",
        answers: [
          "a",
          "b",
          "c",
          "d",
        ],
      },
      {
        maxPriorityFeePerGas: BigInt(0),
        maxFeePerGas: gasPrice,
        gasLimit: 6000000,
        customData: {
          gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
          paymasterParams,
        },
      },
    )).wait()

    const schoolPaymasterAfter = await provider.getBalance(schoolPaymasterAddress)
    const user_1_after = await provider.getBalance(user_1_address)

    console.table({
      schoolPaymasterBefore,
      schoolPaymasterAfter,
      schoolPaymasterDiff: schoolPaymasterBefore - schoolPaymasterAfter,
      user_1_before,
      user_1_after,
      user_1_diff: user_1_before - user_1_after,
    })
  })
})
