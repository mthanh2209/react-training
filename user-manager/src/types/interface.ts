export interface IPopperOption {
  text?: string;
  onClick?: () => void;
}

export interface IItemNav {
  icon?: string;
  content?: string;
  selected?: boolean;
  onClick?: () => void;
}

export interface IColumn<T> {
  key: keyof T;
  title: string;
  render?: (
    column: IColumn<T>,
    item: T
  ) => JSX.Element;
}
