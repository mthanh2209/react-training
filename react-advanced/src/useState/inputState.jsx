import { useState } from "react";

export const InputState = () => {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = "background";
  let pictureClassName = "picture";

  if (isActive) {
    pictureClassName += " picture--active";
  } else {
    backgroundClassName += " background--active";
  }

  const handleBackgroundActive = () => {
    setIsActive(false);
  };

  const handlePictureActive = (e) => {
    e.stopPropagation();
    setIsActive(true);
  };

  return (
    <div
      className={backgroundClassName}
      onClick={handleBackgroundActive} >
      <img
        className={pictureClassName}
        onClick={handlePictureActive}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
};
