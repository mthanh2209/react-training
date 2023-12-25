import axios from 'axios';

// Constants
import { API_URL, USERS_URL } from '@constants/urls';
import { API_REQUEST, LOADING } from '@constants';

// Helpers
import { getRandomColor } from '@helpers/getRandomColor';

// Interfaces
import { IUserProps as IData } from '@interfaces/users';

axios.defaults.baseURL = API_URL;

type IServiceProps = {
  data: any;
  error: string | null;
};

const handleResponse = (data: any): IServiceProps => ({
  data,
  error: null
});

const handleError = (error?: any): IServiceProps => ({
  error: error
    ? error.message || 'Something went wrong'
    : 'Something went wrong',
  data: null
});

const makeRequest = async (
  method: string,
  url: string,
  data?: any
): Promise<IServiceProps> => {
  try {
    const setLoadingTimeout = (time: number): Promise<void> => {
      return new Promise((resolve) => {
        const loadingTimer = setTimeout(() => {
          resolve();
          clearTimeout(loadingTimer);
        }, time);
      });
    };

    let response;
    if (method === API_REQUEST.GET) {
      response = await axios.get(url);
    } else if (method === API_REQUEST.POST) {
      response = await axios.post(url, data);
    } else if (method === API_REQUEST.PUT) {
      response = await axios.put(url, data);
    } else if (method === API_REQUEST.DELETE) {
      response = await axios.delete(url);
    }

    await setLoadingTimeout(LOADING.TIMER_LOADING);

    if (response && response.data) {
      return handleResponse(response.data);
    } else {
      throw new Error('Empty response');
    }
  } catch (error) {
    return handleError(error);
  }
};

export const getUsers = async (): Promise<IServiceProps> =>
  makeRequest(
    API_REQUEST.GET,
    USERS_URL
  );

export const addUsers = async (
  fullName: string
): Promise<IServiceProps> => {
  const registeredDate = new Date().toISOString();
  const postData = {
    avatar: '',
    fullName,
    email: '',
    isActive: false,
    registeredDate,
    lastVisitedDate: null,
    details: '',
    bgColor: getRandomColor()
  };
  return makeRequest(
    API_REQUEST.POST,
    USERS_URL,
    postData
  );
};

export const updateUsers = async (dataItem: IData): Promise<IServiceProps> =>
  makeRequest(
    API_REQUEST.PUT,
    `${USERS_URL}/${dataItem.id}`,
    dataItem
  );

export const deleteUsers = async (id: number): Promise<IServiceProps> =>
  makeRequest(
    API_REQUEST.DELETE,
    `${USERS_URL}/${id}`
  );
