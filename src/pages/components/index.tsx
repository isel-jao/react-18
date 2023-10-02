import Card from "@/components/card";
import Button from "@/components/button";
import DataGridExample from "./data-grid";
import DrawerExample from "./drawer";
import SuspenseExample from "./suspense";

const hooks: {
  name: string;
  Component: () => JSX.Element;
  isCustom?: boolean;
}[] = [
  {
    name: "suspense/ error-boundry",
    Component: SuspenseExample,
    isCustom: true,
  },
  {
    name: "data grid",
    Component: DataGridExample,
    isCustom: true,
  },
  {
    name: "drawer",
    Component: DrawerExample,
    isCustom: true,
  },
];

export default function ComponentsPage() {
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
        {hooks.map(({ name, Component, isCustom }) => (
          <Card key={name} className="ga flex flex-col gap-4 p-4" id={name}>
            <h3 className="text-2xl">
              {name} {isCustom && "(custom)"}
            </h3>
            <Component />
          </Card>
        ))}
      </div>
    </div>
  );
}
