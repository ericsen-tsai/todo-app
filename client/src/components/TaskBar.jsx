import React, { forwardRef } from "react"

import "./TaskBar.scss"

const TaskBar = forwardRef(({ children, isCompleted }, ref) => {
  return (
    <div ref={ref} className="taskbar">
      <div className="taskbar__content">
        <span
          className="taskbar__check"
          data-select={isCompleted ? "true" : "false"}
        ></span>
        {children}
      </div>
    </div>
  )
})

export default TaskBar
