import { useRef, useState } from "react";

export const Chat = () => {
  const [isSending, setIsSending] = useState(false);
  const [text, setText] = useState("");
  const timeoutRef = useRef(null);

  const handleSend = () => {
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert("Sent!");
      setIsSending(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUndo = () => {
    setIsSending(false);
    clearTimeout(timeoutRef.current);
  };

  return (
    <>
      <h1>Chat</h1>
      <input
        disabled={isSending}
        value={text}
        onChange={handleChange}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? "Sending..." : "Send"}
      </button>
      {isSending &&
        <button onClick={handleUndo}>Undo</button>
      }
    </>
  );
};
