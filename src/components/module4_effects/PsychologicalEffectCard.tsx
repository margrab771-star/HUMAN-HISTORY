import React, { useState } from 'react';
import { PsychologicalEffect } from '../../types';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { Brain, Sparkles, Clock, Globe, UserCheck, AlertTriangle, Landmark, FlaskConical, Smartphone, ChevronDown, ChevronUp } from 'lucide-react';

interface PsychologicalEffectCardProps {
  effect: PsychologicalEffect;
  globalXRayMode: boolean;
}

export const PsychologicalEffectCard: React.FC<PsychologicalEffectCardProps> = ({
  effect,
  globalXRayMode
}) => {
  const [localXRay, setLocalXRay] = useState(false);
  const [showExamples, setShowExamples] = useState(true);

  const showXRay = globalXRayMode || localXRay;

  return (
    <article aria-label={effect.name} className="rounded-xl border border-surface-border bg-surface/90 hover:border-slate-600 transition-all duration-200 overflow-hidden flex flex-col shadow-lg">
      
      {/* Card Header */}
      <div className="p-4 md:p-5 border-b border-surface-border bg-obsidian-200/60 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif font-bold text-lg text-slate-100">
                {effect.name}
              </h3>
              <ConfidenceBadge level={effect.confidenceLevel} size="sm" />
            </div>
            <p className="text-xs text-amber-400 font-medium mt-0.5">
              {effect.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-surface-border text-slate-300">
              {effect.categoryLabel}
            </span>

            <button
              onClick={() => setLocalXRay(!localXRay)}
              className={`p-1.5 rounded text-xs border transition-colors ${
                showXRay
                  ? 'bg-bioneuro-emerald/20 text-bioneuro-mint border-bioneuro-emerald shadow-glow-emerald'
                  : 'bg-surface text-slate-400 hover:text-white border-surface-border'
              }`}
              title="Przełącz podgląd [Bio-Neuro X-Ray]"
            >
              <Brain className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Academic Sections */}
      <div className="p-4 md:p-5 flex-1 flex flex-col gap-3.5 text-xs text-slate-300 leading-relaxed">
        
        {/* Section 1: Academic Definition & Classic Experiment */}
        <div className="p-3 rounded-lg bg-obsidian-300/80 border border-surface-border flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-amber-300 font-mono text-[11px] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>1. DEFINICJA AKADEMICKA & KLASYCZNY EKSPERYMENT</span>
          </div>
          <p className="text-slate-200">{effect.academicDefinition}</p>
          <div className="text-[11px] text-slate-400 pt-1 border-t border-surface-border/60">
            <strong className="text-slate-300">Eksperyment:</strong> {effect.classicExperiment}
          </div>
        </div>

        {/* Section 2: Neurobiological Substrate (highlighted in X-Ray) */}
        <div className={`p-3 rounded-lg border flex flex-col gap-1.5 transition-all ${
          showXRay
            ? 'bg-bioneuro-dark/30 border-bioneuro-emerald text-emerald-100 shadow-glow-emerald'
            : 'bg-surface border-surface-border'
        }`}>
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-bioneuro-mint">
            <Brain className="w-3.5 h-3.5 text-bioneuro-mint" />
            <span>2. PODŁOŻE NEUROBIOLOGICZNE {showXRay && '(TRYB X-RAY AKTYWNY)'}</span>
          </div>
          <p className={showXRay ? 'text-emerald-100 font-medium' : 'text-slate-300'}>
            {effect.neurobiologicalSubstrate}
          </p>
        </div>

        {/* Section 3: Pleistocene Function */}
        <div className="p-3 rounded-lg bg-surface border border-pleisto-terracotta/30 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-pleisto-ochre">
            <Clock className="w-3.5 h-3.5 text-pleisto-ochre" />
            <span>3. FUNKCJA ADAPTACYJNA W PLEJSTOCENIE (ŁOWCY-ZBIERACZE)</span>
          </div>
          <p className="text-slate-300">{effect.pleistoceneFunction}</p>
        </div>

        {/* Section 4: Modern Capitalism and Digital Networks */}
        <div className="p-3 rounded-lg bg-surface border border-modern-cyan/30 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-modern-cyan">
            <Globe className="w-3.5 h-3.5 text-modern-cyan" />
            <span>4. DZIAŁANIE WE WSPÓŁCZESNYM KAPITALIZMIE & SIECI</span>
          </div>
          <p className="text-slate-300">{effect.modernCapitalismAndDigitalNetwork}</p>
        </div>

        {/* Section 5: 3 Real-World Empirical Examples */}
        {effect.empiricalExamples && (
          <div className="rounded-lg border border-surface-border bg-obsidian-300/90 overflow-hidden">
            <button
              onClick={() => setShowExamples(!showExamples)}
              className="w-full px-3 py-2 bg-surface/80 hover:bg-surface flex items-center justify-between text-[11px] font-mono font-bold text-slate-200 border-b border-surface-border transition-colors"
            >
              <div className="flex items-center gap-1.5 text-indigo-300">
                <Landmark className="w-3.5 h-3.5 text-indigo-400" />
                <span>5. TRZY MANIFESTACJE ZE ŚWIATA RZECZYWISTEGO</span>
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-[10px]">
                <span>{showExamples ? 'Zwiń' : 'Rozwiń'}</span>
                {showExamples ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </div>
            </button>

            {showExamples && (
              <div className="p-3 space-y-2.5 text-[11px]">
                {/* 1. Antiquity / Civilization History */}
                <div className="p-2.5 rounded bg-surface/60 border border-amber-500/20 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 font-mono font-semibold text-amber-300">
                    <Landmark className="w-3 h-3 text-amber-400" />
                    <span>A. Antyk & Historia Cywilizacji:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed pl-4">
                    {effect.empiricalExamples.antiquityOrHistory}
                  </p>
                </div>

                {/* 2. Laboratory / Field Study */}
                <div className="p-2.5 rounded bg-surface/60 border border-emerald-500/20 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 font-mono font-semibold text-emerald-300">
                    <FlaskConical className="w-3 h-3 text-emerald-400" />
                    <span>B. Badanie Laboratoryjne / Terenowe:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed pl-4">
                    {effect.empiricalExamples.laboratoryOrFieldStudy}
                  </p>
                </div>

                {/* 3. Modern Digital Economy */}
                <div className="p-2.5 rounded bg-surface/60 border border-cyan-500/20 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 font-mono font-semibold text-cyan-300">
                    <Smartphone className="w-3 h-3 text-cyan-400" />
                    <span>C. Gospodarka Cyfrowa & Życie XXI w.:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed pl-4">
                    {effect.empiricalExamples.modernDailyOrDigitalEconomy}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Methodological Note (if present) */}
        {effect.methodologicalNote && (
          <div className="p-2.5 rounded bg-surface border border-rose-500/30 text-rose-300 text-[11px] flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <strong>Uwaga metodologiczna:</strong> {effect.methodologicalNote}
            </div>
          </div>
        )}

        {/* Footer: Key Researchers */}
        <div className="mt-auto pt-3 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-slate-500" />
            <span>Badacze: </span>
            <span className="text-slate-200">{effect.keyResearchers.join(', ')}</span>
          </div>
        </div>

      </div>

    </article>
  );
};
