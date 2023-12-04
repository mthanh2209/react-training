import type { Meta, StoryObj } from '@storybook/react';
import Popper from '.';

export default {
  title: 'Components/Popper',
  component: Popper,
} as Meta;

type Story = StoryObj<typeof Popper>;

export const Default: Story = {
  args: {
    open: false,
    options: [{
      text: 'Add new user',
      onClick: () => { }
    }]
  },
};
