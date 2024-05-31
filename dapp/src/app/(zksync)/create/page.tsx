"use client"

import CreateRiddle from "@/modules/riddle/CreateRiddle"
import { Flex } from "antd"
import { FC } from "react"

const CreatePage: FC = () => {
  return (
    <Flex className="w-full h-full" justify="center" align="center" vertical>
      <Flex justify="center" align="center" className="w-1/2 max-w-screen-lg">
        {/* <RiddleCard id={id}/> */}
        <CreateRiddle />
      </Flex>
    </Flex>
  )
}

export default CreatePage
