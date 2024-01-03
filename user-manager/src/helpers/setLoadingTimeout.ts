/**
 * Sets a loading timeout that resolves after the specified time.
 * @param time - The duration of the timeout in milliseconds.
 * @returns A Promise that resolves after the specified time.
 */
export const setLoadingTimeout = (time: number): Promise<void> => {
  return new Promise((resolve) => {
    const loadingTimer = setTimeout(() => {
      resolve();
      clearTimeout(loadingTimer);
    }, time);
  });
};
