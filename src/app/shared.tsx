import type { Lang } from "./LangContext";

export const SERVER_IP = "TurkishMC.pl";

export const LANGS = [
  { code: "pl" as Lang, flag: "🇵🇱", label: "PL" },
  { code: "en" as Lang, flag: "🇬🇧", label: "ANG" },
  { code: "ua" as Lang, flag: "🇺🇦", label: "UA" },
];

export const T: Record<Lang, Record<string, string>> = {
  pl: {
    shop: "Sklep", faq: "FAQ", rules: "Regulamin", help: "Pomoc",
    tagline: "Oficjalny sklep polskiego serwera Minecraft",
    ipLabel: "Adres serwera", ipCopy: "Skopiuj", ipCopied: "Skopiowano!",
    modeJoin: "Zobacz ofertę", featTitle: "Wybierz tryb", discordBtn: "Discord",
    backHome: "← Powrót",
    footerSub: "Polski serwer Survival LifeSteal",
    footerInfo: "Informacje", footerServer: "Serwer", footerSocial: "Społeczność",
    footerRules: "Regulamin", footerFaq: "FAQ", footerPolicy: "Polityka prywatności",
    footerShop: "Sklep", footerHelp: "Pomoc", footerStatus: "Status serwera", footerVote: "Głosowanie",
    footerDiscord: "Discord", footerYt: "YouTube", footerTt: "TikTok", footerIg: "Instagram",
    footerLegal: "TurkishMC.pl jest niezależnym serwerem społeczności Minecraft i nie jest powiązany z Mojang Studios ani Microsoft.",
    footerIpLabel: "IP SERWERA",
  },
  en: {
    shop: "Shop", faq: "FAQ", rules: "Rules", help: "Help",
    tagline: "Official shop of the Polish Minecraft server",
    ipLabel: "Server address", ipCopy: "Copy", ipCopied: "Copied!",
    modeJoin: "Browse offers", featTitle: "Choose mode", discordBtn: "Discord",
    backHome: "← Back",
    footerSub: "Polish Survival LifeSteal Server",
    footerInfo: "Information", footerServer: "Server", footerSocial: "Community",
    footerRules: "Rules", footerFaq: "FAQ", footerPolicy: "Privacy Policy",
    footerShop: "Shop", footerHelp: "Help", footerStatus: "Server Status", footerVote: "Vote",
    footerDiscord: "Discord", footerYt: "YouTube", footerTt: "TikTok", footerIg: "Instagram",
    footerLegal: "TurkishMC.pl is an independent Minecraft community server and is not affiliated with Mojang Studios or Microsoft.",
    footerIpLabel: "SERVER IP",
  },
  ua: {
    shop: "Магазин", faq: "FAQ", rules: "Правила", help: "Допомога",
    tagline: "Офіційний магазин польського сервера Minecraft",
    ipLabel: "Адреса сервера", ipCopy: "Копіювати", ipCopied: "Скопійовано!",
    modeJoin: "Переглянути пропозиції", featTitle: "Обери режим", discordBtn: "Discord",
    backHome: "← Назад",
    footerSub: "Польський сервер Survival LifeSteal",
    footerInfo: "Інформація", footerServer: "Сервер", footerSocial: "Спільнота",
    footerRules: "Правила", footerFaq: "FAQ", footerPolicy: "Політика конфіденційності",
    footerShop: "Магазин", footerHelp: "Допомога", footerStatus: "Статус сервера", footerVote: "Голосування",
    footerDiscord: "Discord", footerYt: "YouTube", footerTt: "TikTok", footerIg: "Instagram",
    footerLegal: "TurkishMC.pl — незалежний сервер спільноти Minecraft, не пов'язаний з Mojang Studios або Microsoft.",
    footerIpLabel: "IP СЕРВЕРА",
  },
};

export const DISCORD_SVG = (
  <svg width="18" height="14" viewBox="0 0 24 18" fill="currentColor" aria-hidden="true">
    <path d="M20.317 1.492a19.825 19.825 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 1.492a.07.07 0 00-.032.027C.533 6.093-.32 10.555.099 14.961a.08.08 0 00.031.055 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.442a.061.061 0 00-.031-.03z"/>
  </svg>
);

export function NavBadge({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="group flex flex-col items-center px-8 py-2 gap-0.5 transition-opacity hover:opacity-80">
      <div className="flex items-center gap-1.5 w-full">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9943a] to-[#c9943a]" />
        <span className="font-['Press_Start_2P'] text-[7px] text-[#7a5520]">◆</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#c9943a] to-[#c9943a]" />
      </div>
      <span className="font-['Press_Start_2P'] text-[13px] tracking-widest text-[#ffe4a2] [text-shadow:2px_2px_0_#9d5518,4px_4px_8px_rgba(0,0,0,0.8)] px-3 whitespace-nowrap">
        TurkishMC<span className="text-[#d52e1f]">.pl</span>
      </span>
      <div className="flex items-center gap-1.5 w-full">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9943a] to-[#c9943a]" />
        <span className="font-['Press_Start_2P'] text-[7px] text-[#7a5520]">◆</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#c9943a] to-[#c9943a]" />
      </div>
    </button>
  );
}
