import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  color?: string;
  variant?: "filled" | "outline" | "ghost";
}

export default function Button({
  className,
  size = "md",
  variant = "filled",
  children,
  ...props
}: Props) {
  return (
    <button
      className={twMerge(
        "relative select-none rounded transition-all first-letter:uppercase active:shadow-inner",
        variant === "filled" &&
          "bg-primary-500  text-white hover:shadow hover:shadow-primary-500",
        variant === "outline" &&
          "rounded border border-primary-500 text-primary-500 hover:shadow hover:shadow-primary-500",
        variant === "ghost" && "text-primary-500 hover:bg-primary-500/5 ",
        size === "sm" && "px-2 py-1 text-xs",
        size === "md" && "px-4 py-2 text-sm",
        size === "lg" && "px-6 py-3 text-base",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
