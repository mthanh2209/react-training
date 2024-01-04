import type { Meta, StoryObj } from '@storybook/react';

// Components
import Button from '@components/Inputs/Button/index';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variants: { description: 'Variants of button.' },
    type: { description: 'Types of button.' },
    content: { description: 'Content of button.' }
  }
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
