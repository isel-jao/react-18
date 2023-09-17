import App from "@/App";
import HomePage from "@/pages/home";
import NotFoundPage from "@/pages/not-found";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { ReactComponent as HomeIcon } from "@/assets/home.svg";
import { ReactComponent as MapIcon } from "@/assets/map.svg";
import { ReactComponent as DevIcon } from "@/assets/dev.svg";
import { ReactComponent as HookIcon } from "@/assets/hook.svg";
import LeafletPage from "@/pages/leaflet";
import DevPage from "@/pages/dev";
import UseTransitionPage from "@/pages/use-transition";
import UseLocalStoragePage from "@/pages/use-local-storage";
import UseDeboucePage from "@/pages/use-debounce";
import UseRefPage from "@/pages/use-ref";
import HooksPage from "@/pages/hooks";

export type RouteType = {
  path: string;
  name?: string;
  element: React.ReactNode;
  icon?: React.ReactNode;
  children?: RouteType[];
};

export const routes: RouteType[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
        name: "home",
        icon: <HomeIcon />,
      },
      {
        path: "leaflet",
        element: <LeafletPage />,
        name: "leaflet",
        icon: <MapIcon />,
      },
      {
        path: "hooks",
        element: <HooksPage />,
        name: "hooks",
        icon: <HookIcon />,
        // children: [
        //   {
        //     path: "use-transition",
        //     element: <UseTransitionPage />,
        //     name: "useTransition",
        //   },
        //   {
        //     path: "use-local-storage",
        //     element: <UseLocalStoragePage />,
        //     name: "useLocalStorage",
        //   },
        //   {
        //     path: "use-debounce",
        //     element: <UseDeboucePage />,
        //     name: "UseDebouce",
        //   },
        //   {
        //     path: "use-ref",
        //     element: <UseRefPage />,
        //     name: "UseRef/ForwardRef",
        //   },
        // ],
      },
      {
        path: "dev",
        element: <DevPage />,
        name: "dev",
        icon: <DevIcon />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
