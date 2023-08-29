import { List } from "../list/List";
import styled from "styled-components";
import { CustomCheckbox } from "../customCheckbox/CustomCheckbox";
import { Flex } from "../flex/Flex";
import { CustomSpan } from "../customSpan/CustomSpan";
import { selectedChartsData } from "./selectedChartsData";

const StyledItem = styled.li`
  display: flex;
  gap: 16px;
  width: 136px;
`;
export const SelectedCharts = () => {
  return (
    <List gap="16px" direction="column">
      {selectedChartsData.map((item) => {
        return (
          <StyledItem key={item.id}>
            <CustomCheckbox
              defaultChecked={item.defaultChecked}
              color={item.color}
            />
            <Flex direction="column">
              <CustomSpan fontSize="13px" lineheight="20px">
                Rating 94%
              </CustomSpan>
              <CustomSpan
                fontSize="11px"
                lineheight="12px"
                color="rgba(255, 255, 255, 0.60)"
              >
                116 sales
              </CustomSpan>
            </Flex>
          </StyledItem>
        );
      })}
    </List>
  );
};
