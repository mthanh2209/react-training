import { useEffect, useRef, useState } from "react";

export const Animation = () => {
  const [duration, setDuration] = useState<number>(1000);
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(e.target.value));
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <label>
        <input
          type="range"
          min="100"
          max="3000"
          value={duration}
          onChange={handleChange}
        />
        <br />
        Fade in duration: {duration} ms
      </label>
      <button onClick={handleShow}>{show ? "Remove" : "Show"}</button>
      <hr />
      {show && <Welcome duration={duration} />}
    </>
  );
};

const Welcome = ({ duration }: { duration: number }) => {
  const ref = useRef(null);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(duration);
    return () => {
      animation.stop();
    };
  }, [duration]);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: "white",
        padding: 50,
        textAlign: "center",
        fontSize: 50,
        backgroundImage:
          "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      }}
    >
      Welcome
    </h1>
  );
};

class FadeInAnimation {
  private node: HTMLElement | null;
  private duration: number = 0;
  private startTime: number | null = null;
  private frameId: number | null = null;

  constructor(node: HTMLElement | null) {
    this.node = node;
  }

  start(duration: number): void {
    this.duration = duration;
    this.onProgress(0);
    this.startTime = performance.now();
    this.frameId = requestAnimationFrame(() => this.onFrame());
  }

  private onFrame(): void {
    const timePassed = performance.now() - (this.startTime as number);
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }

  private onProgress(progress: number): void {
    if (this.node) {
      this.node.style.opacity = progress.toString();
    }
  }

  stop(): void {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}
