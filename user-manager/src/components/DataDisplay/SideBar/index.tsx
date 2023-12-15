// Components
import '@components/DataDisplay/SideBar/SideBar.css';
import InformationList from '@components/DataDisplay/SideBar/InfoList';
import Status from '@components/DataDisplay/Status';
import Button from '@components/Inputs/Button';
import Avatar from '@components/DataDisplay/Avatar/index';

// Types
import { IInfoList } from '@types/interface';

// Icons
import iconEdit from '@assets/images/edit-icon.svg';

interface ISideBarProps {
  title?: string;
  isActive?: boolean;
  icon?: string;
  src?: string;
  bgColor?: string;
  fullName: string;
  infoList: IInfoList[];
  onEditButton: () => void;
}

const InformationSidebar = ({
  title,
  isActive,
  icon = iconEdit,
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
        <Button
          variants='withIcon'
          type='button'
          icon={icon}
          onClick={onEditButton}
        />
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
