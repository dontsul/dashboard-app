import styled from "styled-components";
import { Flex } from "../flex/Flex";
import { CustomIcon } from "../customIcon/CustomIcon";
import { CustomSpan } from "../customSpan/CustomSpan";
import arrowDown from "../../assets/sales/arrow-down.svg";
import PropTypes from "prop-types";

const UpgradeCustomIconArrow = styled(CustomIcon)`
  transform: ${({ $activePopUp }) =>
    $activePopUp ? "rotate(180deg)" : "rotate(0deg)"};
  & svg {
    & path {
      stroke: ${({ theme, $activePopUp }) =>
        $activePopUp ? "#76B2EA" : theme.text};
    }
  }
`;

const UpgradeFlex = styled(Flex)`
  cursor: pointer;
`;

export const ButtonPopUp = (props) => {
  return (
    <UpgradeFlex align="center" gap="2px" onClick={props.togglePopUp}>
      <CustomSpan
        color={props.activePopUp ? "#76B2EA" : ""}
        fontSize="13px"
        lineheight="20px"
      >
        {props.text}
      </CustomSpan>

      <UpgradeCustomIconArrow
        width="20"
        height="20"
        $activePopUp={props.activePopUp}
        image={arrowDown}
      />
    </UpgradeFlex>
  );
};

ButtonPopUp.propTypes = {
  activePopUp: PropTypes.bool,
  togglePopUp: PropTypes.func,
  text: PropTypes.string,
};
