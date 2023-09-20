import Context from "@/components/provider/context";
import { useContext } from "react";

function useProvider<Type>() {
  if (!Context) throw new Error("useProvider must be used within a Provider");
  return useContext(Context) as Type;
}

export default useProvider;
