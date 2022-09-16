import styled from "styled-components";
import { ReactComponent as DeleteSymbol } from "../SVG/xmark-solid.svg";
import { ReactComponent as EditSymbol } from "../SVG/edit.svg";

export const MainContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
export const AssetContainer = styled.div`
  display: flex;
`;
export const ImageContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 220px;
  width: 180px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const CoinImage = styled.div`
  background-color: ${(props) => props.theme.main};
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;
export const StyledImage = styled.img`
  height: 80px;
  width: 80px;
`;

export const CoinContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  height: 30px;
`;
export const MarketContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  width: 70em;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  padding: 30px 10px;
  margin: 15px 0px;
`;
export const CoinData = styled.div`
  padding: 20px;
`;
export const StyledData = styled.span`
  color: lime;
  margin-left: 10px;
`;
export const Styled24hChange = styled.span`
  color: ${(props) => (props.value > 0 ? "lime" : "red")};
  margin-left: 10px;
`;
export const StyledPriceChange = styled.span`
  color: ${(props) => (props.value > 0 ? "lime" : "red")};
  margin-left: 10px;
`;
export const ProgressBarData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const OutsideBar = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 10px;
  border: 1px solid black;
  border-radius: 8px;
  overflow: hidden;
  background-color: lime;
`;
export const InsideBar = styled.div`
  height: 100%;
  border-radius: 8px;
  width: ${(props) => props.width}%;
  background-color: #ffffff;
`;
export const ProgressBarDiv = styled.div`
  width: 50px;
  margin-left: 5px;
`;
export const YourCoinContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  padding: 30px 10px;
  margin-top: 15px;
  width: 70em;
`;
export const StyledDelete = styled(DeleteSymbol)`
  fill: red;
  height: 25px;
  cursor: pointer;
`;
export const StyledEdit = styled(EditSymbol)`
  height: 25px;
  cursor: pointer;
  margin-left: 10px;
`;
export const IconContainer = styled.div`
  display: flex;
`;
