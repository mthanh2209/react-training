import { useState } from "react";

export const InputText = () => {
  const [showHint, setShowHint] = useState(false);
  return (
    <>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}

      <Form />

      {showHint ? (
        <button
          onClick={() => {
            setShowHint(false);
          }}
        >
          Hide hint
        </button>
      ) : (
        <button
          onClick={() => {
            setShowHint(true);
          }}
        >
          Show hint
        </button>
      )}
    </>
  );
};

const Form = () => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return <textarea value={text} onChange={handleChange} />;
};
