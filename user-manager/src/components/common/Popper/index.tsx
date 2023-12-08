import { useEffect, useRef, useState } from 'react';

// Components
import '@components/common/Popper/Popper.css';

// Hooks
import useBackDrop from '@hooks/useBackDrop';

interface IPopperProps {
  open?: boolean;
  icon?: string;
  children?: string;
  options: {
    text?: string;
    onClick(event: React.MouseEvent): void;
  }[];
}

const Popper = ({
  open = false,
  icon,
  children,
  options
}: IPopperProps) => {
  const optionRef = useRef(null);
  const [showOption, setShowOption] = useState(false);

  const closeOption = () => {
    setShowOption(false);
  };

  useBackDrop(optionRef, closeOption);

  const handleTogglePopper = () => {
    setShowOption(true);
  };

  useEffect(() => {
    setShowOption(open);
  }, [open]);

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

      {showOption && (
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
