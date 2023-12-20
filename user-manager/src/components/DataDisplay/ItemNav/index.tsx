// Components
import '@components/DataDisplay/ItemNav/ItemNav.css';

// Types
import { IItemNav } from '@types/interface';

// Icons
import userIcon from '@assets/images/user-icon.svg';
import userIconSelected from '@assets/images/user-icon-selected.svg';

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
        src={icon && isSelected ? userIconSelected : userIcon}
        alt='icon' />
    </span>
    <p className='item-content'>{content}</p>
  </li>
);

export default ItemNav;
