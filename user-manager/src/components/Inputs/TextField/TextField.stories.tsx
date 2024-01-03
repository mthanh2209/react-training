import type { Meta, StoryObj } from '@storybook/react';

// Components
import TextField from '@components/Inputs/TextField/index';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;
type Story = StoryObj<typeof TextField>;

export const InputSearch: Story = {
  args: {
    isShowLabel: true,
    label: 'Label',
    additionalClass: 'input-search',
    placeholder: 'Full Name',
  },
};

export const InputText: Story = {
  ...InputSearch,
  args: {
    ...InputSearch.args,
    additionalClass: 'input-text',
  },
};

export const InputSubmit: Story = {
  ...InputSearch,
  args: {
    ...InputSearch.args,
    additionalClass: 'input-submit',
  },
};
