// Components
import '@components/DataDisplay/ItemNav/ItemNav.css';
import { capitalizeLetter } from '@helpers/capitalizeLetter';

interface IItemNav {
  icon?: string;
  content: string;
  additionalClass?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const ItemNav = ({
  icon,
  content,
  additionalClass,
  isSelected,
  onClick
}: IItemNav) => (
  <li
    className={`item-nav ${isSelected ? additionalClass : ''}`}
    onClick={onClick}>
    <span>
      <img
        className='item-icon'
        src={`${icon}`}
        alt='icon' />
    </span>
    <p className='item-content'>{capitalizeLetter(content)}</p>
  </li>
);

export default ItemNav;
