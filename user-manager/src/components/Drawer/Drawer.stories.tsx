import type { Meta, StoryObj } from '@storybook/react';

// Components
import Drawer from '@components/Drawer/index';

// Icons
import plusIcon from '@assets/images/plus-icon.svg';
import userIcon from '@assets/images/user-icon.svg';

export default {
  title: 'Components/Drawer',
  component: Drawer
} as Meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    text: 'Add',
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
    ],
    listNav: [
      { icon: userIcon, content: 'Users' },
      { icon: userIcon, content: 'Roles' }
    ]
  }
};
