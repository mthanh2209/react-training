import '@App.css';
import { useEffect, useState } from 'react';

// Components
import Drawer from '@components/DataDisplay/Drawer';
import Table from '@components/DataDisplay/Table';
import Toolbar from '@components/DataDisplay/Toolbar';
import Status from '@components/DataDisplay/Status';
import Avatar from '@components/DataDisplay/Avatar';
import InformationSidebar from '@components/DataDisplay/Sidebar';
import Panel from '@components/Inputs/Panel';

// Icons
import userIcon from '@assets/images/user-icon.svg';
import userIconSelected from '@assets/images/user-icon-selected.svg';

// Types
import { IUserProps as IUser } from '@types/interface';
import { IColumnProps } from '@types/interface';

// Services
import { addUsers, getUsers, updateUsers } from '@service';

// Helpers
import { formatDate } from '@helpers';

const popperOption = [{ text: 'Add new user' }];

const listNav = [
  {
    icon: userIcon,
    iconSelected: userIconSelected,
    content: 'Users'
  }
];

const columns: IColumnProps<IUser>[] = [
  {
    key: 'avatar',
    title: '',
    render: (_, item) => (
      <Avatar
        src={item.avatar}
        alt={item.fullName}
        bgColor={item.bgColor}
        additionalClass='avatar-circle'
      />
    )
  },
  {
    key: 'fullName',
    title: 'Full Name'
  },
  {
    key: 'isActive',
    title: 'Status',
    render: (_, item) => <Status isActive={item.isActive} />
  },
  {
    key: 'email',
    title: 'Email'
  }
];

const infoList = (data: IUser | null) => {
  if (!data) return [];
  return [
    {
      icon: 'email-icon',
      title: 'Email:',
      content: data.email
    },
    {
      icon: 'date-icon',
      title: 'Last visited:',
      content:
        data.lastVisitedDate !== null
          ? formatDate(data.lastVisitedDate)
          : 'Unknown'
    }
  ];
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);
  const [rowData, setRowData] = useState<IUser | null>(null);
  const [userInfoList, setUserInfoList] = useState<any[]>([]);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleGetUsers = async () => {
    const response = await getUsers();
    if (response.data) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    if (rowData) {
      setUserInfoList(infoList(rowData));
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
    console.log(response);
    if (response.data) {
      setRowData(response.data);
      handleGetUsers();
    }
  };

  const handleDeleteUsers = () => {};

  const handleSelectedRow = (index: number, dataItem: IUser): void => {
    setRowData(dataItem);
    setRowIndex(index);
    if (showSidebar || showSidebar === null) {
      setShowSidebar(true);
    } else if (!showSidebar) {
      setShowSidebar(false);
    }
  };

  return (
    <>
      <header className='main-header'>User Manager</header>
      <main className='main-body'>
        <Drawer
          popperOption={popperOption}
          listNav={listNav}
          onSubmit={handleAddUsers}
        />

        <div className='body-content'>
          <Toolbar />
          <Table
            rowData={users}
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
            listBar={['General']}
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
