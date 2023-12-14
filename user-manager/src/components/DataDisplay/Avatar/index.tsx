// Components
import '@components/DataDisplay/Avatar/Avatar.css';

interface IAvatar {
  src?: string;
  alt: string;
  bgColor?: string;
  additionalClass?: string;
}

const Avatar = ({
  src,
  alt,
  bgColor,
  additionalClass
}: IAvatar) => {
  const firstLetter = alt.charAt(0);

  return (
    <div
      className={`avatar ${additionalClass}`}
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
