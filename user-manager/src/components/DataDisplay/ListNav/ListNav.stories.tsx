import type { Meta } from '@storybook/react';
import { useState } from 'react';

// Components
import ListNav from '@components/DataDisplay/ListNav/index';

// Icons
import userIcon from '@assets/images/user-icon.svg';
import userIconSelected from '@assets/images/user-icon-selected.svg';

export default {
  title: 'Components/ListNav',
  component: ListNav
} as Meta;

type ListNavStoryArgs = {
  items: {
    content?: string;
    icon?: string;
    iconSelected?: string;
    onClick: () => void;
  }[];
};

export const Default = ({ items }: ListNavStoryArgs) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <ListNav
      items={items}
      selected={selected}
      onClick={(index: number) => setSelected(index)}
    />
  );
};

Default.args = {
  items: [
    {
      content: 'Users',
      icon: userIcon,
      iconSelected: userIconSelected,
      onClick: () => {}
    },
    {
      content: 'Roles',
      icon: userIcon,
      iconSelected: userIconSelected,
      onClick: () => {}
    },
    {
      content: 'Rules',
      icon: userIcon,
      iconSelected: userIconSelected,
      onClick: () => {}
    }
  ]
};
