export interface IPopperOption {
  text?: string;
  onClick?: () => void;
}

export interface IItemNav {
  icon?: string;
  content?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export interface CustomColumnProps<T> {
  key: keyof T;
  title: string;
  render?: (
    column: CustomColumnProps<T>,
    item: T
  ) => JSX.Element;
}

export interface CustomUserProps {
  id: number;
  avatar: string;
  fullName: string;
  email: string;
  isActive: boolean;
  registeredDate?: string | null;
  lastVisitedDate?: string | null;
  details?: string;
  bgColor: string;
}
