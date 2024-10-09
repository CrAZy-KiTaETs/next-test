import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'homeData',
  initialState: {
    value: 0,
  },
  reducers: {
    homeIncrement: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { homeIncrement, decrement, incrementByAmount } = homeSlice.actions;

export default homeSlice.reducer;
