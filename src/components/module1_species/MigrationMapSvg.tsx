import React, { useState } from 'react';
import { MapPin, Clock, Compass, Sparkles } from 'lucide-react';

const worldMapUrl = `${import.meta.env.BASE_URL}world-map.png`;

interface ContactZone {
  id: string;
  name: string;
  shortName: string;
  region: string;
  dating: string;
  hominidsInvolved: string;
  geneticSignificance: string;
  archaeologicalSites: string[];
  cx: number;
  cy: number;
  color: string;
}

export const MigrationMapSvg: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('levant');
  const [activeWave, setActiveWave] = useState<'all' | 'erectus' | 'heidelbergensis' | 'sapiens'>('all');

  const contactZones: ContactZone[] = [
    {
      id: 'levant',
      name: 'Strefa Lewantyńska (Korytarz Bliskowschodni)',
      shortName: 'Lewant',
      region: 'Lewant (Współczesny Izrael, Palestyna, Syria, Jordania)',
      dating: 'ok. 100 000 – 50 000 lat temu',
      hominidsInvolved: 'Homo sapiens & Homo neanderthalensis',
      geneticSignificance: 'Główny epizod introgresji genetycznej (~55 000 lat temu), z którego wywodzi się 1,5–2,1% DNA neandertalskiego u wszystkich populacji współczesnych nie-Afrykanów. Przejęte receptory układu odpornościowego TLR1/6/10 oraz geny keratynowe (BNC2).',
      archaeologicalSites: ['Jaskinie Skhul i Qafzeh', 'Jaskinia Kebara (szkielet z kością gnykową)', 'Jaskinia Tabun', 'Jaskinia Amud'],
      cx: 566,
      cy: 215,
      color: '#F59E0B' // amber
    },
    {
      id: 'denisova',
      name: 'Jaskinia Denisowa (Góry Ałtaj)',
      shortName: 'Denisowa (Ałtaj)',
      region: 'Południowa Syberia, Rosja (Dolina rzeki Anuj)',
      dating: 'ok. 200 000 – 45 000 lat temu',
      hominidsInvolved: 'Denisowianie, Neandertalczycy & Homo sapiens',
      geneticSignificance: 'Bezprecedensowy punkt styku trzech archaicznych grup. Odkrycie kopalnej hybrydy pierwszego pokolenia „Denny” (matka Neandertalka, ojciec Denisowianin). Przekazanie wariantu hipoksyjnego genu EPAS1 dzisiejszym Tybetańczykom.',
      archaeologicalSites: ['Jaskinia Denisowa', 'Jaskinia Czagyrska', 'Jaskinia Okladnikowa'],
      cx: 688,
      cy: 145,
      color: '#A855F7' // purple
    },
    {
      id: 'vindija-iberia',
      name: 'Półwysep Iberyjski & Jaskinia Vindija',
      shortName: 'Europa (Vindija / Iberia)',
      region: 'Europa Południowo-Zachodnia i Bałkany (Iberia, Chorwacja)',
      dating: 'ok. 45 000 – 35 000 lat temu',
      hominidsInvolved: 'Schyłkowy Homo neanderthalensis & wczesny Homo sapiens (kultura oryniacka)',
      geneticSignificance: 'Jaskinia Vindija (próbka Vi33.16) posłużyła zespołowi Svante Pääbo do zsekwencjonowania pierwszego pełnego genomu neandertalczyka w 2010 r. Półwysep Iberyjski stanowił ostatnie refugium Neandertalczyków przed asymilacją i wymarciem ok. 39 000 lat temu.',
      archaeologicalSites: ['Jaskinia Vindija (Chorwacja)', 'Gorham’s Cave (Gibraltar)', 'Cueva de los Aviones (Hiszpania)', 'Bacho Kiro (Bułgaria)'],
      cx: 492,
      cy: 178,
      color: '#EC4899' // pink
    },
    {
      id: 'sahul-melanesia',
      name: 'Korytarz Sunda–Wallacea (Ku Sahul)',
      shortName: 'Sunda (Flores) & Sahul',
      region: 'Azja Południowo-Wschodnia, Indonezja & Sahul (Nowa Gwinea, Australia)',
      dating: 'ok. 65 000 – 45 000 lat temu',
      hominidsInvolved: 'Homo sapiens & Wschodnie Populacje Denisowian (oraz reliktowy H. floresiensis)',
      geneticSignificance: 'Najwyższa zachowana introgresja denisowska na globie: 4% – 6% genomu rdzennych mieszkańców Papui-Nowej Gwinei, Aborygenów australijskich i Melanezyjczyków pochodzi od zróżnicowanych wschodnich gałęzi denisowskich.',
      archaeologicalSites: ['Jaskinia Liang Bua (Flores)', 'Madjedbebe (Australia)', 'Niah Cave (Borneo)', 'Jaskinia Callao (Luzon)'],
      cx: 788,
      cy: 326,
      color: '#06B6D4' // cyan
    }
  ];

  const activeZoneData = contactZones.find(z => z.id === selectedZone) || contactZones[0];

  // 6 Clean Landmark Point Labels with Non-Clashing Positions and Leader Lines
  const landmarkLabels = [
    { text: 'Rift (Afryka)', ptX: 550, ptY: 305, lblX: 550, lblY: 345, width: 88 },
    { text: 'Lewant', ptX: 566, ptY: 215, lblX: 566, lblY: 172, width: 62 },
    { text: 'Europa (Vindija / Iberia)', ptX: 492, ptY: 178, lblX: 432, lblY: 140, width: 146 },
    { text: 'Denisowa (Ałtaj)', ptX: 688, ptY: 145, lblX: 688, lblY: 108, width: 106 },
    { text: 'Sunda (Flores)', ptX: 788, ptY: 326, lblX: 788, lblY: 368, width: 94 },
    { text: 'Sahul', ptX: 835, ptY: 385, lblX: 835, lblY: 426, width: 56 },
  ];

  return (
    <div className="rounded-xl border border-surface-border bg-surface/90 overflow-hidden shadow-2xl flex flex-col">
      {/* Header */}
      <div className="p-4 md:p-5 border-b border-surface-border bg-obsidian-200/90 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4" />
            <span>PALEOGEOGRAFIA & INTROGRESJA GENOMOWA aDNA</span>
          </div>
          <h3 className="font-serif font-bold text-lg md:text-xl text-slate-100">
            Fale Migracji Hominidów i Strefy Styku Ewolucyjnego
          </h3>
          <p className="text-xs text-slate-400 font-sans">
            Wielka rekonstrukcja kartograficzna ekspansji rodzaju <em>Homo</em> z Afryki oraz 4 kluczowe punkty introgresji paleogenetycznej.
          </p>
        </div>

        {/* Clear National-Geographic Wave Filter Bar (NAD MAPĄ) */}
        <div className="flex items-center gap-1.5 flex-wrap text-xs font-mono">
          <span className="text-slate-400 text-[11px] mr-1 hidden sm:inline">Filtr fal:</span>
          <button
            onClick={() => setActiveWave('all')}
            className={`px-3 py-1.5 rounded-lg border text-[11px] transition-all whitespace-nowrap ${
              activeWave === 'all'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500 font-bold shadow-sm'
                : 'bg-surface text-slate-400 hover:text-slate-200 border-surface-border'
            }`}
          >
            Wszystkie fale
          </button>
          <button
            onClick={() => setActiveWave('erectus')}
            className={`px-3 py-1.5 rounded-lg border text-[11px] transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeWave === 'erectus'
                ? 'bg-amber-500/25 text-amber-300 border-amber-500 font-bold shadow-sm'
                : 'bg-surface text-slate-400 hover:text-slate-200 border-surface-border'
            }`}
          >
            <span className="w-2.5 h-0.5 bg-[#F59E0B] inline-block border-t border-dashed border-[#F59E0B]" />
            <span>1. Erectus (~1,8 Ma)</span>
          </button>
          <button
            onClick={() => setActiveWave('heidelbergensis')}
            className={`px-3 py-1.5 rounded-lg border text-[11px] transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeWave === 'heidelbergensis'
                ? 'bg-emerald-500/25 text-emerald-300 border-emerald-500 font-bold shadow-sm'
                : 'bg-surface text-slate-400 hover:text-slate-200 border-surface-border'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block" />
            <span>2. Heidelbergensis (~600 ka)</span>
          </button>
          <button
            onClick={() => setActiveWave('sapiens')}
            className={`px-3 py-1.5 rounded-lg border text-[11px] transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeWave === 'sapiens'
                ? 'bg-cyan-500/25 text-cyan-300 border-cyan-400 font-bold shadow-sm'
                : 'bg-surface text-slate-400 hover:text-slate-200 border-surface-border'
            }`}
          >
            <span className="w-3 h-0.5 bg-[#38BDF8] inline-block" />
            <span>3. Sapiens (~70 ka)</span>
          </button>
        </div>
      </div>

      {/* Mobile Horizontal Scroll Gesture Hint */}
      <div className="md:hidden flex items-center justify-center gap-1.5 py-1 px-3 bg-obsidian-300/60 border-b border-surface-border text-[11px] font-mono text-slate-400">
        <span>← Przesuń mapę palcem →</span>
      </div>

      {/* Synchronized World Map & SVG Canvas (viewBox 0 0 1000 560) */}
      <div className="relative w-full bg-[#07090E] overflow-x-auto no-scrollbar">
        <div className="min-w-[700px] md:min-w-0 relative w-full aspect-[1000/560] overflow-hidden flex items-center justify-center">
          {/* Base Real World Map from Project Assets with Oval Masking */}
          <img
            src={worldMapUrl}
            alt="Paleogeograficzna krajobrazowa mapa świata"
            className="absolute inset-0 w-full h-full object-fill select-none pointer-events-none"
            style={{
              clipPath: 'ellipse(48.5% 45.5% at 50% 49.5%)',
              filter: 'grayscale(100%) invert(90%) brightness(1.28) contrast(1.22) opacity(0.88)',
            }}
          />

          {/* SVG Overlay rigidly coupled to map dimensions (viewBox 0 0 1000 560) */}
          <svg
            viewBox="0 0 1000 560"
            className="absolute inset-0 w-full h-full select-none"
            aria-label="Mapa paleogeograficzna migracji hominidów"
          >
            <defs>
              {/* Chevron Arrow Markers (Sleek, Open, Academic Standard) */}
              <marker
                id="chevronErectus"
                viewBox="0 0 6 6"
                refX="4"
                refY="3"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 1 1 L 5 3 L 1 5" fill="none" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </marker>

              <marker
                id="chevronHeidelberg"
                viewBox="0 0 6 6"
                refX="4"
                refY="3"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 1 1 L 5 3 L 1 5" fill="none" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </marker>

              <marker
                id="chevronSapiens"
                viewBox="0 0 6 6"
                refX="4"
                refY="3"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 1 1 L 5 3 L 1 5" fill="none" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </marker>

              <marker
                id="chevronAmericas"
                viewBox="0 0 6 6"
                refX="4"
                refY="3"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 1 1 L 5 3 L 1 5" fill="none" stroke="#818CF8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </marker>

              {/* Glow Filter for Active Migration Lines */}
              <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Museum Grade Cartographic Ellipse Outer Frame */}
            <ellipse
              cx="500"
              cy="277.2"
              rx="485"
              ry="254.8"
              fill="none"
              stroke="#334155"
              strokeWidth="1.2"
              opacity="0.45"
            />

            {/* Subtle Graticule Grid (Equator & Prime Meridian) */}
            <g stroke="#1E293B" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.4">
              <line x1="15" y1="277" x2="985" y2="277" />
              <line x1="500" y1="22" x2="500" y2="532" />
            </g>

            {/* WAVE 1: Homo erectus (~1.8 Ma) — Amber #F59E0B */}
            <g
              id="wave-erectus"
              className="transition-opacity duration-300"
              style={{
                opacity: activeWave === 'all' ? 0.9 : activeWave === 'erectus' ? 1 : 0.15,
              }}
            >
              {/* Smooth single arc: Rift (550,305) -> Levant (566,215) -> Iran (595,195) -> India (685,255) -> Sunda/Java (775,322) */}
              <path
                d="M 550 305 Q 556 250 566 215 Q 580 195 595 195 Q 640 215 685 255 Q 730 290 775 322"
                fill="none"
                stroke="#F59E0B"
                strokeWidth={activeWave === 'erectus' ? '2.5' : '2'}
                strokeDasharray="6 4"
                markerEnd="url(#chevronErectus)"
                filter={activeWave === 'erectus' ? 'url(#lineGlow)' : undefined}
              />
              <circle cx="550" cy="305" r="3.5" fill="#F59E0B" />
              <circle cx="595" cy="195" r="2.5" fill="#F59E0B" opacity="0.8" />
              <circle cx="775" cy="322" r="3" fill="#F59E0B" />
            </g>

            {/* WAVE 2: Homo heidelbergensis (~600 ka) — Emerald #10B981 */}
            <g
              id="wave-heidelbergensis"
              className="transition-opacity duration-300"
              style={{
                opacity: activeWave === 'all' ? 0.9 : activeWave === 'heidelbergensis' ? 1 : 0.15,
              }}
            >
              {/* Western arm (Neanderthals): Rift -> Levant -> Balkans (515,178) -> Iberia (456,190) */}
              <path
                d="M 550 305 Q 556 250 566 215 Q 545 190 515 178 Q 485 180 456 190"
                fill="none"
                stroke="#10B981"
                strokeWidth={activeWave === 'heidelbergensis' ? '2.5' : '2'}
                strokeDasharray="3 4"
                markerEnd="url(#chevronHeidelberg)"
                filter={activeWave === 'heidelbergensis' ? 'url(#lineGlow)' : undefined}
              />
              {/* Eastern arm (Denisovans): Levant -> Central Asia (630,165) -> Altai (688,145) */}
              <path
                d="M 566 215 Q 600 185 630 165 Q 660 150 688 145"
                fill="none"
                stroke="#10B981"
                strokeWidth={activeWave === 'heidelbergensis' ? '2.5' : '2'}
                strokeDasharray="3 4"
                markerEnd="url(#chevronHeidelberg)"
                filter={activeWave === 'heidelbergensis' ? 'url(#lineGlow)' : undefined}
              />
              <circle cx="456" cy="190" r="3" fill="#10B981" />
              <circle cx="688" cy="145" r="3" fill="#10B981" />
            </g>

            {/* WAVE 3: Homo sapiens (~70 ka Out of Africa & Beringia to Americas) — Cyan #38BDF8 & Indigo #818CF8 */}
            <g
              id="wave-sapiens"
              className="transition-opacity duration-300"
              style={{
                opacity: activeWave === 'all' ? 0.95 : activeWave === 'sapiens' ? 1 : 0.15,
              }}
            >
              {/* Southern Coastal Route to Sahul */}
              <path
                d="M 550 305 Q 570 280 592 262 Q 635 260 680 268 Q 740 295 788 326 Q 815 355 835 385"
                fill="none"
                stroke="#38BDF8"
                strokeWidth={activeWave === 'sapiens' ? '2.5' : '2'}
                markerEnd="url(#chevronSapiens)"
                filter={activeWave === 'sapiens' ? 'url(#lineGlow)' : undefined}
              />
              {/* Northern Branch to Central & Western Europe */}
              <path
                d="M 566 215 Q 530 190 492 178"
                fill="none"
                stroke="#38BDF8"
                strokeWidth={activeWave === 'sapiens' ? '2.5' : '2'}
                markerEnd="url(#chevronSapiens)"
                filter={activeWave === 'sapiens' ? 'url(#lineGlow)' : undefined}
              />
              {/* Beringia Route across Siberia ending INSIDE the oval at Chukotka (878, 92) */}
              <path
                d="M 688 145 Q 780 110 878 92"
                fill="none"
                stroke="#818CF8"
                strokeWidth="1.6"
                strokeDasharray="5 3"
                markerEnd="url(#chevronAmericas)"
              />
              {/* Resumes INSIDE the oval on Alaska land (175, 100) -> Pacific NW (198,155) -> Mexico (230,225) -> Panama (278,288) -> Andes (300,350) -> Chile (310,415) */}
              <path
                d="M 175 100 Q 185 130 198 155 Q 215 195 230 225 Q 255 265 278 288 Q 290 320 300 350 Q 305 385 310 415"
                fill="none"
                stroke="#818CF8"
                strokeWidth="1.6"
                strokeDasharray="5 3"
                markerEnd="url(#chevronAmericas)"
              />
              <circle cx="835" cy="385" r="3.5" fill="#38BDF8" />
              <circle cx="310" cy="415" r="3" fill="#818CF8" />
            </g>

            {/* 6 Elegant Landmark Labels with Non-Clashing Leader Lines */}
            <g className="pointer-events-none select-none">
              {landmarkLabels.map((item, idx) => (
                <g key={idx}>
                  {/* Thin dashed leader line */}
                  <line
                    x1={item.ptX}
                    y1={item.ptY}
                    x2={item.lblX}
                    y2={item.lblY}
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                  />
                  {/* Soft translucent pill badge */}
                  <rect
                    x={item.lblX - item.width / 2}
                    y={item.lblY - 9}
                    width={item.width}
                    height="18"
                    rx="4"
                    fill="rgba(11,13,16,0.78)"
                    stroke="rgba(255,255,255,0.14)"
                    strokeWidth="0.8"
                  />
                  {/* Crisp label text */}
                  <text
                    x={item.lblX}
                    y={item.lblY + 3.5}
                    textAnchor="middle"
                    fill="#F1F5F9"
                    fontSize="10"
                    fontFamily="sans-serif"
                    fontWeight="500"
                  >
                    {item.text}
                  </text>
                </g>
              ))}
            </g>

            {/* Interactive Contact & Hybridization Zones (Clickable Nodes) */}
            {contactZones.map(zone => {
              const isSelected = selectedZone === zone.id;
              return (
                <g
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className="cursor-pointer group"
                >
                  {/* Outer pulse circle */}
                  <circle
                    cx={zone.cx}
                    cy={zone.cy}
                    r={isSelected ? 13 : 8}
                    fill={zone.color}
                    fillOpacity={isSelected ? 0.35 : 0.15}
                    stroke={zone.color}
                    strokeWidth={isSelected ? 1.8 : 0.8}
                    className={isSelected ? 'animate-pulse' : 'group-hover:fill-opacity-35 transition-all'}
                  />
                  {/* Center crisp dot */}
                  <circle
                    cx={zone.cx}
                    cy={zone.cy}
                    r={isSelected ? 4.5 : 3}
                    fill={zone.color}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Quick-Jump Contact Zone Chip Buttons */}
      <div className="flex items-center gap-2 flex-wrap py-2.5 px-4 bg-obsidian-300/80 border-t border-surface-border text-xs font-mono">
        <span className="text-slate-400 text-[11px] font-semibold flex items-center gap-1 shrink-0">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          Punkty introgresji paleogenetycznej:
        </span>
        <div className="flex items-center gap-1.5 flex-wrap">
          {contactZones.map(zone => {
            const isSelected = selectedZone === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => {
                  setSelectedZone(zone.id);
                  const el = document.getElementById('selected-zone-card');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }}
                className={`px-2.5 py-1 rounded text-[11px] transition-all flex items-center gap-1.5 border whitespace-nowrap ${
                  isSelected
                    ? 'font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white bg-surface/80 border-surface-border'
                }`}
                style={isSelected ? {
                  backgroundColor: `${zone.color}25`,
                  color: zone.color,
                  borderColor: zone.color
                } : {}}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: zone.color }} />
                <span>{zone.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Contact Zone Details Card */}
      <div
        id="selected-zone-card"
        className="p-4 md:p-5 border-t border-surface-border bg-obsidian-200/90 flex flex-col md:flex-row gap-4 justify-between items-start"
      >
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="px-2.5 py-0.5 rounded text-xs font-mono font-bold flex items-center gap-1.5"
              style={{ backgroundColor: `${activeZoneData.color}20`, color: activeZoneData.color, border: `1px solid ${activeZoneData.color}60` }}
            >
              <Sparkles className="w-3 h-3" />
              Strefa Kontaktu: {activeZoneData.name}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {activeZoneData.dating}
            </span>
          </div>

          <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
            <p>
              <strong className="text-slate-100">Taksony w kontakcie:</strong> {activeZoneData.hominidsInvolved}
            </p>
            <p className="p-2.5 rounded bg-surface border border-surface-border text-slate-200 font-sans">
              <strong className="text-amber-400 font-mono text-[11px] block mb-0.5">Znaczenie Paleogenetyczne (aDNA):</strong>
              {activeZoneData.geneticSignificance}
            </p>
          </div>
        </div>

        {/* Archaeological Sites */}
        <div className="w-full md:w-64 p-3 rounded-lg bg-surface border border-surface-border shrink-0 text-xs">
          <span className="text-slate-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            Kluczowe Stanowiska:
          </span>
          <ul className="space-y-1 text-slate-300 font-mono text-[11px]">
            {activeZoneData.archaeologicalSites.map((site, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>{site}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
