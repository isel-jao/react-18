import Button from "@/components/button";
import { useState, forwardRef, useRef, useImperativeHandle } from "react";

type CounterRef = {
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
      <Button onClick={() => setCount((c) => c - 1)} className="text-xl">
        -
      </Button>
      <p className="min-w-[4rem] text-center">Count: {count}</p>

      <Button onClick={() => setCount((c) => c + 1)} className="text-xl">
        +
      </Button>
    </div>
  );
}

const CounterWithRef = forwardRef(Counter);

export default function DevPage() {
  const counterRef = useRef<CounterRef>(null);
  return (
    <div className="flex flex-col items-center justify-center">
      <CounterWithRef ref={counterRef} />
      <Button
        onClick={() => {
          counterRef.current?.reset();
        }}
      >
        reset
      </Button>
    </div>
  );
}
