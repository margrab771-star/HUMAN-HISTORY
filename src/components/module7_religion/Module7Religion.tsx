import React, { useState } from 'react';
import { ReligionTimelineSvg } from './ReligionTimelineSvg';
import { CSRModelsSection } from './CSRModelsSection';
import { JaynesVsFrithSection } from './JaynesVsFrithSection';
import { SacredMigrationMatrix } from './SacredMigrationMatrix';
import { Landmark, Clock, Brain, Split, Sparkles } from 'lucide-react';

interface Module7ReligionProps {
  globalXRayMode: boolean;
}

export const Module7Religion: React.FC<Module7ReligionProps> = ({ globalXRayMode }) => {
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'timeline' | 'csr' | 'jaynes' | 'migration'>('all');

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      
      {/* Intro Editorial Header */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
          <Landmark className="w-4 h-4" />
          <span>MODUŁ 7: EWOLUCJA ŚWIADOMOŚCI, RELIGII & KULTURY SYMBOLICZNEJ</span>
        </div>
        <h2 className="font-serif font-black text-2xl md:text-3xl lg:text-4xl text-slate-100 tracking-tight">
          Od Aszelskiej Proto-Estetyki do Resakralizacji Cyfrowej
        </h2>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed font-sans">
          Religia, magia i sztuka nie są anomalią ani „błędem” ewolucji, lecz potężną wielopoziomową maszynerią adaptacyjną i kognitywną. Zbadaj 5 etapów wyłaniania się sacrum w zapisie kopalnym, poznaj moduły kognitywistyki religii (CSR), zweryfikuj hipotezę umysłu dwuizbowego Juliana Jaynesa oraz odkryj, na jakie świeckie domeny migruje sacrum we współczesnych społeczeństwach WEIRD.
        </p>
      </div>

      {/* Sub-navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-surface-border pb-3 text-xs font-mono overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveSubTab('all')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold whitespace-nowrap shrink-0 transition-all ${
            activeSubTab === 'all'
              ? 'bg-purple-500/25 text-purple-200 border border-purple-400 shadow-glow-terracotta'
              : 'text-slate-400 hover:text-slate-200 bg-surface border border-surface-border'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Widok Kompletny</span>
        </button>

        <button
          onClick={() => setActiveSubTab('timeline')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold whitespace-nowrap shrink-0 transition-all ${
            activeSubTab === 'timeline'
              ? 'bg-purple-500/25 text-purple-200 border border-purple-400'
              : 'text-slate-400 hover:text-slate-200 bg-surface border border-surface-border'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>1. Oś Czasu Sacrum</span>
        </button>

        <button
          onClick={() => setActiveSubTab('csr')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold whitespace-nowrap shrink-0 transition-all ${
            activeSubTab === 'csr'
              ? 'bg-emerald-500/25 text-emerald-200 border border-emerald-400'
              : 'text-slate-400 hover:text-slate-200 bg-surface border border-surface-border'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>2. Kognitywistyka (CSR)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('jaynes')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold whitespace-nowrap shrink-0 transition-all ${
            activeSubTab === 'jaynes'
              ? 'bg-rose-500/25 text-rose-200 border border-rose-400'
              : 'text-slate-400 hover:text-slate-200 bg-surface border border-surface-border'
          }`}
        >
          <Split className="w-4 h-4" />
          <span>3. Jaynes vs Frith</span>
        </button>

        <button
          onClick={() => setActiveSubTab('migration')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold whitespace-nowrap shrink-0 transition-all ${
            activeSubTab === 'migration'
              ? 'bg-cyan-500/25 text-cyan-200 border border-cyan-400'
              : 'text-slate-400 hover:text-slate-200 bg-surface border border-surface-border'
          }`}
        >
          <Landmark className="w-4 h-4" />
          <span>4. Migracja Sacrum XXI</span>
        </button>
      </div>

      {/* SECTION 1: Timeline */}
      {(activeSubTab === 'all' || activeSubTab === 'timeline') && (
        <ReligionTimelineSvg />
      )}

      {/* SECTION 2: CSR Models */}
      {(activeSubTab === 'all' || activeSubTab === 'csr') && (
        <CSRModelsSection globalXRayMode={globalXRayMode} />
      )}

      {/* SECTION 3: Jaynes vs Frith Debate */}
      {(activeSubTab === 'all' || activeSubTab === 'jaynes') && (
        <JaynesVsFrithSection />
      )}

      {/* SECTION 4: Sacred Migration Matrix */}
      {(activeSubTab === 'all' || activeSubTab === 'migration') && (
        <SacredMigrationMatrix />
      )}

    </div>
  );
};
