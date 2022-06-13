import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchTodos } from "./features/todo/todoService"
import { fetchTheme, toggleTheme } from "./features/theme/themeService"
import { selectTodos } from "./features/todo/todoSlice"
import { selectMode } from "./features/theme/themeSlice"

function App() {
  const dispatch = useDispatch()

  const todos = useSelector(selectTodos)
  const mode = useSelector(selectMode)

  useEffect(() => {
    dispatch(fetchTodos())
    dispatch(fetchTheme())
  }, [])

  return (
    <div className="App">
      {todos &&
        Object.keys(todos).map((id) => <div key={id}>{todos[id].task}</div>)}
      <button
        onClick={() => {
          dispatch(toggleTheme())
        }}
      >
        toggle!! {mode}
      </button>
    </div>
  )
}

export default App
