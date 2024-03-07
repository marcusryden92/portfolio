import React, { createContext, useContext, useState } from "react";

const PageNavigationContext = createContext(null);

export const PageNavProvider = ({ children }) => {
  const [isClickedAbout, setIsClickedAbout] = useState(false);
  const [isClickedWebD, setIsClickedWebD] = useState(false);
  const [isClickedIndD, setIsClickedIndD] = useState(false);

  const handleExitPage = (setHoverIsActive, setIsUnfaded) => {
    setHoverIsActive(false);
    setIsUnfaded(false);
    setTimeout(() => handleClearPages(), 1500);
  };

  const handleClickAbout = () => {
    setIsClickedAbout(true);
    setIsClickedWebD(false);
    setIsClickedIndD(false);
  };

  const handleClickWebD = () => {
    setIsClickedAbout(false);
    setIsClickedWebD(true);
    setIsClickedIndD(false);
  };

  const handleClickIndD = () => {
    setIsClickedAbout(false);
    setIsClickedWebD(false);
    setIsClickedIndD(true);
  };

  const handleClearPages = () => {
    setIsClickedAbout(false);
    setIsClickedWebD(false);
    setIsClickedIndD(false);
  };

  const value = {
    handleExitPage,
    handleClickAbout,
    handleClickWebD,
    handleClickIndD,
    handleClearPages,
    isClickedAbout,
    setIsClickedAbout,
    isClickedWebD,
    setIsClickedWebD,
    isClickedIndD,
    setIsClickedIndD,
  };

  return (
    <PageNavigationContext.Provider value={value}>
      {children}
    </PageNavigationContext.Provider>
  );
};

// Hook to consume the context
export const usePageNav = () => {
  const context = useContext(PageNavigationContext);
  if (!context) {
    throw new Error("usePageNav must be used within a PageNavigationProvider");
  }
  return context;
};
