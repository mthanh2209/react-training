import { useEffect, useRef, useState } from 'react';

// Components
import '@components/DataDisplay/Popper/Popper.css';
import Modal from '@components/DataDisplay/Modal';

// Hooks
import useBackDrop from '@hooks/useBackDrop';

// Interfaces
import { IPopperOption } from '@interfaces/popperOption';

interface IPopperProps {
  isOpen?: boolean;
  icon?: string;
  children?: string;
  options: IPopperOption[];
  onSubmit: (data: string) => void;
}

const Popper = ({
  isOpen = false,
  icon,
  children,
  options,
  onSubmit
}: IPopperProps) => {
  const optionRef = useRef(null);
  const [isShowOption, setShowOption] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (value: string) => {
    setTextInput(value);
  };

  const closeOption = () => {
    setShowOption(false);
  };

  const handleTogglePopper = () => {
    setShowOption(true);
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

  useBackDrop({
    ref: optionRef,
    callback: closeOption
  });

  useEffect(() => {
    setShowOption(isOpen);
  }, [isOpen]);

  return (
    <div className='popper'>
      <button
        className='btn-primary btn-popper'
        type='button'
        onClick={handleTogglePopper}
        ref={optionRef}
      >
        <img className='plus-icon' alt={`${children}-icon`} src={icon} />
        {children}
      </button>

      {isShowOption && (
        <div className='popper-option'>
          {options.map((option, index) => (
            <button
              key={index}
              className='btn-popper btn-option'
              type='button'
              onClick={handleOpenModal}
            >
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
          onConfirmText={handleOnSubmit}
          onChangeText={handleInputChange}
        />
      )}
    </div>
  );
};

export default Popper;
