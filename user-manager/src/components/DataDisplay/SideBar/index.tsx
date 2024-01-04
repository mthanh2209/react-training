// Components
import '@components/DataDisplay/SideBar/SideBar.css';
import InformationList from '@components/DataDisplay/SideBar/InfoList';
import Status from '@components/DataDisplay/Status';
import Avatar from '@components/DataDisplay/Avatar/index';

// Interfaces
import { IInfoList } from '@interfaces/infoList';

interface ISideBarProps {
  title?: string;
  isActive?: boolean;
  src?: string;
  bgColor?: string;
  fullName: string;
  infoList: IInfoList[];
  onEditButton: () => void;
}

const InformationSidebar = ({
  title,
  isActive,
  src,
  bgColor,
  fullName,
  infoList,
  onEditButton
}: ISideBarProps) => {
  return (
    <article className='sidebar'>
      <header className='sidebar-header'>
        <h2 className='sidebar-title'>{title}</h2>
        <Status isActive={isActive} />
        <span className='edit-icon' onClick={onEditButton}></span>
      </header>

      <div className='sidebar-info'>
        <Avatar
          src={src}
          alt={fullName}
          bgColor={bgColor}
          additionalClass='avatar-information'
        />
        <p className='info-name'>{fullName}</p>
      </div>
      <div className='info-list'>
        {infoList.map((infoItem, index) => (
          <InformationList
            key={index}
            icon={infoItem.icon}
            title={infoItem.title}
            content={infoItem.content}
          />
        ))}
      </div>
    </article>
  );
};

export default InformationSidebar;
