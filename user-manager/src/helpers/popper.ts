import { useEffect, useRef, useState, RefObject } from 'react';

type Callback = () => void;

const popOver = (ref: RefObject<HTMLElement>, callback: Callback): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback]);
};

interface IPopperReturn {
  ref: RefObject<HTMLElement>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleTogglePopper: () => void;
}

const usePopper = (): IPopperReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  popOver(ref, () => {
    setIsOpen(false);
  });

  const handleTogglePopper = (): void => {
    setIsOpen(!isOpen);
  };

  return { ref, isOpen, setIsOpen, handleTogglePopper };
};

export default usePopper;
