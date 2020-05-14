import React, { useState } from "react";
import { createContext } from "react";

export const NavContext = createContext();

const NavContextProvider = (props) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <NavContext.Provider value={{ activeItem, setActiveItem }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
