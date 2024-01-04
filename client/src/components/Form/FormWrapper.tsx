import { FlexContainer } from "@src/assets/global.styled";
import { Sform } from "./Form.styled";
import { ReactNode } from "react";

import MachuqeMainLarge from "../../assets/Logos/MachuqeMainLarge";

export const FormWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <FlexContainer>
      <Sform>
        <MachuqeMainLarge />
        {children}
      </Sform>
    </FlexContainer>
  );
};
