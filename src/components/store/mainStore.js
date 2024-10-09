import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainSlicer from "./mainSlicer";
import homeSlicer from "./homeSlicer";

const rootReducer = combineReducers({
    mainData: mainSlicer,
    homeData: homeSlicer,
  });

export const store = configureStore({
  reducer: rootReducer
});
