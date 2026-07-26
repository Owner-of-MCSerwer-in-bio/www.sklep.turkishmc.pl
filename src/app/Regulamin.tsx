import { useRef, useState } from "react";
import { useLang } from "./LangContext";

type RegType = "sklep" | "serwer";

interface Section {
  id: string;
  title: string;
  content: string[];
}

const SKLEP_SECTIONS: Section[] = [
  {
    id: "s1", title: "§1 Definicje",
    content: [
      "1. **Serwis** — sklep internetowy dostępny pod adresem sklep.TurkishMC.pl, prowadzony przez administrację serwera TurkishMC.pl.",
      "2. **Klient** — pełnoletnia osoba fizyczna lub działająca za zgodą opiekuna prawnego, która dokonuje zakupu w Serwisie.",
      "3. **Produkt** — ranga, klucz skrzyni, tokeny lub inne dobro wirtualne dostępne w Serwisie.",
      "4. **Zamówienie** — dyspozycja zakupu złożona przez Klienta za pomocą formularza zamówienia.",
      "5. **Regulamin** — niniejszy dokument określający zasady korzystania ze Serwisu.",
    ],
  },
  {
    id: "s2", title: "§2 Postanowienia ogólne",
    content: [
      "1. Serwis prowadzony jest przez administrację serwera TurkishMC.pl.",
      "2. Produkty oferowane w Serwisie mają charakter wyłącznie cyfrowy i są powiązane z kontem gracza na serwerze Minecraft TurkishMC.pl.",
      "3. Korzystanie z Serwisu jest dobrowolne i oznacza akceptację niniejszego Regulaminu.",
      "4. Administracja zastrzega sobie prawo do zmiany oferty, cen oraz warunków Regulaminu w dowolnym momencie.",
      "5. Wszelkie spory rozpatrywane są przez administrację serwera w dobrej wierze.",
    ],
  },
  {
    id: "s3", title: "§3 Zakupy",
    content: [
      "1. Zakup produktów odbywa się poprzez wybór pozycji z oferty, podanie nazwy gracza (nick Minecraft) oraz finalizację płatności.",
      "2. Produkt przypisywany jest do podanego nicka — upewnij się, że nick jest poprawny przed zakupem.",
      "3. Po pomyślnym zakończeniu płatności produkt zostaje aktywowany automatycznie w ciągu 5 minut.",
      "4. Administracja nie ponosi odpowiedzialności za błędnie podany nick gracza.",
      "5. Ceny podane w Serwisie są cenami brutto i wyrażone w złotych polskich (PLN).",
    ],
  },
  {
    id: "s4", title: "§4 Metody płatności",
    content: [
      "1. Płatności obsługiwane są przez zewnętrzne bramki płatnicze (m.in. PayPal, BLIK, przelew online).",
      "2. Administracja nie przechowuje danych kart płatniczych ani danych bankowych Klientów.",
      "3. Transakcja uznawana jest za zakończoną z chwilą potwierdzenia płatności przez operatora.",
      "4. W przypadku nieudanej transakcji środki wracają automatycznie na konto Klienta zgodnie z zasadami operatora płatności.",
    ],
  },
  {
    id: "s5", title: "§5 Reklamacje",
    content: [
      "1. Reklamacje dotyczące zakupionych produktów należy składać poprzez kanał #pomoc-sklep na serwerze Discord TurkishMC.pl.",
      "2. Reklamacja powinna zawierać: nick gracza, datę zakupu, opis problemu oraz potwierdzenie transakcji.",
      "3. Administracja rozpatrzy reklamację w ciągu 7 dni roboczych.",
      "4. W przypadku uznanej reklamacji administracja dostarczy produkt ponownie lub zaproponuje inne rozwiązanie.",
    ],
  },
  {
    id: "s6", title: "§6 Zwroty",
    content: [
      "1. Ze względu na cyfrowy charakter produktów, prawo do odstąpienia od umowy na podstawie art. 38 pkt 13 ustawy o prawach konsumenta nie przysługuje po aktywacji produktu.",
      "2. Zwrot może być rozpatrzony indywidualnie wyłącznie w przypadku awarii technicznej uniemożliwiającej korzystanie z zakupionego produktu.",
      "3. Wnioski o zwrot należy składać na Discordzie w ciągu 48 godzin od zakupu.",
      "4. Decyzja administracji w sprawie zwrotu jest ostateczna.",
    ],
  },
  {
    id: "s7", title: "§7 Odpowiedzialność",
    content: [
      "1. Administracja nie ponosi odpowiedzialności za przerwy w dostępie do serwera spowodowane awarią, aktualizacją lub działaniem siły wyższej.",
      "2. Produkty wirtualne mogą zostać utracone w przypadku permanentnego zbanowania konta gracza za naruszenie Regulaminu Serwera.",
      "3. Administracja zastrzega sobie prawo do modyfikacji lub wycofania produktów z oferty bez prawa do odszkodowania.",
    ],
  },
  {
    id: "s8", title: "§8 Dane osobowe",
    content: [
      "1. Administratorem danych osobowych Klientów jest administracja TurkishMC.pl.",
      "2. Dane podane podczas zakupu (nick, adres e-mail) przetwarzane są wyłącznie w celu realizacji zamówienia.",
      "3. Dane nie są udostępniane podmiotom trzecim poza operatorami płatności.",
      "4. Klient ma prawo dostępu do swoich danych, ich poprawiania oraz usunięcia — żądania należy kierować na Discordzie.",
    ],
  },
  {
    id: "s9", title: "§9 Postanowienia końcowe",
    content: [
      "1. Regulamin wchodzi w życie z dniem 25.07.2026.",
      "2. Administracja zastrzega sobie prawo do zmiany Regulaminu — o zmianach Klienci zostaną poinformowani z 7-dniowym wyprzedzeniem.",
      "3. W sprawach nieuregulowanych niniejszym Regulaminem stosuje się przepisy prawa polskiego.",
      "4. Wszelkie pytania prosimy kierować na serwer Discord TurkishMC.pl.",
    ],
  },
];

