import {
  useEffect,
  RefObject
} from 'react';

type Callback = () => void;

const useBackDrop = (ref: RefObject<HTMLElement>, callback: Callback): void => {
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

export default useBackDrop;
