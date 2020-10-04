import React, { useState } from "react";
import { createContext } from "react";

export const TeacherContext = createContext();

const TeacherContextProvider = (props) => {
  const [teacher, setTeacher] = useState({});

  return (
    <TeacherContext.Provider value={{ teacher, setTeacher }}>
      {props.children}
    </TeacherContext.Provider>
  );
};

export default TeacherContextProvider;
