import type { Meta, StoryObj } from '@storybook/react';

// Components
import Modal from '@components/common/Modal/index';

export default {
  title: 'Components/Modal',
  component: Modal
} as Meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    modalTitle: 'Delete',
    modalDesc: 'Are you sure to delete this user?',
    type: 'submit',
    confirmText: 'Delete',
    denyText: 'Cancel'
  }
};
