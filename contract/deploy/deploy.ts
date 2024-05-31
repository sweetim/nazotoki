import { ethers } from "ethers"
import {
  deployContract,
  getProvider,
  getWallet,
} from "./utils"

export default async function() {
  const riddle = await deployContract(
    "Riddle",
    [],
  )
  const riddleAddress = await riddle.getAddress()

  const school = await deployContract(
    "School",
    [],
  )
  const schoolAddress = await school.getAddress()

  const schoolPaymaster = await deployContract(
    "SchoolPaymaster",
    [],
  )
  const schoolPaymasterAddress = await schoolPaymaster.getAddress()

  const wallet = getWallet()

  await (
    await wallet.sendTransaction({
      to: schoolPaymasterAddress,
      value: ethers.parseEther("0.1"),
    })
  ).wait()

  const provider = getProvider()
  const paymasterBalance = await provider.getBalance(schoolPaymasterAddress)
  console.log(`Paymaster ETH balance is now ${paymasterBalance.toString()}`)

  console.table({
    riddleAddress,
    schoolAddress,
    schoolPaymasterAddress,
  })

  console.log(`
export const RIDDLE_CONTRACT_ADDRESS = "${riddleAddress}"
export const SCHOOL_CONTRACT_ADDRESS = "${schoolAddress}"
export const SCHOOL_PAYMASTER_CONTRACT_ADDRESS = "${schoolPaymasterAddress}"
  `)
}
