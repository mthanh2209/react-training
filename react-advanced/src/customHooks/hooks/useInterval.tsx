import { useEffect } from "react";

export function useInterval (
  onTick: () => void,
  delay: number
): void {
  useEffect(() => {
    const id: NodeJS.Timeout = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [onTick, delay]);
};
