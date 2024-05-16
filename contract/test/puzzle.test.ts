import { expect } from 'chai';
import { getWallet, deployContract, LOCAL_RICH_WALLETS } from '../deploy/utils';
import { Puzzle } from "../typechain-types"

describe('Puzzle', function () {
  let puzzle: Puzzle

  it("create item", async () => {
    const WALLET_PK = LOCAL_RICH_WALLETS[0].privateKey
    const wallet = getWallet(WALLET_PK);

    puzzle = await deployContract(
      "Puzzle",
      [], {
      wallet,
      silent: true
    }) as any;

    const item: Puzzle.PuzzleItemStruct = {
      title: "title 2",
      description: "description 2",
      uri: "uri 2",
      answers: {
        answers_1: "a",
        answers_2: "b",
        answers_3: "c",
        answers_4: "d",
      }
    }

    await puzzle.createItem(item)

    expect(await puzzle.itemIndex()).to.eq(1);

    const [ title, description, uri, answers ] = await puzzle.items(0)

    expect({
      title,
      description,
      uri,
      answers
    }).to.deep.eq({ ...item, answers: Object.values(item.answers) });

    console.log(await puzzle.getItem(0))
  })
});
