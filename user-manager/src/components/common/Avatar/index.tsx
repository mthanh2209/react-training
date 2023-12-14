// Components
import '@components/common/Avatar/Avatar.css';

interface IAvatar {
  src?: string;
  alt: string;
  bgColor?: string;
  className?: string;
}

const Avatar = ({
  src,
  alt,
  bgColor,
  className
}: IAvatar) => {
  const firstLetter = alt.charAt(0);

  return (
    <div
      className={`avatar ${className}`}
      style={{ backgroundColor: bgColor }}>
      {src
        ? <img
          className='avatar-image'
          src={src}
          alt={alt} />
        : firstLetter}
    </div>
  );
};

export default Avatar;
