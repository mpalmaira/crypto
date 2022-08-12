import styled from "styled-components";

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  color: ${(props) => props.theme.mainFont};
  text-align: center;
  padding: 50px;
  background-color: ${(props) => props.theme.secondary};
`;

export const TheadNumandName = styled.th`
  display: flex;
  justify-content: space-between;
  width: 50%;
  font-size: 18px;
`;
export const THeadRest = styled.th`
  width: 50%;
`;
