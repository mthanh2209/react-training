import iconEdit from '@assets/images/edit-icon.svg';
import Status from '../Status';
import Button from '@components/Inputs/Button';
import Avatar from './../Avatar/index';
// Components
import '@components/DataDisplay/SideBar/SideBar.css';
import { IInfoList } from '@types/interface';

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
          <>
            <div className='info-list-header' key={index}>
              <span className={`info-list-icon ${infoItem.icon}`}></span>
              {infoItem.title}
            </div>
            <p className='info-list-content'>
              {infoItem.content === '' || null ? 'Unknown' : infoItem.content}
            </p>
          </>
        ))}
      </div>
    </article>
  );
};

export default InformationSidebar;
