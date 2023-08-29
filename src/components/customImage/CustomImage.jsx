import styled from "styled-components";

const StyledCustomImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const CustomImage = (props) => {
  return <StyledCustomImage {...props} />;
};
