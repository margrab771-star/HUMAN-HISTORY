import React, { useState } from 'react';
import { PRIMATE_TESTES_COMPARISON } from '../../data/bioNeuroData';
import { PrimateTestesData } from '../../types';
import { BarChart3, Info } from 'lucide-react';

export const PrimateTestesChartSvg: React.FC = () => {
  const [selectedPrimateIndex, setSelectedPrimateIndex] = useState<number>(1); // Default: Human

  const activePrimate: PrimateTestesData = PRIMATE_TESTES_COMPARISON[selectedPrimateIndex];

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      
      {/* Title */}
      <div className="border-b border-surface-border pb-3">
        <h3 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-pleisto-ochre" />
          <span>Biologia Rozrodu: Wykres Porównawczy Jąder u Naczelnych a Dobór Płciowy</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Względna masa jąder w stosunku do masy ciała jest w biologii ewolucyjnej niezawodnym indykatorem intensywności konkurencji plemników w drogach rodnych samicy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* SVG Comparative Chart (7 cols) */}
        <div className="lg:col-span-7 flex flex-col p-4 rounded-xl bg-obsidian-300 border border-surface-border">
          <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between">
            <span>Wskaźnik Allometryczny: Względna Masa Jąder (% masy ciała)</span>
            <span className="text-[10px] text-amber-400">Kliknij słupek, aby przełączyć opis</span>
          </div>

          <svg viewBox="0 0 540 260" className="w-full h-auto select-none">
            {/* Horizontal Grid lines */}
            <line x1="50" y1="20" x2="510" y2="20" stroke="#1E293B" strokeWidth="1" />
            <text x="40" y="24" fill="#64748B" fontSize="9" fontFamily="JetBrains Mono" textAnchor="end">0.30%</text>

            <line x1="50" y1="80" x2="510" y2="80" stroke="#1E293B" strokeWidth="1" />
            <text x="40" y="84" fill="#64748B" fontSize="9" fontFamily="JetBrains Mono" textAnchor="end">0.20%</text>

            <line x1="50" y1="140" x2="510" y2="140" stroke="#1E293B" strokeWidth="1" />
            <text x="40" y="144" fill="#64748B" fontSize="9" fontFamily="JetBrains Mono" textAnchor="end">0.10%</text>

            <line x1="50" y1="200" x2="510" y2="200" stroke="#334155" strokeWidth="1.5" />
            <text x="40" y="204" fill="#64748B" fontSize="9" fontFamily="JetBrains Mono" textAnchor="end">0.00%</text>

            {/* Bars for 3 species */}
            {PRIMATE_TESTES_COMPARISON.map((pr, idx) => {
              const isSelected = selectedPrimateIndex === idx;
              // X positions: 110, 260, 410
              const xPos = 90 + idx * 150;
              // Bar height scale: 0.30% = 180px
              const barHeight = (pr.testesToBodyRatioPercent / 0.3) * 180;
              const yPos = 200 - barHeight;

              const barColor = idx === 0 ? '#E11D48' : idx === 1 ? '#F59E0B' : '#10B981';

              return (
                <g
                  key={pr.speciesName}
                  className="cursor-pointer"
                  onClick={() => setSelectedPrimateIndex(idx)}
                >
                  {/* Bar */}
                  <rect
                    x={xPos}
                    y={yPos}
                    width="65"
                    height={barHeight}
                    rx="4"
                    fill={barColor}
                    fillOpacity={isSelected ? 1 : 0.65}
                    stroke={isSelected ? '#FFFFFF' : barColor}
                    strokeWidth={isSelected ? '2' : '1'}
                    className="transition-all duration-300 hover:fill-opacity-90"
                  />

                  {/* Percentage Value Label above bar */}
                  <text
                    x={xPos + 32.5}
                    y={yPos - 8}
                    fill={isSelected ? '#FFFFFF' : '#CBD5E1'}
                    fontSize="11"
                    fontFamily="JetBrains Mono"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {pr.testesToBodyRatioPercent.toFixed(3)}%
                  </text>

                  {/* Species Name below axis */}
                  <text
                    x={xPos + 32.5}
                    y="218"
                    fill={isSelected ? '#FDE68A' : '#94A3B8'}
                    fontSize="11"
                    fontFamily="Inter"
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    textAnchor="middle"
                  >
                    {pr.speciesName.split(' ')[0]}
                  </text>
                  <text
                    x={xPos + 32.5}
                    y="232"
                    fill="#64748B"
                    fontSize="9"
                    fontFamily="JetBrains Mono"
                    fontStyle="italic"
                    textAnchor="middle"
                  >
                    {pr.latinName}
                  </text>

                  {/* Absolute weights */}
                  <text
                    x={xPos + 32.5}
                    y="248"
                    fill="#64748B"
                    fontSize="9"
                    fontFamily="JetBrains Mono"
                    textAnchor="middle"
                  >
                    Jądra: {pr.testesWeightG}g | Ciało: {pr.bodyWeightKg}kg
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick takeaway note */}
          <div className="mt-3 p-2.5 rounded bg-surface border border-surface-border text-[11px] text-slate-300 flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-100">Wniosek ewolucyjny:</strong> Człowiek (~0,053%) zajmuje pozycję pośrednią. Wskazuje to, że nie wyewoluowaliśmy ani w systemie ścisłego haremu (jak goryl), ani w systemie powszechnego promiskuityzmu z wieloma samcami w ciągu godziny (jak szympans), lecz w systemie zacieśnionych par z niezerową konkurencją pozapartnerską.
            </div>
          </div>
        </div>

        {/* Selected Primate Details (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3">
            <div className="border-b border-surface-border pb-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Wybrany takson referencyjny:
              </span>
              <h4 className="font-serif font-bold text-lg text-slate-100">
                {activePrimate.speciesName} <span className="text-xs text-amber-400 italic">({activePrimate.latinName})</span>
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-slate-400 block text-[10px]">System kojarzeń:</span>
                <span className="text-slate-200 font-semibold">{activePrimate.matingSystem}</span>
              </div>
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-slate-400 block text-[10px]">Konkurencja nasienia:</span>
                <span className="text-amber-400 font-semibold">{activePrimate.spermCompetitionLevel}</span>
              </div>
            </div>

            <div>
              <strong className="text-xs text-slate-300 font-mono block mb-1">Struktura społeczna:</strong>
              <p className="text-xs text-slate-400 leading-relaxed bg-surface p-2.5 rounded border border-surface-border">
                {activePrimate.socialStructure}
              </p>
            </div>

            <div>
              <strong className="text-xs text-slate-300 font-mono block mb-1">Mechanizm selekcji płciowej:</strong>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activePrimate.description}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
