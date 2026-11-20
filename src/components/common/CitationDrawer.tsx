import React, { useState } from 'react';
import { MODULE_CITATIONS } from '../../data/citationsData';
import { X, Copy, Check, ExternalLink, BookMarked, Search } from 'lucide-react';

interface CitationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeModuleId?: number;
}

export const CitationDrawer: React.FC<CitationDrawerProps> = ({
  isOpen,
  onClose,
  activeModuleId
}) => {
  const [selectedModule, setSelectedModule] = useState<number | 'all'>(activeModuleId || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);

  // Sync selectedModule when activeModuleId changes
  React.useEffect(() => {
    if (activeModuleId) {
      setSelectedModule(activeModuleId);
    }
  }, [activeModuleId]);

  if (!isOpen) return null;

  const modules = [
    { id: 'all', label: 'Wszystkie Moduły' },
    { id: 1, label: 'Moduł 1: Gatunki & Paleogenetyka' },
    { id: 2, label: 'Moduł 2: Bio-Neuro X-Ray' },
    { id: 3, label: 'Moduł 3: Modele Psychologii' },
    { id: 4, label: 'Moduł 4: Efekty Poznawcze' },
    { id: 5, label: 'Moduł 5: Ewolucja Cech & Autopsja' },
    { id: 6, label: 'Moduł 6: Badacze & Metodologia' },
    { id: 7, label: 'Moduł 7: Świadomość & Religia' }
  ];

  const filteredCitations = MODULE_CITATIONS.filter(c => {
    const matchesModule = selectedModule === 'all' || c.moduleId === selectedModule;
    const q = searchQuery.toLowerCase();
    const matchesQuery = !searchQuery || (
      c.apaString.toLowerCase().includes(q) ||
      c.keyConcept.toLowerCase().includes(q) ||
      c.peerReviewedJournal.toLowerCase().includes(q)
    );
    return matchesModule && matchesQuery;
  });

  const handleCopyOne = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const allText = filteredCitations.map(c => c.apaString).join('\n\n');
    navigator.clipboard.writeText(allText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-surface-dark border-l border-surface-border h-full flex flex-col shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-surface-border bg-obsidian-200/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-slate-100 flex items-center gap-2">
                Aparatura Źródłowa i Cytowania APA 7th
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Rygor akademicki: Nature, Science, PNAS, peer-reviewed journals
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-surface border border-surface-border transition-colors"
            title="Zamknij (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 border-b border-surface-border bg-surface/50 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Szukaj po autorze, tytule, czasopiśmie (np. Nature, Pääbo, Oxytocin)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-obsidian-300 border border-surface-border rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
            />
          </div>

          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full text-xs font-mono">
              {modules.map(m => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModule(m.id as any)}
                  className={`px-2.5 py-1 rounded text-[11px] whitespace-nowrap transition-colors border ${
                    selectedModule === m.id
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold'
                      : 'bg-surface text-slate-400 hover:text-slate-200 border-surface-border'
                  }`}
                >
                  {m.id === 'all' ? 'Wszystkie' : `M${m.id}`}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopyAll}
              disabled={filteredCitations.length === 0}
              className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-semibold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 transition-colors disabled:opacity-40"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? 'Skopiowano wszystkie!' : `Kopiuj widoczne (${filteredCitations.length})`}</span>
            </button>
          </div>
        </div>

        {/* Citations List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {filteredCitations.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              Brak cytowań spełniających kryteria wyszukiwania.
            </div>
          ) : (
            filteredCitations.map(cit => {
              const isCopied = copiedId === cit.id;
              return (
                <div
                  key={cit.id}
                  className="p-4 rounded-xl border border-surface-border bg-obsidian-200/70 hover:border-slate-600 transition-all space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-surface-border text-emerald-400">
                      Moduł {cit.moduleId}: {cit.moduleName}
                    </span>
                    <button
                      onClick={() => handleCopyOne(cit.id, cit.apaString)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono border transition-colors ${
                        isCopied
                          ? 'bg-emerald-500/30 text-emerald-200 border-emerald-400'
                          : 'bg-surface hover:bg-slate-700 text-slate-300 border-surface-border'
                      }`}
                      title="Kopiuj cytowanie APA do schowka"
                    >
                      {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{isCopied ? 'Skopiowano' : 'Kopiuj APA'}</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed font-serif pl-2 border-l-2 border-emerald-500/50">
                    {cit.apaString}
                  </p>

                  <div className="pt-2 border-t border-surface-border/60 flex items-center justify-between text-[11px] text-slate-400 font-mono gap-2 flex-wrap">
                    <span className="text-slate-300">
                      <strong className="text-emerald-400">Pojęcie:</strong> {cit.keyConcept}
                    </span>

                    {cit.doiOrUrl && (
                      <a
                        href={cit.doiOrUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors shrink-0"
                      >
                        <span>DOI / Źródło</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-surface-border bg-obsidian-200/90 text-center text-xs text-slate-400 font-mono">
          Standard APA 7th Edition • Wszystkie pozycje zweryfikowane w bazach PubMed / CrossRef
        </div>
      </div>
    </div>
  );
};
