import Button from "@/components/button";
import useCoundDown from "@/hooks/use-count-down";
import { useState } from "react";

export default function DevPage() {
  const [timer, setTimer] = useState(50);
  const { count, reset, start, pause, isRunning } = useCoundDown({
    from: timer,
    autoStart: true,
  });
  return (
    <div className="flex h-full flex-col gap-4 overflow-auto p-4">
      <div className="flex gap-4 [&>*]:w-20">
        <Button onClick={isRunning ? pause : start}>
          {isRunning ? "pause" : "start"}
        </Button>
        <Button onClick={reset}> reset</Button>
      </div>
      <div className="flex gap-4">
        <span className="!text-xl">timer : {timer} </span>
        <input
          className="w-72"
          type="range"
          step={1}
          value={timer}
          min={10}
          max={100}
          onChange={(e) => {
            setTimer(+e.target.value);
          }}
        />
      </div>
      <span className="text-center !text-2xl">
        count : <b>{count}</b>
      </span>
    </div>
  );
}
