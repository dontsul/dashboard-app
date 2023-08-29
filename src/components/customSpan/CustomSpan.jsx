import styled from "styled-components";

const StyledCustomSpan = styled.span`
  color: ${(props) => props.color || props.theme.text};
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle || "normal"};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineheight || "24px"};
`;

export const CustomSpan = (props) => {
  return <StyledCustomSpan {...props} />;
};
