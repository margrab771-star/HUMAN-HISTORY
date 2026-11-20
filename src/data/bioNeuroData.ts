import { BrainStructure, PrimateTestesData, ConfidenceLevel } from '../types';

export const BRAIN_STRUCTURES: BrainStructure[] = [
  {
    id: 'vens-insula-acc',
    name: 'Przednia Kora Wyspy i Przedni Zakręt Obręczy (AIC / ACC) — Neurony von Economo (VENs)',
    latinName: 'Cortex insularis anterior & Cortex cingularis anterior',
    anatomicalLocation: 'Głęboka bruzda boczna (wyspa przednia) oraz przyśrodkowa ściana półkuli nad ciałem modzelowatym (ACC), warstwa Vb kory.',
    evolutionaryOrigin: 'Filogenetycznie młoda specjalizacja neuronalna; obecna w wysokiej gęstości u ludzi, w mniejszej u wielkich małp człekokształtnych (szympans, goryl, orangutan) oraz u waleni i słoni (Allman et al., 2010).',
    primaryFunction: 'Błyskawiczne przetwarzanie sygnałów trzewnych (interocepcja), empatia emocjonalna, czytanie intencji społecznych w dynamicznych interakcjach i intuicja moralna (markery somatyczne Damasio).',
    pleistoceneContext: 'Błyskawiczna kalibracja zaufania wewnątrz małej grupy (9–30 osób); odczytywanie subtelnych mikromimik, zapachów i napięć mięśniowych partnera lub rywala w ułamku sekundy bez konieczności powolnej analizy werbalnej. Różnica wobec heurystyk Systemu 1 (Kahneman): to nie jest prymitywny odruch pnia mózgu, lecz najwyższego rzędu kognitywna synteza stanu ciała z modelem relacji społecznych.',
    digitalAndAiEraMismatch: 'W erze generatywnej AI i automatyzacji, chłodna analiza algorytmiczna i przetwarzanie danych są delegowane do maszyn. Rośnie rynkowa i adaptacyjna premia dla unikalnej ludzkiej intuicji relacyjnej opartej na VENs. Jednocześnie nieustanne zapośredniczenie przez płaskie ekrany wygasza sprzężenie interoceptywne (brak mikroekspresji w 3D, zniekształcenia neuroprzekaźnictwa), prowadząc do zubożenia empatii somatycznej.',
    associatedNeurotransmitters: ['Serotonina (receptory 5-HT2a)', 'Dopamina (D1/D2)', 'Endorfiny'],
    primaryCognitiveSystem: 'Szybka intuicja społeczno-integracyjna wyższego rzędu (Advanced Social Intuition / Somatic Marker Network)',
    keyResearchers: ['John Allman', 'Antonio Damasio', 'Bud Craig', 'Esther Nimchinsky'],
    confidenceLevel: 'level1',
    svgCoordinates: { cx: 480, cy: 260, r: 24, labelX: 520, labelY: 250 }
  },
  {
    id: 'pfc-vmpfc-dlpfc',
    name: 'Kora Przedczołowa: vmPFC (Brzuszno-Przyśrodkowa) i dlPFC (Grzbietowo-Boczna)',
    latinName: 'Cortex praefrontalis ventromedialis et dorsolateralis',
    anatomicalLocation: 'Przedni biegun płatów czołowych mózgowia (obszary Brodmanna 9, 10, 11, 46, 47).',
    evolutionaryOrigin: 'Najpóźniej dojrzewająca ontogenetycznie i najbardziej rozbudowana allometrycznie struktura u rodzaju Homo w stosunku do pozostałych naczelnych.',
    primaryFunction: 'dlPFC: Pamięć robocza, zimna kalkulacja, hamowanie impulsów, planowanie wieloetapowe. vmPFC: Wartościowanie afektywne opcji, integracja emocji z normami moralnymi, hamowanie reakcji ciała migdałowatego.',
    pleistoceneContext: 'Hamowanie bezpośrednich odruchów konsumpcyjnych na rzecz kooperacji i dzielenia się mięsem; egzekwowanie norm egalitarnych i odroczonej gratyfikacji (zbieranie surowców krzemiennych z odległych stanowisk).',
    digitalAndAiEraMismatch: 'Rozłączenie funkcjonalne vmPFC i dlPFC: korporacyjna biurokracja i odległe rynki kapitałowe faworyzują chłodne, instrumentalne kalkulacje dlPFC przy wyciszeniu empatii vmPFC. Osłabienie łączności funkcjonalnej między vmPFC a ciałem migdałowatym jest klasycznym neuronalnym korelatem cech psychopatycznych (Blair, Kiehl), które w strukturach korporacyjnych mogą być mylone ze „sprawnym przywództwem”.',
    associatedNeurotransmitters: ['Dopamina', 'Noradrenalina', 'GABA', 'Glutaminian'],
    primaryCognitiveSystem: 'System Kontroli Wykonawczej i Osądu Moralnego (Executive Control & Valuation Network)',
    keyResearchers: ['James Blair', 'Kent Kiehl', 'Michael Gazzaniga', 'Patricia Churchland'],
    confidenceLevel: 'level1',
    svgCoordinates: { cx: 280, cy: 260, r: 28, labelX: 200, labelY: 230 }
  },
  {
    id: 'amygdala-hpa',
    name: 'Ciało Migdałowate i Oś Podwzgórze–Przysadka–Nadnercza (HPA)',
    latinName: 'Corpus amygdaloideum & Axis hypothalamo-pituitario-adrenalis',
    anatomicalLocation: 'Płat skroniowy (część podstawno-boczna i korowo-przyśrodkowa) sprzężona z podwzgórzem i układem dokrewnym.',
    evolutionaryOrigin: 'Ewolucyjnie prastary rdzeń ssaczy i gadzi; kluczowy dla detekcji nagłego niebezpieczeństwa drapieżniczego.',
    primaryFunction: 'Detekcja istotności biologicznej (salience), błyskawiczne wyzwalanie kaskady walki lub ucieczki (kortyzol, adrenalina), konsolidacja lękowych śladów pamięciowych.',
    pleistoceneContext: 'Projekt adaptacyjny pod kątem ostrych, krótkotrwałych zagrożeń fizycznych (atak lamparta, konfrontacja z obcą grupą trwająca minuty). Po ustąpieniu bodźca poziom glukokortykoidów szybko wracał do normy (Sapolsky).',
    digitalAndAiEraMismatch: 'Chroniczny stres statusowy: w bezosobowej gospodarce rynkowej i mediach społecznościowych system alarmowy reaguje na wyimaginowane zagrożenia reputacyjne (maile od przełożonego, utrata lajków, niepewność kredytowa) 24 godziny na dobę. Skutkuje to przewlekłym stanem zapalnym (IL-6, TNF-alpha) oraz zmianami epigenetycznymi w metylacji genu receptora glukokortykoidowego NR3C1 (Meaney), przyspieszając starzenie komórkowe i depresję.',
    associatedNeurotransmitters: ['Kortyzol', 'Adrenalina', 'Kortykoliberyna (CRH)', 'Noradrenalina'],
    primaryCognitiveSystem: 'System Detekcji Zagrożenia i Reakcji Stresowej (Threat & Salience Circuit)',
    keyResearchers: ['Robert Sapolsky', 'Michael Meaney', 'Joseph LeDoux', 'Bruce McEwen'],
    confidenceLevel: 'level1',
    svgCoordinates: { cx: 470, cy: 370, r: 22, labelX: 530, labelY: 390 }
  },
  {
    id: 'mesolimbic-dopamine',
    name: 'Szlak Mezolimbiczny (VTA / Jądro Półleżące / Układ Nagrody)',
    latinName: 'Systema dopaminergicum mesolimbicum (Area tegmentalis ventralis & Nucleus accumbens)',
    anatomicalLocation: 'Nakrywka śródmózgowia (VTA) wysyłająca projekcje do brzusznego prążkowia (NAcc) i kory limbicznej.',
    evolutionaryOrigin: 'Wspólny dla kręgowców mechanizm ukierunkowywania motoryki ku zasobom niezbędnym do przetrwania.',
    primaryFunction: 'Kodowanie błędu predykcji nagrody (Reward Prediction Error — Wolfram Schultz). Generuje stan pożądania („wanting”), eksploracji i skupienia na celu, a NIE stan zaspokojenia („liking”, który zależy od opioidów).',
    pleistoceneContext: 'Motywacja do wielokilometrowych poszukiwań rzadkich, kalorycznych zasobów (miód, dojrzałe owoce, szpik kostny) oraz nowych ścieżek łowieckich w środowisku o chronicznym niedoborze.',
    digitalAndAiEraMismatch: 'Zderzenie z bodźcami nadnormalnymi: platformy społecznościowe (Tiktok, Instagram), hazard cyfrowy, gry freemium i ultraprzetworzona żywność wykorzystują zmienny harmonogram wzmocnień (variable reward ratio). Ciągłe skoki dopaminy prowadzą do homeostatycznej downregulacji receptorów D2 w prążkowiu (Anna Lembke), wywołując anhedonię, spadek motywacji do złożonych zadań i zależność od ciągłej stymulacji.',
    associatedNeurotransmitters: ['Dopamina', 'Kwas glutaminowy', 'Dynorfiny'],
    primaryCognitiveSystem: 'Układ Poszukiwania i Antycypacji Nagrody (Incentive Salience Network)',
    keyResearchers: ['Anna Lembke', 'Wolfram Schultz', 'Kent Berridge', 'Nora Volkow'],
    confidenceLevel: 'level1',
    svgCoordinates: { cx: 420, cy: 340, r: 20, labelX: 350, labelY: 370 }
  },
  {
    id: 'dacc-social-pain',
    name: 'Grzbietowa Przednia Kora Zakrętu Obręczy (dACC) — Sygnał Bólu Społecznego',
    latinName: 'Cortex cingularis anterior dorsalis',
    anatomicalLocation: 'Grzbietowa część zakrętu obręczy, bezpośrednio nad przednią częścią ciała modzelowatego.',
    evolutionaryOrigin: 'Kooptacja fizjologicznego obwodu percepcji afektywnego komponentu bólu fizycznego na potrzeby ochrony integralności grupy u ssaków społecznych.',
    primaryFunction: 'Rejestracja dystresu związanego z odrzuceniem, niesprawiedliwością i wykluczeniem społecznym.',
    pleistoceneContext: 'Ból wykluczenia jako alarm przetrwania: w warunkach plejstoceńskich samotny osobnik poza grupą był skazany na śmierć z głodu lub atak drapieżnika w ciągu kilku dni. Dlatego ewolucja połączyła ostracyzm z tą samą matrycą cierpienia co złamana kość czy oparzenie (Eisenberger & Lieberman, 2003 Science).',
    digitalAndAiEraMismatch: 'Współczesny cancel culture, ghosting w aplikacjach randkowych oraz mikro-odrzucenia w mediach społecznościowych aktywują dACC z intensywnością biologiczną, mimo że fizyczne przetrwanie w metropolii nie jest bezpośrednio zagrożone. Prowadzi to do chronicznego poczucia zagrożenia egzystencjalnego.',
    associatedNeurotransmitters: ['Substancja P', 'Glutaminian', 'Opioidy endogenne (uwalniane przy ukojeniu więzi)'],
    primaryCognitiveSystem: 'System Alarmu Społeczno-Bólowego (Social Attachment & Pain Overlap Circuit)',
    keyResearchers: ['Naomi Eisenberger', 'Matthew Lieberman', 'Jaak Panksepp'],
    confidenceLevel: 'level1',
    svgCoordinates: { cx: 430, cy: 220, r: 20, labelX: 360, labelY: 180 }
  },
  {
    id: 'hippocampus-navigation',
    name: 'Hipokamp i Płat Skroniowy Przyśrodkowy — Pamięć i Mapa Przestrzenna',
    latinName: 'Hippocampus (Formatio hippocampi)',
    anatomicalLocation: 'Wewnętrzna część płata skroniowego, pod korą zakrętu przyhipokampowego.',
    evolutionaryOrigin: 'Wspólny dla ssaków system kognitywnego mapowania przestrzeni fizycznej (komórki miejsca O\'Keefe\'a, komórki siatkowe Moserów).',
    primaryFunction: 'Nawigacja w przestrzeni 3D, konsolidacja pamięci epizodycznej, symulacja przyszłych scenariuszy (mental time travel).',
    pleistoceneContext: 'Mentalna rekonstrukcja rozległych terytoriów żerowania (setki km² sawanny i puszczy), lokalizacja efemerycznych źródeł wody, sezonowość owocowania i pamięć topograficzna kluczowa dla powrotu do obozu.',
    digitalAndAiEraMismatch: 'Zjawisko odciążenia poznawczego (cognitive offloading): powszechna zależność od nawigacji GPS i wyszukiwarek redukuje stymulację hipokampa w zakresie tworzenia map poznawczych. Badania neuroobrazowe wykazują spadek objętości istoty szarej w tylnym hipokampie u osób trwale polegających na zewnętrznych systemach nawigacji w porównaniu z tradycyjną orientacją przestrzenną.',
    associatedNeurotransmitters: ['Acetylocholina', 'Glutaminian (plastyczność LTP)', 'BDNF'],
    primaryCognitiveSystem: 'System Mapowania Poznawczego i Pamięci Epizodycznej (Episodic & Spatial Navigation Network)',
    keyResearchers: ['John O\'Keefe', 'May-Britt Moser', 'Edvard Moser', 'Eleanor Maguire'],
    confidenceLevel: 'level1',
    svgCoordinates: { cx: 520, cy: 350, r: 22, labelX: 590, labelY: 340 }
  },
  {
    id: 'dmn-default-mode',
    name: 'Sieć Trybu Domyślnego (DMN — Default Mode Network)',
    latinName: 'Systema operandi praedeterminatum (PCC, mPFC, AG)',
    anatomicalLocation: 'Scentralizowany obwód obejmujący tylną korę zakrętu obręczy (PCC), przedklinek, przyśrodkową korę przedczołową (mPFC) i zakręt kątowy (AG).',
    evolutionaryOrigin: 'Zaawansowana sieć wielkoskalowa specyficzna dla antropoidów, przeżywająca gwałtowny rozrost w toku encefalizacji Homo.',
    primaryFunction: 'Autorefleksja, teoria umysłu, integrowanie biografii osobistej, konsolidacja sensu i kreatywna synteza wielodomenowa w stanie braku zadania zewnętrznego.',
    pleistoceneContext: 'Spoczynek przy ognisku po polowaniu, snucie opowieści, rozważanie dynamiki reputacyjnej klanu („kto komu pomógł”, „komu można zaufać”); konsolidacja więzi i norm kulturowych w momentach ciszy.',
    digitalAndAiEraMismatch: 'Permanentne wygaszanie DMN przez mikrobodźce: nieustanne sięganie po smartfon w każdej chwili nudy natychmiast przełącza mózg w sieć zadaniową lub szlak dopaminowy. Pozbawia to układ nerwowy fazy głębokiej konsolidacji tożsamości, prowadząc do zjawiska fragmentacji uwagi, spadku kreatywności i trudności w konstruowaniu spójnego sensu życia.',
    associatedNeurotransmitters: ['GABA', 'Serotonina', 'Glutaminian'],
    primaryCognitiveSystem: 'Sieć Symulacji Wewnętrznej i Spójności Narracyjnej (Default Mode Network)',
    keyResearchers: ['Marcus Raichle', 'Randy Buckner', 'Mary Helen Immordino-Yang'],
    confidenceLevel: 'level1',
    svgCoordinates: { cx: 360, cy: 220, r: 26, labelX: 300, labelY: 150 }
  },
  {
    id: 'mirror-tpj-tom',
    name: 'Układ Neuronów Lustrzanych i Styku Skroniowo-Ciemieniowego (MNS / TPJ)',
    latinName: 'Systema neuronorum specularium & Iunctura temporoparietalis',
    anatomicalLocation: 'Dolna kora ciemieniowa (IPL), brzuszna kora przedruchowa (vPMC), styk skroniowo-ciemieniowy (TPJ) oraz bruzda skroniowa górna (STS).',
    evolutionaryOrigin: 'Obwód motoryczno-poznawczy obecny u makaków, wysoce rozwinięty u człowieka jako podstawa kumulatywnej kultury i złożonego języka.',
    primaryFunction: 'Automatyczne odwzorowanie obserwowanych ruchów i emocji w ciele obserwatora (rezonans motoryczny) oraz atrybucja stanów mentalnych innym umysłom (Theory of Mind).',
    pleistoceneContext: 'Precyzyjna transmisja kulturowa bez konieczności formalnego instruktażu: młodociany uczył się łupania pięściaka aszelskiego lub rozpalania ognia poprzez synchroniczną obserwację i naśladownictwo motoryczne mistrza (Tomasello).',
    digitalAndAiEraMismatch: 'Dezorientacja w środowisku botów i syntetycznych awatarów: układ TPJ i MNS reaguje na twarze i ekspresje wideo jak na realne istoty ludzkie (relacje paraspołeczne, syntetyczni influencerzy, boty konwersacyjne AI). Człowiek inwestuje zasoby emocjonalne w relacje jednostronne, które nie odwzajemniają wsparcia w świecie fizycznym.',
    associatedNeurotransmitters: ['Oksytocyna', 'Dopamina', 'Acetylocholina'],
    primaryCognitiveSystem: 'System Rezonansu Społecznego i Teorii Umysłu (Mirror & Mentalizing System)',
    keyResearchers: ['Giacomo Rizzolatti', 'Michael Tomasello', 'Rebecca Saxe', 'Vittorio Gallese'],
    confidenceLevel: 'level1',
    svgCoordinates: { cx: 510, cy: 300, r: 24, labelX: 580, labelY: 280 }
  }
];

