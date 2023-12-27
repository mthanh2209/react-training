// Components
import '@components/Inputs/Button/Button.css'

// Types
type TVariant = 'primary' | 'secondary' | 'withIcon';
type TType = 'button' | 'submit';
type TWithIcon = 'none' | 'block';

export interface IButtonProps {
  variants?: TVariant;
  withIcon?: TWithIcon;
  type?: TType;
  form?: string;
  icon?: string;
  content?: string;
  onClick?: () => void
}

const Button = ({
  variants,
  withIcon,
  type,
  form,
  icon,
  content,
  onClick
}: IButtonProps) => (
  <button
    className={`btn btn-${variants}`}
    type={type}
    form={form}
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
