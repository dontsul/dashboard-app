import { Flex } from "../../flex/Flex";
// import styled from "styled-components";
import { SubTitle } from "../../subTitle/SubTitle";
import { CustomSpan } from "../../customSpan/CustomSpan";
import { ButtonPopUp } from "../../buttonPopUp/ButtonPopUp";
import { useContext } from "react";
import { LocationPopUpContext } from "../PieChartWrapper";

export const HeaderPieChartWrapper = () => {
  const context = useContext(LocationPopUpContext);
  return (
    <Flex
      justify="space-between"
      align="center"
      padding="24px 32px 16px 32px"
      gap="48px"
    >
      <SubTitle fontSize="18px" fontWeight={500} lineheight="24px">
        Game Stats
      </SubTitle>
      <Flex gap="16px" align="center">
        <CustomSpan
          color="rgba(255, 255, 255, 0.60)"
          fontSize="12px"
          lineheight="16px"
        >
          Location
        </CustomSpan>
        <ButtonPopUp
          text={context.selectedLocation.title}
          activePopUp={context.activePopUp}
          togglePopUp={context.handlePopUp}
        />
      </Flex>
    </Flex>
  );
};
