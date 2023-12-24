import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle<{ theme: any }>`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

body {
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
  `}
}

`;

export const flexContainer = styled.div``;
