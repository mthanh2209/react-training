import ItemNav from '.';
import type { Meta, StoryObj } from '@storybook/react';
import userIcon from '@assets/images/user-icon.svg';

export default {
  title: 'Components/ItemNav',
  component: ItemNav,
} as Meta;

type Story = StoryObj<typeof ItemNav>;

export const Default: Story = {
  args: {
    icon: userIcon,
    content: 'Users',
    selected: false
  },
};
