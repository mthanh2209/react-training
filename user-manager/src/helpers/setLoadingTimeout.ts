export const setLoadingTimeout = (time: number): Promise<void> => {
  return new Promise((resolve) => {
    const loadingTimer = setTimeout(() => {
      resolve();
      clearTimeout(loadingTimer);
    }, time);
  });
};
