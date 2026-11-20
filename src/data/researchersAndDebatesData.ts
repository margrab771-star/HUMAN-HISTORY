import { ScientificResearcher, AcademicDebate, PseudoscienceChecklistItem } from '../types';

export const RESEARCHERS_DATA: ScientificResearcher[] = [
  // Paleoanthropology & Paleogenetics
  {
    id: 'svante-paabo',
    name: 'Svante Pääbo',
    years: 'ur. 1955',
    discipline: 'Paleoantropologia i Paleogenetyka',
    affiliation: 'Max Planck Institute for Evolutionary Anthropology w Lipsku',
    coreThesis: 'Opracowanie metod ekstrakcji i sekwencjonowania kopalnego DNA (aDNA) umożliwiło rekonstrukcję genomu neandertalczyka i odkrycie denisowian, dowodząc powszechnego krzyżowania się (introgresji) archaicznych hominidów z przodkami współczesnych ludzi.',
    magnumOpus: '„Neanderthal Man: In Search of Lost Genomes” (2014); Nagroda Nobla w dziedzinie fizjologii lub medycyny (2022).',
    keyContributions: ['Sekwencjonowanie genomu neandertalskiego (2010)', 'Odkrycie Denisowian na podstawie DNA z paliczka (2010)', 'Identyfikacja przepływu genów archaicznych do genomu współczesnego człowieka (1–2% u nie-Afrykanów)'],
    primaryQuote: '„Nie jesteśmy odrębnym, czystym gatunkiem, lecz mozaiką prastarych populacji, które wielokrotnie wymieniały się genami na przestrzeni setek tysięcy lat”.'
  },
  {
    id: 'penny-spikins',
    name: 'Penny Spikins',
    years: 'ur. 1969',
    discipline: 'Paleoantropologia i Paleogenetyka',
    affiliation: 'University of York',
    coreThesis: 'Archeologia współczucia: dowodzi w oparciu o paleopatologię szkieletów kopalnych hominidów (od wczesnego Homo erectus po neandertalczyków), że głęboka troska o rannych, chorych i niepełnosprawnych była kluczową adaptacją przetrwania, a nie późnym wytworem cywilizacji.',
    magnumOpus: '„How Compassion Made Us Human: The Evolutionary Origins of Tenderness, Trust and Morality” (2015).',
    keyContributions: ['Materialne dowody paleomedycyny i opieki u Homo erectus i neandertalczyków', 'Ewolucyjna rola autyzmu i neuroróżnorodności w społecznościach paleolitycznych', 'Przełamanie darwinizmu społecznego w archeologii'],
    primaryQuote: '„To nie walka i eliminacja słabych uczyniły nas ludźmi, lecz bezprecedensowa zdolność do troski o tych, którzy bez naszej pomocy nie zdołaliby przetrwać”.'
  },
  {
    id: 'chris-stringer',
    name: 'Chris Stringer',
    years: 'ur. 1947',
    discipline: 'Paleoantropologia i Paleogenetyka',
    affiliation: 'Natural History Museum w Londynie',
    coreThesis: 'Współautor i czołowy obrońca hipotezy „Pożegnania z Afryką” (Out of Africa) oraz zrewidowanego modelu ogólnoafrykańskiego wieloośrodkowego pochodzenia Homo sapiens (African multiregionalism).',
    magnumOpus: '„The Origin of Our Species” (2011); „Lone Survivors: How We Came to Be the Only Humans on Earth” (2012).',
    keyContributions: ['Rekonstrukcja fali migracji z Afryki', 'Allometria czaszek neandertalskich i wczesnych sapiens', 'Analiza wielkości oczodołów i kory wzrokowej neandertalczyków'],
    primaryQuote: '„Homo sapiens nie powstał w jednym ogrodzie Eden w Afryce Wschodniej, lecz wyłonił się z rozproszonej, połączonej sieci populacji na całym kontynencie afrykańskim”.'
  },
  {
    id: 'jeremy-desilva',
    name: 'Jeremy DeSilva',
    years: 'ur. 1976',
    discipline: 'Paleoantropologia i Paleogenetyka',
    affiliation: 'Dartmouth College',
    coreThesis: 'Biomechanika dwunożności u wczesnych hominidów oraz kontrowersyjna hipoteza kurczenia się objętości ludzkiego mózgu w holocenie (ok. 3000 lat temu) w wyniku outsourcingu poznawczego i zbiorowej inteligencji w gęstych społecznościach rolniczo-miejskich.',
    magnumOpus: '„First Steps: How Upright Walking Made Us Human” (2021); DeSilva et al. (2021, Frontiers in Ecology and Evolution).',
    keyContributions: ['Ewolucja stopy i stawu skokowego od australopiteków po Homo', 'Badanie endokranialnych zmian pojemności czaszek w holocenie', 'Analiza kosztów energetycznych dwunożnego chodu'],
    primaryQuote: '„Dwunożność uwolniła ręce, lecz zamieniła poród w anatomiczny dramat, zmuszając nas do zorganizowania zbiorowej opieki położniczej”.'
  },
  {
    id: 'lee-berger',
    name: 'Lee Berger',
    years: 'ur. 1965',
    discipline: 'Paleoantropologia i Paleogenetyka',
    affiliation: 'University of the Witwatersrand / National Geographic Society',
    coreThesis: 'Odkrywca Australopithecus sediba (2008) oraz Homo naledi (2013) w komorach Dinaledi i Lesedi. Postuluje rewolucyjną tezę, że formy o małych mózgach (~500 cm³) mogły przejawiać zachowania symboliczne, intencjonalne pochówki i posługiwać się ogniem głęboko pod ziemią.',
    magnumOpus: '„Almost Human: The Astonishing Tale of Homo naledi” (2017); publikacje eLife (2023).',
    keyContributions: ['Odkrycie ponad 1500 szczątków Homo naledi w Rising Star', 'Zastosowanie otwartej nauki (Open Access) i druku 3D w paleoantropologii', 'Rzucenie wyzwania dogmatowi wielkiego mózgu jako warunku kultury funeralnej'],
    primaryQuote: '„Zapis kopalny nieustannie udowadnia, że nasza ewolucyjna przeszłość była wielokrotnie bogatsza i bardziej zaskakująca, niż mieści się to w podręcznikowych schematach”.'
  },

  // Biology & Evolutionary Neurobiology
  {
    id: 'robert-sapolsky',
    name: 'Robert Sapolsky',
    years: 'ur. 1957',
    discipline: 'Biologia i Neurobiologia Ewolucyjna',
    affiliation: 'Stanford University',
    coreThesis: 'Wielowarstwowa integracja neurobiologii, endokrynologii i prymatologii: wyjaśnia mechanizmy zachowań ludzkich od skali milisekund (ciało migdałowate) przez godziny (kortyzol, testosteron) i lata (neuroplastyczność) po stulecia ewolucji. Wskazuje na destrukcyjny wpływ przewlekłego stresu statusowego na zdrowie ssaków naczelnych.',
    magnumOpus: '„Behave: The Biology of Humans at Our Best and Worst” (2017); „Why Zebras Don\'t Get Ulcers” (1994); „Determined” (2023).',
    keyContributions: ['30 lat badań nad fizjologią stresu u pawianów w Kenii', 'Neuronalne mechanizmy agresji reaktywnej i uległości', 'Krytyka wolnej woli w kontekście determinizmu neurobiologicznego'],
    primaryQuote: '„Nie jesteśmy albo aniołami, albo bestiami. Nasz mózg to skomplikowana maszyneria biologiczna, w której te same obwody mogą wyzwolić heroiczny altruizm lub bezwzględne okrucieństwo w zależności od kontekstu”.'
  },
  {
    id: 'antonio-damasio',
    name: 'Antonio Damasio',
    years: 'ur. 1944',
    discipline: 'Biologia i Neurobiologia Ewolucyjna',
    affiliation: 'University of Southern California (Brain and Creativity Institute)',
    coreThesis: 'Teoria markerów somatycznych (Somatic Marker Hypothesis): emocje i sygnały z ciała (interocepcja) nie są przeszkodą dla racjonalnego rozumu, lecz jego niezbędnym biologicznym warunkiem. Uszkodzenia brzuszno-przyśrodkowej kory przedczołowej (vmPFC) uniemożliwiają podejmowanie trafnych decyzji moralnych i społecznych.',
    magnumOpus: '„Descartes\' Error: Emotion, Reason, and the Human Brain” (1994); „The Feeling of What Happens” (1999); „Feeling & Knowing” (2021).',
    keyContributions: ['Zbadanie neuronalnych podstaw świadomości afektywnej', 'Rola wyspy przedniej w integracji trzewno-poznawczej', 'Obalenie kartezjańskiego dualizmu ciało–umysł w neurobiologii'],
    primaryQuote: '„Nie jesteśmy maszynami myślącymi, które czują; jesteśmy maszynami czującymi, które myślą”.'
  },
  {
    id: 'john-allman',
    name: 'John Allman',
    years: 'ur. 1943',
    discipline: 'Biologia i Neurobiologia Ewolucyjna',
    affiliation: 'California Institute of Technology (Caltech)',
    coreThesis: 'Odkrycie i zbadanie roli neuronów von Economo (VENs) w przedniej korze wyspy i przednim zakręcie obręczy jako substratu błyskawicznej intuicji społecznej, empatii i samoświadomości u ludzi i wielkich małp.',
    magnumOpus: '„Evolving Brains” (1999); Allman et al. (2010, Annals of the New York Academy of Sciences).',
    keyContributions: ['Lokalizacja i allometria neuronów wrzecionowatych (VENs)', 'Korelacja gęstości VENs ze złożonością sieci społecznych u naczelnych i waleni', 'Badanie patologii VENs w otępieniu czołowo-skroniowym (FTD) i autyzmie'],
    primaryQuote: '„Neurony von Economo to ewolucyjny kabel światłowodowy umożliwiający błyskawiczne zestrojenie stanu trzewnego z dynamicznym kontekstem relacji w stadzie”.'
  },
  {
    id: 'michael-meaney',
    name: 'Michael Meaney',
    years: 'ur. 1951',
    discipline: 'Biologia i Neurobiologia Ewolucyjna',
    affiliation: 'McGill University / Singapore Institute for Clinical Sciences',
    coreThesis: 'Epigenetyka matczynej troski: wykazał na modelach ssaczych, że intensywność opieki matczynej (wylizywanie młodych) trwale zmienia metylację DNA promotora genu receptora glukokortykoidowego (NR3C1) w hipokampie, programując odporność na stres na całe dorosłe życie bez zmian w sekwencji nukleotydów.',
    magnumOpus: 'Weaver, Meaney et al. (2004, Nature Neuroscience: „Epigenetic programming by maternal care”).',
    keyContributions: ['Pierwszy empiryczny dowód epigenetycznego dziedziczenia wzorców zachowania u ssaków', 'Mechanizm molekularny przełożenia środowiska społecznego na ekspresję genów', 'Podłoże podatności na depresję i zaburzenia lękowe'],
    primaryQuote: '„Doświadczenie z wczesnego dzieciństwa nie znika – ono zapisuje się fizycznie na cząsteczkach DNA poprzez znaczniki chemiczne decydujące o tym, jak mózg zareaguje na stres za 30 lat”.'
  },
  {
    id: 'naomi-eisenberger',
    name: 'Naomi Eisenberger',
    years: 'ur. 1979',
    discipline: 'Biologia i Neurobiologia Ewolucyjna',
    affiliation: 'University of California, Los Angeles (UCLA)',
    coreThesis: 'Neuronalne nakładanie się bólu fizycznego i społecznego: badania z użyciem fMRI wykazały, że odrzucenie społeczne (ostolicyzm w grze Cyberball) aktywuje dokładnie te same struktury mózgowe (grzbietowy przedni zakręt obręczy — dACC oraz przednią wyspę), które odpowiadają za afektywne cierpienie przy urazie fizycznym.',
    magnumOpus: 'Eisenberger, Lieberman, Williams (2003, Science: „Does Rejection Hurt? An fMRI Study of Social Exclusion”).',
    keyContributions: ['Ewolucyjne wyjaśnienie dlaczego wykluczenie boli jak rana cięta', 'Wykazanie, że paracetamol może łagodzić psychiczny ból odrzucenia społecznego', 'Biologia samotności jako fizjologicznego stanu zapalnego'],
    primaryQuote: '„Dla naszego mózgu bycie wykluczonym z plemienia nie jest przykrą myślą – to krzyk układu nerwowego o śmiertelnym niebezpieczeństwie tożsamy z fizycznym złamaniem kości”.'
  },
  {
    id: 'anna-lembke',
    name: 'Anna Lembke',
    years: 'ur. 1967',
    discipline: 'Biologia i Neurobiologia Ewolucyjna',
    affiliation: 'Stanford University School of Medicine',
    coreThesis: 'Neurobiologia układu dopaminowego w epoce nadmiaru bodźców nadnormalnych: współczesny kapitalizm przekształcił świat w fabrykę łatwych skoków dopaminy (social media, gry, pornografia, cukier), co wywołuje homeostatyczną reakcję obronną mózgu w postaci downregulacji receptorów D2 i ciągłego deficytu dopaminowego (anhedonia, depresja).',
    magnumOpus: '„Dopamine Nation: Finding Balance in the Age of Indulgence” (2021).',
    keyContributions: ['Model szalki wagi: Przyjemność i Ból w synapsie dopaminowej', 'Kliniczne protokoły postu dopaminowego i odbudowy wrażliwości receptorowej', 'Analiza smartfona jako współczesnej igły podskórnej dostarczającej ciągłą stymulację'],
    primaryQuote: '„Żyjemy w świecie, w którym głód i niedobór zastąpiliśmy wszechobecnym, łatwym dopaminowym zaspokojeniem – a nasz pradawny mózg reaguje na to chronicznym nieszczęściem”.'
  },
  {
    id: 'gordon-gallup',
    name: 'Gordon Gallup',
    years: 'ur. 1941',
    discipline: 'Biologia i Neurobiologia Ewolucyjna',
    affiliation: 'State University of New York w Albany',
    coreThesis: 'Wynalazca testu lustra dla samoświadomości u naczelnych (1970) oraz autor hipotezy biomechanicznej korony żołędzi prącia jako adaptacji do wypierania nasienia rywali w warunkach umiarkowanej konkurencji plemników.',
    magnumOpus: 'Gallup et al. (2003, Evolution and Human Behavior: „The human penis as a semen displacement device”).',
    keyContributions: ['Mirror Self-Recognition Test u szympansów i ludzi', 'Biomechanika narządów kopulacyjnych a dobór płciowy u człowieka', 'Ewolucyjna funkcja porannych mdłości ciążowych jako ochrony zarodka przed toksynami'],
    primaryQuote: '„Nawet najbardziej intymne detale ludzkiej anatomii noszą niezatarty podpis walki i kompromisów ewolucyjnych naszych przodków”.'
  },
  {
    id: 'harry-moore',
    name: 'Harry Moore',
    years: 'ur. 1950',
    discipline: 'Biologia i Neurobiologia Ewolucyjna',
    affiliation: 'University of Sheffield (Centre for Stem Cell Biology)',
    coreThesis: 'Rygorystyczna empiryczna weryfikacja laboratoryjna hipotezy „plemników kamikadze”: udowodnił ponad wszelką wątpliwość, że nasienie ludzkie nie zawiera kasty wyspecjalizowanych „wojowników” atakujących obce komórki, a anomalie budowy to błędy spermatogenezy, obalając sensacyjne twierdzenia Robina Bakera.',
    magnumOpus: 'Moore, Martin, Birkhead (1999, Proceedings of the Royal Society B: „No evidence for killer sperm in humans”).',
    keyContributions: ['Rygorystyczne eksperymenty laboratoryjne na żywym ludzkim nasieniu w warunkach in vitro', 'Standardy metodologiczne w badaniach andrologicznych konkurencji plemników', 'Wzorzec akademickiej falsyfikacji hipotez adaptacjonistycznych'],
    primaryQuote: '„Spektakularna hipoteza wymaga spektakularnych dowodów. W mikroskopie plemniki nie prowadzą wojen – po prostu podlegają rygorystycznym prawom mechaniki płynów i biologii komórkowej”.'
  },

  // Evolutionary Psychology & Social Anthropology
  {
    id: 'sarah-blaffer-hrdy',
    name: 'Sarah Blaffer Hrdy',
    years: 'ur. 1946',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'University of California, Davis',
    coreThesis: 'Hipoteza kooperatywnego rozrodu i alloparentingu: udowadnia, że unikalna ludzka empatia, czytanie intencji i wielki mózg wyewoluowały dlatego, że matki Homo polegały na zorganizowanej sieci opiekunek (babcie, siostry, niespokrewnieni członkowie klanu). Dziecko musiało nauczyć się nawiązywać kontakt emocjonalny z wieloma opiekunami, by zyskać pożywienie.',
    magnumOpus: '„Mothers and Others: The Evolutionary Origins of Mutual Understanding” (2009); „Mother Nature” (1999).',
    keyContributions: ['Obalenie mitu pasywnej samicy w teorii ewolucji', 'Alloparenting jako warunek wstępny ekspansji encefalizacji', 'Ewolucyjne podłoże elastyczności strategii macierzyńskich'],
    primaryQuote: '„Dziecko szympansa spędza pierwsze lata przyklejone do ciała matki; dziecko ludzkie od narodzin patrzy w oczy wielu opiekunom, ucząc się uśmiechem i spojrzeniem zabiegać o ich miłość i ochronę”.'
  },
  {
    id: 'stephen-beckerman',
    name: 'Stephen Beckerman',
    years: 'ur. 1944',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'Pennsylvania State University',
    coreThesis: 'Koncepcja rozproszonego ojcostwa (Partible Paternity): badania terenowe wśród południowoamerykańskich ludów Barí i Aché wykazały, że przekonanie o możliwości posiadania przez dziecko kilku biologicznych ojców zwiększało przeżywalność niemowląt dzięki wielostronnej opiece mężczyzn.',
    magnumOpus: 'Beckerman & Valentine (2002, „Cultures of Multiple Fathers: The Theory and Practice of Partible Paternity in Lowland South America”).',
    keyContributions: ['Dokumentacja etnograficzna rozproszonego ojcostwa w 18 społecznościach Amazonii', 'Statystyczne dowody na wyższą przeżywalność dzieci z dwoma rozpoznanymi ojcami u Barí (80% vs 64%)', 'Krytyka uniwersalizmu zachodniego modelu monogamii nuklearnej'],
    primaryQuote: '„W lasach Wenezueli ojcostwo nie było zero-jedynkowym biletem genetycznym, lecz elastyczną koalicją mężczyzn gwarantującą, że dziecko nie umrze z głodu, gdy główny łowca zginie na polowaniu”.'
  },
  {
    id: 'warren-shapiro',
    name: 'Warren Shapiro',
    years: 'ur. 1937',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'Rutgers University',
    coreThesis: 'Akademicki krytyk hipotezy rozproszonego ojcostwa: argumentuje, że tezy Beckermana i Valentine są nadinterpretacją kulturowych rytuałów i nie odzwierciedlają powszechnego biologicznego wzorca ewolucji człowieka, w którym dominowały trwałe związki i wysoka troska o pewność ojcostwa.',
    magnumOpus: 'Shapiro (2009, Journal of the Anthropological Institute: „Partible paternity and anthropological theory”).',
    keyContributions: ['Rygorystyczna analiza antropologiczna systemów pokrewieństwa', 'Ostrzeżenie przed pochopnym rzutowaniem lokalnych wierzeń Amazonii na cały plejstocen', 'Obrona teorii uniwersalnych struktur pokrewieństwa Lévi-Straussa'],
    primaryQuote: '„Poezja wierzeń plemiennych o kumulacji nasienia w łonie kobiety nie oznacza, że rdzenni mieszkańcy nie rozumieli rzeczywistego mechanizmu zapłodnienia i nie strzegli wierności swoich partnerek”.'
  },
  {
    id: 'richard-wrangham',
    name: 'Richard Wrangham',
    years: 'ur. 1948',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'Harvard University',
    coreThesis: 'Hipoteza gotowania (Catching Fire) jako motoru encefalizacji oraz hipoteza samoudomowienia człowieka (The Goodness Paradox): selekcja przeciwko agresji reaktywnej (egzekucje desporycznych samców) wykształciła unikalny altruizm wewnątrzgrupowy przy jednoczesnym rozwinięciu chłodnej, koalicyjnej przemocy proaktywnej.',
    magnumOpus: '„Catching Fire: How Cooking Made Us Human” (2009); „The Goodness Paradox: The Strange Relationship Between Virtue and Violence in Human Evolution” (2019).',
    keyContributions: ['Termiczna obróbka pokarmu jako klucz do zmniejszenia jelit i powiększenia mózgu', 'Rozróżnienie agresji reaktywnej od agresji proaktywnej', 'Model koalicyjnego zabijania tyranów jako mechanizmu samoudomowienia'],
    primaryQuote: '„Jesteśmy najbardziej pokojowym gatunkiem ssaka, jeśli idzie o codzienne unikanie bójki w windzie, i najbardziej bezwzględnym potworem, jeśli chodzi o zaplanowane zniszczenie wrogiego obozu o świcie”.'
  },
  {
    id: 'brian-hare',
    name: 'Brian Hare',
    years: 'ur. 1976',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'Duke University',
    coreThesis: 'Teoria samoudomowienia człowieka (Self-Domestication Hypothesis): porównanie szympansów i bonobo oraz psów i wilków wykazało, że udomowienie prowadzi do zespołu cech morfologicznych (gracilność, neotenia) i kognitywnych (wysoka inteligencja społeczna, kooperacja). Człowiek przeszedł ten proces poprzez dobór przeciwko agresji.',
    magnumOpus: '„Survival of the Friendliest: Understanding Our Origins and Rediscovering Our Common Humanity” (2020, z Vanessą Woods).',
    keyContributions: ['Badania porównawcze bonobo i szympansów', 'Odkrycie zdolności psów do odczytywania ludzkich gestów wskazywania', 'Zespół cech udomowienia (Domestication Syndrome) u Homo sapiens'],
    primaryQuote: '„Przetrwali nie najsilniejsi, lecz najbardziej przyjaźni. Naszą ewolucyjną supermocą stała się zdolność do bezproblemowej kooperacji z kimś, kogo widzimy po raz pierwszy w życiu”.'
  },
  {
    id: 'robin-dunbar',
    name: 'Robin Dunbar',
    years: 'ur. 1947',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'University of Oxford',
    coreThesis: 'Hipoteza Mózgu Społecznego (Social Brain Hypothesis) i Liczba Dunbara (~150): kora nowa mózgowia naczelnych ewoluowała pod presją złożoności relacji społecznych. Wykazał istnienie hierarchicznych warstw sieci społecznej (5 / 15 / 50 / 150) oraz rolę plotki i języka jako „iskania społecznego”.',
    magnumOpus: '„Grooming, Gossip, and the Evolution of Language” (1996); „How Many Friends Does One Person Need?” (2010); „Friends” (2021).',
    keyContributions: ['Równanie allometryczne wiążące objętość neokorteksu z wielkością stada', 'Odkrycie liczby 150 w tradycyjnych wioskach, armiach i współczesnych sieciach kontaktów', 'Język jako substytut czasochłonnego czyszczenia futra'],
    primaryQuote: '„Możesz mieć dziesięć tysięcy obserwujących na Twitterze, lecz twój archaiczny neokorteks jest nadal zaprogramowany na ogarnięcie zaledwie stu pięćdziesięciu żywych dusz”.'
  },
  {
    id: 'christopher-boehm',
    name: 'Christopher Boehm',
    years: '1931–2021',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'University of Southern California (Jane Goodall Research Center)',
    coreThesis: 'Model odwróconej hierarchii dominacji (Reverse Dominance Hierarchy): egalitaryzm plejstocenu nie był „stanem pierwotnej niewinności”, lecz aktywnym przymierzem zdominowanych, którzy koalicyjnie kontrolowali, wyśmiewali i w razie potrzeby zabijali agresywnych samców alfa chcących zmonopolizować zasoby.',
    magnumOpus: '„Hierarchy in the Forest: The Evolution of Egalitarian Behavior” (1999); „Moral Origins: The Evolution of Virtue, Altruism, and Shame” (2012).',
    keyContributions: ['Etnograficzna baza mechanizmów egalitaryzmu u 48 kultur łowiecko-zbierackich', 'Ewolucyjne korzenie ludzkiego sumienia i zmysłu moralnego', 'Plotka i wyśmiewanie jako narzędzia politycznej samokontroli klanu'],
    primaryQuote: '„Łowcy-zbieracze byli egalitarni nie dlatego, że nie mieli ambicji dominacji, lecz dlatego, że byli zbyt sprytni, by pozwolić jakiemukolwiek jednemu człowiekowi wejść im na głowę”.'
  },
  {
    id: 'joseph-henrich',
    name: 'Joseph Henrich',
    years: 'ur. 1968',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'Harvard University (Department of Human Evolutionary Biology)',
    coreThesis: 'Teoria koewolucji kulturowo-genetycznej oraz demaskacja psychologii WEIRD: kultura i narzędzia modyfikowały anatomię i geny człowieka przez setki tysięcy lat. Zachodnia psychologia jest globalną anomalią powstałą w wyniku średniowiecznego rozbicia klanów przez Kościół katolicki.',
    magnumOpus: '„The Secret of Our Success: How Culture Is Driving Human Evolution” (2015); „The WEIRDest People in the World” (2020).',
    keyContributions: ['Zdefiniowanie profilu WEIRD (Western, Educated, Industrialized, Rich, Democratic)', 'Rola kumulatywnej kultury jako zewnętrznego narządu przetrwania gatunku', 'Międzykulturowe badania w grach ekonomicznych (Ultimatum Game na 15 małych społecznościach)'],
    primaryQuote: '„To nie indywidualny geniusz pozwolił nam opanować planetę, lecz nasza zbiorowa inteligencja – zdolność do akumulacji i przekazywania wiedzy, której żaden pojedynczy człowiek nie byłby w stanie wymyślić od zera”.'
  },
  {
    id: 'michael-tomasello',
    name: 'Michael Tomasello',
    years: 'ur. 1950',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'Duke University / Max Planck Institute for Evolutionary Anthropology',
    coreThesis: 'Hipoteza współdzielonej intencjonalności (Shared Intentionality): tym, co fundamentalnie odróżnia człowieka od szympansa, jest unikalna zdolność do tworzenia wspólnych celów („my robimy to razem”) i intencjonalności drugiego rzędu, co dało początek językowi składniowemu, instytucjom i normom moralnym.',
    magnumOpus: '„The Cultural Origins of Human Cognition” (1999); „A Natural History of Human Thinking” (2014); „A Natural History of Human Morality” (2016).',
    keyContributions: ['Eksperymenty porównawcze małych dzieci i młodych szympansów', 'Efekt koła zamachowego (Ratchet Effect) w transmisji kulturowej', 'Ewolucyjny model przejścia od kooperacji dwuosobowej do moralności instytucjonalnej'],
    primaryQuote: '„Dwa szympansy mogą wspólnie ciągnąć skrzynię z bananami, lecz nie spojrzą sobie w oczy z poczuciem: oto zawarliśmy ugodę i dzielimy się owocem po równo”.'
  },
  {
    id: 'david-buss',
    name: 'David Buss',
    years: 'ur. 1953',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'University of Texas w Austin',
    coreThesis: 'Teoria strategii doboru płciowego u ludzi (Sexual Strategies Theory): empiryczne wykazanie uniwersalnych międzykulturowych różnic i zbieżności w preferencjach doboru partnera, architekturze zazdrości (seksualna vs emocjonalna) oraz konfliktach między płciami.',
    magnumOpus: '„The Evolution of Desire: Strategies of Human Mating” (1994); „Evolutionary Psychology: The New Science of the Mind” (6. wyd. 2019); „The Murderer Next Door” (2005).',
    keyContributions: ['Badanie doboru partnerskiego na próbie 10 047 osób w 37 kulturach (1989)', 'Teoria zarządzania błędem w relacjach damsko-męskich (z Martie Haselton)', 'Analiza ewolucyjnych korzeni zabójstw i przemocy w związkach'],
    primaryQuote: '„Pożądanie, zazdrość i miłość nie są wymysłem hollywoodzkich scenarzystów ani poetów renesansowych – to prastare mechanizmy adaptacyjne ukształtowane przez miliony lat doboru płciowego”.'
  },
  {
    id: 'leda-cosmides-john-tooby',
    name: 'Leda Cosmides & John Tooby',
    years: 'ur. 1949 (Cosmides) / 1952–2023 (Tooby)',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'University of California, Santa Barbara (Center for Evolutionary Psychology)',
    coreThesis: 'Fundatorzy współczesnej psychologii ewolucyjnej: sformułowali koncepcję modularności umysłu („szwajcarski scyzoryk”) jako zbioru wyspecjalizowanych mechanizmów obliczeniowych ukształtowanych w Środowisku Ewolucyjnej Adaptacyjności (EEA) do rozwiązywania konkretnych problemów plejstocenu (np. detektor oszustów).',
    magnumOpus: '„The Adapted Mind: Evolutionary Psychology and the Generation of Culture” (1992, pod redakcją z Jerome\'em Barkowem).',
    keyContributions: ['Zadanie selekcyjne Wasona w kontekście kontraktów społecznych (Social Contract Theory)', 'Rozbicie Standardowego Modelu Nauk Społecznych (SSSM)', 'Koncepcja Środowiska Ewolucyjnej Adaptacyjności (EEA)'],
    primaryQuote: '„Nasze współczesne czaszki kryją w sobie umysły z epoki kamienia łupanego”.'
  },
  {
    id: 'linda-mealey',
    name: 'Linda Mealey',
    years: '1955–2002',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'College of Saint Benedict and Saint John\'s University',
    coreThesis: 'Ewolucyjny model socjopatii jako strategii zależnej od częstości (Frequency-Dependent Selection): wykazała, że socjopatia pierwotna może utrzymywać się w populacji w niskim odsetku (1–2%) jako stabilna strategia ewolucyjna oszusta żerującego na kooperacji naiwnych partnerów.',
    magnumOpus: 'Mealey (1995, Behavioral and Brain Sciences: „The sociobiology of sociopathy: An integrated evolutionary model”).',
    keyContributions: ['Rygorystyczne zastosowanie teorii gier do klinicznej psychopatii', 'Rozróżnienie socjopatii pierwotnej (genetycznej) od wtórnej (reaktywnej na wczesny stres środowiskowy)', 'Matematyczne modelowanie równowagi oszust–kooperator w małych grupach'],
    primaryQuote: '„Socjopatia nie jest defektem biologicznym w sensie choroby tkankowej, lecz bezwzględną, alternatywną strategią rozrodczo-statusową, która działa dopóty, dopóki większość społeczeństwa gra uczciwie”.'
  },
  {
    id: 'paul-babiak-robert-hare',
    name: 'Paul Babiak & Robert Hare',
    years: 'ur. 1951 (Babiak) / ur. 1934 (Hare)',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'University of British Columbia (Hare) / HRMetrics (Babiak)',
    coreThesis: 'Psychopatia w strukturach władzy i korporacjach: twórca skali PCL-R (Hare) i psycholog organizacyjny (Babiak) udowodnili, że cechy psychopatyczne (urok powierzchowny, manipulacja, chłód emocjonalny, brak wyrzutów sumienia) w warunkach anonimowego korporacyjnego kapitalizmu ułatwiają szybki awans na szczyty hierarchii finansowej i menedżerskiej.',
    magnumOpus: '„Snakes in Suits: When Psychopaths Go to Work” (2006); Hare: „Without Conscience” (1993).',
    keyContributions: ['Opracowanie klinicznego złotego standardu diagnozy psychopatii (Psychopathy Checklist-Revised)', 'Wykazanie 4-krotnie wyższego odsetka psychopatów w zarządach firm niż w populacji generalnej', 'Analiza faz infiltracji i manipulacji korporacyjnej'],
    primaryQuote: '„Gdybyśmy szukali idealnego środowiska dla drapieżnika psychopatycznego, byłaby to dynamiczna, chaotyczna korporacja z wysoką rotacją kadr, gdzie bezwzględność jest mylona z charyzmą”.'
  },
  {
    id: 'mark-schaller',
    name: 'Mark Schaller',
    years: 'ur. 1962',
    discipline: 'Psychologia Ewolucyjna i Antropologia Społeczna',
    affiliation: 'University of British Columbia',
    coreThesis: 'Twórca koncepcji Behawioralnego Układu Odpornościowego (Behavioral Immune System — BIS): wykazał, że psychologiczne mechanizmy wstrętu, ksenofobii i konformizmu normatywnego wyewoluowały jako pierwsza linia obrony przed patogenami zakaźnymi.',
    magnumOpus: 'Schaller & Park (2007, Evolution and Human Behavior: „The behavioral immune system (and why it matters)”); Schaller (2011).',
    keyContributions: ['Wprowadzenie pojęcia BIS do literatury światowej', 'Korelacja między historycznym obciążeniem chorobami zakaźnymi a autorytaryzmem kultur', 'Wykazanie aktywacji leukocytów krwi na sam widok objawów infekcji u innych ludzi'],
    primaryQuote: '„Zanim organizm włączy kosztowną gorączkę i wytworzy przeciwciała, nasz umysł używa wstrętu, by w ogóle nie dotknąć źródła zakażenia”.'
  },

  // Cognitive & Social Psychology
  {
    id: 'daniel-kahneman',
    name: 'Daniel Kahneman',
    years: '1934–2024',
    discipline: 'Psychologia Poznawcza i Społeczna',
    affiliation: 'Princeton University',
    coreThesis: 'Teoria Perspektywy oraz architektura dwóch systemów myślenia: wykazał systematyczne heurystyki i błędy poznawcze ludzkiego umysłu (System 1: szybki, intuicyjny, podatny na błędy; System 2: powolny, logiczny, energochłonny). Rewolucja w ekonomii behawioralnej nagrodzona Noblem.',
    magnumOpus: '„Thinking, Fast and Slow” (2011); Kahneman & Tversky (1979, Econometrica: „Prospect Theory”).',
    keyContributions: ['Obalenie dogmatu homo oeconomicus w ekonomii klasycznej', 'Odkrycie asymetrii awersji do straty i efektu ramowania (framing)', 'Nagroda Nobla w dziedzinie nauk ekonomicznych (2002)'],
    primaryQuote: '„Jesteśmy ślepi na naszą własną ślepotę. Nasz umysł z niesłychaną łatwością konstruuje spójne, przekonujące opowieści o świecie na podstawie skrajnie wybrakowanych danych”.'
  },
  {
    id: 'elizabeth-loftus',
    name: 'Elizabeth Loftus',
    years: 'ur. 1944',
    discipline: 'Psychologia Poznawcza i Społeczna',
    affiliation: 'University of California, Irvine',
    coreThesis: 'Rekonstrukcyjna i podatna na dezinformację natura ludzkiej pamięci: udowodniła w setkach eksperymentów, że wspomnienia można łatwo zniekształcić, a nawet wszczepić w umysł całkowicie fałszywe wydarzenia z przeszłości za pomocą sugestii i późniejszych pytań.',
    magnumOpus: '„Eyewitness Testimony” (1979); „The Myth of Repressed Memory” (1994); eksperyment „Lost in the Mall” (1995).',
    keyContributions: ['Przełom w sądownictwie i kryminalistyce dotyczący wiarygodności zeznań naocznych świadków', 'Zdemaskowanie pseudonaukowych praktyk „odzyskiwania wypartych wspomnień” pod hipnozą', 'Podstawa kognitywnego zrozumienia fałszywych wspomnień zbiorowych'],
    primaryQuote: '„Pamięć nie jest magnetowidem rejestrującym przeszłość. To dynamiczna strona w Wikipedii – ty i inni ludzie możecie wejść i dowolnie przepisać jej treść”.'
  },
  {
    id: 'hugo-mercier-dan-sperber',
    name: 'Hugo Mercier & Dan Sperber',
    years: 'ur. 1980 (Mercier) / ur. 1942 (Sperber)',
    discipline: 'Psychologia Poznawcza i Społeczna',
    affiliation: 'Institut Jean Nicod (CNRS, Paryż) / Central European University',
    coreThesis: 'Argumentacyjna Teoria Rozumu (The Argumentative Theory of Reasoning): ludzki rozum nie wyewoluował do poszukiwania obiektywnej prawdy ani do samotnego myślenia, lecz jako narzędzie społeczne służące do wytwarzania argumentów przekonujących innych oraz do krytycznej oceny argumentów rywali w dyskusji.',
    magnumOpus: '„The Enigma of Reason” (2017); Mercier & Sperber (2011, Behavioral and Brain Sciences).',
    keyContributions: ['Nowe, ewolucyjne wyjaśnienie efektu potwierdzenia (Confirmation Bias)', 'Wykazanie dlaczego ludzie w grupach deliberacyjnych myślą wielokrotnie mądrzej niż w samotności', 'Obalenie intelektualistycznego mitu rozumu Kartezjusza'],
    primaryQuote: '„Rozum nie jest wadliwym instrumentem logicznym. To genialna broń retoryczna wyselekcjonowana w toku ewolucji po to, byś mógł przekonać do swego zdania członków plemienia”.'
  },
  {
    id: 'jonathan-haidt',
    name: 'Jonathan Haidt',
    years: 'ur. 1963',
    discipline: 'Psychologia Poznawcza i Społeczna',
    affiliation: 'New York University Stern School of Business',
    coreThesis: 'Teoria Fundamentów Moralnych (Moral Foundations Theory) oraz destrukcyjny wpływ smartfonów i mediów społecznościowych na zdrowie psychiczne młodego pokolenia. Rozum jest „jeźdźcem” na „słoniu” intuicji somatycznej; moralność spaja i oślepia (binds and blinds).',
    magnumOpus: '„The Righteous Mind: Why Good People Are Divided by Politics and Religion” (2012); „The Anxious Generation” (2024); „The Coddling of the American Mind” (2018).',
    keyContributions: ['Zdefiniowanie 6 fundamentów moralnych (Troska, Sprawiedliwość, Lojalność, Autorytet, Świętość, Wolność)', 'Empiryczne dowody na gwałtowny wzrost depresji i samookaleczeń dziewcząt po 2012 roku pod wpływem smartfonów', 'Ewolucyjny model plemienności we współczesnej polityce'],
    primaryQuote: '„Intuicje moralne przychodzą pierwsze, strategiczne uzasadnienia rozumowe – drugie. Jesteśmy ulepieni z tego samego glinianego garnka co nasi paleolityczni przodkowie”.'
  },
  {
    id: 'robert-trivers',
    name: 'Robert Trivers',
    years: 'ur. 1943',
    discipline: 'Psychologia Poznawcza i Społeczna',
    affiliation: 'Rutgers University',
    coreThesis: 'Twórca fundamentalnych teorii socjobiologii: odwzajemnionego altruizmu (Reciprocal Altruism, 1971), inwestycji rodzicielskiej (Parental Investment, 1972), konfliktu rodzic-potomstwo (1974) oraz ewolucyjnej teorii samooszukiwania (Self-Deception, 2011).',
    magnumOpus: '„The Folly of Fools: The Logic of Deceit and Self-Deception in Human Life” (2011); „Natural Selection and Social Theory” (2002).',
    keyContributions: ['Matematyczne fundamenty doboru płciowego i inwestycji rodzicielskiej', 'Sformułowanie teorii konfliktu genetycznego w łonie matki (genomowe piętnowanie)', 'Wyjaśnienie samooszukiwania jako broni ewolucyjnej redukującej stres kłamcy'],
    primaryQuote: '„Oszukujemy samych siebie po to, by móc bardziej przekonująco oszukiwać innych, nie zdradzając się żadnym drżeniem głosu ani kroplą potu”.'
  },

  // Cognitive Science of Religion & Evolution of Mind
  {
    id: 'julian-jaynes',
    name: 'Julian Jaynes',
    years: '1920–1997',
    discipline: 'Kognitywistyka Religii i Filozofia Umysłu',
    affiliation: 'Princeton University',
    coreThesis: 'Hipoteza umysłu dwuizbowego (Bicameral Mind): przed ok. II tysiącleciem p.n.e. ludzie nie posiadali nowoczesnej, introspektywnej samoświadomości; decyzje były kierowane halucynacjami słuchowymi z prawej półkuli odbieranymi przez lewą półkulę jako „głosy bogów” lub zmarłych królów. Załamanie tej architektury pod wpływem kryzysów brązu i pisma wyłoniło współczesną samoświadomość.',
    magnumOpus: '„The Origin of Consciousness in the Breakdown of the Bicameral Mind” (1976).',
    keyContributions: ['Pionierskie połączenie lingwistyki starożytnej (Iliada) z neuroanatomią międzypółkulową', 'Hipoteza głosu boga jako prawej półkuli mózgu', 'Pojęcie świadomości jako oprogramowania metaforyczno-językowego'],
    primaryQuote: '„Dla ludzi starożytnych bogowie nie byli pojęciem filozoficznym ani kwestią wiary – byli dosłownymi, słyszalnymi głosami w głowie, które rozkazywały im, co mają robić w chwilach kryzysu”.'
  },
  {
    id: 'pascal-boyer',
    name: 'Pascal Boyer',
    years: 'ur. 1957',
    discipline: 'Kognitywistyka Religii i Filozofia Umysłu',
    affiliation: 'Washington University in St. Louis',
    coreThesis: 'Koncepcja Minimalnie Przeciwintuicyjnych Koncepcji (MCI — Minimally Counterintuitive Concepts): idee religijne (duchy, bogowie) rozprzestrzeniają się jak wirusy umysłu, ponieważ łamią dokładnie jedną lub dwie domyślne intuicje ontologiczne (np. człowiek bez ciała fizycznego), pozostając w reszcie w pełni intuicyjne, co zapewnia im optymalną zapamiętywalność i łatwość transmisji kulturowej.',
    magnumOpus: '„Religion Explained: The Evolutionary Origins of Religious Thought” (2001; wyd. pol. „I człowiek stworzył bogów”).',
    keyContributions: ['Sformułowanie teorii MCI w kognitywistyce religii', 'Koncepcja religii jako spandrelu architektury poznawczej (cognitive byproduct)', 'Rozróżnienie teologii oficjalnej od potocznej reprezentacji bóstw (theological incorrectness)'],
    primaryQuote: '„Religia nie jest osobnym organem w mózgu ani instynktem – to zręczny pasażer na gapę, który żeruje na prastarych obwodach wnioskowania społecznego, unikania patogenów i wykrywania intencji”.'
  },
  {
    id: 'justin-barrett',
    name: 'Justin L. Barrett',
    years: 'ur. 1971',
    discipline: 'Kognitywistyka Religii i Filozofia Umysłu',
    affiliation: 'Fuller Theological Seminary / University of Oxford',
    coreThesis: 'Moduł HADD (Hypersensitive Agency Detection Device): wrodzona skłonność umysłu do nadinterpretowania szumów środowiskowych jako celowych działań świadomego sprawcy. Dzieci są „naturalnie wierzące” (born believers) z powodu wczesnej teleologicznej interpretacji przyrody.',
    magnumOpus: '„Why Would Anyone Believe in God?” (2004); „Born Believers: The Science of Children\'s Religious Belief” (2012).',
    keyContributions: ['Zdefiniowanie i empiryczne przetestowanie mechanizmu HADD', 'Badania nad teleologicznym myśleniem u dzieci przed jakąkolwiek katechezą', 'Współtworzenie fundamentów Kognitywnej Nauki o Religii (CSR)'],
    primaryQuote: '„Lepiej sto razy pomylić szum wiatru w trawie z czającym się drapieżnikiem, niż raz pomylić drapieżnika z wiatrem. Ta sama paranoiczna czujność każe nam widzieć intencjonalne duchy za każdą burzą i chorobą”.'
  },
  {
    id: 'ara-norenzayan',
    name: 'Ara Norenzayan',
    years: 'ur. 1972',
    discipline: 'Kognitywistyka Religii i Filozofia Umysłu',
    affiliation: 'University of British Columbia',
    coreThesis: 'Hipoteza Wielkich Bogów (Big Gods): przejście od małych grup do milionowych państw anonimowych wymagało kulturowej selekcji koncepcji wszechwiedzących, moralizujących bóstw, które monitorują występki i karzą za oszustwo, umożliwiając wielkoskalową współpracę między obcymi.',
    magnumOpus: '„Big Gods: How Religion Transformed Cooperation and Conflict” (2013).',
    keyContributions: ['Eksperymenty nad torowaniem pojęciami religijnymi a uczciwością w grach ekonomicznych', 'Analiza historyczna rozrostu imperiów w korelacji z bóstwami moralizującymi', 'Model sekularyzacji jako zastąpienia Wielkich Bogów przez sprawne instytucje państwowe'],
    primaryQuote: '„Obserwowani ludzie to lepsi ludzie. Kiedy społeczności przerosły kręgi Dunbara, wszechwidzące oko moralizującego boga zastąpiło plotkujących sąsiadów jako uniwersalny policjant sumienia”.'
  },
  {
    id: 'harvey-whitehouse',
    name: 'Harvey Whitehouse',
    years: 'ur. 1964',
    discipline: 'Kognitywistyka Religii i Filozofia Umysłu',
    affiliation: 'University of Oxford',
    coreThesis: 'Dwa modusy religijności (Modes of Religiosity): modus doktrynalny (częste, mało ekscytujące rytuały, pismo, hierarchia kapłańska, spaja wielkie anonimowe imperia) oraz modus imagistyczny (rzadkie, traumatyczne rytuały inicjacyjne, stany transowe, potężna fuzja tożsamościowa z małą grupą bojową).',
    magnumOpus: '„Modes of Religiosity: A Cognitive Theory of Religious Transmission” (2004); „The Ritual Animal: Imitation and Cohesion in the Evolution of Human Culture” (2021).',
    keyContributions: ['Teoria fuzji tożsamościowej (identity fusion) wyjaśniająca skrajny altruizm i samobójstwa bojowe', 'Badania antropologiczne nad kultami cargo na Nowej Gwinei', 'Stworzenie globalnej bazy danych historii ewolucji religii Seshat'],
    primaryQuote: '„Wspólne przejście przez bolesną, traumatyczną próbę inicjacyjną zespala ludzi na całe życie węzłem silniejszym niż biologiczne braterstwo”.'
  },
  {
    id: 'paul-bloom',
    name: 'Paul Bloom',
    years: 'ur. 1963',
    discipline: 'Psychologia Poznawcza i Społeczna',
    affiliation: 'Yale University / University of Toronto',
    coreThesis: 'Wrodzony intuicyjny dualizm: ludzki mózg od pierwszych miesięcy życia posługuje się dwoma odrębnymi systemami wnioskowania – jeden dla ciał fizycznych (mechanika intuicyjna), a drugi dla umysłów (psychologia intuicyjna). Sprawia to, że niemowlęta i dorośli w sposób naturalny wyobrażają sobie istnienie umysłu bez ciała (duchy) oraz ciała bez umysłu (zombie).',
    magnumOpus: '„Descartes\' Baby: How the Science of Child Development Explains What Makes Us Human” (2004); „Against Empathy” (2016).',
    keyContributions: ['Eksperymenty nad moralnością niemowląt w Baby Lab na Yale', 'Empiryczne wykazanie wrodzonych korzeni wiary w życie po śmierci', 'Krytyka empatii emocjonalnej na rzecz racjonalnego współczucia'],
    primaryQuote: '„Wszyscy rodzimy się kartezjanami. Dla naszego aparatu poznawczego ciało i świadomość to dwie odrębne substancje, co czyni wiarę w duszę domyślnym stanem ludzkiego umysłu”.'
  },
  {
    id: 'chris-frith',
    name: 'Chris Frith',
    years: 'ur. 1942',
    discipline: 'Biologia i Neurobiologia Ewolucyjna',
    affiliation: 'University College London (Wellcome Centre for Human Neuroimaging)',
    coreThesis: 'Neuropsychologia samomonitorowania i halucynacji: mechanizm wyładowania towarzyszącego (corollary discharge) oraz monitorowanie źródła (source monitoring). Halucynacje słuchowe powstają w wyniku awarii obwodu czołowo-skroniowego: własna mowa wewnętrzna nie jest oznaczana jako własna, lecz jako pochodząca z zewnątrz. Kluczowe dla krytycznej weryfikacji hipotezy Jaynesa.',
    magnumOpus: '„The Cognitive Neuropsychology of Schizophrenia” (1992); „Making up the Mind: How the Brain Creates Our Mental World” (2007).',
    keyContributions: ['Odkrycie deficytów monitorowania źródła w schizofrenii', 'Zastosowanie neuroobrazowania PET i fMRI do badania omamów słownych w czasie rzeczywistym', 'Model mózgu jako maszyny bayesowskiej tworzącej halucynację kontrolowaną'],
    primaryQuote: '„Nasze postrzeganie świata to iluzja, która idealnie zgadza się z rzeczywistością, a halucynacje to po prostu percepcja pozbawiona zewnętrznego sygnału korygującego”.'
  },
  {
    id: 'scott-atran',
    name: 'Scott Atran',
    years: 'ur. 1952',
    discipline: 'Kognitywistyka Religii i Filozofia Umysłu',
    affiliation: 'CNRS Paryż / University of Michigan / Oxford',
    coreThesis: 'Święte Wartości (Sacred Values) i altruizm dewocyjny: religia i rytuały wytwarzają w mózgu obszary niepodlegające kalkulacji zysków i strat (utylitaryzmowi). Wojownicy i fanatycy religijni są gotowi na samounicestwienie w obronie wartości sakralnych, których naruszenie wyzwala reakcję wstrętu i wściekłości, a nie kompromisu rynkowego.',
    magnumOpus: '„In Gods We Trust: The Evolutionary Landscape of Religion” (2002); „Talking to the Enemy: Faith, Brotherhood, and the (Un)Making of Terrorists” (2010).',
    keyContributions: ['Wywiady terenowe z zamachowcami-samobójcami i bojownikami dżihadu', 'Empiryczne wykazanie nieskuteczności zachęt materialnych wobec wartości świętych', 'Ewolucyjna teoria religii jako krajobrazu spandreli kognitywnych i kosztownej sygnalizacji'],
    primaryQuote: '„Próba przekupienia kogoś, by zrezygnował ze świętej wartości, przynosi efekt odwrotny: oburzenie moralne wzrasta, ponieważ świętość z definicji nie ma ceny rynkowej”.'
  },
  {
    id: 'david-lewis-williams',
    name: 'David Lewis-Williams',
    years: 'ur. 1934',
    discipline: 'Paleoantropologia i Paleogenetyka',
    affiliation: 'University of the Witwatersrand w Johannesburgu',
    coreThesis: 'Neuropsychologiczny model sztuki naskalnej górnego paleolitu: rysunki w jaskiniach (Chauvet, Lascaux) są materialnym zapisem szamańskich stanów odmiennej świadomości (ASC) wywoływanych przez deprywację sensoryczną, hiperwentylację i halucynogeny. Uniwersalne wzorce geometryczne (fosfeny, entoptyki) wynikają bezpośrednio z fizjologii ludzkiej kory wzrokowej V1.',
    magnumOpus: '„The Mind in the Cave: Consciousness and the Origins of Art” (2002); „Inside the Neolithic Mind” (2005).',
    keyContributions: ['Połączenie neuropsychologii widzenia z etnografią ludu San i sztuką jaskiniową paleolitu', 'Trójfazowy model transu szamańskiego (geometryczne fosfeny -> iluzje ikoniczne -> teriantropy)', 'Uznanie jaskini za membranę oddzielającą świat widzialny od podziemi'],
    primaryQuote: '„Górnopaleolityczne jaskinie nie były galeriami sztuki, lecz przedsionkami zaświatów, a ich ściany – przepuszczalną błoną, przez którą szamani dotykali duchów w stanie głębokiego transu”.'
  },
  {
    id: 'olaf-blanke',
    name: 'Olaf Blanke',
    years: 'ur. 1969',
    discipline: 'Biologia i Neurobiologia Ewolucyjna',
    affiliation: 'École Polytechnique Fédérale de Lausanne (EPFL)',
    coreThesis: 'Neurobiologiczne podłoże doświadczeń poza ciałem (OBE — Out-of-Body Experience) i poczucia obecności (Feeling of a Presence): wykazał w przełomowych badaniach fMRI i stymulacji korowej, że zjawiska przypisywane w religiach „eksterioryzacji duszy” to zaburzenia multisensorycznej integracji proprioceptywnej i przedsionkowej w prawym zakręcie kątowym i skrzyżowaniu skroniowo-ciemieniowym (TPJ).',
    magnumOpus: 'Blanke et al. (2002, Nature: „Stimulating illusory own-body perceptions”); (2014, Current Biology: „Neurological and Robot-Controlled Induction of an Apparition”).',
    keyContributions: ['Pierwsza w historii bezpośrednia indukcja OBE u pacjenta za pomocą elektrostymulacji zakrętu kątowego', 'Robotyczny eksperyment wywoływania „cienia/ducha” za plecami badanego poprzez asynchronię sensoryczno-motoryczną', 'Demistyfikacja zjawisk mistycznych na poziomie neurofizjologii kory mózgowej'],
    primaryQuote: '„Dusza nie opuszcza ciała. To mózg w ułamku sekundy gubi współrzędne własnego ciała w przestrzeni, rzutując punkt widzenia na zewnątrz”.'
  },
  {
    id: 'karl-jaspers',
    name: 'Karl Jaspers',
    years: '1883–1969',
    discipline: 'Kognitywistyka Religii i Filozofia Umysłu',
    affiliation: 'Uniwersytet w Heidelbergu / Uniwersytet w Bazylei',
    coreThesis: 'Koncepcja Epoki Osiowej (Achsenzeit, ok. 800–200 p.n.e.): w trzech niezależnych regionach globu (Grecja, Indie, Chiny/Bliski Wschód) doszło do narodzin krytycznej autorefleksji, uniwersalistycznej etyki oraz oderwania sacrum od plemiennego rytuału na rzecz wewnętrznej odpowiedzialności jednostki (Sokrates, Budda, Konfucjusz, prorocy Izraela).',
    magnumOpus: '„Vom Ursprung und Ziel der Geschichte” (1949; wyd. pol. „O źródle i celu historii”).',
    keyContributions: ['Zdefiniowanie cezury Epoki Osiowej w historii cywilizacji ludzkiej', 'Rozróżnienie religii rytualno-magicznych od religii etyczno-refleksyjnych', 'Filozoficzne fundamenty psychopatologii ogólnej (Allgemeine Psychopathologie)'],
    primaryQuote: '„W Epoce Osiowej człowiek po raz pierwszy uświadomił sobie byt jako całość, samego siebie i swoje granice. Doświadczył grozy świata i własnej bezradności, stawiając pytania ostateczne”.'
  },
  {
    id: 'daniel-dennett',
    name: 'Daniel C. Dennett',
    years: '1942–2024',
    discipline: 'Kognitywistyka Religii i Filozofia Umysłu',
    affiliation: 'Tufts University (Center for Cognitive Studies)',
    coreThesis: 'Koncepcja religii jako zjawiska w pełni naturalnego, podlegającego ewolucji kulturowej i memetycznej. Umysł ludzki to maszyna tworząca hipotezy o intencjach (intentional stance), a samoświadomość to kulturowe oprogramowanie językowe („wirtualna maszyna”), a nie niefizyczny kartezjański teatr.',
    magnumOpus: '„Consciousness Explained” (1991); „Darwin\'s Dangerous Idea” (1995); „Breaking the Spell: Religion as a Natural Phenomenon” (2006).',
    keyContributions: ['Pojęcie „stanowiska intencjonalnego” (Intentional Stance)', 'Demistyfikacja świadomości jako rozproszonej redakcji (Multiple Drafts Model)', 'Badania nad duchownymi niewierzącymi (z Lindą LaScolą)'],
    primaryQuote: '„Świadomość nie jest centralnym ekranem w głowie, na który patrzy wewnętrzny karzełek. To dynamiczna gra narracji tworzona przez miliardy procesów neuronalnych i słowa zainstalowane w nas przez kulturę”.'
  }
];

