import React from "react";
import { twMerge } from "tailwind-merge";

const tailwindColors = [
  "primary",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "slate",
  "teal",
] as const;

export type Color = (typeof tailwindColors)[number];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline" | "ghost";
  color?: Color;
}

export default function Button({
  className,
  size = "md",
  variant = "filled",
  color = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "relative select-none rounded font-semibold transition-all first-letter:uppercase active:shadow-inner disabled:pointer-events-none disabled:opacity-50",
        variant === "filled" &&
          `bg-${color}-500  text-white hover:shadow-md hover:shadow-${color}-500/50`,
        variant === "outline" &&
          `border-${color}-500 text-${color}-500 hover:shadow-${color}-500/25 rounded border hover:shadow`,
        variant === "ghost" && `text-${color}-500 hover:bg-${color}-500/5 `,
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
