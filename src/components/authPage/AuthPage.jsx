import styled from "styled-components";

const StyledAuthPage = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  padding-top: 160px;
  min-height: 100vh;
  height: 1080px;
  width: 100%;
  background-color: ${(props) => props.theme.bg};
`;

export const AuthPage = (props) => {
  return <StyledAuthPage {...props} />;
};
