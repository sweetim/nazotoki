import { RiddleItem } from "@/contract"
import RiddleCard from "@/modules/riddle/RiddleCard"
import { Flex } from "antd"

export default function ExamPageById() {
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

  return (
    <Flex className="w-full h-full bg-[#281e35]" justify="center" align="center" vertical>
      <Flex justify="center" align="center">
        <RiddleCard id={"-1"} data={data} />
      </Flex>
    </Flex>
  )
}
