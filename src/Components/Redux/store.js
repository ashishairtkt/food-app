import { configureStore } from "@reduxjs/toolkit";
import TodoReducerSlice from "./Reducers/TodoReducerSlice";

export const store = configureStore({
  reducer: {
    todo: TodoReducerSlice,
  },
});
