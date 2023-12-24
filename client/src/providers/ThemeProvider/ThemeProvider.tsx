import { PropsWithChildren, useState, useCallback, useEffect } from "react";
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
      primary: "#514444",
      secondary: "#E9E9E9",
      border: "#fff"
      

    },
    [ThemeModes_Enum.DARK]: {
      primary: "#8C8C8C",
      secondary: "#222831",
      border: "#858181"

    },
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
      <StyledThemeProvider
        theme={{ colors: colors[themeMode], mode: themeMode }}
      >
        <GlobalCss />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
