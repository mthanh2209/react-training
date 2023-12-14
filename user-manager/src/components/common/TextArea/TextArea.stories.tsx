import type { Meta, StoryObj } from '@storybook/react';

// Components
import TextArea from '@components/common/TextArea/index';

export default {
  title: 'Components/TextArea',
  component: TextArea
} as Meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Details'
  }
};
