import styled from "styled-components";
import { List } from "../list/List";
import { ItemSettingBlock } from "./itemSettingBlock/ItemSettingBlock";
import { settingsList } from "./settingsList";

const StyledWrapper = styled.div`
  position: absolute;
  top: 52px;
  right: 32px;
  border-radius: 8px;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0px 16px 24px 0px rgba(55, 58, 83, 0.16),
    0px 4px 12px 0px rgba(36, 38, 53, 0.1),
    0px 2px 4px 0px rgba(36, 38, 53, 0.08), 0px 8px 48px 0px rgba(0, 0, 0, 0.6),
    0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
  width: 300px;
  height: 288px;
  padding: 4px;
`;

const StyledSettingsBlock = styled.div`
  overflow-y: auto;
  padding-right: 4px;
  height: 280px;

  &::-webkit-scrollbar {
    width: 2px;
    position: absolute;
    margin-right: 10px;
    right: 100px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background: #60677a;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #a9a6ae;
  }
`;

export const SettingsBlock = () => {
  return (
    <StyledWrapper>
      <StyledSettingsBlock>
        <List direction="column">
          {settingsList.map((setting) => {
            return <ItemSettingBlock key={setting.id} setting={setting} />;
          })}
        </List>
      </StyledSettingsBlock>
    </StyledWrapper>
  );
};
