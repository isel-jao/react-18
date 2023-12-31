import { AppContext } from "@/App";
import Switch from "../switch";
import { twMerge } from "tailwind-merge";
import Card from "../card";
import useProvider from "@/hooks/use-provider";

interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

export default function Upbar({ className, ...props }: Props) {
  const { theme, setTheme } = useProvider<AppContext>();
  return (
    <Card
      className={twMerge(
        ` fixed left-0 top-0 flex h-14 w-full flex-wrap items-center gap-4 rounded-none px-4 py-0`,
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
    </Card>
  );
}
