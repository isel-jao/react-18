import Input from "@/components/input";
import { forwardRef, useRef, useState } from "react";

const FrowardInput = forwardRef(Input);

export default function UseRef() {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const countRef = useRef(count);
  const handleChange = () => {
    if (inputRef?.current) {
      countRef.current = Number(inputRef.current.value);
      setCount(Number(inputRef.current.value));
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <FrowardInput ref={inputRef} type="number" onChange={handleChange} />
      <div className="flex items-center gap-4">count: {count}</div>
      <div className="flex items-center gap-4">
        countRef: {countRef.current}
      </div>
    </div>
  );
}
