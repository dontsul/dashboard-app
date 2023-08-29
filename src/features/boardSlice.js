import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    activeBoard: "",
  },
  reducers: {
    setActiveBoard: (state, action) => {
      state.activeBoard = action.payload;
    },
  },
});

export const boardReducer = boardSlice.reducer;
export const { setActiveBoard } = boardSlice.actions;
