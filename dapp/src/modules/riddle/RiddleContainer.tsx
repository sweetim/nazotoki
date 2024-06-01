import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons"
import {
  Col,
  Flex,
  Row,
} from "antd"
import Link from "next/link"
import {
  FC,
  ReactElement,
} from "react"

type RiddleContainerProps = {
  id: string
  children: ReactElement | ReactElement[]
}

const RiddleContainer: FC<RiddleContainerProps> = ({ id, children }) => {
  return (
    <Flex className="w-full h-full bg-[#281e35]" justify="center" align="center" vertical>
      <Row>
        <Col>
          <Flex className="w-full h-full" justify="center" align="center" vertical>
            <Link href={`/riddle/${Number(id) - 1}`}>
              <div className="m-5 cursor-pointer rounded-full p-5 hover:font-bold border-purple-300 text-white bg-[#3d3449] hover:bg-[#524a5d]">
                <LeftOutlined />
              </div>
            </Link>
          </Flex>
        </Col>
        <Col flex="auto">
          {children}
        </Col>
        <Col>
          <Flex className="w-full h-full" justify="center" align="center" vertical>
            <Link href={`/riddle/${Number(id) + 1}`}>
              <div className="m-5 cursor-pointer rounded-full p-5 hover:font-bold border-purple-300 text-white bg-[#3d3449] hover:bg-[#524a5d]">
                <RightOutlined />
              </div>
            </Link>
          </Flex>
        </Col>
      </Row>
    </Flex>
  )
}

export default RiddleContainer
