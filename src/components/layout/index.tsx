import SideBar from "../side-bar";
import Upbar from "../up-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text- bg-slat flex h-screen  w-screen  flex-col  pl-64 pt-14 text-black  dark:bg-primary-900 dark:text-white">
      <Upbar className="z-1" />
      <SideBar />
      <div className=" flex-1 overflow-x-hidden scroll-smooth [&>*]:p-4">
        {children}
      </div>
    </div>
  );
}
