import styled from "styled-components";
import { HeaderPieChartWrapper } from "./headerPieChartWrapper/HeaderPieChartWrapper";
import { useState, createContext } from "react";
import { LocationPopUp } from "./locationPopUp/locationPopUp";
import { locationData } from "./locationPopUp/locationData";
import { useSelector } from "react-redux";
import { Flex } from "../flex/Flex";
import { CustomSpan } from "../customSpan/CustomSpan";
import { BodyPieChartWrapper } from "./bodyPieChartWrapper/BodyPieChartWrapper";

const StyledPieChartWrapper = styled.div`
  position: relative;
  width: 428px;
  height: 344px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.bg};
`;

export const LocationPopUpContext = createContext({});

const UpgradeFlex = styled(Flex)`
  width: 100%;
  height: 100%;
`;
const UpgradeCustomSpan = styled(CustomSpan)`
  font-feature-settings: "clig" off, "liga" off;
`;

export const PieChartWrapper = () => {
  const { loading } = useSelector((state) => state.dashboard);
  const [activePopUp, setActivePopUp] = useState(false);
  const [selectedLocation, setSelectedLoacation] = useState(locationData[2]);

  const handleSelectedLocation = (location) => {
    setSelectedLoacation(location);
  };
  const handlePopUp = () => {
    setActivePopUp((prevState) => !prevState);
  };

  const context = {
    activePopUp,
    handlePopUp,
    selectedLocation,
    handleSelectedLocation,
  };

  return (
    <LocationPopUpContext.Provider value={context}>
      <StyledPieChartWrapper>
        {!loading ? (
          <>
            <HeaderPieChartWrapper />
            <BodyPieChartWrapper />
          </>
        ) : (
          <UpgradeFlex align="center" justify="center">
            <UpgradeCustomSpan
              color="rgba(255, 255, 255, 0.60)"
              fontSize="24px"
              lineheight="48px"
            >
              Loading...
            </UpgradeCustomSpan>
          </UpgradeFlex>
        )}
        {activePopUp && <LocationPopUp />}
      </StyledPieChartWrapper>
    </LocationPopUpContext.Provider>
  );
};
