import React from "react";
import ReactDOM from "react-dom";
import NavContextProvider from "./context/NavContext";
import "./main.scss";
import App from "./App";
import "semantic-ui-less/semantic.less";
import UserContextProvider from "./context/UserContext";
import StudentContextProvider from "./context/StudentContext";
import TeacherContextProvider from "./context/TeacherContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <StudentContextProvider>
        <TeacherContextProvider>
          <NavContextProvider>
            <App />
          </NavContextProvider>
        </TeacherContextProvider>
      </StudentContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
