import { createPortal } from 'react-dom';
import '@components/common/Modal/Modal.css';
import Button from '../Button';
import TextField from '../TextField';

import { TModal } from '@types';
import closeIcon from '@assets/images/close-icon.svg';

interface IModalProps {
  open?: boolean;
  type?: TModal;
  modalHeader?: string;
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
          <div className='modal-wrapper' onClick={onClose}>
            <div className={`modal modal-${type}`}>
              <div className={`modal-${type}-header`}>
                {type === 'confirm' ? (
                  <>
                    <h2 className='modal-title'>{modalHeader}</h2>
                    <p className='modal-desc'>{modalDesc}</p>
                  </>
                ) : (
                  <>
                    <p className='modal-title'>{modalDesc}</p>
                    <Button
                      variants='withIcon'
                      withIcon='block'
                      type='button'
                      icon={closeIcon}
                      content=''
                      onClick={onClose}
                    />
                  </>
                )}
              </div>

              <div className={`modal-${type}-body`}>
                {type === 'confirm' ? (
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
                    <TextField
                      className='submit'
                      value=''
                      placeholder=''
                      onChange={onConfirmText}
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
