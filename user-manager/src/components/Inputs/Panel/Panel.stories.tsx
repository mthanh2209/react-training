import type { Meta, StoryObj } from '@storybook/react';

// Components
import Panel from '@components/Inputs/Panel/index';
import { getRandomColor } from '@helpers';

export default {
  title: 'Components/Panel',
  component: Panel
} as Meta;

type Story = StoryObj<typeof Panel>;

const currentDate = new Date().toString();

export const Default: Story = {
  args: {
    listBar: ['General'],
    itemData: {
      id: 1,
      avatar: '',
      fullName: 'UserName',
      email: 'user@example.com',
      isActive: false,
      registeredDate: currentDate,
      lastVisitedDate: null,
      details: '',
      bgColor: getRandomColor()
    }
  }
};
