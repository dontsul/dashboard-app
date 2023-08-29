import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

const StyledCustomNavImage = styled(ReactSVG)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  & svg {
    & path {
      stroke: ${({ url, activepath, theme }) =>
        url === activepath ? theme.text : theme.inactiveIcon};
    }
    & rect {
      stroke: ${({ url, activepath, theme }) =>
        url === activepath ? theme.text : theme.inactiveIcon};
    }
    & circle {
      stroke: ${({ url, activepath, theme }) =>
        url === activepath ? theme.text : theme.inactiveIcon};
    }
  }
`;

export const CustomNavImage = (props) => {
  return <StyledCustomNavImage src={props.image} {...props} />;
};

CustomNavImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  activepath: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};
