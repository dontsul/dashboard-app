import styled from "styled-components";
import { Switch } from "../../switch/Switch";
import { Flex } from "../../flex/Flex";
import PropTypes from "prop-types";
import { CustomSpan } from "../../customSpan/CustomSpan";
const StyledItemSettingBlock = styled.li`
  padding: 6px 16px 6px 24px;
  display: grid;
  grid-template-columns: 1fr 28px;
  gap: 24px;
  align-items: center;
`;

const UpgradeFlex = styled(Flex)`
  width: 28px;
  height: 28px;
`;

export const ItemSettingBlock = ({ setting }) => {
  return (
    <StyledItemSettingBlock>
      <CustomSpan fontSize="14px" lineheight="20px">
        {setting.title}
      </CustomSpan>
      <UpgradeFlex align="center" justify="center">
        <Switch defaultChecked={setting.defaultChecked} />
      </UpgradeFlex>
    </StyledItemSettingBlock>
  );
};

ItemSettingBlock.propTypes = {
  setting: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    defaultChecked: PropTypes.bool,
  }),
};
