import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("darkMode")) || false;
    } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem("darkMode", JSON.stringify(dark)); } catch {}
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return <DarkModeContext.Provider value={{ dark, setDark }}>{children}</DarkModeContext.Provider>;
};

export const useDark = () => useContext(DarkModeContext);
export default DarkModeContext;