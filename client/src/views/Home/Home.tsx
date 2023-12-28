import {  useContext } from "react";
import { Switch } from "antd";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { SHome } from "./Home.styled";
import { ThemeContext, ThemeModes_Enum } from "@src/providers/ThemeProvider/ThemeContext";

export function Home() {
  const { toggleTheme, themeMode } = useContext(ThemeContext);

  const themeIsLight = themeMode === ThemeModes_Enum.LIGHT;

  return (
    <SHome>
      <Switch
        defaultChecked={themeIsLight}
        onChange={() => toggleTheme()}
        checkedChildren="Light"
        unCheckedChildren="Dark"
      />
    </SHome>
  );
}
