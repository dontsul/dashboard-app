import styled from "styled-components";

const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.bgLayout};
  display: flex;
  flex-direction: column;
  padding: 0 48px 0 36px;
`;
export const Main = (props) => {
  return <StyledMain {...props} />;
};
