import React from 'react';
import { SACRED_MIGRATION_MATRIX } from '../../data/religionConsciousnessData';
import { AlertTriangle, Sparkles, Layers } from 'lucide-react';

export const SacredMigrationMatrix: React.FC = () => {
  return (
    <div className="rounded-xl border border-surface-border bg-surface/90 overflow-hidden shadow-xl flex flex-col gap-6 p-4 md:p-6">
      
      {/* Header */}
      <div className="border-b border-surface-border pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
          <Layers className="w-4 h-4" />
          <span>RESAKRALIZACJA CYFROWA & METAMORFOZA SACRUM</span>
        </div>
        <h3 className="font-serif font-bold text-xl md:text-2xl text-slate-100">
          Matryca Migracji Sacrum w XXI Wieku (W co wierzy zlaicyzowany mózg WEIRD?)
        </h3>
        <p className="text-xs text-slate-400 font-sans mt-1">
          Teoria Norris i Ingleharta o bezpieczeństwie egzystencjalnym: laicyzacja nie niszczy modułów religijnych mózgu, lecz przekierowuje je na świeckie substytuty polityczne, technologiczne i cielesne.
        </p>
      </div>

      {/* Grid of 4 Migration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
        {SACRED_MIGRATION_MATRIX.map(item => (
          <div
            key={item.id}
            className="p-5 rounded-xl bg-obsidian-200/90 border border-surface-border hover:border-purple-500/50 transition-all flex flex-col justify-between gap-4"
          >
            {/* Header */}
            <div className="border-b border-surface-border pb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold block mb-1">
                Ewolucyjny Moduł Źródłowy:
              </span>
              <h4 className="font-serif font-bold text-base text-slate-100">
                {item.evolutionaryModule}
              </h4>
            </div>

            {/* Historical Migration Path (3 stages) */}
            <div className="space-y-2.5">
              
              {/* Stage 1: Pleistocene */}
              <div className="p-2.5 rounded bg-surface/70 border border-pleisto-terracotta/30 flex items-start gap-2">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-pleisto-terracotta/20 text-pleisto-ochre font-bold shrink-0">
                  Plejstocen:
                </span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {item.pleistoceneSacredState}
                </p>
              </div>

              {/* Stage 2: Antiquity & Tradition */}
              <div className="p-2.5 rounded bg-surface/70 border border-amber-500/30 flex items-start gap-2">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold shrink-0">
                  Antyk / Tradycja:
                </span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {item.antiquityAndTraditionalState}
                </p>
              </div>

              {/* Stage 3: Modern 21st c. Secular Metamorphosis */}
              <div className="p-3 rounded bg-purple-950/20 border border-purple-500/40 flex flex-col gap-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  Świecka Metamorfoza XXI Wieku:
                </span>
                <p className="text-slate-100 text-[11px] font-medium leading-relaxed">
                  {item.modern21stSecularMetamorphosis}
                </p>
              </div>

            </div>

            {/* Bottom Rationale & Pathology */}
            <div className="pt-3 border-t border-surface-border/60 space-y-1.5 text-[11px]">
              <div>
                <strong className="text-emerald-400 font-mono text-[10px] uppercase">Głęboka potrzeba psychiczna: </strong>
                <span className="text-slate-300">{item.underlyingPsychologicalNeed}</span>
              </div>
              <div className="flex items-start gap-1.5 text-rose-300">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="font-mono text-[10px] uppercase text-rose-400">Patologia niszowa: </strong>
                  {item.riskOrPathology}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
