import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"
import themeReducer from "../features/theme/themeSlice"

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
})
