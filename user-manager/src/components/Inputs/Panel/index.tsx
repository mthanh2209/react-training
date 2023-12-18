import { useState } from 'react';

// Components
import '@components/Inputs/Panel/Panel.css';
import Button from '@components/Inputs/Button';
import ActionBar from '@components/Inputs/Panel/ActionBar';
import ProfileEditor from '@components/Inputs/Panel/ProfileEditor';

// Types
import { IUserProps } from '@types/interface';

// Icons
import backIcon from '@assets/images/back-icon.svg';

interface IPanelProp {
  listBar: string[];
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
  listBar,
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
  const [activeItemBarIndex, setActiveItemBarIndex] = useState(0);
  const handleActiveItemBar = (index: number) => {
    setActiveItemBarIndex(index);
  };
  const barData = listBar[activeItemBarIndex];

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

        {listBar.map((itemBar, index) => (
          <ActionBar
            title={itemBar}
            isActive={activeItemBarIndex === index}
            itemIndex={index}
            onClick={handleActiveItemBar}
          />
        ))}
      </div>

      <ProfileEditor
        activeItemBar={barData}
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
