import { useState, useRef, ElementRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import IconButton from "../icon-button";
import { X } from "lucide-react";

type OptionProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;

export interface TagSelectProps<T>
  extends React.HTMLAttributes<HTMLDivElement> {
  options: T[];
  value: T[];
  onValueChange: (value: T[]) => void;
  optionProps?: OptionProps;
  optionRenderer: (option: T) => React.ReactNode;
  valueRenderer: (value: T) => React.ReactNode;
}

export function MultiSelect<T>({
  options,
  valueRenderer,
  optionRenderer,
  value,
  className,
  onValueChange,
  optionProps,
  ...props
}: TagSelectProps<T>) {
  const [showOptions, setShowOptions] = useState(false);
  const inputRef = useRef<ElementRef<"input">>(null);
  const containerRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    // click outside
    if (!showOptions) return;
    const listener = (e: MouseEvent) => {
      if (
        !containerRef.current?.contains(e.target as Node) &&
        !inputRef.current?.contains(e.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", listener);
  }, [showOptions]);

  return (
    <div
      ref={containerRef}
      {...props}
      className={twMerge(
        " relative  flex h-fit min-h-[2rem] flex-wrap items-center gap-2 rounded-md border  bg-white p-3",
        className,
      )}
      onClick={() => {
        inputRef.current?.focus();
        setShowOptions(true);
      }}
    >
      {value.map((item, index) => (
        <span
          {...optionProps}
          className="flex items-center gap-1 rounded-full bg-gray-700 py-0 pl-2 text-white"
          key={index}
          onClick={() => {
            onValueChange(value.filter((_, i) => i !== index));
          }}
        >
          <span>{valueRenderer(item)}</span>
          <IconButton variant="ghost" className="text-white">
            <X className="h-4 w-4 " />
          </IconButton>
        </span>
      ))}
      <div
        className={twMerge(
          "absolute inset-x-0  top-full hidden max-h-96 flex-col overflow-auto rounded border bg-white ",
          showOptions && "flex",
        )}
      >
        {options.map((option, index) => (
          <span
            className="hover flex cursor-pointer items-center px-2 py-1 hover:bg-gray-700/10"
            key={index}
            onClick={() => {
              if (value.includes(option))
                onValueChange(value.filter((v) => v !== option));
              else onValueChange([...value, option]);
            }}
          >
            <span>{optionRenderer(option)}</span>
            {
              <span className="flex-1 text-right text-xl text-gray-500">
                {value.includes(option) ? "✓" : ""}
              </span>
            }
          </span>
        ))}
      </div>
    </div>
  );
}
