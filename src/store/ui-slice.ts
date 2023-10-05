import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../data";

const initial = { theme: Theme.Dark };

const slice = createSlice({
  name: "ui",
  initialState: initial,
  reducers: {
    changeTheme: (state) => {
      if (state.theme === Theme.Dark) {
        state.theme = Theme.Light;
      } else {
        state.theme = Theme.Dark;
      }
    },
  },
});

export const { changeTheme } = slice.actions;

export default slice.reducer;
