import { Flex } from "../../flex/Flex";
import { CustomPieChart } from "../../customPieChart/CustomPieChart";
import { ColorKey } from "../сolorKey/ColorKey";
import { InsideInfo } from "../insideInfo/InsideInfo";
import styled from "styled-components";

const UpgradeFlex = styled(Flex)`
  position: relative;
  width: 232px;
  height: 232px;
`;

export const BodyPieChartWrapper = () => {
  return (
    <Flex padding="16px 59px 32px 32px" justify="space-between">
      <UpgradeFlex>
        <InsideInfo />
        <CustomPieChart />
      </UpgradeFlex>
      <ColorKey />
    </Flex>
  );
};
