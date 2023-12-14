// Components
import TableRowItem from "@components/DataDisplay/Table/TableRow/TableRowItem";
import TableRowCell from "@components/DataDisplay/Table/TableRow/TableRowCell";

// Types
import { CustomColumnProps, CustomUserProps } from "@types/interface";

interface ITableRow<T> {
  users: T[];
  columns: CustomColumnProps<T>[];
  selectedRowIndex: number;
  onRowClick: (
    index: number,
    item: CustomUserProps
  ) => void;
}

const TableRow = ({
  users,
  columns,
  selectedRowIndex,
  onRowClick
}: ITableRow<CustomUserProps>): JSX.Element => {
  return (
    <>
      {users.map((item, itemIndex) => (
        <TableRowItem
          key={`table-row-${itemIndex}`}
          item={item}
          index={itemIndex}
          selectedRowIndex={selectedRowIndex}
          onRowItemClick={onRowClick}>

          {columns.map((
              column,
              columnIndex
            ) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </TableRowItem>
      ))}
    </>
  );
};

export default TableRow;
