import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.text};
  text-align: ${(props) => props.align || "center"};
  margin-bottom: ${(props) => props.mb || "0px"};
  font-size: ${(props) => props.fontSize};
  font-style: normal;
  font-weight: 500;
  line-height: 56px;
`;

export const Title = (props) => {
  return <StyledTitle {...props} />;
};
