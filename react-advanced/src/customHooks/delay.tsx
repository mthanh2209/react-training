import { useState } from "react";
import { useCounter } from "./hooks/useCounter";

export const CounterDelay = () => {
  const [delay, setDelay] = useState<number>(1000);

  const count = useCounter(delay);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDelay(Number(e.target.value));
  };

  return (
    <>
      <label>
        Tick duration: {delay} ms
        <hr />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={handleChange}
        />
      </label>
      <hr />
      <h1>Ticks: {count}</h1>
    </>
  );
};
