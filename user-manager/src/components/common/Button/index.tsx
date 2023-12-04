import '@/components/common/Button/Button.css';

import { IButtonProps } from '@/types/interfaces';

const Button = ({
  variants,
  withIcon,
  type,
  icon,
  content,
  onClick
}: IButtonProps) => (
  <button
    className={`btn btn-${variants}`}
    type={type}
    onClick={onClick}>
    <span style={{ display: `${withIcon}` }} className='icon-wrapper'>
      <img
        className='icon'
        src={icon}
        alt="icon" />
    </span>
    {content}
  </button >
);

export default Button;
