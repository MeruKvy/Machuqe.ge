import styled, { css } from "styled-components";

export const Slogo = styled.svg`
  ${(props) => css`
    fill: ${props.theme.colors["primary"]}
  `}
`;
