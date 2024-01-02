import type { Meta, StoryObj } from '@storybook/react';

// Components
import ListNav from '@components/DataDisplay/ListNav/index';

export default {
  title: 'Components/ListNav',
  component: ListNav
} as Meta;

type Story = StoryObj<typeof ListNav>;

export const Default: Story = {
  args: {
    items: ['users', 'roles', 'rules']
  }
};
