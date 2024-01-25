import { useEffect, useState } from "react";

export const useDelayedValue = <T,>(value: T, delay: number): T => {
  const [delayedValue, setDelayedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return delayedValue;
};
