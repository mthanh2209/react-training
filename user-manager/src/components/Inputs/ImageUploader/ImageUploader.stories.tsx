import type { Meta, StoryObj } from '@storybook/react';

// Components
import ImageUploader from '@components/Inputs/ImageUploader/index';

// Helpers
import { getRandomColor } from '@helpers/getRandomColor';

// Icons
import uploadIcon from '@assets/images/upload-icon.svg';

export default {
  title: 'Components/ImageUploader',
  component: ImageUploader
} as Meta;

type Story = StoryObj<typeof ImageUploader>;

export const Default: Story = {
  args: {
    initialImage: '',
    alt: 'User',
    bgColor: getRandomColor(),
    buttonContent: 'Upload new photo',
    icon: uploadIcon
  }
};
