import { useEffect, useState } from "react";

export type Props = {
  from: number;
  callBack?: () => void;
  autoStart?: boolean;
};

function useCoundDown({ from, callBack, autoStart }: Props) {
  const [count, setCount] = useState(from);
  const [isRunning, setIsRunning] = useState(autoStart);
  if (count < 0) throw new Error("count must be greater than 0");

  const reset = () => setCount(from);
  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);

  console.log("render");

  useEffect(() => {
    setCount(from);
  }, [from]);

  useEffect(() => {
    if (count === 0 || !isRunning) return;
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [count, isRunning]);

  if (count === 0 && callBack) {
    console.log({ count });
    callBack();
  }

  return {
    count,
    reset,
    start,
    pause,
    isRunning,
  };
}

export default useCoundDown;
