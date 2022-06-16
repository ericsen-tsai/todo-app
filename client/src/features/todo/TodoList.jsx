import React, { useState } from "react"
import { useSelector } from "react-redux"

import { selectTodos, selectTodoList } from "./todoSlice"

import Todo from "./Todo"
import "./TodoList.scss"

const TodoList = () => {
  const todos = useSelector(selectTodos)
  const [group, setGroup] = useState("all")

  const handleOnClick = (ind) => {
    setGroup(ind)
  }

  const renderTodos = () => {
    return Object.keys(todos).map((id) => {
      let rules =
        group === "all"
          ? true
          : group === "active"
          ? !todos[id].isCompleted
          : todos[id].isCompleted

      return (
        rules && (
          <Todo
            key={id}
            task={todos[id].task}
            isCompleted={todos[id].isCompleted}
          />
        )
      )
    })
  }

  return (
    <div className="todo-list">
      {renderTodos()}
      <div className="todo-list__info">
        <div className="todo-list__info-content">
          <div className="todo-list__count-box">
            <p className="todo-list__count">
              {Object.keys(todos).filter((id) => !todos[id].isCompleted).length}
              &nbsp;items left
            </p>
          </div>
          <ul className="todo-list__select-box">
            <li
              className={`todo-list__select ${
                group === "all" ? "todo-list__select--active" : ""
              }`}
              onClick={() => handleOnClick("all")}
            >
              All
            </li>
            <li
              className={`todo-list__select ${
                group === "active" ? "todo-list__select--active" : ""
              }`}
              onClick={() => handleOnClick("active")}
            >
              Active
            </li>
            <li
              className={`todo-list__select ${
                group === "completed" ? "todo-list__select--active" : ""
              }`}
              onClick={() => handleOnClick("completed")}
            >
              Completed
            </li>
          </ul>
          <div className="todo-list__action-box">
            <p className="todo-list__clear">Clear Completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
