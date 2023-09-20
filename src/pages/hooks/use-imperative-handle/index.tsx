import Button from "@/components/button";
import { CounterRef, CounterWithRef } from "./Counter";
import { useRef } from "react";

export default function UseImperativeHandle() {
  const counterRef = useRef<CounterRef>(null);
  return (
    <div className="flex items-center  gap-6">
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
