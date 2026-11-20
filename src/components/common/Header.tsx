import React, { useState } from 'react';
import { Search, Brain, Dna, Layers, Sparkles, BookOpen, Menu, X, Flame, Landmark, BookMarked, ChevronRight } from 'lucide-react';

interface HeaderProps {
  activeModule: number;
  onSelectModule: (moduleId: number) => void;
  onOpenSearch: () => void;
  onOpenCitations: () => void;
  isBioNeuroGlobalXRay: boolean;
  onToggleBioNeuroGlobalXRay: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeModule,
  onSelectModule,
  onOpenSearch,
  onOpenCitations,
  isBioNeuroGlobalXRay,
  onToggleBioNeuroGlobalXRay
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const modules = [
    { id: 1, name: '1. Oś & Gatunki', fullName: 'Oś Plejstocenu i Komparatystyka Gatunków', icon: <Dna className="w-4 h-4 shrink-0" /> },
    { id: 2, name: '2. Bio-Neuro X-Ray', fullName: 'Laboratorium Bio-Neuro X-Ray', icon: <Brain className="w-4 h-4 shrink-0" /> },
    { id: 3, name: '3. Modele Ewolucyjne', fullName: 'Laboratorium 8 Modeli Psychologii Ewolucyjnej', icon: <Flame className="w-4 h-4 shrink-0" /> },
    { id: 4, name: '4. 18 Efektów', fullName: 'Encyklopedia 18 Efektów Psychologicznych', icon: <Sparkles className="w-4 h-4 shrink-0" /> },
    { id: 5, name: '5. Matryca Cech', fullName: 'Matryca Cech × Epoki i Selekcja Współczesna', icon: <Layers className="w-4 h-4 shrink-0" /> },
    { id: 6, name: '6. Badacze & Spory', fullName: 'Biblioteka Badaczy, Mapa Sporów i Detektor', icon: <BookOpen className="w-4 h-4 shrink-0" /> },
    { id: 7, name: '7. Religia & Świadomość', fullName: 'Ewolucja Świadomości, Religii i Kultury Symbolicznej', icon: <Landmark className="w-4 h-4 shrink-0" /> },
  ];

  const currentMod = modules.find(m => m.id === activeModule) || modules[0];

