import { useEffect, useState } from "react";

export const FormCounter = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((s) => !s);
  };

  return (
    <>
      <button onClick={handleShow}>{show ? "Hide" : "Show"} counter</button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onTick = () => {
      setCount((c) => c + 1);
    };

    const intervalId = setInterval(onTick, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <h1>{count}</h1>;
};
