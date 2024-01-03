import { IUserProps } from "@interfaces/users";

/**
 * Filters an array of user objects based on a search keyword.
 * @param users - The array of user objects to filter.
 * @param searchKeyword - The keyword used for filtering users.
 * @returns An array of user objects that match the search criteria.
 */
export const filterUsers = (
  users: IUserProps[],
  searchKeyword: string
): IUserProps[] => {
  return users.filter((user: IUserProps) => {
    return (
      user.fullName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.email.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  });
};
