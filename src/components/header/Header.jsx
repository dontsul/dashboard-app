import styled from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { UserInfo } from "../userInfo/UserInfo";
import { SubTitle } from "../subTitle/SubTitle";

const StyledHeader = styled.header`
  padding: 16px 0 16px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Header = () => {
  const { activeBoard } = useSelector((state) => state.board);
  return (
    <StyledHeader>
      <SubTitle
        fontSize="20px"
        fontWeight={500}
        lineheight="28px"
        transform="uppercase"
      >
        {activeBoard}
      </SubTitle>
      <UserInfo />
    </StyledHeader>
  );
};
