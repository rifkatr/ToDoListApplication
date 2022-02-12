import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

import todoListReducer from "./todo-list/reducer"

const rootReducer = {
  todoListReducer
}

const reducer = combineReducers(rootReducer)
export const store = createStore(reducer, applyMiddleware(thunkMiddleware))