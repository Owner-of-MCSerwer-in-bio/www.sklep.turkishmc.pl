import { useNavigate } from "react-router";
import { useLang } from "./LangContext";
import { T } from "./shared";

const ICONS: Record<string, string> = {
  shop: "🛒", faq: "❓", help: "🛠",
};
const TITLES: Record<string, Record<string, string>> = {
  shop: { pl: "Sklep", en: "Shop", ua: "Магазин" },
  faq:  { pl: "FAQ",   en: "FAQ",  ua: "FAQ" },
  help: { pl: "Pomoc", en: "Help", ua: "Допомога" },
};

export default function PlaceholderPage({ pageKey }: { pageKey: string }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  const t = T[lang];

  return (
    <div className="w-full max-w-[1800px] flex flex-1 items-center justify-center mt-20">
      <div className="border-4 border-[#5c3b1e] bg-[#0a0705] shadow-[0_0_0_4px_#16130f] px-20 py-24 flex flex-col items-center gap-10">
        <span className="text-[48px]">{ICONS[pageKey]}</span>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9943a] to-[#c9943a]" />
            <span className="font-['Press_Start_2P'] text-[7px] text-[#7a5520]">◆</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#c9943a] to-[#c9943a]" />
          </div>
          <p className="font-['Press_Start_2P'] text-[16px] text-[#ffe4a2] [text-shadow:2px_2px_0_#9d5518] text-center">
            {TITLES[pageKey]?.[lang] ?? pageKey}
          </p>
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9943a] to-[#c9943a]" />
            <span className="font-['Press_Start_2P'] text-[7px] text-[#7a5520]">◆</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#c9943a] to-[#c9943a]" />
          </div>
        </div>
        <p className="font-['Press_Start_2P'] text-[8px] text-[#5a4020] text-center leading-loose">
          {lang === "pl" ? "Ta sekcja jest w trakcie budowy." : lang === "en" ? "This section is under construction." : "Цей розділ знаходиться в розробці."}
        </p>
        <button onClick={() => navigate("/")}
          className="font-['Press_Start_2P'] text-[10px] text-[#c9a04a] border-2 border-[#5c3b1e] px-6 py-3 hover:bg-[#1a1006] hover:text-[#f4c75d] transition-colors">
          {t.backHome}
        </button>
      </div>
    </div>
  );
}
