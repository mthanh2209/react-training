import { TType, TVariant, TWithIcon } from '.';

export interface IButtonProps {
  variants?: TVariant;
  withIcon?: TWithIcon;
  type?: TType;
  icon?: string;
  content?: string;
  onClick(event: React.MouseEvent): void;
}
