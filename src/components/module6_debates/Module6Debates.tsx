import React, { useState } from 'react';
import { RESEARCHERS_DATA, ACADEMIC_DEBATES } from '../../data/researchersAndDebatesData';
import { ResearcherCard } from './ResearcherCard';
import { DebateComparisonCard } from './DebateComparisonCard';
import { PseudoscienceDetector } from './PseudoscienceDetector';
import { BookOpen, Users, ShieldAlert, Search } from 'lucide-react';

export const Module6Debates: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'researchers' | 'debates' | 'detector'>('researchers');
  const [researcherDiscipline, setResearcherDiscipline] = useState<string>('all');
  const [researcherQuery, setResearcherQuery] = useState<string>('');

  const disciplines = [
    { id: 'all', label: `Wszyscy (${RESEARCHERS_DATA.length})` },
    { id: 'Paleoantropologia i Paleogenetyka', label: 'Paleoantropologia' },
    { id: 'Biologia i Neurobiologia Ewolucyjna', label: 'Neurobiologia' },
    { id: 'Psychologia Ewolucyjna i Antropologia Społeczna', label: 'Psychologia Ewolucyjna' },
    { id: 'Psychologia Poznawcza i Społeczna', label: 'Psychologia Poznawcza' },
    { id: 'Kognitywistyka Religii i Filozofia Umysłu', label: 'Kognitywistyka Religii' }
  ];

  const filteredResearchers = RESEARCHERS_DATA.filter(r => {
    const matchesDisc = researcherDiscipline === 'all' || r.discipline === researcherDiscipline;
    const q = researcherQuery.toLowerCase();
    const matchesQuery = !researcherQuery || (
      r.name.toLowerCase().includes(q) ||
      r.affiliation.toLowerCase().includes(q) ||
      r.coreThesis.toLowerCase().includes(q) ||
      r.magnumOpus.toLowerCase().includes(q)
    );
    return matchesDisc && matchesQuery;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Editorial Intro */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
          <BookOpen className="w-4 h-4" />
          <span>MODUŁ 6: AKADEMIA, DYSKURS & METODOLOGIA</span>
        </div>
        <h2 className="font-serif font-black text-2xl md:text-3xl lg:text-4xl text-slate-100 tracking-tight">
          Biblioteka Badaczy, Mapa Sporów i Detektor Pseudonauki
        </h2>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed font-sans">
          Nauka to dynamiczny, samo-korygujący się proces. Poznaj {RESEARCHERS_DATA.length} czołowych postaci światowej antropologii, neurobiologii i kognitywistyki religii, zbadaj {ACADEMIC_DEBATES.length} aktywnych sporów naukowych oraz naucz się oddzielać twarde dowody empiryczne od pop-psychologicznych mitów adaptacjonistycznych.
        </p>
      </div>

      {/* Sub-tab Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-surface-border pb-3 text-xs font-mono">
        <button
          onClick={() => setActiveSubTab('researchers')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            activeSubTab === 'researchers'
              ? 'bg-emerald-500/20 text-bioneuro-mint border border-emerald-500/40 shadow-glow-emerald'
              : 'text-slate-400 hover:text-slate-200 bg-surface border border-surface-border'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>1. Baza Badaczy ({RESEARCHERS_DATA.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('debates')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            activeSubTab === 'debates'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-glow-terracotta'
              : 'text-slate-400 hover:text-slate-200 bg-surface border border-surface-border'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>2. Mapa Sporów Akademickich ({ACADEMIC_DEBATES.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('detector')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            activeSubTab === 'detector'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-glow-terracotta'
              : 'text-slate-400 hover:text-slate-200 bg-surface border border-surface-border'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>3. Detektor Pseudonauki (6 Filtrów)</span>
        </button>
      </div>

      {/* Sub-tab 1: Researchers */}
      {activeSubTab === 'researchers' && (
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-surface-border pb-3">
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
              {disciplines.map(d => (
                <button
                  key={d.id}
                  onClick={() => setResearcherDiscipline(d.id)}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    researcherDiscipline === d.id
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold'
                      : 'bg-surface text-slate-400 hover:text-slate-200 border-surface-border'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 w-full lg:w-72 bg-surface border border-surface-border rounded-lg px-3 py-1.5">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={researcherQuery}
                onChange={e => setResearcherQuery(e.target.value)}
                placeholder="Szukaj badacza..."
                className="w-full bg-transparent text-xs text-slate-200 placeholder-slate-500 focus:outline-none font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResearchers.map(r => (
              <div key={r.id} id={`researcher-card-${r.id}`}>
                <ResearcherCard researcher={r} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-tab 2: Debates */}
      {activeSubTab === 'debates' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {ACADEMIC_DEBATES.map(deb => (
              <div key={deb.id} id={`debate-card-${deb.id}`}>
                <DebateComparisonCard debate={deb} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-tab 3: Detector */}
      {activeSubTab === 'detector' && (
        <div className="space-y-6">
          <PseudoscienceDetector />
        </div>
      )}

    </div>
  );
};
