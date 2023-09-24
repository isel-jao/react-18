import App from "@/App";
import HomePage from "@/pages/home";
import NotFoundPage from "@/pages/not-found";
import { createBrowserRouter } from "react-router-dom";
import { ReactComponent as HomeIcon } from "@/assets/home.svg";
import { ReactComponent as MapIcon } from "@/assets/map.svg";
import { ReactComponent as DevIcon } from "@/assets/dev.svg";
import { ReactComponent as HookIcon } from "@/assets/hook.svg";
import { ReactComponent as ComponentsIcon } from "@/assets/components.svg";
import LeafletPage from "@/pages/leaflet";
import DevPage from "@/pages/dev";
import HooksPage from "@/pages/hooks";
import ComponentsPage from "@/pages/components";

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
      },
      {
        path: "components",
        element: <ComponentsPage />,
        name: "components",
        icon: <ComponentsIcon />,
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
