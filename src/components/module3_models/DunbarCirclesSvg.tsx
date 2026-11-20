import React, { useState } from 'react';
import { Users, MessageSquare, Smartphone } from 'lucide-react';

export const DunbarCirclesSvg: React.FC = () => {
  const [selectedCircle, setSelectedCircle] = useState<number>(150);

  const circles = [
    {
      size: 5,
      name: 'Krąg Wsparcia (Support Clique)',
      radius: 45,
      color: '#E11D48',
      desc: 'Najbliżsi powiernicy: partner, rodzice, najbliższy przyjaciel. Osoby, do których zwrócisz się w skrajnym kryzysie emocjonalnym lub finansowym w środku nocy. Utrzymanie tego kręgu pochłania ok. 40% twojego całego czasu społecznego.'
    },
    {
      size: 15,
      name: 'Grupa Sympatyków (Sympathy Group)',
      radius: 80,
      color: '#F59E0B',
      desc: 'Bliscy przyjaciele i zaufani krewni. Ich śmierć lub wyprowadzka wywołuje głęboki, długotrwały żal. Z nimi regularnie dzielisz posiłki i wolny czas.'
    },
    {
      size: 50,
      name: 'Klan / Obóz (Band / Camp)',
      radius: 125,
      color: '#10B981',
      desc: 'Tradycyjna wielkość obozowiska łowiecko-zbierackiego. Osoby, z którymi utrzymujesz regularny kontakt towarzyski i zapraszasz na większe uroczystości.'
    },
    {
      size: 150,
      name: 'Liczba Dunbara (Neurobiologiczny Limit)',
      radius: 175,
      color: '#38BDF8',
      desc: 'Neurobiologiczna granica stabilnych relacji osobistych. Maksymalna liczba ludzi, o których wiesz, kim są, jak są powiązani z innymi w grupie i jaką mają reputację. Spotkanie w barze nie wywołuje skrępowania.'
    }
  ];

  const currentCircle = circles.find(c => c.size === selectedCircle) || circles[3];

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      
      {/* Title */}
      <div className="border-b border-surface-border pb-3">
        <h3 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
          <Users className="w-5 h-5 text-modern-cyan" />
          <span>Interaktywne Kręgi Dunbara (5 / 15 / 50 / 150 osób) i Architektura Plotki</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Robin Dunbar: jak rozmiar kory nowej mózgu determinuje architekturę więzi i dlaczego media społecznościowe przesterowują ten mechanizm.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* SVG Concentric Circles Canvas (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-obsidian-300 border border-surface-border">
          <svg viewBox="0 0 420 420" className="w-full max-w-[400px] h-auto select-none font-sans">
            
            {/* Center: Self */}
            <circle cx="210" cy="210" r="10" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
            <text x="210" y="214" fill="#000000" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">
              JA
            </text>

            {/* Circles from 150 down to 5 */}
            {circles.slice().reverse().map(c => {
              const isSelected = selectedCircle === c.size;

              return (
                <g
                  key={c.size}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => setSelectedCircle(c.size)}
                >
                  <circle
                    cx="210"
                    cy="210"
                    r={c.radius}
                    fill={c.color}
                    fillOpacity={isSelected ? 0.25 : 0.08}
                    stroke={c.color}
                    strokeWidth={isSelected ? '2.5' : '1.2'}
                    strokeDasharray={isSelected ? 'none' : '4,3'}
                    className="hover:fill-opacity-20 transition-all"
                  />
                  {/* Label on top arc */}
                  <text
                    x="210"
                    y={210 - c.radius + 14}
                    fill={c.color}
                    fontSize="10"
                    fontFamily="JetBrains Mono"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    Limit: {c.size} osób
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick Clickable Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
            {circles.map(c => (
              <button
                key={c.size}
                onClick={() => setSelectedCircle(c.size)}
                className={`text-xs font-mono px-3 py-1 rounded border transition-colors ${
                  selectedCircle === c.size
                    ? 'font-bold'
                    : 'bg-surface text-slate-400 border-surface-border hover:border-slate-500'
                }`}
                style={{
                  backgroundColor: selectedCircle === c.size ? `${c.color}25` : undefined,
                  color: selectedCircle === c.size ? c.color : undefined,
                  borderColor: selectedCircle === c.size ? c.color : undefined
                }}
              >
                Krąg {c.size}
              </button>
            ))}
          </div>
        </div>

        {/* Deep Descriptive Explanations (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3">
            <div className="border-b border-surface-border pb-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Wybrana warstwa społeczna:
              </span>
              <h4 className="font-serif font-bold text-lg" style={{ color: currentCircle.color }}>
                {currentCircle.name} ({currentCircle.size} osób)
              </h4>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {currentCircle.desc}
            </p>

            {/* Gossip as Social Grooming Box */}
            <div className="p-3 rounded-lg bg-surface border border-surface-border flex flex-col gap-1.5 text-xs">
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold font-mono text-[11px]">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>PLOTKA JAKO EWOLUCYJNE „ISKANIE JĘZYKOWE”</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Szympansy spędzają do 20% dnia na wzajemnym iskaniu futra (grooming), co fizycznie ogranicza grupę do ok. 50 osobników. Ludzki język wyewoluował jako narzędzie skalowania: rozmawiając przy ognisku, możesz „iskać” słownie 3–4 osoby jednocześnie, wymieniając informacje o tym, kto jest godny zaufania.
              </p>
            </div>

            {/* Social Media Clash */}
            <div className="p-3 rounded-lg bg-surface border border-rose-500/30 flex flex-col gap-1.5 text-xs">
              <div className="flex items-center gap-1.5 text-rose-300 font-semibold font-mono text-[11px]">
                <Smartphone className="w-3.5 h-3.5 text-rose-400" />
                <span>ZDERZENIE Z MEDIAMI SPOŁECZNOŚCIOWYMI</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Gdy platformy cyfrowe karmią nas informacjami o setkach lub tysiącach obcych osób, mózg nieświadomie próbuje przypisać ich do warstw Dunbara, wywołując chroniczne zmęczenie współczuciem, paranoję społeczną i spadek głębokości więzi w kręgach 5 i 15.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
