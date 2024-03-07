import { createContext, useContext, useEffect, useState } from "react";
export const ContextProvider = createContext(null);

export const NavContextProvider = ({ children }) => {
  const [isClickedAbout, setIsClickedAbout] = useState(false);
  const [isClickedWebD, setIsClickedWebD] = useState(false);
  const [isClickedIndD, setIsClickedIndD] = useState(false);

  const value = {
    isClickedAbout,
    setIsClickedAbout,
    isClickedWebD,
    setIsClickedWebD,
    isClickedIndD,
    setIsClickedIndD,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("customContext undefined");
  }
  return context;
};
