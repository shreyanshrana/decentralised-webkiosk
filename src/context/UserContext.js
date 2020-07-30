import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userType, setUserType] = useState("new");

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
