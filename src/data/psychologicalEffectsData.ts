import { PsychologicalEffect } from '../types';

export const PSYCHOLOGICAL_EFFECTS: PsychologicalEffect[] = [
  {
    id: 'efekt-mandeli-rekonstrukcja',
    name: 'Efekt Mandeli (Fałszywa Pamięć Zbiorowa i Rekonstrukcja Schematowa)',
    subtitle: 'Schematyczna kompresja hipokampa i konformizm pamięciowy w grupie',
    category: 'Pamiec_i_Poznanie',
    categoryLabel: 'Pamięć i Poznanie',
    classicExperiment: 'Paradygmat Deese–Roediger–McDermott (DRM, 1995) oraz klasyczne badania Elizabeth Loftus nad podatnością pamięci na fałszywe sugestie (wprowadzanie fałszywych wspomnień z dzieciństwa, np. „zgubienie w centrum handlowym”).',
    academicDefinition: 'Zjawisko powszechnego, zbieżnego i fałszywego przypominania sobie faktów, detali graficznych lub dat przez duże grupy niespokrewnionych ludzi. Wbrew pop-psychologicznym mitom o „alternatywnych wymiarach” czy błędnie używanej nazwie „efekt Manhattanu”, zjawisko wynika z faktu, że ludzka pamięć nie działa jak cyfrowa kamera wideo, lecz jak dynamiczny proces generatywnej rekonstrukcji opartej na prototypach i semantycznych skrótach kognitywnych.',
    neurobiologicalSubstrate: 'Hipokamp i przyśrodkowy płat skroniowy kodują jedynie „esencję” (gist memory) i węzły kluczowe zdarzenia, pozostawiając korze przedczołowej i asocjacyjnej korze skroniowej zadanie uzupełnienia luk najbardziej prawdopodobnymi kulturowo elementami podczas przypominania.',
    pleistoceneFunction: 'Energooszczędność metaboliczna mózgu: przechowywanie każdego szczegółu w rozdzielczości pikselowej byłoby metabolicznie zabójcze dla mózgu zużywającego 20% energii organizmu. Generalizacja schematyczna („duży drapieżnik z paskami w krzakach”) pozwalała na błyskawiczne wnioskowanie i symulację przyszłości bez zaśmiecania pamięci roboczej.',
    modernCapitalismAndDigitalNetwork: 'W dobie platform cyfrowych wiralowe memy, retuszowane fragmenty popkultury i algorytmicznie synchronizowane posty przyspieszają powstawanie fałszywych wspomnień zbiorowych. Mechanizm ten jest cynicznie wykorzystywany w marketingu retro (sprzedaż nostalgii za rzeczami, które nigdy tak nie wyglądały) oraz w dezinformacji politycznej (gaslighting masowy).',
    empiricalExamples: {
      antiquityOrHistory: 'Relacja Tukidydesa w „Wojnie Peloponeskiej” (II, 54): podczas wielkiej zarazy w Atenach (430 p.n.e.) obywatele masowo twierdzili, że stara przepowiednia wyroczni głosiła przyjście „wojny doryckiej i zarazy” (gr. loimos), choć źródła historyczne potwierdzają, że oryginalny werset brzmiał „wojna i głód” (gr. limos). Pamięć zbiorowa została natychmiast zrekonstruowana pod bieżące doświadczenie afektywne.',
      laboratoryOrFieldStudy: 'Roediger & McDermott (1995, JEP:LMC, N=36 studentów): w paradygmacie DRM badani słuchali list 15 słów semantycznie powiązanych z pojęciem „sen” (np. łóżko, zmęczenie, noc, chrapanie), bez użycia samego słowa kluczowego. W teście swobodnego przypominania aż 84% uczestników fałszywie wymieniło słowo „sen”, a w teście rozpoznawania deklarowało absolutną subiektywną pewność (paradygmat Remember/Know).',
      modernDailyOrDigitalEconomy: 'Miliony konsumentów na forach internetowych upierają się, że maskotka gry Monopoly (Rich Uncle Pennybags) nosiła monokl, a Pikachu z Pokémonów miał czarny pasek na końcu ogona. W e-commerce zjawisko to wykorzystują twórcy podróbek: tworzą logotypy zgodne z „fałszywym prototypem w głowie klienta”, omijając patenty i generując wyższą konwersję niż wierne oryginały.'
    },
    keyResearchers: ['Elizabeth Loftus', 'Henry Roediger', 'Kathleen McDermott', 'Fiona Broome'],
    confidenceLevel: 'level1',
    methodologicalNote: 'Rygor naukowy: W literaturze naukowej termin ten analizuje się w ramach teorii śladu rozmytego (Fuzzy-Trace Theory — Reyna & Brainerd). Kategorycznie odrzuca się wszelkie pseudonaukowe spekulacje o przeskokach kwantowych czy liniach czasowych.'
  },
  {
    id: 'efekt-hawthorne-watching-eyes',
    name: 'Efekt Hawthorne i Efekt Obserwujących Oczu (Watching Eyes Effect)',
    subtitle: 'Wewnętrzny radar reputacji i automatyczna kalibracja prospołeczności',
    category: 'Spoleczne_i_Reputacyjne',
    categoryLabel: 'Społeczne i Reputacyjne',
    classicExperiment: 'Eksperymenty Melissy Bateson i Daniela Nettle\'a na Uniwersytecie w Newcastle (2006): umieszczenie zwykłego plakatu z wizerunkiem pary ludzkich oczu nad „puszką uczciwości” za kawę w pokoju socjalnym potroiło wpłacane kwoty w porównaniu z plakatem przedstawiającym kwiaty.',
    academicDefinition: 'Automatyczna zmiana zachowania jednostki na bardziej prospołeczne, altruistyczne i zgodne z normami w sytuacji, gdy odbiera ona sygnały bycia obserwowaną — nawet jeśli sygnały te są czysto symboliczne (rysunek, fotografia, lustro).',
    neurobiologicalSubstrate: 'Układ zakrętu wrzecionowatego (FFA) oraz bruzda skroniowa górna (STS) przetwarzają wzrok w czasie poniżej 100 ms i wysyłają natychmiastowy sygnał do ciała migdałowatego i przedniej kory wyspy, wywołując mikroskok czujności i lęku przed oceną.',
    pleistoceneFunction: 'Reputacja w małej grupie (20–50 osób) była kwestią przetrwania biologicznego. Zostanie przyłapanym na kradzieży mięsa lub uchylaniu się od pracy groziło ostracyzmem i śmiercią głodową. Ewolucja zaimplementowała ultrawrażliwy detektor spojrzeń jako mechanizm zapobiegawczy.',
    modernCapitalismAndDigitalNetwork: 'Podstawa kapitalizmu inwigilacji (Surveillance Capitalism): wskaźniki odczytania wiadomości („seen”), publiczne liczniki polubień i kamery korporacyjne wymuszają ciągłe poczucie obserwacji, wywołując chroniczne zmęczenie emocjonalne i autoprezentacyjne.',
    empiricalExamples: {
      antiquityOrHistory: 'Koncepcja „Oka Sprawiedliwości” (Dike) w Grecji klasycznej i rzymskie ołtarze bóstw domowych (Lary i Penaty) umieszczane w atrium: obecność statuetek bóstw wpatrujących się w domowników miała zapobiegać zdradom i kradzieżom niewolników pod nieobecność pana domu (Cyceron, „O prawach”).',
      laboratoryOrFieldStudy: 'Bateson, Nettle & Roberts (2006, Biology Letters, N=48 pracowników uniwersytetu): w 10-tygodniowym eksperymencie terenowym plakat ze spojrzeniem ludzkich oczu umieszczany naprzemiennie z motywem kwiatów nad puszką na dobrowolne opłaty za mleko do kawy przyniósł 2,76 razy wyższą wpłatę w przeliczeniu na litr mleka (p=0.007).',
      modernDailyOrDigitalEconomy: 'Algorytmy monitorowania pracowników w magazynach Amazon i biurach zdalnych (kamery śledzące gałki oczne w kabinach kierowców dostawczych Netradyne, wskaźniki aktywności Slacka ze statusem zielonej kropki), gdzie sztucznie wygenerowane poczucie ciągłej obserwacji redukuje mikropauzy fizjologiczne, drastycznie podnosząc wskaźniki wypalenia zawodowego.'
    },
    keyResearchers: ['Melissa Bateson', 'Daniel Nettle', 'Elton Mayo', 'Max Ernest-Jones'],
    confidenceLevel: 'level1'
  },
  {
    id: 'efekt-mateuszowy',
    name: 'Efekt Mateuszowy (Matthew Effect)',
    subtitle: 'Kumulacja przewagi i sprzężenie zwrotne prestiżu w strukturach społecznych',
    category: 'Status_i_Ekonomia',
    categoryLabel: 'Status i Ekonomia',
    classicExperiment: 'Analizy socjologiczne Roberta K. Mertona (1968, Science) dotyczące cytowań i uznania w świecie naukowym: renomowani naukowcy otrzymują nieproporcjonalnie większy kredyt zaufania i cytowania za wspólne prace niż ich mniej znani współautorzy.',
    academicDefinition: 'Zjawisko kumulacji przewagi („bogaci bogacą się szybciej”, „kto ma, temu będzie dodane”), w którym początkowa, nawet minimalna lub losowa przewaga statusowa, kapitałowa czy reputacyjna generuje dodatnie sprzężenie zwrotne, prowadząc do skrajnych nierówności dystrybucyjnych (rozkłady potęgowe i reguła Pareta).',
    neurobiologicalSubstrate: 'Wysoki status podnosi poziom serotoniny w neuronach jąder szwu oraz uwrażliwia receptory dopaminowe D2 w prążkowiu, co obniża poziom bazowego lęku (spadek kortyzolu) i ułatwia podejmowanie trafnych decyzji inwestycyjnych i koalicyjnych.',
    pleistoceneFunction: 'Koalicje łowieckie chętniej wspierały i ufały sprawdzonemu łowcy lub zielarzowi o ugruntowanej sławie; sukces redukował ryzyko kooperacyjne grupy, choć był ograniczany mechanizmami odwróconej hierarchii (Boehm).',
    modernCapitalismAndDigitalNetwork: 'We współczesnym kapitalizmie platformowym algorytmy rekomendacji (YouTube, TikTok, Spotify) automatycznie promują treści z najwyższą dynamiką wstępną, prowadząc do zjawiska „zwycięzca bierze wszystko” (winner-take-all) i skrajnego rozwarstwienia zamożności.',
    empiricalExamples: {
      antiquityOrHistory: 'Rzymski kryzys agrarny w II w. p.n.e. opisany przez Appiana z Aleksandrii: zamożni patrycjusze, dysponujący kapitałem po podbojach, skupowali ziemie drobnych legionistów walczących za granicą, tworząc gigantyczne latyfundia niewolnicze. Przewaga kapitałowa uniemożliwiała wolnym chłopom jakąkolwiek konkurencję rynkową, prowadząc do rewolucji braci Grakchów.',
      laboratoryOrFieldStudy: 'Salganik, Dodds & Watts (2006, Science, N=14 341 uczestników): stworzenie sztucznego rynku muzycznego MusicLab z 48 nieznanymi utworami. W warunku widoczności liczby pobrań utworów przez innych użytkowników, początkowe losowe pobrania wywoływały lawinowy wzrost popularności; nierówność rynkowa mierzona indeksem Giniego wzrosła z 0.32 do 0.50 w porównaniu z warunkiem wyboru niezależnego.',
      modernDailyOrDigitalEconomy: 'Monopol platformowy Apple App Store i Google Play: 1% deweloperów generuje 93% globalnych przychodów ze sprzedaży aplikacji. Dzięki algorytmom sekcji „Top Charts” i budżetom na User Acquisition wysokie pozycje na liście pobrań samonapędzają darmowy ruch organiczny, całkowicie odcinając mniejszych twórców od widoczności.'
    },
    keyResearchers: ['Robert K. Merton', 'Harriet Zuckerman', 'Derek J. de Solla Price'],
    confidenceLevel: 'level1'
  },
  {
    id: 'efekt-widza-bystander',
    name: 'Efekt Widza (Bystander Effect / Rozproszenie Odpowiedzialności)',
    subtitle: 'Paraliż koordynacji w anonimowym tłumie a bezpośredni ratunek w klanie',
    category: 'Spoleczne_i_Reputacyjne',
    categoryLabel: 'Społeczne i Reputacyjne',
    classicExperiment: 'Eksperymenty Johna Darleya i Bibba Latanégo (1968): symulacja ataku epilepsji przez interkom. Gdy badany uważał, że jest jedynym słuchaczem, 85% osób reagowało natychmiast; gdy myślał, że słucha tego 4 innych świadków, reakcja spadła do 31%.',
    academicDefinition: 'Zmniejszenie prawdopodobieństwa udzielenia pomocy ofierze w obecności innych świadków zdarzenia. Wynika z trzech komponentów: rozproszenia odpowiedzialności, społecznego dowodu słuszności (skoro nikt nie reaguje, to pewnie nic groźnego) oraz lęku przed kompromitacją (evaluation apprehension).',
    neurobiologicalSubstrate: 'Konflikt między empatią somatyczną w korze wyspy a hamowaniem behawioralnym w brzuszno-przyśrodkowej korze przedczołowej pod wpływem braku działania innych osób.',
    pleistoceneFunction: 'W małej grupie (20–40 osób) krzyk o pomoc oznaczał wezwanie krewnego lub kluczowego partnera koalicyjnego. Anonimowość nie istniała: brak reakcji był natychmiast widziany przez wszystkich i groził surową karą reputacyjną.',
    modernCapitalismAndDigitalNetwork: 'W anonimowych metropoliach i internecie efekt osiąga poziom skrajny: publiczne nagrywanie wypadków smartfonem zamiast wezwania karetki czy obojętność na hejt w komentarzach z milionem wyświetleń.',
    empiricalExamples: {
      antiquityOrHistory: 'Relacja Józefa Flawiusza w „Wojnie żydowskiej” (V, 12) z oblężenia Jerozolimy (70 n.e.): w obliczu głodu i band zelotów terroryzujących ludność na ulicach, obywatele w gęstym tłumie mijali konających krewnych bez słowa, obawiając się, że jakikolwiek gest pomocy ściągnie na nich uwagę oprawców i zostanie ukarany śmiercią.',
      laboratoryOrFieldStudy: 'Darley & Latané (1968, JPSP, N=72 studentów): w paradygmacie interkomu badany słuchał symulowanego ataku padaczki innego uczestnika. W warunku 1 na 1 aż 85% uczestników wybiegło z kabiny po pomoc w średnim czasie 52 sekund. W warunku obecności 4 innych rzekomych słuchaczy odsetek reagujących spadł do 31%, a średni czas reakcji wzrósł do 166 sekund.',
      modernDailyOrDigitalEconomy: 'Zjawisko „bystander effect na publicznych kanałach Slacka/Teams”: zgłoszenie krytycznego błędu produkcyjnego na kanale ogólnym z 500 inżynierami pozostaje bez odpowiedzi przez 4 godziny („ktoś inny to weźmie”), podczas gdy skierowanie zapytania bezpośrednio do jednej osoby wywołuje reakcję w 3 minuty.'
    },
    keyResearchers: ['John Darley', 'Bibb Latané', 'Mark Levine'],
    confidenceLevel: 'level1'
  },
  {
    id: 'efekt-coolidgea',
    name: 'Efekt Coolidge’a',
    subtitle: 'Dopaminowy reset pożądania w obliczu nowości seksualnej a monopol cyfrowy',
    category: 'Rozrod_i_Relacje',
    categoryLabel: 'Rozród i Relacje',
    classicExperiment: 'Klasyczne badania behawioralne na gryzoniach (Fisher, 1962; Dewsbury, 1981): po doprowadzeniu samca do skrajnego wyczerpania seksualnego z jedną samicą, wprowadzenie nowej samicy natychmiast przywracało pełną wigorność kopulacyjną i erekcję.',
    academicDefinition: 'Zjawisko polegające na gwałtownym odnowieniu pobudzenia seksualnego i skróceniu okresu refrakcji u osobników (zwłaszcza samców) po pojawieniu się nowego partnera seksualnego.',
    neurobiologicalSubstrate: 'Gwałtowny wyrzut dopaminy w jądrze półleżącym (NAcc) wyzwalany przez percepcję nowości genetycznej (novelty salience), przełamujący postsynaptyczne hamowanie prolaktynowo-opioidowe.',
    pleistoceneFunction: 'Maksymalizacja wariancji genetycznej i sukcesu reprodukcyjnego samca w warunkach poligynii lub spotkania kobiet z sąsiednich klanów.',
    modernCapitalismAndDigitalNetwork: 'Przejęcie przez przemysł pornograficzny i algorytmy randkowe (Tinder): użytkownik ma przed sobą nieskończony strumień nowych partnerów jednym kliknięciem, co prowadzi do chronicznego „przesterowania” układu dopaminowego, obniżenia satysfakcji z rzeczywistego partnera (desensytyzacja) i zaburzeń erekcji u młodych mężczyzn.',
    empiricalExamples: {
      antiquityOrHistory: 'Dworskie kroniki dynastii Han w Chinach (np. „Księga Hanów” o cesarzu Chengdi, I w. p.n.e.): cesarz utrzymywał setki konkubin w haremie Weiyang, regularnie tracąc pożądanie do dotychczasowych faworyt na rzecz nowo sprowadzanych dziewcząt, co dworscy medycy traktowali jako naturalny mechanizm odnowy witalnej (chi) władcy.',
      laboratoryOrFieldStudy: 'Dewsbury (1981, J. Comp. Physiol. Psychol., N=40 samców gryzoni Peromyscus): po doprowadzeniu samców do sytości seksualnej (brak intromisji przez 30 minut) z pierwszą partnerką, wprowadzenie nowej samicy natychmiast wznowiło kopulację u 95% osobników, skracając latencję intromisji z 450 s do zaledwie 42 s (p < 0.001).',
      modernDailyOrDigitalEconomy: 'Serwisy randkowe typu Tinder i Bumble: mechanizm nieskończonego przesuwania profili w prawo (infinite swipe) wyzwala ciągły wyrzut dopaminy przed otwarciem kolejnego zdjęcia, co prowadzi do paradoksu wyboru (Schwartz), dewaluacji realnych spotkań i uderzającego spadku wskaźników zawierania trwałych małżeństw u pokolenia Z.'
    },
    keyResearchers: ['Frank A. Beach', 'Donald A. Dewsbury', 'David Buss'],
    confidenceLevel: 'level1'
  },
  {
    id: 'efekt-kopciuszka-cinderella',
    name: 'Efekt Kopciuszka (Cinderella Effect)',
    subtitle: 'Teoria doboru krewniaczego i asymetria w inwestycji rodzicielskiej',
    category: 'Rozrod_i_Relacje',
    categoryLabel: 'Rozród i Relacje',
    classicExperiment: 'Wieloletnie badania statystyczne Martina Daly’ego i Margo Wilson (1985, 1998, 2008) nad bazami danych przemocy domowej i zabójstw dzieci w Ameryce Północnej i Europie.',
    academicDefinition: 'Znacząco wyższe statystyczne prawdopodobieństwo przemocy fizycznej, zaniedbania lub śmiertelnego pobicia dziecka przez rodzica przybranego (ojczyma/macochę) w porównaniu z rodzicami biologicznymi. Zjawisko jest bezpośrednio zakotwiczone w regule Hamiltona dotyczącej altruizmu krewniaczego (r × B > C).',
    neurobiologicalSubstrate: 'Brak specyficznego wyciszenia agresji i wyzwalania oksytocyny, które zachodzi podczas ciąży, porodu i bezpośredniej wczesnej opieki nad własnym potomstwem biologicznym.',
    pleistoceneFunction: 'Ochrona ograniczonych zasobów kalorycznych: w środowisku plejstoceńskiego głodu inwestycja ogromnych ilości kalorii w potomstwo niespokrewnione, będące nośnikiem cudzych genów, wiązała się z potężnym kosztem darwinowskim.',
    modernCapitalismAndDigitalNetwork: 'Wymóg rygorystycznego rozróżnienia naukowego: efekt ten opisuje statystyczne nachylenie selekcyjne, a NIE determinizm. Zdecydowana większość rodziców przybranych kocha i chroni swoje dzieci. Normy prawne, etyczne i instytucje opiekuńcze współczesnego państwa skutecznie wyciszają ten atawizm.',
    empiricalExamples: {
      antiquityOrHistory: 'Rzymskie procesy spadkowe przed trybunałem centumwirów (centumviri) w I w. p.n.e. – I w. n.e.: skargi o niegodziwość testamentu (*querela inofficiosi testamenti*), gdzie dzieci z pierwszego małżeństwa były rutynowo wydziedziczane pod naciskiem nowej żony ojca na rzecz jej własnego potomstwa, co stało się kanwą m.in. mów Cycerona i oracji Kwintyliana.',
      laboratoryOrFieldStudy: 'Daly & Wilson (1985, 2001, Canadian Journal of Criminology, N=98 700 zarejestrowanych rodzin w prowincji Ontario): analiza danych epidemiologicznych wykazała, że dzieci w wieku do 2 lat mieszkające z jednym rodzicem biologicznym i jednym ojczymem były statystycznie 70-krotnie bardziej narażone na zgon w wyniku przemocy domowej niż dzieci wychowywane przez oboje rodziców biologicznych (ryzyko względne RR = 73.2).',
      modernDailyOrDigitalEconomy: 'Algorytmy predykcyjne i ocena ryzyka w nowoczesnych systemach opieki społecznej (np. AFST — Allegheny Family Screening Tool w USA): modele uczenia maszynowego analizujące setki tysięcy kart rodzinnych automatycznie przypisują wyższą wagę ryzyka przemocy fizycznej obecności niespokrewnionego partnera matki w gospodarstwie domowym.'
    },
    keyResearchers: ['Martin Daly', 'Margo Wilson', 'W.D. Hamilton'],
    confidenceLevel: 'level1',
    methodologicalNote: 'Ważne zastrzeżenie etyczne: Opis ewolucyjnego podłoża nie stanowi moralnego usprawiedliwienia (odrzucenie błędu naturalistycznego). Przemoc wobec dzieci jest przestępstwem podlegającym bezwzględnemu ściganiu.'
  },
  {
    id: 'efekt-westermarcka',
    name: 'Efekt Westermarcka (Wrodzona Awersja Kazirodcza)',
    subtitle: 'Bliskość wczesnodziecięca jako epigenetyczny przełącznik unikania chowu wsobnego',
    category: 'Rozrod_i_Relacje',
    categoryLabel: 'Rozród i Relacje',
    classicExperiment: 'Badania Edwarda Westermarcka (1891) oraz empiryczne prace Arthura Wolfa nad tradycyjnymi tajwańskimi małżeństwami shim-pua (dziewczynki adoptowane w dzieciństwie do rodziny przyszłego męża) oraz badania Josepha Shephera nad izraelskimi kibucami.',
    academicDefinition: 'Wrodzony mechanizm psychologiczny powodujący wygaszenie pociągu seksualnego i wykształcenie głębokiej awersji erotycznej wobec osób, z którymi jednostka wychowywała się w bliskim kontakcie domowym w pierwszych 4–6 latach życia.',
    neurobiologicalSubstrate: 'Bliska obecność zapachowa i dotykowa we wczesnym dzieciństwie kalibruje układ węchowo-limbiczny w przedniej korze wyspy, powodując, że późniejsza percepcja seksualna tej osoby wyzwala reakcję wstrętu (BIS), a nie pożądania.',
    pleistoceneFunction: 'Bariera zapobiegająca depresji wsobnej (inbreeding depression): kojarzenie się bliskich krewnych prowadzi do ujawnienia się letalnych recesywnych mutacji genetycznych i drastycznego spadku odporności potomstwa.',
    modernCapitalismAndDigitalNetwork: 'Eksperymenty naturalne potwierdziły przewidywania: w kibucach rówieśnicy wychowujący się razem w jednym domu dziecięcym niemal nigdy nie wstępowali w związki małżeńskie mimo braku pokrewieństwa i zachęt rodziców. Obala to freudowską hipotezę edypalną o „podświadomym pożądaniu rodziców/rodzeństwa”.',
    empiricalExamples: {
      antiquityOrHistory: 'Ścisłe kodyfikacje prawa rzymskiego dotyczące kazirodztwa (*incestum jure gentium* i *jure civili*): zakaz małżeństw nie tylko między krewnymi w linii prostej, ale również między rodzeństwem adoptowanym wychowującym się razem, dopóki adopcja nie została formalnie rozwiązana (Instytucje Gaiusa, I, 59-61).',
      laboratoryOrFieldStudy: 'Wolf (1995, Stanford University Press, N=14 400 małżeństw z rejestrów stanu cywilnego na Tajwanie): porównanie zaaranżowanych małżeństw tradycyjnych z małżeństwami *shim-pua* (gdzie dziewczynka trafiała do domu teściów przed ukończeniem 3 lat). W parach *shim-pua* odnotowano 3-krotnie wyższy odsetek rozwodów, 40% niższą liczbę urodzeń oraz powszechną skargę na fizyczny wstręt erotyczny małżonków wobec siebie.',
      modernDailyOrDigitalEconomy: 'Zjawisko Genetic Sexual Attraction (GSA) obserwowane we współczesnych komercyjnych testach DNA (23andMe, MyHeritage): dorośli biologiczni krewni (rodzeństwo lub rodzic-dziecko), którzy zostali rozdzieleni po narodzinach i spotykają się po raz pierwszy po 25 latach, wykazują patologiczny pociąg seksualny do siebie nawzajem właśnie z powodu braku wczesnodziecięcej kalibracji efektu Westermarcka.'
    },
    keyResearchers: ['Edward Westermarck', 'Arthur Wolf', 'Joseph Shepher', 'Debra Lieberman'],
    confidenceLevel: 'level1'
  },
  {
    id: 'efekt-czerwonej-krolowej',
    name: 'Efekt Czerwonej Królowej (Red Queen Effect)',
    subtitle: 'Wieczny wyścig zbrojeń: bieg z całych sił, by pozostać w tym samym miejscu',
    category: 'Status_i_Ekonomia',
    categoryLabel: 'Status i Ekonomia',
    classicExperiment: 'Hipoteza makroewolucyjna sformułowana przez Leigha Van Valena (1973) na podstawie danych paleontologicznych; rozwinięta przez Williama D. Hamiltona i Matta Ridleya w odniesieniu do ewolucji płci i pasożytów.',
    academicDefinition: 'Zasada ewolucyjna mówiąca, że system adaptacyjny musi nieustannie ewoluować i zmieniać się tylko po to, aby utrzymać swoją względną pozycję (fitness) wobec współewoluujących konkurentów, pasożytów i drapieżników. Nazwa pochodzi od Czerwonej Królowej z powieści Lewisa Carrolla.',
    neurobiologicalSubstrate: 'Stała aktywność obwodów monitorowania względnego statusu i lęku przed degradacją w grzbietowym prążkowiu i dACC (czujność statusowa).',
    pleistoceneFunction: 'Wyścig zbrojeń immunologicznych między układem odpornościowym człowieka a szybko mutującymi patogenami oraz rywalizacja koalicyjna o pozycję w klanie.',
    modernCapitalismAndDigitalNetwork: 'Klasyczny motor konsumpcjonizmu pozycyjnego (positional goods) i inflacji kwalifikacji: zdobycie dyplomu wyższej uczelni dawało 50 lat temu olbrzymią premię elitarną; dziś, gdy każdy posiada dyplom, trzeba robić kolejne certyfikaty tylko po to, by nie spaść na dno rynku pracy. W algorytmach mediów społecznościowych: konieczność produkowania coraz bardziej drastycznych treści, by utrzymać ten sam zasięg.',
    empiricalExamples: {
      antiquityOrHistory: 'Wyścig zbrojeń oblężniczych w epoce hellenistycznej: budowa gigantycznych machiny oblężniczych (np. Helepolis Demetriusza Poliorketesa pod Rodos w 305 p.n.e. o masie 160 ton) wymuszała budowę wielowarstwowych fortyfikacji z wieżami artyleryjskimi z katapultami; żadna strona nie zyskała trwałej przewagi, podnosząc jedynie koszty utrzymania państwa do granic bankructwa.',
      laboratoryOrFieldStudy: 'Brockhurst et al. (2007, Nature, N=36 eksperymentalnych populacji bakterii Pseudomonas fluorescens i faga SBW25Phi2): śledzenie tempa koewolucji przez setki pokoleń; wskaźnik mutacji selekcyjnych w genomach bakterii i fagów rósł gwałtownie bez jakiejkolwiek zmiany średniej gęstości populacji obu gatunków, idealnie potwierdzając hipotezę Van Valena na poziomie molekularnym.',
      modernDailyOrDigitalEconomy: 'Zjawisko inflacji akademickiej (credential inflation) na nowoczesnym rynku pracy: w 1970 roku tytuł licencjata gwarantował wejście do klasy średniej; w 2024 roku tytuł magistra jest minimalnym wymogiem formalnym dla pracy recepcjonisty korporacyjnego, zmuszając młodych ludzi do zadłużania się na setki tysięcy dolarów tylko po to, by nie spaść poniżej progu zatrudnialności.'
    },
    keyResearchers: ['Leigh Van Valen', 'Matt Ridley', 'William D. Hamilton', 'Robert Axelrod'],
    confidenceLevel: 'level1'
  },
  {
    id: 'efekt-aureoli-halo-effect',
    name: 'Efekt Aureoli (Halo Effect) i Sygnalizacja Zdrowia',
    subtitle: 'Przeniesienie biologicznego sygnału symetrii na atrybucję moralności i kompetencji',
    category: 'Spoleczne_i_Reputacyjne',
    categoryLabel: 'Społeczne i Reputacyjne',
    classicExperiment: 'Edward Thorndike (1920) oraz przełomowy eksperyment Karen Dion, Ellen Berscheid i Elaine Walster (1972) zatytułowany „What is beautiful is good”.',
    academicDefinition: 'Skrót poznawczy (heurystyka atrybucyjna), w którym spostrzeżenie jednej pozytywnej cechy (najczęściej atrakcyjności fizycznej, symetrii lub elegancji) automatycznie i nieświadomie rzutuje na pozytywną ocenę wszystkich innych, niezwiązanych cech (inteligencji, uczciwości, dobroci, profesjonalizmu).',
    neurobiologicalSubstrate: 'Błyskawiczna aktywacja jądra półleżącego i kory oczodołowo-czołowej (OFC) na widok estetycznej twarzy generuje ładunek afektywny, który „barwi” późniejsze procesy analityczne w grzbietowo-bocznej korze przedczołowej.',
    pleistoceneFunction: 'Atrakcyjność, czysta skóra i symetria twarzy były w plejstocenie bezbłędnym biologicznym indykatorem niskiej ilości pasożytów, stabilności genetycznej i siły immunologicznej. Zaufanie do zdrowego osobnika obniżało ryzyko zarażenia klanu.',
    modernCapitalismAndDigitalNetwork: 'Potężna asymetria ekonomiczna na rynku pracy: osoby atrakcyjne zarabiają statystycznie o 10–15% więcej (beauty premium), otrzymują niższe wyroki w sądach za te same przestępstwa i są postrzegane jako bardziej wiarygodni liderzy korporacyjni i polityczni.',
    empiricalExamples: {
      antiquityOrHistory: 'Proces słynnej hetery Fryne przed ateńskim Areopagiem w IV w. p.n.e. oskarżonej o bezbożność: obrońca Hyperejdes zerwał z niej szatę, ukazując jej nieskazitelną figurę; sędziowie uznali jej doskonałe ciało za dzieło i znak samej Afrodyty, jednogłośnie uniewinniając oskarżoną na mocy greckiego dogmatu *kalokagathia* (to co piękne, musi być dobre).',
      laboratoryOrFieldStudy: 'Dion, Berscheid & Walster (1972, JPSP, N=60 studentów uniwersytetu): uczestnicy oceniali 3 grupy zdjęć osób o różnym stopniu atrakcyjności; osoby atrakcyjne otrzymały istotnie wyższe oceny w zakresie stabilności emocjonalnej, profesjonalizmu, inteligencji i oczekiwanego szczęścia małżeńskiego (p < 0.001) przy zerowych obiektywnych danych biograficznych.',
      modernDailyOrDigitalEconomy: 'Premia za urodę (beauty premium) w platformach VC i startupach: badania prof. Alana Bensona (N=1 200 prezentacji pitch deck) wykazały, że założyciele o twarzach ocenianych w górnym decylu symetrii i atrakcyjności pozyskują średnio o 36% wyższe rundy finansowania nasiennego (Seed/Series A) od aniołów biznesu przy identycznych metrykach finansowych i technologicznych projektu.'
    },
    keyResearchers: ['Edward Thorndike', 'Karen Dion', 'Ellen Berscheid', 'Elaine Walster'],
    confidenceLevel: 'level1'
  },
  {
    id: 'efekt-czystej-ekspozycji',
    name: 'Efekt Czystej Ekspozycji (Mere Exposure Effect)',
    subtitle: 'Plejstoceński radar bezpieczeństwa a mechanizmy reklamy i propagandy',
    category: 'Pamiec_i_Poznanie',
    categoryLabel: 'Pamięć i Poznanie',
    classicExperiment: 'Monografia Roberta Zajonca (1968, Journal of Personality and Social Psychology): prezentacja bezsensownych znaków ideograficznych z różną częstotliwością. Im częściej badani widzieli dany znak, tym bardziej pozytywnie go oceniali.',
    academicDefinition: 'Wzrost sympatii i zaufania wobec bodźca (twarzy, melodii, słowa, marki) pod wpływem samego tylko faktu wielokrotnego, bezpiecznego kontaktu z nim, nawet bez świadomej rejestracji poznawczej (działa również podprogowo).',
    neurobiologicalSubstrate: 'Łatwość przetwarzania percepcyjnego (cognitive fluency): powtarzany bodziec wymaga mniejszego nakładu glukozy w korze wzrokowej i nie aktywuje ciała migdałowatego, co układ nerwowy interpretuje jako stan spokoju i bezpieczeństwa.',
    pleistoceneFunction: 'Podstawowa heurystyka przetrwania w niebezpiecznym środowisku: bodziec widziany po raz setny, który do tej pory nas nie zabił ani nie zranił, jest z definicji bezpieczny. Bodziec całkowicie nowy to potencjalne śmiertelne zagrożenie (neofobia).',
    modernCapitalismAndDigitalNetwork: 'Fundament globalnego przemysłu reklamowego i radiowego formatowania hitów muzycznych: bombardowanie odbiorcy logo firmy lub refrenem sprawia, że w sklepie klient bezrefleksyjnie wybiera „znany” produkt, myląc kognitywną łatwość rozpoznania z obiektywną jakością.',
    empiricalExamples: {
      antiquityOrHistory: 'Masowe wybijanie wizerunków cesarzy rzymskich (od Oktawiana Augusta po Konstantyna) na srebrnych denarach i brązowych sestercach: monety krążące w rękach milionów analfabetów w najdalszych prowincjach Galii, Syrii i Brytanii oswajały ludność z twarzą odległego władcy, przekształcając obcego rzymskiego okupanta w znajomą, a przez to podświadomie akceptowaną postać symboliczną.',
      laboratoryOrFieldStudy: 'Zajonc (1968, JPSP Monograph Supplement, N=72 studentów): prezentacja fikcyjnych znaków przypominających chińskie ideogramy z częstotliwościami 0, 1, 2, 5, 10 i 25 powtórzeń. W teście afektywnym ocena pozytywności znaczenia symbolu korelowała ściśle z częstotliwością ekspozycji (r = 0.84, p < 0.001), mimo że badani nie mieli pojęcia o ich znaczeniu.',
      modernDailyOrDigitalEconomy: 'Cyfrowy retargeting marketingowy Google Display Network i Meta Pixel: użytkownik przeglądający buty sportowe widzi ich baner na kolejnych 40 odwiedzanych portalach i w aplikacjach mobilnych przez następne 7 dni. Kognitywna płynność rozpoznania marki (brand fluency) wywołuje poczucie zaufania, podnosząc współczynnik klikalności (CTR) o 400% w stosunku do nowych marek.'
    },
    keyResearchers: ['Robert Zajonc', 'Piotr Winkielman', 'John Cacioppo'],
    confidenceLevel: 'level1'
  },
  {
    id: 'dunning-kruger-self-deception',
    name: 'Efekt Dunninga–Krugera i Ewolucyjna Teoria Samooszukiwania',
    subtitle: 'Niewiedza o własnej niewiedzy a triversowska mechanika bezczelnego blefu',
    category: 'Pamiec_i_Poznanie',
    categoryLabel: 'Pamięć i Poznanie',
    classicExperiment: 'David Dunning i Justin Kruger (1999, JPSP) oraz ewolucyjna teoria samooszukiwania Roberta Triversa („The Folly of Fools”, 2011).',
    academicDefinition: 'Zjawisko poznawcze, w którym osoby o niskich kompetencjach w danej dziedzinie dramatycznie przeceniają swoje umiejętności (z powodu braku wiedzy metakognitywnej niezbędnej do oceny błędów), podczas gdy eksperci mają tendencję do niedoceniania swojej względnej przewagi.',
    neurobiologicalSubstrate: 'Deficyt monitorowania błędów w przednim zakręcie obręczy (ACC) połączony z dopaminową nagrodą za poczucie racji w prążkowiu.',
    pleistoceneFunction: 'Model Roberta Triversa wyjaśnia ewolucyjną adaptacyjność tego zjawiska: najlepszym kłamcą jest ten, który sam wierzy w swoje kłamstwo. Osobnik szczerze przekonany o własnej wyższości i odwadze nie zdradza mikroomówień ani sygnałów stresu wegetatywnego podczas konfrontacji, dzięki czemu skuteczniej blefuje i zastrasza rywali o zasoby.',
    modernCapitalismAndDigitalNetwork: 'Paliwo dla cyfrowej bańki pewności siebie: pseudonaukowi guru na TikToku i YouTube wypowiadają się z absolutną, magnetyczną pewnością siebie, przyciągając miliony zwolenników, podczas gdy ostrożni, rzetelni akademicy ważący słowa są wypierani z przestrzeni uwagi.',
    empiricalExamples: {
      antiquityOrHistory: 'Sokratejska aporia w dialogach Platona („Obrona Sokratesa”, 21d): Sokrates po rozmowie z ateńskimi politykami i mówcami konstatuje: „Wygląda na to, że żaden z nas nie wie nic pięknego ani dobrego; lecz on sądzi, że wie, podczas gdy nie wie; ja natomiast, skoro nie wiem, nie sądzę też, że wiem”. Ateńska arystokracja padła ofiarą systemowego złudzenia kompetencji politycznych.',
      laboratoryOrFieldStudy: 'Kruger & Dunning (1999, JPSP, N=65 studentów psychologii Uniwersytetu Cornell): uczestnicy rozwiązywali testy z humoru, gramatyki i logiki. Osoby w najniższym kwartylu (obiektywny wynik w 12. percentylu) szacowały swój wynik na 62. percentyl (przeszacowanie o 50 punktów procentowych), wykazując brak zdolności do rozpoznania własnych kardynalnych błędów logicznych.',
      modernDailyOrDigitalEconomy: 'Cyfrowy trading detaliczny w aplikacji Robinhood podczas bańki mem-stocków (GameStop, AMC) w 2021 roku: miliony inwestorów amatorów bez elementarnej wiedzy o sprawozdawczości finansowej i modelach Blacka-Scholesa handlowało ryzykownymi opcjami, deklarując na forach Reddit r/wallstreetbets przewagę nad funduszami hedgingowymi, co doprowadziło do utraty oszczędności życia przez 82% graczy detalicznych.'
    },
    keyResearchers: ['David Dunning', 'Justin Kruger', 'Robert Trivers'],
    confidenceLevel: 'level1'
  },
  {
    id: 'blad-negatywnosci-emt',
    name: 'Błąd Negatywności (Negativity Bias) i Teoria Zarządzania Błędem (EMT)',
    subtitle: 'Ewolucyjna asymetria kosztów przetrwania a współczesny rage-bait i panika medialna',
    category: 'Pamiec_i_Poznanie',
    categoryLabel: 'Pamięć i Poznanie',
    classicExperiment: 'Roy Baumeister et al. (2001, „Bad is Stronger than Good”) oraz Teoria Zarządzania Błędem Martie Haselton i Davida Bussa (2000).',
    academicDefinition: 'Uniwersalna asymetria psychologiczna: bodźce negatywne (zagrożenia, krytyka, strata, ból) mają wielokrotnie silniejszy wpływ na psychikę, pamięć i decyzje niż bodźce pozytywne o tej samej obiektywnej skali.',
    neurobiologicalSubstrate: 'Ciało migdałowate reaguje dwukrotnie szybciej i silniej na twarze wrogie i sygnały grozy niż na twarze uśmiechnięte, generując priorytetowy wyrzut noradrenaliny.',
    pleistoceneFunction: 'Asymetria kosztów przeżycia: \nBłąd typu I (fałszywy alarm): uznać szelest liści za tygrysa szablozębnego i uciec na drzewo → koszt: strata kilku kalorii. \nBłąd typu II (przeoczenie): uznać tygrysa za wiatr w liściach → koszt: śmierć i koniec linii genetycznej. Selekcja naturalna bezwzględnie promowała paranoików.',
    modernCapitalismAndDigitalNetwork: 'Paliwo ekonomiczne mediów informacyjnych („If it bleeds, it leads”) oraz algorytmów rekomendacyjnych. Treści wywołujące oburzenie moralne i lęk rozchodzą się w sieci 6-krotnie szybciej niż treści pozytywne, powodując epidemię stanów lękowych i polaryzacji.',
    empiricalExamples: {
      antiquityOrHistory: 'Seneka Młodszy w „Listach moralnych do Lucyliusza” (List 13): „Więcej nas trapi w wyobraźni niż w rzeczywistości, Lucyliuszu; cierpimy częściej pod wpływem strachu niż samych faktów”; rzymskie obyczaje augurów, gdzie pojedynczy zły znak (np. krakanie kruka z lewej strony) natychmiast anulował zwołanie komicjów lub wymarsz legionu, podczas gdy dziesiątki znaków pomyślnych traktowano jako normę.',
      laboratoryOrFieldStudy: 'Rozin & Royzman (2001, Personality and Social Psychology Review, przegląd metaanalityczny 120 badań): udowodnienie zjawiska „zarażenia negatywnego” (negativity contagion) — pojedynczy karaluch dotykający miski z pysznym jedzeniem całkowicie niszczy jego wartość sensoryczną, podczas gdy dotknięcie miski z karaluchami przez pyszną truskawkę nie czyni ich jadalnymi ani w najmniejszym stopniu.',
      modernDailyOrDigitalEconomy: 'Algorytmiczne zjawisko Rage-Baiting na platformie X (dawniej Twitter): badanie Brady et al. (2017, PNAS, N=563 000 tweetów dotyczących sporów politycznych) wykazało, że obecność każdego słowa niosącego negatywny ładunek emocjonalny i moralny (np. zdrada, hańba, obrzydliwy) zwiększa wskaźnik podań dalej (retweet rate) dokładnie o 20%.'
    },
    keyResearchers: ['Roy Baumeister', 'Martie Haselton', 'David Buss', 'Paul Rozin'],
    confidenceLevel: 'level1'
  },
  {
    id: 'efekt-potwierdzenia-argumentative',
    name: 'Efekt Potwierdzenia i Argumentacyjna Teoria Rozumu',
    subtitle: 'Mercier i Sperber: dlaczego ewolucja stworzyła rozum do przekonywania, a nie do prawdy',
    category: 'Pamiec_i_Poznanie',
    categoryLabel: 'Pamięć i Poznanie',
    classicExperiment: 'Zadanie selekcyjne Petera Wasona (1960) oraz przełomowa Argumentacyjna Teoria Rozumu Hugo Merciera i Dana Sperbera (2011, Behavioral and Brain Sciences; „The Enigma of Reason”, 2017).',
    academicDefinition: 'Tendencja do wyszukiwania, interpretowania i faworyzowania informacji potwierdzających uprzednie przekonania jednostki przy jednoczesnym ignorowaniu lub deprecjonowaniu danych sprzecznych.',
    neurobiologicalSubstrate: 'Informacje zgodne z własnym światopoglądem aktywują układ nagrody (NAcc), podczas gdy fakty sprzeczne aktywują dACC i przednią wyspę analogicznie do bólu fizycznego.',
    pleistoceneFunction: 'Rozum ludzki nie wyewoluował jako narzędzie samotnego filozofa poszukującego obiektywnej prawdy o kwantach, lecz jako broń społeczna służąca do budowania koalicji, przekonywania innych do swoich racji i ochrony własnej reputacji w grupie.',
    modernCapitalismAndDigitalNetwork: 'Architektura baniek filtrujących i komór rezonansowych w internecie: algorytmy dostarczają użytkownikom wyłącznie treści potwierdzające ich uprzedzenia, bo to maksymalizuje czas spędzony na platformie, niszcząc przestrzeń dla debaty publicznej.',
    empiricalExamples: {
      antiquityOrHistory: 'Relacja Tukidydesa o katastrofalnej wyprawie sycylijskiej (415 p.n.e.): ateńczycy w Zgromadzeniu Ludowym entuzjastycznie przyjmowali wyłącznie raporty Alkibiadesa zapowiadające łatwe bogactwa Syrakuz, a ignorowali i uciszali trzeźwe ostrzeżenia Nikiasza o potędze spartańsko-syrakuzańskiej floty, co doprowadziło do zniszczenia całej ateńskiej armii.',
      laboratoryOrFieldStudy: 'Wason (1960, Q. J. Exp. Psychol., N=29 studentów): zadanie odkrywania reguły sekwencji liczb „2-4-6” (gdzie rzeczywistą prostą regułą było „dowolne liczby rosnące”). Ponad 80% badanych generowało wyłącznie trójki liczb zgodne z ich wąską, błędną hipotezą (np. „kolejne liczby parzyste”: 8-10-12, 20-22-24), nie podejmując ani jednej próby przetestowania ciągu niezgodnego (np. 1-2-3 czy 5-4-3), który mógłby sfałszować ich przekonanie.',
      modernDailyOrDigitalEconomy: 'Struktura rekomendacji YouTube dla teorii spiskowych: badania Mozilla Foundation (2021, analiza 3 362 filmów zgłoszonych przez użytkowników) wykazały, że obejrzenie jednego filmu kwestionującego lądowanie na Księżycu lub bezpieczeństwo szczepionek powoduje, że algorytm w 71% kolejnych propozycji serwuje materiały zbieżne, całkowicie eliminując źródła weryfikujące fakty.'
    },
    keyResearchers: ['Hugo Mercier', 'Dan Sperber', 'Peter C. Wason', 'Raymond Nickerson'],
    confidenceLevel: 'level1'
  },
  {
    id: 'konformizm-asch-milgram',
    name: 'Konformizm Społeczny (Paradygmat Ascha) i Lęk przed Wyłamaniem',
    subtitle: 'Gregory Berns i neuroobrazowanie kory: dlaczego dysydent w plejstocenie ryzykował życie',
    category: 'Spoleczne_i_Reputacyjne',
    categoryLabel: 'Społeczne i Reputacyjne',
    classicExperiment: 'Eksperymenty Solomona Ascha z liniami (1951) oraz badania Gregory’ego Bernsa z użyciem fMRI (2005) nad neuronalnymi korelatami konformizmu.',
    academicDefinition: 'Zmiana zachowania, opinii lub percepcji jednostki pod wpływem realnego lub wyobrażonego nacisku grupy rówieśniczej, prowadząca do publicznego (a często i prywatnego) zaakceptowania ewidentnie błędnego sądu większości.',
    neurobiologicalSubstrate: 'Neuroobrazowanie Bernsa wykazało, że u osób sprzeciwiających się jednomyślnej grupie następuje gwałtowny wzrost aktywacji ciała migdałowatego i prawego jądra ogoniastego (reakcja głębokiego lęku), co dowodzi, że nonkonformizm wiąże się z realnym cierpieniem biologicznym.',
    pleistoceneFunction: 'Kohezja wędrownego klanu wymagała synchronizacji działań w obliczu drapieżników czy migracji. Dysydent kwestionujący kierunek marszu lub rytuał osłabiał zdolność obronną całej grupy i był usuwany poza nawias.',
    modernCapitalismAndDigitalNetwork: 'Zjawisko kaskad dezinformacyjnych i autocenzury w korporacjach i na uczelniach: lęk przed wykluczeniem i cyfrowym linczem paraliżuje sygnalistów i myślenie innowacyjne.',
    empiricalExamples: {
      antiquityOrHistory: 'Proces dowódców spod Arginuzów w Atenach (406 p.n.e.): po zwycięstwie morskim sztorm uniemożliwił uratowanie rozbitków; zmanipulowane przez demagogów Zgromadzenie Ludowe w atmosferze masowego wzburzenia wymusiło zbiorowy proces i egzekucję 6 zwycięskich strategów; jedyny sędzia sprzeciwiający się bezprawiu (Sokrates) został zakrzyczany i sterroryzowany groźbą linczu.',
      laboratoryOrFieldStudy: 'Berns et al. (2005, Biological Psychiatry, N=32 ochotników w skanerze fMRI): w zmodyfikowanym paradygmacie Ascha badani rotowali w wyobraźni figury 3D pod presją błędnych odpowiedzi grupy. Uległość wobec grupy aktywowała korę ciemieniową (zmiana samej percepcji wzrokowej), natomiast przeciwstawienie się grupie wyzwalało potężną aktywację prawego ciała migdałowatego, kodującego ból wykluczenia społecznego.',
      modernDailyOrDigitalEconomy: 'Zjawisko „cyfrowego linczu” (cancel culture) na platformie LinkedIn i Twitterze: pracownicy korporacji powstrzymują się przed zgłaszaniem merytorycznych zastrzeżeń do wadliwych strategii biznesowych lub kampanii PR w obawie przed natychmiastowym zwolnieniem i publicznym piętnem w sieci zawodowej, co prowadzi do katastrof zarządczych (np. upadek Enronu czy Wirecard).'
    },
    keyResearchers: ['Solomon Asch', 'Gregory Berns', 'Stanley Milgram'],
    confidenceLevel: 'level1'
  },
  {
    id: 'faworyzowanie-grupy-wlasnej',
    name: 'Faworyzowanie Grupy Własnej (In-Group Favoritism) i Paradygmat Grupy Minimalnej',
    subtitle: 'Henri Tajfel: błyskawiczna architektura koalicyjna umysłu plemiennego',
    category: 'Spoleczne_i_Reputacyjne',
    categoryLabel: 'Społeczne i Reputacyjne',
    classicExperiment: 'Eksperymenty Henriego Tajfela (1970, 1971) nad grupą minimalną: podzielenie uczestników na grupy na podstawie całkowicie arbitralnych i trywialnych kryteriów (np. preferencja obrazów Klee vs Kandinsky lub szacowanie liczby kropek na ekranie).',
    academicDefinition: 'Błyskawiczne traktowanie członków własnej grupy jako bardziej moralnych, godnych zaufania i zasługujących na alokację zasobów przy jednoczesnej dyskryminacji członków grupy obcej, nawet jeśli podział nastąpił sekundy wcześniej na podstawie losowego rzutu monetą.',
    neurobiologicalSubstrate: 'Przyśrodkowa kora przedczołowa (mPFC) i neurony lustrzane aktywują się znacznie silniej na ból i emocje członka grupy własnej niż grupy obcej.',
    pleistoceneFunction: 'Koalicyjny umysł plemienny: przetrwanie w plejstocenie zależało od bezwzględnej lojalności wobec własnego mikrozespołu w rywalizacji o terytoria łowieckie z sąsiednimi bandami hominidów.',
    modernCapitalismAndDigitalNetwork: 'Plemienność polityczna i subkulturowa w sieci: algorytmy polaryzują społeczeństwo w zwalczające się obozy (wojny kulturowe), przekształcając każdą dyskusję merytoryczną w walkę o godność i dominację tożsamościową.',
    empiricalExamples: {
      antiquityOrHistory: 'Radykalny podział w klasycznej Grecji na obywateli polis a „barbarzyńców” (ludzi mówiących niezrozumiałym językiem „bar-bar”): w pismach Arystotelesa („Polityka”, I) barbarzyńcy byli uznawani za „niewolników z natury” pozbawionych zdolności do samostanowienia, co zwalniało Greków z wszelkich zobowiązań moralnych i humanitarnych wobec jeńców wojennych.',
      laboratoryOrFieldStudy: 'Tajfel et al. (1971, Eur. J. Soc. Psychol., N=64 brytyjskich chłopców w wieku 14–15 lat): w eksperymencie grupy minimalnej podzieleni na grupy zwolenników Paula Klee lub Wassily\'ego Kandinsky\'ego uczestnicy przydzielali punkty wymienialne na pieniądze. Badani systematycznie wybierali opcję dającą członkowi własnej grupy 7 punktów, a obcej 1 punkt, zamiast opcji dającej 12 punktów swojemu i 11 obcemu — preferując maksymalizację względnej przewagi nad zyskiem absolutnym.',
      modernDailyOrDigitalEconomy: 'Wojny plemienne użytkowników ekosystemów cyfrowych (np. posiadacze iPhone i „zielone dymki” SMS vs Android w iMessage w USA): badania socjologiczne w szkołach średnich w USA wykazały, że nastolatki z telefonami Android są wykluczane z grupowych czatów rówieśniczych i piętnowane jako uboższe, co Apple celowo podtrzymywało przez lata w celu ochrony marży sprzętowej.'
    },
    keyResearchers: ['Henri Tajfel', 'John Turner', 'Marilynn Brewer'],
    confidenceLevel: 'level1'
  },
  {
    id: 'bodziec-nadnormalny-tinbergen',
    name: 'Efekt Bodźca Nadnormalnego (Supernormal Stimulus)',
    subtitle: 'Nikolaas Tinbergen i Deirdre Barrett: ewolucyjne sidła sztucznej hiperstymulacji',
    category: 'Bodzce_i_Media',
    categoryLabel: 'Bodźce i Media',
    classicExperiment: 'Badania etologiczne Nikolaasa Tinbergena (Nobel 1973): ptaki wolały wysiadywać sztuczne, jaskrawo nakrapiane gipsowe jaja większe od nich samych, ignorując własne biologiczne jaja; motyle wolały kopulować z tekturowymi manekinami o przesadnych barwach.',
    academicDefinition: 'Sztuczny bodziec, który zawiera przerysowane, wyolbrzymione cechy bodźca naturalnego, na który wyewoluował dany receptor, wywołujący nieproporcjonalnie silniejszą reakcję behawioralną niż pierwowzór biologiczny.',
    neurobiologicalSubstrate: 'Masywny wyrzut dopaminy w prążkowiu połączony z brakiem ewolucyjnych mechanizmów hamowania (satiety circuit), które nie zdążyły wyewoluować na poziomie genetycznym.',
    pleistoceneFunction: 'W plejstocenie cukier prosty i tłuszcz występowały wyłącznie w dojrzałych owocach leśnych i miodzie dzikich pszczół. Sygnał „jedz ile zdołasz” był czystą adaptacją chroniącą przed śmiercią głodową.',
    modernCapitalismAndDigitalNetwork: 'Istota współczesnego kapitalizmu konsumpcyjnego: ultraprzetworzona żywność łącząca cukier, sól i tłuszcz w proporcjach nieznanych naturze, filtry upiększające powiększające oczy i wygładzające skórę na Instagramie, gry wideo oferujące łatwe osiągnięcia statusowe — miliony ludzi stają się więźniami sztucznych bodźców kosztem realnego życia.',
    empiricalExamples: {
      antiquityOrHistory: 'Rzymskie bankiety patrycjuszowskie okresu wczesnego cesarstwa opisane w „Uczcie Trymalchiona” Petroniusza: serwowanie potraw o hiperstymulujących cechach smakowych i wizualnych (np. faszerowane ślimaki tuczone w mleku, języki flamingów i pawie mózgi w miodzie i pieprzu) wraz z używaniem piór do wywoływania wymiotów, by móc natychmiast kontynuować stymulację kubków smakowych.',
      laboratoryOrFieldStudy: 'Tinbergen & Perdeck (1950, Behaviour, N=setki prób z pisklętami mewy srebrzystej Larus argentatus): w testach dziobania głowy rodzica pisklęta o 25% częściej i z większą dynamiką dziobały w sztuczny, cienki czerwony patyk z trzema białymi paskami o wysokim kontraście niż w naturalną, anatomicznie poprawną głowę dorosłej mewy z subtelną czerwoną plamką na żółtym dziobie.',
      modernDailyOrDigitalEconomy: 'Formuła tzw. punktu błogostanu („bliss point”) w przemyśle fast-food i słonych przekąsek (np. chipsy Doritos): precyzyjnie dobrany stosunek 50% kalorii z tłuszczu i 50% z węglowodanów prostych, który w naturze występuje wyłącznie w mleku matki, wywołuje zjawisko „sytości specyficznie sensorycznej” i uniemożliwia podwzgórzu zarejestrowanie sytości kalorycznej.'
    },
    keyResearchers: ['Nikolaas Tinbergen', 'Deirdre Barrett', 'Konrad Lorenz'],
    confidenceLevel: 'level1'
  },
  {
    id: 'awersja-do-straty-kahneman',
    name: 'Awersja do Straty i Efekt Kosztów Utopionych (Loss Aversion / Sunk Cost)',
    subtitle: 'Teoria Perspektywy Kahnemana i Tversky’ego: fizjologia minimum egzystencji',
    category: 'Status_i_Ekonomia',
    categoryLabel: 'Status i Ekonomia',
    classicExperiment: 'Daniel Kahneman i Amos Tversky (1979, 1984 Econometrica) — Teoria Perspektywy: ból psychologiczny po stracie 100 dolarów jest około dwukrotnie silniejszy niż radość ze znalezienia tej samej kwoty.',
    academicDefinition: 'Asymetria wartościowania ryzyka: subiektywna użyteczność strat i zysków ma kształt litery S i jest bardziej stroma dla strat. Prowadzi do irracjonalnego tkwienia w nietrafionych projektach (efekt kosztów utopionych) w nadziei na odrobienie strat.',
    neurobiologicalSubstrate: 'Straty wyzwalają silną aktywację w przedniej korze wyspy i ciele migdałowatym (ból i wstręt), podczas gdy równoważne zyski aktywują jedynie umiarkowanie brzuszne prążkowie.',
    pleistoceneFunction: 'W warunkach życia na granicy głodu strata 30% zapasów tłuszczu mogła oznaczać śmierć całej rodziny przed końcem zimy, podczas gdy zysk dodatkowych 30% tłuszczu przynosił jedynie umiarkowane polepszenie komfortu.',
    modernCapitalismAndDigitalNetwork: 'Wykorzystywane masowo w rynkach finansowych (paniczne wyprzedaże akcji na dnie bessy) oraz w modelach subskrypcyjnych i grach („free trial” i manipulacja utratą wypracowanych punktów/streaków, np. Duolingo, Snapchat).',
    empiricalExamples: {
      antiquityOrHistory: 'Oblężenie i odmowa kapitulacji Numancji w Hiszpanii (133 p.n.e.): w obliczu rzymskich szańców Scypiona Emilianusa i skrajnego kanibalizmu mieszkańcy miasta woleli masowe samobójstwo i podpalenie grodu niż kapitulację na warunkach utraty suwerenności, gdyż psychologiczny koszt oddania dotychczasowych ofiar wojennych przewyższał instynkt samozachowawczy.',
      laboratoryOrFieldStudy: 'Kahneman, Knetsch & Thaler (1990, Journal of Political Economy, N=77 studentów): w eksperymencie z kubkami uniwersyteckimi uczestnicy wylosowani jako właściciele kubków żądali minimalnej ceny sprzedaży (Willingness to Accept) średnio 7,12 USD, podczas gdy kupujący oferowali maksymalnie (Willingness to Pay) 2,87 USD za identyczny przedmiot — stosunek λ ≈ 2,48 dowodzi, że sam fakt posiadania nadaje rzeczy wyższą wartość emocjonalną.',
      modernDailyOrDigitalEconomy: 'Manipulacja passą (streak mechanics) w aplikacjach takich jak Duolingo czy Snapchat: użytkownicy, którzy zgromadzili 300-dniową passę codziennej nauki, są w stanie płacić miesięczną subskrypcję premium lub oglądać reklamy tylko po to, by „zamrozić passę” (streak freeze) w razie wyjazdu, kierując się czystą awersją do utraty symbolicznego dorobku.'
    },
    keyResearchers: ['Daniel Kahneman', 'Amos Tversky', 'Richard Thaler'],
    confidenceLevel: 'level1'
  },
  {
    id: 'efekt-zeigarnik-petla',
    name: 'Efekt Zeigarnik (Pętla Niedomknięcia Poznawczego)',
    subtitle: 'Niedokończone zadania w pamięci roboczej a nieskończony scroll platform cyfrowych',
    category: 'Pamiec_i_Poznanie',
    categoryLabel: 'Pamięć i Poznanie',
    classicExperiment: 'Badania Blumy Zeigarnik (1927) w laboratorium Kurta Lewina w Berlinie: kelnerzy doskonale pamiętali skomplikowane zamówienia niezapłacone, ale zapominali je niemal natychmiast po uregulowaniu rachunku.',
    academicDefinition: 'Zjawisko polegające na znacznie lepszym i bardziej natrętnym pamiętaniu zadań, wątków lub czynności przerwanych i niedokończonych w porównaniu z zadaniami w pełni sfinalizowanymi.',
    neurobiologicalSubstrate: 'Trwałe wzbudzenie sieci uwagi grzbietowej i kory czołowo-ciemieniowej podtrzymywane tonicznym uwalnianiem noradrenaliny z miejsca sinawego (locus coeruleus) aż do momentu sygnału zamknięcia.',
    pleistoceneFunction: 'Kluczowe dla realizacji wieloetapowych celów przetrwania w trudnym środowisku: tropienie rannego zwierzęcia przez 8 godzin, powrót do ukrytego źródła wody czy dokończenie obróbki narzędzia przed zmierzchem.',
    modernCapitalismAndDigitalNetwork: 'Eksploatacja przez inżynierię uwagi (Attention Economy): cliffhangery na końcach odcinków w serwisach streamingowych, czerwone kropki nieprzeczytanych powiadomień, paski postępu profilu w LinkedIn („uzupełnij 85%”) oraz mechanizm nieskończonego przewijania (infinite scroll) uniemożliwiający mózgowi doświadczenie punktu domknięcia.',
    empiricalExamples: {
      antiquityOrHistory: 'Motyw całunu Penelopy w „Odysei” Homera: żona Odyseusza obiecuje wybrać jednego z natarczywych zalotników dopiero wtedy, gdy ukończy tkać całun pogrzebowy dla Laertesa. Prując dzieło co noc pod osłoną ciemności, Penelopa przez 3 lata utrzymuje stan poznawczego zawieszenia zalotników, wykorzystując psychologiczną niezdolność greckich arystokratów do przerwania niezakończonego rytuału.',
      laboratoryOrFieldStudy: 'Zeigarnik (1927, Psychologische Forschung, N=164 uczestników): badani wykonywali serię 18–22 zadań manualnych i intelektualnych. W połowie zadań eksperymentator nagle przerywał pracę pod pretekstem przejścia do kolejnego ćwiczenia. W późniejszym niespodziewanym teście swobodnego przypominania zadania przerwane były wymieniane o 90% częściej niż ukończone (współczynnik przypomnienia RQ = 1,9).',
      modernDailyOrDigitalEconomy: 'Projektowanie architektury nieskończonego przewijania (infinite scroll) wymyślonej przez Azę Raskina i zastosowanej na TikToku, Instagramie i Twitterze: brak wyraźnych granic stron (pagination) uniemożliwia korze przedczołowej zarejestrowanie sygnału „zadanie wykonane / koniec partii”, blokując wyrzut hamującej dopaminy i utrzymując użytkownika w permanentnej pętli Zeigarnik przez średnio 95 minut dziennie.'
    },
    keyResearchers: ['Bluma Zeigarnik', 'Kurt Lewin', 'Maria Ovsiankina'],
    confidenceLevel: 'level1'
  }
];
