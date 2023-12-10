import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  labels: string[];
  value: number;
  onChange: (value: number) => void;
}

export default function ContrastTabs({
  labels,
  value,
  className,
  onChange,
}: Props) {
  return (
    <div className={twMerge("flex gap-1 bg-white", className)}>
      {labels.map((label, index) => (
        <button
          className="relative px-2 py-1"
          key={index}
          onClick={() => onChange(index)}
        >
          {index === value && (
            <motion.div
              className={`absolute inset-0 bg-black `}
              layoutId="active"
              transition={{
                type: "spring",
                mass: 0.7,
              }}
              style={{
                borderRadius: 9999,
              }}
            ></motion.div>
          )}
          <span className="relative z-10 text-white mix-blend-exclusion">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}
