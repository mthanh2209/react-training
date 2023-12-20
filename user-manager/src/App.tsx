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

// Types
import { IUserProps } from '@types/interface';
import { IColumnProps } from '@types/interface';

// Services
import { get } from '@service';

const popperOption = [{ text: 'Add new user' }];

const listNav = [{ icon: userIcon, content: 'Users' }];

const columns: IColumnProps<IUserProps>[] = [
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
    const getUsers = async () => {
      try {
        const response = await get();
        if (response.data) {
          setUsers(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <header className='main-header'>User Manager</header>
      <main className='main-body'>
        <Drawer popperOption={popperOption} listNav={listNav} />

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
