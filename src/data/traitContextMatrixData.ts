import { TraitTransformationPath, ContemporarySelectionTrackItem } from '../types';

export const TRAIT_TRANSFORMATION_PATHS: TraitTransformationPath[] = [
  {
    id: 'psychopatia-mroczna-triada',
    traitName: 'Psychopatia i Mroczna Triada w Strukturach Władzy',
    subtitle: 'Od rzadkiej strategii pasożytniczej po korporacyjną premię menedżerską i wtórną adaptację',
    biologicalAnchor: 'Niska reaktywność układu limbicznego (zmniejszona pobudliwość ciała migdałowatego na sygnały cierpienia), osłabiona łączność funkcjonalna vmPFC z układem emocjonalnym, niska reaktywność autonomiczna (niski spoczynkowy puls serca).',
    bioNeuroSubstrate: 'Poligeniczne podłoże temperamentalne modulujące transportery serotoniny (5-HTT) i MAO-A w połączeniu z fenotypem nieustraszonej dominacji (Fearless Dominance).',
    plasticityIndex: {
      level: 'umiarkowanie_konserwatywna',
      label: 'Umiarkowanie Konserwatywna',
      description: 'Silna kotwica neurobiologiczna (1–2% fenotyp wrodzony), lecz ekspresja behawioralna wysoce modulowana przez anonimowość i strukturę bodźców organizacyjnych.',
      score: 2
    },
    confidenceLevel: 'level1',
    keyResearchers: ['Linda Mealey', 'Christopher Boehm', 'Paul Babiak', 'Robert Hare', 'Clive Boddy'],
    emergingPhenomenaAndConsequences: 'Zjawisko wtórnej psychopatii adaptacyjnej (Secondary Adaptive Psychopathy): neurotypowi pracownicy w anonimowych korporacjach są zmuszani do sztucznego wygaszania empatii, by przetrwać restrukturyzacje i zwolnienia.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Koczownicza grupa 20–50 osób, pełna przezroczystość reputacyjna, brak anonimowości.',
        phenotypeExpression: 'Rzadka strategia pasożytnicza zależna od częstości (ok. 1% populacji — Linda Mealey). Bezwzględny oszust natychmiast demaskowany przez pamięć społeczną.',
        socialConstraintLevel: 95,
        statusEconomicPremium: 10,
        cohesionMentalHealthCost: 85,
        systemicMechanism: 'Odwrócona hierarchia dominacji (Boehm): grupa dyscyplinowała psychopatów wyśmiewaniem, ostracyzmem, a w skrajnych przypadkach koalicyjną egzekucją.',
        empiricalExamples: [
          'Etnografia ludu !Kung San (Kalahari): koalicyjne zabicie recydywisty Sema przez radę braci po trzykrotnym złamaniu normy dzielenia się mięsem.',
          'Praktyki ludu Hadza: rytualne ośmieszanie aroganckich łowców podczas rozdzielania tuszy żyrafy.',
          'Zapis kopalny z Jaskini El Sidrón: rzadkie ślady gwałtownej eliminacji jednostek aspołecznych w małych grupach neandertalskich.'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Wioski rolnicze, akumulacja spichrzowa, początki dziedziczenia i pierwszych hierarchii wodzowskich.',
        phenotypeExpression: 'Przestrzeń do zbrojnej dominacji i tworzenia klanów opartych na przymusie. Osobniki bezwzględne zyskiwały przewagę w najazdach rabunkowych.',
        socialConstraintLevel: 65,
        statusEconomicPremium: 45,
        cohesionMentalHealthCost: 55,
        systemicMechanism: 'Pojawienie się nadwyżki żywnościowej umożliwiającej utrzymanie wyspecjalizowanych wojowników i narzucenie dominacji podległym chłopom.',
        empiricalExamples: [
          'Masowe groby w Talheim i Schletz (kultura ceramiki wstęgowej): ślady metodycznej, bezwzględnej eksterminacji całych wiosek rolniczych.',
          'Wczesne cmentarzyska w Warnie (Bułgaria, ~4500 p.n.e.): gigantyczne zróżnicowanie pochówków ze złotem dowodzące narodzin zbrojnej arystokracji.',
          'Pojawienie się ufortyfikowanych osad ze śladami stałych garnizonów obronnych w dorzeczu Dunaju.'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Wielkie cywilizacje agrarne, imperia militarne (Rzym, Persja, Han), pierwsze metropolie (Rzym liczący 1 mln mieszkańców), prawo stanowione.',
        phenotypeExpression: 'Legalizacja i ustrukturyzowanie dominacji: chłód emocjonalny nagradzany w legionach, podbojach i zarządzaniu niewolnikami, lecz ograniczany przez prawo obywatelskie i filozofię moralną.',
        socialConstraintLevel: 55,
        statusEconomicPremium: 65,
        cohesionMentalHealthCost: 60,
        systemicMechanism: 'Instytucjonalizacja bezwzględności militarnej na zewnątrz przy jednoczesnym rozwijaniu mechanizmów prawnych chroniących porządek wewnętrzny.',
        empiricalExamples: [
          'Ostracyzm ateński (VI–V w. p.n.e.): sformalizowany plebiscyt skazujący na 10-letnie wygnanie zbyt potężnych, potencjalnych tyranów (np. Temistoklesa, Arystydesa).',
          'Igrzyska gladiatorskie w Rzymie: państwowa, zinstytucjonalizowana kanalizacja agresji i pokaz bezwzględnej władzy patrycjuszy nad życiem plebsu i niewolników.',
          'Pisma Tukidydesa (dialog melijski): klasyczny manifest bezwzględnego realizmu politycznego („Silni czynią to, co mogą, a słabi cierpią to, co muszą”).'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Wielkie miasta, fabryki, bezosobowe korporacje, prawo stanowione, rozbicie wspólnot wiejskich.',
        phenotypeExpression: 'Anonimowość wielkiego miasta zdejmuje plejstoceńskie hamulce reputacyjne; bezwzględność jest częściowo kanalizowana w rywalizację kapitałową i eksploatację robotników.',
        socialConstraintLevel: 50,
        statusEconomicPremium: 60,
        cohesionMentalHealthCost: 65,
        systemicMechanism: 'Struktura hierarchii fabrycznej premiuje bezwzględne egzekwowanie norm wydajności kosztem dobrostanu pracowników (tayloryzm).',
        empiricalExamples: [
          'XIX-wieczny Manchester i praca dzieci w kopalniach: chłodna kalkulacja zysku właścicieli fabryk bez biologicznego współczucia dla robotników.',
          '„Baronowie rozbójnicy” (Robber Barons — Rockefeller, Carnegie, Morgan) w USA: bezwzględne niszczenie konkurencji i łamanie strajków siłą (agencja Pinkertona).',
          'Stworzenie spółek z ograniczoną odpowiedzialnością (LLC): prawne oddzielenie osobistej moralności człowieka od amoralnego imperatywu zysku spółki.'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Globalne korporacje, rynki finansowe, fuzje i przejęcia, gospodarka platformowa, media społecznościowe.',
        phenotypeExpression: 'Instytucjonalna premia dla cech Mrocznej Triady (Babiak & Hare „Snakes in Suits”): urok powierzchowny, brak wyrzutów sumienia i chłód są mylone ze „sprawnym przywództwem w kryzysie”.',
        socialConstraintLevel: 25,
        statusEconomicPremium: 90,
        cohesionMentalHealthCost: 92,
        systemicMechanism: 'Płynność struktur i częsta zmiana stanowisk pozwalają psychopacie korporacyjnemu awansować i uciekać przed konsekwencjami zniszczonego morale zespołów.',
        empiricalExamples: [
          'Kryzys finansowy 2008 roku i upadek Enronu: cyniczne pakowanie toksycznych kredytów subprime przy pełnej świadomości destrukcji oszczędności milionów ludzi.',
          'Badania Babiaka, Neumanna i Hare\'a (2010): wskaźnik cech psychopatycznych w wyższej kadrze menedżerskiej na poziomie 4–8% (4-krotnie wyższy niż w populacji generalnej).',
          'Zarządzanie przez strach i rankingi krzywej dzwonowej (stack ranking) w korporacjach technologicznych lat 2000–2015 eliminujące odruchową pomoc kolegom.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Hiperautomatyzacja, algorytmiczne systemy oceny społecznej, neuroaudyt decyzyjny i korporacje kierowane przez autonomiczne agenty AI.',
        phenotypeExpression: 'Możliwa dychotomia: albo całkowita transparentność biometryczno-algorytmiczna eliminująca psychopatów, albo ich fuzja z algorytmami wyzysku w zarządach techno-oligopoli.',
        socialConstraintLevel: 40,
        statusEconomicPremium: 80,
        cohesionMentalHealthCost: 88,
        systemicMechanism: 'Wdrożenie audytów psychologicznych opartych na AI vs tworzenie bezdusznych autonomicznych agentów optymalizacyjnych.',
        empiricalExamples: [
          'Symulacje wieloagentowe rynków finansowych: autonomiczne modele AI przejmujące strategie bezwzględnego arbitrażu bez ludzkiego układu somatycznego.',
          'Pilotażowe systemy biometrycznego monitorowania stresu i mikroekspresji w korporacjach w Azji Wschodniej.',
          'Projekty prawne dotyczące unijnego AI Act i certyfikacji etycznej systemów autonomicznego zwalniania pracowników.'
        ]
      }
    }
  },
  {
    id: 'intuicja-spoleczna-vens-vs-ai',
    traitName: 'Intuicja Społeczno-Integracyjna (VENs) vs. Analiza w Erze AI',
    subtitle: 'Przesunięcie rzadkości: od dominacji kalkulatora do premii za somatyczną syntezę relacyjną',
    biologicalAnchor: 'Gęstość i funkcjonalność neuronów von Economo w przedniej wyspie (AIC) i przednim zakręcie obręczy (ACC); zdolność do błyskawicznego odczytu mikromimiki i spójności emocjonalnej.',
    bioNeuroSubstrate: 'Szybka integracja sygnałów interoceptywnych nerwu błędnego z modelami teorii umysłu (ToM) w korze skroniowo-ciemieniowej.',
    plasticityIndex: {
      level: 'plastyczna',
      label: 'Wysoko Plastyczna',
      description: 'Struktura neuronalna wrodzona, lecz kalibracja wymaga intensywnego treningu twarzą w twarz we wczesnym dzieciństwie; ulega atrofii w środowisku czysto cyfrowym.',
      score: 3
    },
    confidenceLevel: 'level1',
    keyResearchers: ['John Allman', 'Antonio Damasio', 'Bud Craig', 'Daniel Goleman'],
    emergingPhenomenaAndConsequences: 'Paradoks erodowania bazy biologicznej: rosnąca premia rynkowa dla głębokiej intuicji ludzkiej zbiega się z degradacją tych samych obwodów przez przebodźcowanie ekranowe od wczesnego dzieciństwa.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Twarzą w twarz, wielozmysłowy kontakt z członkami grupy.',
        phenotypeExpression: 'Absolutny fundament przetrwania: natychmiastowe wyczucie nastroju klanu, wykrycie nieszczerości sojusznika i podtrzymanie kohezji.',
        socialConstraintLevel: 85,
        statusEconomicPremium: 85,
        cohesionMentalHealthCost: 15,
        systemicMechanism: 'Brak pisma i zewnętrznych rejestrów – cała wiedza o intencjach innych opierała się na żywej intuicji somatycznej.',
        empiricalExamples: [
          'Polowania kooperacyjne na sawannie: synchronizacja ruchów 4 łowców bez słów, wyłącznie na podstawie kierunku spojrzenia i napięcia mięśni.',
          'Transmisja wytwarzania narzędzi lewaluaskich: nauka przez naśladownictwo motoryczne bez konieczności formalnego instruktażu werbalnego.',
          'Wspólne obozowisko: natychmiastowa detekcja lęku u dziecka przez matkę za pomocą mikro-sygnałów oddechowych.'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Rozrost osad do setek mieszkańców, pierwsze umowy handlowe i pieczęcie.',
        phenotypeExpression: 'Początki biurokracji i rachunkowości (tabliczki gliniane); intuicja wspierana zewnętrznymi symbolami statusu.',
        socialConstraintLevel: 75,
        statusEconomicPremium: 70,
        cohesionMentalHealthCost: 30,
        systemicMechanism: 'Pojawienie się formalnych umów i prawa zmniejsza wyłączną zależność od odczytu mikrosygnałów ciała.',
        empiricalExamples: [
          'Gliniane żetony rachunkowe z Mezopotamii (Uruk): outsourcing pamięci długu zastępujący osobiste zaufanie somatyczne.',
          'Pieczęcie cylindryczne jako formalny gwarant nienaruszenia spichlerza zamiast honoru klanowego.',
          'Pierwsze spory graniczne między rodami rozstrzygane przez starszyznę na podstawie kamieni miedzowych.'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Agora grecka, rzymskie forum, dwory cesarskie, rozwój retoryki, dyplomacji i teatru dramatycznego.',
        phenotypeExpression: 'Wielki renesans intuicji relacyjnej na poziomie elit: retoryka Arystotelesa (pathos i ethos jako odczytanie nastroju tłumu), czytanie intencji na dworach monarszych.',
        socialConstraintLevel: 65,
        statusEconomicPremium: 80,
        cohesionMentalHealthCost: 40,
        systemicMechanism: 'Polityka staje się sztuką perswazji twarzą w twarz w zgromadzeniach obywatelskich (Ateny) lub intryg pałacowych (Rzym, Chiny Han).',
        empiricalExamples: [
          'Mowy Cycerona w senacie rzymskim: mistrzowskie operowanie napięciem somatycznym słuchaczy i mikromimiką w celu demaskacji Katyliny.',
          'Dialogi platońskie (metoda sokratyczna): czytanie emocjonalnych blokad rozmówcy i doprowadzanie go do aporii przez dynamiczny dialog.',
          'Traktat Sun Zi „Sztuka Wojny”: nacisk na psychologiczną ocenę charakteru wrogiego dowódcy przed wydaniem bitwy.'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Masowa produkcja, racjonalizacja tayloryzmu, standaryzacja procedur i regulaminów.',
        phenotypeExpression: 'Kult zimnej dyscypliny, redukcja procesów emocjonalnych w pracy; premia dla ścisłej wiedzy technicznej i posłuszeństwa.',
        socialConstraintLevel: 60,
        statusEconomicPremium: 40,
        cohesionMentalHealthCost: 60,
        systemicMechanism: 'Człowiek traktowany jak wymienna część mechanizmu fabrycznego; intuicja relacyjna uznawana za „przeszkodę” w procedurze.',
        empiricalExamples: [
          'Badania czasu i ruchów Franka i Lillian Gilbrethów: rozbicie pracy ludzkiej na mikrosekundy, ignorujące zmęczenie emocjonalne.',
          'Wojskowa musztra pruska: mechaniczne wygaszanie indywidualnej empatii na rzecz automatycznego wykonywania rozkazów.',
          'Wielka biurokracja weberowska: bezosobowe traktowanie petenta według numeru sprawy zamiast oceny jego stanu emocjonalnego.'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Gospodarka usługowa, networking, zdominowanie analizy ilościowej przez komputery i generatywną AI.',
        phenotypeExpression: 'Ponowny gwałtowny wzrost premii za inteligencję emocjonalną i charyzmę, lecz zapośredniczenie przez komunikatory zniekształca naturalne sprzężenie VENs.',
        socialConstraintLevel: 40,
        statusEconomicPremium: 80,
        cohesionMentalHealthCost: 70,
        systemicMechanism: 'Zastąpienie podstawowych obliczeń przez algorytmy uwypukla wagę negocjacji, sprzedaży i przywództwa relacyjnego.',
        empiricalExamples: [
          'Negocjacje venture capital w Dolinie Krzemowej: decyzje o inwestycjach milionów dolarów podejmowane w 15 minut na podstawie „gut feeling” wobec założyciela.',
          'Epidemia zoom-fatigue: przeciążenie kory mózgowej wywołane opóźnieniami audio i brakiem prawdziwego kontaktu wzrokowego w wideokonferencjach.',
          'Sukces charyzmatycznych liderów politycznych potrafiących wywołać bezpośredni rezonans emocjonalny na wiecach mimo krytyki analityków.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Generatywna AI i systemy autonomiczne przejmujące niemal całą analizę logiczno-obliczeniową, prawo i kodowanie.',
        phenotypeExpression: 'Maksymalna polaryzacja rynkowa: wysoka inteligencja intuicyjno-relacyjna staje się najcenniejszym i najlepiej opłacanym zasobem ludzkim na Ziemi.',
        socialConstraintLevel: 30,
        statusEconomicPremium: 98,
        cohesionMentalHealthCost: 65,
        systemicMechanism: 'Kompleksowe zautomatyzowanie chłodnej analizy sprawia, że jedynym niezastępowalnym wkładem człowieka staje się autentyczna obecność relacyjna.',
        empiricalExamples: [
          'Modele medycyny zintegrowanej: AI stawia diagnozę onkologiczną w ułamku sekundy, lecz lekarz z wysokim VENs przekazuje ją rodzinie i buduje plan terapii.',
          'Zawody opiekuńcze, terapeutyczne i negocjacyjne jako jedyne enklawy odporne na wyparcie algorytmiczne.',
          'Pojawienie się elitarnych szkół zakazujących ekranów cyfrowych na rzecz treningu retoryki, interocepcji i empatii somatycznej.'
        ]
      }
    }
  },
  {
    id: 'wyglad-sygnalizacja-ciala',
    traitName: 'Wygląd i Morfologia: Odwrócenie Sygnału Tkanki Tłuszczowej',
    subtitle: 'Od rzadkiego skarbu kalorycznego do rynkowego sygnału biedy i dysmorfii algorytmicznej',
    biologicalAnchor: 'Skłonność do odkładania tkanki tłuszczowej (adipogeneza), symetria ciała, proporcje WHR i SHR, stan skóry.',
    bioNeuroSubstrate: 'Układ nagrody wzrokowej i zakręt wrzecionowaty kalibrowane na sygnały obfitości i braku pasożytów.',
    plasticityIndex: {
      level: 'plastyczna',
      label: 'Wysoko Plastyczna',
      description: 'Biologiczny mechanizm odczytu zdrowia stały, lecz kulturowy punkt odcięcia (statusowy wektor tłuszczu) uległ całkowitemu odwróceniu o 180 stopni.',
      score: 3
    },
    confidenceLevel: 'level1',
    keyResearchers: ['Devendra Singh', 'Gillian Rhodes', 'David Buss', 'Pierre Bourdieu'],
    emergingPhenomenaAndConsequences: 'Dysmorfia algorytmiczna (Snapchat/Instagram dysmorphia): dążenie do nierealistycznych proporcji ciała modyfikowanych filtrami cyfrowymi za pomocą operacji plastycznych i leków GLP-1.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Permanentne ryzyko głodu, sezonowość owoców i zwierzyny.',
        phenotypeExpression: 'Zapas tkanki tłuszczowej to najwyższy sygnał biologiczny: gwarancja donoszenia ciąży i laktacji podczas zimy.',
        socialConstraintLevel: 90,
        statusEconomicPremium: 90,
        cohesionMentalHealthCost: 10,
        systemicMechanism: 'Fizjologiczny bufor przetrwania w środowisku chronicznego deficytu kalorii.',
        empiricalExamples: [
          'Paleolityczne figurki Wenus (Willendorf, Hohle Fels, Lespugue): rzeźby kobiet z wydatną steatopygią i brzuchem jako symbol płodności i przetrwania zimy.',
          'Etnografia ludu Aché (Paragwaj): preferencja kobiet o wyższej masie ciała w okresach przedłużających się deszczy uniemożliwiających łowy.',
          'Wysoka zawartość kwasów omega-3 i DHA w tłuszczu zwierzyny plejstoceńskiej zasilająca encefalizację.'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Rolnictwo monokulturowe, okresowe nieurodzaje.',
        phenotypeExpression: 'Masa ciała nadal koreluje ze statusem: pulchność świadczy o dostępie do spichlerza i braku wyczerpującej pracy w polu.',
        socialConstraintLevel: 80,
        statusEconomicPremium: 80,
        cohesionMentalHealthCost: 20,
        systemicMechanism: 'Podział na klasę pracującą fizycznie na słońcu a elitę chronioną przed głodem.',
        empiricalExamples: [
          'Figurki z Çatalhöyük przedstawiające otyłe boginie na tronie z lampartami.',
          'Szczątki arystokracji pierwszych miast Mezopotamii: ślady próchnicy i otyłości na szkieletach grobowców królewskich z Ur.',
          'Ślady niedożywienia i hipoplazji szkliwa na szkieletach neolitycznych chłopów w porównaniu z łowcami paleolitu.'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Gimnazjony greckie, termy rzymskie, rzeźba klasyczna, idea kalokagathii (jedności piękna i dobra).',
        phenotypeExpression: 'Wyłonienie się kanonu atletycznego: u wolnych obywateli ceniono proporcję, muskulaturę i umiar (Poliklet, Doryforos); tłuszcz u patrycjuszy był symbolem biesiady i bogactwa.',
        socialConstraintLevel: 75,
        statusEconomicPremium: 80,
        cohesionMentalHealthCost: 35,
        systemicMechanism: 'Ciało staje się wizytówką statusu wolnego obywatela (ćwiczącego nago w gimnazjonie) w opozycji do zgarbionego niewolnika pracującego na roli.',
        empiricalExamples: [
          'Kanon Polikleta (V w. p.n.e.): matematyczne proporcje idealnego ciała męskiego oparte na symetrii i atletycznej rzeźbie.',
          'Rzymskie uczty patrycjuszowskie i opisy w Satiriconie Petroniusza: ostentacyjne objadanie się i otyłość jako demonstracja bogactwa prowincjonalnego bogacza Trimalchiona.',
          'Tradycja chińska dynastii Tang: okresowa zmiana mody dworskiej na pulchne sylwetki (słynna faworyta cesarska Yang Guifei).'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Cukrownie przemysłowe, masowy tani chleb i margaryna, praca w halach fabrycznych.',
        phenotypeExpression: 'Początek przełomu: tanie kalorie stają się powszechne dla proletariatu; elity zaczynają cenić smukłość, sport i opaleniznę jako symbol wakacji.',
        socialConstraintLevel: 65,
        statusEconomicPremium: 60,
        cohesionMentalHealthCost: 40,
        systemicMechanism: 'Industrializacja produkcji żywności drastycznie obniża koszt kalorii, dewaluując otyłość jako symbol bogactwa.',
        empiricalExamples: [
          'Wiktoriański gorset i talia osy: mechaniczne deformowanie żeńskich żeber w celu zasygnalizowania braku konieczności pracy fizycznej.',
          'Rozwój sportu dżentelmeńskiego w brytyjskich szkołach z internatem (rugby, wioślarstwo) jako nowej dystynkcji klasowej.',
          'Pojawienie się pierwszych masowych diet odchudzających (dieta Williama Bantinga z 1863 roku w Londynie).'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Gospodarka przetworzonej żywności (HFCS, oleje nasion), praca siedząca, ekrany wysokiej rozdzielczości, media społecznościowe.',
        phenotypeExpression: 'Całkowite odwrócenie sygnału: nadwaga staje się markerem biedy i braku czasu; szczupłość i rzeźba mięśniowa wymagają drogich trenerów, diety organicznej i samokontroli.',
        socialConstraintLevel: 30,
        statusEconomicPremium: 95,
        cohesionMentalHealthCost: 85,
        systemicMechanism: 'Kapitał cielesny (Pierre Bourdieu): ciało staje się bezpośrednią wizytówką pozycji klasowej i kapitału kulturowego.',
        empiricalExamples: [
          'Epidemia otyłości w ubogich hrabstwach USA (tzw. food deserts) skontrastowana z dietą organiczną i rzeźbą w elitarnych dzielnicach Manhattanu.',
          'Eksplozja popularności analogów GLP-1 (Ozempic/Wegovy): farmakologiczne kupowanie szczupłości przez elity Hollywood i Doliny Krzemowej.',
          'Badania nad dysmorfią Instagramową: 32% nastolatek zgłasza pogorszenie obrazu własnego ciała po 30 minutach przeglądania wyretuszowanych profili.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Tanie leki metaboliczne nowej generacji, edycja somatyczna komórek tłuszczowych CRISPR, syntetyczne awatary metaverse.',
        phenotypeExpression: 'Rozwiązanie problemu otyłości biologicznej kosztem powszechnej medykalizacji; wyścig statusowy przenosi się w sferę markerów epigenetycznego odmłodzenia i symetrii biometrycznej.',
        socialConstraintLevel: 20,
        statusEconomicPremium: 90,
        cohesionMentalHealthCost: 75,
        systemicMechanism: 'Demokratyzacja farmakologicznej kontroli wagi i pojawienie się nowych, jeszcze bardziej kosztownych barier dystynkcji cielesnej.',
        empiricalExamples: [
          'Kliniki inżynierii telomerów i terapii peptydowych dla multimilionerów w Szwajcarii i Singapurze.',
          'Powszechność filtrów augmented reality w soczewkach kontaktowych maskujących wady skóry w czasie rzeczywistym.',
          'Biodruk tkanki chrzęstnej i kości umożliwiający dowolne modyfikacje proporcji czaszkowo-twarzowych na żądanie.'
        ]
      }
    }
  },
  {
    id: 'rozproszone-ojcostwo-rynek-matrymonialny',
    traitName: 'Rozproszone Ojcostwo, Alloparenting i Rynek Matrymonialny',
    subtitle: 'Od wieloosobowej koalicji wsparcia malucha do globalnej asymetrii aplikacji randkowych i samotności',
    biologicalAnchor: 'Długi okres dzieciństwa i powolny rozwój mózgu ludzkiego wymagający ogromnego nakładu kalorii i opieki wielu dorosłych.',
    bioNeuroSubstrate: 'Układ oksytocynowo-wazopresynowy podatny na zacieśnianie więzi w bliskiej wspólnocie klanowej.',
    plasticityIndex: {
      level: 'hiperplastyczna',
      label: 'Hiperplastyczna',
      description: 'Struktura rodziny i rynków matrymonialnych wykazuje największą zmienność instytucjonalną w historii Homo: od poligynii po seryjną monogamię i samotność cyfrową.',
      score: 4
    },
    confidenceLevel: 'level1',
    keyResearchers: ['Sarah Blaffer Hrdy', 'Stephen Beckerman', 'David Buss', 'Kristen Hawkes'],
    emergingPhenomenaAndConsequences: 'Epidemia samotności i związki paraspołeczne z awatarami AI: miliony młodych ludzi rezygnują z ryzykownych relacji fizycznych na rzecz syntetycznych partnerów cyfrowych.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Mała grupa koczownicza, lokalna pula partnerska 10–25 rówieśników.',
        phenotypeExpression: 'Alloparenting: dziecko ma 5–8 opiekunów (matka, ojciec/ojcowie wtórni, babcia, ciotki). Pula partnerska ograniczona, lecz niemal każdy znajduje partnera.',
        socialConstraintLevel: 90,
        statusEconomicPremium: 20,
        cohesionMentalHealthCost: 15,
        systemicMechanism: 'Zbiorowa inwestycja w przetrwanie potomstwa zabezpieczająca matkę przed wyczerpaniem.',
        empiricalExamples: [
          'Etnografia ludu Barí (Wenezuela): 80% przeżywalności dzieci mających uznanego drugiego ojca wobec 64% u dzieci z jednym ojcem.',
          'Współdzielenie opieki u ludu Aka (Afryka Środkowa): ojcowie trzymają niemowlęta na rękach przez ponad 20% doby (najwyższy wskaźnik na świecie).',
          'Rola babć u łowców Hadza (Tanzania): wykopywanie bulw przez kobiety postmenopauzalne ratujące kalorycznie wnuki w porze suchej.'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Patrylineat, ścisła kontrola dziewictwa i wierności żon w celu zagwarantowania dziedziczenia ziemi.',
        phenotypeExpression: 'Likwidacja rozproszonego ojcostwa; monopolizacja kobiet przez bogatych właścicieli ziemskich (poligynia majątkowa).',
        socialConstraintLevel: 85,
        statusEconomicPremium: 65,
        cohesionMentalHealthCost: 50,
        systemicMechanism: 'Zasada dziedziczenia własności wymusza restrykcyjne normy wierności seksualnej pod groźbą kary śmierci.',
        empiricalExamples: [
          'Zapaść różnorodności chromosomu Y w neolicie (badania Zeng et al., 2018): na jednego rozmnażającego się mężczyznę przypadało aż 17 płodnych kobiet.',
          'Pojawienie się grobów rodowych z pochówkami kobiet i dzieci u boku dominującego mężczyzny.',
          'Wprowadzenie wczesnych praw zwyczajowych karzących za cudzołóstwo wyłącznie kobiety.'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Pater familias w Rzymie, prawa Solona w Atenach, prawa cesarskie w Chinach, wielkie kodyfikacje moralne.',
        phenotypeExpression: 'Instytucjonalizacja monogamii państwowej (Rzym, Grecja) przy jednoczesnym tolerowaniu konkubinatu z niewolnicami; ścisła regulacja posagów i linii rodowej.',
        socialConstraintLevel: 80,
        statusEconomicPremium: 75,
        cohesionMentalHealthCost: 45,
        systemicMechanism: 'Monogamia normatywna jako narzędzie zapobiegania buntom milionów młodych mężczyzn pozbawionych kobiet (Henrich).',
        empiricalExamples: [
          'Prawo rzymskie (Patria Potestas): ojciec rodziny miał absolutną władzę nad życiem, śmiercią i małżeństwami swoich dzieci.',
          'Reformy małżeńskie Augusta (Lex Iulia, 18 p.n.e.): kary finansowe dla bezżennych patrycjuszy i nagrody za posiadanie co najmniej trójki dzieci.',
          'Konfucjański kodeks synowskiej pobożności (Xiao): absolutne podporządkowanie małżeństwa interesom i ciągłości kultu przodków rodu.'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Model rodziny nuklearnej w mieście, jeden żywiciel (male breadwinner), praca z dala od domu.',
        phenotypeExpression: 'Zamknięcie opieki w 4 ścianach mieszkania; zerwanie kontaktu z babciami i klanem wiejskim.',
        socialConstraintLevel: 70,
        statusEconomicPremium: 60,
        cohesionMentalHealthCost: 60,
        systemicMechanism: 'Migracja do miast tworzy małe gospodarstwa domowe dostosowane do mobilności siły roboczej.',
        empiricalExamples: [
          'Robotnicze czynszówki w Berlinie i Łodzi: samotna matka uwięziona z czwórką dzieci w 20 m² podczas 12-godzinnej szychty męża.',
          'Kodyfikacja Kodeksu Napoleona (1804): całkowite podporządkowanie majątkowe żony mężowi.',
          'Masowy rozwój instytucji domów dziecka i ochronek miejskich jako protezy rozbitego alloparentingu wiejskiego.'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Algorytmiczne aplikacje randkowe (Tinder, Bumble), globalny rynek matrymonialny, erozja małżeństw, kultura singli.',
        phenotypeExpression: 'Ekstremalna polaryzacja rynku: top 10–20% mężczyzn pod względem statusu i wyglądu otrzymuje większość zainteresowania, dół populacji doświadcza bezprecedensowej izolacji (incels).',
        socialConstraintLevel: 15,
        statusEconomicPremium: 90,
        cohesionMentalHealthCost: 88,
        systemicMechanism: 'Globalizacja puli wyboru usuwa geograficzne ograniczenia rynków lokalnych i tworzy dynamikę „zwycięzca bierze wszystko”.',
        empiricalExamples: [
          'Statystyki Tindera: 80% kobiet rywalizuje o uwagę 20% najlepiej ocenianych mężczyzn; spadek liczby randek u osób poniżej 25. roku życia.',
          'Zjawisko „hikikomori” w Japonii i miliony singli w Korei Płd. rezygnujących z prób wejścia w relacje intymne.',
          'Eksplozja popularności chatbotów konwersacyjnych i syntetycznych partnerek AI (Replika, Character.ai) z miliardami wiadomości miesięcznie.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Syntetyczni towarzysze AI, wirtualne światy haptyczne, ektogeneza (sztuczne macice), państwowe subsydia rozrodcze.',
        phenotypeExpression: 'Całkowite oddzielenie seksu, reprodukcji i więzi emocjonalnej; rozwój komercyjnego alloparentingu technologicznego.',
        socialConstraintLevel: 10,
        statusEconomicPremium: 80,
        cohesionMentalHealthCost: 85,
        systemicMechanism: 'Automatyzacja relacji emocjonalnych jako produkt abonamentowy dla atomizowanych jednostek.',
        empiricalExamples: [
          'Prototypy sztucznych macic dla wcześniaków (Biobag w Children\'s Hospital of Philadelphia) otwierające drogę do pełnej ektogenezy.',
          'Humanoidalne roboty opiekuńcze zintegrowane z LLM przejmujące rolę guwernantek i towarzyszy osób starszych w Japonii.',
          'Wirtualne śluby z postaciami cyfrowymi i prawne regulacje statusu majątkowego relacji człowiek–AI.'
        ]
      }
    }
  },
  {
    id: 'status-kontra-sukces-reprodukcyjny',
    traitName: 'Status vs. Sukces Reprodukcyjny (Zerwanie Korelacji Darwinowskiej)',
    subtitle: 'Wielki paradoks ewolucyjny: dlaczego najwyższy prestiż prowadzi dziś do wygaszenia linii genetycznej',
    biologicalAnchor: 'Męski i żeński popęd do zdobywania uznania społecznego, prestiżu i dominacji w hierarchii.',
    bioNeuroSubstrate: 'Poziom serotoniny i dopaminy sprzężony z subiektywną pozycją w drabinie społecznej.',
    plasticityIndex: {
      level: 'plastyczna',
      label: 'Wysoko Plastyczna',
      description: 'Sprzężenie biologiczne status → potomstwo zostało całkowicie rozerwane przez antykoncepcję i koszty alternatywne edukacji.',
      score: 3
    },
    confidenceLevel: 'level1',
    keyResearchers: ['Joseph Henrich', 'David Buss', 'Robert Sapolsky', 'Anna Rotkirch'],
    emergingPhenomenaAndConsequences: 'Zapaść demograficzna społeczeństw rozwiniętych (TFR poniżej 1,3): kraje o najwyższym poziomie edukacji i zamożności (Korea Południowa, Japonia, Europa Południowa) przeżywają biologiczną implozję.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Grupa koczownicza bez akumulacji trwałego majątku.',
        phenotypeExpression: 'Pełna zgodność ewolucyjna: wysoki status najlepszego łowcy lub zielarki przekładał się bezpośrednio na większą liczbę zdrowego potomstwa.',
        socialConstraintLevel: 80,
        statusEconomicPremium: 85,
        cohesionMentalHealthCost: 20,
        systemicMechanism: 'Prestiż zapewniał większy przydział tłuszczu i protekcji koalicyjnej dla niemowląt.',
        empiricalExamples: [
          'Dane etnograficzne u ludu Aché: najlepsi łowcy płodzili statystycznie dwukrotnie więcej dzieci z uwagi na preferencje kobiet.',
          'Dzielenie się mięsem u Hadza: rodzina wybitnego łowcy otrzymywała najlepsze kawałki tłuszczu nawet w okresach niedoboru.',
          'Śpiewacy i opowiadacze mitów w tradycji rdzennych Australijczyków cieszący się wysokim prestiżem matrymonialnym.'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Monarchie wczesne, imperia agrarne.',
        phenotypeExpression: 'Ekstremalna korelacja: władcy i elity posiadali setki dzieci (np. zjawisko zbieżności chromosomu Y u klanów arystokratycznych).',
        socialConstraintLevel: 70,
        statusEconomicPremium: 95,
        cohesionMentalHealthCost: 40,
        systemicMechanism: 'Skupienie władzy militarnej i majątku pozwalało na utrzymanie olbrzymich haremów.',
        empiricalExamples: [
          'Analizy paleogenetyczne (Poznik et al., 2016 Nature Genetics): gwałtowne ekspansje nielicznych linii męskich Y-DNA powiązane z narodzinami wodzostw.',
          'Królewskie pochówki w Ur: grobowce królów zawierające dziesiątki złożonych w ofierze konkubin i sług.',
          'Spisy podatkowe wczesnych dynastii egipskich dokumentujące dziedziczenie dóbr przez liczne potomstwo nomarchów.'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Patrycjat rzymski, arystokracja ateńska, cesarstwo chińskie.',
        phenotypeExpression: 'Początki napięcia status vs dzieci u elit miejskich: wyścig o luksus i karierę publiczną (cursus honorum) skłaniał zamożnych patrycjuszy do unikania małżeństw i ograniczania liczby spadkobierców, by nie dzielić majątku.',
        socialConstraintLevel: 75,
        statusEconomicPremium: 85,
        cohesionMentalHealthCost: 45,
        systemicMechanism: 'Koncentracja kapitału wymaga unikania rozdrabniania latyfundiów między zbyt wielu synów.',
        empiricalExamples: [
          'Alarmujące mowy cenzora Metellusa Numidyjskiego w Rzymie (102 p.n.e.): nawoływanie obywateli do żenienia się słowami: „Małżeństwo to udręka, lecz bez niego państwo upadnie”.',
          'Powszechna praktyka porzucania niemowląt (expositio) w starożytnej Grecji i Rzymie w celu zachowania statusu rodziny.',
          'Pisma Polibiusza (II w. p.n.e.) opisujące wyludnienie Hellady z powodu egoizmu elit odmawiających wychowywania więcej niż jednego dziecka.'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Pierwsze przejście demograficzne, powszechna edukacja, zakaz pracy dzieci.',
        phenotypeExpression: 'Początek zerwania korelacji na masową skalę: dzieci z darmowej siły roboczej na roli stają się kosztem netto dla rodziców w mieście.',
        socialConstraintLevel: 60,
        statusEconomicPremium: 70,
        cohesionMentalHealthCost: 55,
        systemicMechanism: 'Konieczność inwestycji w edukację potomstwa ogranicza optymalną wielkość rodziny robotniczej.',
        empiricalExamples: [
          'Spadek dzietności we Francji w XIX wieku po wprowadzeniu napoleońskiego podziału spadku.',
          'Badania demograficzne w Anglii (1870–1914): elity i urzędnicy pierwsi ograniczają liczbę dzieci do 2, podczas gdy robotnicy mają jeszcze 5–6.',
          'Pojawienie się nowoczesnych barier antykoncepcyjnych (wulkanizowany kauczuk Goodyeara w prezerwatywach).'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Gospodarka wiedzy, kosztowne mieszkania, wyścig prestiżowy na rynku korporacyjnym, pigułka antykoncepcyjna.',
        phenotypeExpression: 'Całkowite odwrócenie darwinowskie: osoby o najwyższym wykształceniu i zarobkach mają najmniej dzieci lub nie mają ich wcale.',
        socialConstraintLevel: 20,
        statusEconomicPremium: 95,
        cohesionMentalHealthCost: 80,
        systemicMechanism: 'Wyścig o dobra pozycyjne pochłania cały czas rozrodczy (pierwsza ciąża odkładana po 32–35. roku życia).',
        empiricalExamples: [
          'Korea Południowa (2023): współczynnik dzietności TFR na poziomie 0,72 (najniższy w historii świata) mimo najwyższego odsetka wyższego wykształcenia.',
          'Metaanalizy GWAS z Islandii (Kong et al., 2017 PNAS): wskaźnik poligenowy dla lat edukacji podlega ujemnej selekcji darwinowskiej.',
          'Kariery prawnicze i medyczne w metropoliach: kobiety zamrażające komórki jajowe (egg freezing sponsorowane przez Google/Apple) z powodu braku okna czasowego na rodzinę.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Starzejące się społeczeństwa z medianą wieku powyżej 50 lat, zapaść systemów emerytalnych.',
        phenotypeExpression: 'Potencjalny renesans selekcji kulturowo-religijnej: potomstwo pozostawią wyłącznie grupy o silnych przekonaniach ideologicznych odrzucających konsumpcjonizm statusowy.',
        socialConstraintLevel: 30,
        statusEconomicPremium: 70,
        cohesionMentalHealthCost: 75,
        systemicMechanism: 'Wypieranie populacji zlaicyzowanych przez enklawy o wysokiej prokreacji i tradycyjnym alloparentingu.',
        empiricalExamples: [
          'Prognozy demograficzne Erica Kaufmanna („Shall the Religious Inherit the Earth?”): wzrost odsetka populacji tradycyjnych wspólnot (Amisze, Charedim) do 25–40% w 2100 roku.',
          'Radykalne państwowe subsydia i ulgi podatkowe w krajach OECD w desperackich próbach podniesienia dzietności.',
          'Debaty nad automatyzacją opieki senioralnej przez roboty wobec braku młodego pokolenia opiekunów.'
        ]
      }
    }
  },
  {
    id: 'adhd-profil-eksploracyjny-drd4',
    traitName: 'Neuroróżnorodność i Profil Eksploracyjny (Fenotyp ADHD / Poszukiwanie Nowości)',
    subtitle: 'Od elitarnego koczowniczego zwiadowcy do pacjenta w fabrycznym systemie szkolnym i zysków w startupach',
    biologicalAnchor: 'Warianty receptorów dopaminy (m.in. poligeniczne profile korelujące z wariantem DRD4-7R), obniżona toniczna transmisja dopaminy w korze przedczołowej.',
    bioNeuroSubstrate: 'Sieć istotności biologicznej (salience network) preferująca bodźce nagłe i nowe nad powtarzalnymi, monotonnymi sekwencjami.',
    plasticityIndex: {
      level: 'umiarkowanie_konserwatywna',
      label: 'Umiarkowanie Konserwatywna',
      description: 'Silna poligeniczna baza biologiczna regulująca dopaminę; ocena fenotypu („zaleta vs choroba”) zależy w 100% od wymagań niszy środowiskowej.',
      score: 2
    },
    confidenceLevel: 'level1',
    keyResearchers: ['Dan Eisenberg', 'Justin Rhodes', 'Thom Hartmann', 'Russell Barkley'],
    emergingPhenomenaAndConsequences: 'Hiperpolaryzacja: w środowisku bezruchu (szkoła/korporacyjna tabelka) fenotyp ten ulega ciężkiej patologizacji; w warunkach dużej zmienności, przedsiębiorczości wysokiego ryzyka i tradingu na rynkach krypto staje się źródłem gigantycznej fortuny.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Nieprzewidywalne terytoria, migracje, ciągłe zagrożenie atakiem drapieżników.',
        phenotypeExpression: 'Elitarny zwiadowca i odkrywca: niepokój ruchowy, czujność peryferyjna i skłonność do ryzyka ratują całą grupę przed głodem i zasadzką.',
        socialConstraintLevel: 80,
        statusEconomicPremium: 90,
        cohesionMentalHealthCost: 15,
        systemicMechanism: 'Badania Eisenberga u nomadów Ariaal w Kenii: nosiciele allelu DRD4-7R byli lepiej odżywieni w warunkach koczowniczych niż nienosiciele.',
        empiricalExamples: [
          'Badania Dan Eisenberga (2008 PNAS) u koczowników Ariaal w Kenii: wyższy wskaźnik masy ciała (BMI) u koczowników z allelem DRD4-7R.',
          'Szybkie tropienie rannej zwierzyny przez godziny w zmieniającym się terenie wymagające ciągłego przełączania uwagi peryferyjnej.',
          'Migracje przez Cieśninę Beringa do Ameryki: wyższy odsetek wariantów poszukiwania nowości u populacji docierających na krańce kontynentów.'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Monotonna, cykliczna praca na roli: pielenie, orka, siew z dnia na dzień.',
        phenotypeExpression: 'Początek dysfunkcji: impulsywność i znudzenie cyklem rolnym utrudniają systematyczną uprawę roli.',
        socialConstraintLevel: 85,
        statusEconomicPremium: 30,
        cohesionMentalHealthCost: 45,
        systemicMechanism: 'Selekcja kulturowa na rzecz cierpliwości, dyscypliny i powtarzalności wysiłku fizycznego.',
        empiricalExamples: [
          'Teoria myśliwego vs rolnika Thoma Hartmanna: geny łowcy stają się obciążeniem w osiadłej społeczności oraczy.',
          'Dyscyplinowanie niespokojnych jednostek w osadach rolniczych pod groźbą wykluczenia ze spichlerza.',
          'Selekcja fenotypów o wyższej tolerancji monotonii w pradawnych kulturach ryżowych Azji.'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Wyprawy odkrywcze, podboje aleksandryjskie, nawigacja morska Fenicjan, koczownicy stepowi (Scytowie, Hunowie).',
        phenotypeExpression: 'Kanalizacja profilu poszukiwania nowości w ekspansję militarną i żeglugę morską; wybitni dowódcy kawalerii i odkrywcy nowych szlaków handlowych.',
        socialConstraintLevel: 70,
        statusEconomicPremium: 75,
        cohesionMentalHealthCost: 45,
        systemicMechanism: 'Cywilizacje osiadłe wysyłają niespokojne fenotypy na rubieże imperium jako kolonizatorów i żołnierzy.',
        empiricalExamples: [
          'Żeglarze feniccy i greccy zakładający kolonie od Morza Czarnego po Gibraltar: skrajna tolerancja ryzyka i ciekawość geograficzna.',
          'Aleksander Wielki i jego marsz w nieznane do Indii: podręcznikowy profil niestrudzonej eksploracji i niepokoju psychoruchowego.',
          'Koczownicy stepowi Eurazji: stałe premiowanie mobilności i błyskawicznej reakcji na bodźce w walce konnej.'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Fabryka z taśmą produkcyjną, pruski model szkoły przygotowujący do 8 godzin siedzenia w ławce.',
        phenotypeExpression: 'Ciężka patologizacja i stygmatyzacja: dziecko z profilem eksploracyjnym traktowane jak „leniwe”, „złe” lub z zaburzeniami zachowania.',
        socialConstraintLevel: 90,
        statusEconomicPremium: 15,
        cohesionMentalHealthCost: 80,
        systemicMechanism: 'Szkoła i fabryka wymagają absolutnego zsynchronizowania z rytmem dzwonka i maszyny.',
        empiricalExamples: [
          'Wprowadzenie kar cielesnych w szkołach XIX w. za wiercenie się w ławkach i brak skupienia na tablicy.',
          'Diagnoza „Minimal Brain Dysfunction” (MBD) w latach 50. XX w. jako medyczna etykieta dla dzieci niepasujących do pruskiej klasy.',
          'Praca przy taśmie produkcyjnej w fabrykach Forda doprowadzająca pracowników o profilu ADHD do załamań nerwowych.'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Ekonomia uwagi, startupy technologiczne, praca projektowa, rynki krypto, gry wideo.',
        phenotypeExpression: 'Renesans i polaryzacja: hiperfokus w warunkach kryzysowych nagradzany w venture capital, podczas gdy w klasycznej administracji grozi zwolnieniem.',
        socialConstraintLevel: 35,
        statusEconomicPremium: 85,
        cohesionMentalHealthCost: 70,
        systemicMechanism: 'Środowisko o wysokiej dynamice nowości premiuje nieliniowe przetwarzanie informacji.',
        empiricalExamples: [
          'Wielu wybitnych założycieli startupów technologicznych otwarcie deklarujących ADHD jako swoją „supermoc” w fazie kreacji produktu.',
          'Dzienny trading na giełdach kryptowalut: błyskawiczne wychwytywanie mikrotrendów na wielu monitorach jednocześnie.',
          'Masowa farmakoterapia stymulantami (metylofenidat, amfetaminy) w celu zmuszenia mózgu ADHD do pracy w biurze.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Praca wspierana przez spersonalizowanych agentów AI kompensujących deficyty wykonawcze.',
        phenotypeExpression: 'Agent AI przejmuje żmudną organizację, kalendarz i administrację, uwalniając czysty potencjał twórczy i syntetyczny człowieka z profilem eksploracyjnym.',
        socialConstraintLevel: 25,
        statusEconomicPremium: 90,
        cohesionMentalHealthCost: 40,
        systemicMechanism: 'Zewnętrzne protezy kognitywne eliminują słabości wykonawcze, maksymalizując premię za nieszablonowe idee.',
        empiricalExamples: [
          'Edukacja immersyjna w rzeczywistości rozszerzonej (Spatial Computing) dostosowująca tempo nauki do poziomu dopaminy ucznia.',
          'Zespoły człowiek–AI, w których neuroatypowy człowiek dostarcza intuicji kierunkowej, a agent AI wykonuje kalkulacje.',
          'Genetyczne doradztwo preimplantacyjne z etycznym zakazem eliminowania wariantów dopaminowych z uwagi na ich wartość innowacyjną.'
        ]
      }
    }
  },
  {
    id: 'psychologia-weird-hiperindywidualizm',
    traitName: 'Psychologia WEIRD i Hiperindywidualizm',
    subtitle: 'Joseph Henrich: jak rozbicie klanów stworzyło innowacyjny rynek i epidemię wykorzenienia',
    biologicalAnchor: 'Elastyczność architektoniczna mózgu i neuroplastyczność kulturowa (czytanie reorganizujące lewe zakręty potyliczne VWFA).',
    bioNeuroSubstrate: 'Przesunięcie kontroli z zewnętrznego wstydu społecznego na wewnętrzne poczucie winy i autokontrolę analityczną.',
    plasticityIndex: {
      level: 'hiperplastyczna',
      label: 'Hiperplastyczna',
      description: 'Zjawisko w 100% kulturowo-instytucjonalne: mózg ludzki został zreorganizowany przez zakazy małżeństw klanowych i powszechną alfabetyzację.',
      score: 4
    },
    confidenceLevel: 'level1',
    keyResearchers: ['Joseph Henrich', 'Jonathan Haidt', 'Steven Heine', 'Ara Norenzayan'],
    emergingPhenomenaAndConsequences: 'Kryzys tożsamości i samotności w zachodnich metropoliach: całkowite wyzwolenie z więzów rodziny i tradycji skutkuje pustką egzystencjalną i podatnością na zastępcze sekty cyfrowe.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Głęboka tożsamość relacyjna: jednostka nie istnieje w oderwaniu od myśli i więzi klanu.',
        phenotypeExpression: 'Holistyczne widzenie świata, moralność klanowa oparta na lojalności i wstydzie wobec współplemieńców.',
        socialConstraintLevel: 95,
        statusEconomicPremium: 20,
        cohesionMentalHealthCost: 15,
        systemicMechanism: 'Przetrwanie całkowicie zależne od sieci wsparcia krewnego.',
        empiricalExamples: [
          'Badania międzykulturowe Josepha Henricha: w tradycyjnych społecznościach nie istnieje pojęcie „ja” niezależnego od ról w klanie.',
          'Kary za przewinienia nakładane zbiorowo na całą rodzinę sprawcy.',
          'Holistyczne widzenie tła w testach uwagi wzrokowej u ludów tradycyjnych (skupienie na relacjach między obiektami).'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Klany rodowe, kulty przodków, zemsta rodowa.',
        phenotypeExpression: 'Wierność rodowi ponad wszystko; obcy z innego klanu jest potencjalnym wrogiem pozbawionym praw.',
        socialConstraintLevel: 90,
        statusEconomicPremium: 50,
        cohesionMentalHealthCost: 35,
        systemicMechanism: 'Instytucje rodowe są jedynym gwarantem bezpieczeństwa militarnego i prawnego.',
        empiricalExamples: [
          'Zwyczaje krwawej zemsty (wendety) między rodami trwające przez pokolenia.',
          'Wspólne grobowce megalityczne (tumulusy) mieszczące kości całego klanu.',
          'Małżeństwa aranżowane wyłącznie w celu powiększenia majątku ziemi rodowej.'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Greckie polis (obywatelstwo niezależne od klanu), rzymskie prawo cywilne, średniowieczny program małżeński Kościoła katolickiego (MFP).',
        phenotypeExpression: 'Początki myślenia analitycznego i podmiotowości prawnej; rozbicie klanów w Europie Zachodniej przez zakazy małżeństw między kuzynami.',
        socialConstraintLevel: 70,
        statusEconomicPremium: 65,
        cohesionMentalHealthCost: 45,
        systemicMechanism: 'Kościół w średniowieczu zakazuje endogamii i lewiratu, zmuszając do szukania partnerów poza klanem i tworząc cechy rzemieślnicze oraz uniwersytety (Henrich).',
        empiricalExamples: [
          'Reformy Klejstenesa w Atenach (508 p.n.e.): sztuczny podział obywateli na 10 fyl rozbijający tradycyjne arystokratyczne klany rodowe.',
          'Rzymskie pojęcie osoby prawnej (persona) posiadającej indywidualne prawa i obowiązki w sądzie.',
          'Średniowieczne edykty papieskie zakazujące małżeństw do 6. stopnia pokrewieństwa, niszczące struktury klanowe w Europie.'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Urbanizacja niszcząca społeczności wiejskie; narodziny jednostki prawnej, obywatela i konsumenta.',
        phenotypeExpression: 'Profil WEIRD (Western, Educated, Industrialized, Rich, Democratic): analityczne myślenie, bezosobowe zaufanie do obcych, etyka intencji.',
        socialConstraintLevel: 55,
        statusEconomicPremium: 75,
        cohesionMentalHealthCost: 65,
        systemicMechanism: 'Rozwój wolnego rynku pracy wymaga jednostki w pełni mobilnej, nieuwiązanej zobowiązaniami rodowymi.',
        empiricalExamples: [
          'Filozofia Johna Locke\'a i Deklaracja Praw Człowieka: jednostka jako pierwotny podmiot praw przed państwem i wspólnotą.',
          'Pojawienie się bezosobowych banków i giełd papierów wartościowych opartych na zaufaniu do kontraktu, a nie pokrewieństwa.',
          'Powszechna alfabetyzacja modyfikująca fizyczną strukturę kory mózgowej (Visual Word Form Area) u milionów dzieci.'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Społeczeństwo singli, hiperindywidualizm konsumpcyjny, płynna tożsamość, media społecznościowe.',
        phenotypeExpression: 'Ekstremalna innowacyjność technologiczna połączona z atomizacją społeczną i rekordowym wskaźnikiem depresji i samotności.',
        socialConstraintLevel: 20,
        statusEconomicPremium: 90,
        cohesionMentalHealthCost: 90,
        systemicMechanism: 'Konsumpcjonizm zastępuje więzi wspólnotowe zakupem gotowych tożsamości rynkowych.',
        empiricalExamples: [
          'Ponad 50% gospodarstw domowych w Sztokholmie i Paryżu to gospodarstwa jednoosobowe (single households).',
          'Eksperymenty Henricha z grą w Ultimatum: kraje WEIRD wykazują skrajną potrzebę karania nieuczciwości nawet kosztem własnych strat finansowych.',
          'Przemysł coachingu i samorozwoju warty miliardy dolarów jako odpowiedź na brak tradycyjnych wspólnotowych punktów odniesienia.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Globalne sieci cyfrowe i próby rekonstrukcji „nowoplemion” (neo-tribes).',
        phenotypeExpression: 'Poszukiwanie syntetycznych wspólnot sensu (komuny ekologiczne, gildie sieciowe) jako remedium na toksyczny hiperindywidualizm.',
        socialConstraintLevel: 35,
        statusEconomicPremium: 70,
        cohesionMentalHealthCost: 60,
        systemicMechanism: 'Biologiczna potrzeba przynależności zmusza do tworzenia nowych form wspólnotowości.',
        empiricalExamples: [
          'Ekosystemy mikro-społeczności internetowych skupionych wokół wspólnych celów regeneracji biologicznej i ekologicznej.',
          'Reforma prawa miejskiego promująca co-housing i współdzielone przestrzenie życiowe.',
          'Znużenie cyfrową atomizacją skutkujące renesansem rytuałów wspólnotowych twarzą w twarz.'
        ]
      }
    }
  },
  {
    id: 'behawioralny-uklad-odpornosciowy-wstret',
    traitName: 'Behawioralny Układ Odpornościowy i Wstręt Ideologiczny',
    subtitle: 'Od unikania gnijącego mięsa do dehumanizacji przeciwników politycznych w mediach społecznościowych',
    biologicalAnchor: 'Emocja wstrętu, aktywacja kory przedniej wyspy, odruchy odrzucenia fizycznego.',
    bioNeuroSubstrate: 'Sprzężenie kory wyspy z nerwem błędnym i autonomicznym układem przywspółczulnym.',
    plasticityIndex: {
      level: 'umiarkowanie_konserwatywna',
      label: 'Umiarkowanie Konserwatywna',
      description: 'Obwód trzewny wstrętu jest prastary i ultrakonserwatywny, lecz jego cele pojęciowe są plastycznie programowane przez kulturę.',
      score: 2
    },
    confidenceLevel: 'level1',
    keyResearchers: ['Mark Schaller', 'Joshua Tybur', 'Jonathan Haidt', 'Debra Lieberman'],
    emergingPhenomenaAndConsequences: 'Czystość moralna w internecie: przeciwnik polityczny nie jest traktowany jako osoba o innych poglądach, lecz jako „zarazek” lub „skażenie”, którego usunięcie (deplatforming, lincz) jest obowiązkiem higienicznym.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Środowisko naturalne z pasożytami, brak antybiotyków i wiedzy mikrobiologicznej.',
        phenotypeExpression: 'Wstręt somatyczny ratujący życie: odruchowe unikanie odchodów, padliny, wymiocin i osobników z widocznymi owrzodzeniami skóry.',
        socialConstraintLevel: 90,
        statusEconomicPremium: 30,
        cohesionMentalHealthCost: 15,
        systemicMechanism: 'Bariera psychologiczna redukująca ryzyko epidemii w małej grupie bez znajomości mikroskopu.',
        empiricalExamples: [
          'Unikanie kontaktu z padliną o zapachu gnilnym przez łowców-zbieraczy Hadza.',
          'Wyrzucanie odchodów z dala od źródeł wody pitnej jako wrodzony odruch behawioralny.',
          'Kwarantanna rannych z gnijącymi ranami na obrzeżach obozowiska paleolitycznego.'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Bliskość udomowionych zwierząt (odzwierzęce patogeny: ospa, odra, grypa), gęste osady.',
        phenotypeExpression: 'Rozwój religijnych kodeksów czystości i tabu pokarmowych (np. zakaz wieprzowiny, rytualne obmycia).',
        socialConstraintLevel: 85,
        statusEconomicPremium: 40,
        cohesionMentalHealthCost: 35,
        systemicMechanism: 'Kodyfikacja wstrętu biologicznego w systemy norm sakralnych.',
        empiricalExamples: [
          'Tabu pokarmowe na Bliskim Wschodzie zakazujące wieprzowiny (nosiciela włośnicy) i padliny.',
          'Rytuały izolacji trędowatych i osób z chorobami skóry w osadach agrarnych.',
          'Konstrukcja pierwszych kanałów ściekowych w Mohendżo-Daro (dolina Indusu).'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Prawo kapłańskie (Księga Kapłańska), akwedukty i łaźnie rzymskie, rozróżnienie sacrum vs profanum.',
        phenotypeExpression: 'Przeniesienie pojęcia czystości fizycznej na czystość moralną i kastową; wstręt do nieczystych rytualnie (pariasów w Indiach, barbarzyńców).',
        socialConstraintLevel: 80,
        statusEconomicPremium: 50,
        cohesionMentalHealthCost: 40,
        systemicMechanism: 'Systemy kastowe i religijne wykorzystują emocję wstrętu do utrzymania barier społecznych i uniknięcia mieszania klas.',
        empiricalExamples: [
          'System kastowy w starożytnych Indiach (Prawa Manu): niedotykalni (dalit) wykonujący prace przy zwłokach i nieczystościach traktowani jako fizyczne źródło skażenia.',
          'Rzymska duma sanitarna: akwedukty i termy publiczne jako symbol wyższości cywilizacyjnej nad „brudnymi barbarzyńcami”.',
          'Rytualne ablucje w judaizmie i wczesnym islamie łączące higienę rąk z czystością przed modlitwą.'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Przeludnione slumsy robotnicze, epidemie cholery, rozwój teorii zarazkowej Pasteura.',
        phenotypeExpression: 'Przeniesienie retoryki sanitarnej na narody i rasy: ideologie totalitarne (nazizm) używają języka wstrętu do uzasadnienia ludobójstwa.',
        socialConstraintLevel: 65,
        statusEconomicPremium: 50,
        cohesionMentalHealthCost: 75,
        systemicMechanism: 'Militarna instrumentalizacja układu odpornościowego do dehumanizacji „obcych”.',
        empiricalExamples: [
          'Propaganda nazistowska w filmie „Der ewige Jude” (1940): montaż porównujący Żydów do szczurów roznoszących tyfus w celu stymulacji przedniej wyspy Niemców.',
          'Ruch higieny rasowej (eugenika) w Europie i USA dążący do sterylizacji „elementów degenerujących pulę biologiczną narodu”.',
          'Rewolucja sanitarna w Londynie po odkryciu Johna Snowa (pompa na Broad Street podczas epidemii cholery w 1854 r.).'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Polaryzacja algorytmiczna w internecie, wojny plemienne na Twitterze/X, pandemia COVID-19.',
        phenotypeExpression: 'Wstręt moralny jako główna waluta zaangażowania: potępianie „moralnie skażonych” generuje kliknięcia i poczucie przynależności do własnego obozu.',
        socialConstraintLevel: 30,
        statusEconomicPremium: 80,
        cohesionMentalHealthCost: 85,
        systemicMechanism: 'Algorytmy priorytetyzują emocje o wysokiej pobudliwości somatycznej (oburzenie i wstręt).',
        empiricalExamples: [
          'Zjawisko polaryzacji wokół maseczek i szczepień w trakcie pandemii COVID-19: obie strony sporu oskarżające się wzajemnie o bycie „zagrożeniem biologicznym”.',
          'Deplatforming i lincze reputacyjne w sieci: język oskarżeń odwołujący się do „toksyczności” i „skażenia moralnego”.',
          'Badania fMRI Jonathana Haidta: wyższa pobudliwość wstrętu u konserwatystów wobec osób naruszających tradycyjne tabu.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Bio-bezpieczeństwo po erze pandemii, cyfrowe paszporty immunologiczne, syntetyczne patogeny.',
        phenotypeExpression: 'Fuzja wstrętu biologicznego z nadzorem technologicznym: wykluczenie jednostek nieodpowiadających normom higienicznym lub biometrycznym.',
        socialConstraintLevel: 50,
        statusEconomicPremium: 75,
        cohesionMentalHealthCost: 70,
        systemicMechanism: 'Instytucjonalny aparat sanitarno-algorytmiczny eliminujący jednostki niezgodne z profilaktyką państwową.',
        empiricalExamples: [
          'Inteligentne toalety i czujniki domowe analizujące metabolizm i mikroflorę w czasie rzeczywistym.',
          'Systemy kwarantanny miejskiej uruchamiane automatycznie przez algorytmy po wykryciu anomalii oddechowych w metrze.',
          'Pojawienie się subkultur „czystości genetycznej” odmawiających kontaktu z osobami bez certyfikatu edycji genowej.'
        ]
      }
    }
  },
  {
    id: 'transformacja-agresji-fizyczna-w-reputacyjna',
    traitName: 'Transformacja Agresji: Od Przemocy Fizycznej do Ostracyzmu Cyfrowego',
    subtitle: 'Monopol państwa na przemoc a przeniesienie agresji w domenę cancel culture i procesów prawnych',
    biologicalAnchor: 'Obwody ataku drapieżniczego i obronnego w podwzgórzu i istocie szarej okołowodociągowej (PAG).',
    bioNeuroSubstrate: 'Równoległa aktywacja kory przedczołowej kontrolującej agresję reaktywną przy kanale dla agresji werbalno-społecznej.',
    plasticityIndex: {
      level: 'umiarkowanie_konserwatywna',
      label: 'Umiarkowanie Konserwatywna',
      description: 'Potrzeba rywalizacji i dominacji stała; forma ekspresji została przekierowana z maczugi na paragrafy i cyfrowy ostracyzm.',
      score: 2
    },
    confidenceLevel: 'level1',
    keyResearchers: ['Steven Pinker', 'Richard Wrangham', 'Christopher Boehm', 'Norbert Elias'],
    emergingPhenomenaAndConsequences: 'Zjawisko cyfrowego ukamienowania (public shaming): milionowe lincze reputacyjne w sieci jako substytut dawnego wygnania z plemienia.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Brak zinstytucjonalizowanej policji ani sądów.',
        phenotypeExpression: 'Przemoc fizyczna bezpośrednia (uderzenie maczugą, rzut oszczepem) kontrolowana przez koalicje męskie; śmiertelne rajdy międzygrupowe.',
        socialConstraintLevel: 80,
        statusEconomicPremium: 70,
        cohesionMentalHealthCost: 35,
        systemicMechanism: 'Brak państwa zmuszał do ciągłej gotowości do obrony fizycznej.',
        empiricalExamples: [
          'Stanowisko Nataruk w Kenii (~10 tys. lat): masakra 27 łowców-zbieraczy z wbitymi w czaszki ostrzami z obsydianu.',
          'Czaszka Cranium 17 z Sima de los Huesos (~430 tys. lat): najstarsze udokumentowane morderstwo z dwoma identycznymi złamaniami kości czołowej.',
          'Rajdy łowieckie między klanami Yanomami w dorzeczu Amazonki opisane przez Napoleona Chagnona.'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Wojny zorganizowane o spichlerze, niewolnictwo.',
        phenotypeExpression: 'Eskalacja zorganizowanej przemocy zbrojnej; wyłanianie się kasty wojowników i arystokracji militarnej.',
        socialConstraintLevel: 65,
        statusEconomicPremium: 85,
        cohesionMentalHealthCost: 60,
        systemicMechanism: 'Instytucjonalizacja armii i podboju terytorialnego.',
        empiricalExamples: [
          'Budowa pierwszych kamiennych murów i wież obronnych w Jerychu (ok. 8000 p.n.e.).',
          'Pojawienie się wyspecjalizowanego oręża stworzonego wyłącznie do zabijania ludzi (topory bojowe, sztylety miedziane).',
          'Niewolnictwo jeńców wojennych jako motor napędowy pierwszych państw w dolinie Tygrysu i Eufratu.'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Kodeksy prawne, sądownictwo ateńskie (Areopag), rzymskie prawo procesowe, monopol imperium na przemoc.',
        phenotypeExpression: 'Początek cywilizowania agresji (Norbert Elias): wolni obywatele nie mogą zabijać rywali na ulicy; agresja przenosi się na procesy sądowe, oracje polityczne i walkę o zaszczyty.',
        socialConstraintLevel: 75,
        statusEconomicPremium: 75,
        cohesionMentalHealthCost: 50,
        systemicMechanism: 'Sądy i prawo cywilne zastępują krwawą wendetę; przemoc fizyczna zarezerwowana wyłącznie dla armii imperialnej na granicach.',
        empiricalExamples: [
          'Rzymskie prawo XII Tablic zakazujące samosądów i nakazujące rozstrzyganie sporów przed pretorem.',
          'Słynne procesy polityczne w Atenach (proces Sokratesa w 399 p.n.e.): eliminacja dysydenta za pomocą wyroku sądowego, a nie skrytobójstwa.',
          'Pojawienie się instytucji paszkwili i poezji satyrycznej (Marcjalis, Juwenalis) jako broni w niszczeniu reputacji rywali.'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Współczesne państwo narodowe, monopol Webera na przemoc fizyczną, policja miejska.',
        phenotypeExpression: 'Drastyczny spadek zabójstw w życiu codziennym (Steven Pinker: spadek z 30/100 tys. w średniowieczu do <1/100 tys. w XX w.); agresja przeniesiona w wojny totalne i pojedynki honorowe.',
        socialConstraintLevel: 80,
        statusEconomicPremium: 40,
        cohesionMentalHealthCost: 65,
        systemicMechanism: 'Policja i kodeks karny bezwzględnie penalizują bójki uliczne i samosądy.',
        empiricalExamples: [
          'Zanik arystokratycznych pojedynków na pistolety w Europie na rzecz pozwów o zniesławienie.',
          'Powstanie nowoczesnej policji metropolitalnej w Londynie (Scotland Yard Roberta Peela w 1829 r.).',
          'Wojny państwowe jako zorganizowana, biurokratyczna maszyneria destrukcji (I i II wojna światowa).'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Przestrzeń wirtualna, sądy korporacyjne, globalne platformy mediowe.',
        phenotypeExpression: 'Przeniesienie 99% agresji w sferę reputacyjną: niszczenie kariery w sieci, procesy o zniesławienie, stalking cyfrowy, doxxing i zorganizowany cancel culture.',
        socialConstraintLevel: 30,
        statusEconomicPremium: 85,
        cohesionMentalHealthCost: 80,
        systemicMechanism: 'Bezkarność anonimowych ataków w internecie przy jednoczesnym surowym zakazie użycia siły fizycznej w świecie realnym.',
        empiricalExamples: [
          'Książka Jona Ronsona „So You\'ve Been Publicly Shamed”: analiza przypadków ludzi, których życie zawodowe zostało zniszczone w 24 godziny po jednym tweecie.',
          'Doxxing i nasyłanie fałszywych oddziałów antyterrorystycznych (swatting) na streamerów jako współczesna broń niszczenia rywali.',
          'Wojny patentowe i agresywne przejęcia firm przy użyciu korporacyjnych kancelarii prawnych.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Automatyczny audyt reputacyjny AI, cyfrowe blokady kont bankowych i portfeli biometrycznych.',
        phenotypeExpression: 'Agresja zautomatyzowana: eliminacja przeciwnika jednym kliknięciem blokującym jego tożsamość cyfrową i środki do życia.',
        socialConstraintLevel: 60,
        statusEconomicPremium: 75,
        cohesionMentalHealthCost: 75,
        systemicMechanism: 'Przekazanie egzekucji sankcji algorytmom zintegrowanym z systemami bankowymi.',
        empiricalExamples: [
          'Systemy kredytu społecznego i algorytmicznego rankingu obywatelskiego testowane w niektórych jurysdykcjach.',
          'Cyfrowe zamrażanie portfeli kryptowalutowych i dostępów do usług chmurowych dysydentów politycznych.',
          'Wojny deepfake generowane przez AI niszczące wiarygodność liderów w czasie rzeczywistym przed wyborami.'
        ]
      }
    }
  },
  {
    id: 'polaryzacja-strategii-zyciowych-lhs',
    traitName: 'Polaryzacja Strategii Życiowych (Fast vs. Slow Life History)',
    subtitle: 'Nierówności klasowe jako biologiczny wyzwalacz diametralnie odmiennych programów psychicznych',
    biologicalAnchor: 'Plastyczność fenotypowa osi HPA i układu gonadowego regulowana stresem wczesnodziecięcym.',
    bioNeuroSubstrate: 'Wskaźnik kompromisu między bieżącą reprodukcją a somatycznym utrzymaniem organizmu (Soma vs Germline trade-off).',
    plasticityIndex: {
      level: 'plastyczna',
      label: 'Wysoko Plastyczna',
      description: 'Zdolność układu nerwowego do kalibracji tempa życia w pierwszych 7 latach w odpowiedzi na stabilność środowiska.',
      score: 3
    },
    confidenceLevel: 'level1',
    keyResearchers: ['Bruce Ellis', 'Jay Belsky', 'Patricia Draper'],
    emergingPhenomenaAndConsequences: 'Rozłam klasowy: elity realizują skrajnie powolną strategię życiową (inwestycja w jedno dziecko po 35. r.ż.), podczas gdy wykluczone enklawy wchodzą w strategię szybką, co cementuje nierówności międzypokoleniowe.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Zmienne środowisko klimatyczne, zlodowacenia, susze.',
        phenotypeExpression: 'Elastyczna kalibracja całej grupy: w trudnych latach tempo dojrzewania i reprodukcji dostosowywało się do dostępności zwierzyny.',
        socialConstraintLevel: 85,
        statusEconomicPremium: 40,
        cohesionMentalHealthCost: 20,
        systemicMechanism: 'Brak wielkich podziałów majątkowych wewnątrz grupy sprawiał, że całe plemię dzieliło podobny profil ryzyka.',
        empiricalExamples: [
          'Badania etnograficzne łowców-zbieraczy: wydłużone karmienie piersią (do 4 lat) jako naturalna antykoncepcja laktacyjna regulująca tempo rozrodu.',
          'Elastyczne dostosowanie wieku inicjacji seksualnej w zależności od śmiertelności dorosłych w plemieniu.',
          'Wspólne ponoszenie ryzyka głodu przez wszystkich członków obozowiska.'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Rozwarstwienie majątkowe na chłopów i arystokrację.',
        phenotypeExpression: 'Początek rozszczepienia: biedota wiejska narażona na głód i wczesną śmierć rozwija szybsze strategie prokreacyjne.',
        socialConstraintLevel: 75,
        statusEconomicPremium: 60,
        cohesionMentalHealthCost: 45,
        systemicMechanism: 'Różnice w stabilności dostępu do spichlerza różnicują biologiczny horyzont planowania.',
        empiricalExamples: [
          'Średnia długość życia rolników neolitycznych spadająca do zaledwie 20–25 lat z powodu infekcji i głodu, wymuszająca wczesne rodzenie dzieci.',
          'Elity spichrzowe inwestujące w długoterminowe sojusze małżeńskie.',
          'Pojawienie się chorób cywilizacyjnych (anemia, pasożyty) u klas pracujących fizycznie.'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Gospodarka niewolnicza, patrycjusze vs plebejusze i niewolnicy.',
        phenotypeExpression: 'Głęboka polaryzacja: patrycjusze realizują powolną strategię edukacyjną (retoryka, filozofia, wysokie posagi), podczas gdy niewolnicy i miejski plebs żyją w warunkach skrajnej niepewności jutra.',
        socialConstraintLevel: 70,
        statusEconomicPremium: 75,
        cohesionMentalHealthCost: 55,
        systemicMechanism: 'Pochodzenie społeczne warunkuje horyzont biologiczny: dostęp do term i lekarzy u arystokracji vs slumsy Subury w Rzymie.',
        empiricalExamples: [
          'Dzielnica Subura w starożytnym Rzymie: walące się drewniane insule, ciągłe pożary i epidemie wymuszające życie chwilą u biedoty.',
          'Wychowanie spartańskie (agoge) vs ateńska paideia: odmienne modele inwestycji rodzicielskiej w zależności od celów państwa.',
          'Pisma Seneki i Marka Aureliusza odzwierciedlające luksus długoterminowej samokontroli i autorefleksji dostępny wyłącznie elitom imperium.'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Dzielnice nędzy w XIX-wiecznym Londynie vs wille burżuazji.',
        phenotypeExpression: 'Wysoka śmiertelność niemowląt w klasie robotniczej napędza wczesną prokreację i wysoką dzietność.',
        socialConstraintLevel: 65,
        statusEconomicPremium: 70,
        cohesionMentalHealthCost: 65,
        systemicMechanism: 'Skrajne warunki sanitarne wymuszają strategię adaptacji do wysokiej śmiertelności.',
        empiricalExamples: [
          'Opisy slumsów Manchesteru przez Fryderyka Engelsa: średnia długość życia robotnika wynosząca 17–19 lat z powodu tyfusu i zanieczyszczeń.',
          'Wiktoriańskie rodziny robotnicze rodzące po 8–10 dzieci, z których przeżywała połowa.',
          'Burżuazja inwestująca w wieloletnią edukację synów na uniwersytetach w Oxfordzie i Cambridge.'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Gentryfikacja, niestabilność umów śmieciowych, dostęp do edukacji wyższej.',
        phenotypeExpression: 'Dramatyczne rozwarstwienie: klasa wyższa inwestuje gigantyczny kapitał w rozwój nielicznego potomstwa (slow), podczas gdy grupy marginalizowane doświadczają chronicznego stresu statusowego wyzwalającego strategię szybką.',
        socialConstraintLevel: 25,
        statusEconomicPremium: 90,
        cohesionMentalHealthCost: 80,
        systemicMechanism: 'Niestabilność ekonomiczna indukuje epigenetyczną reakcję na niepewność środowiskową.',
        empiricalExamples: [
          'Badania Jaya Belsky\'ego: dziewczęta wychowywane w rodzinach z niestabilnym, agresywnym lub nieobecnym ojcem przechodzą pierwszą miesiączkę (menarche) o 1–2 lata wcześniej.',
          'Kultura „helicopter parenting” u bogatych: prywatne korepetycje, lekcje skrzypiec i sport od 4. roku życia.',
          'Wysoka wariancja partnerska i wczesne macierzyństwo w enklawach ubóstwa miejskiego.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Inżynieria długowieczności dla najbogatszych i prekarne enklawy peryferyjne.',
        phenotypeExpression: 'Biologiczne rozszczepienie gatunku: elita żyjąca ponad 100 lat w powolnym cyklu życiowym a prekariat o krótkiej perspektywie reprodukcyjnej.',
        socialConstraintLevel: 20,
        statusEconomicPremium: 95,
        cohesionMentalHealthCost: 90,
        systemicMechanism: 'Monopolizacja zaawansowanych terapii przeciwstarzeniowych przez kapitał.',
        empiricalExamples: [
          'Komerjalizacja terapii komórkami macierzystymi i reprogramowania komórkowego czynnikami Yamanaki.',
          'Pojawienie się „klasy długowiecznej” planującej kariery w horyzoncie 80 lat aktywności zawodowej.',
          'Polaryzacja dostępu do medycyny prewencyjnej jako najgłębsza bariera biologiczna w historii Homo.'
        ]
      }
    }
  },
  {
    id: 'odciazenie-poznawcze-cognitive-offloading',
    traitName: 'Odciążenie Poznawcze (Cognitive Offloading) i Kognicja Hybrydowa',
    subtitle: 'Od wewnętrznej mapy topograficznej hipokampa do całkowitego uzależnienia od baz danych i modeli AI',
    biologicalAnchor: 'Pojemność hipokampa, sieci czołowo-ciemieniowe pamięci roboczej i orientacji przestrzennej.',
    bioNeuroSubstrate: 'Plastyczność synaptyczna zależna od używania (LTP w polu CA1 hipokampa).',
    plasticityIndex: {
      level: 'hiperplastyczna',
      label: 'Hiperplastyczna',
      description: 'Zdolność mózgu do natychmiastowego delegowania obliczeń i pamięci na zewnętrzne nośniki (od nacięć na kości po smartfony i LLM).',
      score: 4
    },
    confidenceLevel: 'level1',
    keyResearchers: ['Eleanor Maguire', 'Andy Clark', 'David Chalmers', 'Evan Risko'],
    emergingPhenomenaAndConsequences: 'Atrofia pamięci operacyjnej i zanik głębokiej orientacji przestrzennej: bez smartfona współczesny człowiek czuje bezradność poznawczą w nieznanym mieście.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Rozległe krajobrazy bez map papierowych ani drogowskazów.',
        phenotypeExpression: 'Potężna wewnętrzna pamięć przestrzenna: pamiętanie każdego strumienia, drzewa orientacyjnego i gwiazdozbioru na obszarze setek kilometrów kwadratowych.',
        socialConstraintLevel: 80,
        statusEconomicPremium: 90,
        cohesionMentalHealthCost: 10,
        systemicMechanism: 'Błąd w nawigacji oznaczał śmierć z odwodnienia lub zamarznięcie.',
        empiricalExamples: [
          'Rdzenni mieszkańcy Australii (Aborygeni) i ich „linie pieśni” (Songlines): pamięciowe mapy tysięcy kilometrów pustyni kodowane w rytmicznych pieśniach.',
          'Koczownicy San rozpoznający po śladach na piasku konkretne osobniki antylop i kierunek ich marszu sprzed wielu godzin.',
          'Użycie nacięć na kościach (np. kość z Ishango, ~20 tys. lat) jako pierwszych zewnętrznych kalendarzy księżycowych.'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Wynalezienie pisma klinowego i kamiennych słupów granicznych.',
        phenotypeExpression: 'Początek outsourcingu pamięci: rejestry magazynowe i spisy podatkowe zastępują pamięć biologiczną skrybów.',
        socialConstraintLevel: 70,
        statusEconomicPremium: 65,
        cohesionMentalHealthCost: 20,
        systemicMechanism: 'Przeniesienie danych ekonomicznych na nośniki gliniane i papirus.',
        empiricalExamples: [
          'Tabliczki gliniane z Uruk: pierwsze zapiski nie dotyczyły poezji, lecz worków jęczmienia i sztuk bydła wydawanych ze spichlerza.',
          'Graniczne kamienie miedzowe (kudurru) w Mezopotamii jako trwały, zewnętrzny rejestr własności ziemi.',
          'Węzełkowe pismo kipu w Andach służące do ewidencji zasobów imperium bez użycia pisma alfabetycznego.'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Biblioteka Aleksandryjska, rozwój pism filozoficznych, spór Platona o pismo.',
        phenotypeExpression: 'Pierwsza wielka krytyka odciążenia poznawczego: lęk, że pismo zniszczy pamięć biologiczną człowieka; jednoczesny rozkwit technik mnemoniki (pałace pamięci).',
        socialConstraintLevel: 65,
        statusEconomicPremium: 75,
        cohesionMentalHealthCost: 30,
        systemicMechanism: 'Pismo staje się warunkiem funkcjonowania skomplikowanego prawa rzymskiego i administracji imperium.',
        empiricalExamples: [
          'Dialog Platona „Fajdros”: mit o bogu Teucie, w którym król Tamuz ostrzega, że pismo przyniesie pozór mądrości zamiast prawdziwej wiedzy, bo ludzie przestaną ćwiczyć pamięć.',
          'Rzymska metoda loci (pałac pamięci) stosowana przez retorów (Cyceron) do pamiętania wielogodzinnych mów sądowych bez notatek.',
          'Biblioteka w Aleksandrii gromadząca setki tysięcy zwojów papirusu jako zewnętrzny mózg cywilizacji hellenistycznej.'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Książki drukowane, encyklopedie, mapy sztabowe, telegraf, masowa edukacja.',
        phenotypeExpression: 'Powszechna alfabetyzacja rozbudowuje pamięć semantyczną przy jednoczesnym poleganiu na druku jako trwałym archiwum.',
        socialConstraintLevel: 60,
        statusEconomicPremium: 75,
        cohesionMentalHealthCost: 35,
        systemicMechanism: 'Masowy obieg informacji drukowanej standaryzuje wiedzę techniczną i inżynieryjną.',
        empiricalExamples: [
          'Encyklopedia Diderota i d\'Alemberta jako próba skodyfikowania całej technologii rzemieślniczej Oświecenia.',
          'Wprowadzenie dokładnych map kartograficznych Ordnance Survey w Wielkiej Brytanii redukujących potrzebę lokalnych przewodników.',
          'Kartoteki biurowe i systemy skorowidzowe w korporacjach XIX w. standaryzujące zarządzanie wiedzą.'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Smartfony, nawigacja GPS, wyszukiwarki Google, wczesna AI (ChatGPT, Claude).',
        phenotypeExpression: 'Efekt Google i zanik orientacji: mózg nie zapamiętuje samego faktu, lecz jedynie to, „gdzie go kliknąć”; mierzalny spadek objętości tylnego hipokampa u osób polegających wyłącznie na nawigacji GPS.',
        socialConstraintLevel: 20,
        statusEconomicPremium: 90,
        cohesionMentalHealthCost: 65,
        systemicMechanism: 'Natychmiastowy dostęp do wiedzy zewnętrznej zastępuje wewnętrzną konsolidację pamięciową.',
        empiricalExamples: [
          'Badania Eleanor Maguire nad taksówkarzami londyńskimi: wymóg zdania egzaminu „The Knowledge” (pamięć 25 000 ulic) skutkuje rozrostem istoty szarej w tylnym hipokampie, podczas gdy kierowcy Ubera korzystający z GPS nie wykazują tych zmian.',
          'Eksperymenty Betsy Sparrow (2011 Science: „Google Effects on Memory”): badani gorzej pamiętają informacje, o których wiedzą, że zostaną zapisane na dysku komputera.',
          'Delegowanie pisania maili, esejów i kodu programistycznego na modele LLM, rodzące ryzyko atrofii myślenia krytycznego.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Interfejsy mózg-komputer (BCI Neuralink), implanty pamięciowe, bezszwowa integracja z chmurą obliczeniową.',
        phenotypeExpression: 'Umysł rozproszony (The Extended Mind Clarka i Chalmersa w wersji fizycznej): zatarcie granicy między własną myślą biologiczną a syntetyczną odpowiedzią asystenta AI.',
        socialConstraintLevel: 15,
        statusEconomicPremium: 95,
        cohesionMentalHealthCost: 80,
        systemicMechanism: 'Bezpośrednie sprzężenie synaptyczne z zewnętrznymi bazami danych i modelami wnioskowania.',
        empiricalExamples: [
          'Próby kliniczne implantów hipokampa kompensujących uszkodzenia pamięci u pacjentów z chorobą Alzheimera (badania Dong Songa na USC).',
          'Interfejsy BCI dekodujące mowę wewnętrzną z kory ruchowej w czasie rzeczywistym u pacjentów sparaliżowanych.',
          'Pojawienie się pytań prawnych o autorstwo myśli i odpowiedzialność karną w sytuacji, gdy impuls decyzyjny był podpowiedziany przez model AI.'
        ]
      }
    }
  },
  {
    id: 'epigenetyka-stresu-chronicznego-hpa',
    traitName: 'Epigenetyka Stresu i Przewlekłego Stanu Zapalnego',
    subtitle: 'Michael Meaney: jak przewlekły stres statusowy przeprogramowuje ekspresję genów i skraca życie',
    biologicalAnchor: 'Oś HPA, receptory glukokortykoidowe NR3C1, kaskada cytokin prozapalnych (IL-6, TNF-alpha).',
    bioNeuroSubstrate: 'Metylacja wysp CpG w promotorach genów odpornościowych i receptorów neuroendokrynnych.',
    plasticityIndex: {
      level: 'plastyczna',
      label: 'Wysoko Plastyczna',
      description: 'Ekspresja receptorów stresu modulowana epigenetycznie przez warunki socjoekonomiczne i styl przywiązania w dzieciństwie.',
      score: 3
    },
    confidenceLevel: 'level1',
    keyResearchers: ['Michael Meaney', 'Robert Sapolsky', 'Bruce McEwen', 'Elizabeth Blackburn'],
    emergingPhenomenaAndConsequences: 'Międzypokoleniowa transmisja traumy statusowej: dzieci matek przeżywających chroniczny lęk ekonomiczny rodzą się z fabrycznie rozregulowaną osią stresu i skróconymi telomerami.',
    epochs: {
      pleistocene: {
        epochId: 'pleistocene',
        epochName: '1. Plejstocen (Łowcy-Zbieracze)',
        shortLabel: 'Plejstocen',
        timeframe: '2,58 mln – 11,7 tys. lat temu',
        socialSetting: 'Ostre, krótkotrwałe stresory fizyczne (drapieżnik, chłód).',
        phenotypeExpression: 'Idealna homeostaza: wyrzut kortyzolu trwał minuty lub godziny, po czym następował powrót do równowagi przy bezpiecznym ognisku.',
        socialConstraintLevel: 85,
        statusEconomicPremium: 30,
        cohesionMentalHealthCost: 15,
        systemicMechanism: 'Stres służył wyłącznie ratowaniu życia w dynamicznym epizodzie walki lub ucieczki.',
        empiricalExamples: [
          'Gwałtowna ucieczka przed lampartem sawannowym: mobilizacja glukozy z wątroby i natychmiastowe zużycie jej przez mięśnie.',
          'Wyciszenie osi stresu podczas wieczornego odpoczynku przy wspólnym posiłku i dotyku klanowym.',
          'Brak przewlekłych chorób autoimmunologicznych i miażdżycy na szkieletach kopalnych łowców-zbieraczy.'
        ]
      },
      neolithic: {
        epochId: 'neolithic',
        epochName: '2. Rewolucja Neolityczna',
        shortLabel: 'Neolit',
        timeframe: '10 – 3,5 tys. lat p.n.e.',
        socialSetting: 'Pańszczyzna wczesna, groźba suszy, poddaństwo wobec wodza.',
        phenotypeExpression: 'Pojawienie się stresu przewlekłego: lęk przed przednówkiem i karą za niezapłacony plon.',
        socialConstraintLevel: 80,
        statusEconomicPremium: 40,
        cohesionMentalHealthCost: 40,
        systemicMechanism: 'Uwięzienie chłopa na ziemi uniemożliwia ucieczkę przed despotycznym władcą.',
        empiricalExamples: [
          'Ślady linii Harrisa (zatrzymania wzrostu kości) i cribra orbitalia na czaszkach neolitycznych rolników jako dowód przewlekłego stresu fizjologicznego.',
          'Wieloletnie susze niszczące uprawy i wywołujące masowy głód w dolinie Tygrysu.',
          'Ciągłe poczucie zagrożenia najazdami koczowników kradnących zapasy zboża.'
        ]
      },
      antiquity: {
        epochId: 'antiquity',
        epochName: '3. Antyk i Epoka Osiowa',
        shortLabel: 'Antyk i Epoka Osiowa',
        timeframe: '3000 p.n.e. – XV w. n.e.',
        socialSetting: 'Długi państwowe, niewolnictwo za długi, hierarchia stanowa, stoicyzm jako technologia obronna.',
        phenotypeExpression: 'Chroniczny stres statusowy u plebsu i dłużników; arystokracja rozwija filozofię stoicką (Epiktet, Marek Aureliusz) jako kognitywny bufor obronny przed lękiem.',
        socialConstraintLevel: 75,
        statusEconomicPremium: 55,
        cohesionMentalHealthCost: 50,
        systemicMechanism: 'Utrata statusu w starożytnym Rzymie groziła degradacją obywatelską lub niewolnictwem, co utrzymywało elity w stanie ciągłej czujności politycznej.',
        empiricalExamples: [
          'Filozofia stoicka Epikteta (byłego niewolnika): koncepcja dychotomii kontroli („dziel rzeczy na te, które zależą od ciebie, i te, które nie zależą”) jako narzędzie wyciszania osi HPA.',
          'Rozpaczliwe bunty dłużników (secesje plebejuszy na Górę Świętą w Rzymie) wywołane przewlekłym terrorem wierzycieli.',
          'Zesłanie Owidiusza do Tomis nad Morzem Czarnym: literacki zapis somatycznego i psychicznego załamania poety pod wpływem wygnania przez cesarza Augusta.'
        ]
      },
      industrial: {
        epochId: 'industrial',
        epochName: '4. Era Przemysłowa i Urbanizacja',
        shortLabel: 'Era Przemysłowa',
        timeframe: 'XVIII – XX wiek',
        socialSetting: 'Hałas fabryczny, 14-godzinny dzień pracy, zanieczyszczenie pyłowe, brak ubezpieczeń.',
        phenotypeExpression: 'Ciężkie wyczerpanie somatyczne, choroby układu krążenia i gruźlica w młodym wieku; chroniczne podwyższenie ciśnienia krwi.',
        socialConstraintLevel: 70,
        statusEconomicPremium: 45,
        cohesionMentalHealthCost: 70,
        systemicMechanism: 'Fizyczne przeciążenie środowiskowe w warunkach braku ochrony praw pracowniczych.',
        empiricalExamples: [
          'Zawały serca i udary mózgu stające się główną przyczyną zgonów w klasie robotniczej i urzędniczej na początku XX wieku.',
          'Pojawienie się pojęcia „stresu” w fizjologii przez Hansa Selye w latach 30. XX w. (ogólny zespół adaptacyjny GAS).',
          'Pylica płuc i chroniczne zapalenie oskrzeli u górników w Walii i na Śląsku.'
        ]
      },
      late_capitalism: {
        epochId: 'late_capitalism',
        epochName: '5. Era Postindustrialna i Algorytmiczna',
        shortLabel: 'Era Algorytmiczna',
        timeframe: 'Koniec XX w. – obecnie',
        socialSetting: 'Niepewność kredytowa, kult „zapieprzu” (hustle culture), permanentna dostępność mailowa, FOMO.',
        phenotypeExpression: 'Przewlekły mikrostres bez fizycznego ujścia: ciągłe napięcie wywołuje stan zapalny o niskim natężeniu (inflammaging), insulinooporność, depresję i choroby autoimmunologiczne.',
        socialConstraintLevel: 25,
        statusEconomicPremium: 80,
        cohesionMentalHealthCost: 95,
        systemicMechanism: 'Układ nerwowy traktuje powiadomienie o kryzysie w projekcie tak, jakby na człowieka szarżował niedźwiedź.',
        empiricalExamples: [
          'Badania Whitehall II Michaela Marmota na urzędnikach brytyjskich: śmiertelność na zawał serca była trzykrotnie wyższa u pracowników niższego szczebla niż u dyrektorów (brak kontroli nad pracą jako główny stresor).',
          'Odkrycie Elizabeth Blackburn (Nobel 2009): chroniczny stres u matek opiekujących się chorymi dziećmi skraca telomery o odpowiednik 10 lat starzenia biologicznego.',
          'Eksplozja chorób autoimmunologicznych (Hashimoto, stwardnienie rozsiane, Leśniowski-Crohn) w krajach o najwyższym wskaźniku stresu korporacyjnego.'
        ]
      },
      forecast_2050: {
        epochId: 'forecast_2050',
        epochName: '6. Horyzont Prognostyczny 2050+',
        shortLabel: 'Horyzont 2050+',
        timeframe: '2050 i dalej',
        socialSetting: 'Biochemiczne sensory naskórkowe, farmakologiczna regulacja osi HPA, personalizowana epigenetyka.',
        phenotypeExpression: 'Ciągły monitoring epigenetyczny i adaptogenne nanoleki regulujące poziom kortyzolu w czasie rzeczywistym.',
        socialConstraintLevel: 30,
        statusEconomicPremium: 75,
        cohesionMentalHealthCost: 60,
        systemicMechanism: 'Automatyczne tłumienie stanów zapalnych przez technologie medyczne wspierane AI.',
        empiricalExamples: [
          'Inteligentne plastry uwalniające inhibitory cytokin w odpowiedzi na skok markerów stresu w pocie.',
          'Terapie demetylacji promotorów genów NR3C1 przywracające wrażliwość na glukokortykoidy po traumie dziecięcej.',
          'Prawne regulacje maksymalnego poziomu obciążenia biometrycznego pracowników w korporacjach pod groźbą sankcji państwowych.'
        ]
      }
    }
  }
];

export const CONTEMPORARY_SELECTION_TRACKS: {
  culturalEconomicTrack: ContemporarySelectionTrackItem[];
  biologicalReproductiveTrack: ContemporarySelectionTrackItem[];
} = {
  culturalEconomicTrack: [
    {
      id: 'ce-1',
      title: 'Wysoka Tolerancja Niepewności i Chłód Emocjonalny (Subkliniczna Psychopatia)',
      subtitle: 'Premia za brak hamulców moralnych w restrukturyzacjach korporacyjnych',
      mechanism: 'Zdolność do podejmowania decyzji o masowych zwolnieniach, arbitrażu geograficznym i agresywnym przejmowaniu konkurentów bez obciążenia somatycznego empatią.',
      empiricalEvidence: 'Badania Babiaka, Hare\'a i Boddy\'ego wykazują, że wskaźnik cech psychopatycznych w kadrze zarządzającej wyższego szczebla sięga 4–8% (wobec 1% w populacji ogólnej).',
      selectiveDirection: 'positive',
      selectiveDirectionLabel: 'Silna Selekcja Pozytywna w Strukturach Kapitału',
      darwinianFitnessVsStatus: 'Gwarantuje gigantyczny status majątkowy, luksusowe rezydencje i prestiż publiczny, lecz często wiąże się z niestabilnością relacji i brakiem lub minimalną liczbą potomstwa (rozwód, późne rodzicielstwo).'
    },
    {
      id: 'ce-2',
      title: 'Odporność na Przebodźcowanie i Zarządzanie Uwagą Głęboką (Deep Work)',
      subtitle: 'Nowy luksus poznawczy w epoce zalewu algorytmicznym śmieciem',
      mechanism: 'Umiejętność wejścia w 4–6 godzinny stan izolacji kognitywnej i pracy nad złożonymi problemami algorytmicznymi, architektonicznymi czy prawnymi bez sięgania po smartfon.',
      empiricalEvidence: 'Analizy Cal Newporta oraz badania neurokognitywne nad spadkiem zdolności skupienia u pracowników wiedzy z powodu częstego przełączania zadań (task switching cost).',
      selectiveDirection: 'positive',
      selectiveDirectionLabel: 'Wysoka Premia Statusowa i Dochodowa',
      darwinianFitnessVsStatus: 'Osoby potrafiące utrzymać głębokie skupienie generują unikalną wartość rynkową i zarobki z top 1%, lecz długie godziny spędzane w samotnej pracy intelektualnej redukują czas na życie rodzinne.'
    },
    {
      id: 'ce-3',
      title: 'Wysoka Inteligencja Relacyjno-Intuicyjna (VENs) i Charyzma Somatyczna',
      subtitle: 'Zdolności niemożliwe do automatyzacji przez generatywne modele AI',
      mechanism: 'Budowanie zaufania inwestorów, jednoczenie zespołów w kryzysie, perswazja twarzą w twarz i czytanie ukrytych intencji kontrahentów w ułamku sekundy.',
      empiricalEvidence: 'Analizy rynku pracy Frey & Osborne oraz OECD wskazują, że zawody oparte na wysokich kompetencjach społecznych wykazują najniższe ryzyko wyparcia przez sztuczną inteligencję.',
      selectiveDirection: 'positive',
      selectiveDirectionLabel: 'Długoterminowa Odporność na Automatyzację',
      darwinianFitnessVsStatus: 'Klucz do najwyższych stanowisk politycznych i przywódczych; rozbieżność z dzietnością zależy od równowagi praca–dom.'
    },
    {
      id: 'ce-4',
      title: 'Ekstremalna Mobilność Geograficzna i Elastyczność Tożsamościowa',
      subtitle: 'Brak przywiązania do ziemi, przodków i lokalnej wspólnoty',
      mechanism: 'Gotowość do relokacji co 2–3 lata między Nowym Jorkiem, Londynem, Singapurem i Dubajem w pogoni za premią kapitałową i optymalizacją podatkową.',
      empiricalEvidence: 'Badania socjologiczne nad „klasą kosmopolityczną” (Davos class) i nomadyzmem cyfrowym.',
      selectiveDirection: 'positive',
      selectiveDirectionLabel: 'Optymalizacja Rynkowa Globalna',
      darwinianFitnessVsStatus: 'Maksymalizuje zarobki i dywersyfikację majątku, lecz niemal całkowicie uniemożliwia zbudowanie stabilnej, wielopokoleniowej sieci alloparentingu wokół dzieci.'
    },
    {
      id: 'ce-5',
      title: 'Autopromocja i Monetyzacja Uwagi (Subkliniczny Narcyzm Adaptacyjny)',
      subtitle: 'Maksymalizacja widoczności w gospodarce twórców i na platformach społecznościowych',
      mechanism: 'Brak wstydu przed publiczną ekspozycją, ciągłe transmitowanie własnego życia, wyostrzona autoprezentacja i cyniczne formatowanie treści pod algorytmy zaangażowania.',
      empiricalEvidence: 'Badania nad psychologią influencerów i zjawiskiem komercjalizacji autentyczności (Marwick, Twenge).',
      selectiveDirection: 'positive',
      selectiveDirectionLabel: 'Błyskawiczna Akumulacja Zasięgów i Kapitału',
      darwinianFitnessVsStatus: 'Wysoka gratyfikacja finansowa i statusowa od rzesz obserwujących przy jednoczesnym rozpadzie intymności i chronicznym lęku przed spadkiem statystyk.'
    }
  ],
  biologicalReproductiveTrack: [
    {
      id: 'br-1',
      title: 'Ujemna Selekcja Wskaźników Poligenowych Edukacji (Negative Selection on PGS)',
      subtitle: 'Wielkie metaanalizy GWAS z deCODE Genetics i UK Biobank',
      mechanism: 'Genetyczne warianty (polygenic scores) korelujące z wyższym ilorazem inteligencji, skłonnością do długiej nauki i odraczania gratyfikacji są we współczesnych społeczeństwach skorelowane z NIŻSZĄ liczbą potomstwa.',
      empiricalEvidence: 'Przełomowe badania Kari Stefanssona i wsp. (Kong et al., 2017 PNAS, próba >100 000 Islandczyków) oraz Beauchamp (2016 PNAS, Health and Retirement Study w USA) i Sanjak et al. (2018 PNAS, UK Biobank, próba >400 000 osób). Wskaźnik PGS dla poziomu edukacji spada o ok. 0,1 punkta na dekadę.',
      selectiveDirection: 'negative',
      selectiveDirectionLabel: 'Niewielka, ale Statystycznie Istotna Selekcja Negatywna',
      darwinianFitnessVsStatus: 'Czysty paradoks darwinowski: cechy zapewniające najwyższy sukces kulturowo-ekonomiczny są w krajach rozwiniętych eliminowane ze względnym tempem darwinowskim przez późny wiek pierwszego porodu.',
      gwasCitations: ['Kong et al., 2017 PNAS (Islandia, n=109 120)', 'Beauchamp, 2016 PNAS (USA, n=8 972)', 'Sanjak et al., 2018 PNAS (UK Biobank, n=385 881)']
    },
    {
      id: 'br-2',
      title: 'Premia dla Sieci Silnego Wzajemnego Alloparentingu i Wspólnot Tradycyjnych',
      subtitle: 'Przetrwanie demograficzne dzięki gęstym sieciom rodzinnym i normom kulturowym',
      mechanism: 'Populacje i subkultury (np. Amisze, ortodoksyjni Żydzi Charedim, tradycyjne wspólnoty religijne w Europie i USA) utrzymujące wysokie normy dzietności, wczesny wiek zamążpójścia oraz rozbudowaną sieć wzajemnej pomocy babć i sąsiadów.',
      empiricalEvidence: 'Współczynniki dzietności (TFR) w tych enklawach wynoszą 4,0–7,0 dziecka na kobietę, podczas gdy w otaczającym zlaicyzowanym społeczeństwie spadają do 1,0–1,3 (Kaufmann, „Shall the Religious Inherit the Earth?”, 2010).',
      selectiveDirection: 'positive',
      selectiveDirectionLabel: 'Ekspansja Demograficzna w Postępie Geometrycznym',
      darwinianFitnessVsStatus: 'Grupy te często świadomie rezygnują z wyścigu o dobra luksusowe i elitarne kariery korporacyjne, lecz wygrywają biologiczną grę o przetrwanie w perspektywie stuleci.'
    },
    {
      id: 'br-3',
      title: 'Młodszy Wiek Pierwszego Porodu (Age at First Birth — AFB)',
      subtitle: 'Główny komponent współczesnej wariancji reprodukcyjnej',
      mechanism: 'Wariancja genetyczna sprzyjająca wcześniejszemu biologicznemu dojrzewaniu płciowemu i wcześniejszemu wejściu w rodzicielstwo wykazuje dodatni gradient selekcyjny.',
      empiricalEvidence: 'Badania GWAS (Barban et al., 2016 Nature Genetics; Sanjak et al., 2018 PNAS) identyfikujące locus genetyczne modulujące wiek menarche i wiek pierwszego urodzenia skorelowane ze skumulowaną liczbą potomstwa.',
      selectiveDirection: 'positive',
      selectiveDirectionLabel: 'Kierunkowa Selekcja Sezonowa na Wczesne Rodzicielstwo',
      darwinianFitnessVsStatus: 'Wczesne macierzyństwo bywa stygmatyzowane w wielkomiejskich klasach średnich jako „błąd karierowy”, lecz z perspektywy teorii doboru naturalnego jest potężnym wektorem propagacji genów.'
    },
    {
      id: 'br-4',
      title: 'Plastyczność Metaboliczna i Odporność Immunologiczna',
      subtitle: 'Trwająca selekcja stabilizująca w obliczu nowych patogenów i diety cukrowej',
      mechanism: 'Geny związane z metabolizmem lipidów i glukozy oraz odpornością na nowe wirusy oddechowe i infekcje szpitalne nadal podlegają ostrej selekcji naturalnej.',
      empiricalEvidence: 'Pandemia COVID-19 wykazała dramatyczne zróżnicowanie śmiertelności zależne od wariantów genów klastra 3p21.31 (częściowo odziedziczonego po Neandertalczykach — Zeberg & Pääbo, 2020 Nature) oraz receptorów ACE2.',
      selectiveDirection: 'stabilizing',
      selectiveDirectionLabel: 'Ciągła Selekcja Immunologiczna',
      darwinianFitnessVsStatus: 'Medycyna złagodziła śmiertelność wielu chorób wieku dziecięcego, lecz nie zatrzymała selekcji w populacjach dorosłych.'
    },
    {
      id: 'br-5',
      title: 'Złagodzenie Dawnych Ograniczeń przez Technologie Wspomaganego Rozrodu (ART)',
      subtitle: 'In vitro (IVF), ICSI i medycyna perinatalna zmieniające krajobraz selekcyjny',
      mechanism: 'Pary borykające się z ciężkimi wadami nasienia lub niedrożnością jajowodów, które w plejstocenie i neolicie miały zerowy sukces reprodukcyjny, dzięki procedurom ICSI/IVF z powodzeniem przekazują swój profil genetyczny.',
      empiricalEvidence: 'W Danii i Hiszpanii już ponad 8–10% wszystkich dzieci rodzi się dzięki procedurom ART, co łagodzi tradycyjną selekcję przeciwko subfertility.',
      selectiveDirection: 'mismatch',
      selectiveDirectionLabel: 'Kulturowo-Medyczne Przełamanie Barier Biologicznych',
      darwinianFitnessVsStatus: 'Przykład ewolucji kulturowo-technologicznej bezpośrednio modulującej pulę genetyczną gatunku.'
    }
  ]
};
