import { getRandomColor } from "@helpers/getRandomColor";

/**
 * Generates a new user object with default or provided information.
 * @param fullName - The full name of the new user.
 * @returns An object representing a new user with default or initialized values.
 */
export const generateNewUser = (fullName: string) => {
  const registeredDate = new Date().getTime();
  return {
    avatar: '',
    fullName,
    email: '',
    isActive: false,
    registeredDate,
    lastVisitedDate: null,
    details: '',
    bgColor: getRandomColor()
  };
};
