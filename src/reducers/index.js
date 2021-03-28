import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import treeReducer from "./treeReducer";

const allReducers = combineReducers({
   treeReducer:treeReducer
})

export default allReducers;