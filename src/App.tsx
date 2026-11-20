import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { MethodologyBanner } from './components/common/MethodologyBanner';
import { Footer } from './components/common/Footer';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';

import { Module1Species } from './components/module1_species/Module1Species';
import { Module2BioNeuro } from './components/module2_bioneuro/Module2BioNeuro';
import { Module3Models } from './components/module3_models/Module3Models';
import { Module4Effects } from './components/module4_effects/Module4Effects';
import { Module5Matrix } from './components/module5_matrix/Module5Matrix';
import { Module6Debates } from './components/module6_debates/Module6Debates';
import { Module7Religion } from './components/module7_religion/Module7Religion';
import { CitationDrawer } from './components/common/CitationDrawer';

export const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number>(1);
  const [isBioNeuroGlobalXRay, setIsBioNeuroGlobalXRay] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isCitationDrawerOpen, setIsCitationDrawerOpen] = useState<boolean>(false);
  const [targetItemId, setTargetItemId] = useState<string | undefined>(undefined);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectModule = (moduleId: number) => {
    setActiveModule(moduleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSearchResult = (moduleId: number, itemId?: string) => {
    setActiveModule(moduleId);
    setTargetItemId(itemId);

    if (itemId) {
      setTimeout(() => {
        // Attempt to scroll to target element
        const element = document.getElementById(itemId) || 
                        document.getElementById(`species-card-${itemId}`) ||
                        document.getElementById(`effect-card-${itemId}`) ||
                        document.getElementById(`researcher-card-${itemId}`) ||
                        document.getElementById(`debate-card-${itemId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-obsidian text-slate-200 flex flex-col font-sans selection:bg-bioneuro-emerald/30 selection:text-white">
      
      {/* 1. Academic Methodology Banner */}
      <MethodologyBanner />

      {/* 2. Global Sticky Header with Navigation and Mode Switcher */}
      <Header
        activeModule={activeModule}
        onSelectModule={handleSelectModule}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCitations={() => setIsCitationDrawerOpen(true)}
        isBioNeuroGlobalXRay={isBioNeuroGlobalXRay}
        onToggleBioNeuroGlobalXRay={() => setIsBioNeuroGlobalXRay(!isBioNeuroGlobalXRay)}
      />

      {/* 3. Main Active Lab Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {activeModule === 1 && (
          <Module1Species globalXRayMode={isBioNeuroGlobalXRay} />
        )}
        {activeModule === 2 && (
          <Module2BioNeuro />
        )}
        {activeModule === 3 && (
          <Module3Models
            globalXRayMode={isBioNeuroGlobalXRay}
            selectedModelId={targetItemId}
          />
        )}
        {activeModule === 4 && (
          <Module4Effects globalXRayMode={isBioNeuroGlobalXRay} />
        )}
        {activeModule === 5 && (
          <Module5Matrix
            globalXRayMode={isBioNeuroGlobalXRay}
            selectedTraitId={targetItemId}
          />
        )}
        {activeModule === 6 && (
          <Module6Debates />
        )}
        {activeModule === 7 && (
          <Module7Religion globalXRayMode={isBioNeuroGlobalXRay} />
        )}
      </main>

      {/* 4. Editorial Footer */}
      <Footer onSelectModule={handleSelectModule} />

      {/* 5. Global Command Palette Modal (Ctrl+K) */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      {/* 6. Academic APA Citation Drawer */}
      <CitationDrawer
        isOpen={isCitationDrawerOpen}
        onClose={() => setIsCitationDrawerOpen(false)}
        activeModuleId={activeModule}
      />

    </div>
  );
};

export default App;
