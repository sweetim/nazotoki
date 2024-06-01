import { formatEther } from "ethers"
import * as hre from "hardhat"
import { utils } from "zksync-ethers"
import {
  getProvider,
  getWallet,
  LOCAL_RICH_WALLETS,
} from "../deploy/utils"
import { Riddle } from "../typechain-types"

const RIDDLE_CONTRACT_ADDRESS = "0x4768d649Da9927a8b3842108117eC0ca7Bc6953f"
const SCHOOL_CONTRACT_ADDRESS = "0x22F4D93be0E8C0C081e74c0d5e697B64eEA007FF"
const SCHOOL_PAYMASTER_CONTRACT_ADDRESS = "0xe4C7fBB0a626ed208021ccabA6Be1566905E2dFc"
;(async () => {
  const owner = getWallet(LOCAL_RICH_WALLETS[0].privateKey)
  const user_1 = getWallet(LOCAL_RICH_WALLETS[1].privateKey)

  const RiddleContract = await hre.zksyncEthers.getContractFactory(
    "Riddle",
    owner,
  )
  const riddleContract: Riddle = RiddleContract.attach(RIDDLE_CONTRACT_ADDRESS) as any

  const provider = getProvider()
  const gasPrice = await provider.getGasPrice()

  const gasLimit = await riddleContract.createItem.estimateGas({
    owner: await owner.getAddress(),
    title: "title",
    description: "description",
    uri: "uri",
    answers: [
      "answer_1",
      "answer_2",
      "answer_3",
      "answer_4",
    ],
  })

  console.table({
    gasPrice,
    gasLimit,
  })

  console.log(formatEther(await provider.getBalance(SCHOOL_PAYMASTER_CONTRACT_ADDRESS)))
  console.log(formatEther(await owner.getBalance()))
  const paymasterParams = utils.getPaymasterParams(
    SCHOOL_PAYMASTER_CONTRACT_ADDRESS,
    {
      type: "General",
      innerInput: new Uint8Array(),
    },
  )

  await (await riddleContract.createItem(
    {
      owner: await owner.getAddress(),
      title: "title",
      description: "description",
      uri: "uri",
      answers: [
        "answer_1",
        "answer_2",
        "answer_3",
        "answer_4",
      ],
    },
    {
      maxPriorityFeePerGas: BigInt(0),
      maxFeePerGas: gasPrice,
      gasLimit: 60000000,
      customData: {
        gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
        paymasterParams,
      },
    },
  )).wait()

  console.log(formatEther(await owner.getBalance()))

  await (await riddleContract.submitAnswer(
    BigInt(0),
    "50",
    {
      maxPriorityFeePerGas: BigInt(0),
      maxFeePerGas: gasPrice,
      gasLimit: 60000000,
      customData: {
        gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
        paymasterParams,
      },
    },
  )).wait()
  console.log(formatEther(await provider.getBalance(SCHOOL_PAYMASTER_CONTRACT_ADDRESS)))
  console.log(formatEther(await owner.getBalance()))
})()
