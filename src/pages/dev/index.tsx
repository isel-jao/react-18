import IconButton from "@/components/icon-button";
import { TagSelect } from "@/components/tag-select";
import { ElementRef, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const oldTags = [
  "react",
  "react",
  "vue",
  "angular",
  "svelte",
  "tailwindcss",
  "bootstrap",
  "material-ui",
  "chakra-ui",
  "react-query",
  "swr",
  "nextjs",
  "nuxtjs",
  "sveltekit",
  "vite",
  "webpack",
  "rollup",
  "typescript",
  "javascript",
  "html",
  "css",
  "scss",
  "sass",
  "less",
  "styled-components",
  "emotion",
  "tailwindcss",
];

export default function DevPage() {
  const [tags, setTags] = useState<string[]>([]);
  return (
    <div className="flex h-full  gap-4 overflow-auto bg-slate-100 p-4">
      <TagSelect
        className="w-96"
        pool={oldTags}
        value={tags}
        onValueChange={setTags}
      />
    </div>
  );
}
