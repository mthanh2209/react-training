import { useEffect, useState } from 'react';

// Components
import '@components/common/ImageUploader/ImageUploader.css';
import Avatar from '@components/common/Avatar';

// Types
import { CustomUserProps } from '@types/interface';

// Icons
import uploadIcon from '@assets/images/upload-icon.svg';

interface IImageUploaderProps {
  users: CustomUserProps;
  hasUrl?: boolean;
  buttonContent?: string;
  icon?: string;
  onChange: () => void;
}
const ImageUploader = ({
  users,
  hasUrl,
  buttonContent = 'Upload new photo',
  icon = uploadIcon,
  onChange
}: IImageUploaderProps) => {
  const [displayImage, setDisplayImage] = useState(hasUrl);

  useEffect(() => {
    setDisplayImage(hasUrl);
  }, [hasUrl]);

  return (
    <div className='uploader-wrapper'>
      <Avatar
        src={users.avatar}
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
        onChange={onChange}
      />
    </div>
  );
};

export default ImageUploader;
