import type { Meta, StoryObj } from '@storybook/react';

// Components
import Avatar from '@components/DataDisplay/Avatar/index';

// Helpers
import { getRandomColor } from '@helpers/getRandomColor';

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarCircle: Story = {
  args: {
    alt: 'UserName',
    bgColor: getRandomColor(),
    additionalClass: 'avatar-circle'
  }
};

export const AvatarInformation: Story = {
  args: {
    alt: 'UserName',
    bgColor: getRandomColor(),
    additionalClass: 'avatar-information'
  }
};

export const AvatarEditInformation: Story = {
  args: {
    alt: 'UserName',
    bgColor: getRandomColor(),
    additionalClass: 'avatar-edit-information'
  }
};

export const AvatarUploaded: Story = {
  ...AvatarInformation,
  args: {
    ...AvatarInformation.args,
    src: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
  }
};
