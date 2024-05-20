import { createContext, useContext, useEffect, useState } from "react";
export const ContextProvider = createContext(null);

export const ContextProjectPage = ({ children }) => {
  const [isFadedProjectPage, setIsFadedProjectPage] = useState(true);
  const [currentProject, setCurrentProject] = useState();
  const [goBack, setGoBack] = useState();
  const [menuVisible, setMenuVisible] = useState(true);

  const value = {
    isFadedProjectPage,
    setIsFadedProjectPage,
    currentProject,
    setCurrentProject,
    goBack,
    setGoBack,
    menuVisible,
    setMenuVisible,
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
