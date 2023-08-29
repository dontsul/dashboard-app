import styled from "styled-components";
import { forwardRef } from "react";
const StyledInput = styled.input`
  margin-bottom: ${(props) => props.mb || "0px"};
  padding: 10px 16px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #3d4250;
  color: ${(props) => props.theme.text};
  height: 64px;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  & ::placeholder {
    color: #7d7f8e;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const ForwardedInput = forwardRef(function Input(props, ref) {
  return <StyledInput ref={ref} {...props} />;
});

ForwardedInput.displayName = "ForwardedInput";
