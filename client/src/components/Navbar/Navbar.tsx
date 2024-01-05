import React, { useContext } from "react";
import {
  Snavbar,
  SsectionContainer,
  SlogoFrame,
  SiconWrapper,
} from "./Navbar.styled";
import { Switch } from "antd";
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
        <SiconWrapper>
          <SfaUserCog />
        </SiconWrapper>
        <SoptionName>User Settings</SoptionName>
      </SsectionContainer>
      <SsectionContainer>
        <SiconWrapper>
          <SfaUserFriends />
        </SiconWrapper>
        <SoptionName>Friends</SoptionName>
      </SsectionContainer>
      <SsectionContainer>
        <SiconWrapper>
          <SmdFeedback />
        </SiconWrapper>
        <SoptionName>Send Feedback</SoptionName>
      </SsectionContainer>
      <SsectionContainer>
        <SiconWrapper>
          <SfaDonate />
        </SiconWrapper>
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
