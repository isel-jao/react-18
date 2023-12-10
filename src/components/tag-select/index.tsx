import { useState, useRef, ElementRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import IconButton from "../icon-button";
import { X } from "lucide-react";

type TagProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;
type InputProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "onKeyDown" | "children"
>;

export interface TagSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  pool?: string[];
  value: string[];
  onValueChange: (value: string[]) => void;
  tagProps?: TagProps;
  inputProps?: InputProps;
}

export function TagSelect({
  pool,
  value,
  className,
  onValueChange,
  tagProps,
  inputProps,
  ...props
}: TagSelectProps) {
  const [search, setSearch] = useState("");
  const inputRef = useRef<ElementRef<"input">>(null);

  const remainingTags = useMemo(() => {
    if (!pool) return [];
    const remainingTags = Array.from(new Set(pool)).filter(
      (tag) => !value.includes(tag) && tag.includes(search),
    );
    return remainingTags;
  }, [pool, value, search]);

  return (
    <div
      {...props}
      className={twMerge(
        "relative flex h-fit flex-wrap items-center gap-2 rounded-md border bg-white p-3 ",
        className,
      )}
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      {value.map((tag, index) => (
        <span
          {...tagProps}
          className="flex items-center gap-1 rounded-full bg-gray-700 py-0 pl-2 text-white"
          key={index}
          onClick={() => {
            onValueChange(value.filter((_, i) => i !== index));
          }}
        >
          <span>{tag}</span>
          <IconButton variant="ghost" className="text-white">
            <X className="h-4 w-4 " />
          </IconButton>
        </span>
      ))}
      <input
        {...inputProps}
        ref={inputRef}
        type="text "
        className="peer w-32 flex-1 border border-none  px-2 outline-none focus:border-none"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newValue = search.trim();
            if (!newValue || value.includes(newValue)) return;
            onValueChange([...value, newValue]);
            setSearch("");
          }
        }}
      />
      <div
        className={twMerge(
          "absolute inset-x-0  top-full hidden max-h-96 flex-col overflow-auto rounded border bg-white ",
          search.length && "flex",
        )}
      >
        {remainingTags.map((tag, index) => (
          <span
            className="hover flex cursor-pointer items-center px-2 py-1 hover:bg-gray-700/10"
            key={index}
            onClick={() => {
              onValueChange([...value, tag]);
              setSearch("");
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
