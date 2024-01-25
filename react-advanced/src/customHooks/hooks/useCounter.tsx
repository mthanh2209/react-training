import { useEffect, useState } from "react";

export const useCounter = (delay: number) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const id: NodeJS.Timeout = setInterval(() => {
      setCount((c) => c + 1);
    }, delay);
    return () => clearInterval(id);
  }, [delay]);

  return count;
};
