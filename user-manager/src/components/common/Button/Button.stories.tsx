import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

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
