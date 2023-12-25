// Components
import '@components/DataDisplay/ItemNav/ItemNav.css';

// Interfaces
import { IItemNav } from '@interfaces/itemNav';

const ItemNav = ({
  icon,
  iconSelected,
  content,
  isSelected,
  onClick
}: IItemNav) => (
  <li
    className={`item-nav ${isSelected ? 'selected' : ''}`}
    onClick={onClick}>
    <span>
      <img
        className='icon-item'
        src={isSelected ? iconSelected : icon}
        alt='icon' />
    </span>
    <p className='item-content'>{content}</p>
  </li>
);

export default ItemNav;
