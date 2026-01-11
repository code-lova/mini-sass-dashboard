//Made this hook to simulate delays in loading states in data fetching for 
// different components for demo purposes

import { useEffect, useState } from "react";

export function useSimulatedDelay(delayMs: number) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  return isLoading;
}