export const PRIMATE_TESTES_COMPARISON: PrimateTestesData[] = [
  {
    speciesName: 'Goryl zachodni',
    latinName: 'Gorilla gorilla',
    bodyWeightKg: 170,
    testesWeightG: 30,
    testesToBodyRatioPercent: 0.018,
    matingSystem: 'Harem (skrajna poligynia jednosamcza)',
    spermCompetitionLevel: 'Niska / Prawie zerowa',
    socialStructure: 'Jeden dominujący samiec z „srebrzystym grzbietem” kontroluje wyłączny dostęp seksualny do grupy samic.',
    description: 'Brak bezpośredniej rywalizacji plemników w drogach rodnych samicy. Selekcja naturalna faworyzowała olbrzymią masę ciała, potężne kły i mięśnie grzbietu służące do odstraszania rywali, a nie produkcję olbrzymiej ilości nasienia.'
  },
  {
    speciesName: 'Człowiek rozumny',
    latinName: 'Homo sapiens',
    bodyWeightKg: 75,
    testesWeightG: 40,
    testesToBodyRatioPercent: 0.053,
    matingSystem: 'Umiarkowana monogamia / seryjna monogamia / okazjonalna poligynia',
    spermCompetitionLevel: 'Umiarkowana (pośrednia)',
    socialStructure: 'Relatywnie trwałe pary z silną koalicją męską i wieloma osobnikami obu płci żyjącymi w bliskim sąsiedztwie w obozowisku.',
    description: 'Pozycja pośrednia na wykresie allometrycznym. Względna masa jąder człowieka (~0,05%) jest trzykrotnie wyższa niż u goryla, lecz czterokrotnie niższa niż u szympansa. Wskazuje to na ewolucyjną przeszłość z dominacją par zacieśnionych więzią, lecz z niezerowym ryzykiem kopulacji pozapartnerskich (EPC — Extra-Pair Copulation).'
  },
  {
    speciesName: 'Szympans zwyczajny',
    latinName: 'Pan troglodytes',
    bodyWeightKg: 45,
    testesWeightG: 120,
    testesToBodyRatioPercent: 0.270,
    matingSystem: 'Wielosamczość-wielosamiczność (promiskuityzm koalicyjny)',
    spermCompetitionLevel: 'Ekstremalnie wysoka',
    socialStructure: 'Samica w okresie rui (estrus z widocznym obrzmieniem) kopuluje w krótkim czasie z wieloma samcami z grupy (nawet kilkunastoma w ciągu doby).',
    description: 'Zwycięstwo reprodukcyjne rozstrzyga się na poziomie fizjologicznym w drogach rodnych samicy: samiec o większej objętości ejakulatu, wyższej ruchliwości plemników i częstszym wytrysku ma wielokrotnie wyższe szanse na zapłodnienie.'
  }
];

