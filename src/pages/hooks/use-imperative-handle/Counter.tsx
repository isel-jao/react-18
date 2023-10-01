import Button from "@/components/button";
import { useState, forwardRef, useImperativeHandle } from "react";

export type CounterRef = {
  reset: () => void;
};

type CounterProps = object;

function Counter(_props: CounterProps, ref: React.Ref<CounterRef>) {
  const [count, setCount] = useState(0);
  const reset = () => setCount(0);

  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={() => setCount((c) => c - 1)}
        className="flex aspect-square w-9 items-center justify-center rounded-full p-0"
      >
        -
      </Button>
      <p className="min-w-[4rem] text-center text-xl">Count: {count}</p>

      <Button
        onClick={() => setCount((c) => c + 1)}
        className="flex aspect-square w-9 items-center justify-center rounded-full p-0"
      >
        +
      </Button>
    </div>
  );
}

export const CounterWithRef = forwardRef(Counter);

export default Counter;
