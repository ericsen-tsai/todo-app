import { createAsyncThunk } from "@reduxjs/toolkit"
import API from "../../api"

const headers = {
  "Content-Type": "application/json",
}

export const fetchTodo = createAsyncThunk("todo/fetchTodo", async (data) => {
  const response = await API.get(`todos/${data.id}`, { headers })
  return response.data
})

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await API.get("todos", { headers })
  return response.data
})

export const createTodo = createAsyncThunk("todo/createTodo", async (data) => {
  const response = await API.post("todos", data, { headers })
  return response.data
})

export const editTodo = createAsyncThunk("todo/editTodo", async (data) => {
  const response = await API.patch(`todos/${data.id}`, data, { headers })
  return response.data
})

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (data) => {
  await API.delete(`todos/${data.id}`, { headers })
  return { id: data.id }
})
