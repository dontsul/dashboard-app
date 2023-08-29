import { configureStore } from "@reduxjs/toolkit";
import { boardReducer } from "../features/boardSlice";
import { authReducer } from "../features/authSlice";
import { dashboardReducer } from "../features/dashboardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    board: boardReducer,
    dashboard: dashboardReducer,
  },
});
