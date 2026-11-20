import React, { useState } from 'react';
import { Users, Shield, Utensils, AlertTriangle, BatteryWarning, Info } from 'lucide-react';

type SimulationMode = 'partible' | 'monogamy_alloparenting' | 'modern_nuclear';

export const PartiblePaternitySimulatorSvg: React.FC = () => {
  const [mode, setMode] = useState<SimulationMode>('partible');

  // Metrics for each mode
  const metrics = {
    partible: {
      calories: 92,
      protection: 88,
      maternalStress: 22,
      infanticideRisk: 12,
      description: 'Rozproszone ojcostwo (Barí / Aché): matka współżyje z 2–3 zaufanymi łowcami. Niepewność ojcostwa motywuje wielu mężczyzn do dostarczania upolowanego mięsa i ochrony dziecka przed wrogimi samcami. Niemowlę wspierane przez 6–8 osób.'
    },
    monogamy_alloparenting: {
      calories: 82,
      protection: 80,
      maternalStress: 35,
      infanticideRisk: 18,
      description: 'Monogamia w grupie krewniaczej (Hipoteza Babci Hawkes): pewność ojcostwa jednego stałego partnera + kluczowa rola postmenopauzalnych babć, sióstr i starszego rodzeństwa w alloparentingu. Stabilny bilans kaloryczny.'
    },
    modern_nuclear: {
      calories: 95, // High artificial food abundance
      protection: 95, // Modern police / medicine
      maternalStress: 88, // Chronic burnout from isolated parenting
      infanticideRisk: 30, // Unrelated step-parents risk (Cinderella Effect)
      description: 'Współczesna rodzina nuklearna / samotne rodzicielstwo w anonimowej metropolii: załamanie alloparentingu. Opieka spoczywa wyłącznie na 1–2 osobach bez wsparcia klanu, generując chroniczne przeciążenie układu nerwowego matek i spadek dzietności.'
    }
  };

  const current = metrics[mode];

  // 10 Adults (A1..A10), Mother (M), Child (C)
  // Coordinates for nodes:
  // Center: Mother at (320, 240), Child at (320, 275)
  // Adults arranged in a circle:
  const adults = [
    { id: 'F1', name: 'Łowca Główny (Ojciec A)', angle: 0, isFather: true, isKin: true, isAlloparent: true },
    { id: 'F2', name: 'Łowca Wtórny (Ojciec B)', angle: 36, isFather: mode === 'partible', isKin: false, isAlloparent: mode === 'partible' },
    { id: 'F3', name: 'Łowca Wtórny (Ojciec C)', angle: 72, isFather: mode === 'partible', isKin: false, isAlloparent: mode === 'partible' },
    { id: 'K1', name: 'Babcia Macierzysta', angle: 108, isFather: false, isKin: true, isAlloparent: mode !== 'modern_nuclear' },
    { id: 'K2', name: 'Ciotka / Siostra', angle: 144, isFather: false, isKin: true, isAlloparent: mode !== 'modern_nuclear' },
    { id: 'K3', name: 'Dziadek / Starszyzna', angle: 180, isFather: false, isKin: true, isAlloparent: mode !== 'modern_nuclear' },
    { id: 'N1', name: 'Łowca Niespokrewniony 1', angle: 216, isFather: false, isKin: false, isAlloparent: false },
    { id: 'N2', name: 'Łowca Niespokrewniony 2', angle: 252, isFather: false, isKin: false, isAlloparent: false },
    { id: 'W1', name: 'Kobieta z klanu A', angle: 288, isFather: false, isKin: true, isAlloparent: mode !== 'modern_nuclear' },
    { id: 'W2', name: 'Kobieta z klanu B', angle: 324, isFather: false, isKin: false, isAlloparent: false },
  ];

  const centerX = 320;
  const centerY = 220;
  const radius = 160;

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      
      {/* Header and Mode Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-surface-border pb-4">
        <div>
          <h3 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
            <Users className="w-5 h-5 text-pleisto-ochre" />
            <span>Symulator Sieci Społecznej: Rozproszone Ojcostwo i Alloparenting</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Wizualizacja małej grupy łowiecko-zbierackiej (10 dorosłych + matka i dziecko) w 3 trybach organizacji opiekuńczej.
          </p>
        </div>

        {/* 3 Modes Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-obsidian-200 rounded-lg border border-surface-border text-xs font-mono">
          <button
            onClick={() => setMode('partible')}
            className={`px-3 py-1.5 rounded transition-all ${
              mode === 'partible' ? 'bg-amber-500/25 text-amber-300 font-bold border border-amber-500/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Tryb A: Rozproszone Ojcostwo
          </button>
          <button
            onClick={() => setMode('monogamy_alloparenting')}
            className={`px-3 py-1.5 rounded transition-all ${
              mode === 'monogamy_alloparenting' ? 'bg-bioneuro-emerald/25 text-bioneuro-mint font-bold border border-bioneuro-emerald/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Tryb B: Hipoteza Babci
          </button>
          <button
            onClick={() => setMode('modern_nuclear')}
            className={`px-3 py-1.5 rounded transition-all ${
              mode === 'modern_nuclear' ? 'bg-rose-500/25 text-rose-300 font-bold border border-rose-500/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Tryb C: Rodzina Nuklearna (XXI w.)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* SVG Network Canvas (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-3 rounded-xl bg-obsidian-300 border border-surface-border">
          <svg viewBox="0 0 640 440" className="w-full max-w-[580px] h-auto select-none font-sans">
            <defs>
              <radialGradient id="netGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D97742" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#0A0C10" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background Glow */}
            <circle cx={centerX} cy={centerY} r="200" fill="url(#netGlow)" />

            {/* Orbit Circle Guide */}
            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#222936" strokeDasharray="3,3" />

            {/* Edges from Adults to Mother/Child */}
            {adults.map(ad => {
              const rad = (ad.angle * Math.PI) / 180;
              const ax = centerX + radius * Math.cos(rad);
              const ay = centerY + radius * Math.sin(rad);

              let isConnected = false;
              let edgeColor = '#334155';
              let strokeWidth = '1';
              let strokeDash = 'none';

              if (mode === 'partible') {
                if (ad.isFather) {
                  isConnected = true;
                  edgeColor = '#F59E0B'; // Amber investment from primary/secondary fathers
                  strokeWidth = '2.5';
                } else if (ad.isAlloparent) {
                  isConnected = true;
                  edgeColor = '#10B981'; // Green grandmother/kin alloparenting
                  strokeWidth = '1.8';
                }
              } else if (mode === 'monogamy_alloparenting') {
                if (ad.id === 'F1') {
                  isConnected = true;
                  edgeColor = '#F59E0B';
                  strokeWidth = '3';
                } else if (ad.isAlloparent) {
                  isConnected = true;
                  edgeColor = '#10B981';
                  strokeWidth = '2';
                }
              } else if (mode === 'modern_nuclear') {
                if (ad.id === 'F1') {
                  isConnected = true;
                  edgeColor = '#38BDF8';
                  strokeWidth = '2.5';
                } else {
                  // Broken disconnected links
                  isConnected = false;
                  edgeColor = '#1E293B';
                  strokeDash = '2,4';
                }
              }

              return (
                <g key={`edge-${ad.id}`}>
                  <line
                    x1={ax}
                    y1={ay}
                    x2={centerX}
                    y2={centerY}
                    stroke={edgeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDash}
                    opacity={isConnected ? 0.85 : 0.25}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}

            {/* Center: Mother Node */}
            <circle cx={centerX - 15} cy={centerY} r="22" fill="#E11D48" stroke="#FDA4AF" strokeWidth="2" />
            <text x={centerX - 15} y={centerY + 4} fill="#FFFFFF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">
              MATKA
            </text>

            {/* Center: Child Node */}
            <circle cx={centerX + 25} cy={centerY} r="16" fill="#F59E0B" stroke="#FEF08A" strokeWidth="2" />
            <text x={centerX + 25} y={centerY + 4} fill="#000000" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">
              DZIECKO
            </text>

            {/* 10 Adults Perimeter Nodes */}
            {adults.map(ad => {
              const rad = (ad.angle * Math.PI) / 180;
              const ax = centerX + radius * Math.cos(rad);
              const ay = centerY + radius * Math.sin(rad);

              let nodeColor = '#1E293B';
              let strokeColor = '#475569';

              if (mode === 'partible' && ad.isFather) {
                nodeColor = '#D97742';
                strokeColor = '#FDE68A';
              } else if ((mode === 'partible' || mode === 'monogamy_alloparenting') && ad.isAlloparent) {
                nodeColor = '#065F46';
                strokeColor = '#34D399';
              } else if (mode === 'modern_nuclear' && ad.id === 'F1') {
                nodeColor = '#0369A1';
                strokeColor = '#38BDF8';
              }

              return (
                <g key={ad.id} className="cursor-pointer">
                  <circle
                    cx={ax}
                    cy={ay}
                    r="15"
                    fill={nodeColor}
                    stroke={strokeColor}
                    strokeWidth="1.5"
                    className="transition-all duration-300"
                  />
                  <text
                    x={ax}
                    y={ay + 3.5}
                    fill="#F1F5F9"
                    fontSize="9"
                    fontFamily="JetBrains Mono"
                    fontWeight="600"
                    textAnchor="middle"
                  >
                    {ad.id}
                  </text>
                  {/* Label tooltip text */}
                  <text
                    x={ax}
                    y={ay > centerY ? ay + 18 : ay - 14}
                    fill="#94A3B8"
                    fontSize="8.5"
                    fontFamily="Inter"
                    textAnchor="middle"
                  >
                    {ad.name.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Network Legend */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-mono text-slate-400 mt-2">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" /> Matka
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Dziecko
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-pleisto-terracotta inline-block" /> Ojciec/Ojcowie
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-bioneuro-emerald inline-block" /> Alloparenting (Babcie/Krewni)
            </span>
          </div>
        </div>

        {/* 4 Animated Metric Gauges (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-4">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Bilans Kosztów i Korzyści Ewolucyjnych:
              </span>
              <h4 className="font-serif font-bold text-base text-slate-100">
                Wskaźniki Dobrostanu Matki i Potomstwa
              </h4>
            </div>

            {/* Gauge 1: Zabezpieczenie kaloryczne dziecka */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-amber-400" /> Zabezpieczenie kaloryczne dziecka:
                </span>
                <span className="text-amber-400 font-bold">{current.calories}%</span>
              </div>
              <div className="w-full h-2.5 bg-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${current.calories}%` }}
                />
              </div>
            </div>

            {/* Gauge 2: Ochrona przed zagrożeniem */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-bioneuro-mint" /> Ochrona przed zagrożeniem fizycznym:
                </span>
                <span className="text-bioneuro-mint font-bold">{current.protection}%</span>
              </div>
              <div className="w-full h-2.5 bg-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-600 to-bioneuro-emerald rounded-full transition-all duration-500"
                  style={{ width: `${current.protection}%` }}
                />
              </div>
            </div>

            {/* Gauge 3: Obciążenie psychiczne matki */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <BatteryWarning className="w-3.5 h-3.5 text-rose-400" /> Obciążenie psychiczne matki (stres HPA):
                </span>
                <span className={current.maternalStress > 60 ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                  {current.maternalStress}%
                </span>
              </div>
              <div className="w-full h-2.5 bg-surface rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    current.maternalStress > 60
                      ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                      : 'bg-gradient-to-r from-emerald-600 to-emerald-400'
                  }`}
                  style={{ width: `${current.maternalStress}%` }}
                />
              </div>
            </div>

            {/* Gauge 4: Ryzyko dzieciobójstwa / agresji obcych samców */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" /> Ryzyko agresji samców / dzieciobójstwa:
                </span>
                <span className="text-yellow-400 font-bold">{current.infanticideRisk}%</span>
              </div>
              <div className="w-full h-2.5 bg-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full transition-all duration-500"
                  style={{ width: `${current.infanticideRisk}%` }}
                />
              </div>
            </div>

            {/* Detailed Description */}
            <div className="p-3 rounded-lg bg-surface border border-surface-border text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>{current.description}</div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
