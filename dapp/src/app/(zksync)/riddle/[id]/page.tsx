"use client"

import { FC } from "react"
import {

} from "@/generated"
import { Flex } from "antd"
import RiddleCard from "@/modules/riddle/RiddleCard"

type RiddlePageProps = {
  params: {
    id: string
  }
}

const RiddlePage: FC<RiddlePageProps> = ({ params }) => {
  const { id } = params

  return (
      <Flex className="w-full h-full bg-[#281e35]"
        justify="center"
        align="center"
        vertical>
        <Flex justify="center" align="center">
          <RiddleCard id={id}/>
        </Flex>
      </Flex>
  )
}

export default RiddlePage
