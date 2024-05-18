"use client"

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Card, Flex, Form, FormProps, Input } from "antd"
import { FC } from "react"
import { useWriteRiddleCreateItem, useReadRiddleItems, riddleAbi, useReadRiddleItemIndex } from "@/generated"
import { CONTRACT_ADDRESS, RiddleItem, RiddleItemGeneric } from "@/contract"
import { useReadContracts } from "wagmi"
import { useRouter } from "next/navigation"

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 8 },
  },
};

const CreateRiddle: FC = () => {
  const router = useRouter()

  const { writeContractAsync } = useWriteRiddleCreateItem()
  const { data: itemIndex, isSuccess } = useReadRiddleItemIndex({
    address: CONTRACT_ADDRESS
  })
  // const { writeContract } = useWriteRiddleIncrement()
  console.log(itemIndex, isSuccess)
  const onFinish: FormProps<RiddleItemGeneric<string[]>>["onFinish"] = async (values) => {
    const { answers, ...others } = values
    const riddleItem: RiddleItem = {
      ...others,
      answers: {
        answer_1: answers[0],
        answer_2: answers[1],
        answer_3: answers[2],
        answer_4: answers[3],
      }
    }

    await writeContractAsync({
      address: CONTRACT_ADDRESS,
      args: [riddleItem]
    })

    router.push(`/riddle/${Number(itemIndex)}`)

  }

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg h-full w-full overflow-auto">
      <Form
        {...formItemLayout}
        variant="outlined"
        className="h-full overflow-auto"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}>
        <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input.TextArea rows={6} />
        </Form.Item>
        <Form.Item label="Image" name="uri" rules={[{ required: true, message: 'Please input!' }]}>
          <Input />
        </Form.Item>
        <Form.List
          name="answers"
          initialValue={[
            ""
          ]}
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 4) {
                  return Promise.reject(new Error('At least 4 answers'));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map(({ key, ...others }, index) => (
                <Form.Item
                  {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                  label={index === 0 ? 'Answers' : ''}
                  required
                  key={key}
                >
                  <Form.Item
                    {...others}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input answer",
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder={`answer ${index + 1}`} className="!w-2/3" />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      size={64}
                      className="mx-3"
                      onClick={() => remove(others.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add answers
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        <Flex className="mt-10" vertical align="center" gap="middle">
          <Button className="text-white !px-16 !bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            type="primary" htmlType="submit">
            SUBMIT
          </Button>
        </Flex>
      </Form>
    </div>
  )
}

export default CreateRiddle
