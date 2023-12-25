import { IInfoList } from "@interfaces/infoList";

const InformationList = ({
  icon,
  title,
  content
}: IInfoList) => {
  return (
    <>
      <div className='info-list-header'>
        <span className={`info-list-icon ${icon}`}></span>
        {title}
      </div>
      <p className='info-list-content'>
      {content === null || content === '' ? 'Unknown' : content}
      </p>
    </>
  );
};

export default InformationList;
