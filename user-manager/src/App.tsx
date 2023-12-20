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

const App = () => {
  const [users, setUsers] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);
  const handleSelectedRow = () => {};

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
      </main>
    </>
  );
};

export default App;
