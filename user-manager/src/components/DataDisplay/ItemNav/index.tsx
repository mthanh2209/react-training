// Components
import '@components/DataDisplay/ItemNav/ItemNav.css';

// Interfaces
import { IItemNav } from '@interfaces/itemNav';

const ItemNav = ({
  content,
  isSelected,
  onClick
}: IItemNav) => (
  <li
    className={`item-nav ${isSelected ? 'selected' : ''}`}
    onClick={onClick} >
    <span
      className={`item-icon
        ${isSelected ? 'user-icon-selected' : 'user-icon'}`}>
    </span>
    <p className='item-content'>{content}</p>
  </li>
);

export default ItemNav;
