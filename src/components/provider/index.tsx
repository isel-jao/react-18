import React from "react";
const Context = React.createContext<unknown | null>(null);

function useProvider<Type>() {
  if (!Context) throw new Error("useProvider must be used within a Provider");
  return React.useContext(Context) as Type;
}
interface Props<T> {
  value: T;
  children?: React.ReactNode;
}
function Provider<T>({ value, children }: Props<T>) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { useProvider, Provider };
export default Provider;
