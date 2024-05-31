import { expect } from "chai"
import {
  deployContract,
  getWallet,
  LOCAL_RICH_WALLETS,
} from "../deploy/utils"
import { School } from "../typechain-types"

describe("School", function() {
  async function deploySchoolContract() {
    const wallet = getWallet(LOCAL_RICH_WALLETS[0].privateKey)
    const user_1 = getWallet(LOCAL_RICH_WALLETS[1].privateKey)

    const school: School = await deployContract(
      "School",
      [],
      {
        wallet,
        silent: true,
      },
    ) as any

    return {
      school,
      wallet,
      user_1,
    }
  }

  it("should register school", async () => {
    const { school: schoolContract, wallet } = await deploySchoolContract()

    const name = "school"
    const description = "description"
    await (await schoolContract.createSchool(name, description)).wait()

    const ownerAddress = await wallet.getAddress()

    const [ ownerActual, nameActual, descriptionActual ] = await schoolContract.getSchoolMetadata(ownerAddress)

    expect(ownerAddress).to.be.eq(ownerActual)
    expect(name).to.be.eq(nameActual)
    expect(description).to.be.eq(descriptionActual)
  })

  it("should register question", async () => {
    const { school, wallet } = await deploySchoolContract()

    const name = "school"
    const description = "description"
    const ownerAddress = await wallet.getAddress()

    await (await school.createSchool(name, description)).wait()

    await (await school.registerQuestions("id_1")).wait()

    const questions = await school.getAllQuestions(ownerAddress)

    expect(questions.length).to.be.eq(1)
  })

  it("should fail register question if not owner", async () => {
    const { school, user_1 } = await deploySchoolContract()

    const name = "school"
    const description = "description"
    await (await school.createSchool(name, description)).wait()

    try {
      await school.connect(user_1).registerQuestions("id")
    } catch (error) {
      expect(error.message).to.include("Only owner of school can access")
    }
  })
})
