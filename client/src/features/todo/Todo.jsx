import React from "react"

import TaskBar from "../../components/TaskBar"

import DeleteIcon from "../../images/icon-cross.svg"

const Todo = ({ isCompleted, task }) => {
  return (
    <TaskBar isCompleted={isCompleted}>
      <div className="taskbar__flex">
        <p
          className={`taskbar__description ${
            isCompleted ? "taskbar__description--completed" : ""
          }`}
        >
          {task}
        </p>
        <svg className="taskbar__delete">
          <image xlinkHref={DeleteIcon}></image>
        </svg>
      </div>
    </TaskBar>
  )
}

export default Todo
