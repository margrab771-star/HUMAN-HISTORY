import React from 'react';
import { Flame, ShieldAlert, Heart, Users } from 'lucide-react';

export const GoodnessParadoxPanel: React.FC = () => {
  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      <div className="border-b border-surface-border pb-3">
        <h3 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-500" />
          <span>Paradoks Dobra: Altruizm Wewnątrzgrupowy vs. Agresja Proaktywna</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Model Richarda Wranghama (The Goodness Paradox, 2019): dlaczego człowiek jest jednocześnie najłagodniejszym i najbardziej śmiercionośnym ssakiem na Ziemi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
        
        {/* Left: Agresja Reaktywna */}
        <div className="p-4 rounded-xl bg-obsidian-200 border border-emerald-500/40 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-surface-border pb-2">
            <Heart className="w-4 h-4" />
            <span>1. Agresja Reaktywna: Ekstremalnie Zredukowana</span>
          </div>

          <p className="leading-relaxed">
            <strong>Definicja:</strong> Gorący, impulsywny wybuch złości w odpowiedzi na prowokację, lęk lub naruszenie przestrzeni osobistej.
          </p>

          <div className="p-3 rounded bg-surface border border-surface-border space-y-1.5">
            <span className="text-[11px] font-mono text-emerald-300 font-bold block">Status u Homo sapiens:</span>
            <p className="text-slate-400 text-[11px]">
              Jesteśmy pod tym względem łagodniejsi niż szympansy czy bonobo. Tysiące obcych ludzi może stłoczyć się w metrze lub samolocie bez wybuchu krwawej jatki.
            </p>
          </div>

          <div className="space-y-1">
            <strong className="text-slate-200 font-mono text-[11px]">Mechanizm selekcji:</strong>
            <p className="text-slate-400">
              Samoudomowienie (self-domestication): przez setki tysięcy lat koalicje podwładnych łowców wspólnie eliminowały cholerycznych, agresywnych tyranów, faworyzując geny spokoju i łagodności.
            </p>
          </div>
        </div>

        {/* Right: Agresja Proaktywna */}
        <div className="p-4 rounded-xl bg-obsidian-200 border border-rose-500/40 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm border-b border-surface-border pb-2">
            <ShieldAlert className="w-4 h-4" />
            <span>2. Agresja Proaktywna: Bezprecedensowo Rozwinięta</span>
          </div>

          <p className="leading-relaxed">
            <strong>Definicja:</strong> Chłodno zaplanowana, beznamiętna, koalicyjna przemoc realizowana z premedytacją wobec wybranego celu.
          </p>

          <div className="p-3 rounded bg-surface border border-surface-border space-y-1.5">
            <span className="text-[11px] font-mono text-rose-300 font-bold block">Status u Homo sapiens:</span>
            <p className="text-slate-400 text-[11px]">
              Najwyższy w świecie ożywionym. Umożliwia zorganizowane rajdy o świcie, wojny totalne, ludobójstwa i systemy obozowe.
            </p>
          </div>

          <div className="space-y-1">
            <strong className="text-slate-200 font-mono text-[11px]">Podłoże neurobiologiczne:</strong>
            <p className="text-slate-400">
              Wyciszenie ciała migdałowatego przy maksymalnej aktywacji kory przedczołowej (dlPFC) i prążkowia – przemoc staje się zadaniem logiczno-taktycznym podlegającym chłodnej optymalizacji.
            </p>
          </div>
        </div>

      </div>

      <div className="p-3 rounded-lg bg-obsidian-300 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5 font-mono">
        <Users className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong>Morał antropologiczny:</strong> Człowiek nie potrzebuje nienawiści w afekcie, by dokonać zbrodni. Najbardziej niszczycielskie akty w historii ludzkości były produktem wysokiej lojalności wewnątrzgrupowej, dyscypliny i zaawansowanego planowania proaktywnego.
        </div>
      </div>
    </div>
  );
};
