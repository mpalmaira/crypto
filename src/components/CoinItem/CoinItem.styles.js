import styled from "styled-components";
import { Link } from "react-router-dom";

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
  text-align: center;
`;

export const TableItem = styled.td`
  text-align: center;
  padding: 40px 0px;
`;
export const TableRow = styled.tr`
  border-bottom: 0.5px solid ${(props) => props.theme.mainTableBorder};
  padding: 20px;
`;
export const CoinSymbol = styled.td`
  text-align: center;
`;
export const CoinRank = styled.td`
  text-align: left;
  padding: 20px;
`;
export const TableCoinChart = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;
export const ArrowWrapper = styled.div`
  text-align: center;
`;
export const TableItemNum = styled.span`
  color: ${(props) => (props.value > 0 ? "lime" : "red")};
`;
export const StyledArrow = styled.span``;

export const ConvertedNumberDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: -5px;
`;
export const ProgressandConvertedDiv = styled.div`
  padding: 0px 10px;
`;
export const ProgressBarContainer = styled.div``;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.mainFont};
  text-decoration: none;
  width: 100%;
  :hover {
    text-decoration: underline;
  }
`;
