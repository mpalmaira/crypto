import styled from "styled-components";
import { ReactComponent as Stacklayer } from "../../components/SVG/stack-layer.svg";

export const MainContainer = styled.div`
  color: ${(props) => props.theme.mainFont};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CoinContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
`;
export const CoinLeft = styled.div`
display: flex;
flex-direction: column;
height: 380px;
justify-content: space-between;
align-items: space-between;
`
export const CoinImageContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 300px;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
`;
export const CoinImage = styled.div`
  background-color: ${(props) => props.theme.main};
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const CoinName = styled.span`
  font-size: 25px;
`;
export const CoinLinkDiv = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  padding: 20px;
`;
export const CoinLink = styled.span`
  margin-left: 20px;
`
export const CoinMiddle = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 380px;
  width: 464px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;
export const CoinPrice = styled.span`
  font-size: 44px;
`;
export const CoinPercentage = styled.span`
  color: ${(props) => (props.value > 0 ? "lime" : "red")};
  font-size: 19px;
  display: flex;
  align-items: center;
  padding: 20px;
`;
export const CoinTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Profit = styled.div`
  font-size: 18px;
  margin-top: -30px;
`;
export const ProfitGain = styled.span`
  color: lime;
  font-size: 19px;
`;
export const ProfitLoss = styled.span`
  color: red;
  font-size: 19px;
`;
export const Stackedimg = styled(Stacklayer)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
  }
`;
export const StackImgDiv = styled.div`
  margin: -30px 0;
`;
export const ATHDiv = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
`;
export const ATH = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;
export const ATLDiv = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-top: -40px;
`;
export const ATL = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;
export const CoinRight = styled.div`
  background-color: ${(props) => props.theme.secondary};
  padding: 20px 40px;
  border-radius: 10px;
  height: 380px;
`;
export const CoinRightTop = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Plus = styled.div`
  background-color: #2172e5;
  color: white;
  height: 20px;
  width: 20px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 10px;
`;
export const CoinRightNum = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.mainFont};
  display: flex;
  margin-top: 10px;
`;
export const CoinRightMiddle = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;
