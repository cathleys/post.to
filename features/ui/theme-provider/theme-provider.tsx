import React, { createContext, useState } from "react";
import { Theme } from "@styles/theme";

type ThemeContextProps = {
  children: React.ReactNode;
};

const defaultContext = {
  mode: "light",
  toggle: () => {},
};

export const ThemeContext = createContext(defaultContext);

export function ThemeProvider({ children }: ThemeContextProps) {
  const [mode, setMode] = useState(defaultContext.mode);

  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggle,
      }}
    >
      <Theme className={`theme ${mode}`}>{children}</Theme>
    </ThemeContext.Provider>
  );
}
