import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  z-index: 9;
  padding: 0 24px;
  height: 100%;
  background-color: ${props=>props.theme.secondary};
`;
