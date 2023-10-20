import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  label?: string;
  children: React.ReactElement;
}

function Fieldset({ children, className, label }: Props) {
  return (
    <fieldset
      className={twMerge(
        "relative  border px-2  [&:has(*:focus)]:border-[2px] [&:has(*:focus)]:border-primary-500",
        className,
      )}
    >
      {React.cloneElement(children, {
        className: twMerge(
          "peer relative  w-full  bg-transparent outline-none",
          children.props.className,
        ),
        placeholder: " ",
      })}
      <legend className=" h-0 w-0 text-[0.7em] text-transparent peer-focus:w-fit ">
        {label}
      </legend>
      <span className="pointer-events-none absolute left-3  top-1/2 -translate-y-1/2 transition-[top]  peer-focus:-top-1 peer-focus:text-[0.6em] peer-focus:text-primary-500 peer-[:not(:empty)]:-top-1 peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-[0.6em]">
        {label}
      </span>
    </fieldset>
  );
}

export default function DevPage() {
  return (
    <div className="flex h-full flex-col gap-4 overflow-auto p-4">
      test
      <Fieldset label="search ..." className="w-60 rounded-lg ">
        <input placeholder="ssdifjiiasd" className="py-2" />
      </Fieldset>
    </div>
  );
}
