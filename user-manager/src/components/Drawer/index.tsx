import { useState } from 'react';

// Components
import '@components/Drawer/Drawer.css';
import ListNav from '@components/common/ListNav';
import Popper from '@components/common/Popper';

// Types
import { IItemNav, IPopperOption } from '@types/interface';

interface IDrawerProps {
  text?: string
  icon?: string
  popperOption: IPopperOption[];
  listNav: IItemNav[];
}

const Drawer = ({
  text,
  icon,
  popperOption,
  listNav
}: IDrawerProps) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className='drawer-wrapper'>
      <Popper
        icon={icon}
        children={text}
        options={popperOption} />

      <ListNav
        items={listNav}
        selected={selected}
        onClick={(index: number) => setSelected(index)}
      />
    </div>
  );
};

export default Drawer;
