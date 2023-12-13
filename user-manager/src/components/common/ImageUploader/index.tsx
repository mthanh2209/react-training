import { ChangeEvent, useEffect, useState } from 'react';

// Components
import '@components/common/ImageUploader/ImageUploader.css';
import Avatar from '@components/common/Avatar';

// Types
import { CustomUserProps } from '@types/interface';
import { convertToDataURL } from '@helpers';

// Icons
import uploadIcon from '@assets/images/upload-icon.svg';

interface IImageUploaderProps {
  users: CustomUserProps;
  hasUrl?: boolean;
  buttonContent?: string;
  icon?: string;
  onChange: (data: string) => void;
}
const ImageUploader = ({
  users,
  hasUrl,
  buttonContent = 'Upload new photo',
  icon = uploadIcon,
  onChange
}: IImageUploaderProps) => {
  const [displayImage, setDisplayImage] = useState(hasUrl);
  const [uploadImage, setUploadImage] = useState<string | null>(null);

  useEffect(() => {
    setDisplayImage(hasUrl);
    setUploadImage(users.avatar);
  }, [hasUrl, users]);

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
        src={uploadImage != null ? uploadImage : users.avatar}
        alt={users.fullName}
        bgColor={users.bgColor}
        className='avatar-edit-information'
        hasUrl={displayImage}
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
        name={users.fullName}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ImageUploader;
