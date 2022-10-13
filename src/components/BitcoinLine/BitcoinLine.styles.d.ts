import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 400px;
  }
  @media (max-width: 1200px) {
    width: 450px;
  }
  @media (max-width: 1100px) {
    width: 380px;
  }
  @media (max-width: 950px) {
    width: 300px;
  }
`;
