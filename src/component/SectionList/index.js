import { Row, Col, Space } from "antd"
import CardTask from "../CardTask"
import SectionTitle from "../SectionTitle"
import "./style.scss"

const SectionList = (props) => {
  const { 
    title="",
    tasks=[],
    onClickCardTask=()=>{}
  } = props

  return (
    <Col md={12} className="section-list">
      <Row className="wrap-list">
        <SectionTitle title={title} />
        <Space direction="vertical" size="middle" style={{width: '100%'}}>
          {
            tasks.map((task, key) => {
              return (
                <CardTask
                  key={key}
                  title={task.title}
                  description={task.description}
                  date={task.createdAt}
                  onClick={() => onClickCardTask(task.id)}
                />
                )
              })
          }
        </Space>
      </Row>
    </Col>
  )
}

export default SectionList