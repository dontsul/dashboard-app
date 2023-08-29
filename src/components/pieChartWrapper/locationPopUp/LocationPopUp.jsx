import styled from "styled-components";
import { List } from "../../list/List";
import { locationData } from "./locationData";
import { ItemLocationPopUp } from "./itemLocationPopUp/ItemLocationPopUp";
const StyledLocationPopUp = styled.div`
  position: absolute;
  top: 48px;
  right: 32px;
  padding: 8px;
  width: 237px;
  height: 236px;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0px 8px 48px 0px rgba(0, 0, 0, 0.6),
    0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
`;
export const LocationPopUp = () => {
  return (
    <StyledLocationPopUp>
      <List direction="column">
        {locationData.map((location) => {
          return <ItemLocationPopUp key={location.id} location={location} />;
        })}
      </List>
    </StyledLocationPopUp>
  );
};
