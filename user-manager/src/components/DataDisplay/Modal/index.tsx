import { createPortal } from 'react-dom';

// Components
import '@components/DataDisplay/Modal/Modal.css';
import ModalHeader from '@components/DataDisplay/Modal/ModalHeader';
import ModalBody from '@components/DataDisplay/Modal/ModalBody';

// Types
import { TModal } from '@types';

interface IModalProps {
  isOpen?: boolean;
  type?: TModal;
  modalTitle?: string;
  modalDesc?: string;
  confirmText?: string;
  denyText?: string;
  onClose?: () => void;
  onConfirmText?: () => void;
  onDenyText?: () => void;
}

const Modal = ({
  isOpen,
  type,
  modalTitle,
  modalDesc,
  confirmText,
  denyText,
  onClose,
  onConfirmText,
  onDenyText
}: IModalProps) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className='modal-wrapper' onClick={onClose}>
            <div className={`modal modal-${type}`}>
              <ModalHeader
                type={type}
                modalTitle={modalTitle}
                modalDesc={modalDesc}
                onClose={onClose}
              />

              <ModalBody
                type={type}
                confirmText={confirmText}
                denyText={denyText}
                onConfirmText={onConfirmText}
                onDenyText={onDenyText}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
