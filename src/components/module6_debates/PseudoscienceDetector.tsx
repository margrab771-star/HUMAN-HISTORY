import React, { useState } from 'react';
import { PSEUDOSCIENCE_DETECTOR_FILTERS } from '../../data/researchersAndDebatesData';
import { ShieldAlert, CheckSquare, Square, HelpCircle } from 'lucide-react';

export const PseudoscienceDetector: React.FC = () => {
  const [checkedFilters, setCheckedFilters] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedFilters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalCount = PSEUDOSCIENCE_DETECTOR_FILTERS.length;
  const passedCount = Object.values(checkedFilters).filter(Boolean).length;

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-surface-border pb-4">
        <div>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif font-bold text-xl text-slate-100">
              Interaktywny Panel: „Detektor Pseudonauki” (6 Filtrów Akademickich)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Użyj tej checklisty, aby ocenić dowolną tezę pop-psychologii ewolucyjnej, artykuł prasowy lub książkę popularnonaukową.
          </p>
        </div>

        {/* Score Pill */}
        <div className="px-3.5 py-1.5 rounded-lg bg-obsidian-200 border border-surface-border font-mono text-xs text-slate-300 flex items-center gap-2">
          <span>Zweryfikowano filtrów:</span>
          <span className={`font-bold ${passedCount === totalCount ? 'text-bioneuro-mint' : 'text-amber-400'}`}>
            {passedCount} / {totalCount}
          </span>
        </div>
      </div>

      {/* 6 Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PSEUDOSCIENCE_DETECTOR_FILTERS.map(filter => {
          const isChecked = !!checkedFilters[filter.id];
          return (
            <div
              key={filter.id}
              className={`p-4 rounded-xl border transition-all duration-200 flex flex-col gap-3 ${
                isChecked
                  ? 'bg-bioneuro-dark/20 border-bioneuro-emerald/60 ring-1 ring-bioneuro-emerald/40'
                  : 'bg-obsidian-200 border-surface-border'
              }`}
            >
              {/* Header with Checkbox */}
              <div className="flex items-start justify-between gap-3 border-b border-surface-border pb-2">
                <div className="flex items-start gap-2">
                  <button
                    onClick={() => toggleCheck(filter.id)}
                    className="mt-0.5 text-slate-400 hover:text-white transition-colors"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-bioneuro-mint" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-500" />
                    )}
                  </button>
                  <h4 className="font-serif font-bold text-sm text-slate-100">
                    {filter.principleTitle}
                  </h4>
                </div>
              </div>

              {/* Standard vs Trap */}
              <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <div>
                  <strong className="text-bioneuro-mint font-mono text-[10px] uppercase block mb-0.5">
                    Rygor akademicki:
                  </strong>
                  <p>{filter.academicStandard}</p>
                </div>

                <div className="p-2.5 rounded bg-surface border border-rose-500/30 text-rose-300 text-[11px]">
                  <strong>Pułapka pop-naukowa:</strong> {filter.popularFallacyTrap}
                </div>
              </div>

              {/* Diagnostic Questions */}
              <div className="space-y-1 text-xs pt-1">
                <span className="text-slate-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> Pytania diagnostyczne:
                </span>
                <ul className="space-y-1 text-[11px] text-slate-400 list-disc list-inside">
                  {filter.diagnosticQuestions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>

              {/* Practical Case */}
              <div className="mt-auto pt-2 border-t border-surface-border text-[10px] text-slate-400 font-mono">
                <strong className="text-slate-300">Przykład praktyczny:</strong> {filter.practicalExample}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
