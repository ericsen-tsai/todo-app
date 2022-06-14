import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchTodos } from "./features/todo/todoService"
import { fetchTheme } from "./features/theme/themeService"

import TitleBar from "./components/TitleBar"
import TaskBar from "./components/TaskBar"

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
        <TaskBar />
      </div>
    </div>
  )
}

export default App
