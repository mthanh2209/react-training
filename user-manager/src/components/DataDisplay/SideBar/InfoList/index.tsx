import { IInfoList } from "@types/interface";

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
        {content === '' || null ? 'Unknown' : content}
      </p>
    </>
  );
};

export default InformationList;
