import React from 'react';
import { REPRODUCTIVE_BIOLOGY_DETAILS } from '../../data/bioNeuroData';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { Heart, Activity, Shield } from 'lucide-react';

export const ReproductiveBiologyPanel: React.FC = () => {
  const { concealedOvulation, glansRidgeDisplacement, hormonalBondingAndFatherhood } = REPRODUCTIVE_BIOLOGY_DETAILS;

  return (
    <div className="flex flex-col gap-6">
      
      {/* 3 Reproductive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Concealed Ovulation */}
        <div className="p-4 rounded-xl bg-surface border border-surface-border flex flex-col gap-3">
          <div className="flex items-start justify-between gap-2 border-b border-surface-border pb-2">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400" />
              <h4 className="font-serif font-bold text-sm text-slate-100">{concealedOvulation.title}</h4>
            </div>
            <ConfidenceBadge level={concealedOvulation.badge} size="sm" />
          </div>

          <ul className="space-y-1.5 text-xs text-slate-300">
            {concealedOvulation.mechanisms.map((m, idx) => (
              <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                <span className="text-amber-400">•</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Glans Ridge Semen Displacement */}
        <div className="p-4 rounded-xl bg-surface border border-surface-border flex flex-col gap-3">
          <div className="flex items-start justify-between gap-2 border-b border-surface-border pb-2">
            <div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-pleisto-ochre" />
                <h4 className="font-serif font-bold text-sm text-slate-100">{glansRidgeDisplacement.title}</h4>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">{glansRidgeDisplacement.researcher}</span>
            </div>
            <ConfidenceBadge level={glansRidgeDisplacement.badge} size="sm" />
          </div>

          <ul className="space-y-1.5 text-xs text-slate-300">
            {glansRidgeDisplacement.mechanisms.map((m, idx) => (
              <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                <span className="text-amber-400">•</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fatherhood Hormonal Reprogramming */}
        <div className="p-4 rounded-xl bg-surface border border-surface-border flex flex-col gap-3">
          <div className="flex items-start justify-between gap-2 border-b border-surface-border pb-2">
            <div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-bioneuro-mint" />
                <h4 className="font-serif font-bold text-sm text-slate-100">{hormonalBondingAndFatherhood.title}</h4>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">{hormonalBondingAndFatherhood.researcher}</span>
            </div>
            <ConfidenceBadge level={hormonalBondingAndFatherhood.badge} size="sm" />
          </div>

          <ul className="space-y-1.5 text-xs text-slate-300">
            {hormonalBondingAndFatherhood.mechanisms.map((m, idx) => (
              <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                <span className="text-amber-400">•</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
};
