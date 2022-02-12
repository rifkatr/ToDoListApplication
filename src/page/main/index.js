import React from "react"
import { Row, Button, Spin, Col } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import { connect } from "react-redux"
import { getTodoList, setTodoList } from "../../store/todo-list/actions"
import BaseLayout from "../../component/BaseLayout"
import SectionList from "../../component/SectionList"

import Controller from "./controller"
import ModalTask from "../../component/ModalTask"
import { splitTasksByStatus, sortTasksByCreatedAt } from "../../service/helper"

import "./style.scss"

class Main extends Controller {
  render() {
    const { todoList, loadingToDoList } = this.props
    const { isVisibleModalTask, isVisibleModalAddTask, taskSelected } = this.state
    const tasks = splitTasksByStatus(todoList)

    sortTasksByCreatedAt(tasks.tasksDone, "desc")
    sortTasksByCreatedAt(tasks.tasksTodo)

    return (
      <BaseLayout>
        <Row justify="end" className="main-space-add-task-row">
          <Col>
            <Button type="primary" onClick={this.handleVisibleModalAddTask} size="large" icon={<PlusOutlined />}>Add Task</Button>
          </Col>
        </Row>
        <Spin spinning={loadingToDoList}>
          <Row justify="center">
            <SectionList title="To Do" tasks={tasks.tasksTodo} onClickCardTask={(idTask) => this.handleClickCardTask(idTask)} />
            <SectionList title="Done" tasks={tasks.tasksDone} onClickCardTask={(idTask) => this.handleClickCardTask(idTask)} />
          </Row>
        </Spin>

        <ModalTask
          title="Update Task"
          visible={isVisibleModalTask}
          onCancel={this.handleVisibleModalTask}
          dataTask={taskSelected}
          onSubmit={(e) => this.handleUpdateTask(e)}
          deleteButton
          onClickDelete={this.handleDeleteTask}
        />

        <ModalTask
          title="Create Task"
          visible={isVisibleModalAddTask}
          onCancel={this.handleVisibleModalAddTask}
          onSubmit={(e) => this.handleCreateTask(e)}
        />
      </BaseLayout>
    )
  }
}

const mapStateToProps = state => {
  const { todoListReducer } = state

  return {
    loadingToDoList: todoListReducer.loadingToDoList,
    todoList: todoListReducer.todoList,
    tasksTodo: todoListReducer.tasksTodo,
    tasksDone: todoListReducer.tasksDone
  }
}

const mapDispatchToProps = dispatch => ({
  getTodoList: () => dispatch(getTodoList()),
  setTodoList: (todoList) => dispatch(setTodoList(todoList))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)