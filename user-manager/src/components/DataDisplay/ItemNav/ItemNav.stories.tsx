import type { Meta, StoryObj } from '@storybook/react';

// Components
import ItemNav from '@components/DataDisplay/ItemNav/index';

export default {
  title: 'Components/ItemNav',
  component: ItemNav
} as Meta;

type Story = StoryObj<typeof ItemNav>;

export const Default: Story = {
  args: {
    content: 'Users',
    isSelected: false
  }
};
