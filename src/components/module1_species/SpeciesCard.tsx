import React, { useState } from 'react';
import { HominidSpecies } from '../../types';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { Brain, HeartHandshake, MapPin, Wrench, Utensils, Dna, Skull, ChevronDown, ChevronUp } from 'lucide-react';

interface SpeciesCardProps {
  species: HominidSpecies;
  isSelected: boolean;
  onSelect: () => void;
  globalXRayMode: boolean;
}

export const SpeciesCard: React.FC<SpeciesCardProps> = ({
  species,
  isSelected,
  onSelect,
  globalXRayMode
}) => {
  const [localXRay, setLocalXRay] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const showXRay = globalXRayMode || localXRay;

  return (
    <article
      className={`rounded-xl border transition-all duration-300 overflow-hidden flex flex-col ${
        isSelected
          ? 'bg-surface-hover border-amber-500/80 shadow-glow-terracotta ring-1 ring-amber-500/50'
          : 'bg-surface/90 border-surface-border hover:border-slate-600'
      }`}
    >
      {/* Top Banner */}
      <div className="p-4 md:p-5 border-b border-surface-border flex flex-col gap-2 bg-obsidian-200/50">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif font-bold text-lg md:text-xl text-slate-100 italic">
                {species.name}
              </h3>
              <ConfidenceBadge level={species.confidenceLevel} size="sm" />
            </div>
            <p className="text-xs text-pleisto-ochre font-medium">
              {species.commonName}
            </p>
          </div>

          <button
            onClick={() => setLocalXRay(!localXRay)}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono border transition-all flex items-center gap-1.5 ${
              showXRay
                ? 'bg-bioneuro-emerald/20 text-bioneuro-mint border-bioneuro-emerald'
                : 'bg-surface border-surface-border text-slate-400 hover:text-slate-200'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>{showXRay ? 'Bio-Neuro X-Ray' : 'Przełącz na X-Ray'}</span>
          </button>
        </div>

        {/* Quick Spec Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs font-mono">
          <div className="p-2 rounded bg-surface border border-surface-border">
            <span className="text-slate-400 block text-[10px]">Datowanie:</span>
            <span className="text-slate-200 font-semibold">{species.epochRange.split('(')[1]?.replace(')', '') || species.epochRange}</span>
          </div>

          <div className="p-2 rounded bg-surface border border-surface-border">
            <span className="text-slate-400 block text-[10px]">Objętość mózgu:</span>
            <span className="text-bioneuro-mint font-semibold">{species.brainCapacityCm3.avg} cm³ <span className="text-[10px] text-slate-400 font-normal">({species.brainCapacityCm3.min}–{species.brainCapacityCm3.max})</span></span>
          </div>

          <div className="p-2 rounded bg-surface border border-surface-border">
            <span className="text-slate-400 block text-[10px]">Szacowana grupa:</span>
            <span className="text-amber-300 font-semibold">{species.estimatedGroupSize.min}–{species.estimatedGroupSize.max} osób</span>
          </div>

          <div className="p-2 rounded bg-surface border border-surface-border">
            <span className="text-slate-400 block text-[10px]">Narzędzia:</span>
            <span className="text-slate-200 truncate block font-sans" title={species.toolIndustry}>{species.toolIndustry.split(':')[0]}</span>
          </div>
        </div>
      </div>

      {/* Main Body Content */}
      <div className="p-4 md:p-5 flex-1 flex flex-col gap-4 text-xs leading-relaxed text-slate-300">
        
        {/* Discovery & Geographic Range */}
        <div className="flex items-start gap-2 text-slate-400">
          <MapPin className="w-4 h-4 text-pleisto-terracotta shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200">Zasięg:</strong> {species.geographicRange}.
            <div className="text-[11px] text-slate-400 mt-0.5">{species.discoveryInfo}</div>
          </div>
        </div>

        {/* Dynamic Mode Content: Behavioral vs Bio-Neuro X-Ray */}
        {showXRay ? (
          <div className="p-3.5 rounded-lg bg-bioneuro-dark/30 border border-bioneuro-emerald/40 flex flex-col gap-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-1.5 text-bioneuro-mint font-mono font-semibold text-xs border-b border-bioneuro-emerald/30 pb-1.5">
              <Brain className="w-4 h-4 text-bioneuro-mint" />
              <span>PROFIL BIO-NEURO X-RAY (STRUKTURA I NEUROPLASTYCZNOŚĆ)</span>
            </div>

            <div>
              <strong className="text-slate-200 font-sans block mb-0.5">Encefalizacja i architektura kory:</strong>
              <p className="text-slate-300 text-[11px]">{species.bioNeuroHighlights.corticalEncephalization}</p>
            </div>

            <div>
              <strong className="text-slate-200 font-sans block mb-0.5">Wskaźnik Mózgu Społecznego (Dunbar Ratio):</strong>
              <p className="text-slate-300 text-[11px]">{species.bioNeuroHighlights.socialBrainRatio}</p>
            </div>

            <div>
              <strong className="text-slate-200 font-sans block mb-0.5">Substrat wokalno-symboliczny i genetyka mowy:</strong>
              <p className="text-slate-300 text-[11px]">{species.bioNeuroHighlights.vocalAndSymbolicSubstrate}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {/* Cranial & Postcranial Anatomy */}
            <div>
              <span className="text-slate-400 font-semibold font-mono text-[10px] uppercase tracking-wider block mb-1">
                Kluczowe Adaptacje Anatomiczne:
              </span>
              <ul className="space-y-1">
                {species.cranialAndAnatomyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-slate-300">
                    <span className="text-pleisto-ochre">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diet & Strategy */}
            <div className="flex items-start gap-2 bg-obsidian-200/60 p-2.5 rounded border border-surface-border">
              <Utensils className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200">Dieta i pozyskiwanie kalorii:</strong> {species.dietAndSurvivalStrategy}
              </div>
            </div>
          </div>
        )}

        {/* Boundary Behaviors (Care vs Violence) - Always highly relevant */}
        <div className="p-3 rounded-lg bg-surface border border-surface-border flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-pleisto-ochre font-semibold text-xs">
            <HeartHandshake className="w-4 h-4 text-rose-400" />
            <span>Zachowania Graniczne: Opieka vs. Przemoc i Kooperacja</span>
          </div>
          <div className="text-[11px] text-slate-300 space-y-1">
            <p><strong className="text-slate-200">Troska i opieka:</strong> {species.boundaryBehaviors.careDescription}</p>
            <p><strong className="text-slate-200">Przemoc i walka:</strong> {species.boundaryBehaviors.violenceAndCooperation}</p>
            <div className="mt-1 pt-1 border-t border-surface-border text-[10px] text-amber-200/80 font-mono">
              <strong>Kluczowy dowód kopalny:</strong> {species.boundaryBehaviors.keyFossilEvidence}
            </div>
          </div>
        </div>

        {/* Collapsible Paleogenetics & Extinction Section */}
        {isExpanded && (
          <div className="flex flex-col gap-3 pt-2 border-t border-surface-border text-xs animate-in fade-in">
            <div className="flex items-start gap-2">
              <Dna className="w-4 h-4 text-modern-cyan shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200">Paleogenetyka i introgresja (aDNA):</strong> {species.paleogeneticsAndHybridization}
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Skull className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200">Hipoteza wymarcia lub asymilacji:</strong> {species.extinctionOrFateHypothesis}
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Wrench className="w-4 h-4 text-pleisto-ochre shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200">Kultura techniczna (narzędzia):</strong> {species.toolIndustry}
              </div>
            </div>
          </div>
        )}

        {/* Card Footer Actions */}
        <div className="mt-auto pt-3 border-t border-surface-border flex items-center justify-between gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
          >
            <span>{isExpanded ? 'Mniej szczegółów' : 'Rozwiń paleogenetykę i wymarcie'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={onSelect}
            className={`px-3 py-1 rounded text-xs font-mono font-medium border transition-colors ${
              isSelected
                ? 'bg-amber-500 text-obsidian font-bold border-amber-400'
                : 'bg-surface hover:bg-surface-hover text-slate-200 border-surface-border'
            }`}
          >
            {isSelected ? '✓ Wybrany w porównywarce' : '+ Dodaj do porównania'}
          </button>
        </div>

      </div>
    </article>
  );
};
