import { FormEvent } from 'react';

// Components
import '@components/Inputs/TextField/TextField.css';

interface ITextFieldProps {
  additionalClass?: string;
  value?: string;
  placeholder?: string;
  errorText?: string;
  onChange?: (value: string) => void;
}

const TextField = ({
  additionalClass,
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
        className={`text-field input-${additionalClass}`}
        value={value}
        placeholder={placeholder}
        onChange={handleChangeInput} />

      <span className='error-message'>{errorText}</span>
    </div>
  )
}

export default TextField;
