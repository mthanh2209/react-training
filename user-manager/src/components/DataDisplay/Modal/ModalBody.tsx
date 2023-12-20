// Components
import Button from '@components/Inputs/Button/index';
import TextField from '@components/Inputs/TextField/index';

interface IModalBodyProps {
  type?: string;
  confirmText?: string;
  denyText?: string;
  onConfirmText?: () => void;
  onDenyText?: () => void;
}

const ModalBody = ({
  type,
  confirmText,
  denyText,
  onConfirmText,
  onDenyText
}: IModalBodyProps) => {
  return (
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
            additionalClass='input-submit'
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
  );
};

export default ModalBody;
