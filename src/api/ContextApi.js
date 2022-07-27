import React, { createContext, useState } from "react";
export const ContextApiProvider = createContext();
const ContextApi = ({ children }) => {
  let [loginState, setLogin] = useState(true);
  let [registerState, setRegister] = useState(false);
  return (
    <ContextApiProvider.Provider
      value={{ loginState, setLogin, registerState, setRegister }}
    >
      {children}
    </ContextApiProvider.Provider>
  );
};

export default ContextApi;
