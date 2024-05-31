import { ExamsMetadata } from "@/contract"
import {
  Card,
  Flex,
  Tag,
} from "antd"
import Link from "next/link"
import { v4 as uuidv4 } from "uuid"

export default function ExamsPage() {
  const examsMetadata: ExamsMetadata[] = [
    {
      name: "IELTS",
      description: "The General Training test is about your English capabilities in work or a social environment",
      date: "2023-02-10",
    },
    {
      name: "SAT",
      description: "SAT is a standardized test widely used for college admissions in the United States",
      date: "2023-02-16",
    },
  ]

  const renderExamMetadata = examsMetadata.map(data => (
    <Link key={data.name} href={`/exams/${uuidv4()}`}>
      <Card
        extra={<Tag color="purple">{data.date}</Tag>}
        title={data.name}
        bordered={false}
        style={{ width: 300 }}
      >
        <p>{data.description}</p>
      </Card>
    </Link>
  ))

  return (
    <Flex className="p-10 w-full" gap="middle" justify="center">
      {renderExamMetadata}
    </Flex>
  )
}
