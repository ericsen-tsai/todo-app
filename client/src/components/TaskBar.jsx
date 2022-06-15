import React from "react"

import "./TaskBar.scss"

const TaskBar = ({ children, isCompleted }) => {
  return (
    <div className="taskbar">
      <div className="taskbar__content">
        <span
          className="taskbar__check"
          data-select={isCompleted ? "true" : "false"}
        ></span>
        {children}
      </div>
    </div>
  )
}

export default TaskBar
