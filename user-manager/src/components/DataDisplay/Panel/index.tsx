import { useState } from 'react';

// Components
import '@components/DataDisplay/Panel/Panel.css';
import Button from '@components/Inputs/Button';
import Tabs from '@components/DataDisplay/Panel/Tabs';

// Interfaces
import { IContent } from '@interfaces/contentsPanel';

// Icons
import backIcon from '@assets/images/back-icon.svg';

interface IPanelProp {
  tabs: IContent[];
  onReturnClick: () => void;
}

const Panel = ({
  tabs,
  onReturnClick,
}: IPanelProp) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleActiveTab = (index: number) => {
    setActiveTabIndex(index);
  };
  const content = tabs[activeTabIndex].content;

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

        {tabs.map((item, index) => (
          <Tabs
            key={index}
            title={item.title}
            isActive={activeTabIndex === index}
            index={index}
            onClick={handleActiveTab}
          />
        ))}
      </div>
      {content}
    </div>
  );
};

export default Panel;
