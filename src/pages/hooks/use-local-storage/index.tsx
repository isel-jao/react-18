import Select from "@/components/select";
import Switch from "@/components/switch";
import useLocalStorage from "@/hooks/use-local-storage";
import { z } from "zod";

const settingSchema = z
  .object({
    darkMode: z.boolean(),
    language: z.enum(["en", "fr", "ar"]),
    fontSize: z.number(),
  })
  .default({
    darkMode: false,
    language: "en",
    fontSize: 16,
  });

export default function UseLocalStorage() {
  const [settings, setSettings] = useLocalStorage("settings", settingSchema);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl first-letter:capitalize">
        change the settings and refresh the page
      </h1>
      <div className="flex items-center gap-4">
        <label htmlFor="darkMode">Dark Mode</label>
        <Switch
          id="darkMode"
          checked={settings.darkMode}
          onChange={(e) => {
            setSettings({
              ...settings,
              darkMode: e.target.checked,
            });
          }}
        />
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="language">Language</label>
        <Select
          name="language"
          id="language"
          value={settings.language}
          onChange={(e) => {
            setSettings({
              ...settings,
              language: e.target.value as "en" | "fr" | "ar",
            });
          }}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
        </Select>
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="fontSize">Font Size</label>
        <input
          type="range"
          name="fontSize"
          id="fontSize"
          min={12}
          max={24}
          value={settings.fontSize}
          onChange={(e) => {
            setSettings({
              ...settings,
              fontSize: Number(e.target.value),
            });
          }}
        />
        <span>
          {settings.fontSize} {settings.fontSize === 24 ? "🤯" : ""}
        </span>
      </div>
    </div>
  );
}
