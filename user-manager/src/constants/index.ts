/**
 * Enum representing various HTTP request methods.
 */
export const API_REQUEST = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put'
};

/**
 * Enum representing different types of toast types.
 */
export const TOAST_TYPE = {
  ERROR: 'error',
  SUCCESS: 'success'
};

/**
 * Object containing loading timers.
 */
export const LOADING = {
  TIMER_LOADING: 1000,
  TIMER_HIDE_LOADING: 2000
};

/**
 * Object containing validation error messages.
 */
export const VALIDATION_MESSAGE = {
  INVALID_NAME: 'Full name cannot be empty or contain only spaces',

  EMAIL_REQUIRED: 'The email is required',
  INVALID_EMAIL: 'Invalid email format',

  INVALID_IMAGE: 'Invalid file or file size exceeds the allowed limit'
};
