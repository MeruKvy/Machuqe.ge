import { MdFeedback } from "react-icons/md";
import { FaDonate, FaUserCog, FaUserFriends } from "react-icons/fa";
import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SoptionName = styled.p`
  ${tw`hidden font-iceberg transition delay-200`}
  ${(props) => css`
    color: ${props.theme.colors["textBase"]};
  `}
`;

export const Snavbar = styled.div`
  ${tw` flex flex-col items-center w-16 h-screen fixed rounded hover:w-40 hover:items-start transition-[width] duration-200 ease-[ease] `}

  &:hover ${SoptionName} {
    ${tw`block  `}
  }

  & > :last-child {
    ${tw`mt-auto mb-4`}
  }

  ${(props) => css`
    background-color: ${props.theme.colors["navbar"]};
  `}
`;

export const SlogoFrame = styled.div`
  ${tw` w-12 flex items-center justify-center mt-2 mb-4 rounded-lg p-2 `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
  `}
`;

const iconStyling = css`
  ${tw`text-3xl mr-3 ml-3`}
  color: ${(props) => props.theme.colors["primary"]};
`;

export const SsectionContainer = styled.div`
  ${tw`mt-6 flex justify-center items-center  `}
`;

export const SfaUserCog = styled(FaUserCog)`
  ${iconStyling}
`;

export const SfaUserFriends = styled(FaUserFriends)`
  ${iconStyling}
`;

export const SmdFeedback = styled(MdFeedback)`
  ${iconStyling}
`;

export const SfaDonate = styled(FaDonate)`
  ${iconStyling}
`;
