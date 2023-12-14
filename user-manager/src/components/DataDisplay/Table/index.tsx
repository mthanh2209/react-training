// Components
import '@components/DataDisplay/Table/Table.css';
import TableHeader from "@components/DataDisplay/Table/TableHeader";
import TableRow from "@components/DataDisplay/Table/TableRow";

// Types
import { CustomColumnProps, CustomUserProps } from "@types/interface";

interface ITableProps<T> {
  users: T[];
  columns: CustomColumnProps<T>[];
  additionalClass?: string;
  selectedRowIndex: number;
  onRowClick: (
    index: number,
    item: CustomUserProps
  ) => void;
}

const Table = ({
  users,
  columns,
  additionalClass,
  selectedRowIndex,
  onRowClick
}: ITableProps<CustomUserProps>): JSX.Element => {

  return (
    <div className="table-wrapper">
      <table className={`table ${additionalClass}`}>
        <thead className="table-head">
          <TableHeader columns={columns} />
        </thead>

        <tbody className="table-body">
          <TableRow
            users={users}
            columns={columns}
            selectedRowIndex={selectedRowIndex}
            onRowClick={onRowClick}/>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
