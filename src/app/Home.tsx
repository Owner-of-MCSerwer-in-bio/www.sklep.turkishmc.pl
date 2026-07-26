import { useState } from "react";
import type { CSSProperties } from "react";
import { useOutletContext } from "react-router";
import originalLogo from "../imports/file_00000000b1a8720a8e07ca1520555769_1_.png";
import type { Lang } from "./LangContext";

const specks = [
  [7, 18, 5], [14, 70, 4], [25, 30, 3], [34, 83, 6], [48, 14, 3], [55, 77, 4],
  [63, 8, 4], [72, 24, 5], [79, 69, 3], [89, 35, 4], [94, 80, 5], [84, 12, 3],
] as const;

const MODES = [
  {
    id: "survival", name: "Survival LifeSteal", color: "#e05a2b", border: "#7a2e10",
    glow: "rgba(224,90,43,0.35)", icon: "❤",
    desc: { pl: "Klasyczne przeżycie z mechaniką kradzieży serc. Zbuduj imperium lub zgiń próbując.", en: "Classic survival with heart-stealing mechanics. Build an empire or die trying.", ua: "Класичне виживання з механікою крадіжки сердець. Побудуй імперію або загинь намагаючись." },
  },
  {
    id: "boxpvp", name: "BoxPvP", color: "#4a9ede", border: "#1a4a7a",
    glow: "rgba(74,158,222,0.35)", icon: "⚔",
    desc: { pl: "Walcz na arenach PvP i wspinaj się po rankingach. Udowodnij, że jesteś najlepszy.", en: "Fight in PvP arenas and climb the rankings. Prove you are the best.", ua: "Бийся на аренах PvP та підіймайся в рейтингах. Доведи, що ти найкращий." },
  },
  {
    id: "oneblock", name: "OneBlock", color: "#5cb85c", border: "#2a6a2a",
    glow: "rgba(92,184,92,0.35)", icon: "▪",
    desc: { pl: "Zacznij od jednego bloku i zbuduj własny świat od zera. Kreatywność nie zna granic.", en: "Start from one block and build your own world from scratch. Creativity knows no limits.", ua: "Почни з одного блоку і побудуй свій світ з нуля. Творчість не знає меж." },
  },
];

const SERVER_IP = "TurkishMC.pl";

