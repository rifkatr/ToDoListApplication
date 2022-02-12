import { Component } from "react"
import moment from "moment"

class MainController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisibleModalTask: false,
      isVisibleModalAddTask: false,
      taskSelected: {}
    }
  }

  componentDidMount() {
    this.props.getTodoList()
  }

  handleClickCardTask = (idTask) => {
    this.handleVisibleModalTask()

    const taskSelected = this.props.todoList.find(task => task.id === idTask )
    this.setState({ taskSelected })
  }

  handleVisibleModalTask = () => {
    this.setState({ isVisibleModalTask: !this.state.isVisibleModalTask })
  }

  handleVisibleModalAddTask = () => {
    this.setState({ isVisibleModalAddTask: !this.state.isVisibleModalAddTask })
  }

  handleCreateTask = (e) => {
    let todoList = this.props.todoList

    todoList.push({
      id: todoList[todoList.length-1].id+1,
      ...e,
      status: e.status ? 1 : 0,
      createdAt: moment().format("YYYY-MM-DD HH:mm")
    })

    this.props.setTodoList(todoList)
    this.handleVisibleModalAddTask()
  }

  handleUpdateTask = (e) => {
    const { taskSelected } = this.state
    const idxTask = this.props.todoList.findIndex(task => task.id === taskSelected.id)
    let todoList = this.props.todoList

    todoList[idxTask] = {
      ...taskSelected,
      ...e,
      status: e.status ? 1 : 0
    }

    this.props.setTodoList(todoList)
    this.handleVisibleModalTask()
  }

  handleDeleteTask = () => {
    const { taskSelected } = this.state
    const idxTask = this.props.todoList.findIndex(task => task.id === taskSelected.id)
    let todoList = this.props.todoList

    todoList.splice(idxTask, 1)

    this.props.setTodoList(todoList)
    this.handleVisibleModalTask()
  }
}

export default MainController