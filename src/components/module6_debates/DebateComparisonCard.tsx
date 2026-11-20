import React from 'react';
import { AcademicDebate } from '../../types';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { CheckCircle } from 'lucide-react';

interface DebateComparisonCardProps {
  debate: AcademicDebate;
}

export const DebateComparisonCard: React.FC<DebateComparisonCardProps> = ({ debate }) => {
  return (
    <article aria-label={debate.title} className="p-4 md:p-6 rounded-xl border border-surface-border bg-surface/90 shadow-xl flex flex-col gap-4">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-surface-border pb-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-serif font-bold text-lg md:text-xl text-slate-100">
              {debate.title}
            </h3>
          </div>
          <p className="text-xs text-amber-400 font-mono mt-0.5">
            Dziedzina: {debate.field} • {debate.shortTopic}
          </p>
        </div>

        <ConfidenceBadge level={debate.confidenceLevel} size="sm" />
      </div>

      {/* Two Positions Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
        
        {/* Position A */}
        <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-2.5">
          <div className="flex items-center justify-between border-b border-surface-border pb-2">
            <span className="font-mono text-xs font-bold text-amber-300">
              STANOWISKO A
            </span>
            <span className="text-[10px] text-slate-400 font-mono truncate max-w-[150px]">
              {debate.positionA.proponents.join(', ')}
            </span>
          </div>

          <p className="text-slate-200">
            {debate.positionA.argument}
          </p>

          <div className="mt-auto pt-2 border-t border-surface-border/60 text-[10px] text-slate-400 font-mono">
            <strong className="text-slate-300">Warunek falsyfikacji:</strong> {debate.positionA.falsificationCondition}
          </div>
        </div>

        {/* Position B */}
        <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-2.5">
          <div className="flex items-center justify-between border-b border-surface-border pb-2">
            <span className="font-mono text-xs font-bold text-bioneuro-mint">
              STANOWISKO B
            </span>
            <span className="text-[10px] text-slate-400 font-mono truncate max-w-[150px]">
              {debate.positionB.proponents.join(', ')}
            </span>
          </div>

          <p className="text-slate-200">
            {debate.positionB.argument}
          </p>

          <div className="mt-auto pt-2 border-t border-surface-border/60 text-[10px] text-slate-400 font-mono">
            <strong className="text-slate-300">Warunek falsyfikacji:</strong> {debate.positionB.falsificationCondition}
          </div>
        </div>

      </div>

      {/* Current Empirical Consensus Banner */}
      <div className="p-3.5 rounded-lg bg-obsidian-300 border border-bioneuro-emerald/40 text-xs text-slate-300 flex items-start gap-3">
        <CheckCircle className="w-4 h-4 text-bioneuro-mint shrink-0 mt-0.5" />
        <div>
          <strong className="text-bioneuro-mint font-mono block mb-0.5">
            AKTUALNY KONSENSUS NAUKOWY (STAN BADAŃ NA 2024+):
          </strong>
          <p className="leading-relaxed text-[11px] text-slate-200">
            {debate.currentEmpiricalConsensus}
          </p>
        </div>
      </div>

    </article>
  );
};
