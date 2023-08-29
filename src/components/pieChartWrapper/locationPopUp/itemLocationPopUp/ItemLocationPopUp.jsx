import styled from "styled-components";
import { CustomSpan } from "../../../customSpan/CustomSpan";
import PropTypes from "prop-types";
import check from "../../../../assets/tabler_check.svg";
import { CustomIcon } from "../../../customIcon/CustomIcon";
import { useContext } from "react";
import { LocationPopUpContext } from "../../PieChartWrapper";
const StyledItemLocationPopUp = styled.li`
  background-color: ${({ $selectedLocation }) =>
    $selectedLocation ? "#31343D" : "none"};
  padding: 12px 16px;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  border-radius: 4px;
`;

export const ItemLocationPopUp = ({ location }) => {
  const context = useContext(LocationPopUpContext);
  return (
    <StyledItemLocationPopUp
      $selectedLocation={context.selectedLocation.id === location.id}
      onClick={() => context.handleSelectedLocation(location)}
    >
      <CustomSpan
        color={context.selectedLocation ? "#fff" : "#A2A4A8;"}
        fontSize="13px"
        lineheight="20px"
      >
        {location.title}
      </CustomSpan>
      {context.selectedLocation !== null &&
      context.selectedLocation.id === location.id ? (
        <CustomIcon width="20" height="20" image={check} color="#0FE57F" />
      ) : null}
    </StyledItemLocationPopUp>
  );
};

ItemLocationPopUp.propTypes = {
  location: PropTypes.object,
};
