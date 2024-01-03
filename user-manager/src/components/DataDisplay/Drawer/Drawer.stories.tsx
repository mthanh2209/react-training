import type { Meta, StoryObj } from '@storybook/react';

// Components
import Drawer from '@components/DataDisplay/Drawer/index';

// Icons
import plusIcon from '@assets/images/plus-icon.svg';

export default {
  title: 'Components/Drawer',
  component: Drawer
} as Meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    icon: plusIcon,
    popperOption: [
      {
        text: 'Add new user',
        onClick: () => {}
      },
      {
        text: 'Add new role',
        onClick: () => {}
      }
    ]
  }
};
