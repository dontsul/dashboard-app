import styled from "styled-components";
import { CustomImage } from "../../customImage/CustomImage";
import { WrapImage } from "../../wrapImage/WrapImage";
import PropTypes from "prop-types";
import { Flex } from "../../flex/Flex";
import { CustomSpan } from "../../customSpan/CustomSpan";

const StyledSingleStatisticBlocks = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 22px;

  border-radius: 8px;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0px 8px 28px 0px rgba(48, 48, 49, 0.1);
`;

const UpgradeCustomSpan = styled(CustomSpan)`
  font-feature-settings: "clig" off, "liga" off;
`;

export const SingleStatisticBlocks = (props) => {
  return (
    <StyledSingleStatisticBlocks>
      <WrapImage
        width="48px"
        height="48px"
        gap="10px"
        radius="8px"
        padding="12px"
        bg={props.statisticData.bg}
      >
        <CustomImage
          width="24px"
          height="24px"
          src={props.statisticData.image}
          alt={props.statisticData.title}
        />
      </WrapImage>
      <Flex direction="column">
        <UpgradeCustomSpan fontSize="44px" lineheight="48px">
          {props.statisticData.count}
        </UpgradeCustomSpan>
        <UpgradeCustomSpan
          fontSize="13px"
          color="#A2A4A8"
          fontWeight={500}
          lineheight="16px"
        >
          {props.statisticData.title}
        </UpgradeCustomSpan>
      </Flex>
    </StyledSingleStatisticBlocks>
  );
};

SingleStatisticBlocks.propTypes = {
  statisticData: PropTypes.object,
};
