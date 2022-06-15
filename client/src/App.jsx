import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchTodos } from "./features/todo/todoService"
import { fetchTheme } from "./features/theme/themeService"

import TitleBar from "./components/TitleBar"
import TodoCreate from "./features/todo/TodoCreate"
import TodoList from "./features/todo/TodoList"

import "./App.scss"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
    dispatch(fetchTheme())
  }, [])

  return (
    <div className="App">
      <div className="App__content">
        <TitleBar />
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  )
}

export default App
