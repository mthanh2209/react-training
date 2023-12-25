export const formatDate = (data: string) => {
  const dateData = new Date(data);
  return dateData.toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'medium'
  });
};
