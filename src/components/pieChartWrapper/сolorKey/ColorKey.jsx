import styled from "styled-components";
import { Flex } from "../../flex/Flex";
import { List } from "../../list/List";
import { CustomSpan } from "../../customSpan/CustomSpan";

const StyledItemList = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledCircle = styled.span`
  width: 8px;
  height: 8px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

const UpgradeCustomSpan = styled(CustomSpan)`
  font-feature-settings: "clig" off, "liga" off;
`;

const UpgratedFlex = styled(Flex)`
  padding-top: 8px;
`;

export const ColorKey = () => {
  return (
    <UpgratedFlex>
      <List direction="column" gap="16px">
        <StyledItemList>
          <StyledCircle color="#18A0FB" />
          <UpgradeCustomSpan color="#9F9F9F" fontSize="12px" lineheight="16px">
            Roles
          </UpgradeCustomSpan>
        </StyledItemList>
        <StyledItemList>
          <StyledCircle color="#ED2D95" />
          <UpgradeCustomSpan color="#9F9F9F" fontSize="12px" lineheight="16px">
            Users
          </UpgradeCustomSpan>
        </StyledItemList>
        <StyledItemList>
          <StyledCircle color="#3CDC86" />
          <UpgradeCustomSpan color="#9F9F9F" fontSize="12px" lineheight="16px">
            Policies
          </UpgradeCustomSpan>
        </StyledItemList>
      </List>
    </UpgratedFlex>
  );
};