  return (
    <header className="sticky top-0 z-40 bg-obsidian-400/95 backdrop-blur-md border-b border-surface-border">
      {/* TIER 1: Desktop Brand & Utilities / Mobile Sleek 56px Bar */}
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        
        {/* Brand Title */}
        <div 
          onClick={() => onSelectModule(1)}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gradient-to-br from-pleisto-terracotta via-amber-600 to-bioneuro-emerald flex items-center justify-center shadow-glow-terracotta border border-amber-500/30">
            <span className="font-serif font-black text-lg md:text-xl text-white tracking-tighter">H</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base md:text-lg text-slate-100 tracking-tight group-hover:text-amber-400 transition-colors">
                HOMO
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold">
                KOMPENDIUM
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-sans hidden sm:block truncate max-w-[280px]">
              Antropologia • Neurobiologia • Psychologia Kontekstu
            </p>
          </div>
        </div>

        {/* Desktop Utilities (One clean row, whitespace-nowrap) */}
        <div className="hidden lg:flex items-center gap-2.5 whitespace-nowrap">
          {/* Bio-Neuro X-Ray Switcher */}
          <button
            onClick={onToggleBioNeuroGlobalXRay}
            title="Przełącznik warstwy: [Zachowanie i Kultura] ⇄ [Bio-Neuro X-Ray]"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-300 ${
              isBioNeuroGlobalXRay
                ? 'bg-bioneuro-emerald/20 text-bioneuro-mint border-bioneuro-emerald shadow-glow-emerald'
                : 'bg-surface text-slate-300 border-surface-border hover:border-slate-500'
            }`}
          >
            <Brain className={`w-3.5 h-3.5 ${isBioNeuroGlobalXRay ? 'text-bioneuro-mint animate-pulse' : 'text-slate-400'}`} />
            <span className="text-slate-400">Warstwa:</span>
            <span className="font-semibold">{isBioNeuroGlobalXRay ? 'Bio-Neuro X-Ray' : 'Zachowanie'}</span>
          </button>

          {/* Citations APA Button */}
          <button
            onClick={onOpenCitations}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-surface-border text-slate-300 hover:text-white hover:border-emerald-500/50 text-xs font-mono transition-all"
            title="Aparatura Źródłowa & Cytowania APA 7th"
          >
            <BookMarked className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cytowania APA</span>
          </button>

          {/* Search Button (Ctrl+K) */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-surface-border text-slate-300 hover:text-white hover:border-slate-500 text-xs font-sans transition-all"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span>Szukaj...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-obsidian-200 rounded border border-surface-border text-slate-400">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Mobile Quick Action Buttons (< 1024px) */}
        <div className="flex lg:hidden items-center gap-1.5">
          {/* Quick X-Ray Toggle */}
          <button
            onClick={onToggleBioNeuroGlobalXRay}
            title={isBioNeuroGlobalXRay ? 'Bio-Neuro X-Ray WŁĄCZONY' : 'Przełącz na Bio-Neuro X-Ray'}
            className={`p-2 rounded-lg border transition-all ${
              isBioNeuroGlobalXRay
                ? 'bg-bioneuro-emerald/25 text-bioneuro-mint border-bioneuro-emerald shadow-glow-emerald'
                : 'bg-surface text-slate-400 border-surface-border'
            }`}
          >
            <Brain className="w-4 h-4" />
          </button>

          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            title="Szukaj (Ctrl+K)"
            className="p-2 rounded-lg bg-surface border border-surface-border text-slate-300 hover:text-white"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Quick Citations */}
          <button
            onClick={onOpenCitations}
            title="Aparatura Źródłowa APA"
            className="p-2 rounded-lg bg-surface border border-surface-border text-emerald-400 hover:text-emerald-300"
          >
            <BookMarked className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu nawigacji"
            className={`p-2 rounded-lg border transition-colors ${
              mobileMenuOpen
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-surface text-slate-300 border-surface-border'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* TIER 2: Desktop 7 Modules Navigation Bar (Hidden on Mobile) */}
      <nav className="hidden lg:block border-t border-surface-border bg-obsidian-300/80">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar py-1.5">
          {modules.map(mod => {
            const isActive = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => onSelectModule(mod.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-surface-hover text-amber-300 border border-amber-500/50 shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-surface/50 border border-transparent'
                }`}
              >
                <span className={isActive ? 'text-amber-400' : 'text-slate-500'}>
                  {mod.icon}
                </span>
                <span>{mod.name}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Mini-Pill Active Module Indicator (< 1024px) */}
      <div className="lg:hidden px-4 py-2 bg-obsidian-300/90 border-t border-surface-border flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 truncate">
          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <span className="text-amber-400 font-bold shrink-0">Moduł {activeModule}:</span>
          <span className="text-slate-200 truncate">{currentMod.fullName}</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-[11px] text-amber-400 hover:text-amber-300 hover:underline shrink-0 ml-2 font-bold"
        >
          Spis treści ☰
        </button>
      </div>

      {/* Full-Feature Mobile Drawer / Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-24 bottom-0 z-50 bg-obsidian-400/98 backdrop-blur-xl border-t border-surface-border overflow-y-auto p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-surface-border pb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">
                Wybierz Moduł Badawczy
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {modules.map(mod => {
                const isActive = activeModule === mod.id;
                return (
                  <button
                    key={mod.id}
                    onClick={() => {
                      onSelectModule(mod.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`min-h-[48px] w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-left transition-all ${
                      isActive
                        ? 'bg-amber-500/15 border-amber-500/50 text-white font-semibold shadow-inner'
                        : 'bg-surface/80 border-surface-border text-slate-300 hover:bg-surface'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`p-2 rounded-lg ${isActive ? 'bg-amber-500/20 text-amber-300' : 'bg-obsidian-200 text-slate-400'}`}>
                        {mod.icon}
                      </span>
                      <div>
                        <div className="text-xs font-mono text-amber-400 font-bold">Moduł {mod.id}</div>
                        <div className="text-sm font-sans text-slate-100">{mod.fullName}</div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Drawer Bottom Actions */}
          <div className="pt-4 border-t border-surface-border mt-4 space-y-3">
            {/* Bio-Neuro Switcher */}
            <button
              onClick={onToggleBioNeuroGlobalXRay}
              className={`w-full min-h-[44px] flex items-center justify-between px-4 py-2 rounded-xl text-xs font-mono border transition-all ${
                isBioNeuroGlobalXRay
                  ? 'bg-bioneuro-emerald/20 text-bioneuro-mint border-bioneuro-emerald'
                  : 'bg-surface text-slate-300 border-surface-border'
              }`}
            >
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-emerald-400" />
                <span>Warstwa analityczna:</span>
              </div>
              <span className="font-bold">{isBioNeuroGlobalXRay ? 'Bio-Neuro X-Ray (WŁ)' : 'Zachowanie (WYŁ)'}</span>
            </button>

            {/* APA Citations Drawer Trigger */}
            <button
              onClick={() => {
                onOpenCitations();
                setMobileMenuOpen(false);
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-surface border border-surface-border text-slate-200 hover:text-white text-xs font-mono"
            >
              <BookMarked className="w-4 h-4 text-emerald-400" />
              <span>Otwórz Aparaturę Źródłową APA 7th</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
