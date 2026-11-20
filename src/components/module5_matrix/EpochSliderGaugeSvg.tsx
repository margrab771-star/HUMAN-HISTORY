import React from 'react';
import { Shield, TrendingUp, AlertTriangle } from 'lucide-react';

interface EpochSliderGaugeSvgProps {
  socialConstraintLevel: number; // 0-100%
  statusEconomicPremium: number; // 0-100%
  cohesionMentalHealthCost: number; // 0-100%
}

export const EpochSliderGaugeSvg: React.FC<EpochSliderGaugeSvgProps> = ({
  socialConstraintLevel,
  statusEconomicPremium,
  cohesionMentalHealthCost
}) => {
  return (
    <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-surface-border pb-2">
        <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
          Trzy Wskaźniki Dynamiki Selekcyjnej (0–100%)
        </span>
        <span className="text-[10px] text-slate-500 font-mono">Wizualizacja parametrów niszy</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Gauge 1: Siła Hamulców Społecznych */}
        <div className="p-3 rounded-lg bg-surface border border-surface-border flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 flex items-center gap-1.5 font-bold">
              <Shield className="w-3.5 h-3.5 text-bioneuro-mint" />
              Siła Hamulców:
            </span>
            <span className="text-bioneuro-mint font-bold text-sm">{socialConstraintLevel}%</span>
          </div>

          <div className="w-full h-3 bg-obsidian-400 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-600 to-bioneuro-emerald rounded-full transition-all duration-500"
              style={{ width: `${socialConstraintLevel}%` }}
            />
          </div>

          <span className="text-[10px] text-slate-400 font-sans leading-tight">
            {socialConstraintLevel > 70
              ? 'Wysoka przejrzystość reputacyjna klanu; natychmiastowe karanie dewiacji.'
              : socialConstraintLevel > 40
              ? 'Umiarkowana kontrola instytucjonalna i prawo państwowe.'
              : 'Zdjęcie hamulców: anonimowość metropolitalna i korporacyjna.'}
          </span>
        </div>

        {/* Gauge 2: Premia Statusowo-Ekonomiczna */}
        <div className="p-3 rounded-lg bg-surface border border-surface-border flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 flex items-center gap-1.5 font-bold">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              Premia Statusowa:
            </span>
            <span className="text-amber-400 font-bold text-sm">{statusEconomicPremium}%</span>
          </div>

          <div className="w-full h-3 bg-obsidian-400 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${statusEconomicPremium}%` }}
            />
          </div>

          <span className="text-[10px] text-slate-400 font-sans leading-tight">
            {statusEconomicPremium > 70
              ? 'Ekstremalna premia finansowa, kapitałowa i prestiżowa w danej epoce.'
              : statusEconomicPremium > 40
              ? 'Umiarkowane zyski statusowe w hierarchii.'
              : 'Niewielka lub ujemna gratyfikacja ekonomiczna.'}
          </span>
        </div>

        {/* Gauge 3: Koszt dla Spójności / Zdrowia Psychicznego */}
        <div className="p-3 rounded-lg bg-surface border border-surface-border flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 flex items-center gap-1.5 font-bold">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              Koszt Spójności:
            </span>
            <span className="text-rose-400 font-bold text-sm">{cohesionMentalHealthCost}%</span>
          </div>

          <div className="w-full h-3 bg-obsidian-400 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-500 to-rose-500 rounded-full transition-all duration-500"
              style={{ width: `${cohesionMentalHealthCost}%` }}
            />
          </div>

          <span className="text-[10px] text-slate-400 font-sans leading-tight">
            {cohesionMentalHealthCost > 70
              ? 'Wysoka destrukcja więzi społecznych, alienacja i przeciążenie psychiczne.'
              : cohesionMentalHealthCost > 40
              ? 'Częściowe koszty adaptacyjne jednostki.'
              : 'Niski koszt; wysoka harmonia psychospołeczna.'}
          </span>
        </div>

      </div>
    </div>
  );
};
