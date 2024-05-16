"use client"

import { FC } from "react"
import {
  useReadPuzzleGetItem,
  useReadPuzzleItemIndex,
  useWritePuzzleCreateItem,
  useReadPuzzleItems,
  puzzleAbi
} from "@/generated"
import { useReadContracts } from "wagmi"

const CONTRACT_ADDRESS = "0x111C3E89Ce80e62EE88318C2804920D4c96f92bb"

const PuzzlePage: FC = () => {
  const { data: itemIndex } = useReadPuzzleItemIndex({
    address: CONTRACT_ADDRESS
  })
  const { data: items } = useReadPuzzleItems({
    address: CONTRACT_ADDRESS,
    args: [BigInt(0)]
  })

  const { data: item } = useReadPuzzleGetItem({
    address: CONTRACT_ADDRESS,
    args: [BigInt(0)]
  })

  const puzzleContract = {
    address: CONTRACT_ADDRESS,
    abi: puzzleAbi
  } as const
  const result = useReadContracts({
    contracts: [
      {
        ...puzzleContract,
        functionName: "getItem",
        args: [BigInt(0)]
      },
      {
        ...puzzleContract,
        functionName: "getItem",
        args: [BigInt(1)]
      },
      {
        ...puzzleContract,
        functionName: "getItem",
        args: [BigInt(2)]
      }
    ]
  })
  console.log(result)
  const { writeContractAsync, status } = useWritePuzzleCreateItem()

  function createItemClickHandler() {
    writeContractAsync({
      address: CONTRACT_ADDRESS,
      args: [{
        title: "3人のリンゴ",
        description: `A.B、Cは悪魔に捕らえられ、別の部屋に閉じ込められた。
        悪魔は3人に以下のことを告げた。
        「各部屋には、それぞれ1～9個のリンゴがある」
        「各部屋のリンゴの数はすべて異なる」
        誰かが「ろ部屋のリンゴの合計数」を当てれば全員解放される。
        3人は1回ずつ質問でき、悪魔は正直に「はい」「いいえ」で答える。
        質問の様子は3人とも聞き取れる
        A「合計は偶数？」悪魔「いいえ」
        B「合計は素数？」悪魔「いいえ」
        Cの部屋にはリンゴが5つある。
        Cはどのような質問をすればいいだろうか
        `,
        uri: "https://robohash.org/sassaas?set=set4",
        answers: {
          answers_1: "1",
          answers_2: "2",
          answers_3: "3",
          answers_4: "4",
        }
      }]
    })
  }

  // console.log(status)
  // console.log(item)
  console.log(items)
  // console.log(items && items.map(item => item))
  return (
    <>
      <h2>ha</h2>
      <button onClick={createItemClickHandler}>Create</button>
      <p>{itemIndex?.toString()}</p>

      <h2>{JSON.stringify(item)}</h2>
      {/* <p>{items![0]}</p> */}
    </>
  )
}

export default PuzzlePage
