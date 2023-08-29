import { List } from "../list/List";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { CustomSpan } from "../customSpan/CustomSpan";

const StyledUser = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Users = () => {
  const { users } = useSelector((state) => state.dashboard.data);
  return (
    <List gap="16px" direction="column">
      {users !== undefined &&
        users.map((user) => {
          return (
            <StyledUser key={uuidv4()}>
              <CustomSpan fontSize="13px" lineheight="20px">
                {user.name}
              </CustomSpan>
              <CustomSpan
                lineheight="12px"
                fontSize="11px"
                color="rgba(255, 255, 255, 0.60)"
              >
                {user.date}
              </CustomSpan>
            </StyledUser>
          );
        })}
    </List>
  );
};
