import { Meta, StoryObj } from '@storybook/react';
import ItemNav from '@components/DataDisplay/ItemNav/index';

// Icons
import userIconSelected from '@assets/images/user-icon-selected.svg';
import userIcon from '@assets/images/user-icon.svg';

export default {
  title: 'Components/ItemNav',
  component: ItemNav
} as Meta;

type Story = StoryObj<typeof ItemNav>;

export const Default: Story = {
  args: {
    content: 'Users',
    additionalClass: '',
    isSelected: false,
    icon: userIcon
  }
};

export const ItemNavSelected: Story = {
  args: {
    content: 'Users',
    additionalClass: 'selected',
    isSelected: true,
    icon: userIconSelected
  }
};
