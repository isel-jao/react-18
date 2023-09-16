import Input from "@/components/input";
import useDebouce from "@/hooks/use-debounce";
import { useState } from "react";

export default function UseDeboucePage() {
  const [search, setSearch] = useState("hello");
  const [delay, setDelay] = useState(500);
  const debouncedSearch = useDebouce(search, delay);

  return (
    <div className="grid grid-cols-2 gap-y-6">
      <div className="flex items-center gap-4">
        <label htmlFor="search">search</label>
        <Input
          id="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="delay">delay</label>
        <Input
          id="delay"
          type="number"
          value={delay}
          onChange={(e) => {
            setDelay(Number(e.target.value));
          }}
        />
      </div>
      <span>value: {search}</span>
      <span>debouced value: {debouncedSearch}</span>
    </div>
  );
}
