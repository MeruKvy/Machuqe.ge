import React, {useContext} from "react";
import { Snavbar } from "./Navbar.styled";
import { FaUserCog } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { FaDonate } from "react-icons/fa";
import { Switch } from "antd";
import {
  ThemeContext,
  ThemeModes_Enum,
} from "@src/providers/ThemeProvider/ThemeContext";


export function Navbar() {
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  const themeIsLight = themeMode === ThemeModes_Enum.LIGHT;

  return (
    <Snavbar>
      <FaUserCog size={50} />
      <FaUserFriends size={50} />
      <MdFeedback size={50} />
      <FaDonate size={50} />
      <Switch
        defaultChecked={themeIsLight}
        onChange={() => toggleTheme()}
        checkedChildren="Light"
        unCheckedChildren="Dark"
      />
    </Snavbar>
  );
}
