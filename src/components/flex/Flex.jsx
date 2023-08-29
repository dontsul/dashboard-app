import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "stretch"};
  align-items: ${({ align }) => align || "stretch"};
  flex-direction: ${({ direction }) => direction || "row"};
  gap: ${(props) => (props.gap && props.gap) || "0"};
  padding: ${({ padding }) => padding || 0};
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};
