import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSwitchContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  user-select: none;
  width: 28px;
  height: 20px;
  background: ${({ theme, $isChecked }) =>
    $isChecked ? theme.primaryColor : "#60677a"};
  border-radius: 40px;
  position: relative;
  transition: all 0.3s ease;
  padding: 2px;
`;

const StyledSwitchSlider = styled.div`
  position: absolute;
  top: 3px;
  background: ${({ theme }) => theme.bg};
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

export const Switch = (props) => {
  const [isChecked, setIsChecked] = useState(props.defaultChecked);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <StyledSwitchContainer $isChecked={isChecked} onClick={toggleSwitch}>
      <StyledSwitchSlider
        style={{ transform: isChecked ? "translateX(10px)" : "translateX(0)" }}
      />
    </StyledSwitchContainer>
  );
};
Switch.propTypes = {
  defaultChecked: PropTypes.bool,
};
