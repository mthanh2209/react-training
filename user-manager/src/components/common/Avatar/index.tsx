// Components
import '@components/common/Avatar/Avatar.css';

interface IAvatar {
  src?: string;
  alt: string;
  isAvatarText?: boolean;
  bgColor?: string;
  className?: string
}

const Avatar = ({
  src,
  alt,
  isAvatarText = true,
  bgColor,
  className
}: IAvatar) => {
  const firstLetter = alt.charAt(0);

  return (
    <div
      className={`avatar ${className}`}
      style={{backgroundColor: bgColor}} >
      {isAvatarText
        ? firstLetter
        : <img
          className='avatar-image'
          src={src}
          alt={alt} /> }
    </div>
  );
};

export default Avatar;