export const REPRODUCTIVE_BIOLOGY_DETAILS = {
  concealedOvulation: {
    title: 'Ukryta Owulacja i Stała Gotowość Seksualna u Kobiet',
    badge: 'level1' as ConfidenceLevel,
    mechanisms: [
      'Brak zewnętrznych obrzmień płciowych czy sygnałów zapachowych jednoznacznie wskazujących na dzień owulacji.',
      'Ewolucyjna funkcja: redukcja przemocy między samcami w grupie oraz motywacja partnera do ciągłej obecności i inwestycji rodzicielskiej (gdyby owulacja była jawna, samiec strzegłby partnerki tylko przez 3 dni w miesiącu, po czym opuszczałby obóz w poszukiwaniu innych szans).',
      'Wsparcie hipotezy alloparentingu: ułatwienie pokojowej koegzystencji wielu kobiet i mężczyzn w obozie łowiecko-zbierackim bez ciągłych walk o pozycję w okresie płodnym.'
    ]
  },
  glansRidgeDisplacement: {
    title: 'Mechanika Korony Żołędzi Prącia (Hipoteza Wypierania Nasienia)',
    badge: 'level2' as ConfidenceLevel,
    researcher: 'Gordon Gallup et al. (2003)',
    mechanisms: [
      'Kształt korony żołędzi u ludzi działa biomechanicznie jak tłok wypierający płyn fizjologiczny.',
      'Symulacje laboratoryjne ze sztucznym nasieniem wykazały, że przy głębokiej penetracji korona żołędzi jest w stanie usunąć ponad 90% obcego ejakulatu wprowadzonego do pochwy przed stosunkiem.',
      'Fizjologiczny dowód na istnienie umiarkowanej konkurencji plemników w historii ewolucyjnej naszego gatunku.'
    ]
  },
  hormonalBondingAndFatherhood: {
    title: 'Fizjologiczny Spadek Testosteronu u Ojców i Rola Wazopresyny/Oksytocyny',
    badge: 'level1' as ConfidenceLevel,
    researcher: 'Lee Gettler et al. (2011 PNAS)',
    mechanisms: [
      'Badania podłużne Gettlera na Filipinach wykazały, że mężczyźni wchodzący w stały związek i bezpośrednio opiekujący się potomstwem doznają drastycznego (~30–40%) spadku poziomu krążącego testosteronu.',
      'Spadek testosteronu nie jest patologią, lecz adaptacyjnym przeprogramowaniem neuroendokrynnym: redukuje impulsywność i potrzebę rywalizacji statusowej, a promuje cierpliwość i czujność rodzicielską.',
      'Równoległy wzrost gęstości receptorów wazopresyny (V1aR) w podwzgórzu i prążkowiu koreluje z obroną gniazda i lojalnością partnerską.'
    ]
  }
};

