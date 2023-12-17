import type { Meta, StoryObj } from '@storybook/react';

// Components
import Sidebar from '@components/DataDisplay/Sidebar/index';

// Helpers
import { getRandomColor, renderDate } from '@helpers';

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
        content: renderDate(new Date().toISOString())
      }
    ]
  }
};
