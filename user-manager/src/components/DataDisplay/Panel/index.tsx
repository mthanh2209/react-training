import { useState } from 'react';

// Components
import '@components/DataDisplay/Panel/Panel.css';
import Button from '@components/Inputs/Button';
import Tabs from '@components/DataDisplay/Panel/Tabs';
import ProfileEditor from '@components/DataDisplay/Panel/ProfileEditor';

// Interfaces
import { IUserProps } from '@interfaces/users';

// Icons
import backIcon from '@assets/images/back-icon.svg';

interface IPanelProp {
  tabs: string[];
  id: number;
  avatar: string;
  fullName: string;
  email: string;
  isActive: boolean;
  registeredDate: string | null;
  lastVisitedDate: string | null;
  details: string;
  bgColor: string;
  onReturnClick: () => void;
  onSaveUser: (itemData: IUserProps) => void;
  onDeleteUser: (id: number) => void;
}

const Panel = ({
  tabs,
  id,
  avatar,
  fullName,
  email,
  isActive,
  registeredDate,
  lastVisitedDate,
  details,
  bgColor,
  onReturnClick,
  onSaveUser,
  onDeleteUser
}: IPanelProp) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleActiveTab = (index: number) => {
    setActiveTabIndex(index);
  };
  const tabData = tabs[activeTabIndex];

  return (
    <div className='panel-wrapper'>
      <div className='panel-edit'>
        <Button
          variants='withIcon'
          withIcon='block'
          type='button'
          icon={backIcon}
          onClick={onReturnClick}
        />

        {tabs.map((tab, index) => (
          <Tabs
            key={index}
            title={tab}
            isActive={activeTabIndex === index}
            index={index}
            onClick={handleActiveTab}
          />
        ))}
      </div>

      <ProfileEditor
        activeItemBar={tabData}
        id={id}
        avatar={avatar}
        fullName={fullName}
        email={email}
        isActive={isActive}
        registeredDate={registeredDate}
        lastVisitedDate={lastVisitedDate}
        details={details}
        bgColor={bgColor}
        onSaveUser={onSaveUser}
        onDeleteUser={onDeleteUser}
      />
    </div>
  );
};

export default Panel;
