import { IsValidRef } from "@/utils";
import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {}

export default function Card(
  { className, children, ...props }: CardProps,
  ref?: React.LegacyRef<HTMLDivElement>,
) {
  return (
    <div
      {...props}
      className={twMerge(
        "rounded border-2 border-[#7f7f7f]/10 bg-white p-4 dark:bg-primary-950",
        className,
      )}
      ref={IsValidRef(ref) ? ref : undefined}
    >
      {children}
    </div>
  );
}
