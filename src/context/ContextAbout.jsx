import { createContext, useContext, useEffect, useState } from "react";
export const ContextProvider = createContext(null);

export const ContextAbout = ({ children }) => {
  const [isFadedAbout, setIsFadedAbout] = useState(true);
  const [hoverIsActiveAbout, setHoverIsActiveAbout] = useState(false);

  const value = {
    isFadedAbout,
    setIsFadedAbout,
    hoverIsActiveAbout,
    setHoverIsActiveAbout,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export const useContextAbout = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("customContextAbout undefined");
  }
  return context;
};
