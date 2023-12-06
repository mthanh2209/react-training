import { TType, TVariant, TWithIcon } from '.';

export interface IButtonProps {
  variants?: TVariant;
  withIcon?: TWithIcon;
  type?: TType;
  icon?: string;
  content?: string;
  onClick(event: React.MouseEvent): void;
}

export interface ITextFieldProps {
  className?: string;
  value?: string;
  placeholder?: string;
  errorText?: string;
  invalid?: boolean;
  onChange?: (value: string) => void;
}
