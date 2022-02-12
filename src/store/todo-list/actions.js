import * as constans from "./constans"
import todoListService from "../../service/todo-list"

export function setLoadingTodoList(loadingToDoList) {
  return { type: constans.SET_LOADING_TODO_LIST, payload: loadingToDoList }
}

export function setTodoList(todoList) {
  return { type: constans.SET_TODO_LIST, payload: todoList }
}

export function getTodoList() {
  return async dispatch => {
    dispatch(setLoadingTodoList(true))
    try {
      const response_todo_list = await todoListService.getTodoList()
      dispatch(setTodoList(response_todo_list))
    } catch (error) {
      console.log(error)
    }
    dispatch(setLoadingTodoList(false))
  }
}