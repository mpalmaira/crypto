import styled from "styled-components";

export const OutsideBar = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 10px;
  border: 1px solid black;
  border-radius: 8px;
  overflow: hidden;
  background-color: #2775c9;
`;
export const InsideBar = styled.div`
  height: 100%;
  border-radius: 8px;
  width: ${(props) => props.width}%;
  background-color: #ffffff;
`;
