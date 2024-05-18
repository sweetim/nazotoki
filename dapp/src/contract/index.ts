import { riddleAbi } from "@/generated"

export const CONTRACT_ADDRESS = "0x2cEdf0Fb5e1c4985B32712E7f34E13D51ee5589E"

export type RiddleItem = RiddleItemGeneric<RiddleAnswer>

export type RiddleItemGeneric<T> = {
  title: string,
  description: string,
  uri: string,
  answers: T
}

export type RiddleAnswer = {
  answer_1: string
  answer_2: string
  answer_3: string
  answer_4: string
}

export const RIDDLE_CONTRACTS = {
  address: CONTRACT_ADDRESS,
  abi: riddleAbi
} as const
