import { useSelector } from "react-redux/es/hooks/useSelector";
import { List } from "../../list/List";
import { TableBodyListItem } from "../tableBodyListItem/TableBodyListItem";
// import { v4 as uuidv4 } from "uuid";
export const TableBodyList = () => {
  const generalSalesTime = useSelector(
    (state) => state.dashboard.data.general_sales_time
  );

  return (
    <List direction="column">
      {/* {generalSalesTime !== undefined &&
        generalSalesTime.map((sale) => {
          return <TableBodyListItem key={uuidv4()} sale={sale} />;
        })} */}
      {generalSalesTime !== undefined && (
        <>
          <TableBodyListItem sale={generalSalesTime[0]} />
          <TableBodyListItem sale={generalSalesTime[0]} selected={true} />
          <TableBodyListItem sale={generalSalesTime[0]} />
          <TableBodyListItem sale={generalSalesTime[0]} />
          <TableBodyListItem sale={generalSalesTime[0]} />
        </>
      )}
    </List>
  );
};
