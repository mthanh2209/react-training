export interface IPopperOption {
  text?: string;
  onClick?: () => void;
}

export interface IItemNav {
  icon?: string;
  iconSelected?: string;
  content?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export interface IColumnProps<T> {
  key: keyof T;
  title: string;
  render?: (column: IColumnProps<T>, item: T) => JSX.Element;
}

export interface IUserProps {
  id: number;
  avatar: string;
  fullName: string;
  email: string;
  isActive: boolean;
  registeredDate: string | null;
  lastVisitedDate: string;
  details: string;
  bgColor: string;
}

export interface IInfoList {
  icon?: string;
  title?: string;
  content?: string | null;
}
