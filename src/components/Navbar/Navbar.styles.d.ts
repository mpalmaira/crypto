import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as ToggleThemeRight } from "../SVG/ToggleThemeRight.svg";
import { ReactComponent as ToggleThemeLeft } from "../SVG/ToggleThemeLeft.svg";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
`;

export const NavTopContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 24px;
  @media (max-width: 767px) {
    padding: 0px 10px;
  }
`;
export const MarketDataContainer = styled.div`
  width: 906px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  margin-left: 95px;
  @media (max-width: 767px) {
    margin: 0;
  }
`;
export const StyledLink = styled(NavLink)`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.mainFont};
  font-size: 22px;
  text-decoration: none;
  font-weight: 500;
  padding: 19px 51px;
  border-radius: 10px;
  &.${(props) => props.activeClassName} {
    background-color: ${(props) => props.theme.tertiary};
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DropDownDiv = styled.div`
  margin-right: 25px;
  z-index: 1;
  @media (max-width: 767px) {
    margin-right: 7px;
  }
`;

export const ToggleThemeLeftDiv = styled.div`
  transform: rotate(90deg);
  margin-right: -13px;
`;
export const ToggleThemeRigtDiv = styled.div`
  transform: rotate(90deg);
  opacity: 50%;
`;
export const ToggleThemeLogo = styled.div`
  display: flex;
  algin-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.tertiary};
  padding: 15px 10px;
  border-radius: 10px;
  margin-right: 25px;
  cursor: pointer;
  @media (max-width: 767px) {
    padding: 11px 8px;
    margin-right: 0px;
  }
`;

export const StyledToggleThemeLeft = styled(ToggleThemeLeft)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
  }
`;
export const StyledToggleThemeRight = styled(ToggleThemeRight)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
  }
`;
export const SearchBarDiv = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
export const StyledHeader = styled.h1`
  color: ${(props) => props.theme.mainFont};
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
`;
