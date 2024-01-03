import type { Meta, StoryObj } from '@storybook/react';

// Components
import Toast from '@components/DataDisplay/Toast/index';

export default {
  title: 'Components/Toast',
  component: Toast
} as Meta;

type Story = StoryObj<typeof Toast>;

export const SuccessToast: Story = {
  args: {
    isError: false
  }
};

export const FailToast: Story = {
  args: {
    isError: true
  }
};
