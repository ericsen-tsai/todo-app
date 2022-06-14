import React, { useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { toggleTheme } from "../features/theme/themeService"
import { selectMode } from "../features/theme/themeSlice"

import "./TitleBar.scss"

const TitleBar = () => {
  const dispatch = useDispatch()
  const mode = useSelector(selectMode)

  useLayoutEffect(() => {
    if (mode === "light") {
      document.documentElement.setAttribute("data-theme", "light")
    }

    if (mode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }, [mode])

  return (
    <div className="titlebar">
      <div className="titlebar__title-box">
        <h2 className="titlebar__title">TODO</h2>
      </div>
      <div className="titlebar__toggle">
        <i
          className="titlebar__icon"
          onClick={() => dispatch(toggleTheme())}
        ></i>
      </div>
    </div>
  )
}

export default TitleBar
