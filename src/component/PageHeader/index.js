import { Layout } from "antd"
import ApplicationTitle from "../ApplicationTitle"
import "./style.scss"

const { Header } = Layout

const PageHeader = () => {
  return (
    <Header className="header-page">
      <ApplicationTitle/>
    </Header>
  )
}

export default PageHeader