// Components
import TableRowItem from "@components/DataDisplay/Table/TableRow/TableRowItem";
import TableRowCell from "@components/DataDisplay/Table/TableRow/TableRowCell";

// Types
import { IColumnProps, IUserProps } from "@types/interface";

interface ITableRow<T> {
  rowData: T[];
  columns: IColumnProps<T>[];
  selectedRowIndex: number;
  onRowClick: (
    index: number,
    item: IUserProps
  ) => void;
}

const TableRow = ({
  rowData,
  columns,
  selectedRowIndex,
  onRowClick
}: ITableRow<IUserProps>): JSX.Element => {
  return (
    <>
      {rowData.map((item, itemIndex) => (
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
