import '@components/common/ItemNav/ItemNav.css';
import { IItemNav } from '@types/interface';

const ItemNav = ({
  icon,
  content,
  selected,
  onClick
}: IItemNav) => (
  <li
    className={`item-nav ${selected ? 'selected' : ''}`}
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
