import { createContext, useContext, useEffect, useState } from "react";
export const ContextProvider = createContext(null);

export const ContextIndD = ({ children }) => {
  const [isUnfadedIndD, setIsUnfadedIndD] = useState(false);
  const [hoverIsActiveIndD, setHoverIsActiveIndD] = useState(false);

  const value = {
    isUnfadedIndD,
    setIsUnfadedIndD,
    hoverIsActiveIndD,
    setHoverIsActiveIndD,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export const useContextIndD = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("customContextWebD undefined");
  }
  return context;
};
