import { expect } from "chai"
import { EventLog } from "ethers"
import {
  deployContract,
  getWallet,
  LOCAL_RICH_WALLETS,
} from "../deploy/utils"
import { Riddle } from "../typechain-types"

describe("Riddle", function() {
  async function deployRiddleContract() {
    const WALLET_PK = LOCAL_RICH_WALLETS[0].privateKey
    const wallet = getWallet(WALLET_PK)

    const riddle: Riddle = await deployContract(
      "Riddle",
      [],
      {
        wallet,
        silent: true,
      },
    ) as any

    return {
      riddle,
      wallet,
    }
  }

  it("create item", async () => {
    const { riddle, wallet } = await deployRiddleContract()

    const item: Riddle.RiddleItemStruct = {
      owner: await wallet.getAddress(),
      title: "title 2",
      description: "description 2",
      uri: "uri 2",
      answers: [
        "a",
        "b",
        "c",
        "d",
      ],
    }

    await riddle.createItem(item)

    expect(await riddle.itemIndex()).to.eq(BigInt(1))

    const [ owner, title, description, uri, answers ] = await riddle.items(0)
    console.log(await riddle.items(0))
    // expect({
    //   owner,
    //   title,
    //   description,
    //   uri,
    //   answers,
    // }).to.deep.eq({ ...item, answers: Object.values(item.answers) })
  })

  it("can submit answer using simulate function", async () => {
    const { riddle, wallet } = await deployRiddleContract()

    const item: Riddle.RiddleItemStruct = {
      owner: await wallet.getAddress(),
      title: "title 2",
      description: "description 2",
      uri: "uri 2",
      answers: [
        "a",
        "b",
        "c",
        "d",
      ],
    }

    await riddle.createItem(item)

    expect(await riddle.submitAnswer.staticCall(0, "a")).to.be.true
    expect(await riddle.submitAnswer.staticCall(0, "b")).to.be.false
  })

  it("can submit answer using events", async () => {
    const { riddle, wallet } = await deployRiddleContract()

    const item: Riddle.RiddleItemStruct = {
      owner: await wallet.getAddress(),
      title: "title 2",
      description: "description 2",
      uri: "uri 2",
      answers: [
        "a",
        "b",
        "c",
        "d",
      ],
    }

    await riddle.createItem(item)

    const riddleIndex = BigInt(0)
    const res = await (
      await riddle.submitAnswer(riddleIndex, "n")
    ).wait()

    expect(res).to.be.not.null

    const actual = res?.logs
    const [ userAddress, index, isCorrect ] = actual
      ?.filter(msg => msg instanceof EventLog)
      .map(msg => msg as EventLog)
      .map(msg => msg.args)[0]!

    expect(userAddress).to.be.eq(await wallet.getAddress())
    expect(index).to.be.eq(riddleIndex)
    expect(isCorrect).to.be.false
  })
})
