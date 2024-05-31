import * as hre from "hardhat"
import {
  getWallet,
  LOCAL_RICH_WALLETS,
} from "../deploy/utils"
import { CheckGas } from "../typechain-types"

const CHECK_GAS_CONTRACT_ADDRESS = "0x65C899B5fb8Eb9ae4da51D67E1fc417c7CB7e964"
;(async () => {
  const owner = getWallet(LOCAL_RICH_WALLETS[0].privateKey)

  const CheckGasContract = await hre.zksyncEthers.getContractFactory(
    "CheckGas",
    owner,
  )

  const checkGasContract: CheckGas = CheckGasContract.attach(CHECK_GAS_CONTRACT_ADDRESS) as any

  const gasItem = await checkGasContract.createItem.estimateGas(
    await owner.getAddress(),
    "title",
    "description",
    "uri",
    "answer_1",
    "answer_2",
    "answer_3",
    "answer_4",
    "answer_1",
    "answer_2",
    "answer_3",
    "answer_4",
  )

  const gasFixedObject = await checkGasContract.createItemFixed.estimateGas(
    {
      owner: await owner.getAddress(),
      title: "title",
      description: "description",
      uri: "uri",
      answers: {
        answer_1: "answer_1",
        answer_2: "answer_2",
        answer_3: "answer_3",
        answer_4: "answer_4",
        answer_5: "answer_1",
        answer_6: "answer_2",
        answer_7: "answer_3",
        answer_8: "answer_4",
      },
    },
  )

  const gasFixedDynamic = await checkGasContract.createItemDynamic.estimateGas(
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
        "answer_1",
        "answer_2",
        "answer_3",
        "answer_4",
      ],
    },
  )

  console.table({
    gasItem,
    gasFixedObject,
    gasFixedDynamic,
    diff: gasFixedDynamic - gasFixedObject,
  })
})()
