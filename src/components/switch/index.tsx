import { twMerge } from "tailwind-merge";

type SwitchProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function Switch({ className, ...props }: SwitchProps) {
  return (
    <label
      className={twMerge(
        "relative inline-flex cursor-pointer items-center",
        className,
      )}
    >
      <input type="checkbox" className="peer sr-only" {...props} />
      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-transform  after:content-[''] peer-checked:bg-primary-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none   dark:border-gray-600 dark:bg-gray-700"></div>
    </label>
  );
}
