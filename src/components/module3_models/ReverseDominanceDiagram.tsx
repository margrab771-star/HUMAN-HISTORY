import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, EyeOff, Skull, AlertCircle } from 'lucide-react';

export const ReverseDominanceDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: 'Wyśmiewanie i Ironia (Criticism & Teasing)',
      icon: <MessageCircle className="w-5 h-5 text-amber-400" />,
      desc: 'Gdy łowca po udanym polowaniu zaczyna zachowywać się arogancko lub próbuje decydować za innych, klan stosuje rytualne „studzenie dumy” (insulting the meat u ludu !Kung/San). Grupa publicznie wyśmiewa jakość upolowanej zwierzyny, sprowadzając aspirującego tyrana na ziemię.'
    },
    {
      num: 2,
      title: 'Powszechna Krytyka i Plotka Reputacyjna (Warning & Direct Scolding)',
      icon: <AlertCircle className="w-5 h-5 text-yellow-400" />,
      desc: 'Gdy wyśmiewanie nie działa, starszyzna i kobiety klanu otwarcie konfrontują jednostkę. Informacje o jej egoizmie i skąpstwie krążą w plotkach wokół każdego ogniska, niszcząc jej kapitał matrymonialny i koalicyjny.'
    },
    {
      num: 3,
      title: 'Ostracyzm Społeczny (Social Shunning)',
      icon: <EyeOff className="w-5 h-5 text-rose-400" />,
      desc: 'Całkowite zignorowanie obecności osobnika. Nikt z nim nie rozmawia, nie dzieli się tytoniem ani miodem, nie odpowiada na jego pytania. Z perspektywy neurobiologicznej aktywuje to dACC z siłą bólu fizycznego, sygnalizując wykluczenie.'
    },
    {
      num: 4,
      title: 'Wygnanie lub Koalicyjna Egzekucja (Execution)',
      icon: <Skull className="w-5 h-5 text-red-500" />,
      desc: 'Ostateczność wobec recydywisty: jeśli osobnik stosuje przemoc fizyczną i zagraża grupie, rada mężczyzn (często z udziałem jego własnych rodzonych braci, by uniknąć krwawej zemsty rodowej) podejmuje decyzję o skrytobójczym zabiciu tyrana podczas polowania lub wygnaniu na pewną śmierć.'
    }
  ];

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      <div className="border-b border-surface-border pb-3">
        <h3 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-bioneuro-mint" />
          <span>Wyrównywanie Hierarchii i Kontrola Reputacyjna: 4 Stopnie Boehma</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Christopher Boehm: jak egalitaryzm łowców-zbieraczy blokował powstanie samców alfa poprzez „odwróconą hierarchię dominacji”.
        </p>
      </div>

      {/* 4 Steps Timeline / Escalation Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map(s => {
          const isSelected = activeStep === s.num;
          return (
            <div
              key={s.num}
              onClick={() => setActiveStep(s.num)}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-obsidian-200 border-amber-400 shadow-glow-terracotta ring-1 ring-amber-400/50'
                  : 'bg-surface hover:bg-surface-hover border-surface-border'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-surface-border flex items-center justify-center font-mono text-xs font-bold text-slate-200">
                  {s.num}
                </span>
                <span className="text-xs font-mono font-bold text-slate-100 truncate">
                  Stopień {s.num}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                {s.icon}
                <h4 className="font-serif font-bold text-xs text-slate-200 line-clamp-1">
                  {s.title.split('(')[0]}
                </h4>
              </div>

              <p className="text-[11px] text-slate-400 line-clamp-3 leading-relaxed">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Active Step Deep Explainer */}
      <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-amber-400 font-bold">
            Szczegółowa mechanika etapu {activeStep}:
          </span>
          <h4 className="font-serif font-bold text-base text-slate-100">
            {steps[activeStep - 1].title}
          </h4>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {steps[activeStep - 1].desc}
        </p>
        <div className="mt-2 pt-2 border-t border-surface-border text-[11px] text-slate-400 font-mono">
          Konsekwencja we współczesnym kapitalizmie: w anonimowych strukturach korporacyjnych podwładni nie mają mechanizmu koalicyjnego wyśmiania tyrana – stąd bezkarność psychopatii korporacyjnej.
        </div>
      </div>
    </div>
  );
};
