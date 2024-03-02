import { createContext, useContext, useEffect, useState } from "react";
export const ContextProvider = createContext(null);

export const WebDContext = ({ children }) => {
  const [isVisibleWebD, setIsVisibleWebD] = useState(false);
  const value = {
    isVisibleWebD,
    setIsVisibleWebD,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export const CustomContextWebD = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("customContextWebD undefined");
  }
  return context;
};
