import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

// Components
import ItemNav from '@components/DataDisplay/ItemNav/index';

// Icons
import userIconSelected from '@assets/images/user-icon-selected.svg';
import userIcon from '@assets/images/user-icon.svg';

export default {
  title: 'Components/ItemNav',
  component: ItemNav
} as Meta;

type Story = StoryObj<typeof ItemNav>;

// const [itemSelected, setItemSelected] = useState<number | null>(null);

// const renderIcon = (
//   type: string,
//   index: number
// ) => {
//   switch (type) {
//     case 'users':
//       const condition = itemSelected === index
//         ? userIconSelected
//         : userIcon;
//       return condition;

//     default:
//       break;
//   }
// };

export const Default: Story = {
  args: {
    content: 'users',
    additionalClass: 'selected',
    isSelected: true,
  }
};
