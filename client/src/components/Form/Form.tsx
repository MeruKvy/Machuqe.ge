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
      
      </Sform>
    </FlexContainer>
  );
};
