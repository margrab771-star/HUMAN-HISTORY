import React, { useState } from 'react';
import { CONTEMPORARY_AUTOPSIES } from '../../data/contemporaryAutopsyData';
import { PhenomenonAutopsy } from '../../types';
import { Activity, Brain, Clock, History, AlertOctagon, CheckSquare, ShieldCheck, BookOpen } from 'lucide-react';

export const ContemporaryAutopsySection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(CONTEMPORARY_AUTOPSIES[0].id);

  const current: PhenomenonAutopsy =
    CONTEMPORARY_AUTOPSIES.find(a => a.id === selectedId) || CONTEMPORARY_AUTOPSIES[0];

  return (
    <div className="p-4 md:p-6 rounded-xl bg-surface border border-surface-border shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-surface-border pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
            <Activity className="w-4 h-4" />
            <span>DIAGNOSTYKA EWOLUCYJNA & PROTOKÓŁ ODPORNOŚCI</span>
          </div>
          <h3 className="font-serif font-bold text-xl md:text-2xl text-slate-100">
            Autopsja 8 Zjawisk XXI Wieku
          </h3>
          <p className="text-xs text-slate-400 font-sans">
            Czterowarstwowa pionowa dekonstrukcja współczesnych patologii psychicznych i społecznych wraz z badawczym protokołem mitygacji.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
          8 Zjawisk Kliniczno-Społecznych
        </span>
      </div>

      {/* Phenomenon Selector Buttons */}
      <div className="flex flex-wrap gap-2">
        {CONTEMPORARY_AUTOPSIES.map(item => {
          const isSelected = selectedId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-3 py-2 rounded-lg text-xs font-mono transition-all border text-left flex items-center gap-2 ${
                isSelected
                  ? 'bg-cyan-500/25 text-cyan-200 border-cyan-400 font-bold shadow-md ring-1 ring-cyan-400/40'
                  : 'bg-obsidian-200 text-slate-400 hover:text-slate-200 hover:bg-surface border-surface-border'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400' : 'bg-slate-600'}`} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Phenomenon Header */}
      <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
            Kategoria: {current.categoryLabel}
          </span>
          <h4 className="font-serif font-bold text-lg md:text-xl text-slate-100">
            {current.title}
          </h4>
          <p className="text-xs text-amber-300 font-mono mt-0.5">
            {current.subtitle}
          </p>
        </div>
      </div>

      {/* 4 Vertical Diagnostic Levels (Grid 2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        
        {/* Level 1: Neurobiological Substrate */}
        <div className="p-4 rounded-xl bg-obsidian-200/90 border border-bioneuro-emerald/30 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-bioneuro-mint border-b border-surface-border pb-2">
            <Brain className="w-4 h-4 text-bioneuro-mint" />
            <span>POZIOM 1: PODŁOŻE NEUROBIOLOGICZNE & NEUROCHEMIA</span>
          </div>
          <p className="text-slate-200 leading-relaxed font-sans">
            {current.bioNeuroMechanism}
          </p>
        </div>

        {/* Level 2: Pleistocene Function */}
        <div className="p-4 rounded-xl bg-obsidian-200/90 border border-pleisto-terracotta/30 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-pleisto-ochre border-b border-surface-border pb-2">
            <Clock className="w-4 h-4 text-pleisto-ochre" />
            <span>POZIOM 2: ADAPTACJA W PLEJSTOCENIE (ŁOWCY-ZBIERACZE)</span>
          </div>
          <p className="text-slate-200 leading-relaxed font-sans">
            {current.pleistoceneFunction}
          </p>
        </div>

        {/* Level 3: Historical Shift (Antiquity to Industrial) */}
        <div className="p-4 rounded-xl bg-obsidian-200/90 border border-amber-500/30 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-amber-300 border-b border-surface-border pb-2">
            <History className="w-4 h-4 text-amber-300" />
            <span>POZIOM 3: TRANSFORMATOR HISTORII (ANTYK & ERA PRZEMYSŁOWA)</span>
          </div>
          <p className="text-slate-200 leading-relaxed font-sans">
            {current.historicalShift}
          </p>
        </div>

        {/* Level 4: Modern Digital Overdrive */}
        <div className="p-4 rounded-xl bg-obsidian-200/90 border border-rose-500/30 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-rose-300 border-b border-surface-border pb-2">
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            <span>POZIOM 4: NOWOCZESNE PRZESTEROWANIE CYFROWE (XXI W.)</span>
          </div>
          <p className="text-slate-200 leading-relaxed font-sans">
            {current.modernOverdrive}
          </p>
        </div>

      </div>

      {/* Mitigation Protocol (Research-backed) */}
      <div className="p-5 rounded-xl bg-obsidian-300/80 border border-cyan-500/40 space-y-4">
        <div className="flex items-center justify-between border-b border-surface-border pb-2.5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <h4 className="font-serif font-bold text-base text-slate-100">
              Protokół Mitygacji Ewolucyjno-Behawioralnej
            </h4>
          </div>
          <span className="text-[11px] font-mono text-cyan-300">
            Zalecenia Oparte na Badaniach Klinicznych
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          
          {/* Individual Interventions */}
          <div className="p-3.5 rounded-lg bg-surface border border-surface-border space-y-2">
            <span className="text-cyan-300 font-mono font-bold block text-[11px] uppercase tracking-wider">
              A. Interwencje Indywidualne i Somatyczne:
            </span>
            <ul className="space-y-1.5 text-slate-200">
              {current.mitigationProtocol.individual.map((act, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckSquare className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Environmental / Architecture */}
          <div className="p-3.5 rounded-lg bg-surface border border-surface-border space-y-2">
            <span className="text-amber-300 font-mono font-bold block text-[11px] uppercase tracking-wider">
              B. Zmiany Środowiskowe & Architektura Wyboru:
            </span>
            <ul className="space-y-1.5 text-slate-200">
              {current.mitigationProtocol.environmental.map((env, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckSquare className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{env}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Scientific Rationale */}
        <div className="p-3 rounded-lg bg-surface/70 border border-surface-border flex items-start gap-2.5 text-xs text-slate-300">
          <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-300 font-mono text-[11px] block">Uzasadnienie Neuroewolucyjne:</strong>
            <p className="mt-0.5 leading-relaxed">{current.mitigationProtocol.scientificRationale}</p>
            <div className="mt-1 pt-1 border-t border-surface-border/50 text-[10px] font-mono text-slate-400">
              Źródła: {current.keySources.join('; ')}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
