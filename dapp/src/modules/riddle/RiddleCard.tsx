"use client"

import {
  RIDDLE_CONTRACT_ADDRESS,
  RiddleItem,
  SCHOOL_PAYMASTER_CONTRACT_ADDRESS,
} from "@/contract"
import { riddleAbi } from "@/generated"
import {
  Button,
  Divider,
  Flex,
  Space,
  Typography,
} from "antd"
import "katex/dist/katex.min.css"
import Link from "next/link"
import {
  FC,
  useState,
} from "react"
import Markdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

import {
  createWalletClient,
  custom,
} from "viem"
import { zkSyncInMemoryNode } from "viem/chains"
import { eip712WalletActions } from "viem/zksync"
import { useWalletClient } from "wagmi"
import { utils } from "zksync-ethers"
import ResponsiveAnswerButton from "./ResponsiveAnswerButton"

const { Title, Paragraph } = Typography

type RiddleCardProps = {
  id: string
  data: RiddleItem
}

const RiddleCard: FC<RiddleCardProps> = ({ id, data }) => {
  const [ answer, setAnswer ] = useState("")
  const { data: walletClient } = useWalletClient()

  const submitClickHandler = async () => {
    const zkSyncWalletClient = createWalletClient({
      chain: zkSyncInMemoryNode,
      transport: custom((window as any).ethereum),
    }).extend(eip712WalletActions())

    const paymasterParams = utils.getPaymasterParams(
      SCHOOL_PAYMASTER_CONTRACT_ADDRESS,
      {
        type: "General",
        innerInput: new Uint8Array(),
      },
    )

    await zkSyncWalletClient.writeContract({
      account: walletClient?.account!,
      abi: riddleAbi,
      address: RIDDLE_CONTRACT_ADDRESS,
      functionName: "submitAnswer",
      args: [
        BigInt(0),
        "50",
      ],
      maxPriorityFeePerGas: BigInt(0),
      paymaster: paymasterParams.paymaster as `0x${string}`,
      paymasterInput: paymasterParams.paymasterInput as `0x${string}`,
    })
  }

  const renderNoRiddleAvailable = () => {
    return (
      <>
        <Title className="text-center">Available</Title>
        <Divider className="h-0.5 bg-primary" />
        <Paragraph className="max-w-3xl px-10 text-center">
          you can claim this riddle now
        </Paragraph>
        <Flex className="mt-10" vertical align="center" gap="middle">
          <Link href="/create">
            <Button
              size="large"
              shape="round"
              className="!text-white !px-16 !bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              onClick={submitClickHandler}
            >
              CLAIM
            </Button>
          </Link>
        </Flex>
      </>
    )
  }

  return (
    <div className="bg-white p-5 rounded-3xl max-w-3xl">
      {data.answers.length === 0 ? null : (
        <>
          <Title className="text-center">{data!.title}</Title>
          <Divider className="h-0.5 bg-primary" />
        </>
      )}
      <Markdown
        className="px-5 text-xl"
        rehypePlugins={[ rehypeKatex ]}
        remarkPlugins={[ remarkGfm, remarkMath ]}
      >
        {data!.description}
      </Markdown>
      <Flex className="mt-10" vertical align="center" gap="middle">
        {data.answers.length === 0
          ? null
          : (
            <Space size="large" direction="vertical" align="center">
              <ResponsiveAnswerButton answers={data!.answers} />
              <button
                onClick={submitClickHandler}
                className="hover:opacity-80 px-16 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              >
                <h2 className="text-white">SUBMIT</h2>
              </button>
            </Space>
          )}
      </Flex>
    </div>
  )
}

export default RiddleCard
