import Card from "@/components/card";
import Button from "@/components/button";
import UseTransition from "./use-transition";
import UseLocalStorage from "./use-local-storage";
import UseRef from "./use-ref";
import UseDebouce from "./use-debounce";
import UserDeferedValue from "./use-defered-value";
import UseImperativeHandle from "./use-imperative-handle";

const hooks = [
  {
    name: "useTransition",
    component: UseTransition,
  },
  {
    name: "useLocalStorage",
    component: UseLocalStorage,
    isCustom: true,
  },
  {
    name: "useRef",
    component: UseRef,
  },
  {
    name: "useDebounce",
    component: UseDebouce,
    isCustom: true,
  },
  {
    name: "useDeferedValue",
    component: UserDeferedValue,
  },
  {
    name: "useImperativeHandle",
    component: UseImperativeHandle,
  },
];

export default function HooksPage() {
  return (
    <div className="flex h-full flex-col gap-6 overflow-hidden !px-0">
      <div className="hide-scrollbar flex gap-2 overflow-x-auto px-4">
        {hooks.map((hook) => (
          <Button
            variant="ghost"
            key={hook.name}
            onClick={() => {
              location.href = `#${hook.name}`;
            }}
          >
            {hook.name}
          </Button>
        ))}
      </div>
      <div className="flex h-1 flex-1 flex-col gap-4 overflow-x-hidden scroll-smooth px-4 ">
        {hooks.map((hook) => (
          <Card
            key={hook.name}
            className="ga flex flex-col gap-4 p-4"
            id={hook.name}
          >
            <h3 className="text-2xl">
              {hook.name} {hook.isCustom && "(custom)"}
            </h3>
            <hook.component />
          </Card>
        ))}
      </div>
    </div>
  );
}
