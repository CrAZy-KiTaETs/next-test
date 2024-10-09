// src/store/store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainSlicer from "./mainSlicer";
import homeSlicer from "@/pages/home/components/store/homeSlicer";

const rootReducer = combineReducers({
    mainData: mainSlicer,
    homeData: homeSlicer,
  });

export const store = configureStore({
  reducer: rootReducer
});
