import React, { createContext, useContext, useState } from "react";

const PageNavigationContext = createContext(null);

export const PageNavProvider = ({ children }) => {
  const [isClickedAbout, setIsClickedAbout] = useState(false);
  const [isClickedWebD, setIsClickedWebD] = useState(false);
  const [isClickedIndD, setIsClickedIndD] = useState(false);
  const [isClickedProjectPage, setIsClickedProjectPage] = useState(false);

  const handleExitPage = (setHoverIsActive, setIsUnfaded) => {
    if (setHoverIsActive) {
      setHoverIsActive(false);
    }
    if (setIsUnfaded) {
      setIsUnfaded(false);
    }

    setTimeout(() => resetClickedStates(), 1500);
  };

  // Clicking PROJECT PAGE

  const handleClickProjectPage = (
    setHoverIsActiveWebD,
    setIsUnfadedWebD,
    setHoverIsActiveIndD,
    setIsUnfadedIndD,
    setIsFadedAbout
  ) => {
    if (isClickedWebD) {
      setHoverIsActiveWebD(false);
      setIsUnfadedWebD(false);

      setTimeout(() => {
        setStatesWhenClickingProjectPage();
      }, 1500);
    } else if (isClickedIndD) {
      setHoverIsActiveIndD(false);
      setIsUnfadedIndD(false);

      setTimeout(() => {
        setStatesWhenClickingProjectPage();
      }, 1500);
    } else if (isClickedAbout) {
      setIsFadedAbout(true);
      setTimeout(setStatesWhenClickingProjectPage, 1000);
    } else {
      setStatesWhenClickingProjectPage();
    }
  };

  const setStatesWhenClickingProjectPage = () => {
    resetClickedStates();
    setIsClickedProjectPage(true);
  };

  // Clicking ABOUT

  const handleClickAbout = (
    setHoverIsActiveWebD,
    setIsUnfadedWebD,
    setHoverIsActiveIndD,
    setIsUnfadedIndD,
    setIsFadedProjectPage
  ) => {
    if (isClickedWebD) {
      setHoverIsActiveWebD(false);
      setIsUnfadedWebD(false);

      setTimeout(() => {
        setStatesWhenClickingAbout();
      }, 1500);
    } else if (isClickedProjectPage) {
      setIsFadedProjectPage(true);
      setTimeout(setStatesWhenClickingAbout, 1000);
    } else if (isClickedIndD) {
      setHoverIsActiveIndD(false);
      setIsUnfadedIndD(false);

      setTimeout(() => {
        setStatesWhenClickingAbout();
      }, 1500);
    } else {
      setStatesWhenClickingAbout();
    }
  };

  const setStatesWhenClickingAbout = () => {
    resetClickedStates();
    setIsClickedAbout(true);
  };

  // Clicking WEBDESIGN

  const handleClickWebD = (
    setHoverIsActiveIndD,
    setIsUnfadedIndD,
    setIsFadedAbout,
    setIsFadedProjectPage
  ) => {
    if (isClickedAbout) {
      setIsFadedAbout(true);
      setTimeout(setStatesWhenClickingWebD, 1000);
    } else if (isClickedProjectPage) {
      setIsFadedProjectPage(true);
      setTimeout(setStatesWhenClickingWebD, 1000);
    } else if (isClickedIndD) {
      setHoverIsActiveIndD(false);
      setIsUnfadedIndD(false);

      setTimeout(setStatesWhenClickingWebD, 1000);
    } else {
      setStatesWhenClickingWebD();
    }
  };

  const setStatesWhenClickingWebD = () => {
    resetClickedStates();
    setIsClickedWebD(true);
  };

  // Clicking INDUSTRIAL DESIGN

  const handleClickIndD = (
    setHoverIsActiveWebD,
    setIsUnfadedWebD,
    setIsFadedAbout,
    setIsFadedProjectPage
  ) => {
    if (isClickedAbout) {
      setIsFadedAbout(true);
      setTimeout(setStatesWhenClickingIndD, 1000);
    } else if (isClickedProjectPage) {
      setIsFadedProjectPage(true);
      setTimeout(setStatesWhenClickingIndD, 1000);
    } else if (isClickedWebD) {
      setHoverIsActiveWebD(false);
      setIsUnfadedWebD(false);

      setTimeout(setStatesWhenClickingIndD, 1000);
    } else {
      setStatesWhenClickingIndD();
    }
  };

  const setStatesWhenClickingIndD = () => {
    resetClickedStates();
    setIsClickedIndD(true);
  };

  // RESET

  const resetClickedStates = () => {
    setIsClickedAbout(false);
    setIsClickedWebD(false);
    setIsClickedIndD(false);
    setIsClickedProjectPage(false);
  };

  const value = {
    handleExitPage,
    handleClickAbout,
    handleClickWebD,
    handleClickIndD,
    handleClickProjectPage,
    resetClickedStates,
    isClickedAbout,
    setIsClickedAbout,
    isClickedWebD,
    setIsClickedWebD,
    isClickedIndD,
    setIsClickedIndD,
    isClickedProjectPage,
    setIsClickedProjectPage,
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
