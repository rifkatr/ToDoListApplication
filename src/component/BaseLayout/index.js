import { Layout } from "antd"
import PageHeader from "../PageHeader"
import "./style.scss"

const { Content } = Layout

const BaseLayout = (props) => {
  const { children } = props
  return (
    <Layout className="base-layout">
      <PageHeader />
      <Content className="content">{children}</Content>
    </Layout>
  )
}

export default BaseLayout