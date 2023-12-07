import Modal from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Modal',
  component: Modal
} as Meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    open: true,
    modalHeader: 'Delete',
    modalDesc: 'Are you sure to delete this user?',
    type: 'submit',
    confirmText: 'Delete',
    denyText: 'Cancel'
  }
};
