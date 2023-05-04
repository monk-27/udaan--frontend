import {combineReducers} from "redux";
import changeTheNumber from "./updown";
import itemReducer from './shopslice';


const rootReducer = combineReducers({
    changeTheNumber,
    itemReducer
    
})
export default rootReducer