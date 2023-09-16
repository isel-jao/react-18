import { useState, useEffect } from "react";

export default function useDebouce<T>(state: T, delay: number = 500) {
  const [debouncedState, setDebouncedState] = useState(state);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedState(state);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [state, delay]);
  return debouncedState;
}
