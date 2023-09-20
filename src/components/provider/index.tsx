import React from "react";
import Context from "./context";

interface Props<T> {
  value: T;
  children?: React.ReactNode;
}
function Provider<T>({ value, children }: Props<T>) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
