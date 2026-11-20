import React, { useState } from 'react';
import { PSYCHOLOGICAL_EFFECTS } from '../../data/psychologicalEffectsData';
import { PsychologicalEffectCard } from './PsychologicalEffectCard';
import { Sparkles, Search } from 'lucide-react';

interface Module4EffectsProps {
  globalXRayMode: boolean;
}

export const Module4Effects: React.FC<Module4EffectsProps> = ({ globalXRayMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Wszystkie (18)' },
    { id: 'Pamiec_i_Poznanie', label: 'Pamięć i Poznanie' },
    { id: 'Spoleczne_i_Reputacyjne', label: 'Społeczne i Reputacyjne' },
    { id: 'Rozrod_i_Relacje', label: 'Rozród i Relacje' },
    { id: 'Status_i_Ekonomia', label: 'Status i Ekonomia' },
    { id: 'Bodzce_i_Media', label: 'Bodźce i Media' }
  ];

  const filteredEffects = PSYCHOLOGICAL_EFFECTS.filter(e => {
    const matchesCat = selectedCategory === 'all' || e.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesQuery = !searchQuery || (
      e.name.toLowerCase().includes(q) ||
      e.subtitle.toLowerCase().includes(q) ||
      e.academicDefinition.toLowerCase().includes(q) ||
      e.keyResearchers.some(r => r.toLowerCase().includes(q))
    );
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Editorial Intro */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-modern-cyan uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" />
          <span>MODUŁ 4: ENCYKLOPEDIA EFEKTÓW POZNAWCZO-EWOLUCYJNYCH</span>
        </div>
        <h2 className="font-serif font-black text-2xl md:text-3xl lg:text-4xl text-slate-100 tracking-tight">
          Wielka Encyklopedia 18 Efektów Psychologicznych
        </h2>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed font-sans">
          Każdy z 18 rygorystycznie udokumentowanych efektów psychologicznych analizowany jest w pełnym pionowym przekroju: od klasycznego paradygmatu eksperymentalnego, przez podłoże neurobiologiczne i pierwotną funkcję adaptacyjną w plejstocenie, aż po współczesną eksploatację w kapitalizmie platformowym i sieciach cyfrowych.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-surface-border pb-4">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
          {categories.map(c => {
            const isSelected = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-modern-cyan/20 text-modern-cyan border-modern-cyan font-bold shadow-glow-cyan'
                    : 'bg-surface text-slate-400 hover:text-slate-200 border-surface-border'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-2 w-full lg:w-72 bg-surface border border-surface-border rounded-lg px-3 py-1.5">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Szukaj efektu lub badacza..."
            className="w-full bg-transparent text-xs text-slate-200 placeholder-slate-500 focus:outline-none font-sans"
          />
        </div>

      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredEffects.map(effect => (
          <div key={effect.id} id={`effect-card-${effect.id}`}>
            <PsychologicalEffectCard
              effect={effect}
              globalXRayMode={globalXRayMode}
            />
          </div>
        ))}
      </div>

      {filteredEffects.length === 0 && (
        <div className="py-16 text-center text-slate-500 text-sm font-mono">
          Nie znaleziono efektów spełniających kryteria wyszukiwania.
        </div>
      )}

    </div>
  );
};
