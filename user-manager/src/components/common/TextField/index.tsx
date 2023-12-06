import '@components/common/TextField/TextField.css';
import { ITextFieldProps } from "@types/interfaces";
import { FormEvent } from "react";

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
