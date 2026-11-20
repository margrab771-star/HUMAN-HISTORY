import React, { useState } from 'react';
import { BookOpen, AlertCircle, ChevronDown, ChevronUp, Scale, Compass, Dna, Lightbulb } from 'lucide-react';
import { CONFIDENCE_BADGES } from '../../types';

export const MethodologyBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Ramy metodologiczne" className="border-b border-surface-border bg-obsidian-200/80 backdrop-blur text-xs">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-bioneuro-emerald animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-bioneuro-mint font-semibold">
            Rygor Akademicki & Standardy Epistemologiczne
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-400 text-[11px]">
            4 poziomy pewności empirycznej • Zero teleologii • Rozróżnienie Fitness od Statusu
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 text-slate-300 hover:text-white font-mono text-[11px] transition-colors py-1 px-2.5 rounded bg-surface/80 border border-surface-border hover:border-slate-500 shrink-0"
        >
          <BookOpen className="w-3.5 h-3.5 text-pleisto-ochre" />
          <span className="hidden sm:inline">{isOpen ? 'Zwiń ramy metodologiczne' : 'Rozwiń zasady metodologiczne i poziomy pewności'}</span>
          <span className="sm:hidden">{isOpen ? 'Zwiń zasady' : 'Ramy metodologiczne'}</span>
          {isOpen ? <ChevronUp className="w-3 h-3 ml-0.5" /> : <ChevronDown className="w-3 h-3 ml-0.5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-surface-border bg-obsidian-300 px-4 py-5 transition-all">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Principle 1 */}
            <div className="p-3.5 rounded-lg bg-surface/60 border border-surface-border flex flex-col gap-2">
              <div className="flex items-center gap-2 text-pleisto-ochre font-semibold">
                <Compass className="w-4 h-4" />
                <h4 className="text-sm font-sans">1. Brak Teleologii</h4>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Ewolucja <strong>nie ma celu</strong>, nie dąży do „postępu” ani „doskonałości moralnej”. Gatunek nie ewoluuje „po to, by coś osiągnąć”. Zmieniają się jedynie lokalne nisze selekcyjne (środowiskowe, ekonomiczne, technologiczne), które premiują określone fenotypy.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-3.5 rounded-lg bg-surface/60 border border-surface-border flex flex-col gap-2">
              <div className="flex items-center gap-2 text-bioneuro-mint font-semibold">
                <Dna className="w-4 h-4" />
                <h4 className="text-sm font-sans">2. Cztery Mechanizmy Zmiany</h4>
              </div>
              <ul className="text-slate-300 text-[11px] leading-relaxed space-y-1 list-disc list-inside">
                <li><strong className="text-slate-100">Selekcja genetyczna:</strong> zmiany częstości alleli (GWAS / biobanki).</li>
                <li><strong className="text-slate-100">Zdjęcie hamulców niszowych:</strong> rozkwit rzadkich fenotypów (psychopatia).</li>
                <li><strong className="text-slate-100">Neuroplastyczność i epigenetyka:</strong> metylacja DNA i remodeling synaps.</li>
                <li><strong className="text-slate-100">Ewolucja kulturowa:</strong> prawo, algorytmy i rynek wymuszające nowe zachowania.</li>
              </ul>
            </div>

            {/* Principle 3 */}
            <div className="p-3.5 rounded-lg bg-surface/60 border border-surface-border flex flex-col gap-2">
              <div className="flex items-center gap-2 text-modern-cyan font-semibold">
                <Scale className="w-4 h-4" />
                <h4 className="text-sm font-sans">3. Status vs. Fitness Darwinowska</h4>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Współczesny kapitalizm dokonał historycznego <strong>rozerwania korelacji</strong> między statusem społecznym a liczbą potomstwa. Cechy premiowane finansowo i zawodowo w XXI w. (długa edukacja, kariera 60h/tydz.) często skutkują <em>ujemną selekcją reprodukcyjną</em>.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="p-3.5 rounded-lg bg-surface/60 border border-surface-border flex flex-col gap-2">
              <div className="flex items-center gap-2 text-rose-400 font-semibold">
                <AlertCircle className="w-4 h-4" />
                <h4 className="text-sm font-sans">4. Błąd Naturalistyczny (Is–Ought)</h4>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                To, co <em>naturalne</em>, nie jest automatycznie dobre ani pożądane (David Hume). Wyjaśnienie ewolucyjnych korzeni przemocy, ksenofobii czy zdrad jest <strong>diagnozą biologiczną</strong>, a nie moralnym rozgrzeszeniem. Odrzucamy determinizm normatywny.
              </p>
            </div>

          </div>

          {/* Badge Legend */}
          <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-surface-border flex flex-wrap items-center justify-between gap-3 text-[11px]">
            <span className="font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              Czterostopniowy System Oznaczeń Merytorycznych:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {Object.values(CONFIDENCE_BADGES).map(badge => (
                <div key={badge.level} className="flex items-center gap-1.5 px-2 py-0.5 rounded border bg-surface text-[10px] font-mono">
                  <span className={`w-2 h-2 rounded-full ${badge.bgClass.replace('/10', '')}`} />
                  <span className="font-semibold">{badge.code}:</span>
                  <span className="text-slate-300">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
