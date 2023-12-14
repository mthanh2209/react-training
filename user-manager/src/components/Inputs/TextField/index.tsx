import { FormEvent } from 'react';

// Components
import '@components/Inputs/TextField/TextField.css';

// Types
import { TInput } from '@types';

interface ITextFieldProps {
  className?: TInput;
  value?: string;
  placeholder?: string;
  errorText?: string;
  onChange?: (value: string) => void;
}

const TextField = ({
  className,
  value,
  placeholder,
  errorText,
  onChange
}: ITextFieldProps) => {
  const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value)
  }

  return (
    <div className='input-wrapper'>
      <input
        type='text'
        className={`text-field input-${className}`}
        value={value}
        placeholder={placeholder}
        onChange={handleChangeInput} />

      <span className='error-message'>{errorText}</span>
    </div>
  )
}

export default TextField;
