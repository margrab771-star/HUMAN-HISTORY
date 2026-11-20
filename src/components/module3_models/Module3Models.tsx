import React, { useState } from 'react';
import { EVO_PSYCH_MODELS } from '../../data/evoPsychModelsData';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { PartiblePaternitySimulatorSvg } from './PartiblePaternitySimulatorSvg';
import { AttractivenessAnatomySvg } from './AttractivenessAnatomySvg';
import { DunbarCirclesSvg } from './DunbarCirclesSvg';
import { GoodnessParadoxPanel } from './GoodnessParadoxPanel';
import { ReverseDominanceDiagram } from './ReverseDominanceDiagram';
import { CompassionArcheologyExplorer } from './CompassionArcheologyExplorer';
import { BehavioralImmuneDiagram } from './BehavioralImmuneDiagram';
import { LifeHistorySlider } from './LifeHistorySlider';
import { Flame, Brain, Users, Sparkles, Shield, HeartHandshake, Sliders, CheckCircle } from 'lucide-react';

interface Module3ModelsProps {
  globalXRayMode: boolean;
  selectedModelId?: string;
}

export const Module3Models: React.FC<Module3ModelsProps> = ({
  globalXRayMode,
  selectedModelId: externalModelId
}) => {
  const [activeModelId, setActiveModelId] = useState<string>(
    externalModelId || EVO_PSYCH_MODELS[0].id
  );
  const [localXRay, setLocalXRay] = useState(false);

  const showXRay = globalXRayMode || localXRay;

  const currentModel = EVO_PSYCH_MODELS.find(m => m.id === activeModelId) || EVO_PSYCH_MODELS[0];

  const renderInteractiveComponent = () => {
    switch (currentModel.interactiveComponentType) {
      case 'partible_paternity':
        return <PartiblePaternitySimulatorSvg />;
      case 'attractiveness_anatomy':
        return <AttractivenessAnatomySvg />;
      case 'dunbar_circles':
        return <DunbarCirclesSvg />;
      case 'goodness_paradox':
        return <GoodnessParadoxPanel />;
      case 'reverse_dominance':
        return <ReverseDominanceDiagram />;
      case 'compassion_archeology':
        return <CompassionArcheologyExplorer />;
      case 'behavioral_immune':
        return <BehavioralImmuneDiagram />;
      case 'life_history':
        return <LifeHistorySlider />;
      default:
        return null;
    }
  };

  const getModelIcon = (type: string) => {
    switch (type) {
      case 'partible_paternity':
        return <Users className="w-4 h-4 text-amber-400" />;
      case 'attractiveness_anatomy':
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
      case 'dunbar_circles':
        return <Users className="w-4 h-4 text-modern-cyan" />;
      case 'goodness_paradox':
        return <Flame className="w-4 h-4 text-rose-400" />;
      case 'reverse_dominance':
        return <Shield className="w-4 h-4 text-purple-400" />;
      case 'compassion_archeology':
        return <HeartHandshake className="w-4 h-4 text-rose-300" />;
      case 'behavioral_immune':
        return <Shield className="w-4 h-4 text-emerald-300" />;
      case 'life_history':
        return <Sliders className="w-4 h-4 text-yellow-400" />;
      default:
        return <Flame className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Editorial Header */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
          <Flame className="w-4 h-4" />
          <span>MODUŁ 3: SOCJOBIOLOGIA & PSYCHOLOGIA EWOLUCYJNA</span>
        </div>
        <h2 className="font-serif font-black text-2xl md:text-3xl lg:text-4xl text-slate-100 tracking-tight">
          Laboratorium 8 Modeli Psychologii Ewolucyjnej i Społecznej
        </h2>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed font-sans">
          Poznaj osiem fundamentalnych modeli teoretycznych tłumaczących genezę ludzkiej kooperacji, doboru płciowego, granic zaufania i przemocy. Każdy model wyposażony jest w autorski symulator lub interaktywny diagram SVG z możliwością podglądu neurobiologicznego [Bio-Neuro X-Ray].
        </p>
      </div>

      {/* Model Selector Bar (8 buttons) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {EVO_PSYCH_MODELS.map(m => {
          const isSelected = activeModelId === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setActiveModelId(m.id)}
              className={`p-2.5 rounded-xl border text-left flex flex-col justify-between gap-2 transition-all ${
                isSelected
                  ? 'bg-surface border-amber-400 shadow-glow-terracotta ring-1 ring-amber-400/50'
                  : 'bg-obsidian-200 hover:bg-surface border-surface-border text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                {getModelIcon(m.interactiveComponentType)}
                <span className="text-[10px] font-mono text-slate-500">#{EVO_PSYCH_MODELS.indexOf(m) + 1}</span>
              </div>
              <span className={`text-xs font-serif font-bold line-clamp-2 leading-tight ${isSelected ? 'text-amber-300' : 'text-slate-300'}`}>
                {m.title.split('(')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Model Meta Banner */}
      <div className="p-4 md:p-6 rounded-xl bg-surface border border-surface-border flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-surface-border pb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif font-bold text-xl md:text-2xl text-slate-100">
                {currentModel.title}
              </h3>
              <ConfidenceBadge level={currentModel.confidenceLevel} size="sm" />
            </div>
            <p className="text-xs text-pleisto-ochre font-medium mt-0.5">
              {currentModel.subtitle}
            </p>
          </div>

          {/* Local X-Ray Switcher */}
          <button
            onClick={() => setLocalXRay(!localXRay)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all flex items-center gap-1.5 ${
              showXRay
                ? 'bg-bioneuro-emerald/20 text-bioneuro-mint border-bioneuro-emerald shadow-glow-emerald'
                : 'bg-obsidian-200 border-surface-border text-slate-400 hover:text-white'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>{showXRay ? 'Bio-Neuro X-Ray (Aktywny)' : 'Podgląd Bio-Neuro X-Ray'}</span>
          </button>
        </div>

        {/* Dynamic Interactive Component */}
        <div className="pt-2">
          {renderInteractiveComponent()}
        </div>

        {/* Detailed Academic Explanations (Dual View: Behavioral vs X-Ray) */}
        {showXRay ? (
          <div className="p-4 rounded-xl bg-bioneuro-dark/25 border border-bioneuro-emerald/40 text-xs text-slate-300 leading-relaxed flex flex-col gap-3 animate-in fade-in">
            <div className="flex items-center gap-2 text-bioneuro-mint font-mono font-bold border-b border-bioneuro-emerald/30 pb-2">
              <Brain className="w-4 h-4 text-bioneuro-mint" />
              <span>SUBSTRAT NEUROCHEMICZNY I OBWODY MÓZGOWE (BIO-NEURO X-RAY)</span>
            </div>
            <p>
              <strong className="text-slate-100 font-sans block mb-1">Mechanizm neurobiologiczny:</strong>
              {currentModel.bioNeuroSubstrate}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-2">
              <strong className="text-slate-100 font-mono text-[11px] uppercase tracking-wider text-amber-300">
                Rdzeń Hipotezy Ewolucyjnej:
              </strong>
              <p>{currentModel.coreHypothesis}</p>
              <div className="mt-auto pt-2 text-[11px] text-slate-400 font-mono">
                Źródła empiryczne: {currentModel.evidenceSummary}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-2">
              <strong className="text-slate-100 font-mono text-[11px] uppercase tracking-wider text-modern-cyan">
                Implikacje we Współczesnym Kapitalizmie:
              </strong>
              <p>{currentModel.modernImplication}</p>
              <div className="mt-auto pt-2 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-slate-500" />
                <span>Kluczowi autorzy: {currentModel.keyResearchers.join(', ')}</span>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
