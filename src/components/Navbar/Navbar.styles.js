import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../SVG/Search.svg";
import { ReactComponent as ToggleThemeRight } from "../SVG/ToggleThemeRight.svg";
import { ReactComponent as ToggleThemeLeft } from "../SVG/ToggleThemeLeft.svg";

export const NavContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
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
  background-color: ${(props) => props.theme.main};
  width: 380px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 6px;
  margin-right: 25px;
  color: black;
`;

export const DollarSignDiv = styled.div`
  background-color: black;
  border-radius: 30px;
  height: 34px;
  width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DropDownDiv = styled.div`
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  width: 136px;
  height: 50px;
  margin-right: 25px;
  flex: 1;
`;

export const ColoredCurrency = styled.p`
  color: ${(props) => props.theme.mainFont};
  font-weight: 500;
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
  background-color: ${(props) => props.theme.main};
  padding: 18px 10px;
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
