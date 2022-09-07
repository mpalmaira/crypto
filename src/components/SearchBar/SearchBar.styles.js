import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../SVG/Search.svg";
import { Link } from "react-router-dom";

export const SearchDiv = styled.form`
  background-color: ${(props) => props.theme.tertiary};
  width: 380px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 6px;
  margin-right: 25px;
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
  width: 380px;
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
  padding: 10px
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
`
export const ErrorMessageDiv = styled.div`
width: 380px;
background-color: ${(props) => props.theme.tertiary};
border-radius: 10px;
display: ${props => props.showResults  > 0 ? "flex" : " none"};
align-items: center;
justify-content: center;
position: absolute;
top: 66px;
z-index: 10;
`
export const ErrorMessage = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 10px;
color: ${(props) => props.theme.mainFont};
`;

