import React, { useState } from 'react';
import { TRAIT_TRANSFORMATION_PATHS } from '../../data/traitContextMatrixData';
import { EpochId, TraitTransformationPath } from '../../types';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { EpochSliderGaugeSvg } from './EpochSliderGaugeSvg';
import { ContemporarySelectionPanel } from './ContemporarySelectionPanel';
import { ContemporaryAutopsySection } from './ContemporaryAutopsySection';
import { Layers, Sliders, Anchor, Sparkles, Brain, UserCheck, Shield, Landmark } from 'lucide-react';

interface Module5MatrixProps {
  globalXRayMode: boolean;
  selectedTraitId?: string;
}

export const Module5Matrix: React.FC<Module5MatrixProps> = ({
  globalXRayMode: _globalXRayMode,
  selectedTraitId: externalTraitId
}) => {
  const [activeTraitId, setActiveTraitId] = useState<string>(
    externalTraitId || TRAIT_TRANSFORMATION_PATHS[0].id
  );
  const [activeEpoch, setActiveEpoch] = useState<EpochId>('late_capitalism');

  const currentTrait: TraitTransformationPath =
    TRAIT_TRANSFORMATION_PATHS.find(t => t.id === activeTraitId) ||
    TRAIT_TRANSFORMATION_PATHS[0];

  const currentEpochState = currentTrait.epochs[activeEpoch];

  const epochsList: { id: EpochId; label: string; short: string; timeframe: string }[] = [
    { id: 'pleistocene', label: '1. Plejstocen', short: 'Plejstocen', timeframe: '2,58 mln – 11,7 tys. lat temu' },
    { id: 'neolithic', label: '2. Rewolucja Neolityczna', short: 'Neolit', timeframe: '10 – 3,5 tys. lat p.n.e.' },
    { id: 'antiquity', label: '3. Antyk & Epoka Osiowa', short: 'Antyk & Osiowa', timeframe: '3000 p.n.e. – XV w. n.e.' },
    { id: 'industrial', label: '4. Era Przemysłowa & Miasto', short: 'Przemysłowa', timeframe: 'XVIII – XX w.' },
    { id: 'late_capitalism', label: '5. Era Postindustrialna & AI', short: 'Cyfrowa', timeframe: 'XXI wiek' },
    { id: 'forecast_2050', label: '6. Horyzont 2050+', short: 'Prognoza 2050+', timeframe: 'Przyszłość' },
  ];

  const getPlasticityBadge = (level: string) => {
    switch (level) {
      case 'ultrakonserwatywna':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      case 'umiarkowanie_konserwatywna':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'plastyczna':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'hiperplastyczna':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      default:
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      
      {/* Editorial Intro */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
          <Layers className="w-4 h-4" />
          <span>MODUŁ 5: INTEGRACJA PIONOWA & EWOLUCJA KONTEKSTU</span>
        </div>
        <h2 className="font-serif font-black text-2xl md:text-3xl lg:text-4xl text-slate-100 tracking-tight">
          Matryca „Stała Cecha × Obrót Kontekstu”
        </h2>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed font-sans">
          Niezmienny rdzeń biologiczny człowieka w zderzeniu ze zmieniającymi się niszami cywilizacyjnymi. Wybierz jedną z 12 ścieżek ewolucyjnych i przesuwaj suwak przez 6 epok społeczno-gospodarczych, obserwując dynamiczną zmianę hamulców społecznych, premii statusowej oraz kosztów zdrowia psychicznego.
        </p>
      </div>

      {/* Trait Selector Pills */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
          Wybierz cechę do transformacji kontekstowej (12 ścieżek):
        </span>
        <div className="flex flex-wrap gap-1.5">
          {TRAIT_TRANSFORMATION_PATHS.map(t => {
            const isSelected = activeTraitId === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTraitId(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  isSelected
                    ? 'bg-purple-500/25 text-purple-200 border-purple-400 font-bold shadow-sm'
                    : 'bg-surface text-slate-400 hover:text-slate-200 border-surface-border hover:border-slate-600'
                }`}
              >
                {t.traitName.split(':')[0].split('(')[0].substring(0, 28)}
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION A: THE 5-EPOCH INTERACTIVE SLIDER ENGINE */}
      <div className="p-4 md:p-6 rounded-xl bg-surface border border-surface-border shadow-xl flex flex-col gap-6">
        
        {/* Trait Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-surface-border pb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif font-bold text-xl md:text-2xl text-slate-100">
                {currentTrait.traitName}
              </h3>
              <ConfidenceBadge level={currentTrait.confidenceLevel} size="sm" />
              {currentTrait.plasticityIndex && (
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-bold flex items-center gap-1 ${getPlasticityBadge(currentTrait.plasticityIndex.level)}`}>
                  <Shield className="w-3 h-3" />
                  <span>Plastyczność: {currentTrait.plasticityIndex.label}</span>
                </span>
              )}
            </div>
            <p className="text-xs text-purple-300 font-medium mt-0.5">
              {currentTrait.subtitle}
            </p>
          </div>
        </div>

        {/* 6-Epoch Professional Interactive Slider Bar */}
        <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 font-bold text-slate-200">
              <Sliders className="w-4 h-4 text-purple-400" />
              SUWAK 6 EPOK SPOŁECZNO-GOSPODARCZYCH:
            </span>
            <span className="text-purple-300 font-bold">
              Aktywna: {currentEpochState.epochName}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 items-stretch">
            {epochsList.map(ep => {
              const isActive = activeEpoch === ep.id;
              return (
                <button
                  key={ep.id}
                  onClick={() => setActiveEpoch(ep.id)}
                  className={`p-3 rounded-lg border text-left transition-all h-full flex flex-col justify-between gap-1.5 ${
                    isActive
                      ? 'bg-purple-600/30 text-white border-purple-400 shadow-md ring-1 ring-purple-400/50'
                      : 'bg-surface hover:bg-surface-hover border-surface-border text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className={`text-xs font-serif font-bold ${isActive ? 'text-purple-200' : 'text-slate-300'}`}>
                    {ep.label}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 pt-1 border-t border-surface-border/40">
                    {ep.timeframe}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Three-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs leading-relaxed text-slate-300">
          
          {/* Left Column: Biological Anchor (3 cols) */}
          <div className="lg:col-span-3 p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3">
            <div className="flex items-center gap-2 text-pleisto-ochre font-mono font-bold text-xs border-b border-surface-border pb-2">
              <Anchor className="w-4 h-4 text-pleisto-ochre" />
              <span>NIEZMIENNA KOTWICA BIOLOGICZNA</span>
            </div>

            <div>
              <strong className="text-slate-200 font-sans block mb-1">Rdzeń temperamentalny:</strong>
              <p className="text-slate-300 text-[11px]">{currentTrait.biologicalAnchor}</p>
            </div>

            <div className="pt-2 border-t border-surface-border">
              <strong className="text-bioneuro-mint font-sans block mb-1 flex items-center gap-1">
                <Brain className="w-3.5 h-3.5" />
                Substrat neurobiologiczny:
              </strong>
              <p className="text-slate-300 text-[11px]">{currentTrait.bioNeuroSubstrate}</p>
            </div>

            {currentTrait.plasticityIndex && (
              <div className="pt-2 border-t border-surface-border">
                <strong className="text-purple-300 font-mono text-[10px] uppercase font-bold block mb-0.5">
                  Podłoże wskaźnika plastyczności:
                </strong>
                <p className="text-slate-400 text-[10px]">
                  {currentTrait.plasticityIndex.description}
                </p>
              </div>
            )}

            <div className="mt-auto pt-2 border-t border-surface-border text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>Autorzy: {currentTrait.keyResearchers.join(', ')}</span>
            </div>
          </div>

          {/* Middle Column: Epoch Context & Gauges (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            <div className="p-4 rounded-xl bg-obsidian-200 border border-purple-500/40 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2 border-b border-surface-border pb-2">
                <div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block">
                    Kontekst historyczno-ekonomiczny:
                  </span>
                  <h4 className="font-serif font-bold text-base text-slate-100">
                    {currentEpochState.epochName} <span className="text-xs text-slate-400 font-mono">({currentEpochState.timeframe})</span>
                  </h4>
                </div>
              </div>

              <div>
                <strong className="text-slate-200 font-mono text-[11px] block mb-0.5">Środowisko społeczne:</strong>
                <p className="text-slate-300 text-[11px]">{currentEpochState.socialSetting}</p>
              </div>

              <div>
                <strong className="text-slate-200 font-mono text-[11px] block mb-0.5">Ekspresja fenotypu:</strong>
                <p className="text-slate-300 text-[11px]">{currentEpochState.phenotypeExpression}</p>
              </div>

              <div className="pt-1">
                <strong className="text-slate-200 font-mono text-[11px] block mb-0.5">Mechanizm systemowy:</strong>
                <p className="text-slate-300 text-[11px] italic bg-surface p-2.5 rounded border border-surface-border">
                  {currentEpochState.systemicMechanism}
                </p>
              </div>

              {/* Concrete Empirical Examples for Active Epoch */}
              {currentEpochState.empiricalExamples && currentEpochState.empiricalExamples.length > 0 && (
                <div className="pt-2 border-t border-surface-border space-y-1.5">
                  <strong className="text-amber-300 font-mono text-[11px] block flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-amber-400" />
                    Przykłady Empiryczne i Zapis Źródłowy Epoki:
                  </strong>
                  <ul className="space-y-1 text-slate-300 text-[11px]">
                    {currentEpochState.empiricalExamples.map((ex, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 3 Animated SVG Gauges */}
            <EpochSliderGaugeSvg
              socialConstraintLevel={currentEpochState.socialConstraintLevel}
              statusEconomicPremium={currentEpochState.statusEconomicPremium}
              cohesionMentalHealthCost={currentEpochState.cohesionMentalHealthCost}
            />

          </div>

          {/* Right Column: Emerging Phenomena & 2050 Forecast (3 cols) */}
          <div className="lg:col-span-3 p-4 rounded-xl bg-obsidian-200 border border-modern-cyan/30 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-modern-cyan font-mono font-bold text-xs border-b border-surface-border pb-2">
              <Sparkles className="w-4 h-4 text-modern-cyan" />
              <span>RODZĄCE SIĘ ZJAWISKA & 2050+</span>
            </div>

            <p className="text-slate-300 text-[11px] leading-relaxed">
              {currentTrait.emergingPhenomenaAndConsequences}
            </p>

            <div className="p-3 rounded-lg bg-surface border border-surface-border text-[11px] text-slate-400 mt-auto">
              <strong className="text-slate-200 block mb-1">Kierunek niszowy:</strong>
              Środowisko nie zmienia genów od ręki – zmienia koszty i zyski fenotypowe, kreując nowe formy adaptacji psychicznej.
            </div>
          </div>

        </div>

      </div>

      {/* SECTION B: CONTEMPORARY SELECTION TRACKS (GWAS & CAPITALISM) */}
      <ContemporarySelectionPanel />

      {/* SECTION C: CONTEMPORARY AUTOPSY OF 8 PHENOMENA */}
      <ContemporaryAutopsySection />

    </div>
  );
};
