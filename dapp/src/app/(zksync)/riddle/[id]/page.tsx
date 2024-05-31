"use client"

import { RiddleItem } from "@/contract"
import RiddleCard from "@/modules/riddle/RiddleCard"
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons"
import {
  Card,
  Col,
  Flex,
  Row,
} from "antd"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

type RiddlePageProps = {
  params: {
    id: string
  }
}

const RiddlePage: FC<RiddlePageProps> = ({ params }) => {
  const { id } = params

  const data: RiddleItem = {
    title: "Sum of Square",
    description: `find the value of this equation
    $$
    \\displaystyle\\sum_{k=3}^5 k^2+1 = ?
    $$

      `,
    owner: "",
    uri: "asassas",
    answers: [
      "30",
      "20",
      "50",
      "51",
    ],
  }

  const renderLoading = () => (
    <Image
      src="/loading.gif"
      width={250}
      height={250}
      alt="loading..."
    />
  )

  return (
    <Flex className="w-full h-full bg-[#281e35]" justify="center" align="center" vertical>
      <Flex justify="center" align="center">
        <Card>
          <Row>
            <Col>
              <Flex className="w-full h-full" justify="center" align="center" vertical>
                <Flex justify="center" align="center">
                  <Link href={`/riddle/${Number(id) - 1}`}>
                    <LeftOutlined />
                  </Link>
                </Flex>
              </Flex>
            </Col>
            <Col flex="auto">
              <RiddleCard id={id} data={data} />
            </Col>
            <Col>
              <Flex className="w-full h-full" justify="center" align="center" vertical>
                <Flex justify="center" align="center">
                  <Link href={`/riddle/${Number(id) + 1}`}>
                    <RightOutlined />
                  </Link>
                </Flex>
              </Flex>
            </Col>
          </Row>
        </Card>
      </Flex>
    </Flex>
  )
}

export default RiddlePage
