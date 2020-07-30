import React from "react";
import ReactDOM from "react-dom";
import NavContextProvider from "./context/NavContext";
import "./main.scss";
import App from "./App";
import "semantic-ui-less/semantic.less";
import UserContextProvider from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <NavContextProvider>
        <App />
      </NavContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
