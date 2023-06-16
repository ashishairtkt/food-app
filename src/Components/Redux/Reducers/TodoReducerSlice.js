import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, title, summary } = action.payload;
      const taskToUpdate = state.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.title = title;
        taskToUpdate.summary = summary;
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const taskIndex = state.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.splice(taskIndex, 1);
      }
    },
  },
});

export const { addTask, updateTask, deleteTask } = todosSlice.actions;
export default todosSlice.reducer;
