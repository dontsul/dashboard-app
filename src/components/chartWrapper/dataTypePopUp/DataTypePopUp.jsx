import styled from "styled-components";
import { useState } from "react";
import { List } from "../../list/List";
import { dataType } from "./dataType";
import { ItemDataTypePopUp } from "./itemDataTypePopUp/ItemDataTypePopUp";
const StyledDataTypePopUp = styled.div`
  position: absolute;
  top: 48px;
  right: 32px;
  display: flex;
  width: 300px;
  padding: 4px;
  align-items: flex-start;
  gap: 4px;
  border-radius: 8px;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0px 16px 24px 0px rgba(55, 58, 83, 0.16),
    0px 4px 12px 0px rgba(36, 38, 53, 0.1),
    0px 2px 4px 0px rgba(36, 38, 53, 0.08), 0px 8px 48px 0px rgba(0, 0, 0, 0.6),
    0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
`;
export const DataTypePopUp = () => {
  const [selectedType, setSelectedType] = useState(dataType[1]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  return (
    <StyledDataTypePopUp>
      <List direction="column">
        {dataType.map((type) => {
          return (
            <ItemDataTypePopUp
              checked={selectedType.id === type.id}
              onChange={() => handleTypeChange(type)}
              key={type.id}
              type={type}
            />
          );
        })}
      </List>
    </StyledDataTypePopUp>
  );
};
