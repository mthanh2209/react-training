import type { Meta, StoryObj } from '@storybook/react';

// Components
import Sidebar from '@components/DataDisplay/SideBar/index';

// Helpers
import { getRandomColor } from '@helpers/getRandomColor';
import { formatDate } from '@helpers/formatDate';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    title: { description: 'Title of Sidebar.' },
    isActive: { description: 'One boolean to test for active or notActive.' },
    src: { description: 'The image source.' },
    bgColor: { description: 'A randomly generated background color.' },
    fullName: { description: 'Text FullName of user.' },
    infoList: { description: 'List of information of user.' }
  }
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
