import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./Store";
import theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}></ThemeProvider>
    </Provider>
  );
}

export default App;
