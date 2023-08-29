import styled from "styled-components";
import { StatisticBlocks } from "../statisticBlocks/StatisticBlocks";
import { SalesBlock } from "../salesBlock/SalesBlock";
import { Flex } from "../flex/Flex";
import { ChartWrapper } from "../chartWrapper/ChartWrapper";
import { PieChartWrapper } from "../pieChartWrapper/PieChartWrapper";

const StyledDashboard = styled.div`
  padding: 24px 0 28px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <StatisticBlocks />
      <Flex gap="16px">
        <ChartWrapper />
        <PieChartWrapper />
      </Flex>
      <SalesBlock />
    </StyledDashboard>
  );
};
