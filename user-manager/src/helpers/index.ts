export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const convertToDataURL = (file?: File) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file!);

    fileReader.onloadend = (event) => {
      const imageUrl = event.target?.result;
      if (imageUrl) {
        resolve(imageUrl.toString());
      }
    };
  });
};

export const getObjValue = <T, Key extends keyof T>(
  obj: T,
  key: Key
): T[Key] => {
  return obj[key];
};

export const renderDate = (data: string) => {
  const dateData = new Date(data);
  return dateData.toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'medium'
  });
};
