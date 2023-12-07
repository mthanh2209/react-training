import type { Meta, StoryObj } from '@storybook/react';

// Components
import Button from '@components/common/Button/index';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variants: 'primary',
    withIcon: 'none',
    type: 'button',
    content: 'Save',
  },
};
