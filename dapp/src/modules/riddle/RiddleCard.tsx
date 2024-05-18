"use client"

import Image from "next/image";
import Link from "next/link";
import { CONTRACT_ADDRESS, RIDDLE_CONTRACTS, RiddleItem } from "@/contract"
import { Button, Card, Col, Divider, Flex, Modal, Radio, Row, Space } from "antd"
import { FC, useState } from "react"
import { useReadRiddleGetItem, useWriteRiddleSubmitAnswer } from "@/generated"
import { Typography } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

type RiddleCardProps = {
  id: string
}

const RiddleCard: FC<RiddleCardProps> = ({ id }) => {
  // const { data, isSuccess } = useReadContracts({
  //   contracts: Array(1).fill(0).map((_, i) => ({
  //     ...RIDDLE_CONTRACTS,
  //     functionName: "getItem",
  //     args: [BigInt(1)]
  //   }))
  // })

  const [answer, setAnswer] = useState("")

  const { writeContractAsync } = useWriteRiddleSubmitAnswer()

  const { data, isSuccess } = useReadRiddleGetItem({
    address: CONTRACT_ADDRESS,
    args: [BigInt(id)]
  })

  const renderLoading = () => (
    <Image
      src="/loading.gif"
      width={250}
      height={250}
      alt="loading..." />
  )

  const submitClickHandler = async () => {
    // await writeContractAsync({
    //   address: CONTRACT_ADDRESS,
    //   args: [
    //     BigInt(id),
    //     answer
    //   ]
    // })

    if (answer === data?.answers.answer_1) {
      // alert("Correct")
      showModal()
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const renderRiddleAnswer = () => (
    <Card>
      <Row>
        <Col>
          <Flex className="w-full h-full"
            justify="center"
            align="center"
            vertical>
            <Flex justify="center" align="center">
              <Link href={`/riddle/${Number(id) - 1}`}>
                <LeftOutlined />
              </Link>
            </Flex>
          </Flex>
        </Col>
        <Col flex="auto">
          <Title className="text-center">{data!.title}</Title>
          <Divider className="h-0.5 bg-[#281e35]" />
          <Paragraph className="max-w-3xl px-10 text-center">
            {data!.description}
          </Paragraph>
          <Flex className="mt-10" vertical align="center" gap="middle">
            <Space size="large" direction="vertical" align="center">
              <Radio.Group onChange={(e) => setAnswer(e.target.value)} value={answer} size="large" buttonStyle="solid">
                <Radio.Button className="!px-12" value={data!.answers.answer_1}>{data!.answers.answer_1}</Radio.Button>
                <Radio.Button className="!px-12" value={data!.answers.answer_2}>{data!.answers.answer_2}</Radio.Button>
                <Radio.Button className="!px-12" value={data!.answers.answer_3}>{data!.answers.answer_3}</Radio.Button>
                <Radio.Button className="!px-12" value={data!.answers.answer_4}>{data!.answers.answer_4}</Radio.Button>
              </Radio.Group>
              <Button size="large"
                shape="round"
                className="!text-white !px-16 !bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                onClick={submitClickHandler}>SUBMIT</Button>
              <Modal title="CONGRATULATIONS" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Your answer is CORRECT</p>
              </Modal>
            </Space>
          </Flex>
        </Col>
        <Col>
          <Flex className="w-full h-full"
            justify="center"
            align="center"
            vertical>
            <Flex justify="center" align="center">
              <Link href={`/riddle/${Number(id) + 1}`}>
                <RightOutlined />
              </Link>
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Card>
  )

  return (
    <>
      {isSuccess ? renderRiddleAnswer() : renderLoading()}
    </>
  )
}

export default RiddleCard
