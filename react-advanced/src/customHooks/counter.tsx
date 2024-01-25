import { useEffect, useState } from "react";

export const Counter = () => {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
};

// Custom Hooks
const useCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return count;
};
