import axios from 'axios';

// Constants
import { API_URL, USERS_URL } from '@constants/urls';
import { API_REQUEST, LOADING } from '@constants';

// Helpers
import { setLoadingTimeout } from '@helpers/setLoadingTimeout';
import { generateNewUser } from '@helpers/generateNewUser';

// Interfaces
import { IUserProps as IData } from '@interfaces/users';

axios.defaults.baseURL = API_URL;

type IResponse = {
  data: any;
  error: string | null;
};

const handleResponse = (data: any): IResponse => ({
  data,
  error: null
});

const handleError = (error?: any): IResponse => ({
  error: error
    ? error.message
    : 'Something went wrong',
  data: null
});

const makeRequest = async (
  method: string,
  url: string,
  data?: any
): Promise<IResponse> => {
  try {
    let response;
    switch (method) {
      case API_REQUEST.GET:
        response = await axios.get(url);
        break;
      case API_REQUEST.POST:
        response = await axios.post(url, data);
        break;
      case API_REQUEST.PUT:
        response = await axios.put(url, data);
        break;
      case API_REQUEST.DELETE:
        response = await axios.delete(url);
        break;
      default:
        break;
    }

    await setLoadingTimeout(LOADING.TIMER_LOADING);

    if (response && response.data) {
      return handleResponse(response.data);
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    return handleError(error);
  }
};

export const getUsers = async (): Promise<IResponse> =>
  makeRequest(
    API_REQUEST.GET,
    USERS_URL
  );

export const addUsers = async (
  fullName: string
): Promise<IResponse> => {
  return makeRequest(
    API_REQUEST.POST,
    USERS_URL,
    generateNewUser(fullName)
  );
};

export const updateUsers = async (dataItem: IData): Promise<IResponse> =>
  makeRequest(
    API_REQUEST.PUT,
    `${USERS_URL}/${dataItem.id}`,
    dataItem
  );

export const deleteUsers = async (id: number): Promise<IResponse> =>
  makeRequest(
    API_REQUEST.DELETE,
    `${USERS_URL}/${id}`
  );
