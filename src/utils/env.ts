import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  VITE_BACKEND_API: z.string().default("http://localhost:3000"),
});

export const env = envSchema.parse(import.meta.env);
