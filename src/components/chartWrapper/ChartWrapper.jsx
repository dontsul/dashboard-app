import styled from "styled-components";
import { HeaderChart } from "./headerChart/HeaderChart";
import { useState, createContext } from "react";
import { dataType } from "./dataTypePopUp/dataType";
import { DataTypePopUp } from "./dataTypePopUp/DataTypePopUp";
import { Chart } from "../chart/Chart";
import { ChartInfo } from "./chartInfo/ChartInfo";
import { Flex } from "../flex/Flex";
export const DataTypePopUpContext = createContext({});

const StyledChartWrapper = styled.div`
  position: relative;
  width: 1312px;
  height: 344px;
  flex-shrink: 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg};
  gap: 8px;
`;

const UpgradeFlex = styled(Flex)`
  padding: 0 32px 32px 32px;
`;
export const ChartWrapper = () => {
  const [activePopUp, setActivePopUp] = useState(false);
  const [selectedDataType, setSelectedDataType] = useState(dataType[1]);
  const handlePopUp = () => {
    setActivePopUp((prevState) => !prevState);
  };

  const handleSelectedDataType = (dataType) => {
    setSelectedDataType(dataType);
  };

  const context = {
    activePopUp,
    handlePopUp,
    selectedDataType,
    handleSelectedDataType,
  };
  return (
    <DataTypePopUpContext.Provider value={context}>
      <StyledChartWrapper>
        <HeaderChart />
        <UpgradeFlex gap="21px">
          <Chart />
          <ChartInfo />
        </UpgradeFlex>
        {activePopUp && <DataTypePopUp />}
      </StyledChartWrapper>
    </DataTypePopUpContext.Provider>
  );
};
