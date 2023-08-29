import styled from "styled-components";

const StyledWrapImage = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bg }) => bg || "none"};
  border-radius: ${({ radius }) => radius || "inherit"};
`;

export const WrapImage = (props) => {
  return <StyledWrapImage {...props} />;
};
