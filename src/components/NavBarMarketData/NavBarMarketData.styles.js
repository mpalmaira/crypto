import styled from "styled-components";

export const MarketDataDiv = styled.div`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.mainFont};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const MarketDataItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const MarketDataItemSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProgressBarDiv = styled.div`
  width: 50px;
  margin-left: 5px;
`;
export const StyledImage = styled.img`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`;
