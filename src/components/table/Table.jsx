import styled from "styled-components";
import { TableHeader } from "./tableHeader/TableHeader";
import { TableBodyList } from "./tableBodyList/tableBodyList";

const StyledTable = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;
export const Table = () => {
  return (
    <StyledTable>
      <TableHeader />
      <TableBodyList />
    </StyledTable>
  );
};
