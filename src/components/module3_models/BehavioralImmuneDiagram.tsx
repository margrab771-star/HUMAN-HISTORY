import React, { useState } from 'react';
import { ShieldCheck, Bug, HeartCrack, Scale, AlertOctagon } from 'lucide-react';

export const BehavioralImmuneDiagram: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<'pathogen' | 'sexual' | 'moral'>('pathogen');

  const domains = {
    pathogen: {
      name: '1. Wstręt Patogenowy (Pathogen Disgust)',
      icon: <Bug className="w-5 h-5 text-emerald-400" />,
      triggers: 'Fizyczne źródła infekcji biologicznej: odchody, krew, ropa, robactwo, zgnilizna, zapach zepsutego mięsa, osoby kaszlące lub z wykwitami skórnymi.',
      mechanism: 'Błyskawiczny odruch cofnięcia, mdłości i skurczu żołądka kontrolowany przez przednią korę wyspy. Pozwala uniknąć wniknięcia patogenu do ustroju, oszczędzając organizmowi gigantyczny koszt metaboliczny gorączki i leukocytozy.'
    },
    sexual: {
      name: '2. Wstręt Seksualny (Sexual Disgust)',
      icon: <HeartCrack className="w-5 h-5 text-rose-400" />,
      triggers: 'Potencjalni partnerzy o wysokim ryzyku kosztów darwinowskich: bliscy krewni (ochrona przed inbreedingiem — Efekt Westermarcka), osobniki z objawami infekcji wenerycznych lub partnerzy niezdolni do inwestycji.',
      mechanism: 'Wygaszenie pożądania seksualnego na rzecz natychmiastowej awersji somatycznej. Działa jako behawioralny filtr optymalizujący dobór płciowy.'
    },
    moral: {
      name: '3. Wstręt Moralny (Moral Disgust)',
      icon: <Scale className="w-5 h-5 text-amber-400" />,
      triggers: 'Pasożytnictwo społeczne, krzywda dzieci, oszustwo koalicyjne, zdrada klanu, kazirodztwo i łamanie świętych tabu.',
      mechanism: 'Kooptacja tego samego układu trzewno-limbicznego kory wyspy na potrzeby regulacji norm społecznych. Reakcja na podłość wyzwala ten sam grymas twarzy (uniesienie górnej wargi i zmarszczenie nosa) co wąchanie zepsutego mleka.'
    }
  };

  const current = domains[activeDomain];

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      <div className="border-b border-surface-border pb-3">
        <h3 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Behawioralny Układ Odpornościowy (BIS): Trzy Domeny Tybura</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Mark Schaller i Joshua Tybur: jak fizjologiczny strach przed zarazkami przekształcił się w architekturę wstrętu moralnego i politycznego.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {(['pathogen', 'sexual', 'moral'] as const).map(dom => {
          const isSelected = activeDomain === dom;
          return (
            <button
              key={dom}
              onClick={() => setActiveDomain(dom)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-obsidian-200 border-emerald-400 shadow-glow-emerald text-white'
                  : 'bg-surface hover:bg-surface-hover border-surface-border text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                {domains[dom].icon}
                <h4 className="font-serif font-bold text-xs">{domains[dom].name.split('(')[0]}</h4>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                {domains[dom].triggers}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Domain Explainer */}
      <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3 text-xs text-slate-300 leading-relaxed">
        <div className="flex items-center gap-2 border-b border-surface-border pb-2">
          <span className="font-mono text-xs text-emerald-400 font-bold">Analiza domeny:</span>
          <h4 className="font-serif font-bold text-base text-slate-100">{current.name}</h4>
        </div>

        <div>
          <strong className="text-slate-200 font-mono block mb-0.5">Bodźce wyzwalające:</strong>
          <p className="text-slate-300">{current.triggers}</p>
        </div>

        <div>
          <strong className="text-slate-200 font-mono block mb-0.5">Podłoże neuronalne i funkcja:</strong>
          <p className="text-slate-300">{current.mechanism}</p>
        </div>

        {/* Political Weaponization Note */}
        <div className="p-3 rounded-lg bg-surface border border-rose-500/30 text-rose-300 flex items-start gap-2.5 mt-2">
          <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div className="text-[11px]">
            <strong>Instrumentalizacja w polityce i wojnie:</strong> Totalitaryzmy zawsze dehumanizują wrogów przy pomocy terminologii patogenowej (np. „pasożyty”, „zaraza”, „rak narodu”), ponieważ bezpośrednio stymuluje to wyspę przednią, omijając racjonalne hamulce kory przedczołowej i ułatwiając eksterminację.
          </div>
        </div>
      </div>
    </div>
  );
};
