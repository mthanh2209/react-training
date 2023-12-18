import axios from 'axios';

// Constants
import { USERS_URL } from '@constants/urls';

// Helpers
import { getRandomColor } from '@helpers';

// Types
import { IUserProps as IData } from '@types/interface';

export const get = async () => {
  try {
    const data = await axios.get(USERS_URL);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const post = async (id: number, fullName: string) => {
  try {
    const registeredDate = new Date().toISOString();

    const data = await axios.post(USERS_URL, {
      id: id,
      avatar: '',
      fullName: fullName,
      email: '',
      isActive: false,
      registeredDate: registeredDate,
      lastVisitedDate: null,
      details: '',
      bgColor: getRandomColor()
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const update = async (dataItem: IData) => {
  try {
    const data = await axios.put(`${USERS_URL}/${dataItem.id}`, {
      id: dataItem.id,
      avatar: dataItem.avatar,
      fullName: dataItem.fullName,
      email: dataItem.email,
      isActive: dataItem.isActive,
      registeredDate: dataItem.registeredDate,
      lastVisitedDate: dataItem.lastVisitedDate,
      details: dataItem.details,
      bgColor: dataItem.bgColor
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const deleted = async (id: number) => {
  try {
    const data = await axios.delete(`${USERS_URL}/${id}`);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
