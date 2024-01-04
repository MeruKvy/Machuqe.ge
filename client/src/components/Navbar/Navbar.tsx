import React, { useContext } from "react";
import { Snavbar } from "./Navbar.styled";
import { SsectionContainer } from "./Navbar.styled";
import { Switch } from "antd";
import { SlogoFrame } from "./Navbar.styled";
import {
  SfaUserCog,
  SfaUserFriends,
  SmdFeedback,
  SfaDonate,
} from "./Navbar.styled";
import { SoptionName } from "./Navbar.styled";
import {
  ThemeContext,
  ThemeModes_Enum,
} from "@src/providers/ThemeProvider/ThemeContext";
import HamburgerMenu from "../../assets/Logos/MachuqeHamburgerMenu";

export function Navbar() {
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  const themeIsLight = themeMode === ThemeModes_Enum.LIGHT;

  return (
    <Snavbar>
      <SlogoFrame>
        <HamburgerMenu />
      </SlogoFrame>
      <SsectionContainer>
        <SfaUserCog />
        <SoptionName>User Settings</SoptionName>
      </SsectionContainer>
      <SsectionContainer>
        <SfaUserFriends />
        <SoptionName>Friends</SoptionName>
      </SsectionContainer>
      <SsectionContainer>
        <SmdFeedback />
        <SoptionName>Send Feedback</SoptionName>
      </SsectionContainer>
      <SsectionContainer>
        <SfaDonate />
        <SoptionName>donate to coder</SoptionName>
      </SsectionContainer>

      <Switch
        defaultChecked={themeIsLight}
        onChange={() => toggleTheme()}
        checkedChildren="Light"
        unCheckedChildren="Dark"
      />
    </Snavbar>
  );
}
