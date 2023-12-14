import { FormEvent } from 'react';

// Components
import '@components/common/TextArea/TextArea.css';

interface ITextArea {
  value?: string;
  placeholder?: string
  onChange?: (value: string) => {};
}

const TextArea = ({
  value,
  placeholder,
  onChange
}: ITextArea) => {
  const handleOnChange = (event: FormEvent<HTMLTextAreaElement>) => {
    onChange?.(event.currentTarget.value);
  };

  return (
    <textarea
      name='details'
      id='details'
      className='text-area'
      onChange={handleOnChange}
      value={value}
      placeholder={placeholder}>
    </textarea>
  );
};

export default TextArea;
