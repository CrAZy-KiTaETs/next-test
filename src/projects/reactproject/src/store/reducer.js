import { configureStore } from "@reduxjs/toolkit";
import  mySlicer  from "./mySlicer";

export const store = configureStore({
    reducer: {
        lox: mySlicer
    }
})