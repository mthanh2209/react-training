import TableHeaderCell from '@components/Table/TableHeaderCell';
import { IColumn } from '@types/interface';

interface ITableHeader<T> {
  columns: IColumn<T>[];
}

const TableHeader = <T,>({
  columns
}: ITableHeader<T>): JSX.Element => {
  return (
    <tr className='table-header'>
      {columns.map((
        column,
        columnIndex
      ) => (
        <TableHeaderCell key={`table-header-cell-${columnIndex}`}>
          {column.title}
        </TableHeaderCell>
      ))}
    </tr>
  );
};

export default TableHeader;
