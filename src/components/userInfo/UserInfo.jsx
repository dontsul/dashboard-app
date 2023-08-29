// import styled from "styled-components";
import { Flex } from "../flex/Flex";
import { CustomImage } from "../customImage/CustomImage";
import { CustomSpan } from "../customSpan/CustomSpan";
// import { useSelector } from "react-redux";
import { IconButton } from "../iconButton/IconButton";
import userIcon from "../../assets/header/user_light.svg";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const UserInfo = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Flex gap="12px" align="center">
      <IconButton bg="is" radius={"40px"} width="36px" height="36px">
        <CustomImage src={userIcon} alt="user" width="24px" height="24px" />
      </IconButton>
      <CustomSpan $fontSize="24px" $fontWeight={500} $lineHeight="20px">
        {user.email}
      </CustomSpan>
    </Flex>
  );
};
