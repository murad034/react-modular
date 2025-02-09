import { createContext, useContext } from "react";

const BankContext = createContext();

export const BankProvider = ({ children }) => {
  return (
    <BankContext.Provider value={{}}>
      {children}
    </BankContext.Provider>
  );
};

export const useBankContext = () => useContext(BankContext);