import { createContext, useContext, useState } from "react";
import type { LensKey } from "@/lib/cherre-data";

interface LensContextValue {
  activeLens: LensKey;
  setActiveLens: (lens: LensKey) => void;
}

const LensContext = createContext<LensContextValue>({
  activeLens: "investment",
  setActiveLens: () => {},
});

export function useLens() {
  return useContext(LensContext);
}

export function LensProvider({ children }: { children: React.ReactNode }) {
  const [activeLens, setActiveLens] = useState<LensKey>("investment");
  return (
    <LensContext.Provider value={{ activeLens, setActiveLens }}>
      {children}
    </LensContext.Provider>
  );
}
