import { useState } from 'react';

// Components
import '@components/DataDisplay/Drawer/Drawer.css';
import ListNav from '@components/DataDisplay/ListNav';
import Popper from '@components/DataDisplay/Popper';
import Modal from '@components/DataDisplay/Modal';

// Interfaces
import { IPopperOption } from '@interfaces/popperOption';

// Icons
import plusIcon from '@assets/images/plus-icon.svg';

type TAnchor = 'top' | 'left' | 'bottom' | 'right';

interface IDrawerProps {
  anchor?: TAnchor;
  text?: string;
  icon?: string;
  popperOption: IPopperOption[];
  onItemClick: (data: string) => void;
  onSubmit: (data: string) => void;
}

const Drawer = ({
  anchor = 'left',
  text = 'New',
  icon = plusIcon,
  popperOption,
  onItemClick,
  onSubmit
}: IDrawerProps) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (value: string) => {
    setTextInput(value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOnSubmit = () => {
    onSubmit(textInput);
    setOpenModal(false);
  };

  return (
    <div className={`drawer-wrapper ${anchor}`}>
      <Popper
        icon={icon}
        children={text}
        options={popperOption}
        onOpenModal={handleOpenModal}
      />

      <ListNav
        items={['users']}
        onClick={onItemClick}
      />

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          type='submit'
          modalDesc='Enter user name'
          confirmText='Save'
          onClose={handleCloseModal}
          onConfirmText={handleOnSubmit}
          onChangeText={handleInputChange}
        />
      )}
    </div>
  );
};

export default Drawer;
