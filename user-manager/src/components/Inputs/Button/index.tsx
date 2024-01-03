// Components
import '@components/Inputs/Button/Button.css'

// Types
type TVariant = 'primary' | 'secondary';
type TType = 'button' | 'submit';

export interface IButtonProps {
  variants?: TVariant;
  type?: TType;
  form?: string;
  content?: string;
  onClick?: () => void
}

const Button = ({
  variants,
  type,
  form,
  content,
  onClick
}: IButtonProps) => (
  <button
    className={`btn btn-${variants}`}
    type={type}
    form={form}
    onClick={onClick}>
    {content}
  </button >
);

export default Button;
