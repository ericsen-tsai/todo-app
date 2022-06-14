import { createAsyncThunk } from "@reduxjs/toolkit"
import API from "../../api"

const headers = {
  "Content-Type": "application/json",
}

export const fetchTheme = createAsyncThunk("theme/fetchTheme", async () => {
  const response = await API.get("theme", { headers })
  return response.data
})

export const toggleTheme = createAsyncThunk(
  "theme/toggleTheme",
  async (_, { getState }) => {
    const { mode } = getState().theme
    const response = await API.put(
      "theme",
      { mode: mode === "dark" ? "light" : "dark" },
      { headers }
    )
    return response.data
  }
)
