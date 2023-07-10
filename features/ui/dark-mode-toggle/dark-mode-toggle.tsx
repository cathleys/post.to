import { useContext } from "react";
import * as D from "./dark-mode-toggle.style";
import { ThemeContext } from "@features/ui/theme-provider";

export type SwitchProps = {
  toggleTheme: () => void;
  isToggled: boolean;
};

export const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <D.Container onClick={toggle}>
      <D.Icon>🌙</D.Icon>
      <D.Icon>🔆</D.Icon>
      <D.Ball style={mode === "light" ? { left: "2px" } : { right: "2px" }} />
    </D.Container>
  );
};
