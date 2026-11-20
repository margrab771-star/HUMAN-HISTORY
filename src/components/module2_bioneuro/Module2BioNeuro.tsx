import React, { useState } from 'react';
import { BrainSectionSvg } from './BrainSectionSvg';
import { PrimateTestesChartSvg } from './PrimateTestesChartSvg';
import { ReproductiveBiologyPanel } from './ReproductiveBiologyPanel';
import { KamikazeDebateCard } from './KamikazeDebateCard';
import { Brain, Sparkles, HeartHandshake } from 'lucide-react';

export const Module2BioNeuro: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'brain' | 'reproduction'>('brain');

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Editorial Header */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-bioneuro-mint uppercase tracking-wider mb-1">
          <Brain className="w-4 h-4" />
          <span>MODUŁ 2: NEUROBIOLOGIA & BIOLOGIA ROZRODU</span>
        </div>
        <h2 className="font-serif font-black text-2xl md:text-3xl lg:text-4xl text-slate-100 tracking-tight">
          Laboratorium „Bio-Neuro X-Ray”: Pod Maską Biologii i Mózgu
        </h2>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed font-sans">
          Człowiek nie jest czystą tablicą (tabula rasa). Nasze wybory moralne, lęki, podatność na uzależnienia cyfrowe i architektura relacji intymnych są zdeterminowane przez architekturę neuronalną wyselekcjonowaną w plejstocenie. Zbadaj przekrój mózgu, mechanikę neuronów von Economo oraz fizjologiczne podstawy doboru płciowego.
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 border-b border-surface-border pb-2 text-xs font-mono">
        <button
          onClick={() => setActiveTab('brain')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            activeTab === 'brain'
              ? 'bg-bioneuro-emerald/20 text-bioneuro-mint border border-bioneuro-emerald/40 shadow-glow-emerald'
              : 'text-slate-400 hover:text-slate-200 bg-surface border border-surface-border'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>1. Architektura Mózgu & Węzły Neurokognitywne (SVG)</span>
        </button>

        <button
          onClick={() => setActiveTab('reproduction')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            activeTab === 'reproduction'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-glow-terracotta'
              : 'text-slate-400 hover:text-slate-200 bg-surface border border-surface-border'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          <span>2. Biologia Rozrodu, Więzi i Konkurencja Plemników</span>
        </button>
      </div>

      {/* Tab 1: Brain Cross-Section SVG */}
      {activeTab === 'brain' && (
        <div className="space-y-6">
          <BrainSectionSvg />
        </div>
      )}

      {/* Tab 2: Reproductive Biology & Primate Comparison */}
      {activeTab === 'reproduction' && (
        <div className="space-y-6">
          {/* Primate testes chart */}
          <PrimateTestesChartSvg />

          {/* Biological details */}
          <ReproductiveBiologyPanel />

          {/* Kamikaze Sperm Verification Debate Card */}
          <KamikazeDebateCard />
        </div>
      )}

    </div>
  );
};
