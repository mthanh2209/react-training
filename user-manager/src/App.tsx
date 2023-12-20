import '@App.css';
import { useState } from 'react';

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

// Helpers
import { getRandomColor } from '@helpers';

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

const rowData: IUserProps[] = [
  {
    avatar: '',
    fullName: 'User',
    email: 'user@example.com',
    isActive: true,
    bgColor: getRandomColor()
  },
  {
    avatar: '',
    fullName: 'Member',
    email: 'member@example.com',
    isActive: false,
    bgColor: getRandomColor()
  }
];

const App = () => {
  const [rowIndex, setRowIndex] = useState(0);
  const handleSelectedRow = () => {};

  return (
    <>
      <header className='main-header'>User Manager</header>
      <main className='main-body'>
        <Drawer popperOption={popperOption} listNav={listNav} />

        <div className='body-content'>
          <Toolbar />
          <Table
            rowData={rowData}
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
