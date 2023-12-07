import {
  useEffect,
  RefObject
} from 'react';

interface IBackDropProps {
  ref: RefObject<HTMLElement>
  callback: () => void
}
const useBackDrop = ({
  ref,
  callback
}: IBackDropProps) => {
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
