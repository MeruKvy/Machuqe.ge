// Form.tsx
import { useContext, useState, ChangeEvent } from "react";
import { Sform, Slink } from "@src/components/Form/Form.styled";
import { Button, Input, Space, Switch } from "antd";
import { FlexContainer } from "@src/assets/global.styled";
import {
  ThemeContext,
  ThemeModes_Enum,
} from "@src/providers/ThemeProvider/ThemeContext";

import MachuqeMainLarge from "../Logos/MachuqeMainLarge";

export enum FormType_Enum {
  LOGIN = "login",
  REGISTER = "register",
}

export interface userObjProps {
  email: string;
  password: string;
  username: string;
}

export const Form = ({
  type,
  handleSubmit,
}: {
  type: FormType_Enum;
  handleSubmit: (Data: userObjProps) => void;
}) => {
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  const themeIsLight = themeMode === ThemeModes_Enum.LIGHT;
  const isRegisterType = type === FormType_Enum.REGISTER;
  const [userData, setUserData] = useState<userObjProps>({
    email: "",
    password: "",
    username: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(userData);
  };

  return (
    <FlexContainer>
      <Sform>
        <MachuqeMainLarge />
        <Space direction="vertical" size={12} align="center">
          {isRegisterType ? (
            <Input
              size="large"
              placeholder="username"
              value={userData.username}
              name="username"
              onChange={handleInputChange}
            />
          ) : (
            ""
          )}
          <Input
            size="large"
            placeholder="email"
            value={userData.email}
            name="email"
            onChange={handleInputChange}
          />
          <Input
            size="large"
            placeholder="password"
            value={userData.password}
            name="password"
            onChange={handleInputChange}
          />
          <Button
            onSubmit={() => {
              handleSubmit(userData);
            }}
            type="primary"
          >
            {isRegisterType ? "Join For Free" : "Login"}
          </Button>
          {isRegisterType ? (
            <Slink to="/login">Login</Slink>
          ) : (
            <Slink to="/register">Register</Slink>
          )}
          <Switch
            defaultChecked={themeIsLight}
            onChange={() => toggleTheme()}
            checkedChildren="Light"
            unCheckedChildren="Dark"
          />
        </Space>
      </Sform>
    </FlexContainer>
  );
};
