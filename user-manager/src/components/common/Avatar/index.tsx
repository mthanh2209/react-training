// Components
import '@components/common/Avatar/Avatar.css';

interface IAvatar {
  src?: string;
  alt: string;
  avatarText?: boolean;
  bgColor?: string;
  className?: string
}

const Avatar = ({
  src,
  alt,
  avatarText = true,
  bgColor,
  className
}: IAvatar) => {
  const firstLetter = alt.charAt(0);

  return (
    <div
      className={`avatar ${className}`}
      style={{backgroundColor: bgColor}} >
      {avatarText
        ? firstLetter
        : <img
          className='avatar-image'
          src={src}
          alt={alt} /> }
    </div>
  );
};

export default Avatar;
