import Button, { ButtonProps } from "../button";
import { twMerge } from "tailwind-merge";
export default function IconButton({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Button
      className={twMerge(
        "flex aspect-square w-8 items-center justify-center rounded-full px-0 py-0 ",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
