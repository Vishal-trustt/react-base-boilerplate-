import { combineReducers } from "@reduxjs/toolkit";
import appState from "./appState/appState";
const rootReducer = combineReducers({
  appState: appState,
});
export default rootReducer;
