import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { Flex } from "../flex/Flex";

const CheckboxWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CheckboxLabel = styled.label`
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  border-width: 2px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${({ color }) => color};
  position: relative;
  cursor: pointer;

  & div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background-color: ${(props) =>
      props.checked ? props.color : "transparent"};
  }
`;

export const CustomCheckbox = ({ color, defaultChecked }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxWrapper>
      <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
      <CheckboxLabel
        checked={isChecked}
        color={color}
        onClick={handleCheckboxChange}
      >
        <Flex />
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

CustomCheckbox.propTypes = {
  color: PropTypes.string,
  defaultChecked: PropTypes.bool,
};
