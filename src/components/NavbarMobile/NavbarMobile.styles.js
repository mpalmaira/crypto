import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Overview } from "../SVG/overview.svg";
import { ReactComponent as Portfolio } from "../SVG/portfolio.svg";
import { ReactComponent as Summary } from "../SVG/summary.svg";
import { ReactComponent as Search } from "../SVG/Search.svg";

export const MainContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  bottom: 0;
  background-color: ${(props) => props.theme.secondary};
  position: fixed;
  z-index: 10;
  display: none;
  @media(max-width: 767px){
    display: flex;
  }
`;
export const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  &.${props => props.activeClassName} {
    background-color: lime;
  }
`;
export const StyledText = styled.span`
  color: ${(props) => props.theme.mainFont};
  font-size: 15px;
`;
export const StyledOverview = styled(Overview)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
  }
`;
export const StyledPortfolio = styled(Portfolio)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
  }
`;
export const StyledSummary = styled(Summary)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
  }
`;
export const StyledSearch = styled(Search)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
  }
`;
export const IconDiv = styled.div`
  height: 30px;
`
