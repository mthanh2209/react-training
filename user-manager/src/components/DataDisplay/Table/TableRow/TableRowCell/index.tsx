// Components
import TableCell from "@components/DataDisplay/Table/TableRow/TableRowCell/TableCell"

// Types
import { CustomColumnProps } from "@types/interface";

// Helpers
import { getObjValue } from "@helpers";

interface ITableRowCell<T> {
  item: T,
  column: CustomColumnProps<T>
}

const TableRowCell = <T,>({
  item,
  column
}: ITableRowCell<T>): JSX.Element => {
  const value = getObjValue(item, column.key)

  return (
    <TableCell>
      {column.render
        ? column.render(
          column,
          item )
        : (value as string)}
    </TableCell>
  )
}

export default TableRowCell;