const SERWER_SECTIONS: Section[] = [
  {
    id: "r1", title: "§1 Definicje",
    content: [
      "1. **Serwer** — serwer Minecraft dostępny pod adresem TurkishMC.pl.",
      "2. **Gracz** — każda osoba posiadająca dostęp do serwera.",
      "3. **Administracja** — osoby zarządzające serwerem (właściciel, administratorzy, moderatorzy).",
      "4. **Kara** — sankcja nałożona na gracza za naruszenie Regulaminu (ostrzeżenie, wyciszenie, ban).",
      "5. **Ban** — czasowe lub permanentne wykluczenie gracza z serwera.",
    ],
  },
  {
    id: "r2", title: "§2 Postanowienia ogólne",
    content: [
      "1. Wchodząc na serwer, Gracz automatycznie akceptuje niniejszy Regulamin.",
      "2. Nieznajomość Regulaminu nie zwalnia z odpowiedzialności za jego naruszenie.",
      "3. Administracja ma prawo do interpretacji Regulaminu oraz podejmowania decyzji w sprawach nieujętych wprost.",
      "4. Regulamin może być aktualizowany — aktualna wersja jest zawsze dostępna na stronie sklep.TurkishMC.pl/Regulamin.",
    ],
  },
  {
    id: "r3", title: "§3 Zasady korzystania z serwera",
    content: [
      "1. Zabrania się używania wszelkich modów i programów dających nieuczciwą przewagę nad innymi graczami (cheat, hack, exploit).",
      "2. Zabrania się celowego powodowania lagów serwera (farmy duplikujące, pętle komendy itp.).",
      "3. Zabrania się griefingu poza dozwolonymi strefami PvP.",
      "4. Zabrania się używania błędów gry (bugów) do uzyskania korzyści — należy je zgłaszać administracji.",
      "5. Zabrania się handlu przedmiotami/kontem za realne pieniądze poza oficjalnym sklepem.",
    ],
  },
  {
    id: "r4", title: "§4 Konto gracza",
    content: [
      "1. Gracz odpowiada za wszelkie działania podejmowane na swoim koncie.",
      "2. Udostępnianie konta osobom trzecim jest zabronione i skutkuje banem na oba konta.",
      "3. Nick gracza nie może zawierać słów wulgarnych, obraźliwych ani imitować nicków członków administracji.",
      "4. Administracja zastrzega sobie prawo do zmiany nicku naruszającego zasady.",
    ],
  },
  {
    id: "r5", title: "§5 Rozgrywka",
    content: [
      "1. Serwer promuje fair play — wszelkie próby oszustwa będą karane.",
      "2. PvP jest dozwolone wyłącznie w wyznaczonych strefach lub za obopólną zgodą graczy.",
      "3. Kradzież i niszczenie cudzego mienia poza strefami PvP jest zakazana.",
      "4. Zabrania się zakładania baz w pobliżu spawnu (strefa ochronna 500 bloków).",
    ],
  },
  {
    id: "r6", title: "§6 Chat i komunikacja",
    content: [
      "1. Zabrania się używania wulgaryzmów, obraźliwych zwrotów oraz treści NSFW.",
      "2. Zabrania się spamowania, floodowania i nadużywania caps locka.",
      "3. Zabrania się reklamowania innych serwerów Minecraft.",
      "4. Zabrania się nawoływania do dyskryminacji ze względu na rasę, płeć, narodowość czy orientację.",
      "5. Rozmowy na czacie powinny odbywać się w języku polskim lub angielskim.",
    ],
  },
  {
    id: "r7", title: "§7 Kary",
    content: [
      "1. **Ostrzeżenie (WARN)** — udzielane za drobne naruszenia regulaminu.",
      "2. **Wyciszenie (MUTE)** — blokada czatu od 1 godziny do 30 dni za naruszenia komunikacyjne.",
      "3. **Ban czasowy** — wykluczenie z serwera od 1 dnia do 30 dni za poważniejsze naruszenia.",
      "4. **Ban permanentny** — trwałe wykluczenie za cheaterstwo, wielokrotne naruszenia lub szczególnie poważne przewinienia.",
      "5. Kary są kumulatywne — powtarzające się naruszenia skutkują surowszymi sankcjami.",
    ],
  },
  {
    id: "r8", title: "§8 Administracja",
    content: [
      "1. Administracja ma prawo do nakładania kar bez wcześniejszego ostrzeżenia w przypadku rażących naruszeń.",
      "2. Decyzje administracji są ostateczne i należy je respektować.",
      "3. Członkowie administracji są zobowiązani do zachowania bezstronności i przestrzegania własnego regulaminu.",
      "4. Podszywanie się pod administrację jest zakazane i skutkuje permanentnym banem.",
    ],
  },
  {
    id: "r9", title: "§9 Odwołania",
    content: [
      "1. Gracz ma prawo odwołać się od nałożonej kary w ciągu 14 dni od jej nałożenia.",
      "2. Odwołania należy składać przez serwer Discord w kanale #odwołania.",
      "3. Odwołanie powinno zawierać: nick gracza, rodzaj kary, datę, uzasadnienie odwołania.",
      "4. Administracja rozpatrzy odwołanie w ciągu 7 dni roboczych.",
      "5. Decyzja w sprawie odwołania jest ostateczna.",
    ],
  },
  {
    id: "r10", title: "§10 Postanowienia końcowe",
    content: [
      "1. Regulamin wchodzi w życie z dniem 25.07.2026.",
      "2. O wszelkich zmianach gracze zostaną poinformowani przez Discord oraz stronę serwera.",
      "3. W sprawach nieuregulowanych stosuje się przepisy prawa polskiego.",
      "4. Kontakt z administracją: serwer Discord TurkishMC.pl.",
    ],
  },
];

