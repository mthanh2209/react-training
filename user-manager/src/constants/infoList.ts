// Helpers
import { formatDate } from "@helpers/formatDate";

// Interfaces
import { IUserProps } from "@interfaces/users";

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
