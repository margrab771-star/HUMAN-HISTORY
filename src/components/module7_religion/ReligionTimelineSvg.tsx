import React, { useState } from 'react';
import { RELIGION_TIMELINE_STAGES } from '../../data/religionConsciousnessData';
import { ReligionTimelineStage } from '../../types';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { Clock, Brain, Landmark, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const ReligionTimelineSvg: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('stage-2');

  const currentStage: ReligionTimelineStage =
    RELIGION_TIMELINE_STAGES.find(s => s.id === activeStageId) || RELIGION_TIMELINE_STAGES[1];

  return (
    <div className="rounded-xl border border-surface-border bg-surface/90 overflow-hidden shadow-xl flex flex-col gap-6 p-4 md:p-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-surface-border pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4" />
            <span>GENEZA ŚWIADOMOŚCI & SACRUM: 5 ETAPÓW</span>
          </div>
          <h3 className="font-serif font-bold text-xl md:text-2xl text-slate-100">
            Ewolucyjna Oś Czasu Kultury Symbolicznej i Religii
          </h3>
          <p className="text-xs text-slate-400 font-sans">
            Od proto-estetyki aszelskich pięściaków po monumentalne sanktuaria neolitu i wielkie bóstwa moralizujące Epoki Osiowej.
          </p>
        </div>

        <ConfidenceBadge level={currentStage.confidenceLevel} size="sm" />
      </div>

      {/* Interactive 5-Stage Step Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {RELIGION_TIMELINE_STAGES.map(stage => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3 rounded-lg border text-left transition-all flex flex-col justify-between gap-2 ${
                isActive
                  ? 'bg-purple-600/25 border-purple-400 text-white shadow-md ring-1 ring-purple-400/50'
                  : 'bg-obsidian-200 border-surface-border text-slate-400 hover:text-slate-200 hover:bg-surface'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-purple-300' : 'text-slate-500'}`}>
                  Etap {stage.stageNumber}
                </span>
                {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />}
              </div>
              <span className={`text-xs font-serif font-bold line-clamp-2 ${isActive ? 'text-slate-100' : 'text-slate-300'}`}>
                {stage.name.split('. ')[1].split(' (')[0]}
              </span>
              <span className="text-[10px] font-mono text-slate-400 pt-1 border-t border-surface-border/40">
                {stage.timeframe}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Card (4 Dimensions) */}
      <div className="p-5 rounded-xl bg-obsidian-200/90 border border-purple-500/30 flex flex-col gap-5 animate-in fade-in duration-200">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-surface-border pb-3">
          <div>
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-bold">
              Etap {currentStage.stageNumber}: {currentStage.timeframe}
            </span>
            <h4 className="font-serif font-bold text-lg md:text-xl text-slate-100">
              {currentStage.name}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-surface border border-surface-border text-xs font-mono text-slate-300">
              Skala: {currentStage.socialScale}
            </span>
          </div>
        </div>

        {/* 4 Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          
          {/* Milestone */}
          <div className="p-4 rounded-lg bg-surface border border-surface-border space-y-1.5">
            <span className="text-purple-300 font-mono font-bold block text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              1. Kluczowy Przełom Ewolucyjny:
            </span>
            <p className="text-slate-200 leading-relaxed font-sans">
              {currentStage.coreMilestone}
            </p>
          </div>

          {/* Cognitive Substrate */}
          <div className="p-4 rounded-lg bg-surface border border-surface-border space-y-1.5">
            <span className="text-bioneuro-mint font-mono font-bold block text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-bioneuro-mint" />
              2. Substrat Kognitywny & Architektura Umysłu:
            </span>
            <p className="text-slate-200 leading-relaxed font-sans">
              {currentStage.cognitiveSubstrate}
            </p>
          </div>

          {/* Archaeological Evidence */}
          <div className="p-4 rounded-lg bg-surface border border-surface-border space-y-1.5">
            <span className="text-amber-300 font-mono font-bold block text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-amber-400" />
              3. Zapis Kopalny & Dowody Archeologiczne:
            </span>
            <p className="text-slate-200 leading-relaxed font-sans">
              {currentStage.archaeologicalProof}
            </p>
          </div>

          {/* Ritual Mode */}
          <div className="p-4 rounded-lg bg-surface border border-surface-border space-y-1.5">
            <span className="text-cyan-300 font-mono font-bold block text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              4. Dominujący Modus Rytualny (Whitehouse):
            </span>
            <p className="text-slate-200 leading-relaxed font-sans">
              {currentStage.ritualMode}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
