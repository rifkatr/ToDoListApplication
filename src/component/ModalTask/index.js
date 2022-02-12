import { useEffect } from "react"
import { Modal, Button, Form, Row, Space, Popconfirm } from "antd"
import FormInput from "../FormInput"
import FormSwitch from "../FormSwitch"

const ModalTask = (props) => {
  const [form] = Form.useForm()
  const {   
    title="",
    visible = false,
    onCancel = () => {},
    dataTask = {
      id: 0,
      title : "",
      description : "",
      status : 0,
      createdAt : ""
    },
    onSubmit=()=>{},
    deleteButton=false,
    onClickDelete=()=>{}
  } = props

  useEffect(() => {
    form.setFieldsValue({
      ...dataTask,
      status: !!dataTask.status
    })
   }, [form, dataTask])

  return (
    <Modal 
      title={title}
      visible={visible} 
      onCancel={onCancel} 
      centered
      footer={false}
      forceRender
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={(e)=>onSubmit(e)}
      >
        <FormInput
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Input title task!"
            }
          ]}
        />
        <FormInput
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Input description task!"
            }
          ]}
        />
        <FormSwitch
          label="Status"
          name="status"
          rules={[
            {
              required: false,
            }
          ]}
        />
        <Row justify="end">
          <Space>
            {
              deleteButton &&
              <Form.Item>
                <Popconfirm
                  placement="bottom"
                  title="Are you sure to delete this task?"
                  onConfirm={onClickDelete}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="danger">
                    Delete
                  </Button>
                </Popconfirm>
              </Form.Item>
            }
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Space>
        </Row>
      </Form>
    </Modal>
  )
}

export default ModalTask