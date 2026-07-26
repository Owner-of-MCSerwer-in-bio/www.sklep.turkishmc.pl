import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "pl" | "en" | "ua";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<LangCtx>({ lang: "pl", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pl");
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}
