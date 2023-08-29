import styled from "styled-components";
import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";
const StyledAside = styled.aside`
  display: inline-flex;
  padding: 14px 18px 592px 18px;
  flex-direction: column;
  align-items: center;
  gap: 46px;
  background: ${(props) => props.theme.bg};
`;

export const Aside = (props) => {
  return (
    <StyledAside {...props}>
      <Logo />
      <Navigation />
    </StyledAside>
  );
};
