import { useEffect, useState } from "react";

interface PointerPosition {
  x: number;
  y: number;
}

export const usePointerPosition = () => {
  const [position, setPosition] = useState<PointerPosition>({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return position;
};
