import styled from "styled-components";
import { ReactComponent as Stacklayer } from "../../components/SVG/stack-layer.svg";
import { ReactComponent as NewTab } from "../../components/SVG/newtab.svg";
import { ReactComponent as CopyLink } from "../../components/SVG/copy-link.svg";

export const MainContainer = styled.div`
  color: ${(props) => props.theme.mainFont};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
`;
export const YourSummary = styled.div`
  display: flex;
  width: 100%;
  font-size: 22px;
  margin-bottom: 20px;
`;
export const CoinContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
export const CoinLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  justify-content: space-between;
  align-items: space-between;
`;
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
export const StyledNewTab = styled(NewTab)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
  }
  cursor: pointer;
`;
export const CoinLink = styled.a`
  margin-left: 20px;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props) => props.theme.mainFont};
  :hover {
    text-decoration: underline;
  }
`;
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
export const StackImgDiv = styled.div``;
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  display: flex;
  flex-direction: column;
`;
export const DescriptionText = styled.div`
  display: flex;
  width: 100%;
  font-size: 22px;
  margin: 20px 0px;
`;
export const DescriptionDiv = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  text-align: center;
  padding: 30px;
  border-radius: 10px;
`;
export const CoinDescription = styled.span`
  font-size: 19px;
  color: ${(props) => props.theme.mainFont};
  a {
    color: lime;
    text-decoration: none;
  }
  line-height: 1.5;
`;
export const MainLinksDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`;

export const LinkDiv = styled.div`
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  width: 380px;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
`;

export const StyledCopyLink = styled(CopyLink)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
  }
  cursor: pointer;
`;
export const ToolTip = styled.span`
  color: ${(props) => props.theme.mainFont};
  background-color: ${(props) => props.theme.secondary};
  padding: 5px;
  border-radius: 10px;
`;
export const CurrencyConverterDiv = styled.div`
  width: 50%;
`;
