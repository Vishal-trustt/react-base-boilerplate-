import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import exp from "constants";

const initialState = {
  isAppLoading: false,
  isAppError: false,
  appErrorMessage: "",
  appSuccessMessage: "",
};

const appState = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState(
      state,
      action: PayloadAction<{
        isAppLoading: boolean;
        isAppError: boolean;
        appErrorMessage: string;
        appSuccessMessage: string;
      }>
    ) {
      state.isAppLoading = action.payload.isAppLoading;
      state.isAppError = action.payload.isAppError;
      state.appErrorMessage = action.payload.appErrorMessage;
      state.appSuccessMessage = action.payload.appSuccessMessage;
    },
  },
});
export const { setAppState } = appState.actions;
export default appState.reducer;
