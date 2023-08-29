import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  outline: none;

  &:active {
    border: none;
    outline: none;
  }
`;

export const DefaultInput = (props) => {
  return <StyledInput {...props} />;
};
