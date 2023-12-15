import { useState } from 'react';

// Types
import { IUserProps } from '@types/interface';

interface ITableRowItem<T> {
  item: T;
  index: number;
  children: JSX.Element[];
  selectedRowIndex: number;
  onRowItemClick: (
    index: number,
    item: T
  ) => void;
}

const TableRowItem = ({
  item,
  index,
  children,
  selectedRowIndex,
  onRowItemClick
}: ITableRowItem<IUserProps>) => {
  const [selectedRow, setSelectedRow] = useState(selectedRowIndex);

  const rowIndex = index + 1;

  const handleRowItemClick = () => {
    setSelectedRow(rowIndex);
    onRowItemClick(rowIndex, item);
  };

  const isSelected = selectedRow > 0 && selectedRowIndex === rowIndex;

  return (
    <tr
      className={isSelected
        ? 'table-row table-row-selected'
        : 'table-row'}
      onClick={handleRowItemClick}>
      {children}
    </tr>
  );
};

export default TableRowItem;
