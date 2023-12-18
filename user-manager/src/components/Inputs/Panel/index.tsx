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
        itemData={itemData}
        onSaveUser={onSaveUser}
        onDeleteUser={onDeleteUser}
      />
    </div>
  );
};

export default Panel;
