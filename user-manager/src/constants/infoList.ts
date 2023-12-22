// Helpers
import { formatDate } from "@helpers";

// Types
import { IUserProps } from "@types/interface";

export const INFO_LIST = (data: IUserProps | null) => {
  if (!data) return [];
  return [
    {
      icon: 'email-icon',
      title: 'Email:',
      content: data.email
    },
    {
      icon: 'date-icon',
      title: 'Last visited:',
      content:
        data.lastVisitedDate !== null
          ? formatDate(data.lastVisitedDate)
          : 'Unknown'
    }
  ];
};
