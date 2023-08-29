import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledRouterLink = styled(Link)`
  color: #78b4ed;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const RouterLink = (props) => {
  return <StyledRouterLink {...props} />;
};
