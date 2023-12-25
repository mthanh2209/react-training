import '@App.css';
import { useEffect, useState } from 'react';

// Components
import Drawer from '@components/DataDisplay/Drawer';
import Table from '@components/DataDisplay/Table';
import Toolbar from '@components/DataDisplay/Toolbar';
import InformationSidebar from '@components/DataDisplay/SideBar';
import Panel from '@components/DataDisplay/Panel';

// Interfaces
import { IUserProps as IUser } from '@interfaces/users';

// Services
import {
  addUsers,
  deleteUsers,
  getUsers,
  updateUsers
} from '@service';

// Constants
import { INFO_LIST } from '@constants/infoList';
import { POPOVER_OPTION } from '@constants/popperOption';
import { LIST_NAV } from '@constants/listNav';
import { COLUMNS } from '@constants/columns';

// Helpers
import { filterUsers } from '@helpers/filterUsers';

const App = () => {
  const [users, setUsers] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);
  const [rowData, setRowData] = useState<IUser | null>(null);
  const [userInfoList, setUserInfoList] = useState<any[]>([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleGetUsers = async () => {
    const response = await getUsers();
    if (response.data) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    if (rowData) {
      setUserInfoList(INFO_LIST(rowData));
    }
    handleGetUsers();
  }, [rowData]);

  const handleAddUsers = async (userName: string) => {
    const response = await addUsers(userName);
    if (response.data) {
      const { data } = await getUsers();
      setUsers(data);
      setRowIndex(data.length);
      setRowData(data[data.length - 1]);
      setShowSidebar(true);
    }
  };

  const handleShowPanel = () => {
    setShowSidebar(false);
  };

  const handleClosePanel = () => {
    setShowSidebar(true);
  };

  const handleUpdateUsers = async (itemData: IUser) => {
    const response = await updateUsers(itemData);
    if (response.data) {
      setRowData(response.data);
      handleGetUsers();
    }
  };

  const handleDeleteUsers = async () => {
    if (rowData) {
      const response = await deleteUsers(rowData.id);
      if (response.data) {
        setRowData(null);
        handleGetUsers()
      }
    }
  };

  const handleSelectedRow = (index: number, dataItem: IUser): void => {
    setRowData(dataItem);
    setRowIndex(index);
    if (showSidebar || showSidebar === null) {
      setShowSidebar(true);
    } else if (!showSidebar) {
      setShowSidebar(false);
    }
  };

  const filteredUsers: IUser[] = filterUsers(users, searchKeyword);
  const columns = COLUMNS(searchKeyword);

  const handleSearch = (keyword: string): void => {
    setSearchKeyword(keyword);
  };

  const handleCloseSearchBar = () => {
    setSearchKeyword('');
  };

  return (
    <>
      <header className='main-header'>User Manager</header>
      <main className='main-body'>
        <Drawer
          popperOption={POPOVER_OPTION}
          listNav={LIST_NAV}
          onSubmit={handleAddUsers}
        />

        <div className='body-content'>
          <Toolbar
            onClose={handleCloseSearchBar}
            onChange={handleSearch}
          />
          <Table
            rowData={filteredUsers}
            columns={columns}
            selectedRowIndex={rowIndex}
            onRowClick={handleSelectedRow}
          />
        </div>

        {showSidebar && rowData !== null && (
          <InformationSidebar
            title='User information'
            isActive={rowData.isActive}
            src={rowData.avatar}
            bgColor={rowData.bgColor}
            fullName={rowData.fullName}
            infoList={userInfoList}
            onEditButton={handleShowPanel}
          />
        )}

        {!showSidebar && rowData !== null && (
          <Panel
            tabs={['General']}
            id={rowData.id}
            avatar={rowData.avatar}
            fullName={rowData.fullName}
            email={rowData.email}
            isActive={rowData.isActive}
            registeredDate={rowData.registeredDate}
            lastVisitedDate={rowData.lastVisitedDate}
            details={rowData.details}
            bgColor={rowData.bgColor}
            onReturnClick={handleClosePanel}
            onSaveUser={handleUpdateUsers}
            onDeleteUser={handleDeleteUsers}
          />
        )}
      </main>
    </>
  );
};

export default App;
