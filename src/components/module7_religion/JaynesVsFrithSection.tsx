import React, { useState } from 'react';
import { JAYNES_VS_FRITH_DATA } from '../../data/religionConsciousnessData';
import { ConfidenceBadge } from '../common/ConfidenceBadge';
import { Brain, AlertTriangle, Split, Zap, BookOpen } from 'lucide-react';

export const JaynesVsFrithSection: React.FC = () => {
  const [selectedHemisphere, setSelectedHemisphere] = useState<'left' | 'right' | 'corpus'>('left');

  const data = JAYNES_VS_FRITH_DATA;

  return (
    <div className="rounded-xl border border-surface-border bg-surface/90 overflow-hidden shadow-xl flex flex-col gap-6 p-4 md:p-6">
      
      {/* Header */}
      <div className="border-b border-surface-border pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider mb-1">
          <Split className="w-4 h-4" />
          <span>DEBATA NEUROFILOZOFICZNA: GŁOSY BOGÓW A ARCHITEKTURA ŚWIADOMOŚCI</span>
        </div>
        <h3 className="font-serif font-bold text-xl md:text-2xl text-slate-100">
          Umysł Dwuizbowy (Julian Jaynes) vs. Monitorowanie Źródła (Chris Frith)
        </h3>
        <p className="text-xs text-slate-400 font-sans mt-1">
          Krytyczna weryfikacja hipotezy powstania samoświadomości w II tysiącleciu p.n.e. w świetle współczesnej neurofizjologii kory mózgowej i filozofii kognitywnej.
        </p>
      </div>

      {/* SVG Diagram: Interhemispheric Brain Model */}
      <div className="p-4 md:p-6 rounded-xl bg-[#090C12] border border-surface-border flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-3 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5 font-bold text-slate-200">
            <Brain className="w-4 h-4 text-emerald-400" />
            SCHEMAT MIĘDZYPÓŁKULOWEJ KOMUNIKACJI KOROWEJ:
          </span>
          <span className="text-[11px] text-slate-400">
            Kliknij element mózgu, aby zbadać funkcję
          </span>
        </div>

        <svg
          viewBox="0 0 760 300"
          className="w-full max-w-2xl h-auto select-none"
          aria-label="Schemat kory mózgowej i spoidła wielkiego"
        >
          <defs>
            <linearGradient id="leftHemiGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.15" />
            </linearGradient>

            <linearGradient id="rightHemiGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333EA" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
            </linearGradient>

            <marker id="arrowSignal" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#F43F5E" />
            </marker>
          </defs>

          {/* Left Hemisphere (Language & Narrative Ego) */}
          <g 
            onClick={() => setSelectedHemisphere('left')}
            className="cursor-pointer group"
          >
            <path
              d="M 360 40 C 260 40, 180 80, 160 150 C 140 220, 200 270, 310 270 C 350 270, 360 250, 360 200 Z"
              fill="url(#leftHemiGrad)"
              stroke={selectedHemisphere === 'left' ? '#38BDF8' : '#0284C7'}
              strokeWidth={selectedHemisphere === 'left' ? 2.5 : 1.5}
            />
            {/* Wernicke & Broca Areas */}
            <circle cx="280" cy="180" r="14" fill="#38BDF8" fillOpacity="0.6" className="animate-pulse" />
            <text x="280" y="184" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">Wernicke</text>

            <circle cx="250" cy="130" r="12" fill="#0EA5E9" fillOpacity="0.6" />
            <text x="250" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">Broca</text>

            <text x="250" y="70" textAnchor="middle" fill="#38BDF8" fontSize="12" fontFamily="serif" fontWeight="bold">
              LEWA PÓŁKULA (L)
            </text>
            <text x="250" y="86" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">
              Mowa, Analiza, Narracyjne „Ja”
            </text>
          </g>

          {/* Right Hemisphere (Synthetic, Auditory Imagery) */}
          <g 
            onClick={() => setSelectedHemisphere('right')}
            className="cursor-pointer group"
          >
            <path
              d="M 400 40 C 500 40, 580 80, 600 150 C 620 220, 560 270, 450 270 C 410 270, 400 250, 400 200 Z"
              fill="url(#rightHemiGrad)"
              stroke={selectedHemisphere === 'right' ? '#C084FC' : '#9333EA'}
              strokeWidth={selectedHemisphere === 'right' ? 2.5 : 1.5}
            />
            {/* Right Auditory Associative Node (Jaynes "Voice of God") */}
            <circle cx="480" cy="180" r="14" fill="#F43F5E" fillOpacity="0.7" className="animate-pulse" />
            <text x="480" y="184" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">Głos / Omam</text>

            <text x="510" y="70" textAnchor="middle" fill="#C084FC" fontSize="12" fontFamily="serif" fontWeight="bold">
              PRAWA PÓŁKULA (P)
            </text>
            <text x="510" y="86" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">
              Syntetyczna, Wyobrażenia Słuchowe
            </text>
          </g>

          {/* Corpus Callosum (Bridge) */}
          <g 
            onClick={() => setSelectedHemisphere('corpus')}
            className="cursor-pointer group"
          >
            <rect
              x="360"
              y="110"
              width="40"
              height="80"
              rx="6"
              fill={selectedHemisphere === 'corpus' ? '#10B981' : '#334155'}
              fillOpacity={selectedHemisphere === 'corpus' ? 0.7 : 0.4}
              stroke={selectedHemisphere === 'corpus' ? '#34D399' : '#64748B'}
              strokeWidth={selectedHemisphere === 'corpus' ? 2 : 1}
            />
            {/* Signal Flow Arrow across bridge */}
            <path
              d="M 460 180 Q 400 150 300 180"
              fill="none"
              stroke="#F43F5E"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowSignal)"
            />
            <text x="380" y="155" textAnchor="middle" fill="#F8FAFC" fontSize="8" fontFamily="monospace" fontWeight="bold" transform="rotate(-90 380 155)">
              SPOIDŁO WIELKIE
            </text>
          </g>

          {/* Corollary Discharge / Source Monitoring indicator */}
          <path
            d="M 250 145 C 230 160, 240 180, 265 180"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            strokeDasharray="3 2"
          />
          <text x="210" y="215" fill="#34D399" fontSize="8" fontFamily="monospace">
            Kopia eferentna (Frith): „To mówię ja”
          </text>
        </svg>

        {/* Dynamic Hemisphere Info Bar */}
        <div className="w-full mt-3 p-3 rounded-lg bg-surface border border-surface-border text-xs text-slate-300 font-mono flex items-center justify-between flex-wrap gap-2">
          <span>
            {selectedHemisphere === 'left' && 'Wybrano: Lewa Półkula — Ośrodki Broki i Wernickego, werbalizacja myśli, introspektywne planowanie.'}
            {selectedHemisphere === 'right' && 'Wybrano: Prawa Półkula — Generowanie afektu, intonacji i wyobrażeń zmysłowych (u Jaynesa źródło halucynacji bóstwa).'}
            {selectedHemisphere === 'corpus' && 'Wybrano: Spoidło Wielkie (Corpus Callosum) — 200 milionów włókien nerwowych łączących obie półkule od setek tysięcy lat.'}
          </span>
          <span className="text-emerald-400 text-[10px]">Anatomia Homo sapiens: stabilna od 300 000 lat</span>
        </div>
      </div>

      {/* Side-by-Side Debate Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
        
        {/* Left Column: Julian Jaynes (Level 3) */}
        <div className="p-5 rounded-xl bg-obsidian-200/90 border border-rose-500/40 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3 border-b border-surface-border pb-3">
            <div>
              <div className="flex items-center gap-2">
                <ConfidenceBadge level="level3" size="sm" />
                <span className="text-[10px] font-mono text-rose-400 uppercase font-bold">Hipoteza Radykalna</span>
              </div>
              <h4 className="font-serif font-bold text-base md:text-lg text-rose-200 mt-1">
                {data.leftColumnJaynes.thesisTitle}
              </h4>
              <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                {data.leftColumnJaynes.authorAndYear}
              </p>
            </div>
          </div>

          <div className="space-y-3 text-slate-300">
            <div className="p-3 rounded-lg bg-surface border border-surface-border">
              <strong className="text-rose-300 font-mono block text-[11px] mb-1">Główna Teza Jaynesa:</strong>
              <p className="leading-relaxed">{data.leftColumnJaynes.coreClaim}</p>
            </div>

            <div className="p-3 rounded-lg bg-surface border border-surface-border">
              <strong className="text-amber-300 font-mono block text-[11px] mb-1">Świadectwo Iliady Homera:</strong>
              <p className="leading-relaxed">{data.leftColumnJaynes.homericEvidence}</p>
            </div>

            <div className="p-3 rounded-lg bg-surface border border-surface-border">
              <strong className="text-purple-300 font-mono block text-[11px] mb-1">Spekulacja Neuroanatomiczna:</strong>
              <p className="leading-relaxed">{data.leftColumnJaynes.neurologicalSpeculation}</p>
            </div>

            <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/30 text-rose-200">
              <strong className="text-rose-300 font-mono block text-[11px] mb-1 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                Dlaczego Obalono to Biologicznie:
              </strong>
              <p className="leading-relaxed text-[11px]">{data.leftColumnJaynes.whyRejectedBiologically}</p>
            </div>

            <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/30 text-amber-200 mt-auto">
              <strong className="text-amber-300 font-mono block text-[11px] mb-1">Zachowana Wartość Kulturowa:</strong>
              <p className="leading-relaxed text-[11px]">{data.leftColumnJaynes.culturalValueRetained}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Chris Frith & Modern Neuropsychology (Level 1) */}
        <div className="p-5 rounded-xl bg-obsidian-200/90 border border-emerald-500/40 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3 border-b border-surface-border pb-3">
            <div>
              <div className="flex items-center gap-2">
                <ConfidenceBadge level="level1" size="sm" />
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Konsensus Empiryczny</span>
              </div>
              <h4 className="font-serif font-bold text-base md:text-lg text-emerald-200 mt-1">
                {data.rightColumnFrithConsensus.thesisTitle}
              </h4>
              <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                Badacze: {data.rightColumnFrithConsensus.primaryResearchers.join(', ')}
              </p>
            </div>
          </div>

          <div className="space-y-3 text-slate-300">
            <div className="p-3 rounded-lg bg-surface border border-surface-border">
              <strong className="text-emerald-300 font-mono block text-[11px] mb-1 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                Mechanizm Kopii Eferentnej (Corollary Discharge):
              </strong>
              <p className="leading-relaxed">{data.rightColumnFrithConsensus.corollaryDischargeMechanism}</p>
            </div>

            <div className="p-3 rounded-lg bg-surface border border-surface-border">
              <strong className="text-emerald-300 font-mono block text-[11px] mb-1">Awaria Monitorowania Źródła (Source Monitoring):</strong>
              <p className="leading-relaxed">{data.rightColumnFrithConsensus.sourceMonitoringFailure}</p>
            </div>

            <div className="p-3 rounded-lg bg-surface border border-surface-border">
              <strong className="text-cyan-300 font-mono block text-[11px] mb-1">Ciągłość Neuroanatomiczna:</strong>
              <p className="leading-relaxed">{data.rightColumnFrithConsensus.neuroanatomyEvidence}</p>
            </div>

            <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 mt-auto">
              <strong className="text-emerald-300 font-mono block text-[11px] mb-1 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                Synteza Daniela Dennetta (Kulturowe Oprogramowanie „Ja”):
              </strong>
              <p className="leading-relaxed text-[11px]">{data.rightColumnFrithConsensus.dennettCulturalSoftwareView}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
