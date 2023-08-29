import { Flex } from "../../flex/Flex";
import { CustomSpan } from "../../customSpan/CustomSpan";
import styled from "styled-components";

const UpgradeCustoSpan = styled(CustomSpan)`
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  color: ${({ color }) => color};
  margin-bottom: ${({ mb }) => mb || 0};
  text-transform: ${({ transform }) => transform || "none"};
  width: ${({ width }) => width || "auto"};
`;
const UpgradeFlex = styled(Flex)`
  position: absolute;
  top: 47px;
  left: 51px;
`;

export const InsideInfo = () => {
  return (
    <UpgradeFlex direction="column" align="center">
      <UpgradeCustoSpan
        color="#A7A9AD"
        transform="uppercase"
        fontWeight={500}
        fontSize="12px"
        lineheight="16px"
        mb="4px"
      >
        Excessive
      </UpgradeCustoSpan>
      <UpgradeCustoSpan
        transform="uppercase"
        fontWeight={500}
        fontSize="64px"
        lineheight="72px"
      >
        85%
      </UpgradeCustoSpan>
      <UpgradeCustoSpan fontSize="12px" lineheight="16px" width="117px">
        +40 418 in the last 30 days
      </UpgradeCustoSpan>
    </UpgradeFlex>
  );
};
