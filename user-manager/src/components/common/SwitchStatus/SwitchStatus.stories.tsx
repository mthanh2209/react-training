import type { Meta, StoryObj } from '@storybook/react';

// Components
import SwitchStatus from '@components/common/SwitchStatus/index';

export default {
  title: 'Components/SwitchStatus',
  component: SwitchStatus
} as Meta;
type Story = StoryObj<typeof SwitchStatus>;

export const Default: Story = {
  args: {
    isChecked: false
  }
};
