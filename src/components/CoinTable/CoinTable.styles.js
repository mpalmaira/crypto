import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  justify-content: center;
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  color: ${(props) => props.theme.mainFont};
  width: 90%;
  text-align: center;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 20px;
  padding: 20px;
  border-collapse: collapse;
`;

export const TableHeadRank = styled.th`
  text-align: left;
  width: 5%;
  padding: 20px;
`;
export const TableHeadName = styled.th`
  text-align: left;
  width: 15%;
`;
export const TableHead = styled.th`
  width: 10%;
  text-align: center;
`;