export const ACADEMIC_DEBATES: AcademicDebate[] = [
  {
    id: 'debate-kamikaze-sperm',
    title: '„Plemniki Kamikadze”: Wojny Plemników vs. Błędy Spermatogenezy',
    shortTopic: 'Morfologia nasienia a konkurencja plemników',
    field: 'Biologia Rozrodu i Ewolucja',
    confidenceLevel: 'level3',
    positionA: {
      proponents: ['Robin Baker', 'Mark Bellis (1988, 1995)'],
      argument: 'Plemniki człowieka dzielą się na wyspecjalizowane kasty bojowe: zapładniacze oraz plemniki-żołnierze blokujące i niszczące obce nasienie enzymami akrosomowymi.',
      falsificationCondition: 'Zaobserwowanie w kontrolowanych warunkach in vitro aktywnego ataku plemników jednego mężczyzny na plemniki rywala.'
    },
    positionB: {
      proponents: ['Harry Moore', 'Martin Martin', 'David Birkhead (1999)'],
      argument: 'Zdeformowane plemniki to odpady produkcyjne (błędy spermatogenezy), a nie żołnierze. Zmieszane nasienie nie wykazuje żadnej wrogiej chemicznie ani mechanicznej reakcji.',
      falsificationCondition: 'Odkrycie specyficznych markerów białkowych i enzymów litycznych aktywnych wyłącznie przeciw obcym gametom.'
    },
    currentEmpiricalConsensus: 'Odrzucenie hipotezy Bakera jako pseudonaukowego mitu. Człowiek wykazuje umiarkowaną konkurencję plemników opartą na masie jąder i liczbie plemników, lecz brak jest kast bojowych.'
  },
  {
    id: 'debate-partible-paternity',
    title: 'Rozproszone Ojcostwo: Powszechna Adaptacja czy Lokalna Mitologia?',
    shortTopic: 'Ewolucyjne modele ojcostwa i rodziny',
    field: 'Antropologia Społeczna i Ewolucyjna',
    confidenceLevel: 'level2',
    positionA: {
      proponents: ['Sarah Blaffer Hrdy', 'Stephen Beckerman', 'Paul Valentine'],
      argument: 'Wieloośrodkowa koalicja ojców była powszechnym i adaptacyjnym modelem w małych grupach łowiecko-zbierackich, podnosząc przeżywalność niemowląt dzięki alloparentingowi.',
      falsificationCondition: 'Wykazanie, że kultury z rozproszonym ojcostwem ponoszą wyższy koszt dzieciobójstwa niż zyskują na dodatkowym białku od wtórnych mężów.'
    },
    positionB: {
      proponents: ['Warren Shapiro', 'David Buss', 'Bobbi Low'],
      argument: 'Zazdrość seksualna samców i lęk przed rogactwem (cuckoldry) są zbyt głęboko wbudowane w neurobiologię, by rozproszone ojcostwo było normą całego plejstocenu; to specyficzna tradycja nizin Amazonii.',
      falsificationCondition: 'Odkrycie uniwersalnych dowodów etnograficznych i genetycznych na wieloojcostwo w Afryce i Eurazji w epoce paleolitu.'
    },
    currentEmpiricalConsensus: 'Konsensus umiarkowany: rozproszone ojcostwo jest realną, działającą adaptacją w specyficznych ekosystemach o wysokim ryzyku śmierci łowcy, lecz dominującym wzorcem gatunku były pary zacieśnione więzią wspierane przez rozszerzoną rodzinę (alloparenting babć).'
  },
  {
    id: 'debate-neanderthal-extinction',
    title: 'Zagłada Neandertalczyków: Ludobójstwo Sapiens vs. Asymilacja i Demografia',
    shortTopic: 'Przyczyny wyginięcia Homo neanderthalensis',
    field: 'Paleoantropologia i Paleogenetyka',
    confidenceLevel: 'level2',
    positionA: {
      proponents: ['Paul Mellars', 'Jared Diamond', 'Fernando Rozzi'],
      argument: 'Homo sapiens wyparł neandertalczyków w wyniku bezpośredniego konfliktu militarnego, dominacji technologicznej (miotacze oszczepów) oraz konkurencji o zwierzynę łowną.',
      falsificationCondition: 'Wykazanie braku śladów przemocy międzygatunkowej w kluczowych rejonach koegzystencji (np. w Lewancie i Iberii).'
    },
    positionB: {
      proponents: ['Svante Pääbo', 'Clive Finlayson', 'Katerina Harvati'],
      argument: 'Neandertalczycy żyli w skrajnie małych, izolowanych populacjach o wysokim inbreedingu; niestabilność klimatyczna MIS 3 oraz genetyczna asymilacja (wchłonięcie przez liczniejszego Sapiens) doprowadziły do ich zaniku.',
      falsificationCondition: 'Odkrycie dużych, stabilnych genetycznie populacji neandertalskich w Europie tuż przed datą 40 tys. lat temu.'
    },
    currentEmpiricalConsensus: 'Przesunięcie w stronę modelu wieloczynnikowego: brak dowodów na powszechną wojnę eksterminacyjną. Decydujące okazały się sieci kooperacyjne Sapiens, wyższa gęstość demograficzna oraz asymilacja genetyczna (pozostawili po sobie 1–2% genomu).'
  },
  {
    id: 'debate-brain-shrinkage-holocene',
    title: 'Kurczenie się Ludzkiego Mózgu w Holocenie: Zbiorowy Outsourcing vs. Błąd Pomiaru',
    shortTopic: 'Ewolucja pojemności mózgoczaszki w ostatnich 10 tys. lat',
    field: 'Paleoneurologia',
    confidenceLevel: 'level3',
    positionA: {
      proponents: ['Jeremy DeSilva et al. (2021)'],
      argument: 'Ludzki mózg skurczył się o ok. 10% (ze 1450 do 1350 cm³) ok. 3000 lat temu na skutek zbiorowej inteligencji i podziału pracy w zorganizowanych miastach (analogicznie do mrówek).',
      falsificationCondition: 'Wykazanie, że datowanie próbek czaszek nie koreluje z momentem powstania miast i pisma w różnych rejonach świata.'
    },
    positionB: {
      proponents: ['Brian Villmoare & Mark Grabowski (2022)'],
      argument: 'Błąd metodologiczny: zbiór danych DeSilvy był skrajnie nierównomierny i wymieszany geograficznie. Przy rygorystycznej analizie statystycznej brak jest dowodu na skokowe kurczenie się mózgu w holocenie.',
      falsificationCondition: 'Przedstawienie jednorodnej, globalnej bazy tysięcy czaszek z precyzyjnym datowaniem radiowęglowym potwierdzającej skokowy spadek 3000 lat temu.'
    },
    currentEmpiricalConsensus: 'Poważne podważenie hipotezy DeSilvy. Większość współczesnych antropologów uważa, że niewielkie fluktuacje wielkości puszki mózgowej korelują ze zmianami ogólnej masy ciała (gracylizacja postkranialna w rolnictwie), a nie ze zjawiskiem „mózgu mrówki”.'
  },
  {
    id: 'debate-swiss-army-knife-modularity',
    title: 'Architektura Umysłu: Szwajcarski Scyzoryk Modułów vs. Plastyczność Kulturowa',
    shortTopic: 'Modularność masowa a koewolucja genetyczno-kulturowa',
    field: 'Filozofia Umysłu i Psychologia Ewolucyjna',
    confidenceLevel: 'level2',
    positionA: {
      proponents: ['Leda Cosmides', 'John Tooby', 'Steven Pinker'],
      argument: 'Umysł to zbiór setek wyspecjalizowanych, wrodzonych modułów kognitywnych (massively modular mind) wyselekcjonowanych w plejstocenie do konkretnych zadań adaptacyjnych.',
      falsificationCondition: 'Wykazanie, że zaawansowane zachowania społeczne mogą powstać w sieciach neuronowych o uogólnionym, elastycznym uczeniu bez wrodzonych domen.'
    },
    positionB: {
      proponents: ['Joseph Henrich', 'Cecilia Heyes', 'Annette Karmiloff-Smith'],
      argument: 'Mózg ludzki to narząd o gigantycznej neuroplastyczności; zaawansowane narzędzia poznawcze (czytanie, logika, złożona moralność) to „gadżety kulturowe” (cultural gadgets) instalowane w toku ontogenezy.',
      falsificationCondition: 'Odkrycie ścisłej, nienaruszalnej lokalizacji modułów w genomie i wykazanie ich odporności na drastyczne różnice w wychowaniu kulturowym.'
    },
    currentEmpiricalConsensus: 'Synteza: odrzucenie skrajnej modularności genetycznej na rzecz wrodzonych ukierunkowań uwagi (biases) i pętli neuroplastyczności kulturowej (recycling neuronalny Dehaene\'a).'
  },
  {
    id: 'debate-homo-naledi-burials',
    title: 'Zagadka Homo naledi: Celowe Pochówki i Sztuka czy Osuwisko Geologiczne?',
    shortTopic: 'Zachowania funeralne u hominidów o małych mózgach',
    field: 'Paleoantropologia Tafonomiczna',
    confidenceLevel: 'level3',
    positionA: {
      proponents: ['Lee Berger', 'John Hawks et al. (2023)'],
      argument: 'Homo naledi intencjonalnie grzebał swoich zmarłych w głębokich komorach jaskiniowych, rył abstrakcyjne znaki na ścianach i rozświetlał drogę kontrolowanym ogniem.',
      falsificationCondition: 'Odkrycie naturalnych kanałów nanoszenia kości przez wodę lub drapieżniki do komory Dinaledi.'
    },
    positionB: {
      proponents: ['María Martinón-Torres', 'Michael Petraglia', 'Andy Herries (2023)'],
      argument: 'Brak rygorystycznych dowodów tafonomicznych: brak widocznych jam grobowych, brak datowania rytów naskalnych, ślady ognia mogą być wtórne i późniejsze.',
      falsificationCondition: 'Przedstawienie mikromorfologicznych przekrojów osadów wykazujących nienaruszone granice wykopanego dołu grobowego.'
    },
    currentEmpiricalConsensus: 'Wielki sceptycyzm środowiska akademickiego wobec twierdzeń zespołu Bergera. Artykuły opublikowane w eLife spotkały się z bezprecedensowo druzgocącymi recenzjami; teza o intencjonalnym pochówku u naledi ma obecnie status nieudowodnionej.'
  },
  {
    id: 'debate-ongoing-human-evolution',
    title: 'Czy Człowiek Nadal Ewoluuje Biologicznie: Koniec Selekcji vs. Nowe Horyzonty GWAS',
    shortTopic: 'Ewolucja człowieka we współczesnych społeczeństwach',
    field: 'Genetyka Populacyjna i Medycyna',
    confidenceLevel: 'level1',
    positionA: {
      proponents: ['Wczesny Steve Jones', 'popularne mity prasowe'],
      argument: 'Współczesna medycyna, opieka neonatologiczna i higiena zatrzymały dobór naturalny, ponieważ przeżywa 99% noworodków, a wady wzroku korygują okulary.',
      falsificationCondition: 'Wykazanie statystycznego braku jakichkolwiek różnic w sukcesie rozrodczym powiązanych z wariancją genetyczną we współczesnych rejestrach medycznych.'
    },
    positionB: {
      proponents: ['Kari Stefansson (deCODE)', 'Jonathan Beauchamp', 'J. Sanjak', 'Emmanuel Milot'],
      argument: 'Ewolucja nie zatrzymała się – zmieniła jedynie wektory selekcji. Badania GWAS na setkach tysięcy profili z biobanków wykazują mierzalną statystycznie selekcję kierunkową na cechy metaboliczne, wiek rozrodu i wskaźniki poligenowe.',
      falsificationCondition: 'Brak korelacji między jakimkolwiek allelem a liczbą zrodzonego potomstwa (zerowa wariancja darwinowska).'
    },
    currentEmpiricalConsensus: 'Pełny konsensus empiryczny na korzyść Stanowiska B: dobór naturalny nadal działa, czego dowodzą publikacje w Nature i PNAS z lat 2016–2024. Zmieniła się jedynie nisza selekcyjna (selekcja medyczna, demograficzna i metaboliczna).'
  },
  {
    id: 'debate-corporate-psychopathy-origin',
    title: 'Psychopatia Korporacyjna: Wrodzone Predyspozycje czy Produkt Kultury Bodźców?',
    shortTopic: 'Etiologia zachowań amoralnych w organizacjach',
    field: 'Psychologia Organizacyjna i Neurokryminalistyka',
    confidenceLevel: 'level2',
    positionA: {
      proponents: ['Robert Hare', 'Paul Babiak', 'Clive Boddy'],
      argument: 'Osobnicy z wrodzoną strukturą mózgu psychopatycznego (niska pobudliwość ciała migdałowatego) aktywnie infiltrują hierarchie korporacyjne, które stanowią dla nich idealną niszę pasożytniczą.',
      falsificationCondition: 'Wykazanie, że menedżerowie dopuszczający się bezwzględnych cięć i oszustw w badaniach fMRI wykazują w pełni neurotypową empatię afektywną.'
    },
    positionB: {
      proponents: ['Philip Zimbardo', 'George Akerlof', 'Joel Bakan'],
      argument: 'To bezosobowa architektura prawna korporacji (obowiązek maksymalizacji zysku akcjonariuszy, anonimowość i targety) zmusza zwykłych, neurotypowych ludzi do wykształcenia wtórnej bezduszności adaptacyjnej.',
      falsificationCondition: 'Udowodnienie, że radykalna zmiana kultury organizacyjnej na etyczną nie zmniejsza liczby bezdusznych decyzji u menedżerów.'
    },
    currentEmpiricalConsensus: 'Model interakcyjny: istnieje silna selekcja wrodzonych jednostek z cechami Mrocznej Triady na wysokie stanowiska, lecz systemy motywacyjne korporacji wymuszają zachowania funkcjonalnie psychopatyczne również u osób bez genetycznych dysfunkcji limbicznych.'
  },
  {
    id: 'debate-religion-origin-adaptation-vs-spandrel',
    title: 'Geneza Religii: Ewolucyjna Adaptacja Prospołeczna vs. Spandrel Kognitywny',
    shortTopic: 'Czy religia została wyselekcjonowana dla kooperacji, czy jest produktem ubocznym architektury mózgu?',
    field: 'Kognitywistyka Religii i Ewolucja Społeczna',
    confidenceLevel: 'level2',
    positionA: {
      proponents: ['David Sloan Wilson', 'Ara Norenzayan', 'Richard Sosis', 'Dominic Johnson'],
      argument: 'Religia to potężna adaptacja doboru grupowego i kulturowego: kosztowne rytuały zapobiegają darmowej jeździe (free-riding), a wiara w moralizujące bóstwa umożliwiła bezprecedensowy rozrost kooperacji w grupach przekraczających granice pokrewieństwa biologicznego.',
      falsificationCondition: 'Wykazanie, że grupy z kosztownymi rytuałami i wiarą w karzące bóstwa ponosiły wyższe ryzyko rozpadu lub klęski militarnej niż grupy czysto laickie w historii holocenu.'
    },
    positionB: {
      proponents: ['Pascal Boyer', 'Scott Atran', 'Richard Dawkins', 'Paul Bloom'],
      argument: 'Religia to spandrel (efekt uboczny) aparatu poznawczego: wirusy memetyczne pasożytują na wrodzonych modułach HADD, psychologii intuicyjnej (ToM) i wstręcie somatycznym; korzyści kooperacyjne to wtórna racjonalizacja.',
      falsificationCondition: 'Zidentyfikowanie specyficznego genu lub nienaruszonego modułu mózgowego odpowiedzialnego wyłącznie za wiarę religijną, a nie będącego zapożyczeniem innych obwodów.'
    },
    currentEmpiricalConsensus: 'Wiodący konsensus dwupoziomowy (Norenzayan & Atran): religia wyrosła jako produkt uboczny (spandrel) modułów poznawczych paleolitu (HADD, ToM), lecz w holocenie przeszła intensywną kulturową selekcję adaptacyjną, stając się narzędziem wielkoskalowej spójności państwowej.'
  },
  {
    id: 'debate-bicameral-mind-jaynes-vs-frith',
    title: 'Umysł Dwuizbowy Juliana Jaynesa: Rewolucja Świadomości w II tys. p.n.e. czy Błędna Neurofizjologia?',
    shortTopic: 'Czy introspektywna świadomość powstała zaledwie 3000 lat temu wraz z upadkiem halucynacji słuchowych?',
    field: 'Neuropsychologia i Filozofia Umysłu',
    confidenceLevel: 'level3',
    positionA: {
      proponents: ['Julian Jaynes', 'Brian J. McVeigh', 'Marcel Kuijsten'],
      argument: 'Do czasów katastrof późnej epoki brązu (ok. 1200 p.n.e.) ludzie nie posiadali wewnętrznej narracji introspektywnej; ich działaniami kierowały automatyczne halucynacje słuchowe prawej półkuli odbierane jako rozkazy bogów (świadectwo Iliady i tekstów mezopotamskich).',
      falsificationCondition: 'Znalezienie niepodważalnych dowodów na obecność słownictwa oznaczającego introspektywne wątpliwości i wolną wolę w literaturze sprzed II tysiąclecia p.n.e.'
    },
    positionB: {
      proponents: ['Chris Frith', 'Daniel Dennett', 'Ned Block', 'Richard Dawkins'],
      argument: 'Hipoteza Jaynesa miesza zjawisko kulturowe (rozwój metafor językowych i pisma) z neuroanatomią. Halucynacje w schizofrenii to deficyt monitorowania źródła (corollary discharge) i spoidła wielkiego, a nie relikt normalnego mózgu sprzed 3000 lat; świadomość fenomenu istniała u H. sapiens od setek tysięcy lat.',
      falsificationCondition: 'Wykazanie na kopalnych mózgach lub szkieletach anatomicznych zmian w spoidle wielkim lub korze skroniowej datowanych na II tysiąclecie p.n.e.'
    },
    currentEmpiricalConsensus: 'Odrzucenie hipotezy Jaynesa jako modelu neurobiologicznego (Poziom 3). Uznanie jej natomiast za cenną intuicję kulturową: rozwój pisma i pojęć Epoki Osiowej radykalnie przekształcił „oprogramowanie” narracyjne umysłu, lecz architektura mózgu była identyczna.'
  }
];

