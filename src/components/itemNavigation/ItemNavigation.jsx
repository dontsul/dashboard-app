import styled from "styled-components";
import PropTypes from "prop-types";

const StyledItemNavigation = styled.li`
  border-radius: 40px;
  background: ${(props) => props.theme.bgItemNavigation};
`;
export const ItemNavigation = (props) => {
  return <StyledItemNavigation {...props} />;
};

ItemNavigation.propTypes = {
  title: PropTypes.string,
};
