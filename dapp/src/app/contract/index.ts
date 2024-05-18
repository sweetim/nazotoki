import { riddleAbi } from "@/generated"

export const CONTRACT_ADDRESS = "0x094499Df5ee555fFc33aF07862e43c90E6FEe501"

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
