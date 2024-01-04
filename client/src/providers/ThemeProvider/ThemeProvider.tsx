import { PropsWithChildren, useState, useCallback, useEffect } from "react";
import { ConfigProvider } from "antd";
import { ThemeContext, ThemeModes_Enum } from "./ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalCss from "@src/assets/global.styled";
import "@src/assets/global.css";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeMode, setThemeMode] = useState<ThemeModes_Enum>(
    ThemeModes_Enum.LIGHT
  );

  const colors = {
    [ThemeModes_Enum.LIGHT]: {
      primary: "#413838",
      secondary: "#E9E9E9",
      textBase: "#413838",
      light: "#8C8C8C",
      navbar: "#D0CFCF"
    },
    [ThemeModes_Enum.DARK]: {
      primary: "#5C8374",
      secondary: "#222831",
      textBase: "#3E5C51",
      light: "#B6D0C7",
      navbar: "#1B2129"
    },
  };

  const antdTheme = {
    colorPrimary: colors[themeMode].primary,
    colorTextBase: colors[themeMode].textBase
  };


  const toggleTheme = useCallback(() => {
    if (themeMode === ThemeModes_Enum.LIGHT) {
      setThemeMode(ThemeModes_Enum.DARK);
      localStorage.setItem("theme_mode", ThemeModes_Enum.DARK);
    } else if (themeMode === ThemeModes_Enum.DARK) {
      setThemeMode(ThemeModes_Enum.LIGHT);
      localStorage.setItem("theme_mode", ThemeModes_Enum.LIGHT);
    }
  }, [themeMode]);

  useEffect(() => {
    if (localStorage.getItem("theme_mode")) {
      setThemeMode(localStorage.getItem("theme_mode") as ThemeModes_Enum);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, toggleTheme }}>
      <ConfigProvider theme={{
          token: antdTheme
        }}>
      <StyledThemeProvider
        theme={{ colors: colors[themeMode], mode: themeMode }}
      >
        <GlobalCss />
        {children}
      </StyledThemeProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
