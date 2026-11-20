import React, { useState } from 'react';
import { HominidSpecies, PairwiseComparisonData } from '../../types';
import { getPairwiseComparison } from '../../data/speciesPairwiseData';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { ArrowLeftRight, Utensils, Compass, Trophy, Dna, Flame, Activity, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface SpeciesPairwiseLabProps {
  speciesList: HominidSpecies[];
  speciesIdA: string;
  speciesIdB: string;
  onSelectSpeciesA: (id: string) => void;
  onSelectSpeciesB: (id: string) => void;
}

export const SpeciesPairwiseLab: React.FC<SpeciesPairwiseLabProps> = ({
  speciesList,
  speciesIdA,
  speciesIdB,
  onSelectSpeciesA,
  onSelectSpeciesB
}) => {
  const [activePanel, setActivePanel] = useState<'panelA' | 'panelB' | 'panelC' | 'panelD'>('panelA');

  const spA = speciesList.find(s => s.id === speciesIdA) || speciesList[7]; // Neanderthal default
  const spB = speciesList.find(s => s.id === speciesIdB) || speciesList[9]; // Sapiens default

  const comparison: PairwiseComparisonData = getPairwiseComparison(spA.id, spB.id);

  const panels = [
    { id: 'panelA', label: 'Panel A: Ekologia Dnia Codziennego', icon: <Utensils className="w-4 h-4" /> },
    { id: 'panelB', label: 'Panel B: Czas i Przestrzeń Spotkania', icon: <Compass className="w-4 h-4" /> },
    { id: 'panelC', label: 'Panel C: Mechanizmy Wyparcia & Przewaga', icon: <Trophy className="w-4 h-4" /> },
    { id: 'panelD', label: 'Panel D: Paleogenetyka aDNA & Introgresja', icon: <Dna className="w-4 h-4" /> }
  ];

  return (
    <section aria-label="Zaawansowane laboratorium komparatystyki hominidów" className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      
      {/* Header and Selectors */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-surface-border pb-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-serif font-bold text-lg md:text-xl text-slate-100 flex items-center gap-2">
              <ArrowLeftRight className="w-5 h-5 text-amber-400" />
              <span>Laboratorium Komparatystyki Gatunków Hominidów (4 Panele)</span>
            </h3>
            <ConfidenceBadge level={comparison.confidenceLevel} size="sm" />
          </div>
          <p className="text-xs text-amber-400/90 font-mono mt-0.5">
            {comparison.title} • {comparison.subtitle}
          </p>
        </div>

        {/* Species Selectors */}
        <div className="flex items-center gap-2.5 w-full lg:w-auto">
          <select
            value={spA.id}
            onChange={e => onSelectSpeciesA(e.target.value)}
            className="flex-1 lg:w-52 bg-obsidian-200 border border-amber-500/50 rounded-lg px-3 py-2 text-xs font-mono text-amber-300 focus:outline-none focus:border-amber-400"
          >
            {speciesList.map(s => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.brainCapacityCm3.avg} cm³)
              </option>
            ))}
          </select>

          <span className="text-slate-500 font-mono text-xs font-bold px-1">VS</span>

          <select
            value={spB.id}
            onChange={e => onSelectSpeciesB(e.target.value)}
            className="flex-1 lg:w-52 bg-obsidian-200 border border-cyan-500/50 rounded-lg px-3 py-2 text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
          >
            {speciesList.map(s => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.brainCapacityCm3.avg} cm³)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
        {panels.map(p => {
          const isActive = activePanel === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActivePanel(p.id as any)}
              className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border text-center transition-all ${
                isActive
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500 font-bold shadow-glow-terracotta'
                  : 'bg-obsidian-200 text-slate-400 hover:text-slate-200 hover:bg-surface border-surface-border'
              }`}
            >
              {p.icon}
              <span className="truncate">{p.label}</span>
            </button>
          );
        })}
      </div>

      {/* PANEL CONTENT */}

      {/* PANEL A: Daily Ecology Side-by-Side */}
      {activePanel === 'panelA' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
          
          {/* Species A Column */}
          <div className="p-4 md:p-5 rounded-xl bg-obsidian-200/90 border border-amber-500/40 flex flex-col gap-4">
            <div className="border-b border-surface-border pb-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">Gatunek A</span>
                <h4 className="font-serif font-bold text-lg text-amber-200 italic">{spA.name}</h4>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-surface-border text-slate-300">
                {spA.brainCapacityCm3.avg} cm³
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-2.5 rounded bg-surface/70 border border-surface-border">
                <span className="text-amber-400 font-mono font-bold block text-[11px] mb-1 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  Zapotrzebowanie Kaloryczne:
                </span>
                <p className="text-slate-200 leading-relaxed">{comparison.dailyEcology.speciesA.dailyCaloriesKcal}</p>
              </div>

              <div className="p-2.5 rounded bg-surface/70 border border-surface-border">
                <span className="text-amber-400 font-mono font-bold block text-[11px] mb-1 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-amber-400" />
                  Strategie Łowieckie & Profil Diety:
                </span>
                <p className="text-slate-200 leading-relaxed">{comparison.dailyEcology.speciesA.huntingAndDietDetail}</p>
              </div>

              <div className="p-2.5 rounded bg-surface/70 border border-surface-border">
                <span className="text-amber-400 font-mono font-bold block text-[11px] mb-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  Schronienie & Mobilność:
                </span>
                <p className="text-slate-200 leading-relaxed">{comparison.dailyEcology.speciesA.shelterAndMobility}</p>
              </div>

              <div className="p-2.5 rounded bg-surface/70 border border-surface-border">
                <span className="text-amber-400 font-mono font-bold block text-[11px] mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  Dzieciństwo & Długość Życia:
                </span>
                <p className="text-slate-200 leading-relaxed">{comparison.dailyEcology.speciesA.childhoodAndLifespan}</p>
              </div>

              <div className="p-2.5 rounded bg-surface/70 border border-surface-border">
                <span className="text-amber-400 font-mono font-bold block text-[11px] mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  Wzorce Urazów Szkieletowych (Traumatologia):
                </span>
                <p className="text-slate-200 leading-relaxed">{comparison.dailyEcology.speciesA.skeletalTraumaPattern}</p>
              </div>
            </div>
          </div>

          {/* Species B Column */}
          <div className="p-4 md:p-5 rounded-xl bg-obsidian-200/90 border border-cyan-500/40 flex flex-col gap-4">
            <div className="border-b border-surface-border pb-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">Gatunek B</span>
                <h4 className="font-serif font-bold text-lg text-cyan-200 italic">{spB.name}</h4>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-surface-border text-slate-300">
                {spB.brainCapacityCm3.avg} cm³
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-2.5 rounded bg-surface/70 border border-surface-border">
                <span className="text-cyan-400 font-mono font-bold block text-[11px] mb-1 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-cyan-400" />
                  Zapotrzebowanie Kaloryczne:
                </span>
                <p className="text-slate-200 leading-relaxed">{comparison.dailyEcology.speciesB.dailyCaloriesKcal}</p>
              </div>

              <div className="p-2.5 rounded bg-surface/70 border border-surface-border">
                <span className="text-cyan-400 font-mono font-bold block text-[11px] mb-1 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-cyan-400" />
                  Strategie Łowieckie & Profil Diety:
                </span>
                <p className="text-slate-200 leading-relaxed">{comparison.dailyEcology.speciesB.huntingAndDietDetail}</p>
              </div>

              <div className="p-2.5 rounded bg-surface/70 border border-surface-border">
                <span className="text-cyan-400 font-mono font-bold block text-[11px] mb-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  Schronienie & Mobilność:
                </span>
                <p className="text-slate-200 leading-relaxed">{comparison.dailyEcology.speciesB.shelterAndMobility}</p>
              </div>

              <div className="p-2.5 rounded bg-surface/70 border border-surface-border">
                <span className="text-cyan-400 font-mono font-bold block text-[11px] mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  Dzieciństwo & Długość Życia:
                </span>
                <p className="text-slate-200 leading-relaxed">{comparison.dailyEcology.speciesB.childhoodAndLifespan}</p>
              </div>

              <div className="p-2.5 rounded bg-surface/70 border border-surface-border">
                <span className="text-cyan-400 font-mono font-bold block text-[11px] mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
                  Wzorce Urazów Szkieletowych (Traumatologia):
                </span>
                <p className="text-slate-200 leading-relaxed">{comparison.dailyEcology.speciesB.skeletalTraumaPattern}</p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* PANEL B: Spatiotemporal Encounter & Overlap */}
      {activePanel === 'panelB' && (
        <div className="p-5 rounded-xl bg-obsidian-200/90 border border-surface-border flex flex-col gap-5 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-surface-border pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Status Relacji Przestrzenno-Czasowej</span>
              <h4 className="font-serif font-bold text-lg text-slate-100">{comparison.spatiotemporalEncounter.coexistenceLabel}</h4>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              {comparison.spatiotemporalEncounter.datingOverlap}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-surface border border-surface-border space-y-2">
              <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider block">
                Kluczowe Strefy Geograficzne:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-200 font-sans">
                {comparison.spatiotemporalEncounter.keyGeographicZones.map((zone, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{zone}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-surface border border-surface-border space-y-2">
              <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider block">
                Stanowiska Archeologiczne Kontaktu:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-200 font-mono">
                {comparison.spatiotemporalEncounter.archaeologicalSites.map((site, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{site}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-surface/80 border border-surface-border space-y-1.5">
            <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider block">
              Narracja Archeologiczna i Dynamika Spotkania:
            </span>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              {comparison.spatiotemporalEncounter.encounterNarrative}
            </p>
          </div>
        </div>
      )}

      {/* PANEL C: Displacement Mechanisms & Selective Advantage */}
      {activePanel === 'panelC' && (
        <div className="p-5 rounded-xl bg-obsidian-200/90 border border-surface-border flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="border-b border-surface-border pb-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">Wiodąca Hipoteza Przewagi Selekcyjnej</span>
            <h4 className="font-serif font-bold text-lg text-slate-100">{comparison.displacementMechanisms.primaryHypothesis}</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-surface border border-surface-border space-y-1">
              <span className="text-amber-400 font-mono font-bold block text-[11px]">1. Gęstość Demograficzna:</span>
              <p className="text-slate-300 leading-relaxed">{comparison.displacementMechanisms.demographicDensity}</p>
            </div>

            <div className="p-3.5 rounded-lg bg-surface border border-surface-border space-y-1">
              <span className="text-cyan-400 font-mono font-bold block text-[11px]">2. Sieci Handlowe i Surowcowe:</span>
              <p className="text-slate-300 leading-relaxed">{comparison.displacementMechanisms.tradeAndMaterialNetworks}</p>
            </div>

            <div className="p-3.5 rounded-lg bg-surface border border-surface-border space-y-1">
              <span className="text-rose-400 font-mono font-bold block text-[11px]">3. Koszt Klimatyczno-Energetyczny:</span>
              <p className="text-slate-300 leading-relaxed">{comparison.displacementMechanisms.climaticEnergeticCost}</p>
            </div>

            <div className="p-3.5 rounded-lg bg-surface border border-surface-border space-y-1">
              <span className="text-emerald-400 font-mono font-bold block text-[11px]">4. Szerokość Spektrum Dietetycznego:</span>
              <p className="text-slate-300 leading-relaxed">{comparison.displacementMechanisms.dietaryBroadness}</p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-surface border border-purple-500/30 space-y-1 text-xs">
            <span className="text-purple-300 font-mono font-bold block text-[11px]">5. Kohezja Społeczna, Samoudomowienie i Alloparenting:</span>
            <p className="text-slate-200 leading-relaxed">{comparison.displacementMechanisms.socialCohesionAndDomestication}</p>
          </div>
        </div>
      )}

      {/* PANEL D: Genetic Legacy & aDNA Introgression */}
      {activePanel === 'panelD' && (
        <div className="p-5 rounded-xl bg-obsidian-200/90 border border-surface-border flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-surface-border pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-modern-cyan font-bold">Wskaźnik Introgresji Genomowej</span>
              <h4 className="font-serif font-bold text-lg text-slate-100">{comparison.geneticLegacy.introgressionRate}</h4>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {comparison.geneticLegacy.keyGenesIdentified.map((gene, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-bold">
                  {gene}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-surface border border-surface-border space-y-2 text-xs">
            <span className="text-emerald-400 font-mono font-bold uppercase tracking-wider block">
              Przejęte Cechy Adaptacyjne u Współczesnego Człowieka:
            </span>
            <ul className="space-y-1.5 text-slate-200">
              {comparison.geneticLegacy.introgressedTraits.map((trait, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-lg bg-surface border border-rose-500/30 space-y-1">
              <span className="text-rose-400 font-mono font-bold block text-[11px]">
                Reguła Haldane’a & Pustynie Introgresji:
              </span>
              <p className="text-slate-300 leading-relaxed">
                {comparison.geneticLegacy.hybridFitnessAndInfertility}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-surface border border-amber-500/30 space-y-1">
              <span className="text-amber-300 font-mono font-bold block text-[11px]">
                Stan Wiedzy Paleogenetyki Kopalnej:
              </span>
              <p className="text-slate-300 leading-relaxed font-sans">
                {comparison.geneticLegacy.paleogeneticSummary}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
