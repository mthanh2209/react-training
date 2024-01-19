import { useState } from "react";

interface FieldProps {
  label: string;
}

export const SwapField = () => {
  const [reverse, setReverse] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReverse(e.target.checked);
  };

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={handleChange}
      />
      Reverse order
    </label>
  );

  if (reverse) {
    return (
      <>
        <Field key="lastName" label="Last name" />
        <Field key="firstName" label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key="firstName" label="First name" />
        <Field key="lastName" label="Last name" />
        {checkbox}
      </>
    );
  }
};

const Field = ({ label }: FieldProps) => {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={handleChange}
      />
    </label>
  );
};
