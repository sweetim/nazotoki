"use client"

import {
  RIDDLE_CONTRACT_ADDRESS,
  RiddleItem,
  SCHOOL_PAYMASTER_CONTRACT_ADDRESS,
} from "@/contract"
import { riddleAbi } from "@/generated"
import {
  Button,
  ConfigProvider,
  Divider,
  Flex,
  Radio,
  Space,
  Typography,
} from "antd"
import Link from "next/link"
import {
  FC,
  useState,
} from "react"
import Markdown from "react-markdown"
import rehypeMathjax from "rehype-mathjax"
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
        <Divider className="h-0.5 bg-[#281e35]" />
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
    <div className="bg-white p-5 rounded-3xl">
      <Title className="text-center">{data!.title}</Title>
      <Divider className="h-0.5 bg-[#281e35]" />
      <Markdown
        className="px-5 text-xl"
        rehypePlugins={[ rehypeMathjax ]}
        remarkPlugins={[ remarkGfm, remarkMath ]}
      >
        {data!.description}
      </Markdown>
      <ConfigProvider
        theme={{
          components: {
            Radio: {
              buttonBg: "#3d3449",
              buttonColor: "white",
              buttonSolidCheckedHoverBg: "rgb(241,68,62)",
              buttonSolidCheckedBg: "rgb(241,68,62)",
            },
            Button: {
              defaultColor: "white",
              defaultHoverBorderColor: "none",
              defaultHoverColor: "none",
            },
          },
        }}
      >
        <Flex className="mt-10" vertical align="center" gap="middle">
          <Space size="large" direction="vertical" align="center">
            <Radio.Group onChange={(e) => setAnswer(e.target.value)} value={answer} size="large" buttonStyle="solid">
              {data!.answers.map(answer => (
                <Radio.Button key={answer} className="!border-none !px-12" value={answer}>
                  {answer}
                </Radio.Button>
              ))}
            </Radio.Group>
            {
              /* <Button
              size="large"
              shape="round"
              className="!px-16 !bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              onClick={submitClickHandler}
            >
              SUBMIT
            </Button> */
            }
            <div onClick={submitClickHandler} className="cursor-pointer relative inline-flex group">
              <div className="absolute transitiona-all duration-1000 opacity-20 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-50 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              </div>
              <button className="px-16 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
                <h2 className="text-white">SUBMIT</h2>
              </button>
            </div>
          </Space>
        </Flex>
      </ConfigProvider>
    </div>
  )
}
// bg-[#3d3449] !hover:bg-[#524a5d]
export default RiddleCard
