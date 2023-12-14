// Components
import '@components/DataDisplay/ItemNav/ItemNav.css';

// Types
import { IItemNav } from '@types/interface';

const ItemNav = ({
  icon,
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
        src={icon}
        alt='icon' />
    </span>
    <p className='item-content'>{content}</p>
  </li>
);

export default ItemNav;