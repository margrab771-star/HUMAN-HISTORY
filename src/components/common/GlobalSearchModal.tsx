import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Dna, Brain, Flame, Sparkles, BookOpen, UserCheck, ShieldAlert, Layers } from 'lucide-react';
import { SPECIES_DATA } from '../../data/speciesData';
import { BRAIN_STRUCTURES } from '../../data/bioNeuroData';
import { EVO_PSYCH_MODELS } from '../../data/evoPsychModelsData';
import { PSYCHOLOGICAL_EFFECTS } from '../../data/psychologicalEffectsData';
import { TRAIT_TRANSFORMATION_PATHS } from '../../data/traitContextMatrixData';
import { RESEARCHERS_DATA, ACADEMIC_DEBATES, PSEUDOSCIENCE_DETECTOR_FILTERS } from '../../data/researchersAndDebatesData';
import { RELIGION_TIMELINE_STAGES, CSR_TOPICS, SACRED_MIGRATION_MATRIX } from '../../data/religionConsciousnessData';
import { CONTEMPORARY_AUTOPSIES } from '../../data/contemporaryAutopsyData';
import { ConfidenceBadge } from './ConfidenceBadge';
import { ConfidenceLevel } from '../../types';

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  moduleId: number;
  confidenceLevel?: ConfidenceLevel;
  icon: React.ReactNode;
  keywords: string;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (moduleId: number, itemId?: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Compile unified index of all items
  const allItems: SearchItem[] = [
    // Species
    ...SPECIES_DATA.map(s => ({
      id: s.id,
      title: s.name,
      subtitle: `${s.commonName} • ${s.epochRange} • Mózg: ${s.brainCapacityCm3.avg} cm³`,
      category: 'Gatunki Hominidów',
      moduleId: 1,
      confidenceLevel: s.confidenceLevel,
      icon: <Dna className="w-4 h-4 text-pleisto-terracotta" />,
      keywords: `${s.name} ${s.commonName} ${s.toolIndustry} ${s.geographicRange} ${s.boundaryBehaviors.keyFossilEvidence}`
    })),
    // Brain structures
    ...BRAIN_STRUCTURES.map(b => ({
      id: b.id,
      title: b.name,
      subtitle: `${b.latinName} • Neuroprzekaźniki: ${b.associatedNeurotransmitters.join(', ')}`,
      category: 'Neurobiologia i Mózg',
      moduleId: 2,
      confidenceLevel: b.confidenceLevel,
      icon: <Brain className="w-4 h-4 text-bioneuro-emerald" />,
      keywords: `${b.name} ${b.latinName} ${b.primaryFunction} ${b.associatedNeurotransmitters.join(' ')} ${b.keyResearchers.join(' ')}`
    })),
    // Evo psych models
    ...EVO_PSYCH_MODELS.map(m => ({
      id: m.id,
      title: m.title,
      subtitle: m.subtitle,
      category: 'Modele Psychologii Ewolucyjnej',
      moduleId: 3,
      confidenceLevel: m.confidenceLevel,
      icon: <Flame className="w-4 h-4 text-amber-500" />,
      keywords: `${m.title} ${m.subtitle} ${m.coreHypothesis} ${m.keyResearchers.join(' ')}`
    })),
    // Psychological effects
    ...PSYCHOLOGICAL_EFFECTS.map(e => ({
      id: e.id,
      title: e.name,
      subtitle: `${e.categoryLabel} • Badacze: ${e.keyResearchers.join(', ')}`,
      category: 'Encyklopedia Efektów',
      moduleId: 4,
      confidenceLevel: e.confidenceLevel,
      icon: <Sparkles className="w-4 h-4 text-modern-cyan" />,
      keywords: `${e.name} ${e.categoryLabel} ${e.academicDefinition} ${e.keyResearchers.join(' ')} ${e.classicExperiment}`
    })),
    // Trait transformations
    ...TRAIT_TRANSFORMATION_PATHS.map(t => ({
      id: t.id,
      title: t.traitName,
      subtitle: t.subtitle,
      category: 'Matryca Cech x Epoki',
      moduleId: 5,
      confidenceLevel: t.confidenceLevel,
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      keywords: `${t.traitName} ${t.subtitle} ${t.biologicalAnchor} ${t.keyResearchers.join(' ')}`
    })),
    // Researchers
    ...RESEARCHERS_DATA.map(r => ({
      id: r.id,
      title: r.name,
      subtitle: `${r.discipline} • ${r.affiliation} (${r.years})`,
      category: 'Baza Badaczy',
      moduleId: 6,
      icon: <UserCheck className="w-4 h-4 text-emerald-400" />,
      keywords: `${r.name} ${r.discipline} ${r.coreThesis} ${r.magnumOpus} ${r.affiliation}`
    })),
    // Academic Debates
    ...ACADEMIC_DEBATES.map(d => ({
      id: d.id,
      title: d.title,
      subtitle: `${d.field} • ${d.shortTopic}`,
      category: 'Wielkie Spory Naukowe',
      moduleId: 6,
      confidenceLevel: d.confidenceLevel,
      icon: <BookOpen className="w-4 h-4 text-rose-400" />,
      keywords: `${d.title} ${d.field} ${d.positionA.argument} ${d.positionB.argument} ${d.positionA.proponents.join(' ')}`
    })),
    // Pseudoscience filters
    ...PSEUDOSCIENCE_DETECTOR_FILTERS.map(f => ({
      id: f.id,
      title: `${f.number}. ${f.principleTitle}`,
      subtitle: f.practicalExample,
      category: 'Detektor Pseudonauki',
      moduleId: 6,
      icon: <ShieldAlert className="w-4 h-4 text-amber-400" />,
      keywords: `${f.principleTitle} ${f.academicStandard} ${f.popularFallacyTrap}`
    })),
    // Contemporary Autopsies
    ...CONTEMPORARY_AUTOPSIES.map(a => ({
      id: a.id,
      title: a.title,
      subtitle: a.subtitle,
      category: 'Autopsja Zjawisk XXI w.',
      moduleId: 5,
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      keywords: `${a.title} ${a.subtitle} ${a.bioNeuroMechanism} ${a.pleistoceneFunction} ${a.modernOverdrive}`
    })),
    // Religion Timeline Stages
    ...RELIGION_TIMELINE_STAGES.map(s => ({
      id: s.id,
      title: s.name,
      subtitle: `${s.timeframe} • ${s.socialScale}`,
      category: 'Oś Czasu Sacrum',
      moduleId: 7,
      confidenceLevel: s.confidenceLevel,
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      keywords: `${s.name} ${s.coreMilestone} ${s.cognitiveSubstrate} ${s.archaeologicalProof}`
    })),
    // CSR Topics
    ...CSR_TOPICS.map(c => ({
      id: c.id,
      title: `${c.name} (${c.acronym})`,
      subtitle: c.coreConcept,
      category: 'Kognitywistyka Religii (CSR)',
      moduleId: 7,
      confidenceLevel: c.confidenceLevel,
      icon: <Brain className="w-4 h-4 text-emerald-400" />,
      keywords: `${c.name} ${c.acronym} ${c.coreConcept} ${c.bioNeuroSubstrate} ${c.keyResearchers.join(' ')}`
    })),
    // Sacred Migration in 21st c.
    ...SACRED_MIGRATION_MATRIX.map(m => ({
      id: m.id,
      title: `Migracja: ${m.evolutionaryModule}`,
      subtitle: m.modern21stSecularMetamorphosis,
      category: 'Resakralizacja Cyfrowa',
      moduleId: 7,
      icon: <Sparkles className="w-4 h-4 text-purple-300" />,
      keywords: `${m.evolutionaryModule} ${m.modern21stSecularMetamorphosis} ${m.underlyingPsychologicalNeed}`
    }))
  ];

  const filteredItems = query.trim() === ''
    ? allItems.slice(0, 8)
    : allItems.filter(item => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.keywords.toLowerCase().includes(q)
        );
      }).slice(0, 15);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1 < filteredItems.length ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 >= 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          const item = filteredItems[selectedIndex];
          onSelectResult(item.moduleId, item.id);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose, onSelectResult]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md">
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="Wyszukiwarka akademicka"
        className="w-full max-w-2xl bg-surface border border-surface-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-surface-border bg-obsidian-200">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Szukaj taksonu, struktury mózgu, efektu, badacza lub sporu..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-400 text-sm md:text-base outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-white mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-surface-border rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-surface-border/40">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              <Search className="w-8 h-8 mx-auto text-slate-600 mb-2" />
              Nie znaleziono wyników dla zapytania: <span className="text-slate-200 font-mono">"{query}"</span>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={`${item.moduleId}-${item.id}`}
                  onClick={() => {
                    onSelectResult(item.moduleId, item.id);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`group flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? 'bg-obsidian-100 border border-slate-700/60 shadow-sm'
                      : 'hover:bg-obsidian-300 border border-transparent'
                  }`}
                >
                  <div className="p-2 rounded bg-surface border border-surface-border shrink-0 mt-0.5">
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-semibold text-slate-100 text-sm group-hover:text-modern-cyan transition-colors truncate">
                        {item.title}
                      </span>
                      {item.confidenceLevel && (
                        <ConfidenceBadge level={item.confidenceLevel} size="sm" />
                      )}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-border/60 text-slate-300 ml-auto shrink-0">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <ArrowRight className={`w-4 h-4 text-slate-500 shrink-0 self-center transition-transform ${
                    isSelected ? 'text-modern-cyan translate-x-1' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-obsidian-400 border-t border-surface-border flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Nawigacja</span>
            <span>↵ Wybierz</span>
            <span>ESC Zamknij</span>
          </div>
          <span className="text-slate-400">Indeks: 10 taksonów • 18 efektów • 8 modeli • 24 badaczy</span>
        </div>
      </div>
    </div>
  );
};
