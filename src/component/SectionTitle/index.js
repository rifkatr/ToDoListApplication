import { Typography } from "antd"

const { Title } = Typography

const SectionTitle = (props) => {
  const {
    title=""
  } = props

  return (
    <Title level={4}>{title}</Title>
  )
}

export default SectionTitle