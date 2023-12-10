import { MultiSelect } from "@/components/multi-select";
import { useState } from "react";

const oldTags = [
  "react",
  "vue",
  "svelte",
  "angular",
  "javascript",
  "typescript",
  "rust",
  "go",
  "python",
  "c",
  "c++",
  "c#",
  "java",
  "kotlin",
  "swift",
  "dart",
  "flutter",
  "react native",
  "android",
  "ios",
];

export default function DevPage() {
  const [tags, setTags] = useState<string[]>([]);
  return (
    <div className="flex h-full  gap-4 overflow-auto bg-slate-100 p-4">
      <MultiSelect
        className="w-96"
        value={tags}
        onValueChange={setTags}
        options={oldTags}
        valueRenderer={(tag) => tag}
        optionRenderer={(tag) => tag}
      />
    </div>
  );
}
