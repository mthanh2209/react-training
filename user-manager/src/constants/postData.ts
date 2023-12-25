import { getRandomColor } from "@helpers/getRandomColor";

export const POST_DATA = (fullName: string) => {
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
