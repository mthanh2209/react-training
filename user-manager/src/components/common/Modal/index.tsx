import { createPortal } from 'react-dom';
import '@components/common/Modal/Modal.css';
import Button from '../Button';
import { TModal } from '@types';
import closeIcon from '@assets/images/close-icon.svg';

interface IModalProps {
  open?: boolean;
  type?: TModal;
  modalHeader?: string;
  modalDesc?: string;
  confirmText?: string;
  denyText?: string;
  onClose(event: React.MouseEvent): void;
  onConfirmText(event: React.MouseEvent): void;
  onDenyText(event: React.MouseEvent): void;
}

const Modal = ({
  open,
  type,
  modalHeader,
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
          <div
            className={`modal-wrapper modal-${type}`}
            onClick={onClose}>
            <div className={`modal`}>
              <div className={`modal-${type}-header`}>
                {modalHeader ? (
                  <>
                    <h2 className='modal-title'>{modalHeader}</h2>
                    <p className='modal-desc'>{modalDesc}</p>
                  </>
                ) : (
                  <>
                    <p className='modal-desc'>{modalDesc}</p>
                    <Button
                    variants='primary'
                    withIcon='none'
                    type='button'
                    icon={closeIcon}
                    content={confirmText}
                    onClick={onConfirmText}
                    />
                  </>
                )}
              </div>

              <div className={`modal-${type}-body`}>
                {modalHeader ? (
                  <>
                    <Button
                    variants='secondary'
                    withIcon='none'
                    type='button'
                    icon=''
                    content={denyText}
                    onClick={onDenyText}
                    />
                    <Button
                    variants='primary'
                    withIcon='none'
                    type='button'
                    icon=''
                    content={confirmText}
                    onClick={onConfirmText}
                    />
                  </>
                ) : (
                  <>
                    <Button
                    variants='primary'
                    withIcon='none'
                    type='button'
                    icon=''
                    content={confirmText}
                    onClick={onConfirmText}
                    />
                  </>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
