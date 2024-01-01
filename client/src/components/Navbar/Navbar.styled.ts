import styled, { css } from "styled-components";
import tw from "twin.macro";

const Snavbar = styled.div`
  ${tw`w-20 h-screen fixed`}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
  `}
`;
