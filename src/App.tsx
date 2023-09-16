import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Provider from "./components/provider";
import { Outlet } from "react-router-dom";
import Layout from "./components/layout";
import useLocalStorage from "./hooks/use-local-storage";
import { ThemeType, themeShema } from "./utils";

export type AppContext = {
  theme: ThemeType | undefined;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

function App() {
  const [theme, setTheme] = useLocalStorage("theme", themeShema);
  const appContext: AppContext = {
    theme,
    setTheme,
  };
  return (
    <Provider value={appContext}>
      <div className={`${theme} text-xs sm:text-sm md:text-base`}>
        <Layout>
          <Outlet />
        </Layout>

        <ToastContainer theme={theme} />
      </div>
    </Provider>
  );
}

export default App;
