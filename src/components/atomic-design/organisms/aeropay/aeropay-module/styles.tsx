import styled, { css } from "styled-components";
import { fadeIn } from "../../../../ui/animations/pulse";
import { DropdownI } from "../aeropay-dropdown/styles";

export const Content = styled.div<DropdownI>`
  width: 25%;
  border: 1px solid ${({ theme }) => theme.color.neutral.grey300};
  position: absolute;
  right: 0;
  display: none;
  ${({ show }) => (show ? `height: auto; display: inherit;` : "height: 0")};
  animation: ${({ fade }) =>
    fade &&
    css`
      ${fadeIn} .1s linear
    `};

  z-index: 999;
  background-color: ${({ theme }) => theme.color.neutral.white};
  border-radius: ${({ theme }) => theme.border.radius16};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.elevation1.hover};
  margin-top: ${({ theme }) => theme.spacing(4.5)};

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    width: 30%;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(5)};
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.grey300};
`;

export const Body = styled.div`
  padding: ${({ theme }) => theme.spacing(5)};
`;
