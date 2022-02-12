import { Card, Typography, Space } from "antd"

const { Title, Text } = Typography

const CardTask = (props) => {
  const { title="", description="", date="", onClick=()=>{} } = props
  
  return (
    <Card hoverable onClick={onClick}>
      <Title level={5}>{title}</Title>
      <Space direction="vertical">
        <Text>{description}</Text>
        <Text>{date}</Text>
      </Space>
    </Card>
  )
}

export default CardTask