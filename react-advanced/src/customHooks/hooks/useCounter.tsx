import { useState } from "react";
import { useInterval } from "./useInterval";

export const useCounter = (delay: number) => {
  const [count, setCount] = useState<number>(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, delay);

  return count;
};
