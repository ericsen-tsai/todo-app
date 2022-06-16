import React, { useState } from "react"
import { useSelector } from "react-redux"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { selectTodoListbyOrder } from "./todoSlice"

import Todo from "./Todo"
import "./TodoList.scss"

const TodoList = () => {
  const todosWithOrder = useSelector(selectTodoListbyOrder)
  const [group, setGroup] = useState("all")

  const handleOnClick = (ind) => {
    setGroup(ind)
  }

  const renderTodos = () => {
    return todosWithOrder.map((todo, index) => {
      let rules =
        group === "all"
          ? true
          : group === "active"
          ? !todo.isCompleted
          : todo.isCompleted
      return (
        rules && (
          <Todo
            key={todo.id}
            task={todo.task}
            isCompleted={todo.isCompleted}
            index={index}
          />
        )
      )
    })
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="todo-list">
        {renderTodos()}
        <div className="todo-list__info">
          <div className="todo-list__info-content">
            <div className="todo-list__count-box">
              <p className="todo-list__count">
                {todosWithOrder.filter((todo) => !todo.isCompleted).length}
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
    </DndProvider>
  )
}

export default TodoList
