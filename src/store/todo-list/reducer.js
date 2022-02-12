import * as constants from "./constans"

const INITIAL_STATE = {
  loadingToDoList: false,
  todoList: []
}

const todoListReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case constants.SET_LOADING_TODO_LIST:
      return Object.assign({}, state, {
        loadingToDoList: action.payload
      })
    case constants.SET_TODO_LIST:
      return Object.assign({}, state, {
        todoList: action.payload
      })
    default: return state
  }
}

export default todoListReducer