import '@components/Inputs/Panel/Panel.css';
import { IUserProps } from '@types/interface';
import Button from '../Button';
import ActionBar from './ActionBar';
import ProfileEditor from './ProfileEditor';
import backIcon from '@assets/images/back-icon.svg';
import { useState } from 'react';
interface IPanelProp<T> {
  listBar: string[];
  itemData: T;
  onReturnClick: () => void;
  onSaveUser: (itemData: IUserProps) => void;
  onDeleteUser: (id: number) => void;
}

const Panel = ({
  listBar,
  itemData,
  onReturnClick,
  onSaveUser,
  onDeleteUser
}: IPanelProp<IUserProps>) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleActiveTab = (index: number) => {
    setActiveTabIndex(index);
  };
  const tabData = listBar[activeTabIndex];

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
            isActive={activeTabIndex === index}
            itemIndex={index}
            onClick={handleActiveTab}
          />
        ))}
      </div>
      
      <ProfileEditor
        activeItemBar={tabData}
        itemData={itemData}
        onSaveUser={onSaveUser}
        onDeleteUser={onDeleteUser}
      />
    </div>
  );
};

export default Panel;
