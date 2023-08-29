import styled from "styled-components";
import { Flex } from "../../flex/Flex";
import { CustomSpan } from "../../customSpan/CustomSpan";
import PropTypes from "prop-types";
import { CustomImage } from "../../customImage/CustomImage";
import pokemon from "../../../assets/sales/pokemon.png";
import actionMenu from "../../../assets/sales/action-menu.svg";
import { useMemo } from "react";
import { formatDate } from "../../../utils/formatDate";
import { IconButton } from "../../iconButton/IconButton";
import { CustomIcon } from "../../customIcon/CustomIcon";

const StyledTableBodyListItem = styled.li`
  display: grid;
  grid-template-columns: 220px 220px 80px 80px 80px 160px 80px 80px 80px 72px;
  gap: 60px;

  padding: 16px 32px;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
  background-color: ${({ selected }) =>
    selected ? "rgba(255, 255, 255, 0.06)" : "none"};
`;

const UpgradeCustomSpan = styled(CustomSpan)`
  width: 113px;
`;
export const TableBodyListItem = ({ sale, selected }) => {
  const {
    card_name,
    card_number,
    date,
    limited,
    model,
    operations,
    price,
    rating,
    status,
    type,
  } = sale;

  const memoizedDate = useMemo(() => formatDate(date), [date]);

  return (
    <StyledTableBodyListItem selected={selected}>
      <Flex gap="16px">
        <CustomImage
          width="28px"
          height="40px"
          src={pokemon}
          alt={model.name}
        />
        <UpgradeCustomSpan fontSize="13px" lineheight="20px">
          {model.name}
        </UpgradeCustomSpan>
      </Flex>
      <Flex gap="4px" direction="column">
        <CustomSpan fontSize="13px" lineheight="20px">
          {card_name}
        </CustomSpan>
        <CustomSpan
          color="rgba(255, 255, 255, 0.60)"
          fontSize="11px"
          lineheight="12px"
        >
          Card {card_number}
        </CustomSpan>
      </Flex>
      <Flex align="center">
        <CustomSpan fontSize="13px" lineheight="20px">
          {type}
        </CustomSpan>
      </Flex>
      <Flex align="center" justify="center">
        <CustomSpan fontSize="13px" lineheight="20px">
          {limited}
        </CustomSpan>
      </Flex>
      <Flex align="center" justify="center">
        <CustomSpan fontSize="13px" lineheight="20px">
          {operations}
        </CustomSpan>
      </Flex>
      <Flex align="center" justify="flex-start">
        <CustomSpan fontSize="13px" lineheight="20px">
          {memoizedDate}
        </CustomSpan>
      </Flex>
      <Flex align="center" justify="flex-start">
        <CustomSpan fontSize="13px" lineheight="20px">
          {rating}
        </CustomSpan>
      </Flex>
      <Flex align="center" justify="flex-start">
        <CustomSpan fontSize="13px" lineheight="20px">
          {status}
        </CustomSpan>
      </Flex>
      <Flex align="center" justify="flex-start">
        <CustomSpan fontSize="15px" lineheight="20px" fontWeight={500}>
          {price}
        </CustomSpan>
      </Flex>
      <Flex align="center" justify="center">
        <IconButton width="24px" height="24px">
          <CustomIcon
            color="#B1B1B1"
            width="24px"
            height="24px"
            image={actionMenu}
          />
        </IconButton>
      </Flex>
    </StyledTableBodyListItem>
  );
};

TableBodyListItem.propTypes = {
  selected: PropTypes.bool,
  sale: PropTypes.shape({
    card_name: PropTypes.string.isRequired,
    card_number: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    limited: PropTypes.number.isRequired,
    model: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
    }),
    operations: PropTypes.number,
    price: PropTypes.string,
    rating: PropTypes.number,
    status: PropTypes.string,
    type: PropTypes.string,
  }),
};
