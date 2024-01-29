import { useCounter } from "./hooks/useCounter";

export const Counter = () => {
  const count = useCounter(1000);
  return <h1>Seconds passed: {count}</h1>;
};
