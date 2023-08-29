import styled from "styled-components";

const StyledLogo = styled.a`
  width: 40px;
  height: 40px;
  background-image: url("/Logo.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export const Logo = (props) => {
  return <StyledLogo {...props} />;
};
