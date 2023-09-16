import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: "sm" | "md" | "lg";
}

export default function Select({
  className,
  children,
  size = "md",
  ...props
}: Props) {
  return (
    <select
      className={twMerge(
        "rounded border-none bg-white/50 outline outline-gray-500/25 transition hover:outline-gray-500/50 focus:outline-2 focus:outline-primary-500 dark:bg-black/10",
        size === "sm" && "px-2 py-1 text-xs",
        size === "md" && "px-4 py-2 text-sm",
        size === "lg" && "px-6 py-3 text-base",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
