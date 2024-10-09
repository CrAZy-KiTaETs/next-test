import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeSlicer";

export const homeStore = configureStore({
  reducer:  homeReducer,  
});

export default homeStore;
