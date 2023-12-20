import { useEffect, useRef, useState } from 'react';

// Components
import '@components/DataDisplay/Popper/Popper.css';
import Modal from '@components/DataDisplay/Modal';

// Hooks
import useBackDrop from '@hooks/useBackDrop';

// Types
import { IPopperOption } from '@types/interface';

interface IPopperProps {
  isOpen?: boolean;
  icon?: string;
  children?: string;
  options: IPopperOption[];
}

const Popper = ({
  isOpen = false,
  icon,
  children,
  options
}: IPopperProps) => {
  const optionRef = useRef(null);
  const [isShowOption, setShowOption] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

  const closeOption = () => {
    setShowOption(false);
  };

  useBackDrop({
    ref: optionRef,
    callback: closeOption
  });

  const handleTogglePopper = () => {
    setShowOption(true);
  };

  useEffect(() => {
    setShowOption(isOpen);
  }, [isOpen]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className='popper'>
      <button
        className='btn-primary btn-popper'
        type='button'
        onClick={handleTogglePopper}
        ref={optionRef}>
        <img
          className='plus-icon'
          alt={`${children}-icon`}
          src={icon} />
        {children}
      </button>

      {isShowOption && (
        <div className='popper-option'>
          {options.map((option, index) => (
            <button
              key={index}
              className='btn-popper btn-option'
              type='button'
              onClick={handleOpenModal}>
              {option.text}
            </button>
          ))}
        </div>
      )}

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          type='submit'
          modalDesc='Enter user name'
          confirmText='Save'
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Popper;
