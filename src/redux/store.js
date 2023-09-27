import { configureStore } from "@reduxjs/toolkit";
import studentInfoSlice from "./studentInfoSlice";

export const store = configureStore({
    reducer : {
        studentInfo : studentInfoSlice,
    }
})