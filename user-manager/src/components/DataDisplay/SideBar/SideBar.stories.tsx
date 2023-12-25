import type { Meta, StoryObj } from '@storybook/react';

// Components
import Sidebar from '@components/DataDisplay/SideBar/index';

// Helpers
import { getRandomColor } from '@helpers/getRandomColor';
import { formatDate } from '@helpers/formatDate';

export default {
  title: 'Components/Sidebar',
  component: Sidebar
} as Meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    title: 'User information',
    isActive: true,
    bgColor: getRandomColor(),
    fullName: 'UserName',
    infoList: [
      {
        icon: 'email-icon',
        title: 'Email:',
        content: 'user@example.com'
      },
      {
        icon: 'date-icon',
        title: 'Last visited:',
        content: formatDate(new Date().toISOString())
      }
    ]
  }
};
