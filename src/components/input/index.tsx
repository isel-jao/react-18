import { IsValidRef } from "@/utils";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
  size?: "sm" | "md" | "lg";
}

export default function Input(
  { className, size = "md", ...props }: Props,
  ref?: React.LegacyRef<HTMLInputElement>,
) {
  return (
    <input
      className={twMerge(
        "rounded border-none  outline outline-gray-500/25 transition hover:outline-gray-500/50 focus:outline-2 focus:outline-primary-500",
        size === "sm" && "px-2 py-1 text-xs",
        size === "md" && "px-4 py-2 text-sm",
        size === "lg" && "px-6 py-3 text-base",
        className,
      )}
      ref={IsValidRef(ref) ? ref : undefined}
      {...props}
    />
  );
}
