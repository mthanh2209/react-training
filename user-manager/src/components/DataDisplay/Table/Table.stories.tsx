import type { Meta, StoryObj } from '@storybook/react';

// Components
import Table from '@components/DataDisplay/Table/index';
import Avatar from '@components/DataDisplay/Avatar';
import Status from '@components/DataDisplay/Status';

// Helpers
import { getRandomColor } from '@helpers/getRandomColor';

// Interfaces
import { IUserProps } from '@interfaces/users';
import { IColumnProps } from '@interfaces/columns';

export default {
  title: 'Components/Table',
  component: Table
} as Meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    rowData: [
      {
        id: 1,
        avatar: '',
        fullName: 'User',
        email: 'user@example.com',
        isActive: true,
        bgColor: getRandomColor()
      },
      {
        id: 2,
        avatar: '',
        fullName: 'Member',
        email: 'member@example.com',
        isActive: false,
        bgColor: getRandomColor()
      }
    ],
    columns: [
      {
        key: 'avatar',
        title: '',
        render: (_, item: IUserProps) => (
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
        render: (_, item: IUserProps) => <Status isActive={item.isActive} />
      },
      {
        key: 'email',
        title: 'Email'
      }
    ] as IColumnProps<unknown>[]
  }
};

export const UserSelected: Story = {
  ...Default,
  args: {
    ...Default.args,
    selectedRowIndex: 1
  }
};
