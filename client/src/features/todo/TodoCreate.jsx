import React, { useState } from "react"
import { useDispatch } from "react-redux"

import TaskBar from "../../components/TaskBar"

import { createTodo } from "./todoService"

const TodoCreate = () => {
  const [taskName, setTaskName] = useState("")
  const dispatch = useDispatch()

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return
    if (!taskName) return

    const todoToSubmit = {
      isCompleted: false,
      task: taskName,
    }
    dispatch(createTodo(todoToSubmit))
    setTaskName("")
  }

  return (
    <TaskBar isCompleted={false}>
      <input
        type="text"
        className="taskbar__input"
        placeholder="Create a new todo..."
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        onKeyDown={handleKeyDown}
      />
    </TaskBar>
  )
}

export default TodoCreate
