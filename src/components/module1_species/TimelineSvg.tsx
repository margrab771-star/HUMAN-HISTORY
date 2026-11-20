import React, { useState } from 'react';
import { CloudRain, Brain, Flame, Info } from 'lucide-react';
import { SPECIES_DATA } from '../../data/speciesData';

interface TimelineSvgProps {
  selectedSpeciesId: string | null;
  onSelectSpecies: (speciesId: string) => void;
}

type TimelineLayer = 'milestones' | 'brainSize' | 'climate';

export const TimelineSvg: React.FC<TimelineSvgProps> = ({
  selectedSpeciesId,
  onSelectSpecies
}) => {
  const [activeLayer, setActiveLayer] = useState<TimelineLayer>('milestones');
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  // Timeline spans 4.0 Ma (4000 ka) to 0 ka.
  // We use a non-linear scale for visual clarity because late Pleistocene and Holocene contain dense events.
  // Transform ka to X coordinate (range 0 to 1000 px)
  const timeToX = (ka: number): number => {
    // Non-linear piecewise scale:
    // 4000 ka -> 50px
    // 2000 ka -> 280px
    // 1000 ka -> 450px
    // 300 ka  -> 650px
    // 50 ka   -> 820px
    // 0 ka    -> 950px
    if (ka >= 2000) {
      return 50 + ((4000 - ka) / 2000) * 230; // 50 to 280
    } else if (ka >= 1000) {
      return 280 + ((2000 - ka) / 1000) * 170; // 280 to 450
    } else if (ka >= 300) {
      return 450 + ((1000 - ka) / 700) * 200; // 450 to 650
    } else if (ka >= 50) {
      return 650 + ((300 - ka) / 250) * 170; // 650 to 820
    } else {
      return 820 + ((50 - ka) / 50) * 130; // 820 to 950
    }
  };

  const milestones = [
    { id: 'm1', ka: 1800, title: 'Wyjście z Afryki (Dmanisi)', desc: 'Homo erectus w Gruzji; opieka nad bezzębnym starcem (~1,77 Ma)', x: timeToX(1800) },
    { id: 'm2', ka: 1000, title: 'Opanowanie Ognia', desc: 'Wonderwerk Cave & Koobi Fora; początek hipotezy gotowania Wranghama', x: timeToX(1000) },
    { id: 'm3', ka: 300, title: 'Wczesny Homo sapiens & naledi', desc: 'Jebel Irhoud (Maroko, ~315 ka) oraz populacje Rising Star', x: timeToX(300) },
    { id: 'm4', ka: 90, title: 'Hybrydyzacja „Denny”', desc: 'Jaskinia Denisowa na Ałtaju: bezpośrednia córka Neandertalki i Denisowiana', x: timeToX(90) },
    { id: 'm5', ka: 67, title: 'Malarstwo Sulawesi (Indonezja)', desc: 'Najstarsza figuratywna sztuka naskalna świata (~67 tys. lat)', x: timeToX(67) },
    { id: 'm6', ka: 18, title: 'Sztuka Lascaux & Chauvet', desc: 'Mistrzostwo sztuki paleolitycznej Cro-Magnon w Europie (~36–18 ka)', x: timeToX(18) },
    { id: 'm7', ka: 10, title: 'Rewolucja Neolityczna', desc: 'Żyzny Półksiężyc: osiadłość, spichlerze, własność, załamanie alloparentingu', x: timeToX(10) },
    { id: 'm8', ka: 0.2, title: 'Rewolucja Przemysłowa & Cyfrowa', desc: 'Fabryki, kapitalizm platformowy, sztuczna inteligencja i rynki globalne', x: timeToX(0.2) }
  ];

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl overflow-hidden flex flex-col gap-4">
      {/* Header and Layer Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-surface-border pb-3">
        <div>
          <h3 className="font-serif font-bold text-lg text-slate-100 flex items-center gap-2">
            <span>Skalowana Oś Czasu Ewolucji Hominidów (4 mln lat temu → Dziś)</span>
          </h3>
          <p className="text-xs text-slate-400">
            Pliocen • Plejstocen (wczesny, środkowy, późny) • Holocen • Kliknij punkt lub gatunek, aby przefiltrować kompendium.
          </p>
        </div>

        {/* Layer Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-obsidian-200 rounded-lg border border-surface-border text-xs font-mono">
          <button
            onClick={() => setActiveLayer('milestones')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
              activeLayer === 'milestones' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Kamienie Milowe</span>
          </button>
          <button
            onClick={() => setActiveLayer('brainSize')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
              activeLayer === 'brainSize' ? 'bg-bioneuro-emerald/20 text-bioneuro-mint font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Brain className="w-3.5 h-3.5 text-bioneuro-emerald" />
            <span>Objętość Mózgu</span>
          </button>
          <button
            onClick={() => setActiveLayer('climate')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
              activeLayer === 'climate' ? 'bg-modern-cyan/20 text-modern-cyan font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <CloudRain className="w-3.5 h-3.5 text-modern-cyan" />
            <span>Klimat & Zlodowacenia</span>
          </button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 1000 360"
          className="w-full min-w-[760px] h-auto select-none font-sans"
        >
          <defs>
            <linearGradient id="gradPliocene" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#78350F" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#92400E" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradPleistocene" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E293B" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="gradHolocene" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#065F46" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="brainCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E5A952" />
              <stop offset="40%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Epoch Backdrops */}
          {/* Pliocene: 4000ka to 2580ka */}
          <rect x="50" y="30" width={timeToX(2580) - 50} height="260" fill="url(#gradPliocene)" rx="4" />
          <text x="60" y="48" fill="#FBBF24" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">PLIOCEN (do 2,58 mln lat)</text>

          {/* Pleistocene: 2580ka to 11.7ka */}
          <rect x={timeToX(2580)} y="30" width={timeToX(11.7) - timeToX(2580)} height="260" fill="url(#gradPleistocene)" rx="4" />
          <text x={timeToX(2580) + 10} y="48" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">PLEJSTOCEN (2,58 mln – 11,7 tys. lat temu)</text>

          {/* Holocene: 11.7ka to 0ka */}
          <rect x={timeToX(11.7)} y="30" width={950 - timeToX(11.7)} height="260" fill="url(#gradHolocene)" rx="4" />
          <text x={timeToX(11.7) + 4} y="48" fill="#34D399" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">HOLOCEN</text>

          {/* Main Horizontal Timeline Axis */}
          <line x1="50" y1="230" x2="950" y2="230" stroke="#334155" strokeWidth="2.5" />

          {/* Key Time Tick Marks */}
          {[
            { ka: 4000, label: '4,0 mln' },
            { ka: 3000, label: '3,0 mln' },
            { ka: 2000, label: '2,0 mln' },
            { ka: 1500, label: '1,5 mln' },
            { ka: 1000, label: '1,0 mln' },
            { ka: 500, label: '500 tys.' },
            { ka: 300, label: '300 tys.' },
            { ka: 100, label: '100 tys.' },
            { ka: 40, label: '40 tys.' },
            { ka: 0, label: 'Dziś' }
          ].map(tick => {
            const x = timeToX(tick.ka);
            return (
              <g key={tick.ka}>
                <line x1={x} y1="225" x2={x} y2="235" stroke="#64748B" strokeWidth="1.5" />
                <text x={x} y="248" fill="#64748B" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                  {tick.label}
                </text>
              </g>
            );
          })}

          {/* Species Life Spans (Horizontal Bars) */}
          {SPECIES_DATA.map((sp, idx) => {
            const startX = timeToX(sp.yearsAgoRange[0]);
            const endX = timeToX(Math.max(sp.yearsAgoRange[1], 0.1));
            const width = Math.max(endX - startX, 10);
            const isSelected = selectedSpeciesId === sp.id;
            const yPos = 60 + (idx % 6) * 26;

            return (
              <g
                key={sp.id}
                className="cursor-pointer transition-all duration-200"
                onClick={() => onSelectSpecies(sp.id)}
              >
                {/* Bar */}
                <rect
                  x={startX}
                  y={yPos}
                  width={width}
                  height="18"
                  rx="4"
                  fill={isSelected ? '#F59E0B' : '#1E293B'}
                  stroke={isSelected ? '#FDE68A' : '#475569'}
                  strokeWidth={isSelected ? '2' : '1'}
                  opacity={isSelected ? 1 : 0.85}
                  className="hover:opacity-100 hover:stroke-amber-400 transition-all"
                />
                {/* Label */}
                <text
                  x={startX + 6}
                  y={yPos + 12.5}
                  fill={isSelected ? '#000000' : '#E2E8F0'}
                  fontSize="10"
                  fontFamily="Inter"
                  fontWeight={isSelected ? '700' : '500'}
                  className="pointer-events-none select-none"
                >
                  {sp.name} ({sp.brainCapacityCm3.avg} cm³)
                </text>
              </g>
            );
          })}

          {/* LAYER 1: MILESTONES */}
          {activeLayer === 'milestones' && (
            <g className="animate-in fade-in duration-300">
              {milestones.map((m, idx) => {
                const isHovered = hoveredPoint === m.id;
                const yPos = idx % 2 === 0 ? 275 : 305;
                return (
                  <g
                    key={m.id}
                    onMouseEnter={() => setHoveredPoint(m.id)}
                    onMouseLeave={() => setHoveredPoint(null)}
                    className="cursor-pointer"
                  >
                    <line x1={m.x} y1="230" x2={m.x} y2={yPos - 8} stroke="#E5A952" strokeWidth="1" strokeDasharray="2,2" />
                    <circle cx={m.x} cy="230" r="4" fill="#E5A952" />
                    <rect
                      x={m.x - 45}
                      y={yPos - 12}
                      width="90"
                      height="22"
                      rx="4"
                      fill={isHovered ? '#D97742' : '#181C26'}
                      stroke={isHovered ? '#FDE68A' : '#D97742'}
                      strokeWidth="1"
                    />
                    <text
                      x={m.x}
                      y={yPos + 2}
                      fill={isHovered ? '#FFFFFF' : '#FDE68A'}
                      fontSize="8.5"
                      fontFamily="JetBrains Mono"
                      fontWeight="600"
                      textAnchor="middle"
                    >
                      {m.title.length > 15 ? m.title.substring(0, 14) + '…' : m.title}
                    </text>
                  </g>
                );
              })}
            </g>
          )}

          {/* LAYER 2: BRAIN SIZE ENCEPHALIZATION CURVE */}
          {activeLayer === 'brainSize' && (
            <g className="animate-in fade-in duration-300">
              {/* Encephalization curve polyline */}
              <path
                d={`M ${timeToX(3900)} 210 Q ${timeToX(2000)} 185, ${timeToX(1800)} 165 T ${timeToX(500)} 120 T ${timeToX(150)} 85 T ${timeToX(0)} 95`}
                fill="none"
                stroke="url(#brainCurveGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Brain size annotations */}
              {[
                { ka: 3500, cm3: '430 cm³ (Australopitek)', y: 215 },
                { ka: 1800, cm3: '650–950 cm³ (H. habilis/erectus)', y: 175 },
                { ka: 500, cm3: '1250 cm³ (H. heidelbergensis)', y: 125 },
                { ka: 70, cm3: '1520 cm³ (Neandertalczyk)', y: 75 },
                { ka: 0, cm3: '1350 cm³ (Homo sapiens)', y: 90 }
              ].map(pt => (
                <g key={pt.ka}>
                  <circle cx={timeToX(pt.ka)} cy={pt.y} r="4.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text
                    x={timeToX(pt.ka)}
                    y={pt.y - 8}
                    fill="#34D399"
                    fontSize="9"
                    fontFamily="JetBrains Mono"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {pt.cm3}
                  </text>
                </g>
              ))}
            </g>
          )}

          {/* LAYER 3: CLIMATE & GLACIATIONS */}
          {activeLayer === 'climate' && (
            <g className="animate-in fade-in duration-300">
              {/* Climate curve (wavy line indicating temperature swings & glacials MIS) */}
              <path
                d="M 50 280 C 150 260, 250 295, 350 270 C 450 300, 550 260, 650 310 C 750 250, 850 315, 950 260"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2.5"
                strokeDasharray="4,2"
              />
              <text x="60" y="300" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono">
                Osuszenie Afryki (ekspansja sawanny)
              </text>
              <text x={timeToX(800)} y="335" fill="#818CF8" fontSize="10" fontFamily="JetBrains Mono">
                Cykle 100-tysięczne MIS (Zlodowacenia Eurazji)
              </text>
              <text x={timeToX(20)} y="335" fill="#34D399" fontSize="10" fontFamily="JetBrains Mono">
                Optimum Holocenu
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Hovered Point Info Pill */}
      {hoveredPoint && (
        <div className="bg-obsidian-200 border border-amber-500/40 rounded-lg p-2.5 flex items-center gap-3 text-xs text-amber-200 animate-in fade-in">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <div>
            <strong className="text-white font-mono">{milestones.find(m => m.id === hoveredPoint)?.title}:</strong>{' '}
            <span>{milestones.find(m => m.id === hoveredPoint)?.desc}</span>
          </div>
        </div>
      )}
    </div>
  );
};
