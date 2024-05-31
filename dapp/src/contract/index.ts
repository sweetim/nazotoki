export const RIDDLE_CONTRACT_ADDRESS = "0x4768d649Da9927a8b3842108117eC0ca7Bc6953f"
export const SCHOOL_CONTRACT_ADDRESS = "0x22F4D93be0E8C0C081e74c0d5e697B64eEA007FF"
export const SCHOOL_PAYMASTER_CONTRACT_ADDRESS = "0xe4C7fBB0a626ed208021ccabA6Be1566905E2dFc"

export type RiddleItem = {
  owner: string
  title: string
  description: string
  uri: string
  answers: string[]
}

export type ExamsMetadata = {
  name: string
  description: string
  date: string
}
