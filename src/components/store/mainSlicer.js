// src/store/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mainSliser = createSlice({
  name: 'mainUserData',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
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

// Экспортируем экшены
export const { increment, decrement, incrementByAmount } = mainSliser.actions;

// Экспортируем редьюсер
export default mainSliser.reducer;
