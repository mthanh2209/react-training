import type { Meta, StoryObj } from '@storybook/react';

// Components
import Toast from '@components/DataDisplay/Toast/index';

export default {
  title: 'Components/Toast',
  component: Toast
} as Meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    isError: false
  }
};
