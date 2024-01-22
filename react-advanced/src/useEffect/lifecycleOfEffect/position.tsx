import { useEffect, useState } from "react";

interface PositionProps {
  x: number;
  y: number;
}

export const Position = () => {
  const [position, setPosition] = useState<PositionProps>({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState<boolean>(true);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (canMove) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [canMove]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCanMove(e.target.checked);
  };

  return (
    <>
      <label>
        <input type="checkbox" checked={canMove} onChange={handleChange} />
        The dot is allowed to move
      </label>
      <hr />
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
};