export const PSEUDOSCIENCE_DETECTOR_FILTERS: PseudoscienceChecklistItem[] = [
  {
    id: 'filter-falsifiability',
    number: 1,
    principleTitle: 'Falsyfikowalność vs. „Bajki Adaptacjonistyczne” (Just-So Stories)',
    academicStandard: 'Zgodnie z kryterium Karla Poppera oraz krytyką Stephena Jaya Goulda i Richarda Lewontina (1979, „The Spandrels of San Marco”), każda hipoteza ewolucyjna musi wskazywać warunki empiryczne, które mogłyby dowieść jej fałszywości. Samo wymyślenie zgrabnej opowieści, dlaczego dana cecha „mogła pomóc łowcom na sawannie”, nie stanowi dowodu naukowego.',
    popularFallacyTrap: 'Zmyślanie anegdotycznych historyjek pod każdą współczesną fanaberię kulturową (np. „mężczyźni wolą blondynki, bo w zaspach śnieżnych łatwiej było je dostrzec”).',
    diagnosticQuestions: [
      'Jakie konkretne dane paleontologiczne, genetyczne lub laboratoryjne mogłyby obalić tę tezę?',
      'Czy autor przedstawił testowalną hipotezę zerową?',
      'Czy cecha nie jest przypadkowym efektem ubocznym (spandrel) innej adaptacji biomechanicznej?'
    ],
    practicalExample: 'Hipoteza Bakera o „plemnikach kamikadze” brzmiała fascynująco literacko, lecz została bezlitośnie obalona w mikroskopie przez Moore\'a, gdyż autorzy nie potrafili wskazać mechanizmu enzymatycznego.'
  },
  {
    id: 'filter-polygenicity',
    number: 2,
    principleTitle: 'Architektura Poligenowa vs. Mit „Genu na Cechę X”',
    academicStandard: 'Współczesna genetyka ilościowa i wielkie badania asocjacyjne całego genomu (GWAS) dowodzą, że niemal wszystkie cechy psychiczne, inteligencja, orientacja czy zachowania społeczne są determinowane przez tysiące wariantów genetycznych o mikroskopijnym wpływie jednostkowym (polygenicity) w ciągłej interakcji ze środowiskiem (GxE).',
    popularFallacyTrap: 'Sensacyjne nagłówki w mediach: „Naukowcy odkryli gen niewierności / gen mordercy / gen religijności”.',
    diagnosticQuestions: [
      'Czy badanie operuje wskaźnikami poligenowymi (Polygenic Scores — PGS) na próbach rzędu n > 50 000, czy opiera się na przestarzałym badaniu pojedynczego „genu kandydata” (candidate gene) na próbie 40 osób?',
      'Czy uwzględniono wpływ stratyfikacji populacyjnej i czynników socjoekonomicznych?'
    ],
    practicalExample: 'Słynny allel DRD4-7R nie jest „genem ADHD” ani „genem koczownika”, lecz jednym z setek elementów modyfikujących toniczną wrażliwość receptorów dopaminowych.'
  },
  {
    id: 'filter-correlation-causation',
    number: 3,
    principleTitle: 'Korelacja vs. Przyczynowość i Zmienne Zakłócające',
    academicStandard: 'Samo współwystępowanie dwóch zjawisk nie przesądza o relacji przyczynowo-skutkowej. W badaniach bio-społecznych konieczne jest stosowanie randomizacji mendlowskiej (Mendelian Randomization), badań bliźniąt rozdzielonych w dzieciństwie lub eksperymentów naturalnych do kontroli ukrytych zmiennych zakłócających (plejotropia horyzontalna).',
    popularFallacyTrap: 'Wnioskowanie, że skoro osoby o wysokim statusie częściej piją wino i mają niższy poziom cholesterolu, to picie wina ewolucyjnie przedłuża życie (błąd pominięcia zamożności i diety ogólnej).',
    diagnosticQuestions: [
      'Czy autorzy kontrolowali status socjoekonomiczny, wykształcenie i pochodzenie etniczne badanych?',
      'Czy zastosowano metody wnioskowania przyczynowego (np. randomizację mendlowską)?'
    ],
    practicalExample: 'Korelacja między długością edukacji a niższą dzietnością wynika z kulturowego odraczania porodu, a nie z biologicznego wpływu czytania książek na bezpłodność jajników.'
  },
  {
    id: 'filter-weird-bias',
    number: 4,
    principleTitle: 'Uniwersalizm Ewolucyjny vs. Skrzywienie Prób WEIRD',
    academicStandard: 'Większość publikacji w psychologii XX wieku opierała się na próbach studentów z zachodnich uniwersytetów (WEIRD: Western, Educated, Industrialized, Rich, Democratic). Joseph Henrich i współpracownicy udowodnili, że społeczności WEIRD stanowią skrajny biegun na mapie różnorodności psychologicznej globu.',
    popularFallacyTrap: 'Ogłaszanie, że jakaś preferencja zachowania zauważona u 19-letnich studentów psychologii w Kalifornii jest „uniwersalną adaptacją gatunku ludzkiego ukształtowaną w plejstocenie”.',
    diagnosticQuestions: [
      'Czy hipoteza została przetestowana w małych społecznościach tradycyjnych, u łowców-zbieraczy i poza kręgiem cywilizacji zachodniej?',
      'Czy wyniki replikują się na różnych kontynentach?'
    ],
    practicalExample: 'Gra w Ultimatum: studenci w USA odrzucają oferty poniżej 40% puli jako niesprawiedliwe; farmerzy Machiguenga w Peru akceptują niemal każdą ofertę powyżej zera bez poczucia urazy.'
  },
  {
    id: 'filter-teleology',
    number: 5,
    principleTitle: 'Brak Teleologii: Ewolucja Nie Ma Celu Ani „Kierunku Postępu”',
    academicStandard: 'Dobór naturalny to ślepy, algorytmiczny proces lokalnej optymalizacji przeżywalności genów w danym środowisku tu i teraz. Ewolucja nie zmierza do żadnego „nadczłowieka”, nie dąży do większej złożoności, inteligencji ani dobra moralnego. Zmieniają się jedynie nisze selekcyjne.',
    popularFallacyTrap: 'Mówienie, że „człowiek jest szczytem ewolucji” albo że „ewolucja stworzyła cechę X PO TO, aby gatunek mógł osiągnąć wyższy poziom rozwoju”.',
    diagnosticQuestions: [
      'Czy język wypowiedzi nie przypisuje ewolucji świadomych intencji, planów lub dążenia do dobra gatunku?',
      'Czy autor pamięta, że dobór działa na poziomie genów i osobników, a nie na „dobro całego ekosystemu”?'
    ],
    practicalExample: 'Pojawienie się karłowatego Homo floresiensis na wyspie Flores o mózgu wielkości szympansa nie było „regresem ewolucyjnym”, lecz bezbłędną adaptacją do ograniczonej bazy kalorycznej wyspy.'
  },
  {
    id: 'filter-is-ought',
    number: 6,
    principleTitle: 'Błąd Naturalistyczny (Is–Ought Fallacy): To, co Jest, Nie Stanowi Tego, co Powinno Być',
    academicStandard: 'Zasada sformułowana przez Davida Hume\'a i G.E. Moore\'a: z faktu biologicznego (deskrypcja: jak natura działa) nie wolno wyprowadzać wniosków etycznych (normatywność: co jest dobre i pożądane). Fakt, że jakaś cecha (np. ksenofobia, agresja koalicyjna, niewierność) była ewolucyjnie adaptacyjna w plejstocenie, nie oznacza, że jest moralnie dobra, usprawiedliwiona ani nieuchronna dziś.',
    popularFallacyTrap: 'Usprawiedliwianie przemocy domowej, zdrad czy dyskryminacji słowami: „To leży w ludzkiej biologii, więc musimy to zaakceptować”.',
    diagnosticQuestions: [
      'Czy autor wyraźnie rozdziela opis mechanizmu ewolucyjnego od jego moralnej oceny?',
      'Czy nie próbuje uzasadniać niesprawiedliwości społecznych rzekomym „porządkiem naturalnym”?'
    ],
    practicalExample: 'Odkrycie podłoża Efektu Kopciuszka (wyższego ryzyka przemocy ze strony rodziców przybranych) służy lepszej ochronie dzieci w systemie opieki, a nie usprawiedliwianiu przemocy w sądzie.'
  }
];
