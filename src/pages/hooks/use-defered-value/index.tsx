import { throttle } from "@/utils";
import { memo, useDeferredValue, useState } from "react";

function SlowRect({ color }: { color: string }) {
  throttle(10);
  return (
    <div
      className="aspect-square w-10"
      style={{ backgroundColor: color }}
    ></div>
  );
}

const MemoizedSlowRect = memo(SlowRect);

export default function UserDeferedValue() {
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#000000");
  const defferedColor1 = useDeferredValue(color1);

  return (
    <div className="flex ">
      <div className="flex flex-1 flex-col gap-4">
        <div className="text-xl">with defferdValue</div>
        <input
          type="color"
          value={color1}
          onChange={(e) => {
            setColor1(e.target.value);
          }}
        />
        <div className="flex flex-wrap gap-2">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <MemoizedSlowRect key={i} color={defferedColor1} />
            ))}{" "}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="text-xl">without defferdValue</div>
        <input
          type="color"
          value={color2}
          onChange={(e) => {
            setColor2(e.target.value);
          }}
        />
        <div className="flex flex-wrap gap-2">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <MemoizedSlowRect key={i} color={color2} />
            ))}{" "}
        </div>
      </div>
    </div>
  );
}
