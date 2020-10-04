import React, { useState } from "react";
import { createContext } from "react";

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [student, setStudent] = useState({});

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