export const KAMIKAZE_SPERM_DEBATE = {
  title: 'Weryfikacja Naukowa: Spór o „Plemniki Kamikadze” (Kamikaze Sperm Hypothesis)',
  badge: 'level3' as ConfidenceLevel,
  thesisA: {
    author: 'Robin Baker & Mark Bellis (1988, 1995 „Sperm Wars”)',
    name: 'Hipoteza wyspecjalizowanych plemników wojennych',
    claim: 'Postulowano, że plemniki ssaków (w tym człowieka) dzielą się na odrębne morfologicznie kasty: plemniki-zapładniacze (egg-getters) oraz liczne plemniki-kamikadze (soldier/blocker sperm). Te ostatnie miały mieć za zadanie blokowanie śluzu szyjkowego, tworzenie fizycznych zatorów oraz aktywne atakowanie i niszczenie plemników obcego samca za pomocą reakcji akrosomowych i enzymów.'
  },
  thesisB: {
    author: 'Harry Moore, Martin Martin, David Birkhead et al. (1999 Proceedings of the Royal Society B)',
    name: 'Rygorystyczna replikacja empiryczna i obalenie tezy',
    claim: 'Wieloośrodkowe, kontrolowane badania laboratoryjne wykazały całkowity brak dowodów na istnienie plemników-żołnierzy. Zmieszane próbki nasienia obcych mężczyzn nie wykazywały żadnej agresji, a anomalie morfologiczne (np. plemniki dwugłowe, o skręconych witkach) to zwykłe błędy i odpady procesu spermatogenezy, a nie wyspecjalizowani wojownicy. Człowiek posiada umiarkowaną konkurencję plemników opartą na liczebności i ruchliwości, a nie na „wojnach plemników”.'
  },
  verdict: 'Współczesna andrologia i biologia ewolucyjna jednoznacznie odrzucają model Bakera jako pseudonaukową hipotezę adaptacjonistyczną typu „just-so story”. Pozostaje ona klasycznym przykładem błędu nadinterpretacji, który zdobył popularność medialną, lecz nie przetrwał próby replikacji laboratoryjnej.'
};
