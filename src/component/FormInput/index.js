import { Form, Input } from "antd"

const FormInput = (props) => {
  const { name="", label="", rules=[] } = props
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Input />
    </Form.Item>
  )
}

export default FormInput