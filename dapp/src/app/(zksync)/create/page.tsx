import CreateRiddle from "@/modules/riddle/CreateRiddle";
import RiddleCard from "@/modules/riddle/RiddleCard";
import { Col, Row } from "antd";
import { FC } from "react";



const CreatePage: FC = () => {
  return (
    <Row
      className="h-full">
      <Col sm={{ flex: "auto" }}>
        <div className="h-full p-5 w-1/2">
          <CreateRiddle />
        </div>
      </Col>
      {/* <Col span={12}
        className="overflow-auto p-5 h-full">
        <div className="h-full">
          <RiddleCard id={"0"} />
        </div>
      </Col> */}
    </Row>
  )
}

export default CreatePage
