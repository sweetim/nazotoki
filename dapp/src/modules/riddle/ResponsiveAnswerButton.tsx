import classnames from "classnames"
import {
  FC,
  useCallback,
  useMemo,
  useState,
} from "react"

type ResponsiveAnswerButtonProps = {
  answers: string[]
}

const ResponsiveAnswerButton: FC<ResponsiveAnswerButtonProps> = ({ answers }) => {
  const [ selectedIndex, setSelectedIndex ] = useState(-1)

  const isAnswerLong = Math.max(...answers.map(ans => ans.length)) > 10

  const olClassName = useMemo(() =>
    classnames("", {
      "flex flex-row": !isAnswerLong,
      "w-full": isAnswerLong,
    }), [])

  const liClassName = useCallback((i: number) =>
    classnames(
      "hover:opacity-90 cursor-pointer my-1 text-white p-4 ",
      {
        "bg-[#3d3449]": i !== selectedIndex,
        "bg-[#F14400]": i === selectedIndex,
        "rounded-l-xl": !isAnswerLong && i === 0,
        "rounded-r-xl": !isAnswerLong && i === answers.length - 1,
        "rounded-full": isAnswerLong,
        "text-ellipsis": isAnswerLong,
        "w-full": isAnswerLong,
        "my-1": isAnswerLong,
        "px-12 mr-[1px]": !isAnswerLong,
      },
    ), [ selectedIndex, answers ])

  async function itemClickHandler(i: number) {
    setSelectedIndex(i)
  }

  return (
    <ol className={olClassName}>
      {answers.map((answer, i) => (
        <li
          onClick={() => itemClickHandler(i)}
          key={answer}
          className={liClassName(i)}
        >
          <p className="text-ellipsis">{answer}</p>
        </li>
      ))}
    </ol>
  )
}

export default ResponsiveAnswerButton
