import styled from "styled-components";
import { CustomSpan } from "../../../customSpan/CustomSpan";
import PropTypes from "prop-types";
import { RadioInput } from "../../../radioInput/RadioInput";

const StyledItemDataTypePopUp = styled.li`
  display: flex;
  padding: 8px 16px 8px 24px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;
`;

export const ItemDataTypePopUp = ({ type, checked, onChange }) => {
  return (
    <StyledItemDataTypePopUp>
      <RadioInput checked={checked} onChange={onChange} />
      <CustomSpan fontSize="14px" lineheight="20px">
        {type.title}
      </CustomSpan>
    </StyledItemDataTypePopUp>
  );
};
ItemDataTypePopUp.propTypes = {
  type: PropTypes.object,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
