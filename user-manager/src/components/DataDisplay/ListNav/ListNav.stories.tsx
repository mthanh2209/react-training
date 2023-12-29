import type { Meta } from '@storybook/react';
import { useState } from 'react';

// Components
import ListNav from '@components/DataDisplay/ListNav/index';

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
      onClick: () => {}
    },
    {
      content: 'Roles',
      onClick: () => {}
    },
    {
      content: 'Rules',
      onClick: () => {}
    }
  ]
};
