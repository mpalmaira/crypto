import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Overview } from "../SVG/overview.svg";
import { ReactComponent as Portfolio } from "../SVG/portfolio.svg";
import { ReactComponent as Summary } from "../SVG/summary.svg";
import { ReactComponent as Search } from "../SVG/Search.svg";
import { ReactComponent as SearchIcon } from "../SVG/Search.svg";
import { ReactComponent as Close } from "../SVG/xmark-solid.svg";
import { Link } from "react-router-dom";

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
  @media (max-width: 767px) {
    display: flex;
  }
`;
export const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-decoration: none;
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
`;
export const SearchMobileContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  position: absolute;
`;
export const SearchNavDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;

export const SearchMobileDiv = styled.div`
  background-color: ${(props) => props.theme.main};
  width: 80%;
  height: 40%;
  box-shadow: 0px 0px 0px 9999px #000000b0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
`;

export const SearchDiv = styled.form`
  background-color: ${(props) => props.theme.tertiary};
  width: 300px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 6px;
  color: black;
  position: relative;
`;
export const StyledSearchIcon = styled(SearchIcon)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
  }
`;
export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  padding: 9px;
  color: ${(props) => props.theme.mainFont};
  font-size: 17px;
  ::placeholder {
    color: ${(props) => props.theme.mainFont};
  }
  margin-left: 20px;
`;
export const SearchResultsDiv = styled.div`
  width: 300px;
  background-color: ${(props) => props.theme.tertiary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 66px;
  z-index: 10;
`;
export const ResultsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: ${(props) => props.theme.mainFont};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
export const ErrorMessageDiv = styled.div`
  width: 380px;
  background-color: ${(props) => props.theme.tertiary};
  border-radius: 10px;
  display: ${(props) => (props.showResults > 0 ? "flex" : " none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 66px;
  z-index: 10;
`;
export const ErrorMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: ${(props) => props.theme.mainFont};
`;
export const StyledNameandIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledName = styled.div`
  margin-left: 8px;
`;
export const StyledClose = styled(Close)`
  fill: ${(props) => props.theme.mainFont};
  cursor: pointer;
  path {
    fill: ${(props) => props.theme.mainFont};
  }
`;
export const StyledTop = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0px;
`;

export const CloseDiv = styled.div`
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledSpan = styled.div`
  color: ${(props) => props.theme.mainFont};
  font-size: 22px;
  margin-left: 15px;
`;
