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

/**
 * Handles a successful response.
 * @param data - The response data.
 * @returns An object representing a successful response.
 */
const handleResponse = (data: any): IResponse => ({
  data,
  error: null
});

/**
 * Handles an error response.
 * @param error - The error object.
 * @returns An object representing an error response.
 */
const handleError = (error?: any): IResponse => ({
  error: error
    ? error.message
    : 'Something went wrong',
  data: null
});

/**
 * Makes an HTTP request.
 * @param method - The HTTP method for the request.
 * @param url - The URL for the request.
 * @param data - Optional data for POST or PUT requests.
 * @returns A Promise resolving to the response object.
 */
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

/**
 * Fetches users from the API.
 * @returns A Promise resolving to the response object.
 */
export const getUsers = async (): Promise<IResponse> =>
  makeRequest(
    API_REQUEST.GET,
    USERS_URL
  );

/**
 * Adds a user to the API.
 * @param fullName - The full name of the user to add.
 * @returns A Promise resolving to the response object.
 */
export const addUsers = async (
  fullName: string
): Promise<IResponse> => {
  return makeRequest(
    API_REQUEST.POST,
    USERS_URL,
    generateNewUser(fullName)
  );
};

/**
 * Updates a user in the API.
 * @param dataItem - The user data to update.
 * @returns A Promise resolving to the response object.
 */
export const updateUsers = async (dataItem: IData): Promise<IResponse> =>
  makeRequest(
    API_REQUEST.PUT,
    `${USERS_URL}/${dataItem.id}`,
    dataItem
  );

/**
 * Deletes a user from the API.
 * @param id - The ID of the user to delete.
 * @returns A Promise resolving to the response object.
 */
export const deleteUsers = async (id: number): Promise<IResponse> =>
  makeRequest(
    API_REQUEST.DELETE,
    `${USERS_URL}/${id}`
  );
