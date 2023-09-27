import { useState } from "react";

const useTrend = (value: number) => {
  const [trend, setTrend] = useState(0);
  const [prevValue, setPrevValue] = useState(value);

  if (prevValue !== value) {
    if (prevValue < value) setTrend(-1);
    else setTrend(1);
    setPrevValue(value);
  }
  return trend;
};

export default useTrend;
