import styled from "styled-components";
const StyledParagraph = styled.p`
  color: ${(props) => props.color};
  text-align: ${(props) => props.align || "center"};
  margin-bottom: ${(props) => props.mb || "0px"};
  font-size: ${(props) => props.fontSize};
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 160% */
`;
export const Paragraph = (props) => {
  return <StyledParagraph {...props} />;
};
