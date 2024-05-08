import { createContext, useContext, useEffect, useState } from "react";
export const ContextProvider = createContext(null);

export const ContextProjectPage = ({ children }) => {
  const [isFadedProjectPage, setIsFadedProjectPage] = useState(true);

  const value = {
    isFadedProjectPage,
    setIsFadedProjectPage,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export const useContextProjectPage = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("customContextProjectPage undefined");
  }
  return context;
};
