import React from "react"

import Todo from "./Todo"

const TodoList = () => {
  return (
    <div className="todo">
      <Todo />
      <Todo completed={true} />
    </div>
  )
}

export default TodoList
