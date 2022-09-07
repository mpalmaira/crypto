import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ToggleThemeRight } from "../SVG/ToggleThemeRight.svg";
import { ReactComponent as ToggleThemeLeft } from "../SVG/ToggleThemeLeft.svg";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex: 1;
`;

export const NavTopContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MarketDataContainer = styled.div`
  width: 50%;
`;
export const LeftContainer = styled.div`
  display: flex;
`;
export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.mainFont};
  font-size: 30px;
  padding: 25px 50px;
  text-decoration: none;
  font-weight: 500;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DropDownDiv = styled.div`
  margin-right: 25px;
  z-index: 1;
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
