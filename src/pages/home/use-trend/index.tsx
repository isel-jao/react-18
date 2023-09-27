import Button from "@/components/button";
import { randomInt } from "@/utils";
import { useState } from "react";
import { ReactComponent as UpIcon } from "@/assets/up.svg";
import useTrend from "@/hooks/ust-trend";

export default function UseTrendExample() {
  const [value, setValue] = useState(randomInt(0, 100));
  const trend = useTrend(value);

  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={() => {
          setValue(randomInt(0, 100));
        }}
      >
        generate random number
      </Button>

      <span className=" w-24">value: {value}</span>
      {trend > 0 && <UpIcon className="h-4 w-4 fill-green-500" />}
      {trend < 0 && <UpIcon className="h-4 w-4 rotate-180 fill-red-500" />}
    </div>
  );
}
