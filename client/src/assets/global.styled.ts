import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle<{ theme: any }>`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

${(props) => css`
  background-color: ${props.theme.colors["primary"]};
`}

`;

export const flexContainer = styled.div``;
