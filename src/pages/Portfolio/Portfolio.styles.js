import styled from "styled-components";

export const MainContainer = styled.div`
  color: ${(props) => props.theme.mainFont};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  flex-direction: column;
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
`;
export const StyledText = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.mainFont};
  display: flex;
  justify-content: start;
  width: 80%;
`;
