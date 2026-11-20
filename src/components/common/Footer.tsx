import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectModule: (id: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectModule }) => {
  return (
    <footer className="mt-20 border-t border-surface-border bg-obsidian-400 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Col 1: Brand & Academic Standard */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-gradient-to-br from-pleisto-terracotta to-bioneuro-emerald flex items-center justify-center font-serif font-black text-white text-sm">
              H
            </div>
            <span className="font-serif font-bold text-base text-slate-100">
              HOMO: Wielkie Kompendium
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed max-w-md">
            Kompendium antropologii ewolucyjnej, neurobiologii i psychologii kontekstu zrealizowane w standardzie Smithsonian Human Origins, The Pudding oraz Our World in Data. 
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Standard monografii akademickiej • Zero pseudonauki</span>
          </div>
        </div>

        {/* Col 2: Modules Quick Jump */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
            Laboratoria Badawcze:
          </h4>
          <ul className="space-y-1.5 text-xs">
            <li>
              <button onClick={() => onSelectModule(1)} className="hover:text-amber-400 transition-colors">
                1. Oś Plejstocenu i Gatunki Homo
              </button>
            </li>
            <li>
              <button onClick={() => onSelectModule(2)} className="hover:text-bioneuro-mint transition-colors">
                2. Laboratorium Bio-Neuro X-Ray
              </button>
            </li>
            <li>
              <button onClick={() => onSelectModule(3)} className="hover:text-amber-300 transition-colors">
                3. 8 Modeli Psychologii Ewolucyjnej
              </button>
            </li>
            <li>
              <button onClick={() => onSelectModule(4)} className="hover:text-modern-cyan transition-colors">
                4. Encyklopedia 18 Efektów
              </button>
            </li>
            <li>
              <button onClick={() => onSelectModule(5)} className="hover:text-purple-300 transition-colors">
                5. Matryca Cech & Selekcja XXI w.
              </button>
            </li>
            <li>
              <button onClick={() => onSelectModule(6)} className="hover:text-emerald-400 transition-colors">
                6. Badacze, Spory & Detektor
              </button>
            </li>
            <li>
              <button onClick={() => onSelectModule(7)} className="hover:text-purple-300 transition-colors">
                7. Świadomość, Religia & Sacrum
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Methodological Axioms */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
            Rygor Epistemologiczny:
          </h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Ewolucja nie ma celu ani drabiny postępu. Opis biologiczny nie stanowi moralnego usprawiedliwienia (odrzucenie Is-Ought Fallacy). Sukces statusowy w kapitalizmie nie jest tożsamy z sukcesem reprodukcyjnym (Darwinian Fitness).
          </p>
          <div className="pt-2 text-[10px] font-mono text-slate-500">
            Opublikowano w standardzie otwartej nauki (Open Science).
          </div>
        </div>

      </div>

      <div className="border-t border-surface-border/60 py-4 px-4 text-center text-[11px] font-mono text-slate-400">
        HOMO © 2026 • Wielkie Kompendium Antropologii Ewolucyjnej, Neurobiologii i Psychologii Kontekstu
      </div>
    </footer>
  );
};
