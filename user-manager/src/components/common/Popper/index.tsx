import { useEffect, useRef, useState } from 'react';

// Components
import '@components/common/Popper/Popper.css';

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

  return (
    <div className='popper'>
      <button
        className='btn-primary btn-popper'
        type='button'
        onClick={handleTogglePopper}
        ref={optionRef}>
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
              onClick={option.onClick}>
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Popper;
