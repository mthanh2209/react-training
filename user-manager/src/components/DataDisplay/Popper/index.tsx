import { useEffect, useRef, useState } from 'react';

// Components
import '@components/DataDisplay/Popper/Popper.css';

// Hooks
import useBackDrop from '@hooks/useBackDrop';

// Interfaces
import { IPopperOption } from '@interfaces/popperOption';

interface IPopperProps {
  isOpen?: boolean;
  icon?: string;
  children?: string;
  options: IPopperOption[];
  onOpenModal: () => void;
}

const Popper = ({
  isOpen = false,
  icon,
  children = 'New',
  options,
  onOpenModal
}: IPopperProps) => {
  const optionRef = useRef(null);
  const [isShowOption, setShowOption] = useState(false);

  const closeOption = () => {
    setShowOption(false);
  };

  const handleTogglePopper = () => {
    setShowOption(true);
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
              onClick={onOpenModal}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Popper;
