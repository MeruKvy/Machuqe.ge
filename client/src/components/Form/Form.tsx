// Form.tsx
import { useContext } from "react";
import { Sform,  Slink } from "@src/components/Form/Form.styled";
import { Button, Input, Space, Switch,  } from "antd";
import { FlexContainer } from "@src/assets/global.styled";
import { ThemeContext, ThemeModes_Enum  } from "@src/providers/ThemeProvider/ThemeContext";


import MachuqeMainLarge from "../Logos/MachuqeMainLarge";

export const Form = () => {

  

  const { toggleTheme } = useContext(ThemeContext);
  return (
    <FlexContainer>
      <Sform>
        <MachuqeMainLarge />
        <Space direction="vertical" size={12} align="center" >
          <Input size="large" placeholder="username" />
          <Input size="large" placeholder="email" />
          <Input size="large" placeholder="password" />
          <Button type="primary">Join For Free</Button>
          <Slink to="/" >Login</Slink> 
          <Switch onChange={() => toggleTheme()} checkedChildren="Light" unCheckedChildren="Dark" />
        </Space>
      </Sform>
    </FlexContainer>
  );
};
