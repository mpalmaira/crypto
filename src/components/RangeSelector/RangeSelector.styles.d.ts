import styled from "styled-components";

export const Button = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid lime;
  border-radius: 20px;
  margin: 0px 8px;
  background-color: ${(props) => props.selected && "lime"};
`;
export const Container = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
