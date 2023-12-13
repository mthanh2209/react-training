import type { Meta, StoryObj } from '@storybook/react';

// Components
import Toolbar from '@components/Toolbar/index';

// Icons
import searchIcon from '@assets/images/search-icon.svg';

export default {
  title: 'Components/Toolbar',
  component: Toolbar
} as Meta;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  args: {
    icon: searchIcon,
    content: 'User'
  }
};
