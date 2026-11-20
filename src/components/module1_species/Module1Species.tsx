import React, { useState } from 'react';
import { SPECIES_DATA } from '../../data/speciesData';
import { TimelineSvg } from './TimelineSvg';
import { SpeciesCard } from './SpeciesCard';
import { SpeciesComparer } from './SpeciesComparer';
import { SpeciesPairwiseLab } from './SpeciesPairwiseLab';
import { MigrationMapSvg } from './MigrationMapSvg';
import { Filter, Layers, ArrowLeftRight, Compass, BarChart2 } from 'lucide-react';

interface Module1SpeciesProps {
  globalXRayMode: boolean;
}

export const Module1Species: React.FC<Module1SpeciesProps> = ({ globalXRayMode }) => {
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string | null>(null);
  const [speciesIdA, setSpeciesIdA] = useState<string>('homo-neanderthalensis');
  const [speciesIdB, setSpeciesIdB] = useState<string>('homo-sapiens');
  const [filterQuery, setFilterQuery] = useState('');
  const [comparerMode, setComparerMode] = useState<'4panels' | 'barcharts'>('4panels');

  const filteredSpecies = SPECIES_DATA.filter(s => {
    if (!filterQuery) return true;
    const q = filterQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.commonName.toLowerCase().includes(q) ||
      s.epochRange.toLowerCase().includes(q) ||
      s.geographicRange.toLowerCase().includes(q)
    );
  });

  const handleSelectFromCard = (id: string) => {
    // If not selected in comparator, put it into A or B
    if (speciesIdA !== id && speciesIdB !== id) {
      setSpeciesIdA(id);
    }
    setSelectedSpeciesId(id);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      
      {/* Intro Editorial Header */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-pleisto-terracotta uppercase tracking-wider mb-1">
          <Layers className="w-4 h-4" />
          <span>MODUŁ 1: PALEOANTROPOLOGIA & MORFOLOGIA EWOLUCYJNA</span>
        </div>
        <h2 className="font-serif font-black text-2xl md:text-3xl lg:text-4xl text-slate-100 tracking-tight">
          Oś Plejstocenu i Komparatystyka Gatunków Homo
        </h2>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed font-sans">
          Ewolucja człowieka nie była liniową drabiną postępu, lecz gęstym krzewem filogenetycznym (hominid bush), w którym przez miliony lat współistniało wiele gatunków o odmiennych strategiach przetrwania. Przeanalizuj kluczowe taksony od <em>Australopithecus afarensis</em> po asymilację neandertalską i globalną dominację <em>Homo sapiens</em>.
        </p>
      </div>

      {/* 1. Interactive Scaled Timeline Component */}
      <TimelineSvg
        selectedSpeciesId={selectedSpeciesId}
        onSelectSpecies={id => {
          setSelectedSpeciesId(id);
          const el = document.getElementById(`species-card-${id}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }}
      />

      {/* 2. Interactive SVG Migration & Hybridization Map */}
      <MigrationMapSvg />

      {/* 3. Interactive 2-Species Comparer (4 Panels or Bar Charts) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-amber-400" />
            <span>Zaawansowana Komparatystyka 2 Gatunków</span>
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setComparerMode('4panels')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
                comparerMode === '4panels'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500 font-bold'
                  : 'bg-surface text-slate-400 hover:text-slate-200 border-surface-border'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>4 Panele Analityczne</span>
            </button>
            <button
              onClick={() => setComparerMode('barcharts')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
                comparerMode === 'barcharts'
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 font-bold'
                  : 'bg-surface text-slate-400 hover:text-slate-200 border-surface-border'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Wykresy Allometryczne</span>
            </button>
          </div>
        </div>

        {comparerMode === '4panels' ? (
          <SpeciesPairwiseLab
            speciesList={SPECIES_DATA}
            speciesIdA={speciesIdA}
            speciesIdB={speciesIdB}
            onSelectSpeciesA={setSpeciesIdA}
            onSelectSpeciesB={setSpeciesIdB}
          />
        ) : (
          <SpeciesComparer
            speciesList={SPECIES_DATA}
            speciesIdA={speciesIdA}
            speciesIdB={speciesIdB}
            onSelectSpeciesA={setSpeciesIdA}
            onSelectSpeciesB={setSpeciesIdB}
          />
        )}
      </div>

      {/* 4. Species Grid Catalog */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-surface-border pb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-serif font-bold text-xl text-slate-100">
              Katalog Taksonów Hominidów ({filteredSpecies.length})
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              (Australopithecus + 9 taksonów rodzaju Homo)
            </span>
          </div>

          {/* Quick Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={filterQuery}
              onChange={e => setFilterQuery(e.target.value)}
              placeholder="Filtruj gatunki..."
              className="bg-surface border border-surface-border rounded-lg px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSpecies.map(sp => (
            <div key={sp.id} id={`species-card-${sp.id}`}>
              <SpeciesCard
                species={sp}
                isSelected={speciesIdA === sp.id || speciesIdB === sp.id}
                onSelect={() => handleSelectFromCard(sp.id)}
                globalXRayMode={globalXRayMode}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
