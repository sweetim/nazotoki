import { expect } from 'chai';
import { getWallet, deployContract, LOCAL_RICH_WALLETS } from '../deploy/utils';
import { Riddle } from "../typechain-types"

describe('Riddle', function () {
  let riddle: Riddle

  it("create item", async () => {
    const WALLET_PK = LOCAL_RICH_WALLETS[0].privateKey
    const wallet = getWallet(WALLET_PK);

    riddle = await deployContract(
      "Riddle",
      [], {
      wallet,
      silent: true
    }) as any;

    const item: Riddle.RiddleItemStruct = {
      title: "title 2",
      description: "description 2",
      uri: "uri 2",
      answers: {
        answer_1: "a",
        answer_2: "b",
        answer_3: "c",
        answer_4: "d",
      }
    }

    await riddle.createItem(item)

    expect(await riddle.itemIndex()).to.eq(1);

    const [ title, description, uri, answers ] = await riddle.items(0)

    expect({
      title,
      description,
      uri,
      answers
    }).to.deep.eq({ ...item, answers: Object.values(item.answers) });

    console.log(await riddle.getItem(0))
  })

  it("can submit item", async () => {
    const WALLET_PK = LOCAL_RICH_WALLETS[0].privateKey
    const wallet = getWallet(WALLET_PK);

    riddle = await deployContract(
      "Riddle",
      [], {
      wallet,
      silent: true
    }) as any;

    const item: Riddle.RiddleItemStruct = {
      title: "title 2",
      description: "description 2",
      uri: "uri 2",
      answers: {
        answer_1: "a",
        answer_2: "b",
        answer_3: "c",
        answer_4: "d",
      }
    }
    console.log(await riddle.getAddress())
    await riddle.createItem(item)
    const actual = await riddle.submitAnswer(0, "a");
    expect(actual).to.eq(true)
  })
});
