import * as hre from "hardhat"
import {
  getWallet,
  LOCAL_RICH_WALLETS,
} from "../deploy/utils"
import { Riddle } from "../typechain-types"

const RIDDLE_CONTRACT_ADDRESS = "0x111C3E89Ce80e62EE88318C2804920D4c96f92bb"
;(async () => {
  const owner = getWallet(LOCAL_RICH_WALLETS[0].privateKey)
  const user_1 = getWallet(LOCAL_RICH_WALLETS[1].privateKey)

  const RiddleContract = await hre.zksyncEthers.getContractFactory(
    "Riddle",
    owner,
  )

  const riddleContract: Riddle = RiddleContract.attach(RIDDLE_CONTRACT_ADDRESS) as any

  console.log(await riddleContract.itemIndex())

  await riddleContract.createItem(
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
      },
    },
  )

  console.log(await riddleContract.itemIndex())
  console.log(await owner.getAddress())
  console.log(await riddleContract.getItem(0))

  await riddleContract.connect(user_1).createItem({
    owner: await user_1.getAddress(),
    title: "title",
    description: "description",
    uri: "uri",
    answers: {
      answer_1: "answer_1",
      answer_2: "answer_2",
      answer_3: "answer_3",
      answer_4: "answer_4",
    },
  })

  console.log(await riddleContract.itemIndex())
  console.log(await user_1.getAddress())
  console.log(await riddleContract.getItem(5))
})()
