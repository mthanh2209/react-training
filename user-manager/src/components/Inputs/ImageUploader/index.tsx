import { ChangeEvent, useState } from 'react';

// Components
import '@components/Inputs/ImageUploader/ImageUploader.css';
import Avatar from '@components/DataDisplay/Avatar';

// Types
import { convertToDataURL } from '@helpers';

// Icons
import uploadIcon from '@assets/images/upload-icon.svg';

interface IImageUploaderProps {
  avatar: string;
  fullName: string;
  alt: string;
  bgColor?: string;
  buttonContent?: string;
  icon?: string;
  onChange: (data: string) => void;
}
const ImageUploader = ({
  avatar,
  fullName,
  alt = fullName,
  bgColor,
  buttonContent = 'Upload new photo',
  icon = uploadIcon,
  onChange
}: IImageUploaderProps) => {
  const [uploadImage, setUploadImage] = useState<string | null>(null);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const inputFile = event.target.files?.[0];
    const imageDataURL = await convertToDataURL(inputFile);

    if (imageDataURL) {
      setUploadImage(imageDataURL as string);
      onChange(imageDataURL as string);
    }
  };

  return (
    <div className='uploader-wrapper'>
      <Avatar
        src={uploadImage != null ? uploadImage : avatar}
        alt={alt}
        bgColor={bgColor}
        className='avatar-edit-information'
      />

      <label
        className='uploader-button'
        htmlFor='button-upload-image'>
        <span>
          <img
            className='uploader-icon'
            src={icon}
            alt='icon' />
        </span>
        {buttonContent}
      </label>

      <input
        className='input-uploader'
        type='file'
        accept='image/*'
        id='button-upload-image'
        name={fullName}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ImageUploader;
