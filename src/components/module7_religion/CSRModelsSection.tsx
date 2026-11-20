import React, { useState } from 'react';
import { CSR_TOPICS } from '../../data/religionConsciousnessData';
import { CSRTopic } from '../../types';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { Brain, Eye, Clock, Smartphone, UserCheck } from 'lucide-react';

interface CSRModelsSectionProps {
  globalXRayMode: boolean;
}

export const CSRModelsSection: React.FC<CSRModelsSectionProps> = ({ globalXRayMode }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(CSR_TOPICS[0].id);
  const [localXRay, setLocalXRay] = useState<boolean>(false);

  const showXRay = globalXRayMode || localXRay;

  const currentTopic: CSRTopic =
    CSR_TOPICS.find(t => t.id === selectedTopicId) || CSR_TOPICS[0];

  return (
    <div className="rounded-xl border border-surface-border bg-surface/90 overflow-hidden shadow-xl flex flex-col gap-6 p-4 md:p-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-surface-border pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-bioneuro-mint uppercase tracking-wider mb-1">
            <Brain className="w-4 h-4" />
            <span>KOGNITYWNA NAUKA O RELIGII (COGNITIVE SCIENCE OF RELIGION — CSR)</span>
          </div>
          <h3 className="font-serif font-bold text-xl md:text-2xl text-slate-100">
            5 Ewolucyjnych Modułów Umysłu a Geneza Wierzeń
          </h3>
          <p className="text-xs text-slate-400 font-sans">
            Religia jako naturalny produkt uboczny (spandrel) lub adaptacja uniwersalnych algorytmów poznawczych ukształtowanych w plejstocenie.
          </p>
        </div>

        {/* X-Ray Toggle */}
        <button
          onClick={() => setLocalXRay(!localXRay)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
            showXRay
              ? 'bg-bioneuro-emerald/25 text-bioneuro-mint border-bioneuro-emerald shadow-glow-emerald font-bold'
              : 'bg-obsidian-200 text-slate-400 hover:text-slate-200 border-surface-border'
          }`}
        >
          <Brain className={`w-3.5 h-3.5 ${showXRay ? 'text-bioneuro-mint animate-pulse' : 'text-slate-400'}`} />
          <span>{showXRay ? 'Bio-Neuro X-Ray (WŁĄCZONY)' : 'Włącz Bio-Neuro X-Ray'}</span>
        </button>
      </div>

      {/* Module Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {CSR_TOPICS.map(topic => {
          const isSelected = topic.id === selectedTopicId;
          return (
            <button
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              className={`p-3 rounded-lg border text-left transition-all flex flex-col justify-between gap-1.5 ${
                isSelected
                  ? 'bg-emerald-600/25 border-emerald-400 text-white shadow-md ring-1 ring-emerald-400/40'
                  : 'bg-obsidian-200 border-surface-border text-slate-400 hover:text-slate-200 hover:bg-surface'
              }`}
            >
              <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-emerald-300' : 'text-slate-500'}`}>
                {topic.acronym}
              </span>
              <span className={`text-xs font-serif font-bold line-clamp-2 ${isSelected ? 'text-slate-100' : 'text-slate-300'}`}>
                {topic.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected CSR Topic Card */}
      <div className="p-5 rounded-xl bg-obsidian-200/90 border border-surface-border flex flex-col gap-5 animate-in fade-in duration-200">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-surface-border pb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-serif font-bold text-lg md:text-xl text-slate-100">
                {currentTopic.name}
              </h4>
              <ConfidenceBadge level={currentTopic.confidenceLevel} size="sm" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <UserCheck className="w-3.5 h-3.5 text-slate-500" />
            <span>Badacze: {currentTopic.keyResearchers.join(', ')}</span>
          </div>
        </div>

        {/* Core Concept */}
        <div className="p-4 rounded-lg bg-surface border border-surface-border space-y-1">
          <span className="text-amber-400 font-mono font-bold block text-[11px] uppercase tracking-wider flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            Istota Koncepcji Poznawczej:
          </span>
          <p className="text-xs text-slate-200 leading-relaxed font-sans">
            {currentTopic.coreConcept}
          </p>
        </div>

        {/* 3 Grid Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          
          {/* Box 1: Pleistocene Roots */}
          <div className="p-4 rounded-lg bg-surface border border-pleisto-terracotta/30 space-y-1.5 flex flex-col justify-between">
            <span className="text-pleisto-ochre font-mono font-bold block text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-pleisto-ochre" />
              Korzenie w Plejstocenie:
            </span>
            <p className="text-slate-300 leading-relaxed font-sans">
              {currentTopic.pleistoceneRoots}
            </p>
          </div>

          {/* Box 2: Bio-Neuro Substrate (X-Ray Highlighted) */}
          <div className={`p-4 rounded-lg border space-y-1.5 transition-all flex flex-col justify-between ${
            showXRay
              ? 'bg-bioneuro-dark/40 border-bioneuro-emerald shadow-glow-emerald text-emerald-100'
              : 'bg-surface border-surface-border text-slate-300'
          }`}>
            <span className="text-bioneuro-mint font-mono font-bold block text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-bioneuro-mint" />
              Substrat Neurobiologiczny {showXRay && '(X-Ray)'}:
            </span>
            <p className={`leading-relaxed font-sans ${showXRay ? 'text-emerald-100 font-medium' : 'text-slate-300'}`}>
              {currentTopic.bioNeuroSubstrate}
            </p>
          </div>

          {/* Box 3: Modern Echoes */}
          <div className="p-4 rounded-lg bg-surface border border-cyan-500/30 space-y-1.5 flex flex-col justify-between">
            <span className="text-cyan-300 font-mono font-bold block text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
              Współczesne Echo w Sieci & XXI w.:
            </span>
            <p className="text-slate-300 leading-relaxed font-sans">
              {currentTopic.modernEchoes}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
