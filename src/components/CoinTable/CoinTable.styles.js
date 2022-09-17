import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  justify-content: center;
  width: 100%;
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  color: ${(props) => props.theme.mainFont};
  width: 100%;
  text-align: center;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 20px;
  padding: 30px;
  border-collapse: collapse;
`;

export const TableHeadRank = styled.th`
  text-align: left;
  width: 5%;
  padding: 20px;
`;
export const TableHeadName = styled.th`
  text-align: left;
  width: 8%;
`;
export const TableHead = styled.th`
  width: 5%;
  text-align: center;
`;
