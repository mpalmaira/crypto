import styled from "styled-components";

export const DropDownContainer = styled("div")`
  width: 136px;
  background-color: ${(props) => props.theme.tertiary};
  height: 50px;
  border-radius: 10px;
  color: ${(props) => props.theme.mainFont};
  font-size: 17px;
  font-weight: bold;
`;
export const DropDownHeader = styled("div")`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;
`;
export const DropDownListContainer = styled("div")``;
export const DropDownList = styled("ul")`
  background-color: ${(props) => props.theme.tertiary};
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ListItem = styled("li")`
  list-style: none;
  padding: 5px;
`;
