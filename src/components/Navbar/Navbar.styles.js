import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../SVG/Search.svg";
import { ReactComponent as ToggleThemeRight } from "../SVG/ToggleThemeRight.svg";
import { ReactComponent as ToggleThemeLeft } from "../SVG/ToggleThemeLeft.svg";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
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

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  padding: 8px;
  color: ${(props) => props.theme.mainFont};
  font-size: 17px;
  ::placeholder {
    color: ${(props) => props.theme.mainFont};
  }
`;
export const SearchDiv = styled.div`
  background-color: ${(props) => props.theme.tertiary};
  width: 380px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 6px;
  margin-right: 25px;
  color: black;
`;

export const DropDownDiv = styled.div`
  margin-right: 25px;
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
export const StyledSearchIcon = styled(SearchIcon)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
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
