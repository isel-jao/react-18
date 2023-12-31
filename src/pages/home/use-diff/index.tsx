import Button from "@/components/button";
import { randomInt } from "@/utils";
import { useState } from "react";
import { ReactComponent as UpIcon } from "@/assets/up.svg";
import useDiff from "@/hooks/use-diff";

export default function UseTrendExample() {
  const [value, setValue] = useState(randomInt(0, 100));
  const diff = useDiff(value);

  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={() => {
          setValue(randomInt(0, 100));
        }}
      >
        generate random number
      </Button>

      <span className="  w-20">value: {value} </span>
      {diff > 0 && <UpIcon className="h-4 w-4 fill-green-500" />}
      {diff < 0 && <UpIcon className="h-4 w-4 rotate-180 fill-red-500" />}
      <span className=" w-20">dif: {`(${diff})`}</span>
    </div>
  );
}
