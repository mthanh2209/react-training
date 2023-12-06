import '@components/common/Popper/Popper.css';
import { IPopperProps } from '@types/interfaces';
import usePopper from '@helpers/popper';
import { useEffect } from 'react';

const Popper = ({ open = false, icon, children, options }: IPopperProps) => {
  const { ref, isOpen, setIsOpen, handleTogglePopper } = usePopper();

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div className='popper'>
      <button
        className='btn-primary btn-popper'
        type='button'
        onClick={handleTogglePopper}
        ref={ref as React.RefObject<HTMLButtonElement>}
      >
        <img className='plus-icon' alt={`${children}-icon`} src={icon} />
        {children}
      </button>

      {isOpen && (
        <div className='popper-option'>
          {options.map((option, index) => (
            <button
              key={index}
              className='btn-popper btn-option'
              type='button'
              onClick={option.onClick}
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
