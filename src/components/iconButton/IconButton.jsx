import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg, theme }) => bg && theme.bg};
  border-radius: ${({ radius }) => (radius ? radius : 0)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const IconButton = (props) => {
  return <StyledButton {...props} />;
};
