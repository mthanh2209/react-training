import type { Meta, StoryObj } from '@storybook/react';

// Components
import Panel from '@components/DataDisplay/Panel/index';

// Helpers
import { getRandomColor } from '@helpers/getRandomColor';

export default {
  title: 'Components/Panel',
  component: Panel
} as Meta;

type Story = StoryObj<typeof Panel>;

const date = new Date().toISOString()

export const Default: Story = {
  args: {
    tabs: ['General'],
    id: 1,
    avatar: '',
    fullName: 'UserName',
    email: 'user@example.com',
    isActive: false,
    registeredDate: date,
    lastVisitedDate: null,
    details: '',
    bgColor: getRandomColor()
  }
};
