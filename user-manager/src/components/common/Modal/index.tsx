import { createPortal } from 'react-dom';

// Components
import '@components/common/Modal/Modal.css';
import ModalHeader from '@components/common/Modal/ModalHeader';
import ModalBody from '@components/common/Modal/ModalBody';

// Types
import { TModal } from '@types';

interface IModalProps {
  open?: boolean;
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
  open,
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
      {open &&
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
