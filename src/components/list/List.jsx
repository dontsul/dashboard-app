import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  justify-content: ${({ justify }) => justify || "stretch"};
  align-items: ${({ align }) => align || "stretch"};
  flex-direction: ${({ direction }) => direction || "row"};
  gap: ${(props) => (props.gap && props.gap) || "0"};
`;

export const List = (props) => {
  return <StyledList {...props} />;
};
