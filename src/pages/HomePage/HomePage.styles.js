import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px;
  @media (max-width: 767px) {
    padding: 0px 24px;
  }
`;
export const StyledHeading = styled.span`
  margin-top: 31px;
  margin-bottom: 37px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.mainFont};
  font-size: 22px;
`;
