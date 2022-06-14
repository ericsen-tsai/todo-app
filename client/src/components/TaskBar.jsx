import React from "react"

import "./TaskBar.scss"

const TaskBar = ({ children }) => {
  return (
    <div className="taskbar">
      <div className="taskbar__content">
        <span className="taskbar__check" data-select="true"></span>
        <input
          type="text"
          className="taskbar__input"
          placeholder="Create a new todo..."
        />
      </div>
    </div>
  )
}

export default TaskBar
