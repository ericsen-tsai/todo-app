import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import PulseLoader from "react-spinners/PulseLoader"

import { fetchTodos } from "./features/todo/todoService"
import { fetchTheme } from "./features/theme/themeService"
import { selectMode } from "./features/theme/themeSlice"

import TitleBar from "./components/TitleBar"
import TodoCreate from "./features/todo/TodoCreate"
import TodoList from "./features/todo/TodoList"

import "./App.scss"

function App() {
  const dispatch = useDispatch()
  const mode = useSelector(selectMode)

  useEffect(() => {
    dispatch(fetchTodos())
    dispatch(fetchTheme())
  }, [])

  return (
    <div className="App">
      {mode ? (
        <div className="App__content">
          <TitleBar />
          <TodoCreate />
          <TodoList />
          <div className="App__reminder">
            <p className="App__reminder-text">Drag and drop to reorder list</p>
          </div>
        </div>
      ) : (
        <PulseLoader
          size={"2rem"}
          css={{ margin: "0 auto" }}
          color="hsl(237, 14%, 26%)"
        />
      )}
    </div>
  )
}

export default App
