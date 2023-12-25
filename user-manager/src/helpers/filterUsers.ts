import { IUserProps } from "@interfaces/users";

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
