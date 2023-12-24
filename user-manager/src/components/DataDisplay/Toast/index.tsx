import { useEffect, useState } from 'react';

// Components
import '@components/DataDisplay/Toast/Toast.css';

// Constants
import { TOAST } from '@constants';

interface IToastProps {
  isError?: boolean;
  failMessage?: string;
  successMessage?: string;
}

const Toast = ({
  isError,
  failMessage = 'Fail',
  successMessage = 'Done'
}: IToastProps) => {
  const [showToast, setShowToast] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
      setShowToast(true);
    }, 3000);

    const hideToastTimer = setTimeout(() => {
      setShowToast(false);
    }, 9000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(hideToastTimer);
    };
  }, []);

  return (
    <>
      {showLoading && (
        <div className='loading-wrapper'>
          <span className='loading-icon'></span>
        </div>
      )}

      {showToast && (
        <div className='toast-wrapper'>
      <p className='toast-message'>
        {isError
        ? failMessage
        : successMessage}
      </p>
      <span
        className={`toast-icon toast-icon-${
          isError
          ? TOAST.ERROR
          : TOAST.SUCCESS
        }`}>
      </span>
    </div>
      )}
    </>
  );
};

export default Toast;
