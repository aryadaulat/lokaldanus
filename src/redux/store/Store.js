import { createStore } from "redux";
import Reducers from "../reducers/Reducers";
import { combineReducers } from "redux";
import Reducers2 from "../reducers/Reducers2";

const combreducers = combineReducers({Reducers, Reducers2}) 
export const Mystore =createStore(combreducers);

