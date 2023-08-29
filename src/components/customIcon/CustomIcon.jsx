import styled from "styled-components";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";

const StyledCustomIcon = styled(ReactSVG)`
  display: flex;
  justify-content: center;
  align-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;

  & div {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  & svg {
    & path {
      stroke: ${({ color, theme }) => color || theme.inactiveIcon};
    }
    /* & rect {
      stroke: ${({ url, activepath, theme }) =>
      url === activepath ? theme.text : theme.inactiveIcon};
    }
    & circle {
      stroke: ${({ url, activepath, theme }) =>
      url === activepath ? theme.text : theme.inactiveIcon};
    } */
  }
`;
export const CustomIcon = (props) => {
  return <StyledCustomIcon src={props.image} {...props} />;
};
CustomIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
};
