import styled from "styled-components";
import PropTypes from "prop-types";
const StyledSubTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: ${({ fontSize }) => fontSize};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineheight }) => lineheight || "inherit"};
  text-transform: ${({ transform }) => transform || "none"};
`;
export const SubTitle = (props) => {
  return <StyledSubTitle {...props} />;
};

StyledSubTitle.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  lineheight: PropTypes.string,
  transform: PropTypes.string,
};
