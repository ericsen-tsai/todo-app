# To-Do App

## Table of contents

- [To-Do App](#to-do-app)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Process](#process)
    - [Built with](#built-with)
    - [Note](#note)
      - [React DnD, Drag & Drop](#react-dnd-drag--drop)
    - [Continued development](#continued-development)
  - [Author](#author)
  - [Acknowledgement](#acknowledgement)

## Overview

### Screenshot

![Preview](./design/desktop-preview.jpg)

### Links

- [Heroku](https://todo-app-ericsen.herokuapp.com)

## Process

### Built with

- Frontend
  - Sass
  - React
  - Redux Toolkit
  - Framer
  - React DnD
  - Vite
- Backend
  - json-server

### Note

#### React DnD, Drag & Drop

> Use a quite example code to implement list item drag and drop.
> All the logic inside useDrop is calculating the hovered item.

```js
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

    // Returns the last recorded { x, y } client offset of the pointer
    // while a drag operation is in progress
    const clientOffset = monitor.getClientOffset()

    const hoverClientY = clientOffset.y - hoverBoundingRect.top
    // dragging down
    if (dragInd < hoverInd && hoverClientY < hoverMiddleY) return
    // dragging up
    if (dragInd > hoverInd && hoverClientY > hoverMiddleY) return

    dispatch(changeTodosOrder({ dragInd, hoverInd }))

    item.index = hoverInd
  },
})

const [{ isDragging }, drag, preview] = useDrag({
  // Some change had been made since version 14.0.0
  // https://github.com/react-dnd/react-dnd/releases/tag/v14.0.0
  // TLDR, move the properties of item out
  type: DND_ITEM_TYPE,
  item: () => {
    return { index }
  },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
  }),
})

drag(dragRef)
```

### Continued development

- [ ] Construct the backend by apollo server.
- [ ] Save order of tasks in local storage.

## Author

- GitHub - [Ericsen Tsai](https://github.com/ericsen-tsai)

## Acknowledgement

- 💡 tannerlinsley
