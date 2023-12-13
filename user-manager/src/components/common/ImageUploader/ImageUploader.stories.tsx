import type { Meta, StoryObj } from '@storybook/react';

// Components
import ImageUploader from '@components/common/ImageUploader/index';

// Helpers
import { getRandomColor } from '@helpers';

// Icons
import uploadIcon from '@assets/images/upload-icon.svg';

export default {
  title: 'Components/ImageUploader',
  component: ImageUploader,
} as Meta;

type Story = StoryObj<typeof ImageUploader>;

export const Default: Story = {
  args: {
    users: {
      id: '1',
      avatar: '',
      fullName: 'User',
      email: 'user@example.com',
      status: true,
      registerDate: null,
      lastVisitedDate: null,
      bgColor: getRandomColor(),
    },
    hasUrl: true,
    buttonContent: 'Upload new photo',
    icon: uploadIcon
  },
};
