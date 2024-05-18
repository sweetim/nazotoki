import { Button, Flex, Space } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Flex className="w-full h-full"
      justify="center"
      align="center"
      vertical>
      <Flex justify="center" align="center" className="w-1/2 max-w-screen-lg" vertical>
        <div className="bg-white p-3 rounded-full">
          <Image src="/logo.png"
            width={150}
            height={150}
            alt="logo" />
        </div>
        <Space direction="vertical" className="my-5 text-center !text-white">
          <h1 className="text-3xl">Nazotoki 3.0</h1>
          <p>
            start your riddle solving adventure with us and earn NFT and NZTK coin
          </p>
          <Link href="/riddle/0">

          <Button className="!text-white my-5 !px-16 !bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            START
          </Button>
          </Link>
        </Space>
      </Flex>
    </Flex>
  );
}
