import styled from "styled-components";
import { ReactComponent as DeleteSymbol } from "../SVG/xmark-solid.svg";
import { ReactComponent as EditSymbol } from "../SVG/edit.svg";

export const MainContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const AssetContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ImageContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 200px;
  width: 180px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
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
  @media (max-width: 767px) {
    flex-direction: column;
    display: flex;
    align-items: center;
  }
`;
export const MarketContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  padding: 30px 10px;
  margin: 15px 0px;
  @media (max-width: 767px) {
    background-color: transparent;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const CoinData = styled.div`
  padding: 0px 20px;
  font-size: 15px;
  @media (max-width: 767px) {
    background-color: ${(props) => props.theme.secondary};
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    margin: 10px 0px;
    text-align: center;
  }
`;
export const StyledData = styled.span`
  color: lime;
  margin-left: 10px;
  font-size: 15px;
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
  @media (max-width: 767px) {
    background-color: ${(props) => props.theme.secondary};
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    margin: 10px 0px;
  }
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
  width: 100%;
  @media (max-width: 767px) {
    background-color: transparent;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
export const StyledText = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.mainFont};
  display: flex;
  justify-content: start;
  width: 100%;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`