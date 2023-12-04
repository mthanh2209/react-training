import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import '@/components/common/Popper/Popper.css';

const Popper = () => {
  const [showOption, setShowOption] = useState(false)
  const ref = useRef<HTMLButtonElement>(null);

  const handleShowOption = () => {
    setShowOption(true)
  }

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

  const handleOpenModal = () => { }

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
          <button
            className='btn-popper btn-option'
            type='button'
            onClick={handleOpenModal}>
            Add new user
          </button>,
          document.querySelector('.popper') as HTMLElement
        )}
    </div>
  )
}

export default Popper;
