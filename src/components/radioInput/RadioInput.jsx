import styled from "styled-components";
import PropTypes from "prop-types";
import { Flex } from "../flex/Flex";
import { DefaultInput } from "../defaultInput/DefaultInput";

const RadioCustom = styled(Flex)`
  width: 24px;
  height: 24px;
  border: 2px solid #60677a;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${({ checked, theme }) =>
    checked ? theme.primaryColor : "none"};
`;
const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;

  input[type="radio"] {
    width: 0;
    height: 0;
    opacity: 0;
  }

  & div {
    & div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 17px;
      height: 17px;
      background-color: #8941ff;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.2s ease;

      ${(props) =>
        props.checked &&
        `
        opacity: 1;
      `}
    }
  }
`;

export const RadioInput = ({ checked, onChange }) => {
  return (
    <RadioWrapper checked={checked}>
      <DefaultInput type="radio" checked={checked} onChange={onChange} />
      <RadioCustom checked={checked}>
        <Flex />
      </RadioCustom>
    </RadioWrapper>
  );
};

RadioInput.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};
