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

  const data: RiddleItem[] = [
    {
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
    },
    {
      title: "項目",
      description: `これは何ですか
![water](https://th.bing.com/th/id/OIP.5gDP37iubISYbzp_qocvdgAAAA?rs=1&pid=ImgDetMain)
      `,
      owner: "",
      uri: "asassas",
      answers: [
        "石",
        "水",
        "牛乳",
        "草",
      ],
    },
    {
      title: "",
      description: `
![meme](https://cdn-images-1.medium.com/v2/resize:fit:480/1*L2N1JF38iZ0KMbFO4IoX2w.jpeg)
      `,
      owner: "",
      uri: "asassas",
      answers: [],
    },
    {
      title: "A riddle",
      description: `
      I have cities, but no houses;
      I have mountains, but no trees;
      I have water, but no fish;
      I have roads, but no cars.

      What am I?
      `,
      owner: "",
      uri: "asassas",
      answers: [
        "map",
        "car",
        "house",
        "water",
      ],
    },
  ]

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
      <RiddleCard id={id} data={data[Number(id)]} />
    </RiddleContainer>
  )
}

export default RiddlePage
