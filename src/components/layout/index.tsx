import { AppContext } from "@/App";
import { useProvider } from "../provider";
import Switch from "../switch";
import { routes, RouteType } from "@/components/router-provicder/router";
import { useNavigate, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

function Upbar() {
  const { theme, setTheme } = useProvider<AppContext>();
  return (
    <div
      className={`bg-blur  fixed left-0 top-0 flex h-14 w-full flex-wrap items-center gap-4 bg-white/50 px-4 shadow dark:bg-black/20`}
    >
      <span className="flex select-none items-center gap-2">
        <img src="/react.svg" className="h-8" alt="" />
        <span className="uppercase text-[#52C1DE]">react 18</span>
      </span>

      <span className="ml-auto">darkMode</span>
      <Switch
        checked={theme === "dark"}
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
      />
    </div>
  );
}

function RouterLink({
  route,
  parent = "",
}: {
  route: RouteType;
  parent?: string;
}) {
  const location = useLocation();
  const path = parent + "/" + route.path.replace(/\//, "");
  const hasActiveChild = route.children?.some(
    (r) => location.pathname === path + "/" + r.path.replace(/\//, ""),
  );

  const [open, setOpen] = useState(hasActiveChild);
  const navigate = useNavigate();
  const isActive = location.pathname === path;

  const handlClick = () => {
    if (route.children) {
      setOpen((prev) => !prev);
    } else navigate(path);
  };

  return (
    <div className="flex flex-col">
      <button
        className={twMerge(
          " flex select-none items-center gap-2 rounded bg-transparent stroke-black px-4 py-2 text-left  transition-colors duration-300 hover:bg-primary-500/5 hover:stroke-primary-500 hover:text-primary-500 dark:stroke-white",
          !parent &&
            (isActive || hasActiveChild) &&
            "bg-primary-500 stroke-white text-white hover:bg-primary-600 hover:stroke-white hover:text-white",
          parent &&
            isActive &&
            "bg-primary-500/5 stroke-primary-500 text-primary-500",
        )}
        onClick={handlClick}
      >
        {!parent && (
          <span className={twMerge("w-5", isActive && "stroke-draw")}>
            {route.icon}
          </span>
        )}
        <span className="transition-none first-letter:uppercase">
          {route.name}
        </span>
      </button>
      <div
        className={twMerge(
          "flex max-h-0 flex-col overflow-hidden transition-[max-height] duration-300 ",
          open && "max-h-screen",
        )}
      >
        {route.children?.map((r) => (
          <RouterLink key={r.path} route={r} parent={path} />
        ))}
      </div>
    </div>
  );
}

function SideBar() {
  const appRouts = routes.find((route) => route.path === "/")?.children || [];
  return (
    <div
      className={`
    bg-blur fixed bottom-0 left-0 top-14 flex w-64 flex-col gap-2
  bg-white/50 px-2 py-4 shadow dark:bg-black/20 `}
    >
      {appRouts.map((route, index) => (
        <RouterLink key={index} route={route} />
      ))}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text- bg-slat flex h-screen  w-screen  flex-col bg-white pl-64 pt-14 text-black transition-colors dark:bg-primary-900 dark:text-white">
      <Upbar />
      <SideBar />
      <div className=" flex-1 overflow-x-hidden p-4">{children}</div>
    </div>
  );
}
