import type { Meta, StoryObj } from '@storybook/react';

// Components
import Table from '@components/DataDisplay/Table/index';
import Avatar from '@components/DataDisplay/Avatar';
import Status from '@components/DataDisplay/Status';

// Helpers
import { getRandomColor } from '@helpers';
import { IColumnProps, IUserProps } from '@types/interface';

export default {
  title: 'Components/Table',
  component: Table
} as Meta;

type Story = StoryObj<typeof Table>;

const columns: IColumnProps<IUserProps>[] = [
  {
    key: 'avatar' as keyof IUserProps,
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
    key: 'fullName' as keyof IUserProps,
    title: 'Full Name'
  },
  {
    key: 'isActive' as keyof IUserProps,
    title: 'Status',
    render: (_, item: IUserProps) => <Status isActive={item.isActive} />
  },
  {
    key: 'email' as keyof IUserProps,
    title: 'Email'
  }
];

const rowData: IUserProps[] = [
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
];

export const Default: Story = {
  args: {
    rowData: rowData,
    columns: columns as IColumnProps<unknown>[]
  }
};
