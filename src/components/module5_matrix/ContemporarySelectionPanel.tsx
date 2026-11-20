import React from 'react';
import { CONTEMPORARY_SELECTION_TRACKS } from '../../data/traitContextMatrixData';
import { DollarSign, Dna, AlertCircle, ArrowUpRight, ArrowDownRight, RefreshCcw } from 'lucide-react';

export const ContemporarySelectionPanel: React.FC = () => {
  const { culturalEconomicTrack, biologicalReproductiveTrack } = CONTEMPORARY_SELECTION_TRACKS;

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      
      {/* Title */}
      <div className="border-b border-surface-border pb-3">
        <h3 className="font-serif font-bold text-xl md:text-2xl text-slate-100 flex items-center gap-2">
          <RefreshCcw className="w-5 h-5 text-modern-cyan" />
          <span>Panel: Co Jest DZIŚ Aktywnie Premiowane? Dwa Równoległe Tory Selekcji XXI w.</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Wielki paradoks ewolucyjny późnego kapitalizmu: cechy gwarantujące najwyższy sukces finansowy i statusowy są w społeczeństwach rozwiniętych ujemnie skorelowane z sukcesem darwinowskim (liczbą potomstwa).
        </p>
      </div>

      {/* Two Parallel Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Track 1: Kulturowo-Ekonomiczny */}
        <div className="p-4 md:p-5 rounded-xl bg-obsidian-200 border border-modern-cyan/40 flex flex-col gap-4">
          <div className="border-b border-surface-border pb-3">
            <div className="flex items-center gap-2 text-modern-cyan font-mono text-xs font-bold uppercase tracking-wider mb-1">
              <DollarSign className="w-4 h-4 text-modern-cyan" />
              <span>TOR 1: SELEKCJA KULTUROWO-EKONOMICZNA</span>
            </div>
            <h4 className="font-serif font-bold text-lg text-slate-100">
              Sukces Statusowy w Kapitalizmie i Erze AI
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Fenotypy i dyspozycje psychiczne faworyzowane przez rynek finansowy, korporacje, venture capital i gospodarkę uwagi.
            </p>
          </div>

          <div className="space-y-4">
            {culturalEconomicTrack.map(item => (
              <div key={item.id} className="p-3.5 rounded-lg bg-surface border border-surface-border flex flex-col gap-2 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <h5 className="font-serif font-bold text-sm text-slate-100">
                    {item.title}
                  </h5>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold shrink-0 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    <ArrowUpRight className="w-3 h-3" /> PREMIA
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed text-[11px]">
                  <strong>Mechanizm rynkowy:</strong> {item.mechanism}
                </p>

                <div className="text-[10px] font-mono text-slate-400 pt-1 border-t border-surface-border/50">
                  <strong>Dowody:</strong> {item.empiricalEvidence}
                </div>

                <div className="text-[10px] text-amber-300 font-sans italic bg-obsidian-300 p-2 rounded">
                  <strong>Zderzenie z rozrodem:</strong> {item.darwinianFitnessVsStatus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Biologiczno-Reprodukcyjny */}
        <div className="p-4 md:p-5 rounded-xl bg-obsidian-200 border border-bioneuro-emerald/40 flex flex-col gap-4">
          <div className="border-b border-surface-border pb-3">
            <div className="flex items-center gap-2 text-bioneuro-mint font-mono text-xs font-bold uppercase tracking-wider mb-1">
              <Dna className="w-4 h-4 text-bioneuro-mint" />
              <span>TOR 2: SELEKCJA BIOLOGICZNO-REPRODUKCYJNA (GWAS)</span>
            </div>
            <h4 className="font-serif font-bold text-lg text-slate-100">
              Darwinian Fitness w XXI Wieku (Biobanki i Islandia)
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Rzeczywista ewolucja genetyczna: dane GWAS z UK Biobank i deCODE Genetics (Kong 2017, Beauchamp 2016, Sanjak 2018).
            </p>
          </div>

          <div className="space-y-4">
            {biologicalReproductiveTrack.map(item => (
              <div key={item.id} className="p-3.5 rounded-lg bg-surface border border-surface-border flex flex-col gap-2 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <h5 className="font-serif font-bold text-sm text-slate-100">
                    {item.title}
                  </h5>
                  <span className={`flex items-center gap-1 text-[10px] font-mono font-bold shrink-0 px-2 py-0.5 rounded border ${
                    item.selectiveDirection === 'negative'
                      ? 'text-rose-400 bg-rose-500/10 border-rose-500/30'
                      : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                  }`}>
                    {item.selectiveDirection === 'negative' ? <ArrowDownRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
                    {item.selectiveDirectionLabel.split(' ')[0]}
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed text-[11px]">
                  <strong>Mechanizm biologiczny:</strong> {item.mechanism}
                </p>

                <div className="text-[10px] font-mono text-slate-400 pt-1 border-t border-surface-border/50">
                  <strong>Twarde dane:</strong> {item.empiricalEvidence}
                </div>

                {item.gwasCitations && (
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {item.gwasCitations.map((cit, i) => (
                      <span key={i} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface-border text-slate-300">
                        {cit}
                      </span>
                    ))}
                  </div>
                )}

                <div className="text-[10px] text-bioneuro-mint font-sans italic bg-obsidian-300 p-2 rounded">
                  <strong>Wniosek darwinowski:</strong> {item.darwinianFitnessVsStatus}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Synthesis Alert Banner */}
      <div className="p-4 rounded-xl bg-obsidian-300 border border-amber-500/40 flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-300 font-mono block mb-1">
            GŁÓWNY WNIOSEK MERYTORYCZNY DLA XXI WIEKU:
          </strong>
          Ewolucja człowieka nie zatrzymała się – ona uległa paradoksalnemu <em>rozszczepieniu</em>. Społeczeństwo premiuje finansowo fenotypy, które ograniczają własną reprodukcję, podczas gdy sukces genetyczny odnoszą enklawy alloparentingu kulturowego i wczesnego rodzicielstwa.
        </div>
      </div>

    </div>
  );
};
