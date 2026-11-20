import { HominidSpecies } from '../types';

export const SPECIES_DATA: HominidSpecies[] = [
  {
    id: 'australopithecus-afarensis',
    name: 'Australopithecus afarensis',
    commonName: 'Australopitek z Afaru („Lucy”, AL 288-1)',
    epochRange: 'Pliocen (ok. 3,9 – 2,9 mln lat temu)',
    yearsAgoRange: [3900, 2900],
    brainCapacityCm3: { min: 380, max: 500, avg: 430 },
    estimatedGroupSize: { min: 20, max: 35 },
    geographicRange: 'Wschodnia Afryka (Hadar w Etiopii, Laetoli w Tanzanii, Kenia)',
    discoveryInfo: 'Odkrycie „Lucy” przez Donalda Johansona i Maurice\'a Taieba w Hadar (1974) oraz tropy stóp w tufie wulkanicznym w Laetoli (Mary Leakey, 1978).',
    cranialAndAnatomyFeatures: [
      'Dwunożność habitualna połączona z adaptacjami nadrzewnymi (zakrzywione paliczki, ruchomy staw barkowy)',
      'Silny dymorfizm płciowy w masie ciała (~50%), sugerujący poligyniczną strukturę rozrodczą z rywalizacją samców',
      'Czaszka z prognatyzmem prognatycznym, wałem nadoczodołowym i małą puszką mózgową (EQ ~ 2,2)',
      'Uzębienie zredukowane względem wcześniejszych form, kły nieznacznie wystające bez diastemy tnącej'
    ],
    toolIndustry: 'Brak trwałego przemysłu kamiennego; potencjalne użycie prowizorycznych narzędzi organicznych i otoczaków (Dikika, nacięcia na kościach ~3,4 mln lat, sporne).',
    dietAndSurvivalStrategy: 'Uogólniony roślinożerca i oportunista (owoce, nasiona, korzenie, sporadyczne bezkręgowce i padlina); sygnatury izotopowe węgla C3 i C4 wskazują na elastyczność siedliskową (las–sawanna).',
    boundaryBehaviors: {
      careDescription: 'Opieka matczyna typowa dla naczelnych, ograniczony alloparenting w obrębie bliskiego klanu, brak danych o wsparciu dorosłych niesprawnych osobników.',
      violenceAndCooperation: 'Koalicje samców i rywalizacja o dostęp do płodnych samic; obrona przed drapieżnikami sawannowymi w oparciu o czujność grupową.',
      keyFossilEvidence: 'Szkielet AL 288-1 („Lucy”) oraz AL 333 („Pierwsza Rodzina” – min. 17 osobników zmarłych w jednym epizodzie katastroficznym).'
    },
    paleogeneticsAndHybridization: 'Brak danych aDNA (poza zasięgiem czasowym współczesnej paleogenetyki); filogenetyczna pozycja siostrzana lub ancestralna dla rodzaju Homo.',
    extinctionOrFateHypothesis: 'Prawdopodobna anageneza w kierunku bardziej zaawansowanych gracylnych australopiteków lub kladu wczesnego Homo w odpowiedzi na postępujące osuszenie Afryki.',
    confidenceLevel: 'level1',
    bioNeuroHighlights: {
      corticalEncephalization: 'Iloraz encefalizacji (EQ ~ 2,2) na poziomie zbliżonym do współczesnego szympansa; brak wyraźnej asymetrii skroniowo-ciemieniowej.',
      socialBrainRatio: 'Pojemność neokorteksu koreluje z grupami rzędu 25–35 osobników (zgodnie z równaniami allometrycznymi Robina Dunbara).',
      vocalAndSymbolicSubstrate: 'Brak rozwiniętego ośrodka Broki; budowa kości gnykowej i krtani zbliżona do afrykańskich małp człekokształtnych.'
    }
  },
  {
    id: 'homo-habilis',
    name: 'Homo habilis',
    commonName: 'Człowiek zręczny („Handy Man”, OH 7, KNM-ER 1813)',
    epochRange: 'Plejstocen wczesny (ok. 2,4 – 1,4 mln lat temu)',
    yearsAgoRange: [2400, 1400],
    brainCapacityCm3: { min: 510, max: 680, avg: 610 },
    estimatedGroupSize: { min: 35, max: 50 },
    geographicRange: 'Wschodnia i Południowa Afryka (Wąwóz Olduvai w Tanzanii, Koobi Fora w Kenii, Sterkfontein w RPA)',
    discoveryInfo: 'Odkryty w 1960 r. w Olduvai przez Jonathana Leakeya; opisany w 1964 r. przez Louisa Leakeya, Phillipa Tobiasa i Johna Napiera jako najstarszy przedstawiciel Homo.',
    cranialAndAnatomyFeatures: [
      'Wyraźny skok objętości mózgoczaszki względem australopiteków (+35%)',
      'Chwyt precyzyjny dłoni umożliwiający precyzyjne odłupywanie krzemienia i kwarcu',
      'Mniejsze zęby trzonowe i przedtrzonowe, zredukowany aparat żucia',
      'Proporcje ciała z wciąż relatywnie długimi kończynami górnymi'
    ],
    toolIndustry: 'Przemysł oldowajski (Mode 1): proste choppery, sferoidy i odłupki krzemienne do rozbijania kości i rozcinania ścięgien.',
    dietAndSurvivalStrategy: 'Oportunistyczny padlinożerca wysokobiałkowy (szpik kostny, resztki po drapieżnikach) i zbieracz podziemnych organów spichrzowych; tłuszcz i białko z kości jako paliwo dla ekspansji metabolicznej mózgu (teoria Aiello–Wheelera drogiego narządu).',
    boundaryBehaviors: {
      careDescription: 'Wczesne formy dzielenia się pokarmem wysokokalorycznym w bezpiecznych bazach domowych (home bases).',
      violenceAndCooperation: 'Kooperatywne odstraszanie wielkich drapieżników (kleptopasożytnictwo konfrontacyjne w małych grupach).',
      keyFossilEvidence: 'OH 7 (żuchwa i kości dłoni), KNM-ER 1813 (dobrze zachowana czaszka dorosłego osobnika o pojemności 510 cm³).'
    },
    paleogeneticsAndHybridization: 'Brak próbek kopalnego DNA; takson monofiletyczny lub zróżnicowany kompleks wczesnego Homo.',
    extinctionOrFateHypothesis: 'Koegzystencja i ostateczne wyparcie przez bardziej efektywnego biomechanicznie i termoregulacyjnie Homo erectus/ergaster.',
    confidenceLevel: 'level1',
    bioNeuroHighlights: {
      corticalEncephalization: 'EQ ~ 3,1; widoczne na odlewach czaszki wczesne uwypuklenie pola Broki (obszar 44/45 Brodmanna) w lewej półkuli.',
      socialBrainRatio: 'Szacowane kohorty społeczne: 40–50 osobników; początek zapotrzebowania na wokalne mechanizmy spajania grupy (proto-gossip).',
      vocalAndSymbolicSubstrate: 'Początki lateralizacji półkulowej związanej z koordynacją ręka–oko i produkcją narzędzi odłupkowych.'
    }
  },
  {
    id: 'homo-rudolfensis',
    name: 'Homo rudolfensis',
    commonName: 'Człowiek z nad Jeziora Rudolfa (KNM-ER 1470)',
    epochRange: 'Plejstocen wczesny (ok. 1,9 – 1,8 mln lat temu)',
    yearsAgoRange: [1900, 1800],
    brainCapacityCm3: { min: 700, max: 800, avg: 752 },
    estimatedGroupSize: { min: 40, max: 55 },
    geographicRange: 'Wschodnia Afryka (Koobi Fora nad Jeziorem Turkana / d. Rudolfa w Kenii, Malawi)',
    discoveryInfo: 'Odkrycie słynnej czaszki KNM-ER 1470 przez Bernarda Ngeneo z zespołu Richarda Leakeya w 1972 roku.',
    cranialAndAnatomyFeatures: [
      'Płaska, ortognatyczna twarzoczaszka o dużej szerokości w partii środkowej',
      'Pojemność mózgoczaszki sięgająca 750–775 cm³, wyraźnie większa niż u typowego Homo habilis',
      'Potężne uzębienie postkaninowe (duże zęby trzonowe) połączone z zaawansowaną mózgoczaszką',
      'Brak wydatnego wału nadoczodołowego charakterystycznego dla Homo erectus'
    ],
    toolIndustry: 'Oldowaj (Mode 1); możliwe równoległe stosowanie narzędzi z lokalnych surowców bazaltowych.',
    dietAndSurvivalStrategy: 'Mieszana strategia twardo-pokarmowa połączona z mięsożernością; anatomiczny kompromis między aparatem zgryzowym australopiteków a mózgiem Homo.',
    boundaryBehaviors: {
      careDescription: 'Grupy rodzinne o wysokiej zależności młodocianych; wzrastający koszt energetyczny laktacji i opieki.',
      violenceAndCooperation: 'Kooperacja w ramach żerowania na sawannie mozaikowej.',
      keyFossilEvidence: 'Czaszka KNM-ER 1470 oraz fragmenty żuchwy UR 501 z Malawi.'
    },
    paleogeneticsAndHybridization: 'Brak danych aDNA.',
    extinctionOrFateHypothesis: 'Boczna, wyspecjalizowana gałąź wczesnej radiacji adaptacyjnej rodzaju Homo, która nie pozostawiła potomków.',
    confidenceLevel: 'level2',
    bioNeuroHighlights: {
      corticalEncephalization: 'Duży bezwzględny rozmiar mózgu przy jednoczesnej archaicznej budowie trzewioczaszki.',
      socialBrainRatio: 'Potencjał sieciowy szacowany na ok. 50–55 osób.',
      vocalAndSymbolicSubstrate: 'Brak bezpośrednich endokranialnych dowodów zaawansowanej syntaktyki językowej.'
    }
  },
  {
    id: 'homo-erectus',
    name: 'Homo erectus / ergaster',
    commonName: 'Człowiek wyprostowany (Chłopiec znad Turkana, Pitkantrop, Dmanisi)',
    epochRange: 'Plejstocen (ok. 1,9 mln – 110 tys. lat temu)',
    yearsAgoRange: [1900, 110],
    brainCapacityCm3: { min: 750, max: 1250, avg: 950 },
    estimatedGroupSize: { min: 60, max: 90 },
    geographicRange: 'Afryka, Kaukaz (Dmanisi w Gruzji), Europa Południowa, Azja Wschodnia i Południowo-Wschodnia (Jawa, Chiny)',
    discoveryInfo: 'Eugène Dubois na Jawie (Trinil, 1891 – „Pithecanthropus erectus”); Chłopiec znad Turkana (KNM-WT 15000) odkryty przez Kamoyę Kimeu w 1984 r.; seria czaszek w Dmanisi (1991–2005).',
    cranialAndAnatomyFeatures: [
      'Nowoczesne proporcje szkieletu postkranialnego: długie nogi, wąska miednica przystosowana do długodystansowego biegu wytrzymałościowego (Bramble & Lieberman)',
      'Efektywna termoregulacja: utrata gęstego owłosienia, namnożenie ekrynowych gruczołów potowych, melanizacja skóry (gen MC1R)',
      'Niski, wydłużony profil czaszki z silnym wałem nadoczodołowym i zagięciem potylicznym',
      'Pojemność mózgu rosnąca w toku 1,5 mln lat z 750 do ponad 1100 cm³'
    ],
    toolIndustry: 'Przemysł aszelski (Mode 2): symetryczne pięściaki dwustronne (bifaces), rozłupce; pierwsze intencjonalne opanowanie ognia (Wonderwerk Cave ~1,0 mln lat, Koobi Fora).',
    dietAndSurvivalStrategy: 'Aktywne łowiectwo zbieżne (bieg wytrzymałościowy aż do udaru cieplnego ofiary) oraz obróbka termiczna pokarmu (hipoteza Richarda Wranghama: gotowanie obniża koszt trawienia i uwalnia energię dla mózgu).',
    boundaryBehaviors: {
      careDescription: 'Twardy dowód paleoantropologiczny z Dmanisi (czaszka D3444/D3900, ~1,77 mln lat): bezzębny starzec żył kilka lat po utracie wszystkich zębów, co wymagało przeżuwania, miękczenia lub gotowania pokarmu przez innych członków grupy.',
      violenceAndCooperation: 'Skoordynowane polowania na megafaunę (słonie, hipopotamy) wymagające ścisłej dyscypliny i komunikacji niewerbalnej.',
      keyFossilEvidence: 'KNM-WT 15000 (Turkana Boy), czaszki Dmanisi 1-5 (Gruzja), szczątki z Zhoukoudian (Człowiek Pekiński) i Ngandong (Jawa).'
    },
    paleogeneticsAndHybridization: 'Potencjalny archaiczny wkład genetyczny („super-archaiczny duch”) wykryty metodami bioinformatycznymi u Denisowian i wczesnych Homo sapiens.',
    extinctionOrFateHypothesis: 'W Afryce dał początek Homo heidelbergensis; populacje reliktowe w Azji przetrwały na Jawie do ok. 110–108 tys. lat temu (Ngandong).',
    confidenceLevel: 'level1',
    bioNeuroHighlights: {
      corticalEncephalization: 'EQ ~ 3,6–4,0; wyraźna asymetria półkulowa PET/endocast; rozwój przedczołowej kory ruchowej odpowiedzialnej za sekwencjonowanie czynności aszelskich.',
      socialBrainRatio: 'Predykcja Dunbara: stabilne grupy 80–90 osobników; ognisko jako centrum wydłużenia dnia i budowy więzi społecznych.',
      vocalAndSymbolicSubstrate: 'Zwężony kanał kręgowy piersiowy u Turkana Boy sugeruje ograniczoną kontrolę oddechową mowy artykulacyjnej, lecz obecność proto-języka muzyczno-gestycznego (Mithen).'
    }
  },
  {
    id: 'homo-heidelbergensis',
    name: 'Homo heidelbergensis',
    commonName: 'Człowiek heidelberski (Mauer, Sima de los Huesos, Boxgrove)',
    epochRange: 'Plejstocen środkowy (ok. 700 – 200 tys. lat temu)',
    yearsAgoRange: [700, 200],
    brainCapacityCm3: { min: 1100, max: 1400, avg: 1250 },
    estimatedGroupSize: { min: 80, max: 110 },
    geographicRange: 'Afryka, Europa, zachodnia Azja',
    discoveryInfo: 'Żuchwa z Mauer koło Heidelbergu (1907 r., Otto Schoetensack); spektakularne cmentarzysko Sima de los Huesos w Atapuerca w Hiszpanii (>28 osobników).',
    cranialAndAnatomyFeatures: [
      'Pojemność mózgoczaszki nakładająca się na zakres współczesnego człowieka (średnio ~1250 cm³)',
      'Potężna, masywna budowa kośćca, silne przyczepy mięśniowe, grube ściany kości długich',
      'Masywny, ciągły wał nadoczodołowy dzielący się na dwa łuki',
      'Szeroka jama nosowa i wydatna środkowa część twarzy (pre-adaptacja neandertalska w Europie)'
    ],
    toolIndustry: 'Późny aszel i wczesne techniki lewaluaskie (Mode 3); drewniane włócznie myśliwskie z Schöningen (~300 tys. lat) wyważone aerodynamicznie.',
    dietAndSurvivalStrategy: 'Systematyczne polowanie z zasadzki na wielkie ssaki (konie, jelenie, nosorożce stepowe); planowanie logistyczne rzeźni i podziału tusz.',
    boundaryBehaviors: {
      careDescription: 'Sima de los Huesos (osobnik „Elvis” z ciężką deformacją kręgosłupa i zmianami zwyrodnieniowymi miednicy oraz dziecko z kraniosynostozą Cranium 14), dowodzące wieloletniej opieki nad niepełnosprawnymi.',
      violenceAndCooperation: 'Czaszka Cranium 17 z Sima de los Huesos nosi dwa identyczne śmiertelne złamania kości czołowej zadane tępym narzędziem – najstarszy udokumentowany przypadek morderstwa/przemocy intencjonalnej.',
      keyFossilEvidence: 'Szczątki z Sima de los Huesos (Hiszpania), żuchwa z Mauer (Niemcy), kość piszczelowa z Boxgrove (Wielka Brytania), czaszka z Bodo (Etiopia) ze śladami odcinania mięśni twarzy.'
    },
    paleogeneticsAndHybridization: 'Izolacja DNA mitochondrialnego i jądrowego z Sima de los Huesos (Meyer et al., 2014, 2016 Nature) wykazała bliskie pokrewieństwo z wczesną linią neandertalską i zaskakujące zbieżności mtDNA z Denisowianami.',
    extinctionOrFateHypothesis: 'Wspólny pień ewolucyjny: populacje europejskie wyewoluowały w Neandertalczyków, azjatyckie w Denisowian, a afrykańskie (Homo rhodesiensis/heidelbergensis sensu lato) w Homo sapiens.',
    confidenceLevel: 'level1',
    bioNeuroHighlights: {
      corticalEncephalization: 'EQ ~ 4,5; niemal współczesna ekspansja płatów czołowych i ciemieniowych.',
      socialBrainRatio: 'Wielkość grupy zbliża się do 100–110 osób; konieczność zaawansowanego podziału ról i koordynacji taktycznej.',
      vocalAndSymbolicSubstrate: 'Analiza słuchu w Sima de los Huesos (Ignacio Martínez): kanały słuchowe dostrojone do pasma częstotliwości ludzkiej mowy (2–4 kHz); obecność genu FOXP2 w linii przodków neandertalskich.'
    }
  },
  {
    id: 'homo-naledi',
    name: 'Homo naledi',
    commonName: 'Człowiek z jaskini Rising Star („Gwiazda”)',
    epochRange: 'Plejstocen środkowy (ok. 335 – 236 tys. lat temu)',
    yearsAgoRange: [335, 236],
    brainCapacityCm3: { min: 460, max: 610, avg: 530 },
    estimatedGroupSize: { min: 25, max: 40 },
    geographicRange: 'Południowa Afryka (system jaskiniowy Rising Star, komora Dinaledi i Lesedi, Kolebka Ludzkości)',
    discoveryInfo: 'Odkrycie w 2013 r. przez speleologów Ricka Huntera i Stevena Tuckera; wykopaliska kierowane przez Lee Bergera (ponad 1500 szczątków co najmniej 15 osobników).',
    cranialAndAnatomyFeatures: [
      'Mozaika skrajnego anachronizmu: mała czaszka wielkości australopiteka (460–560 cm³) połączona z niemal nowoczesną stopą i dłonią',
      'Zakrzywione palce dłoni przystosowane do wspinaczki, ale nadgarstek i kciuk o cechach manipulacyjnych Homo',
      'Stożkowata klatka piersiowa i prymitywna miednica zbliżona do form plioceńskich',
      'Zaskakująco młode datowanie radiometryczne (US-ESR i OSL: ~300 tys. lat) – współistnienie z wczesnym Homo sapiens'
    ],
    toolIndustry: 'Brak bezpośrednich narzędzi kamiennych w komorach jaskiniowych; trwają poszukiwania w otaczających warstwach krajobrazowych.',
    dietAndSurvivalStrategy: 'Analiza mikrozużycia szkliwa i kamienia nazębnego wskazuje na pokarm bogaty w krzemionkę, nasiona, orzechy oraz pokarmy gruntowe zanieczyszczone pyłem.',
    boundaryBehaviors: {
      careDescription: 'Kohezja grupy w warunkach głębokiego systemu krasowego; obecność szczątków osobników w różnym wieku, od noworodków po starców.',
      violenceAndCooperation: 'Brak śladów żerowania drapieżników na kościach w komorze Dinaledi, co wspiera hipotezę intencjonalnego deponowania zwłok.',
      keyFossilEvidence: 'Szkielet Neo (LES1) z komory Lesedi; nagromadzenie setek kości w trudno dostępnej komorze Dinaledi.'
    },
    paleogeneticsAndHybridization: 'Próby ekstrakcji starożytnego DNA i kolagenu dotychczas bezowocne z uwagi na warunki termiczne i wilgotność komory.',
    extinctionOrFateHypothesis: 'Reliktowa linia wczesnego Homo, która przetrwała w izolacji południowoafrykańskiej, nim uległa wymarciu w konkurencji z technicznie zaawansowanymi populacjami Homo sapiens.',
    confidenceLevel: 'level3',
    bioNeuroHighlights: {
      corticalEncephalization: 'Bardzo mała objętość mózgu, ale badania endokranialne (Shawn Hurst, Ralph Holloway) sugerują strukturalną reorganizację płata czołowego zbliżoną do rodzaju Homo pomimo małej objętości.',
      socialBrainRatio: 'Szacowana grupa: 30–40 osobników.',
      vocalAndSymbolicSubstrate: 'Spór o celowe pochówki i ryty naskalne: zespół Lee Bergera (2023) postuluje intencjonalne pochówki i ogień w jaskini; recenzje (María Martinón-Torres et al.) uznają tezy za przedwczesne i niewystarczająco udokumentowane tafonomicznie.'
    }
  },
  {
    id: 'homo-floresiensis',
    name: 'Homo floresiensis',
    commonName: '„Hobbit” z wyspy Flores (LB1)',
    epochRange: 'Plejstocen późny (ok. 100 – 50 tys. lat temu)',
    yearsAgoRange: [100, 50],
    brainCapacityCm3: { min: 380, max: 430, avg: 417 },
    estimatedGroupSize: { min: 20, max: 35 },
    geographicRange: 'Indonezja (wyspa Flores, jaskinia Liang Bua, stanowisko Mata Menge)',
    discoveryInfo: 'Odkryty w 2003 r. przez zespół Mike\'a Morwooda i Radena Soejono w jaskini Liang Bua.',
    cranialAndAnatomyFeatures: [
      'Karłowatość wyspowa (reguła Fostera): wzrost dorosłej samicy LB1 wynosił ok. 106 cm, masa ciała ~25–30 kg',
      'Skrajnie zredukowana pojemność mózgu (~417 cm³), mniejsza niż u szympansa, przy zachowaniu zaawansowanej kory skroniowo-czołowej',
      'Brak bródki, wydatne wały nadoczodołowe, płaskostopie i względnie długie stopy (stąd potoczna nazwa „Hobbit”)',
      'Brak obrotu kości ramiennej typowego dla Homo sapiens'
    ],
    toolIndustry: 'Zaawansowany przemysł odłupkowy: retuszowane groty, skrobacze, ostrza z krzemienia i wulkanitu; narzędzia datowane na Flores sięgają nawet 800 tys. lat (Mata Menge).',
    dietAndSurvivalStrategy: 'Polowanie na karłowatego stegodona (Stegodon florensis insularis), gigantyczne szczury wyspowe i warany z Komodo; obróbka termiczna i rzeźnicka w jaskini.',
    boundaryBehaviors: {
      careDescription: 'Przetrwanie w izolowanym ekosystemie wyspiarskim wymagało ścisłej solidarności małej grupy i wspólnej obrony przed drapieżnikami (np. marabut olbrzymi, warany).',
      violenceAndCooperation: 'Kooperatywne osaczanie młodych stegodonów w trudnym terenie wulkanicznym.',
      keyFossilEvidence: 'Kompletny szkielet dorosłej kobiety LB1 oraz szczątki co najmniej 12 innych osobników z Liang Bua; żuchwy i zęby z Mata Menge (~700 tys. lat).'
    },
    paleogeneticsAndHybridization: 'Brak zachowanego DNA z uwagi na tropikalne warunki fosylizacji.',
    extinctionOrFateHypothesis: 'Wymarcie zbiegające się w czasie z pojawieniem się Homo sapiens w regionie biogeograficznym Wallacea (~50 tys. lat temu) oraz lokalnymi erupcjami wulkanicznymi.',
    confidenceLevel: 'level1',
    bioNeuroHighlights: {
      corticalEncephalization: 'Paradoks kognitywny: mózg wielkości szympansa realizujący zachowania narzędziowe i taktyczne przypisywane dotąd formom wielkomózgowym; Falk et al. (2005) wykazali ekspansję pola 10 Brodmanna (planowanie wyższego rzędu).',
      socialBrainRatio: 'Izolowane grupy klanowe 20–30 osobników.',
      vocalAndSymbolicSubstrate: 'Narzędzia planistyczne dowodzą wysokiej plastyczności neuronalnej i reorganizacji obwodów mózgowych bez konieczności olbrzymiej masy tkanki.'
    }
  },
  {
    id: 'homo-neanderthalensis',
    name: 'Homo neanderthalensis',
    commonName: 'Neandertalczyk (Neandertal, Shanidar, La Chapelle, Spy)',
    epochRange: 'Plejstocen (ok. 400 – 40 tys. lat temu)',
    yearsAgoRange: [400, 40],
    brainCapacityCm3: { min: 1300, max: 1750, avg: 1520 },
    estimatedGroupSize: { min: 15, max: 30 },
    geographicRange: 'Europa, Bliski Wschód, Azja Centralna aż po góry Ałtaj na Syberii',
    discoveryInfo: 'Feldhofer w Dolinie Neander w Niemczech (1856 r., Johann Fuhlrott); wcześniejsze nierozpoznane znaleziska z Engis w Belgii (1829) i Forbes\' Quarry na Gibraltarze (1848).',
    cranialAndAnatomyFeatures: [
      'Pojemność mózgu przewyższająca średnią współczesnego człowieka (1520 cm³ vs 1350 cm³), puszka wydłużona ku tyłowi (koczek potyliczny)',
      'Masywna, beczkowata klatka piersiowa, krępa sylwetka i krótkie dystalne odcinki kończyn (adaptacja do chłodnego klimatu peryglacjalnego – reguły Bergmanna i Allena)',
      'Masywny podwójny łuk brwiowy, prognatyzm środkowotwarzowy, wielkie komory nosowe podgrzewające suche lodowcowe powietrze',
      'Brak wydatnej guzowatości bródkowej (bródki) na żuchwie'
    ],
    toolIndustry: 'Przemysł mustierski (Mode 3): technologia lewaluaska, zgrzebła, noże tylcowe, żywica brzozowa jako klej do osadzania ostrzy; ozdoby z piór ptaków drapieżnych i muszli (Cueva de los Aviones).',
    dietAndSurvivalStrategy: 'Szczytowy drapieżnik troficzny (apex predator); izotopy azotu-15 wykazują dietę zdominowaną przez mięso wielkich ssaków kopytnych (mamuty, nosorożce włochate, renifery), z lokalnym uzupełnieniem roślinnym i owocami morza (Iberia).',
    boundaryBehaviors: {
      careDescription: 'Słynny Shanidar 1 (Irak): dorosły mężczyzna z amputowanym przedramieniem, uszkodzonym oczodołem (prawdopodobne oślepienie) i kalectwem nóg, który przeżył wiele lat dzięki opiece grupy. La Chapelle-aux-Saints (bezzębny „starzec”).',
      violenceAndCooperation: 'Koalicje łowieckie; liczne zagojone urazy pourazowe szkieletu analogiczne do kowbojów rodeo (bliski kontakt z wielką zwierzyną); sporadyczny kanibalizm przetrwaniowy lub rytualny (Goyet, El Sidrón).',
      keyFossilEvidence: 'Shanidar (Irak), Kebara (Izrael), La Ferrassie (Francja), Vindija (Chorwacja), Mezmaiskaya (Kaukaz).'
    },
    paleogeneticsAndHybridization: 'Zsekwencjonowanie jądrowego genomu przez zespół Svante Pääbo (2010 Science, Nagroda Nobla 2022): wszyscy współcześni ludzie pochodzenia pozaafrykańskiego posiadają 1–2% domieszki neandertalskiego DNA (wpływ na układ odpornościowy TLR, krzepliwość krwi, metabolizm lipidów, barwę skóry i włosów).',
    extinctionOrFateHypothesis: 'Asymilacja genetyczna połączona ze spadkiem demograficznym: małe, izolowane grupy o wysokim chowu wsobnym (inbreeding), niestabilność klimatyczna MIS 3 oraz przewaga sieciowa i demograficzna napływającego Homo sapiens.',
    confidenceLevel: 'level1',
    bioNeuroHighlights: {
      corticalEncephalization: 'Wyższa bezwzględna masa mózgu, lecz badania odlewów mózgu (Pearce, Stringer, Dunbar 2013) wskazują na większą alokację tkanki do kory wzrokowej i somatosensorycznej kosztem przedczołowej kory asocjacyjnej.',
      socialBrainRatio: 'Szacowane grupy: zaledwie 15–25 osób; brak rozległych ponadregionalnych sieci wymiany surowców.',
      vocalAndSymbolicSubstrate: 'Kość gnykowa z Kebara 2 identyczna morfologicznie ze współczesną; obecność ludzkich wariantów genu FOXP2; malowidła naskalne w jaskiniach Hiszpanii (La Pasiega, Maltravieso datowane na >64 tys. lat, wciąż przedmiot debaty).'
    }
  },
  {
    id: 'denisovans',
    name: 'Denisowianie (Homo denisova)',
    commonName: 'Ludzie z Jaskini Denisowej i Jaskini Baishiya',
    epochRange: 'Plejstocen (ok. 300 – 30 tys. lat temu)',
    yearsAgoRange: [300, 30],
    brainCapacityCm3: { min: 1350, max: 1650, avg: 1480 },
    estimatedGroupSize: { min: 20, max: 40 },
    geographicRange: 'Syberia (Ałtaj), Płaskowyż Tybetański (Baishiya Karst Cave), Azja Wschodnia i Południowo-Wschodnia aż po Melanezję',
    discoveryInfo: 'Odkrycie kości paliczka młodocianej samicy w Jaskini Denisowej na Ałtaju (2008 r., Michael Shunkov); sensacyjne wyodrębnienie nowego taksonu wyłącznie na podstawie sekwencjonowania DNA przez Svante Pääbo i Johannesa Krause (2010 Nature). Żuchwa z Xiahe/Baishiya zidentyfikowana paleoproteomicznie (Chen et al., 2019).',
    cranialAndAnatomyFeatures: [
      'Bardzo masywne zęby trzonowe i korzenie, znacznie większe niż u neandertalczyków i Homo sapiens',
      'Szeroka żuchwa i masywna budowa twarzoczaszki (rekonstrukcja metylacyjna Gokhman et al., 2019 Cell)',
      'Ekstremalna plastyczność adaptacyjna: od mroźnych stepów Syberii po hipoksyjne środowisko wysokogórskie Tybetu (>3200 m n.p.m.)',
      'Masywne kości czaszki i szeroka miednica'
    ],
    toolIndustry: 'Przemysł środkowego i górnego paleolitu Ałtaju: zaawansowana obróbka kości, igły z uszkiem, kamienne bransolety z wierconym otworem (bransoleta z zielonego chlorytitu).',
    dietAndSurvivalStrategy: 'Eksploatacja zwierzyny zimnolubnej (konie, jaki, owce dzikie, nosorożce); przystosowanie metaboliczne do diety wysokotłuszczowej.',
    boundaryBehaviors: {
      careDescription: 'Długotrwałe zamieszkiwanie tych samych stanowisk jaskiniowych przez dziesiątki pokoleń; wieloetapowa obróbka skór i ozdób.',
      violenceAndCooperation: 'Koegzystencja i krzyżowanie z neandertalczykami na Ałtaju: sensacyjne odkrycie osobnika „Denny” (Denisova 11) – bezpośredniej hybrydy pierwszego pokolenia (córki neandertalskiej matki i denisowskiego ojca; Slon et al., 2018 Nature).',
      keyFossilEvidence: 'Paliczek Denisova 3, trzonowce Denisova 4 i 8, żuchwa z Xiahe (Baishiya Karst Cave, Tybet).'
    },
    paleogeneticsAndHybridization: 'Dziedzictwo w genomie współczesnych ludzi: Melanezyjczycy i rdzenni Australijczycy posiadają 4–6% denisowskiego DNA; kluczowy wariant genu EPAS1 (regulujący produkcję hemoglobiny na dużych wysokościach) został przekazany przodkom Tybetańczyków w wyniku introgresji od Denisowian (Huerta-Sánchez et al., 2014 Nature); wariant genu TBX15 wpływający na metabolizm tkanki tłuszczowej u Inuitów.',
    extinctionOrFateHypothesis: 'Wchłonięcie przez napływające populacje Homo sapiens w Azji Wschodniej i Australazji przy zachowaniu unikalnych adaptacji fizjologicznych w genomie współczesnym.',
    confidenceLevel: 'level1',
    bioNeuroHighlights: {
      corticalEncephalization: 'Duża pojemność mózgoczaszki korelująca z neandertalczykami; wysoki stopień złożoności zachowań symbolicznych i narzędziowych.',
      socialBrainRatio: 'Szacowane kohorty 25–40 osób.',
      vocalAndSymbolicSubstrate: 'Równorzędny z neandertalczykiem i archaicznym Sapiens potencjał neurokognitywny; mistrzostwo mikrotechnologii kamiennej i kościanej.'
    }
  },
  {
    id: 'homo-sapiens',
    name: 'Homo sapiens',
    commonName: 'Człowiek rozumny (Jebel Irhoud, Omo-Kibish, Cro-Magnon)',
    epochRange: 'Plejstocen późny do dziś (od ok. 300 tys. lat temu)',
    yearsAgoRange: [300, 0],
    brainCapacityCm3: { min: 1200, max: 1600, avg: 1350 },
    estimatedGroupSize: { min: 100, max: 150 },
    geographicRange: 'Początkowo Afryka (ogólnoafrykańska sieć populacyjna), od ~70–50 tys. lat ekspansja globalna na wszystkie kontynenty i ekosystemy',
    discoveryInfo: 'Carl Linnaeus (1758); Cro-Magnon we Francji (Louis Lartet, 1868); Jebel Irhoud w Maroku (~315 tys. lat, Jean-Jacques Hublin, 2017 Nature).',
    cranialAndAnatomyFeatures: [
      'Kulista (globularna) puszka mózgowa z uwypukleniem płatów ciemieniowych i móżdżku (Gunz et al., 2018)',
      'Wyraźna bródka na żuchwie (mental protuberance) stabilizująca naprężenia żucia przy zredukowanej masie kości',
      'Smukły szkielet postkranialny, zredukowane wały nadoczodołowe, płaska twarz schowana pod puszką mózgową',
      'Morfologiczne syndromy samoudomowienia (self-domestication hypothesis): neotenia twarzy, redukcja komórek grzebienia nerwowego, obniżona reaktywna agresja'
    ],
    toolIndustry: 'Górny paleolit i przemysły mikrolityczne (Mode 4 i 5): miotacze oszczepów (atlatl), łuk i strzały, harpuny, kumulatywna kultura techniczna; sztuka figuratywna i naskalna (Sulawesi ~67 tys. lat, Chauvet ~36 tys. lat, Lascaux ~18 tys. lat).',
    dietAndSurvivalStrategy: 'Niezrównany oportunizm ekologiczny: od polowania na megafaunę po dietę szerokiego spektrum (broad-spectrum revolution): rybołówstwo, ptactwo, przetwórstwo nasion dzikich zbóż za pomocą żaren.',
    boundaryBehaviors: {
      careDescription: 'Zorganizowane instytucje alloparentingu (pomoc babć, ciotek, rozproszona opieka), opieka medyczna i chirurgiczna w paleolicie (np. amputacja podudzia u młodocianego z Liang Tebo na Borneo sprzed 31 tys. lat; Maloney et al., 2022 Nature).',
      violenceAndCooperation: 'Koalicyjna przemoc proaktywna (wojny plemienne, rajdy) współistniejąca z niezwykle wysoką prospołecznością wewnątrzgrupową (The Goodness Paradox – Wrangham).',
      keyFossilEvidence: 'Jebel Irhoud (Maroko), Omo-Kibish (Etiopia), Skhul/Qafzeh (Izrael), Cro-Magnon (Francja), Sungir (bogate pochówki ze sznurami kłów i paciorków).'
    },
    paleogeneticsAndHybridization: 'Podstawa współczesnej zmienności genetycznej; nosiciel introgresji neandertalskiej (1–2%) i denisowskiej (do 4–6% w Melanezji); unikalne mutacje regulacyjne mózgu (np. warianty TKTL1, NOVA1).',
    extinctionOrFateHypothesis: 'Gatunek panujący globalnie; w holocenie przejście do rolnictwa, urbanizacji, cywilizacji przemysłowej i ery cyfrowej.',
    confidenceLevel: 'level1',
    bioNeuroHighlights: {
      corticalEncephalization: 'Globularyzacja mózgu: reorganizacja obwodów ciemieniowo-móżdżkowych odpowiedzialnych za orientację przestrzenną, wyobraźnię symboliczną i integrację wielozmysłową.',
      socialBrainRatio: 'Liczba Dunbara: neuroanatomiczny limit stabilnych relacji społecznych wynoszący średnio ok. 148–150 osób.',
      vocalAndSymbolicSubstrate: 'W pełni uformowany trakt głosowy o proporcjach 1:1 (część ustna do gardłowej), niska krtań, koordynacja korowo-opuszkowa umożliwiająca złożoną mowę składniową i kumulatywną transmisję wiedzy kulturowej (efekt koła zamachowego – Tomasello).'
    }
  }
];
