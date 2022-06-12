import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchTodos } from "./features/todo/todoService"
import { selectTodos } from "./features/todo/todoSlice"

function App() {
  const dispatch = useDispatch()

  const todos = useSelector(selectTodos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div className="App">
      {todos && Object.keys(todos).map((id) => <div>{todos[id].task}</div>)}
    </div>
  )
}

export default App
