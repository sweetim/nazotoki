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
      title: "これは何ですか",
      description: `
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
    {
      title: "Chemistry",
      description: `What is this?

      \n &nbsp;
$$
\\begin{align*}
\\text{H}_2\\text{O}
\\end{align*}
$$
      `,
      owner: "",
      uri: "asassas",
      answers: [
        "natrium",
        "aluminium",
        "water",
        "helium",
      ],
    },
    {
      title: "Trigometry",
      description: `What is the value?

      \n &nbsp;
$$
\\begin{align*}
\\sin^2(x) + \\cos^2(x)=?
\\end{align*}
$$
      `,
      owner: "",
      uri: "asassas",
      answers: [
        "-1",
        "1",
        "90",
        "180",
      ],
    },
    {
      title: "AWS Certified Solutions Architect",
      description: `An application running on AWS uses an Amazon Aurora Multi-AZ DB cluster deployment for its
      database. When evaluating performance metrics, a solutions architect discovered that the database reads
      are causing high I/O and adding latency to the write requests against the database.
      What should the solutions architect do to separate the read requests from the write requests?
      `,
      owner: "",
      uri: "asassas",
      answers: [
        "Enable read-through caching on the Aurora database",
        "Update the application to read from the Multi-AZ standby instance",
        "Create an Aurora replica and modify the application to use the appropriate endpoints",
        "Create a second Aurora database and link it to the primary database as a read replica",
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

  const dataIndex = Math.abs(Number(id)) % data.length

  return (
    <RiddleContainer id={id}>
      <RiddleCard id={id} data={data[Number(dataIndex)]} />
    </RiddleContainer>
  )
}

export default RiddlePage
