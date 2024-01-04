import type { Meta, StoryObj } from '@storybook/react';

// Components
import Popper from '@components/DataDisplay/Popper/index';

// Icons
import plusIcon from '@assets/images/plus-icon.svg';

export default {
  title: 'Components/Popper',
  component: Popper,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { description: 'One boolean to test for open or close popper options.' },
    icon: { description: 'The icon source.' },
    children: { description: 'Content of Popper.' },
    options: { description: 'List of Popper options.' }
  }
} as Meta;

type Story = StoryObj<typeof Popper>;

export const Default: Story = {
  args: {
    isOpen: false,
    icon: plusIcon,
    children: 'New',
    options: [
      {
        text: 'Add new user',
        onClick: () => {}
      }
    ]
  }
};
