import { useDebugValue, useState } from "react";

const useDiff = (value: number) => {
  const [diff, setDiff] = useState(0);
  const [prevValue, setPrevValue] = useState(value);
  useDebugValue(diff);

  if (prevValue !== value) {
    setDiff(value - prevValue);
    setPrevValue(value);
  }
  return diff;
};

export default useDiff;
