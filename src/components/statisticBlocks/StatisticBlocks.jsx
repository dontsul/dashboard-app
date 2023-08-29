import styled from "styled-components";
import { useState, useEffect } from "react";
import { SingleStatisticBlocks } from "./singleStatisticBlocks/SingleStatisticBlocks";
import { useSelector } from "react-redux";
import { statisticDatas } from "./statisticDatas";
import { v4 as uuidv4 } from "uuid";
const StyledStatisticBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;
export const StatisticBlocks = () => {
  const [complexStatistic, setComplexStatistic] = useState(statisticDatas);
  const { statistic } = useSelector((state) => state.dashboard.data);
  useEffect(() => {
    if (statistic !== undefined) {
      let i = 0;
      const arrayStatistic = Object.values(statistic);
      const upgradeStatistic = complexStatistic.map((item) => {
        item.count = arrayStatistic[i];
        i++;
        return item;
      });
      setComplexStatistic(upgradeStatistic);
    }
  }, [statistic]);
  return (
    <StyledStatisticBlocks>
      {complexStatistic.map((statisticData) => {
        return (
          <SingleStatisticBlocks key={uuidv4()} statisticData={statisticData} />
        );
      })}
    </StyledStatisticBlocks>
  );
};
