import React, { forwardRef } from "react"

import { motion } from "framer-motion"

import "./TaskBar.scss"

const TaskBar = forwardRef(
  ({ children, isCompleted, toggleCompleted }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="taskbar"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="taskbar__content">
          <span
            className="taskbar__check"
            data-select={isCompleted ? "true" : "false"}
            onClick={toggleCompleted}
          ></span>
          {children}
        </div>
      </motion.div>
    )
  }
)

export default TaskBar
