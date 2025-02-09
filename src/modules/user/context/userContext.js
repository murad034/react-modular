import { createContext, useContext } from "react";

const userContext = createContext();

export const userProvider = ({ children }) => {
  return (
    <userContext.Provider value={{}}>
      {children}
    </userContext.Provider>
  );
};

export const useuserContext = () => useContext(userContext);