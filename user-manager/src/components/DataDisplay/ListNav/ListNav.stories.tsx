import type { Meta } from '@storybook/react';
import { useState } from 'react';

// Components
import ListNav from '@components/DataDisplay/ListNav/index';

// Icons
import userIcon from '@assets/images/user-icon.svg';

export default {
  title: 'Components/ListNav',
  component: ListNav
} as Meta;

type ListNavStoryArgs = {
  items: {
    content?: string;
    icon?: string;
    onClick: () => void }[];
};

export const Default = ({
  items
}: ListNavStoryArgs) => {
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
    { content: 'Users', icon: userIcon, onClick: () => {} },
    { content: 'Roles', icon: userIcon, onClick: () => {} },
    { content: 'Rules', icon: userIcon, onClick: () => {} }
  ]
};
