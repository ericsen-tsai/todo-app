import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import _ from "lodash"
import update from "immutability-helper"

import {
  fetchTodo,
  fetchTodos,
  createTodo,
  editTodo,
  deleteTodo,
} from "./todoService"

const initialState = {
  todos: {},
  isLoading: false,
  error: { isError: false, errMsg: "" },
  todosOrder: [],
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    clearTodoError: (state) => {
      state.error.isError = false
      state.error.errMsg = ""
    },
    changeTodosOrder: (state, action) => {
      console.log(action)
      const { dragInd, hoverInd } = action.payload
      const dragId = state.todosOrder[dragInd]
      state.todosOrder = update(state.todosOrder, {
        $splice: [
          [dragInd, 1],
          [hoverInd, 0, dragId],
        ],
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false
        state.todos = _.omit(state.todos, action.payload.id)
        state.todosOrder = state.todosOrder.filter(
          (id) => id !== action.payload.id
        )
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false
        state.todos = _.keyBy(action.payload, "id")
        state.todosOrder = action.payload.map((todo) => todo.id)
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false
        state.todos = {
          ...state.todos,
          [action.payload.id]: action.payload,
        }
        state.todosOrder = [...state.todosOrder, action.payload.id]
      })
      .addMatcher(
        isAnyOf(
          fetchTodo.pending,
          fetchTodos.pending,
          createTodo.pending,
          editTodo.pending,
          deleteTodo.pending
        ),
        (state) => {
          state.isLoading = true
        }
      )
      .addMatcher(
        isAnyOf(fetchTodo.fulfilled, editTodo.fulfilled),
        (state, action) => {
          state.isLoading = false
          state.todos = {
            ...state.todos,
            [action.payload.id]: action.payload,
          }
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTodo.rejected,
          fetchTodos.rejected,
          createTodo.rejected,
          editTodo.rejected,
          deleteTodo.rejected
        ),
        (state, action) => {
          state.isLoading = false
          state.todos = {}
          state.error.isError = true
          state.error.errMsg = action.payload
        }
      )
  },
})

export const { clearTodoError, changeTodosOrder } = todoSlice.actions

export const selectTodos = (state) => state.todo.todos
export const selectTodoListbyOrder = (state) =>
  state.todo.todosOrder.map((id) => state.todo.todos[id])
export const selectTodoError = (state) => state.todo.error

export default todoSlice.reducer
