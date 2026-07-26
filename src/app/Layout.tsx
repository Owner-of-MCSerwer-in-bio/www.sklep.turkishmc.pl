import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { useLang } from "./LangContext";
import { T, LANGS, SERVER_IP, DISCORD_SVG, NavBadge } from "./shared";

export default function Layout() {
  const { lang, setLang } = useLang();
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const t = T[lang];

  function copyIP() {
    navigator.clipboard.writeText(SERVER_IP).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const active = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `flex items-center px-6 py-4 font-['Press_Start_2P'] text-[11px] tracking-wider transition-colors whitespace-nowrap ${
      active(path)
        ? "bg-[#1e1408] text-[#f4c75d]"
        : "text-[#c9a04a] hover:bg-[#1a1006] hover:text-[#f4c75d]"
    }`;

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#5b3900] px-4 pt-4 pb-12 sm:px-8 sm:pt-6">

      {/* ── Nawigacja ─────────────────────────────────────────────── */}
      <nav className="w-full max-w-[1800px] mb-3">
        <div className="flex items-stretch overflow-hidden border-4 border-[#5c3b1e] bg-[#0d0a06] shadow-[0_0_0_4px_#16130f]">

          {/* Discord — lewy skraj */}
          <a href="https://discord.gg/turkishmc" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#5865F2] px-5 py-4 font-['Press_Start_2P'] text-[11px] text-white transition-colors hover:bg-[#4752c4]">
            {DISCORD_SVG}
            {t.discordBtn}
          </a>

          <div className="w-px bg-[#2e1d0a]" />

          {/* Centrum skupione */}
          <div className="flex flex-1 items-stretch justify-center divide-x divide-[#2e1d0a]">
            <button onClick={() => navigate("/Sklep")}    className={navLinkClass("/Sklep")}>{t.shop}</button>
            <button onClick={() => navigate("/FAQ")}      className={navLinkClass("/FAQ")}>{t.faq}</button>

            <div className="flex items-center border-x border-[#3a2510]">
              <NavBadge onClick={() => navigate("/")} />
            </div>

            <button onClick={() => navigate("/Regulamin")} className={navLinkClass("/Regulamin")}>{t.rules}</button>
            <button onClick={() => navigate("/Pomoc")}     className={navLinkClass("/Pomoc")}>{t.help}</button>
          </div>

          <div className="w-px bg-[#2e1d0a]" />

          {/* Języki — prawy skraj */}
          <div className="flex items-stretch divide-x divide-[#2e1d0a]">
            {LANGS.map((l) => (
              <button key={l.code} onClick={() => setLang(l.code)}
                className={`flex flex-col items-center justify-center gap-0.5 px-4 py-2 transition-colors ${
                  lang === l.code ? "bg-[#1e1408] text-[#f4c75d]" : "text-[#8a6a30] hover:bg-[#1a1006] hover:text-[#c9a04a]"
                }`}
                title={l.label}>
                <span className="text-[18px] leading-none">{l.flag}</span>
                <span className="font-['Press_Start_2P'] text-[7px]">{l.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Zawartość strony ──────────────────────────────────────── */}
      <Outlet context={{ copyIP, copied, t, lang }} />

      {/* ── Stopka ───────────────────────────────────────────────── */}
      <footer className="w-full max-w-[1800px] mt-10 border-4 border-[#5c3b1e] bg-[#080604] shadow-[0_0_0_4px_#16130f] overflow-hidden">
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#c9943a] to-transparent" />

        <div className="flex flex-col items-center py-8 gap-2 border-b border-[#1e1408]">
          <span className="font-['Press_Start_2P'] text-[20px] tracking-widest text-[#ffe4a2] [text-shadow:2px_2px_0_#9d5518,6px_6px_12px_rgba(0,0,0,0.8)]">
            TurkishMC<span className="text-[#d52e1f]">.pl</span>
          </span>
          <div className="h-px w-64 bg-gradient-to-r from-transparent via-[#c9943a] to-transparent mt-1" />
          <span className="font-['Press_Start_2P'] text-[8px] text-[#7a5a25] tracking-widest mt-1">{t.footerSub}</span>
        </div>

        <div className="grid grid-cols-3 gap-0 divide-x divide-[#1e1408]">
          <div className="px-8 py-7 flex flex-col gap-1">
            <h4 className="font-['Press_Start_2P'] text-[9px] text-[#c9943a] tracking-widest mb-4 flex items-center gap-2">
              <span className="text-[12px]">📖</span> {t.footerInfo}
            </h4>
            {[
              { icon: "📜", label: t.footerRules, path: "/Regulamin" },
              { icon: "❓", label: t.footerFaq,   path: "/FAQ" },
              { icon: "📄", label: t.footerPolicy, path: "/Regulamin" },
            ].map((item) => (
              <button key={item.label} onClick={() => navigate(item.path)}
                className="flex items-center gap-2.5 py-1.5 text-left font-['Press_Start_2P'] text-[8px] text-[#6a4e1e] hover:text-[#c9943a] transition-colors">
                <span>{item.icon}</span>{item.label}
              </button>
            ))}
          </div>

          <div className="px-8 py-7 flex flex-col gap-1">
            <h4 className="font-['Press_Start_2P'] text-[9px] text-[#c9943a] tracking-widest mb-4 flex items-center gap-2">
              <span className="text-[12px]">🛒</span> {t.footerServer}
            </h4>
            {[
              { icon: "🛒", label: t.footerShop,   path: "/Sklep" },
              { icon: "🛠", label: t.footerHelp,   path: "/Pomoc" },
              { icon: "📊", label: t.footerStatus, path: "/" },
              { icon: "🖥", label: t.footerVote,   path: "/" },
            ].map((item) => (
              <button key={item.label} onClick={() => navigate(item.path)}
                className="flex items-center gap-2.5 py-1.5 text-left font-['Press_Start_2P'] text-[8px] text-[#6a4e1e] hover:text-[#c9943a] transition-colors">
                <span>{item.icon}</span>{item.label}
              </button>
            ))}
          </div>

          <div className="px-8 py-7 flex flex-col gap-1">
            <h4 className="font-['Press_Start_2P'] text-[9px] text-[#c9943a] tracking-widest mb-4 flex items-center gap-2">
              <span className="text-[12px]">🌐</span> {t.footerSocial}
            </h4>
            {[
              { icon: "💬", label: t.footerDiscord, href: "https://discord.gg/turkishmc", color: "#5865F2" },
              { icon: "▶",  label: t.footerYt,      href: "#",                            color: "#FF0000" },
              { icon: "🎵", label: t.footerTt,      href: "#",                            color: "#e0e0e0" },
              { icon: "📸", label: t.footerIg,      href: "#",                            color: "#3a2e18" },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 py-1.5 font-['Press_Start_2P'] text-[8px] transition-colors hover:brightness-150"
                style={{ color: item.color }}>
                <span>{item.icon}</span>{item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#1e1408]">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9943a] to-transparent" />
          <div className="flex flex-col items-center gap-3 py-6 px-8">
            <div className="flex items-center gap-3">
              <span className="font-['Press_Start_2P'] text-[8px] text-[#4a3414]">{t.footerIpLabel}:</span>
              <span className="font-['Press_Start_2P'] text-[10px] text-[#c9943a] [text-shadow:1px_1px_0_#3c2111] tracking-widest">{SERVER_IP}</span>
            </div>
            <p className="font-['Press_Start_2P'] text-[7px] text-[#3a2a10] text-center leading-loose max-w-2xl">
              {t.footerLegal}
            </p>
            <span className="font-['Press_Start_2P'] text-[8px] text-[#4a3414]">© 2026 TurkishMC.pl</span>
            <div className="flex items-center gap-4">
              <span className="font-['Press_Start_2P'] text-[7px] text-[#3a2a10]">v2.1.0</span>
              <span className="text-[#2a1e08] font-['Press_Start_2P'] text-[7px]">|</span>
              <span className="font-['Press_Start_2P'] text-[7px] text-[#3a2a10]">Aktualizacja: 25.07.2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
