import { createContext, useContext, useEffect, useState } from "react";
export const ContextProvider = createContext(null);

export const ContextWebD = ({ children }) => {
  const [isUnfadedWebD, setIsUnfadedWebD] = useState(false);
  const value = {
    isUnfadedWebD,
    setIsUnfadedWebD,
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
