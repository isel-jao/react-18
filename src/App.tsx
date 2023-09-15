import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemType } from "./utils";
import Provider from "./components/provider";
import { Outlet } from "react-router-dom";
import Layout from "./components/layout";

export type AppContext = {
  theme: ThemType;
  setTheme: React.Dispatch<React.SetStateAction<ThemType>>;
};

function App() {
  const [theme, setTheme] = useState<ThemType>("light");
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
