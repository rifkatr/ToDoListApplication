import { Form, Switch } from "antd"

const FormSwitch = (props) => {
  const { name="", label="", rules=[] } = props
  return (
    <Form.Item name={name} label={label} rules={rules} valuePropName="checked">
      <Switch />
    </Form.Item>
  )
}

export default FormSwitch