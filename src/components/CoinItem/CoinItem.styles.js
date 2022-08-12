import styled from "styled-components";

export const StyledCoinRow = styled.td`
  color: ${(props) => props.theme.mainFont};
  font-size: 19px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const CoinIcon = styled.img`
  width: 34px;
  height: 34px;
  margin: 0 5px;
`;

export const TableItem = styled.td`
  text-align: center;
  margin-left: 80px;
`;
export const TableRow = styled.tr`
  display: flex;
  align-items:center;
  font-size: 19px;
`
export const CoinSymbol = styled.td`
    padding-left: 35px
`