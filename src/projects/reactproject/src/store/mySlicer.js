import { createSlice } from "@reduxjs/toolkit";

const mySlicer = createSlice({
  name: "mySlicer",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment } = mySlicer.actions;

export default mySlicer.reducer;
