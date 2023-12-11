// Components
import ItemNav from '@components/common/ItemNav/index';

// Types
import { IItemNav } from '@types/interface';

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
          content={item.content}
          isSelected={index === selected}
          onClick={() => onClick(index)}
        />
      ))}
    </ul>
  );
};

export default ListNav;
