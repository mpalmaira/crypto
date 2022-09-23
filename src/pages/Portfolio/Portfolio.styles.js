import styled from "styled-components";

export const MainContainer = styled.div`
  color: ${(props) => props.theme.mainFont};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 74px;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
  margin-top: 60px;
`;
export const AddAssetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AddAssetButton = styled.button`
  background-color: #06d554;
  color: ${(props) => props.theme.mainFont};
  border: none;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px 100px;
  cursor: pointer;
`;
export const StyledText = styled.span`
  font-size: 22px;
  color: ${(props) => props.theme.mainFont};
  display: flex;
  justify-content: start;
  margin-top: 41px;
  margin-bottom: 20px;
  width: 100%;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`;
