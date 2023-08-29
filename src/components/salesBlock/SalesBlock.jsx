import styled from "styled-components";
import { Flex } from "../flex/Flex";
// import { CustomSpan } from "../customSpan/CustomSpan";
import { SubTitle } from "../subTitle/SubTitle";
// import { CustomImage } from "../customImage/CustomImage";
import { CustomIcon } from "../customIcon/CustomIcon";
import infoIcon from "../../assets/sales/info.svg";
import { ToggleSettingsBtn } from "../toggleSettingsBtn/ToggleSettingsBtn";
import { useState } from "react";
import { Table } from "../table/Table";
import { SettingsBlock } from "../settingsBlock/SettingsBlock";

const StyledSalesBlock = styled.div`
  position: relative;
  padding: 24px 0 20px 0;
  width: 1756px;
  height: 480px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const SalesBlock = () => {
  const [activeSettings, setActiveSettings] = useState(false);
  const toggleSettings = () => {
    setActiveSettings((prevState) => !prevState);
  };
  return (
    <StyledSalesBlock>
      <Flex justify="space-between" align="center" padding="0 32px">
        <Flex gap="12px" align="center">
          <SubTitle fontSize="18px" fontWeight={500} lineheight="24px">
            General Sales / Time
          </SubTitle>
          <CustomIcon
            image={infoIcon}
            width="24px"
            heigh="24px"
            color="#ffffff"
          />
        </Flex>
        <ToggleSettingsBtn
          activesettings={activeSettings}
          toggleSettings={toggleSettings}
        />
      </Flex>
      <Table />
      {activeSettings && <SettingsBlock />}
    </StyledSalesBlock>
  );
};
