import type { Meta, StoryObj } from '@storybook/react';

// Components
import Avatar from '@components/DataDisplay/Avatar/index';

// Helpers
import { getRandomColor } from '@helpers';

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    alt: 'UserName',
    bgColor: getRandomColor(),
    className: 'avatar-circle'
  }
};
