import { configureStore } from "@reduxjs/toolkit";
import assignmentReducer from "./assignmentslice";

const store = configureStore({
  reducer: {
    assignment: assignmentReducer,
  },
});

export default store;