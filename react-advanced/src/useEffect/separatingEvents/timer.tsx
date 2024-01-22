import { useEffect, useState } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";

export const Timer = () => {
  const [count, setCount] = useState<number>(0);
  const [increment, setIncrement] = useState<number>(1);
  const [delay, setDelay] = useState<number>(100);

  const onTick = useEffectEvent(() => {
    setCount((c) => c + increment);
  });

  useEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrement = () => {
    setIncrement((i) => i + 1);
  };

  const handleDecrement = () => {
    setIncrement((i) => i - 1);
  };

  const handleIncrementDelay = () => {
    setDelay((d) => d + 100);
  };

  const handleDecrementDelay = () => {
    setDelay((d) => d - 100);
  };

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={handleReset}>Reset</button>
      </h1>
      <hr />
      <p>
        Increment by:
        <button disabled={increment === 0} onClick={handleDecrement}>
          -
        </button>
        <b>{increment}</b>
        <button onClick={handleIncrement}>+</button>
      </p>
      <p>
        Increment delay:
        <button disabled={delay === 100} onClick={handleDecrementDelay}>
          -100ms
        </button>
        <b>{delay}</b>
        <button onClick={handleIncrementDelay}>+100ms</button>
      </p>
    </>
  );
};
