import { useCounter } from "./hooks/useCounter";

export const Counter = () => {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
};