function SectionBadge({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="flex-1 h-px bg-gradient-to-r from-[#c9943a] to-transparent" />
      <span className="font-['Press_Start_2P'] text-[10px] text-[#c9943a] tracking-wide whitespace-nowrap px-2">
        {title}
      </span>
      <div className="flex-1 h-px bg-gradient-to-l from-[#c9943a] to-transparent" />
    </div>
  );
}

function renderLine(line: string) {
  const parts = line.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <span key={i} className="text-[#c9943a]">{part}</span>
      : <span key={i}>{part}</span>
  );
}

export default function Regulamin() {
  const { lang } = useLang();
  const [regType, setRegType] = useState<RegType>("sklep");
  const sections = regType === "sklep" ? SKLEP_SECTIONS : SERWER_SECTIONS;
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  function scrollTo(id: string) {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const labels = {
    sklep: { pl: "Regulamin Sklepu",   en: "Shop Rules",   ua: "Правила Магазину" },
    serwer: { pl: "Regulamin Serwera", en: "Server Rules", ua: "Правила Сервера" },
  };
  const tocLabel = { pl: "Spis treści", en: "Table of contents", ua: "Зміст" };
  const updLabel  = { pl: "Ostatnia aktualizacja:", en: "Last updated:", ua: "Оновлено:" };

  return (
    <div className="w-full max-w-[1800px] mt-4 flex gap-5 items-start">

      {/* ── Lewy pasek boczny ─────────────────────────────────────── */}
      <aside className="w-72 flex-shrink-0 flex flex-col gap-3 sticky top-6">

        {/* Wybór regulaminu */}
        <div className="border-4 border-[#5c3b1e] bg-[#0a0705] shadow-[0_0_0_4px_#16130f] overflow-hidden">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#c9943a] to-transparent" />
          {(["sklep", "serwer"] as RegType[]).map((key) => (
            <button key={key} onClick={() => setRegType(key)}
              className={`w-full flex items-center gap-3 px-5 py-4 font-['Press_Start_2P'] text-[9px] tracking-wide transition-colors text-left border-b border-[#1e1408] last:border-b-0 ${
                regType === key
                  ? "bg-[#1e1408] text-[#f4c75d] border-l-2 border-l-[#c9943a]"
                  : "text-[#6a4e1e] hover:bg-[#100c05] hover:text-[#c9943a]"
              }`}>
              <span>{key === "sklep" ? "🛒" : "⚔"}</span>
              {labels[key][lang]}
            </button>
          ))}
        </div>

        {/* Spis treści */}
        <div className="border-4 border-[#5c3b1e] bg-[#0a0705] shadow-[0_0_0_4px_#16130f] overflow-hidden">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#c9943a] to-transparent" />
          <div className="px-5 py-3 border-b border-[#1e1408]">
            <span className="font-['Press_Start_2P'] text-[8px] text-[#c9943a] tracking-widest">{tocLabel[lang]}</span>
          </div>
          <div className="flex flex-col">
            {sections.map((sec) => (
              <button key={sec.id} onClick={() => scrollTo(sec.id)}
                className="flex items-center gap-2 px-5 py-2.5 text-left font-['Press_Start_2P'] text-[7px] text-[#5a4020] hover:text-[#c9943a] hover:bg-[#100c05] transition-colors border-b border-[#0e0b06] last:border-b-0">
                <span className="text-[#3a2a10]">▸</span>
                {sec.title}
              </button>
            ))}
          </div>
        </div>

        {/* Data aktualizacji */}
        <div className="border-4 border-[#2e1d0a] bg-[#0a0705] px-5 py-3">
          <p className="font-['Press_Start_2P'] text-[7px] text-[#3a2a10] leading-loose">
            {updLabel[lang]}<br />
            <span className="text-[#5a4020]">25.07.2026</span>
          </p>
        </div>
      </aside>

      {/* ── Główna treść ─────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col gap-4 min-w-0">

        {/* Nagłówek strony */}
        <div className="border-4 border-[#5c3b1e] bg-[#0a0705] shadow-[0_0_0_4px_#16130f] overflow-hidden">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#c9943a] to-transparent" />
          <div className="px-10 py-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-4 w-full max-w-xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9943a] to-[#c9943a]" />
              <span className="font-['Press_Start_2P'] text-[7px] text-[#7a5520]">◆</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#c9943a] to-[#c9943a]" />
            </div>
            <h1 className="font-['Press_Start_2P'] text-[16px] text-[#ffe4a2] [text-shadow:2px_2px_0_#9d5518] text-center tracking-wide">
              {labels[regType][lang]}
            </h1>
            <div className="flex items-center gap-4 w-full max-w-xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9943a] to-[#c9943a]" />
              <span className="font-['Press_Start_2P'] text-[7px] text-[#7a5520]">◆</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#c9943a] to-[#c9943a]" />
            </div>
            <p className="font-['Press_Start_2P'] text-[7px] text-[#4a3414] mt-1">TurkishMC.pl · 2026</p>
          </div>
        </div>

        {/* Sekcje */}
        {sections.map((sec) => (
          <div
            key={sec.id}
            ref={(el) => { sectionRefs.current[sec.id] = el; }}
            className="border-4 border-[#2e1d0a] bg-[#0a0705] shadow-[0_0_0_4px_#16130f] overflow-hidden scroll-mt-6"
          >
            {/* Górna ramka sekcji */}
            <div className="px-8 pt-7 pb-2">
              <SectionBadge title={sec.title} />
            </div>

            {/* Treść */}
            <div className="px-10 pb-7 flex flex-col gap-2.5">
              {sec.content.map((line, i) => (
                <p key={i} className="font-['Press_Start_2P'] text-[8px] text-[#7a6035] leading-loose">
                  {renderLine(line)}
                </p>
              ))}
            </div>

            {/* Dolna ramka */}
            <div className="flex items-center gap-3 px-8 pb-5">
              <div className="flex-1 h-px bg-gradient-to-r from-[#1e1408] to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
