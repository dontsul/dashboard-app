import { Flex } from "../flex/Flex";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { CustomIcon } from "../customIcon/CustomIcon";
import { CustomSpan } from "../customSpan/CustomSpan";
import settings from "../../assets/sales/settings.svg";
import arrowDown from "../../assets/sales/arrow-down.svg";

const UpgradeCustomIcon = styled(CustomIcon)`
  & svg {
    & path {
      stroke: ${({ theme, $activesettings }) =>
        $activesettings ? "#76B2EA" : theme.text};
    }
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const UpgradeCustomIconArrow = styled(CustomIcon)`
  transform: ${({ $activesettings }) =>
    $activesettings ? "rotate(180deg)" : "rotate(0deg)"};
  /* animation: ${rotate} 1s ease-in-out forwards; */
  & svg {
    & path {
      stroke: ${({ theme, $activesettings }) =>
        $activesettings ? "#76B2EA" : theme.text};
    }
  }

  @keyframes aroow {
  }
`;

const UpgradeFlex = styled(Flex)`
  cursor: pointer;
`;

export const ToggleSettingsBtn = (props) => {
  return (
    <UpgradeFlex
      justify="space-between"
      align="center"
      gap="8px"
      onClick={props.toggleSettings}
    >
      <UpgradeCustomIcon
        width="24px"
        height="24px"
        $activesettings={props.activesettings}
        image={settings}
      />
      <CustomSpan
        color={props.activesettings ? "#76B2EA" : ""}
        fontSize="13px"
        lineheight="20px"
      >
        Table settings
      </CustomSpan>

      <UpgradeCustomIconArrow
        width="20"
        height="20"
        $activesettings={props.activesettings}
        image={arrowDown}
      />
    </UpgradeFlex>
  );
};

ToggleSettingsBtn.propTypes = {
  activesettings: PropTypes.bool,
  toggleSettings: PropTypes.func,
};
