import { FormEvent } from 'react';

// Components
import '@components/Inputs/TextField/TextField.css';

// Types
import { TInput } from '@types';

interface ITextFieldProps {
  label?: string;
  additionalClass?: TInput;
  value?: string;
  placeholder?: string;
  errorText?: string;
  onChange?: (value: string) => void;
}

const TextField = ({
  label,
  additionalClass,
  value,
  placeholder,
  errorText,
  onChange
}: ITextFieldProps) => {
  const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value);
  };

  return (
    <>
      {additionalClass === 'input-search' ||
      additionalClass === 'input-submit' ? (
        <label className='label-input hide'>{label}</label>
      ) : (
        <label className='label-input'>{label}</label>
      )}

      <div className='input-wrapper'>
        <input
          type='text'
          className={`text-field ${additionalClass}`}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeInput}
        />

        <span className='error-message'>{errorText}</span>
      </div>
    </>
  );
};

export default TextField;
