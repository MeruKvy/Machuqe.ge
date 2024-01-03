import styled, { css } from "styled-components";
import tw from "twin.macro";

export const Snavbar = styled.div`
  ${tw` flex flex-col w-20 h-screen fixed `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
  `}
`;
