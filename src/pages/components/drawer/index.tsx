import Button from "@/components/button";
import Drawer, { Placement } from "@/components/drawer";
import IconButton from "@/components/icon-button";
import { useState } from "react";
import { ReactComponent as XIcon } from "@/assets/x.svg";
import React from "react";

export default function DrawerExample() {
  const [placement, setPlacement] = useState<Placement | null>(null);
  return (
    <>
      <div className="flex gap-4">
        {(["right", "left", "top", "bottom"] as const).map((p) => (
          <React.Fragment key={p}>
            <Button
              onClick={() => {
                setPlacement(p);
              }}
            >
              {p}
            </Button>
            <Drawer
              open={placement === p}
              onClose={() => {
                setPlacement(null);
              }}
              placement={p as Placement}
              className="bg-slate-700 p-4 text-white"
            >
              <IconButton
                className=" absolute right-4 top-4 w-8"
                variant="ghost"
                onClick={() => {
                  setPlacement(null);
                }}
              >
                <XIcon className="h-4 w-4 fill-black stroke-[#7f7f7f]" />
              </IconButton>
              <div className="text-lg">title</div>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
