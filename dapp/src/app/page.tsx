import {
  Flex,
  Space,
} from "antd"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <Flex className="w-full h-full" justify="center" align="center" vertical>
      <Flex justify="center" align="center" className="w-1/2 max-w-screen-lg" vertical>
        <div className="bg-white p-3 rounded-full">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        <Space direction="vertical" className="my-5 text-center !text-white">
          <h1 className="text-3xl">Nazotoki 3.0</h1>
          <p>
            start your riddle solving adventure with us and earn NFT and NZTK coin
          </p>
          <Space className="mt-10" size="large">
            <Link href="/exams">
              <div className="cursor-pointer rounded-xl p-5 min-w-48 hover:font-bold border-purple-300 text-white bg-[#3d3449] hover:bg-[#524a5d]">
                <Space direction="vertical" size="large">
                  <Image src="/exam.png" width={64} height={64} alt="exams" />
                  <h1>Exams</h1>
                </Space>
              </div>
            </Link>
            <Link href="/riddle/0">
              <div className="cursor-pointer rounded-xl p-5 min-w-48 hover:font-bold border-purple-300 text-white bg-[#3d3449] hover:bg-[#524a5d]">
                <Space direction="vertical" size="large">
                  <Image src="/fun.png" width={64} height={64} alt="exams" />
                  <h1>Fun</h1>
                </Space>
              </div>
            </Link>
          </Space>
        </Space>
      </Flex>
    </Flex>
  )
}
