import { Flex } from "../../flex/Flex";
import { Users } from "../../users/Users";
import { SelectedCharts } from "../../selectedCharts/SelectedCharts";

export const ChartInfo = () => {
  return (
    <Flex gap="24px">
      <SelectedCharts />
      <Users />
    </Flex>
  );
};
