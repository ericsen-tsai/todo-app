import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { useDrag, useDrop } from "react-dnd"

import { changeTodosOrder } from "./todoSlice"
import TaskBar from "../../components/TaskBar"

import DeleteIcon from "../../images/icon-cross.svg"

const DND_ITEM_TYPE = "todo"

const Todo = ({ isCompleted, task, index }) => {
  const dispatch = useDispatch()
  const dropRef = useRef(null)
  const dragRef = useRef(null)

  const [, drop] = useDrop({
    accept: DND_ITEM_TYPE,
    hover(item, monitor) {
      if (!dropRef.current) return

      const dragInd = item.index
      const hoverInd = index

      if (dragInd === hoverInd) return

      const hoverBoundingRect = dropRef.current.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragInd < hoverInd && hoverClientY < hoverMiddleY) return
      if (dragInd > hoverInd && hoverClientY > hoverMiddleY) return

      dispatch(changeTodosOrder({ dragInd, hoverInd }))

      item.index = hoverInd
    },
  })

  const [{ isDragging }, drag, preview] = useDrag({
    type: DND_ITEM_TYPE,
    item: () => {
      return { index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1
  preview(drop(dropRef))
  drag(dragRef)

  return (
    <TaskBar ref={dropRef} isCompleted={isCompleted} style={{ opacity }}>
      <div className="taskbar__flex">
        <p
          ref={dragRef}
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
