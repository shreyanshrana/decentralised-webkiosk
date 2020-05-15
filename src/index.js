import React from "react";
import ReactDOM from "react-dom";
import NavContextProvider from "./context/NavContext";
import "./main.scss";
import App from "./App";
import "semantic-ui-less/semantic.less";

ReactDOM.render(
  <React.StrictMode>
    <NavContextProvider>
      <App />
    </NavContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
