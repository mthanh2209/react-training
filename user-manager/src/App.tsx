import '@App.css';
import { useEffect, useState } from 'react';

// Components
import Drawer from '@components/DataDisplay/Drawer';
import Table from '@components/DataDisplay/Table';
import Toolbar from '@components/DataDisplay/Toolbar';
import Status from '@components/DataDisplay/Status';
import Avatar from '@components/DataDisplay/Avatar';

// Icons
import userIcon from '@assets/images/user-icon.svg';
import userIconSelected from '@assets/images/user-icon-selected.svg';

// Types
import { IUserProps as IUser } from '@types/interface';
import { IColumnProps } from '@types/interface';

// Services
import { addUsers, getUsers } from '@service';
import InformationSidebar from '@components/DataDisplay/Sidebar';

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
      content: data.lastVisitedDate
    }
  ];
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);
  const [rowData, setRowData] = useState<IUser | null>(null);
  const [userInfoList, setUserInfoList] = useState<any[]>([]);

  useEffect(() => {
    const handleGetUsers = async () => {
      const response = await getUsers();
      if (response.data) {
        setUsers(response.data);
      }
    };
    handleGetUsers();
  }, []);

  const handleAddUsers = async (userName: string) => {
    const response = await addUsers(userName);
    if (response.data) {
      const { data } = await getUsers();
      setUsers(data);
      setRowIndex(data.length);
      setRowData(data[data.length - 1]);
    }
  };

  useEffect(() => {
    setUserInfoList(infoList(rowData))
  }, [rowData]);

  const handleSelectedRow = (index: number, dataItem: IUser): void => {
    setRowData(dataItem);
    setRowIndex(index);
  };

  const handleShowPanel = () => {};

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

        {rowData !== null && (
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
      </main>
    </>
  );
};

export default App;
