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

export interface CustomUserProps {
  id: string;
  avatar: string;
  fullName: string;
  email: string;
  status: boolean;
  registerDate: Date | null;
  lastVisitedDate: Date | null;
  details?: string;
  bgColor: string;
}
