import React, { createContext } from "react";
import { theme } from "./Theme";

type themeContextProviderProps = {
  children: React.ReactNode;
};

export const context = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: themeContextProviderProps) => {
  return <context.Provider value={theme}>{children}</context.Provider>;
};
