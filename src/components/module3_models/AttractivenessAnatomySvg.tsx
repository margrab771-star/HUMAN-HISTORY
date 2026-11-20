import React, { useState } from 'react';
import { Sparkles, Eye, User, HeartHandshake, RefreshCw } from 'lucide-react';

type AnatomyTab = 'face' | 'silhouette' | 'domestication' | 'reversal21';

export const AttractivenessAnatomySvg: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AnatomyTab>('face');

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-4 md:p-6 shadow-xl flex flex-col gap-6">
      
      {/* Title & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border pb-4">
        <div>
          <h3 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Interaktywna Anatomia Atrakcyjności i Morfologii Sygnałowej</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Odczytywanie stabilności rozwojowej, układu odpornościowego MHC i syndromu samoudomowienia w ciele człowieka.
          </p>
        </div>

        {/* 4 Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-obsidian-200 rounded-lg border border-surface-border text-xs font-mono">
          <button
            onClick={() => setActiveTab('face')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded transition-all ${
              activeTab === 'face' ? 'bg-amber-500/25 text-amber-300 font-bold border border-amber-500/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Twarz & Symetria</span>
          </button>

          <button
            onClick={() => setActiveTab('silhouette')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded transition-all ${
              activeTab === 'silhouette' ? 'bg-bioneuro-emerald/25 text-bioneuro-mint font-bold border border-bioneuro-emerald/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Sylwetka (WHR / SHR)</span>
          </button>

          <button
            onClick={() => setActiveTab('domestication')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded transition-all ${
              activeTab === 'domestication' ? 'bg-pleisto-terracotta/25 text-pleisto-ochre font-bold border border-pleisto-terracotta/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Samoudomowienie (Neotenia)</span>
          </button>

          <button
            onClick={() => setActiveTab('reversal21')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded transition-all ${
              activeTab === 'reversal21' ? 'bg-modern-cyan/25 text-modern-cyan font-bold border border-modern-cyan/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Odwrócenie w XXI w.</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      {activeTab === 'face' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3">
            <h4 className="font-serif font-bold text-amber-300 text-base">
              Symetria Fluktuacyjna (Fluctuating Asymmetry — FA)
            </h4>
            <p>
              Symetria twarzy i ciała nie jest wymogiem estetycznym, lecz bezpośrednim wskaźnikiem <strong>stabilności rozwojowej</strong> organizmu. W trakcie embriogenezy organizm zmaga się z mutacjami genetycznymi, toksynami środowiskowymi i atakami patogenów. Osobniki o wysokiej symetrii udowadniają, że ich genom posiada rezerwy homeostatyczne chroniące przed zaburzeniami rozwoju.
            </p>
            <div className="p-2.5 rounded bg-surface border border-surface-border text-[11px] font-mono text-amber-200">
              Badania Gillian Rhodes i Davida Perretta: komputerowe uśrednianie i symetryzacja rysów twarzy zwiększają subiektywną atrakcyjność w 100% testowanych kultur na świecie.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3">
            <h4 className="font-serif font-bold text-amber-300 text-base">
              Uśrednienie Twarzy (Kognitywna Łatwość Prototypu)
            </h4>
            <p>
              Gdy naukowcy łączą cyfrowo zdjęcia 32 różnych twarzy w jedną, wynikowy kompozyt jest niemal zawsze oceniany jako znacznie bardziej atrakcyjny niż jakakolwiek twarz składowa. Wynika to z dwóch mechanizmów:
            </p>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong>Płynność percepcyjna:</strong> prototypowa twarz jest przetwarzana przez mózg z minimalnym zużyciem glukozy.</li>
              <li><strong>Heterozygotyczność:</strong> uśrednione rysy sygnalizują różnorodność genetyczną alleli układu odpornościowego.</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'silhouette' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3">
            <h4 className="font-serif font-bold text-bioneuro-mint text-base">
              Stosunek Talii do Bioder (WHR ~ 0,7) u Kobiet
            </h4>
            <p>
              Pionierskie badania Devendry Singha (1993) wykazały, że stosunek obwodu talii do bioder (Waist-to-Hip Ratio — WHR) w granicach <strong>0,67–0,72</strong> jest uniwersalnym atraktorem seksualnym.
            </p>
            <p>
              Tłuszcz gynoidalny odkładany na biodrach i udach jest bogaty w długołańcuchowe wielonienasycone kwasy tłuszczowe (szczególnie DHA), które są niezbędne do budowy mózgu płodu w trakcie ciąży i laktacji. Niski WHR koreluje również z optymalnym poziomem estrogenów i niskim ryzykiem chorób układu krążenia.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3">
            <h4 className="font-serif font-bold text-bioneuro-mint text-base">
              Stosunek Barków do Talii (SHR ~ 1,6) u Mężczyzn
            </h4>
            <p>
              Sylwetka w kształcie litery „V” (Shoulder-to-Hip Ratio — SHR) odzwierciedla działanie testosteronu w okresie pokwitania. Rozbudowana obręcz barkowa i klatka piersiowa były w plejstocenie bezpośrednim sygnałem siły biomechanicznej niezbędnej do miotania oszczepem, walki z drapieżnikami i obrony obozowiska.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'domestication' && (
        <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3 text-xs text-slate-300 leading-relaxed">
          <h4 className="font-serif font-bold text-pleisto-ochre text-base">
            Syndrom Samoudomowienia Człowieka (Brian Hare, Richard Wrangham)
          </h4>
          <p>
            Porównanie czaszek wczesnego Homo sapiens (np. Jebel Irhoud, 315 tys. lat) ze współczesnymi wykazuje postępujące łagodnienie rysów (gracylizacja): redukcję wałów nadoczodołowych, spłaszczenie twarzy i kulistość puszki mózgowej (globularyzacja).
          </p>
          <p>
            Zgodnie z hipotezą samoudomowienia, koalicje łowców-zbieraczy eliminowały agresywnych osobników o wysokiej agresji reaktywnej. Prowadziło to do selekcji na ugodowość i prospołeczność, czego efektem ubocznym w rozwoju embrionalnym było zmniejszenie migracji komórek grzebienia nerwowego (neural crest cells) – zjawisko identyczne jak u udomowionych psów czy lisów Bielajewa.
          </p>
        </div>
      )}

      {activeTab === 'reversal21' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3">
            <h4 className="font-serif font-bold text-modern-cyan text-base">
              Zapachy Układu MHC a Antykoncepcja Hormonalna
            </h4>
            <p>
              Badania Clausa Wedekinda („eksperyment spoconych koszulek”, 1995): kobiety w fazie naturalnego cyklu owulacyjnego wybierają jako najbardziej pociągający zapach mężczyzn posiadających odmienny od nich profil genów zgodności tkankowej MHC (co gwarantuje potomstwu odporność na szersze spektrum patogenów).
            </p>
            <div className="p-2.5 rounded bg-surface border border-rose-500/40 text-[11px] text-rose-300">
              <strong>Zderzenie farmakologiczne:</strong> Kobiety stosujące antykoncepcję hormonalną (symulującą stan ciąży) zaczynają preferować zapachy mężczyzn o PODOBNYM profilu MHC (profil krewniaczy, szukanie wsparcia rodziny). Odstawienie tabletek po ślubie może wywołać nagły spadek pociągu seksualnego do partnera.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-200 border border-surface-border flex flex-col gap-3">
            <h4 className="font-serif font-bold text-modern-cyan text-base">
              Odwrócenie Sygnału Tkanki Tłuszczowej i Dysmorfia
            </h4>
            <p>
              W plejstocenie tłuszcz był najrzadszym dobrem – symbolem obfitości i płodności. W kapitalizmie ultraprzetworzonej żywności kalorie są tanie jak nigdy dotąd. W efekcie szczupłość i umięśnienie stały się dobrem luksusowym (wymagającym drogiej diety i wolnego czasu).
            </p>
            <p>
              Pojawienie się filtrów cyfrowych w telefonach stworzyło zjawisko <em>dysmorfeofobii algorytmicznej</em>: użytkownicy porównują swoje biologiczne ciała ze zniekształconymi matematycznie awatarami, napędzając globalny rynek operacji plastycznych i leków z grupy GLP-1.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
