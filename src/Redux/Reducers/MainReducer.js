import { combineReducers } from "redux";
import EmpReducer from "./EmpReducer";
const rootReducers = combineReducers({
    emp: EmpReducer
});
export default rootReducers;