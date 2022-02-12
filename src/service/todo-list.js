import api from "./api"

const toDoList = {
  getTodoList: () => api.get('hanabyan/todo/1.0.0/to-do-list')
}

export default toDoList