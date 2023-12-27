// Form.tsx
import { useContext } from "react";
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

export const Form = ({
  type,
  handleSubmit,
}: {
  type: FormType_Enum;
  handleSubmit: () => void;
}) => {
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  const themeIsLight = themeMode === ThemeModes_Enum.LIGHT;

  return (
    <FlexContainer>
      <Sform>
        <MachuqeMainLarge />
        <Space direction="vertical" size={12} align="center">
          {type === FormType_Enum.REGISTER ? (
            <Input size="large" placeholder="username" />
          ) : (
            ""
          )}
          <Input size="large" placeholder="email" />
          <Input size="large" placeholder="password" />
          <Button onSubmit={() => handleSubmit()} type="primary">
            Join For Free
          </Button>
          {type === FormType_Enum.REGISTER ? (
            <Slink to="/auth/login">Login</Slink>
          ) : (
            <Slink to="/auth/register">Register</Slink>
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
