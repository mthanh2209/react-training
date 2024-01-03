import type { Meta, StoryObj } from '@storybook/react';

// Components
import Button from '@components/Inputs/Button/index';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variants: 'primary',
    type: 'button',
    content: 'Save',
  },
};

export const Secondary: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    variants: 'secondary'
  },
};