export default function Home() {
  const { t, lang } = useOutletContext<{ t: Record<string, string>; lang: Lang }>();
  const [copied, setCopied] = useState(false);

  function copyIP() {
    navigator.clipboard.writeText(SERVER_IP).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      {/* Baner */}
      <section
        aria-label="Baner TurkishMC.pl"
        className="relative isolate flex w-full max-w-[1800px] overflow-hidden border-4 border-[#5c3b1e] bg-black shadow-[0_0_0_4px_#16130f,0_28px_80px_rgba(0,0,0,0.65)] aspect-[4/1] min-h-[300px]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(118,55,12,0.28),transparent_34%),radial-gradient(ellipse_at_92%_28%,rgba(226,158,45,0.1),transparent_20%),linear-gradient(90deg,#000_0%,#000_48%,#050403_64%,#0d0a06_100%)]" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#e3ad4d] shadow-[0_5px_0_#75441a,0_9px_0_#1a110b]" />
        <div className="absolute inset-x-0 bottom-0 h-2 bg-[#4f301a]" />

        {specks.map(([left, top, size], index) => (
          <i aria-hidden="true" key={`${left}-${top}`}
            className="absolute block bg-[#f4c75d] shadow-[0_0_10px_rgba(235,172,50,0.8)]"
            style={{ left: `${left}%`, top: `${top}%`, width: `${size}px`, height: `${size}px`, opacity: 0.32 + (index % 3) * 0.16 } as CSSProperties}
          />
        ))}

        <div className="relative z-10 flex w-[30%] min-w-[230px] items-center justify-center px-2 py-3 sm:px-5">
          <div className="relative h-[85%] w-[85%] max-w-[374px]">
            <img src={originalLogo} alt="Logo TurkishMC.pl"
              className="h-full w-full object-contain object-center [image-rendering:pixelated]" />
          </div>
        </div>

        <div className="relative z-10 flex flex-1 items-center pl-5 pr-7 sm:pl-9 md:pr-16 lg:pl-14">
          <div className="relative max-w-[890px]">
            <span aria-hidden="true" className="absolute -left-4 top-1/2 -translate-y-1/2 font-['Press_Start_2P'] leading-none text-[#e9b651] [text-shadow:2px_2px_0_#3c2111] sm:-left-6 text-[14px] mx-[40px] my-[50px]">•</span>
            <h1 className="font-['Press_Start_2P'] text-[clamp(1.5rem,4.7vw,5.15rem)] leading-[1.08] tracking-[-0.05em] text-[#ffe4a2] [text-shadow:3px_3px_0_#9d5518,6px_6px_0_#2b190d,10px_10px_18px_rgba(0,0,0,0.72)] sm:[text-shadow:5px_5px_0_#9d5518,10px_10px_0_#2b190d,15px_15px_22px_rgba(0,0,0,0.72)]">
              TurkishMC<span className="text-[#d52e1f]">.pl</span>
            </h1>
            <div className="mt-5 sm:mt-6">
              <p className="font-['Press_Start_2P'] text-[clamp(0.48rem,1.15vw,1rem)] leading-[1.6] tracking-[0.08em] text-[#f3ca78] [text-shadow:2px_2px_0_#3c2111] mx-[45px]">
                {t.tagline}<br />
                <span className="text-[#ffd97a]">Survival LifeSteal</span>
                <span className="text-[#b0b0b0]"> / </span>
                <span className="text-[#ffd97a]">BoxPvP</span>
                <span className="text-[#b0b0b0]"> / </span>
                <span className="text-[#ffd97a]">OneBlock</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IP + Social */}
      <div className="w-full max-w-[1800px] mt-4 flex gap-4">
        <div className="flex w-1/2 items-center overflow-hidden border-4 border-[#5c3b1e] bg-[#0a0705] shadow-[0_0_0_4px_#16130f]">
          <span className="font-['Press_Start_2P'] text-[10px] text-[#6b4c22] px-5 py-3.5 border-r border-[#2e1d0a] uppercase tracking-widest whitespace-nowrap">
            {t.ipLabel}
          </span>
          <span className="flex-1 text-center font-['Press_Start_2P'] text-[13px] text-[#ffe4a2] py-3.5 [text-shadow:2px_2px_0_#9d5518] tracking-widest select-all">
            {SERVER_IP}
          </span>
          <button onClick={copyIP}
            className={`px-6 py-3.5 font-['Press_Start_2P'] text-[10px] border-l border-[#2e1d0a] transition-colors whitespace-nowrap ${copied ? "bg-[#2a5c2a] text-[#7fff7f]" : "text-[#c9a04a] hover:bg-[#1a1006] hover:text-[#f4c75d]"}`}>
            {copied ? t.ipCopied : t.ipCopy}
          </button>
        </div>

        <div className="flex flex-1 items-stretch overflow-hidden border-4 border-[#5c3b1e] bg-[#0a0705] shadow-[0_0_0_4px_#16130f] divide-x divide-[#2e1d0a]">
          {[
            { href: "https://discord.gg/turkishmc", label: "Discord", color: "#5865F2", hover: "#7a8fff",
              icon: <svg width="22" height="17" viewBox="0 0 24 18" fill="currentColor"><path d="M20.317 1.492a19.825 19.825 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 1.492a.07.07 0 00-.032.027C.533 6.093-.32 10.555.099 14.961a.08.08 0 00.031.055 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.442a.061.061 0 00-.031-.03z"/></svg> },
            { href: "#", label: "YouTube", color: "#FF0000", hover: "#ff5555",
              icon: <svg width="22" height="16" viewBox="0 0 24 17" fill="currentColor"><path d="M23.495 2.205a3.02 3.02 0 00-2.126-2.138C19.505 0 12 0 12 0s-7.505 0-9.369.067A3.02 3.02 0 00.505 2.205 31.247 31.247 0 000 8.352a31.247 31.247 0 00.505 6.147 3.02 3.02 0 002.126 2.138C4.495 17 12 17 12 17s7.505 0 9.369-.363a3.02 3.02 0 002.126-2.138A31.247 31.247 0 0024 8.352a31.247 31.247 0 00-.505-6.147zM9.545 11.851V4.853l6.272 3.499-6.272 3.499z"/></svg> },
            { href: "#", label: "TikTok", color: "#e0e0e0", hover: "#ffffff",
              icon: <svg width="16" height="20" viewBox="0 0 24 27" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/></svg> },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-3 py-3.5 transition-colors hover:bg-[#1a1006]"
              style={{ color: s.color }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = s.hover; }}
              onMouseLeave={(e)  => { (e.currentTarget as HTMLElement).style.color = s.color; }}>
              {s.icon}
              <span className="font-['Press_Start_2P'] text-[10px]">{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Tryby gry */}
      <div className="w-full max-w-[1800px] mt-6">
        <h2 className="font-['Press_Start_2P'] text-[11px] text-[#8a6030] tracking-widest uppercase mb-4 text-center">
          {t.featTitle}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {MODES.map((mode) => (
            <div key={mode.id} className="relative overflow-hidden border-4 bg-[#0a0705]"
              style={{ borderColor: mode.border, boxShadow: `0 0 0 4px #16130f, 0 8px 32px ${mode.glow}` }}>
              <div className="h-1.5 w-full" style={{ backgroundColor: mode.color }} />
              <div className="p-6">
                <div className="mb-3 font-['Press_Start_2P'] text-[22px] leading-none" style={{ color: mode.color, textShadow: `2px 2px 0 ${mode.border}` }}>
                  {mode.icon}
                </div>
                <h3 className="font-['Press_Start_2P'] text-[12px] leading-snug mb-3" style={{ color: mode.color }}>
                  {mode.name}
                </h3>
                <p className="font-['Press_Start_2P'] text-[8px] leading-relaxed text-[#7a6040] mb-5">
                  {mode.desc[lang]}
                </p>
                <a href="#"
                  className="inline-block font-['Press_Start_2P'] text-[9px] px-4 py-2.5 border-2 transition-colors"
                  style={{ borderColor: mode.border, color: mode.color }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = mode.border; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}>
                  {t.modeJoin} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
