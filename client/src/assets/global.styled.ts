import styled, { createGlobalStyle, css } from "styled-components";
import tw from "twin.macro";


export default createGlobalStyle<{ theme: any }>`
* {
  ${tw`box-border m-0 p-0 `}
} 

body {
  ${tw`transition-all transition-all duration-300 ease-in`}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
  `}
}

`;

export const FlexContainer = styled.div`
      ${tw`flex h-screen w-full items-center  justify-center`}
`
