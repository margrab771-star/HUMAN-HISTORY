import React, { useState } from 'react';
import { Sliders, Zap, Shield, AlertTriangle } from 'lucide-react';

export const LifeHistorySlider: React.FC = () => {
  // Unpredictability slider from 0 (very stable, low mortality) to 100 (extreme danger, high mortality)
  const [unpredictability, setUnpredictability] = useState<number>(30);

  // Dynamic calculated metrics based on unpredictability:
  const isFast = unpredictability > 50;
  const ageOfPuberty = Math.round(16 - (unpredictability / 100) * 4); // 16 down to 12
  const riskTolerance = Math.round(20 + (unpredictability / 100) * 75); // 20 to 95%
  const timeHorizonYears = Math.round(35 - (unpredictability / 100) * 30); // 35 down to 5 years
  const parentalInvestmentPerChild = Math.round(95 - (unpredictability / 100) * 70); // 95 down to 25%

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      
      {/* Title */}
      <div className="border-b border-surface-border pb-3">
        <h3 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-amber-400" />
          <span>Interaktywny Suwak Teorii Historii Życiowych (Fast vs. Slow Life History)</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Bruce Ellis i Jay Belsky: jak nieprzewidywalność i śmiertelność środowiska w dzieciństwie kalibrują tempo dojrzewania, impulsywność i strategie reprodukcyjne.
        </p>
      </div>

      {/* Interactive Slider Bar */}
      <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3">
        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <Shield className="w-4 h-4" /> Środowisko Bezpieczne / Stabilne (0%)
          </span>
          <span className="text-amber-300 font-bold text-sm">
            Poziom Zagrożenia: {unpredictability}%
          </span>
          <span className="text-rose-400 font-bold flex items-center gap-1">
            <Zap className="w-4 h-4" /> Środowisko Skrajnie Zmienne / Wrogie (100%)
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={unpredictability}
          onChange={e => setUnpredictability(Number(e.target.value))}
          className="w-full accent-amber-500 cursor-pointer h-2 bg-obsidian-400 rounded-lg"
        />

        <div className="flex justify-between text-[10px] text-slate-500 font-mono">
          <span>Wolna Strategia (Slow LHS)</span>
          <span>Próg Przełączenia (~50%)</span>
          <span>Szybka Strategia (Fast LHS)</span>
        </div>
      </div>

      {/* Recalibrated Live Parameters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-3 rounded-lg bg-surface border border-surface-border flex flex-col gap-1">
          <span className="text-slate-400 text-[10px]">Wiek dojrzałości / menarche:</span>
          <span className={`text-base font-bold ${isFast ? 'text-rose-400' : 'text-emerald-400'}`}>
            ~{ageOfPuberty} lat
          </span>
          <span className="text-[10px] text-slate-500 font-sans">
            {isFast ? 'Wczesne dojrzewanie biologiczne' : 'Późne, odroczone dojrzewanie'}
          </span>
        </div>

        <div className="p-3 rounded-lg bg-surface border border-surface-border flex flex-col gap-1">
          <span className="text-slate-400 text-[10px]">Skłonność do ryzyka / impulsywność:</span>
          <span className={`text-base font-bold ${isFast ? 'text-rose-400' : 'text-emerald-400'}`}>
            {riskTolerance}%
          </span>
          <span className="text-[10px] text-slate-500 font-sans">
            {isFast ? 'Wysoka (żyj chwilą, brak jutra)' : 'Niska (ostrożne planowanie)'}
          </span>
        </div>

        <div className="p-3 rounded-lg bg-surface border border-surface-border flex flex-col gap-1">
          <span className="text-slate-400 text-[10px]">Horyzont planowania:</span>
          <span className={`text-base font-bold ${isFast ? 'text-rose-400' : 'text-emerald-400'}`}>
            {timeHorizonYears} lat
          </span>
          <span className="text-[10px] text-slate-500 font-sans">
            {isFast ? 'Krótkoterminowa gratyfikacja' : 'Wieloletnie cele i edukacja'}
          </span>
        </div>

        <div className="p-3 rounded-lg bg-surface border border-surface-border flex flex-col gap-1">
          <span className="text-slate-400 text-[10px]">Inwestycja w jedno dziecko:</span>
          <span className={`text-base font-bold ${isFast ? 'text-rose-400' : 'text-emerald-400'}`}>
            {parentalInvestmentPerChild}%
          </span>
          <span className="text-[10px] text-slate-500 font-sans">
            {isFast ? 'Ilość > Jakość (rozproszenie)' : 'Jakość > Ilość (wysoki kapitał)'}
          </span>
        </div>
      </div>

      {/* Academic Contextual Explanation */}
      <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border text-xs text-slate-300 leading-relaxed flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className={`font-mono text-xs font-bold ${isFast ? 'text-rose-400' : 'text-emerald-400'}`}>
            Aktualnie aktywny program psychobiologiczny: {isFast ? 'SZYBKA STRATEGIA ŻYCIOWA (FAST)' : 'WOLNA STRATEGIA ŻYCIOWA (SLOW)'}
          </span>
        </div>

        <p>
          {isFast
            ? 'W warunkach, w których otoczenie jest pełne przemocy, braku stabilnego ojca i wysokiego ryzyka nagłej śmierci, odkładanie rodzicielstwa na wiek 30 lat byłoby ewolucyjnym samobójstwem. Układ nerwowy uruchamia wczesne dojrzewanie i impulsywność, by przekazać geny póki organizm żyje. To nie jest „wada charakteru”, lecz bezbłędna biologiczna adaptacja do wrogiego środowiska.'
            : 'Gdy środowisko jest bezpieczne, przewidywalne i zasobne w kapitał, najbardziej adaptacyjną strategią jest odroczenie prokreacji, długa edukacja i maksymalizacja inwestycji w nieliczne potomstwo (slow life history). Strategia ta dominuje współcześnie w wyższych klasach zamożności.'}
        </p>

        <div className="mt-1 pt-2 border-t border-surface-border text-[11px] text-slate-400 font-mono flex items-center gap-2">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Konsekwencja klasowa w XXI w.: nierówności ekonomiczne w miastach wyzwalają odmienne programy biologiczne w sąsiadujących dzielnicach.</span>
        </div>
      </div>

    </div>
  );
};
