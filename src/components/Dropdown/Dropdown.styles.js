import styled from "styled-components";

export const DropDownContainer = styled.div`
  width: 136px;
  background-color: ${(props) => props.theme.tertiary};
  height: 45px;
  border-radius: 10px;
  color: ${(props) => props.theme.mainFont};
  font-size: 17px;
  font-weight: bold;
  @media (max-width: 767px) {
    height: 40px;
    font-size: 13px;
    width: 100px;
  }
`;
export const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
  width: 136px;
  height: 45px;
  @media (max-width: 767px) {
    height: 40px;
    width: 100px;
  }
`;
export const DropDownListContainer = styled.div``;
export const DropDownList = styled.ul`
  background-color: ${(props) => props.theme.main};
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ListItem = styled.li`
  list-style: none;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90px;
`;

export const StyledSelect = styled.select`
  background-color: ${(props) => props.theme.main};
  font-size: 17px;
  color: ${(props) => props.theme.mainFont};
  border: none;
  padding: 5px 15px;
`;
export const CurrencyDiv = styled.div`
  background-color: black;
  border-radius: 30px;
  height: 34px;
  width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: lime;
  @media (max-width: 767px) {
    height: 20px;
    width: 20px;
  }
`;
