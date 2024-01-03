import type { Meta, StoryObj } from '@storybook/react';

// Components
import Modal from '@components/DataDisplay/Modal/index';

export default {
  title: 'Components/Modal',
  component: Modal
} as Meta;

type Story = StoryObj<typeof Modal>;

export const ModalSubmit: Story = {
  args: {
    isOpen: true,
    modalDesc: 'Enter user name',
    type: 'submit',
    confirmText: 'Save'
  }
};

export const ConfirmDialog: Story = {
  args: {
    isOpen: true,
    modalTitle: 'Delete',
    modalDesc: 'Are you sure to delete this user?',
    type: 'confirm',
    confirmText: 'Delete',
    denyText: 'Cancel'
  }
};
