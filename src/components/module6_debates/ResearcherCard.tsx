import React from 'react';
import { ScientificResearcher } from '../../types';
import { BookOpen, Quote, CheckCircle } from 'lucide-react';

interface ResearcherCardProps {
  researcher: ScientificResearcher;
}

export const ResearcherCard: React.FC<ResearcherCardProps> = ({ researcher }) => {
  return (
    <article aria-label={researcher.name} className="p-4 md:p-5 rounded-xl border border-surface-border bg-surface/90 hover:border-slate-600 transition-all duration-200 flex flex-col gap-3.5 shadow-lg">
      
      {/* Header */}
      <div className="border-b border-surface-border pb-2.5 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-serif font-bold text-lg text-slate-100">
            {researcher.name}
          </h3>
          <p className="text-xs text-amber-400 font-medium">
            {researcher.affiliation} <span className="text-slate-500 font-mono">({researcher.years})</span>
          </p>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-border text-slate-300 shrink-0">
          {researcher.discipline.split(' ')[0]}
        </span>
      </div>

      {/* Core Thesis */}
      <div className="text-xs text-slate-300 leading-relaxed">
        <strong className="text-slate-100 font-mono text-[11px] block mb-1">
          Kluczowa teza naukowa:
        </strong>
        <p>{researcher.coreThesis}</p>
      </div>

      {/* Magnum Opus */}
      <div className="p-2.5 rounded-lg bg-obsidian-200 border border-surface-border text-xs flex items-start gap-2">
        <BookOpen className="w-4 h-4 text-pleisto-ochre shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-200 block text-[11px]">Dzieło fundamentalne (Magnum Opus):</strong>
          <span className="text-amber-200/90 font-serif italic">{researcher.magnumOpus}</span>
        </div>
      </div>

      {/* Key Contributions */}
      <div className="space-y-1 text-xs">
        <span className="text-slate-400 font-mono text-[10px] uppercase font-bold block">
          Główne osiągnięcia empiryczne:
        </span>
        <ul className="space-y-1">
          {researcher.keyContributions.map((contrib, i) => (
            <li key={i} className="flex items-start gap-1.5 text-slate-300 text-[11px]">
              <CheckCircle className="w-3.5 h-3.5 text-bioneuro-mint shrink-0 mt-0.5" />
              <span>{contrib}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Primary Quote */}
      {researcher.primaryQuote && (
        <div className="mt-auto pt-2.5 border-t border-surface-border text-[11px] text-slate-400 italic flex items-start gap-2">
          <Quote className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p className="font-serif text-slate-300">{researcher.primaryQuote}</p>
        </div>
      )}

    </article>
  );
};
