import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${(props) =>
    (props.bg && props.theme.primaryColor) || "inherit"};
  border: ${(props) => `1px solid ${props.theme.primaryColor}` || "none"};
  width: ${(props) => props.width || "auto"};
  margin-bottom: ${(props) => props.mb};

  color: ${(props) => props.theme.text};
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const Button = (props) => {
  return <StyledButton {...props} />;
};
