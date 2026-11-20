import React from 'react';
import { KAMIKAZE_SPERM_DEBATE } from '../../data/bioNeuroData';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { AlertTriangle, CheckCircle2, XCircle, FlaskConical } from 'lucide-react';

export const KamikazeDebateCard: React.FC = () => {
  return (
    <article aria-label="Weryfikacja sporu o plemniki kamikadze" className="rounded-xl border border-rose-500/40 bg-surface p-4 md:p-6 shadow-xl flex flex-col gap-5">
      
      {/* Header with Level 3 Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-surface-border pb-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-serif font-bold text-lg md:text-xl text-slate-100 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-rose-400" />
              <span>Dedykowana Karta Weryfikacji: Spór o „Plemniki Kamikadze”</span>
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Lekcja akademickiego sceptycyzmu: jak sensacyjna pop-hipoteza adaptacjonistyczna uległa obaleniu w kontrolowanym laboratorium.
          </p>
        </div>

        <ConfidenceBadge level={KAMIKAZE_SPERM_DEBATE.badge} size="md" />
      </div>

      {/* Two Columns: Baker & Bellis (Thesis A) vs Moore et al. (Thesis B) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        
        {/* Thesis A: Baker & Bellis */}
        <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-2">
          <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
            <XCircle className="w-4 h-4 shrink-0" />
            <span>Koncepcja Obalona (Lata 90.)</span>
          </div>
          
          <div className="text-slate-400 font-mono text-[11px]">
            {KAMIKAZE_SPERM_DEBATE.thesisA.author}
          </div>

          <h4 className="font-serif font-bold text-slate-200 text-sm">
            {KAMIKAZE_SPERM_DEBATE.thesisA.name}
          </h4>

          <p className="text-slate-300 leading-relaxed text-[11px] mt-1">
            {KAMIKAZE_SPERM_DEBATE.thesisA.claim}
          </p>

          <div className="mt-auto pt-2 text-[10px] text-rose-400/90 font-mono">
            Status: Obalona empirycznie • Brak replikacji w badaniach andrologicznych
          </div>
        </div>

        {/* Thesis B: Harry Moore et al. */}
        <div className="p-4 rounded-xl bg-obsidian-200 border border-emerald-500/40 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Weryfikacja Laboratoryjna (1999)</span>
          </div>
          
          <div className="text-slate-400 font-mono text-[11px]">
            {KAMIKAZE_SPERM_DEBATE.thesisB.author}
          </div>

          <h4 className="font-serif font-bold text-slate-200 text-sm">
            {KAMIKAZE_SPERM_DEBATE.thesisB.name}
          </h4>

          <p className="text-slate-300 leading-relaxed text-[11px] mt-1">
            {KAMIKAZE_SPERM_DEBATE.thesisB.claim}
          </p>

          <div className="mt-auto pt-2 text-[10px] text-emerald-400/90 font-mono">
            Status: Wiodący konsensus empiryczny • Potwierdzony w Proceedings of the Royal Society
          </div>
        </div>

      </div>

      {/* Academic Verdict Banner */}
      <div className="p-3.5 rounded-lg bg-surface border border-surface-border text-xs flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-300 font-mono block mb-0.5">WERDYKT EPISZTEMOLOGICZNY:</strong>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            {KAMIKAZE_SPERM_DEBATE.verdict}
          </p>
        </div>
      </div>

    </article>
  );
};
