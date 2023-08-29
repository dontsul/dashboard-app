import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCustomNavLink = styled(NavLink)`
  display: flex;
  padding: 12px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: ${({ url, activepath, theme }) =>
    url === activepath ? theme.primaryColor : theme.bgItemNavigation};
`;

export const CustomNavLink = (props) => {
  return <StyledCustomNavLink {...props} />;
};

CustomNavLink.propTypes = {
  itemNav: PropTypes.object,
};
