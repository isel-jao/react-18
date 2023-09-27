import IconButton from "@/components/icon-button";
import { useState } from "react";

const useTrend = (value: number) => {
  const [trend, setTrend] = useState<"up" | "down" | "flat">("flat");
  const [prevValue, setPrevValue] = useState(value);

  if (prevValue !== value) {
    if (prevValue < value) {
      setTrend("up");
    } else if (prevValue > value) {
      setTrend("down");
    } else {
      setTrend("flat");
    }
    setPrevValue(value);
  }
  return trend;
};

export default function DevPage() {
  const [value, setValue] = useState(0);
  const trend = useTrend(value);

  return (
    <div className="h-full overflow-auto p-4">
      <div className="flex items-center gap-4">
        <IconButton onClick={() => setValue((curr) => curr - 1)}>-</IconButton>
        {value}
        <IconButton onClick={() => setValue((curr) => curr + 1)}>+</IconButton>
        {trend}
      </div>
    </div>
  );
}
