import React, { useState } from "react"
import { useSelector } from "react-redux"

import { selectTodos } from "./todoSlice"

import Todo from "./Todo"
import "./TodoList.scss"

const TodoList = () => {
  const todos = useSelector(selectTodos)
  const [filterInd, setFilterInd] = useState(0)

  const handleOnClick = (ind) => {
    setFilterInd(ind)
  }

  const renderTodos = () => {
    return Object.keys(todos).map((id) => {
      let rules =
        filterInd === 0
          ? true
          : filterInd === 1
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
                filterInd === 0 ? "todo-list__select--active" : ""
              }`}
              onClick={() => handleOnClick(0)}
            >
              All
            </li>
            <li
              className={`todo-list__select ${
                filterInd === 1 ? "todo-list__select--active" : ""
              }`}
              onClick={() => handleOnClick(1)}
            >
              Active
            </li>
            <li
              className={`todo-list__select ${
                filterInd === 2 ? "todo-list__select--active" : ""
              }`}
              onClick={() => handleOnClick(2)}
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
