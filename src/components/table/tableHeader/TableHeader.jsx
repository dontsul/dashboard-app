import styled from "styled-components";
import { Flex } from "../../flex/Flex";
import { CustomSpan } from "../../customSpan/CustomSpan";
import { tableHeaderInfo } from "./tableHeaderInfo";
import { v4 as uuidv4 } from "uuid";

const StyledTableHeader = styled.div`
  display: grid;
  grid-template-columns: 220px 220px 80px 80px 80px 160px 80px 80px 80px 72px;
  gap: 60px;
  padding: 0 32px;
`;
export const TableHeader = () => {
  return (
    <StyledTableHeader>
      {tableHeaderInfo.map(({ text, justify }) => {
        return (
          <Flex key={uuidv4()} justify={justify}>
            <CustomSpan
              fontSize="11px"
              color="rgba(255, 255, 255, 0.60)"
              fontWeight={500}
              lineheight="12px"
            >
              {text}
            </CustomSpan>
          </Flex>
        );
      })}
    </StyledTableHeader>
  );
};
// color: rgba(255, 255, 255, 0.60);
// font-family: Metropolis;
// font-size: 11px;
// font-style: normal;
// font-weight: 500;
// line-height: 12px; /* 109.091% */
