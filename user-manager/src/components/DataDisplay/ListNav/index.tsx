// Components
import ItemNav from '@components/DataDisplay/ItemNav/index';

// Interfaces
import { IItemNav } from '@interfaces/itemNav';

interface IListNavProps {
  items: IItemNav[];
  selected?: number;
  onClick: (index: number) => void;
}

const ListNav = ({
  items,
  selected,
  onClick
}: IListNavProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ItemNav
          key={index}
          icon={item.icon}
          iconSelected={item.iconSelected}
          content={item.content}
          isSelected={index === selected}
          onClick={() => onClick(index)}
        />
      ))}
    </ul>
  );
};

export default ListNav;
