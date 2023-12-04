import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import '@/components/common/Popper/Popper.css';
import { IPopperProps } from '@/types/interfaces';

const Popper = ({
  open,
  options
}: IPopperProps) => {
  const [showOption, setShowOption] = useState(open)
  const ref = useRef<HTMLButtonElement>(null);

  const handleShowOption = () => {
    setShowOption(true)
  }

  useEffect(() => {
    setShowOption(open);
  }, [open]);

  useEffect(() => {
    const handleCloseOption = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setShowOption(false);
      }
    };
    document.addEventListener('click', handleCloseOption);
    return () => {
      document.removeEventListener('click', handleCloseOption);
    };
  }, []);

  return (
    <div className='popper'>
      <button
        className='btn-primary btn-popper'
        type='button'
        onClick={handleShowOption}
        ref={ref}>
        <span className='plus-icon'>+</span>Add
      </button>

      {showOption &&
        createPortal(
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
          </div>,
          document.querySelector('.popper') as HTMLElement
        )}
    </div>
  )
}

export default Popper;
