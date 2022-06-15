import React from "react"

import TaskBar from "../../components/TaskBar"

import DeleteIcon from "../../images/icon-cross.svg"

const Todo = ({ completed }) => {
  return (
    <TaskBar>
      <div className="taskbar__flex">
        <p
          className={`taskbar__description ${
            completed ? "taskbar__description--completed" : ""
          }`}
        >
          Testing
        </p>
        <svg className="taskbar__delete">
          <image xlinkHref={DeleteIcon}></image>
        </svg>
      </div>
    </TaskBar>
  )
}

export default Todo
