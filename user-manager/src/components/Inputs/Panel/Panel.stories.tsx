import type { Meta, StoryObj } from '@storybook/react';

// Components
import Panel from '@components/Inputs/Panel/index';

// Helpers
import { getRandomColor, formatDate } from '@helpers';

export default {
  title: 'Components/Panel',
  component: Panel
} as Meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: {
    listBar: ['General'],
    id: 1,
    avatar: '',
    fullName: 'UserName',
    email: 'user@example.com',
    isActive: false,
    registeredDate: formatDate(new Date().toISOString()),
    lastVisitedDate: null,
    details: '',
    bgColor: getRandomColor()
  }
};
