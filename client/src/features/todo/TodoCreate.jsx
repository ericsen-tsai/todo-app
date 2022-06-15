import React from "react"

import TaskBar from "../../components/TaskBar"

const TodoCreate = () => {
  return (
    <TaskBar isCompleted={false}>
      <input
        type="text"
        className="taskbar__input"
        placeholder="Create a new todo..."
      />
    </TaskBar>
  )
}

export default TodoCreate