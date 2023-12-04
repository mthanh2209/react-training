import { TType, TVariant, TWithIcon } from '.';

export interface IButtonProps {
  variants?: TVariant;
  withIcon?: TWithIcon;
  type?: TType;
  icon?: string;
  content?: string;
  onClick(event: React.MouseEvent): void;
}

interface IOption {
  text?: string;
  onClick(event: React.MouseEvent): void;
}

export interface IPopperProps {
  open?: boolean;
  options: IOption[];
}
