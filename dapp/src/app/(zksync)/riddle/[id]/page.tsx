"use client"

import { RiddleItem } from "@/contract"
import { RiddleContainer } from "@/modules/riddle"
import RiddleCard from "@/modules/riddle/RiddleCard"
import Image from "next/image"
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
    \n &nbsp;
$$
\\begin{align*}
\\displaystyle\\sum_{k=3}^5 k^2+1 = ?
\\end{align*}
$$
      `,
    owner: "",
    uri: "asassas",
    answers: [
      "30",
      "53",
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
    <RiddleContainer id={id}>
      <RiddleCard id={id} data={data} />
    </RiddleContainer>
  )
}

export default RiddlePage
