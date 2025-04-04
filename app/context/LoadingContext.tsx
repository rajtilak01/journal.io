"use client";

import { LoadingOverlay } from "@/components/LoadingOverlay";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  show: () => {},
  hide: () => {},
  isLoading: false,
});

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  const show = () => setIsLoading(true);
  const hide = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ show, hide, isLoading }}>
      {children}
      {isLoading && <LoadingOverlay />}
    </LoadingContext.Provider>
  );
}
