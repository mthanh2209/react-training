import type { Meta, StoryObj } from '@storybook/react';

// Components
import Avatar from '@components/common/Avatar/index';

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
    avatarText: true,
    bgColor: getRandomColor(),
    className: 'avatar-circle'
  }
};
