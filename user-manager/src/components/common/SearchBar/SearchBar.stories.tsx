import type { Meta, StoryObj } from '@storybook/react';

// Components
import SearchBar from '@components/common/SearchBar/index';

// Icons
import closeIcon from '@assets/images/close-icon.svg';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as Meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    icon: closeIcon,
    placeholder: 'Search',
  },
};
