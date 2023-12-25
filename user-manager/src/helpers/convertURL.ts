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
