import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import _ from "lodash"
import { fetchTheme, toggleTheme } from "./themeService"

const initialState = {
  mode: null,
  isLoading: false,
  error: { isError: false, errMsg: "" },
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    clearThemeError: (state) => {
      state.error.isError = false
      state.error.errMsg = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(fetchTheme.pending, toggleTheme.pending), (state) => {
        state.isLoading = true
      })
      .addMatcher(
        isAnyOf(fetchTheme.fulfilled, toggleTheme.fulfilled),
        (state, action) => {
          state.isLoading = false
          state.mode = action.payload.mode
        }
      )
      .addMatcher(
        isAnyOf(fetchTheme.rejected, toggleTheme.rejected),
        (state) => {
          state.isLoading = false
          state.mode = "dark"
          state.error.isError = true
          state.error.errMsg = "Can't toggle theme"
        }
      )
  },
})

export const { clearThemeError } = themeSlice.actions

export const selectMode = (state) => state.theme.mode

export default themeSlice.reducer
