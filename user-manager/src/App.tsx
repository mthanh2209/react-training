import '@App.css';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Components
import Drawer from '@components/DataDisplay/Drawer';
import Table from '@components/DataDisplay/Table';
import Toolbar from '@components/DataDisplay/Toolbar';
import InformationSidebar from '@components/DataDisplay/SideBar';
import Panel from '@components/DataDisplay/Panel';
import Toast from '@components/DataDisplay/Toast';
import ProfileEditor from '@components/DataDisplay/Panel/ProfileEditor';

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
import { COLUMNS } from '@constants/columns';

// Helpers
import { filterUsers } from '@helpers/filterUsers';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedRow, setSelectedRow] = useState<{
    index: number;
    data: IUser | null;
  }>({
    index: 0,
    data: null
  });
  const [userInfoList, setUserInfoList] = useState<any[]>([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showToast, setShowToast] = useState({
    show: false,
    isError: false,
    key: 0
  });

  const handleShowToast = (show = true, isError = false) => {
    setShowToast((prevToast) => ({
      show,
      isError,
      key: prevToast.key + 1
    }));
  };

  const handleGetUsers = async () => {
    const response = await getUsers();
    if (response.data) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    if (selectedRow.data) {
      setUserInfoList(INFO_LIST(selectedRow.data));
    }
    handleGetUsers();
  }, [selectedRow.data]);

  const handleAddUsers = async (userName: string) => {
    const response = await addUsers(userName);
    if (response.data) {
      const { data } = await getUsers();

      setUsers(data);
      setSelectedRow({
        index: data.length,
        data: data[data.length - 1]
      });
      setShowSidebar(true);
      handleShowToast(true, false);
    } else {
      handleShowToast(true, true);
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
      setSelectedRow({
        index: selectedRow.index,
        data: response.data
      });
      handleGetUsers();
      handleShowToast(true, false);
    } else {
      handleShowToast(true, true);
    }
  };

  const handleDeleteUsers = async () => {
    if (selectedRow.data) {
      const response = await deleteUsers(selectedRow.data.id);
      if (response.data) {
        setSelectedRow({ index: 0, data: null });
        handleGetUsers();
        handleShowToast(true, false);
      } else {
        handleShowToast(true, true);
      }
    }
  };

  const handleSelectedRow = (index: number, dataItem: IUser): void => {
    setSelectedRow({ index, data: dataItem });
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

  const handleItemClick = (itemKey: string) => {
    switch (itemKey) {
      case 'users':
        handleGetUsers();
        break;

      default:
        break;
    }
  };

  return (
    <>
      <header className='main-header'>User Manager</header>
      <main className='main-body'>
        <Drawer
          popperOption={POPOVER_OPTION}
          onItemClick={handleItemClick}
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
            selectedRowIndex={selectedRow.index}
            onRowClick={handleSelectedRow}
          />
        </div>

        {showSidebar && selectedRow.data !== null && (
          <InformationSidebar
            title='User information'
            isActive={selectedRow.data.isActive}
            src={selectedRow.data.avatar}
            bgColor={selectedRow.data.bgColor}
            fullName={selectedRow.data.fullName}
            infoList={userInfoList}
            onEditButton={handleShowPanel}
          />
        )}

        {!showSidebar && selectedRow.data !== null && (
          <Panel
            tabs={[
              {
                content: (
                  <ProfileEditor
                    id={selectedRow.data.id}
                    avatar={selectedRow.data.avatar}
                    fullName={selectedRow.data.fullName}
                    email={selectedRow.data.email}
                    isActive={selectedRow.data.isActive}
                    registeredDate={selectedRow.data.registeredDate}
                    lastVisitedDate={selectedRow.data.lastVisitedDate}
                    details={selectedRow.data.details}
                    bgColor={selectedRow.data.bgColor}
                    onSaveUser={handleUpdateUsers}
                    onDeleteUser={handleDeleteUsers}
                  />
                ),
                title: 'General'
              }
            ]}
            onReturnClick={handleClosePanel}
          />
        )}
      </main>

      {showToast.show &&
        createPortal(
          <Toast
            isError={showToast.isError}
            key={showToast.key}
          />,
          document.querySelector('.main-header') as HTMLElement
        )}
    </>
  );
};

export default App;
