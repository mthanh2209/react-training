import { IUserProps } from "@types/interface";

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
