import { useState } from 'react';

// Components
import '@components/DataDisplay/Drawer/Drawer.css';
import ListNav from '@components/DataDisplay/ListNav';
import Popper from '@components/DataDisplay/Popper';

// Types
import { IItemNav, IPopperOption } from '@types/interface';

// Icons
import plusIcon from '@assets/images/plus-icon.svg';

interface IDrawerProps {
  text?: string;
  icon?: string;
  popperOption: IPopperOption[];
  listNav: IItemNav[];
}

const Drawer = ({
  text = 'Add',
  icon = plusIcon,
  popperOption,
  listNav
}: IDrawerProps) => {
  const [isSelected, setSelected] = useState<number>(0);

  return (
    <div className='drawer-wrapper'>
      <Popper
        icon={icon}
        children={text}
        options={popperOption}
      />

      <ListNav
        items={listNav}
        selected={isSelected}
        onClick={(index: number) => setSelected(index)}
      />
    </div>
  );
};

export default Drawer;
