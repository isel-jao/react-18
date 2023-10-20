import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  label?: string;
  children: React.ReactElement;
}

export default function Fieldset({ children, className, label }: Props) {
  return (
    <fieldset
      className={twMerge(
        "relative box-border h-fit rounded border border-gray-500/30 hover:border-gray-500/50 [&:has(*:focus)]:border-primary-500",
        className,
      )}
    >
      {React.cloneElement(children, {
        className: twMerge(
          "peer relative  w-full bg-transparent outline-none",
          children.props.className,
        ),
        placeholder: " ",
      })}
      <legend className="ml-2 h-0 w-0  text-[0.6em] text-transparent  peer-focus:w-fit peer-focus:pr-2  peer-[:not(:placeholder-shown)]:w-fit peer-[:not(:placeholder-shown)]:pr-2 ">
        {label}
      </legend>
      <span className="label pointer-events-none absolute left-3 top-1/2  -translate-y-1/2 text-[#7f7f7f] transition-[top]  peer-focus:top-0 peer-focus:text-[0.6em] peer-focus:text-primary-500 peer-[:not(:empty)]:-top-1 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.6em]">
        {label}
      </span>
    </fieldset>
  );
}
