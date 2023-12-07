import type { Meta, StoryObj } from '@storybook/react';
import Popper from '.';
import plusIcon from '@assets/images/plus-icon.svg';

export default {
  title: 'Components/Popper',
  component: Popper,
} as Meta;

type Story = StoryObj<typeof Popper>;

export const Default: Story = {
  args: {
    open: false,
    icon: plusIcon,
    children: 'Add',
    options: [{
      text: 'Add new user',
      onClick: () => { }
    }]
  },
};
