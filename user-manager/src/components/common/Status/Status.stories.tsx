import type { Meta, StoryObj } from '@storybook/react';

// Components
import Status from '@components/common/Status/index';

export default {
  title: 'Components/Status',
  component: Status,
} as Meta;

type Story = StoryObj<typeof Status>;

export const Default: Story = {
  args: {
    isActive: true
  },
};
