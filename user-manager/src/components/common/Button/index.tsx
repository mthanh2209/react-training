import '@/components/common/Button/Button.css'
import { TType, TVariant, TWithIcon } from '@types';

export interface IButtonProps {
  variants?: TVariant;
  withIcon?: TWithIcon;
  type?: TType;
  icon?: string;
  content?: string;
  onClick(event: React.MouseEvent): void;
}

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
