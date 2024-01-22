import { useRef, useState } from "react";

export const Chat = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const timeoutRef = useRef(null);
  const textRef = useRef(null);

  const handleSend = () => {
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert("Sending: " + textRef.current);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    textRef.current = e.target.value;
  };

  const handleUndo = () => {
    setIsSending(false);
    clearTimeout(timeoutRef.current);
  };

  return (
    <>
      <h1>Chat</h1>
      <input
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleSend}>Send</button>
      {isSending &&
        <button onClick={handleUndo}>Undo</button>
      }
    </>
  );
};
