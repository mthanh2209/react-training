import type { Meta, StoryObj } from '@storybook/react';
import Table from '@components/Table/index';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
  },
};
