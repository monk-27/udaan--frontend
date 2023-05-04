import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = {
  price: 0,
  quantity: 0,
  total: 0,
  coursename:""
};
function ParseFloat(str: any, val: any) {
  str = str.toString();
  if (Number.isInteger(Number(str))) {
    return Number(str);
  } else {
    str = str.slice(0, str.indexOf(".") + val + 1);
  }
  return Number(str);
}

const itemReducer = (state = initialState, action:any) => {
  
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        quantity: state.quantity > 0 ? state.quantity - 1 : 0,
      };
    case "CALCULATE_TOTAL":
      const sgst = ParseFloat(0.14 * action.payload.price * state.quantity,4);
      const cgst = ParseFloat(0.14 * action.payload.price * state.quantity,4);
      const total = sgst + cgst + action.payload.price * state.quantity;
     const  coursename= action.payload.coursename;
     const price =action.payload.price
      return {
        ...state,
        total, sgst,cgst,coursename,price
      };
    default:
      return state;
  }
};
export default itemReducer;

