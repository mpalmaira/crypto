import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  padding: 90px 0px;
`;
export const LineContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 15px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MainTextContainer = styled.div`
  color: ${(props) => props.theme.mainFont};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
export const BarContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 15px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BitcoinHeader = styled.p`
  font-size: 22px;
  margin:0;
  padding:0;
`;
export const StyledDate = styled.p`
  font-size: 22px;
  margin:0;
  padding:0;
`;
export const BitcoinNumber = styled.p`
  font-size: 44px;
  margin:0;
  padding:0;
`;