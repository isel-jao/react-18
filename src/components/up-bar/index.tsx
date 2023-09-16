import { AppContext } from "@/App";
import { useProvider } from "../provider";
import Switch from "../switch";
import { twMerge } from "tailwind-merge";

interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

export default function Upbar({ className, ...props }: Props) {
  const { theme, setTheme } = useProvider<AppContext>();
  return (
    <div
      className={twMerge(
        `bg-blur  fixed left-0 top-0 flex h-14 w-full flex-wrap items-center gap-4 bg-white/50 px-4 shadow dark:bg-black/20`,
        className,
      )}
      {...props}
    >
      <span className="flex select-none items-center gap-2">
        <img src="/react.svg" className="h-8" alt="" />
        <span className="uppercase text-[#52C1DE]">react 18</span>
      </span>

      <span className="ml-auto">darkMode</span>
      <Switch
        checked={theme === "dark"}
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
      />
    </div>
  );
}
