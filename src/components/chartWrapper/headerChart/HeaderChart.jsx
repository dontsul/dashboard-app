import styled from "styled-components";
import { Flex } from "../../flex/Flex";
import { SubTitle } from "../../subTitle/SubTitle";
import { CustomSpan } from "../../customSpan/CustomSpan";
import { ButtonPopUp } from "../../buttonPopUp/ButtonPopUp";
import { useContext } from "react";
import { DataTypePopUpContext } from "../ChartWrapper";

export const HeaderChart = () => {
  const context = useContext(DataTypePopUpContext);
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
          Data type
        </CustomSpan>
        <ButtonPopUp
          text={context.selectedDataType.title}
          activePopUp={context.activePopUp}
          togglePopUp={context.handlePopUp}
        />
      </Flex>
    </Flex>
  );
};
