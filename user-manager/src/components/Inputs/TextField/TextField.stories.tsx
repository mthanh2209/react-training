import type { Meta, StoryObj } from '@storybook/react';

// Components
import TextField from '@components/Inputs/TextField/index';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    additionalClass: 'input-search',
    placeholder: 'Full Name',
  },
};
