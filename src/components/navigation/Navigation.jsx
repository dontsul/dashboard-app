import styled from "styled-components";
import { useEffect } from "react";
import { List } from "../list/List";
import { ItemNavigation } from "../itemNavigation/ItemNavigation";
import { CustomNavLink } from "../customNavLink/CustomNavLink";
import { CustomNavImage } from "../customNavImage/CustomNavImage";
import { useLocation } from "react-router-dom";

import { setActiveBoard } from "../../features/boardSlice";
import { useDispatch } from "react-redux";

const StyledNavigation = styled.nav`
  display: flex;
`;

import { navigationListInfo } from "../list/navigationListInfo";

export const Navigation = () => {
  const location = useLocation();

  const activepath = location.pathname.split("/").pop();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveBoard(activepath));
  }, [dispatch, activepath]);
  return (
    <StyledNavigation>
      <List justify="flex-start" align="center" gap="20px" direction="column">
        {navigationListInfo.map((itemNav) => {
          return (
            <ItemNavigation key={itemNav.url} title={itemNav.title}>
              <CustomNavLink
                to={`/app/${itemNav.url}`}
                activepath={activepath}
                url={itemNav.url}
              >
                <CustomNavImage
                  width={"24px"}
                  height={"24px"}
                  image={itemNav.image}
                  alt={itemNav.url}
                  url={itemNav.url}
                  activepath={activepath}
                />
              </CustomNavLink>
            </ItemNavigation>
          );
        })}
      </List>
    </StyledNavigation>
  );
};
