import React from "react"

import "./TaskBar.scss"

const TaskBar = ({ children }) => {
  return (
    <div className="taskbar">
      <div className="taskbar__content">
        <span className="taskbar__check" data-select="true"></span>
        {children}
      </div>
    </div>
  )
}

export default TaskBar
