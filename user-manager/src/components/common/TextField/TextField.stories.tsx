import TextField from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    className: 'text',
    value: '',
    placeholder: 'Full Name',
    errorText: ''
  },
};
