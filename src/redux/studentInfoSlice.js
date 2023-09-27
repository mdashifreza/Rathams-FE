import { createSlice } from '@reduxjs/toolkit';

const studentInfoSlice = createSlice({
    name : 'studentInfo',
    initialState : {
        fullName : "",
        selectedDate : "",
        selectedTimeSlot : "",
        age : "",
    },
    reducers : {
        setFullName : (state, action)=>{
            state.fullName = action.payload;
        },
        selSelectedDate : (state, action)=>{
            state.selectedDate = action.payload;
        },
        selSelectedTimeSlot : (state, action)=>{
            state.selectedTimeSlot = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
    }
});

export const {
    setFullName,
    selSelectedDate,
    selSelectedTimeSlot,
    setAge,
} = studentInfoSlice.actions;

export default studentInfoSlice.reducer;
