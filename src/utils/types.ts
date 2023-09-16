import { z } from "zod";

export const themes = ["light", "dark"] as const;

export const themeShema = z.enum(themes).default("light");

export type ThemeType = z.infer<typeof themeShema>;
