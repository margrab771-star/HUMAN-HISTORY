import React from 'react';
import { HominidSpecies } from '../../types';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { ArrowLeftRight, Brain, Users, Wrench, HeartHandshake, Dna, Skull } from 'lucide-react';

interface SpeciesComparerProps {
  speciesList: HominidSpecies[];
  speciesIdA: string;
  speciesIdB: string;
  onSelectSpeciesA: (id: string) => void;
  onSelectSpeciesB: (id: string) => void;
}

export const SpeciesComparer: React.FC<SpeciesComparerProps> = ({
  speciesList,
  speciesIdA,
  speciesIdB,
  onSelectSpeciesA,
  onSelectSpeciesB
}) => {
  const spA = speciesList.find(s => s.id === speciesIdA) || speciesList[7]; // default Neanderthal
  const spB = speciesList.find(s => s.id === speciesIdB) || speciesList[9]; // default Sapiens

  const maxBrain = 1800;
  const maxGroup = 160;

  return (
    <section aria-label="Porównywarka gatunków" className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      
      {/* Header with Selector Dropdowns */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-surface-border pb-4">
        <div>
          <h3 className="font-serif font-bold text-lg text-slate-100 flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-pleisto-ochre" />
            <span>Interaktywna Porównywarka 2 Gatunków Hominidów</span>
          </h3>
          <p className="text-xs text-slate-400">
            Zestawienie parametrów allometrycznych, sieci społecznych, archeologii empatii i śladów hybrydyzacji paleogenetycznej.
          </p>
        </div>

        {/* Dropdown Selectors */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Select A */}
          <select
            value={spA.id}
            onChange={e => onSelectSpeciesA(e.target.value)}
            className="flex-1 md:w-56 bg-obsidian-200 border border-surface-border rounded-lg px-3 py-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-amber-400"
          >
            {speciesList.map(s => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.brainCapacityCm3.avg} cm³)
              </option>
            ))}
          </select>

          <span className="text-slate-500 font-mono text-xs font-bold">VS</span>

          {/* Select B */}
          <select
            value={spB.id}
            onChange={e => onSelectSpeciesB(e.target.value)}
            className="flex-1 md:w-56 bg-obsidian-200 border border-surface-border rounded-lg px-3 py-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-bioneuro-emerald"
          >
            {speciesList.map(s => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.brainCapacityCm3.avg} cm³)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Visual Bar Charts: Brain Volume & Group Size */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Brain Volume Comparison */}
        <div className="p-4 rounded-lg bg-obsidian-200 border border-surface-border flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5 font-mono">
              <Brain className="w-4 h-4 text-bioneuro-mint" />
              Objętość Mózgoczaszki (Średnia w cm³)
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Max referencyjne: 1800 cm³</span>
          </div>

          {/* Bar A */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-amber-400 font-medium truncate max-w-[180px]">{spA.name}</span>
              <span className="text-white font-bold">{spA.brainCapacityCm3.avg} cm³ <span className="text-[10px] text-slate-400 font-normal">({spA.brainCapacityCm3.min}–{spA.brainCapacityCm3.max})</span></span>
            </div>
            <div className="w-full h-3 bg-surface rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${(spA.brainCapacityCm3.avg / maxBrain) * 100}%` }}
              />
            </div>
          </div>

          {/* Bar B */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-bioneuro-mint font-medium truncate max-w-[180px]">{spB.name}</span>
              <span className="text-white font-bold">{spB.brainCapacityCm3.avg} cm³ <span className="text-[10px] text-slate-400 font-normal">({spB.brainCapacityCm3.min}–{spB.brainCapacityCm3.max})</span></span>
            </div>
            <div className="w-full h-3 bg-surface rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 to-bioneuro-emerald rounded-full transition-all duration-500"
                style={{ width: `${(spB.brainCapacityCm3.avg / maxBrain) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Group Size Comparison */}
        <div className="p-4 rounded-lg bg-obsidian-200 border border-surface-border flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5 font-mono">
              <Users className="w-4 h-4 text-modern-cyan" />
              Szacowana Wielkość Grupy Społecznej (Kohorty Dunbara)
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Max: 150 osób</span>
          </div>

          {/* Group Bar A */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-amber-400 font-medium truncate max-w-[180px]">{spA.name}</span>
              <span className="text-white font-bold">{spA.estimatedGroupSize.min}–{spA.estimatedGroupSize.max} osobników</span>
            </div>
            <div className="w-full h-3 bg-surface rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${(spA.estimatedGroupSize.max / maxGroup) * 100}%` }}
              />
            </div>
          </div>

          {/* Group Bar B */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-bioneuro-mint font-medium truncate max-w-[180px]">{spB.name}</span>
              <span className="text-white font-bold">{spB.estimatedGroupSize.min}–{spB.estimatedGroupSize.max} osobników</span>
            </div>
            <div className="w-full h-3 bg-surface rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-600 to-modern-cyan rounded-full transition-all duration-500"
                style={{ width: `${(spB.estimatedGroupSize.max / maxGroup) * 100}%` }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Deep Side-by-Side Comparison Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        
        {/* Column Species A */}
        <div className="p-4 rounded-xl bg-surface border border-amber-500/40 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-surface-border pb-2">
            <div>
              <h4 className="font-serif font-bold text-base text-amber-300 italic">{spA.name}</h4>
              <p className="text-[11px] text-slate-400">{spA.commonName}</p>
            </div>
            <ConfidenceBadge level={spA.confidenceLevel} size="sm" />
          </div>

          {/* Tool Industry */}
          <div>
            <span className="text-slate-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1 mb-1">
              <Wrench className="w-3.5 h-3.5 text-pleisto-ochre" />
              Kultura Techniczna i Narzędzia
            </span>
            <p className="text-slate-200">{spA.toolIndustry}</p>
          </div>

          {/* Boundary behaviors (Care vs violence) */}
          <div>
            <span className="text-slate-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1 mb-1">
              <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
              Opieka nad Rannymi vs. Przemoc
            </span>
            <p className="text-slate-200 mb-1"><strong>Troska:</strong> {spA.boundaryBehaviors.careDescription}</p>
            <p className="text-slate-300 text-[11px]"><strong>Przemoc:</strong> {spA.boundaryBehaviors.violenceAndCooperation}</p>
            <p className="text-[10px] font-mono text-amber-300/80 mt-1">Dowód: {spA.boundaryBehaviors.keyFossilEvidence}</p>
          </div>

          {/* Paleogenetics */}
          <div>
            <span className="text-slate-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1 mb-1">
              <Dna className="w-3.5 h-3.5 text-modern-cyan" />
              Paleogenetyka i Hybrydyzacja
            </span>
            <p className="text-slate-200 text-[11px]">{spA.paleogeneticsAndHybridization}</p>
          </div>

          {/* Extinction / Fate */}
          <div>
            <span className="text-slate-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1 mb-1">
              <Skull className="w-3.5 h-3.5 text-slate-400" />
              Hipoteza Wymarcia lub Losu
            </span>
            <p className="text-slate-200 text-[11px]">{spA.extinctionOrFateHypothesis}</p>
          </div>
        </div>

        {/* Column Species B */}
        <div className="p-4 rounded-xl bg-surface border border-bioneuro-emerald/40 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-surface-border pb-2">
            <div>
              <h4 className="font-serif font-bold text-base text-bioneuro-mint italic">{spB.name}</h4>
              <p className="text-[11px] text-slate-400">{spB.commonName}</p>
            </div>
            <ConfidenceBadge level={spB.confidenceLevel} size="sm" />
          </div>

          {/* Tool Industry */}
          <div>
            <span className="text-slate-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1 mb-1">
              <Wrench className="w-3.5 h-3.5 text-pleisto-ochre" />
              Kultura Techniczna i Narzędzia
            </span>
            <p className="text-slate-200">{spB.toolIndustry}</p>
          </div>

          {/* Boundary behaviors (Care vs violence) */}
          <div>
            <span className="text-slate-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1 mb-1">
              <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
              Opieka nad Rannymi vs. Przemoc
            </span>
            <p className="text-slate-200 mb-1"><strong>Troska:</strong> {spB.boundaryBehaviors.careDescription}</p>
            <p className="text-slate-300 text-[11px]"><strong>Przemoc:</strong> {spB.boundaryBehaviors.violenceAndCooperation}</p>
            <p className="text-[10px] font-mono text-bioneuro-mint/80 mt-1">Dowód: {spB.boundaryBehaviors.keyFossilEvidence}</p>
          </div>

          {/* Paleogenetics */}
          <div>
            <span className="text-slate-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1 mb-1">
              <Dna className="w-3.5 h-3.5 text-modern-cyan" />
              Paleogenetyka i Hybrydyzacja
            </span>
            <p className="text-slate-200 text-[11px]">{spB.paleogeneticsAndHybridization}</p>
          </div>

          {/* Extinction / Fate */}
          <div>
            <span className="text-slate-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1 mb-1">
              <Skull className="w-3.5 h-3.5 text-slate-400" />
              Hipoteza Wymarcia lub Losu
            </span>
            <p className="text-slate-200 text-[11px]">{spB.extinctionOrFateHypothesis}</p>
          </div>
        </div>

      </div>

    </section>
  );
};
