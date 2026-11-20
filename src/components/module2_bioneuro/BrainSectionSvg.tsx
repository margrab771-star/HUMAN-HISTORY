import React, { useState } from 'react';
import { BRAIN_STRUCTURES } from '../../data/bioNeuroData';
import { BrainStructure } from '../../types';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { Brain, Sparkles, UserCheck, Activity } from 'lucide-react';

export const BrainSectionSvg: React.FC = () => {
  const [selectedStructureId, setSelectedStructureId] = useState<string>('vens-insula-acc');
  const [hoveredStructureId, setHoveredStructureId] = useState<string | null>(null);

  const selectedStructure: BrainStructure = BRAIN_STRUCTURES.find(b => b.id === selectedStructureId) || BRAIN_STRUCTURES[0];

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      
      {/* Title */}
      <div className="border-b border-surface-border pb-3">
        <h3 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
          <Brain className="w-5 h-5 text-bioneuro-emerald" />
          <span>Interaktywny Przekrój Mózgu SVG (8 Węzłów Neurokognitywnych)</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Kliknij dowolny hotspot lub strukturę na liście, aby przeanalizować rozdźwięk (mismatch) między funkcją w plejstocenie a wyzwaniami późnego kapitalizmu i ery AI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Interactive Brain SVG Canvas (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-3 rounded-xl bg-obsidian-300 border border-surface-border relative">
          
          <svg
            viewBox="0 0 760 520"
            className="w-full max-w-[680px] h-auto select-none"
          >
            <defs>
              <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0A0C10" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="cortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
            </defs>

            {/* Background Glow */}
            <circle cx="380" cy="260" r="240" fill="url(#brainGlow)" />

            {/* Stylized Medial Sagittal Brain Outline */}
            {/* Cerebrum Outer Contour */}
            <path
              d="M 200 320 
                 C 150 280, 150 200, 220 140 
                 C 290 80, 420 80, 520 120 
                 C 620 160, 650 240, 620 320 
                 C 600 360, 560 390, 520 400 
                 C 510 390, 490 380, 470 385 
                 C 450 390, 430 420, 420 470 
                 C 400 480, 370 480, 360 450 
                 C 350 410, 360 380, 340 370 
                 C 300 370, 260 370, 220 350 Z"
              fill="url(#cortexGrad)"
              stroke="#334155"
              strokeWidth="2.5"
            />

            {/* Corpus Callosum (Ciało Modzelowate) Arch */}
            <path
              d="M 310 260 C 320 200, 460 200, 490 260 C 470 240, 330 240, 310 260 Z"
              fill="#475569"
              opacity="0.8"
            />

            {/* Cerebellum (Móżdżek) */}
            <path
              d="M 520 360 C 580 360, 610 420, 550 450 C 500 470, 470 420, 520 360 Z"
              fill="#1E293B"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <text x="545" y="420" fill="#64748B" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">
              Cerebellum
            </text>

            {/* Brainstem (Pień mózgu) */}
            <path
              d="M 420 370 L 415 470 L 375 470 L 380 370 Z"
              fill="#334155"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <text x="395" y="435" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
              Truncus
            </text>

            {/* Thalamus / Diencephalon center */}
            <ellipse cx="400" cy="275" rx="35" ry="25" fill="#182234" stroke="#475569" strokeWidth="1" />

            {/* Clickable Interactive Hotspots for the 8 Structures */}
            {BRAIN_STRUCTURES.map(st => {
              const isSelected = selectedStructureId === st.id;
              const isHovered = hoveredStructureId === st.id;
              const { cx, cy, r, labelX, labelY } = st.svgCoordinates;

              return (
                <g
                  key={st.id}
                  className="cursor-pointer"
                  onClick={() => setSelectedStructureId(st.id)}
                  onMouseEnter={() => setHoveredStructureId(st.id)}
                  onMouseLeave={() => setHoveredStructureId(null)}
                >
                  {/* Pulsing ring for selected */}
                  {isSelected && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={r + 10}
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                      opacity="0.6"
                      strokeDasharray="4,4"
                      className="animate-spin"
                      style={{ transformOrigin: `${cx}px ${cy}px` }}
                    />
                  )}

                  {/* Hotspot Outer Circle */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={isSelected ? '#10B981' : isHovered ? '#34D399' : '#0F766E'}
                    fillOpacity={isSelected ? 0.75 : isHovered ? 0.6 : 0.35}
                    stroke={isSelected ? '#FFFFFF' : isHovered ? '#34D399' : '#14B8A6'}
                    strokeWidth={isSelected ? '2.5' : '1.5'}
                    className="transition-all duration-200"
                  />

                  {/* Inner Target Dot */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill={isSelected ? '#FFFFFF' : '#10B981'}
                  />

                  {/* Connecting Line to External Label */}
                  <line
                    x1={cx}
                    y1={cy}
                    x2={labelX}
                    y2={labelY}
                    stroke={isSelected ? '#10B981' : '#475569'}
                    strokeWidth={isSelected ? '1.5' : '1'}
                    strokeDasharray={isSelected ? 'none' : '2,2'}
                  />

                  {/* Label Box */}
                  <rect
                    x={labelX < cx ? labelX - 110 : labelX}
                    y={labelY - 10}
                    width="115"
                    height="20"
                    rx="3"
                    fill={isSelected ? '#064E3B' : isHovered ? '#1E293B' : '#0F172A'}
                    stroke={isSelected ? '#10B981' : '#334155'}
                    strokeWidth="1"
                  />
                  <text
                    x={labelX < cx ? labelX - 52 : labelX + 58}
                    y={labelY + 4}
                    fill={isSelected ? '#34D399' : '#CBD5E1'}
                    fontSize="9.5"
                    fontFamily="JetBrains Mono"
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    textAnchor="middle"
                  >
                    {st.latinName.split('&')[0].split('(')[0].trim().substring(0, 17)}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick Selection Pills underneath SVG */}
          <div className="w-full flex flex-wrap gap-1.5 mt-3 justify-center">
            {BRAIN_STRUCTURES.map(st => (
              <button
                key={st.id}
                onClick={() => setSelectedStructureId(st.id)}
                className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
                  selectedStructureId === st.id
                    ? 'bg-bioneuro-emerald/25 text-bioneuro-mint border-bioneuro-emerald font-semibold shadow-glow-emerald'
                    : 'bg-surface text-slate-400 border-surface-border hover:border-slate-500'
                }`}
              >
                {st.name.split('(')[0].trim().substring(0, 22)}...
              </button>
            ))}
          </div>

        </div>

        {/* Right Column: Deep Neuro-Evolutionary Analysis Panel (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          <div className="p-4 rounded-xl bg-obsidian-200 border border-bioneuro-emerald/40 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2 border-b border-surface-border pb-2">
              <div>
                <h4 className="font-serif font-bold text-base text-slate-100">
                  {selectedStructure.name}
                </h4>
                <p className="text-xs text-bioneuro-mint font-mono italic">
                  {selectedStructure.latinName}
                </p>
              </div>
              <ConfidenceBadge level={selectedStructure.confidenceLevel} size="sm" />
            </div>

            <div className="text-xs text-slate-300 space-y-1">
              <p><strong className="text-slate-200 font-mono text-[11px]">Lokalizacja anatomiczna:</strong> {selectedStructure.anatomicalLocation}</p>
              <p><strong className="text-slate-200 font-mono text-[11px]">Geneza ewolucyjna:</strong> {selectedStructure.evolutionaryOrigin}</p>
              <p><strong className="text-slate-200 font-mono text-[11px]">Główna funkcja:</strong> {selectedStructure.primaryFunction}</p>
            </div>

            {/* Pleistocene vs Digital & AI Era Comparison */}
            <div className="space-y-2 pt-2 border-t border-surface-border text-xs">
              
              {/* Pleistocene */}
              <div className="p-3 rounded-lg bg-surface border border-pleisto-terracotta/30">
                <span className="text-pleisto-ochre font-mono text-[11px] font-bold block mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  ŚRODOWISKO PIERWOTNE (PLEJSTOCEN):
                </span>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {selectedStructure.pleistoceneContext}
                </p>
              </div>

              {/* Digital & AI Era Mismatch */}
              <div className="p-3 rounded-lg bg-surface border border-modern-cyan/30">
                <span className="text-modern-cyan font-mono text-[11px] font-bold block mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  ROZDŹWIĘK WSPÓŁCZESNY (KAPITALIZM, SMARTFON & AI):
                </span>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {selectedStructure.digitalAndAiEraMismatch}
                </p>
              </div>

            </div>

            {/* Neurotransmitters & Researchers */}
            <div className="pt-2 border-t border-surface-border flex flex-col gap-2 text-xs">
              <div>
                <span className="text-slate-400 font-mono text-[10px] block mb-1">Powiązane neuroprzekaźniki:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStructure.associatedNeurotransmitters.map((nt, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-full bg-surface-border text-[10px] font-mono text-emerald-300">
                      {nt}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono">
                <UserCheck className="w-3.5 h-3.5 text-slate-500" />
                <span>Kluczowi badacze: </span>
                <span className="text-slate-200">{selectedStructure.keyResearchers.join(', ')}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
