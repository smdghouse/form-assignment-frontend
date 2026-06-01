import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};

const assignmentSlice = createSlice({
  name: "assignment",
  initialState,

  reducers: {

    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
    },

  },
});

export const {
  setAssignments,
  addAssignment,
} = assignmentSlice.actions;

export default assignmentSlice.reducer;