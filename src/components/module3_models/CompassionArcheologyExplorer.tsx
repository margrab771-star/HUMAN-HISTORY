import React, { useState } from 'react';
import { HeartHandshake, Bone, MapPin, Calendar, CheckCircle } from 'lucide-react';

export const CompassionArcheologyExplorer: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const cases = [
    {
      id: 'dmanisi',
      name: 'Bezzębny Starzec z Dmanisi (D3444 / D3900)',
      taxon: 'Homo erectus / ergaster',
      dating: 'ok. 1,77 mln lat temu',
      location: 'Dmanisi, Gruzja (Kaukaz)',
      fossilEvidence: 'Kompletna czaszka i żuchwa osobnika, u którego wszystkie zęby (poza jednym kłem) uległy resorpcji na wiele lat przed śmiercią.',
      significance: 'Osobnik nie był w stanie przeżuwać twardego pokarmu surowego. Grupa musiała przez lata miażdżyć, gotować lub wstępnie przeżuwać dla niego mięso i korzenie, dowodząc instytucjonalnej opieki nad niedołężnym starcem niemal 1,8 mln lat temu.'
    },
    {
      id: 'shanidar',
      name: 'Shanidar 1 („Nandi”)',
      taxon: 'Homo neanderthalensis',
      dating: 'ok. 50 000 – 45 000 lat temu',
      location: 'Jaskinia Shanidar, Góry Zagros, Irak',
      fossilEvidence: 'Szkielet mężczyzny w wieku 40–50 lat z zagojoną amputacją prawego ramienia, zmiażdżonym lewym oczodołem (ślepotą) oraz deformacją prawej stopy powodującą ciężkie utykanie.',
      significance: 'Osobnik z tak rozległym kalectwem nie był w stanie polować ani uciekać przed drapieżnikami peryglacjalnymi. Przeżył kilkadziesiąt lat wyłącznie dzięki temu, że klan neandertalski dostarczał mu żywność i nosił go podczas migracji.'
    },
    {
      id: 'romito',
      name: 'Romito 2 (Młodzieniec z Karłowatością)',
      taxon: 'Homo sapiens (Górny Paleolit)',
      dating: 'ok. 11 000 lat temu',
      location: 'Grotta del Romito, Kalabria, Włochy',
      fossilEvidence: 'Szkielet młodego mężczyzny z ciężką dysplazją akromezomeliczną (karłowatością) o wzroście zaledwie ok. 120 cm i skróconych kończynach.',
      significance: 'Mimo niemożności uczestniczenia w wyczerpujących polowaniach na koziorożce, został pochowany z wielkimi honorami w objęciach starszej kobiety (prawdopodobnie matki), dowodząc głębokiego szacunku dla osób z wadami genetycznymi.'
    },
    {
      id: 'liang-tebo',
      name: 'Dziecko z Liang Tebo (Najstarsza Amputacja Chirurgiczna)',
      taxon: 'Homo sapiens',
      dating: 'ok. 31 000 lat temu',
      location: 'Jaskinia Liang Tebo, Borneo, Indonezja',
      fossilEvidence: 'Szkielet młodocianego z celowo i czysto odciętą dystalną jedną trzecią lewego podudzia; kikut wykazuje wieloletnie zagojenie kości (Maloney et al., 2022 Nature).',
      significance: 'Dowód na zaawansowaną wiedzę anatomiczną i chirurgiczną w paleolicie: udana amputacja wymagała opanowania krwotoku (podwiązanie naczyń), zapobieżenia sepsie (zioła antyseptyczne) i wielomiesięcznej opieki nad dzieckiem w tropikach.'
    }
  ];

  const activeCase = cases[selectedCase];

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      <div className="border-b border-surface-border pb-3">
        <h3 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-rose-400" />
          <span>Archeologia Współczucia: Twarde Dowody Kostne Penny Spikins</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Obalenie mitu brutalnego „darwinizmu społecznego”: zapis kopalny bezspornie dowodzi, że opieka nad rannymi i niepełnosprawnymi ma miliony lat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {cases.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => setSelectedCase(idx)}
            className={`p-3 rounded-lg border text-left transition-all ${
              selectedCase === idx
                ? 'bg-obsidian-200 border-amber-400 text-white shadow-glow-terracotta'
                : 'bg-surface hover:bg-surface-hover border-surface-border text-slate-300'
            }`}
          >
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300 mb-1">
              <Bone className="w-3.5 h-3.5" />
              <span>Dowód {idx + 1}</span>
            </div>
            <h4 className="font-serif font-bold text-xs line-clamp-1">{c.name.split('(')[0]}</h4>
            <span className="text-[10px] text-slate-400 font-mono block mt-0.5">{c.dating}</span>
          </button>
        ))}
      </div>

      {/* Deep Case Display */}
      <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3 text-xs text-slate-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border pb-2">
          <div>
            <h4 className="font-serif font-bold text-base text-slate-100">{activeCase.name}</h4>
            <span className="text-xs text-amber-400 italic font-mono">{activeCase.taxon}</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activeCase.dating}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {activeCase.location}</span>
          </div>
        </div>

        <div>
          <strong className="text-slate-200 font-mono block mb-1">Materialny dowód paleopatologiczny:</strong>
          <p className="p-2.5 rounded bg-surface border border-surface-border leading-relaxed">
            {activeCase.fossilEvidence}
          </p>
        </div>

        <div>
          <strong className="text-bioneuro-mint font-mono block mb-1 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5" />
            Wnioskowanie ewolucyjne (Penny Spikins):
          </strong>
          <p className="leading-relaxed">
            {activeCase.significance}
          </p>
        </div>
      </div>
    </div>
  );
};
