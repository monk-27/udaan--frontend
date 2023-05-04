import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";



const initialState = 0;
const changeTheNumber = (state = initialState, action:any)=>{
    switch(action.type){
        case "INCREMENT": return state + 1
        case "DECREMENT": return state - 1
        default:return state;
    }

}
export default changeTheNumber;