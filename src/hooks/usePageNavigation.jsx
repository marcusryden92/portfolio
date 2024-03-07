import React, { createContext, useContext, useState } from "react";

const PageNavigationContext = createContext(null);

export const PageNavProvider = ({ children }) => {
  const [isClickedAbout, setIsClickedAbout] = useState(false);
  const [isClickedWebD, setIsClickedWebD] = useState(false);
  const [isClickedIndD, setIsClickedIndD] = useState(false);

  const handleExitPage = (setHoverIsActive, setIsUnfaded) => {
    setHoverIsActive(false);
    setIsUnfaded(false);
    setTimeout(() => resetClickedStates(), 1500);
  };

  const handleClickAbout = (
    setHoverIsActiveWebD,
    setIsUnfadedWebD,
    setHoverIsActiveIndD,
    setIsUnfadedIndD
  ) => {
    if (isClickedWebD || isClickedIndD) {
      setHoverIsActiveWebD(false);
      setIsUnfadedWebD(false);

      setHoverIsActiveIndD(false);
      setIsUnfadedIndD(false);

      setTimeout(setStatesWhenClickingAbout, 1500);
    } else {
      setStatesWhenClickingAbout();
    }
  };

  const setStatesWhenClickingAbout = () => {
    setIsClickedAbout(true);
    setIsClickedWebD(false);
    setIsClickedIndD(false);
  };

  const handleClickWebD = (setHoverIsActiveIndD, setIsUnfadedIndD) => {
    if (isClickedAbout || isClickedIndD) {
      setHoverIsActiveIndD(false);
      setIsUnfadedIndD(false);
      setTimeout(setStatesWhenClickingWebD, 1500);
    } else {
      setStatesWhenClickingWebD();
    }
  };

  const setStatesWhenClickingWebD = () => {
    setIsClickedAbout(false);
    setIsClickedIndD(false);
    setIsClickedWebD(true);
  };

  const handleClickIndD = (setHoverIsActiveWebD, setIsUnfadedWebD) => {
    if (isClickedAbout || isClickedWebD) {
      setHoverIsActiveWebD(false);
      setIsUnfadedWebD(false);
      setTimeout(setStatesWhenClickingIndD, 1500);
    } else {
      setStatesWhenClickingIndD();
    }
  };

  const setStatesWhenClickingIndD = () => {
    setIsClickedAbout(false);
    setIsClickedWebD(false);
    setIsClickedIndD(true);
  };

  const resetClickedStates = () => {
    setIsClickedAbout(false);
    setIsClickedWebD(false);
    setIsClickedIndD(false);
  };

  const value = {
    handleExitPage,
    handleClickAbout,
    handleClickWebD,
    handleClickIndD,
    resetClickedStates,
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
