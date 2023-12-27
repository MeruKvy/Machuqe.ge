import tw from "twin.macro";
import styled, {css} from "styled-components";
import { Link } from 'react-router-dom';

export const Sform = tw.form`
    flex h-4/5 flex-col items-center 
`;

export const Slink = styled(Link)`
    ${tw`border-0 bg-transparent `}
    ${(props) => css`
    color: ${props.theme.colors["primary"]};
    &:hover {
        ${(props) => css`
    color: ${props.theme.colors["light"]};
    `}
  }   
`}
`