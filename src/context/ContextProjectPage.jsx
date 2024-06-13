import { createContext, useContext, useState } from "react";

export const ContextProvider = createContext(null);

export const ContextProjectPage = ({ children }) => {
  const [isFadedProjectPage, setIsFadedProjectPage] = useState(true);
  const [currentProject, setCurrentProject] = useState(null);
  const [menuVisible, setMenuVisible] = useState(true);
  const [currentProjectKind, setCurrentProjectKind] = useState("");
  const [exitIndD, setExitIndD] = useState(null);
  const [exitWebD, setExitWebD] = useState(null);

  const value = {
    isFadedProjectPage,
    setIsFadedProjectPage,
    currentProject,
    setCurrentProject,
    menuVisible,
    setMenuVisible,
    currentProjectKind,
    setCurrentProjectKind,
    exitIndD,
    setExitIndD,
    exitWebD,
    setExitWebD,
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
    throw new Error(
      "useContextProjectPage must be used within a ContextProvider"
    );
  }
  return context;
};
