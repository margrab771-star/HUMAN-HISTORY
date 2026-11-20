import { ReligionTimelineStage, CSRTopic, JaynesVsFrithData, SacredMigrationItem } from '../types';

export const RELIGION_TIMELINE_STAGES: ReligionTimelineStage[] = [
  {
    id: 'stage-1',
    stageNumber: 1,
    name: '1. Świadomość Podstawowa, Ogień i Geometria (1,8 mln – 300 tys. lat temu)',
    timeframe: '1,8 mln – 300 tys. lat temu',
    coreMilestone: 'Symetria pięściaków aszelskich (Mode 2) wykraczająca poza czystą funkcję użytkową; kontrolowany ogień rozszerzający dobę (Wrangham); mentalne podróże w czasie (Endel Tulving); najstarsze użycie czerwonej ochry.',
    cognitiveSubstrate: 'Ekspansja kory przedczołowej i móżdżku umożliwiająca sekwencjonowanie wieloetapowych operacji mentalnych i wyobrażanie sobie przyszłych potrzeb.',
    archaeologicalProof: 'Symetryczne pięściaki aszelskie z Boxgrove i Kathu Pan; ślady ognia w jaskini Wonderwerk (~1,0 Ma); czaszka Bodo ze śladami celowego rytualnego skalpowania (~600 tys. lat).',
    socialScale: 'Małe zespoły koalicyjne 40–80 osób.',
    ritualMode: 'Rytuały proto-muzyczne, taniec synchroniczny wokół ogniska, budowanie więzi przez wspólny rytm i endorfiny.',
    confidenceLevel: 'level1'
  },
  {
    id: 'stage-2',
    stageNumber: 2,
    name: '2. Eksplozja Symboliczna, Animizm i Szamanizm (100 – 12 tys. lat temu)',
    timeframe: '100 – 12 tys. lat temu',
    coreMilestone: 'Pojawienie się figuratywnej sztuki naskalnej, pochówki intencjonalne z bogatym wyposażeniem (Sungir), wiara w świat duchów zwierząt i byty zoomorficzne. Odkrycie Człowieka-Lwa z Hohlenstein-Stadel (~40 tys. lat) jako najstarszego materialnego dowodu wiary w istotę ponadnaturalną.',
    cognitiveSubstrate: 'Płynność poznawcza (Cognitive Fluidity — Steven Mithen): połączenie modułu wiedzy o zwierzętach, technologii i relacjach społecznych w jeden zintegrowany krajobraz wyobraźni; modulacja DMN i zjawiska entoptyczne w transie szamańskim (David Lewis-Williams).',
    archaeologicalProof: 'Rzeźba Człowieka-Lwa (Hohlenstein-Stadel, Niemcy); malowidła jaskiniowe w jaskini Leang Karampuang na Sulawesi (~67 tys. lat); jaskinia Chauvet (~36 tys. lat); paciorki i ochra w jaskini Blombos (~75 tys. lat).',
    socialScale: 'Ruchome bandy łowieckie 25–50 osób łączące się sezonowo w makrogrupy regionalne do 200–500 osób.',
    ritualMode: 'Tryb obrazowy (Imagistic Mode — Harvey Whitehouse): rzadkie, traumatyczne i euforyczne rytuały inicjacyjne (ból, deprywacja, trans, środki psychoaktywne) tworzące niezatarte więzi tożsamościowe na całe życie.',
    confidenceLevel: 'level1'
  },
  {
    id: 'stage-3',
    stageNumber: 3,
    name: '3. Próg Neolityczny: Monumentalny Rytuał i Osiadłość (11,5 – 4 tys. lat temu)',
    timeframe: '11,5 – 4 tys. lat p.n.e.',
    coreMilestone: 'Rewolucja symboliczna poprzedzająca rolnictwo: powstanie monumentalnych sanktuariów megalitycznych (Göbekli Tepe w Turcji). Przejście od kultu zwierząt drapieżnych do kultu przodków, bóstw płodności i stróżów zasiewów.',
    cognitiveSubstrate: 'Zewnętrzne nośniki pamięci symbolicznej (kamienne stele, motywy reliefowe) kompensujące ograniczenia biologicznego hipokampa; początki rytuałów doktrynalnych opartych na pamięci semantycznej.',
    archaeologicalProof: 'Göbekli Tepe i Karahan Tepe (Turcja, T-kształtne filary z rzeźbami drapieżników sprzed 11,5 tys. lat, zbudowane jeszcze przez łowców-zbieraczy); Çatalhöyük; Jerycho (czaszek przodków modelowane w gipsie).',
    socialScale: 'Pierwsze osady i protomiasta liczące od kilkuset do kilku tysięcy mieszkańców (przekroczenie liczby Dunbara).',
    ritualMode: 'Przejście od trybu obrazowego do trybu doktrynalnego: częste, powtarzalne ceremonie kalendarzowe zbiegające się z cyklami astronomicznymi i agrarnymi.',
    confidenceLevel: 'level1'
  },
  {
    id: 'stage-4',
    stageNumber: 4,
    name: '4. Antyk, Epoka Osiowa i Wielcy Bogowie Moralizujący (3000 p.n.e. – XV w. n.e.)',
    timeframe: '3000 p.n.e. – 1500 n.e.',
    coreMilestone: 'Epoka Osiowa (Achsenzeit, 800–200 p.n.e. Karla Jaspersa): równoległe wyłonienie się w Grecji, Izraelu, Indiach i Chinach etyki uniwersalnej i wielkich systemów filozoficzno-religijnych. Narodziny hipotezy „Big Gods” (Norenzayan, Henrich): bóstwa stają się wszechwiedzącymi sędziami moralnymi karzącymi za oszustwo i egoizm.',
    cognitiveSubstrate: 'Internalizacja nadzoru: wiara w niewidzialnego, wszechwidzącego obserwatora aktywuje ten sam obwód wstrzymujący egoizm co efekt obserwujących oczu (Watching Eyes Effect), umożliwiając zaufanie między obcymi ludźmi w milionowych imperiach.',
    archaeologicalProof: 'Kodeks Hammurabiego z bogiem Szamaszem; teksty Starego Testamentu; dialogi Platona; pisma Konfucjusza; edykty króla Aśoki w Indiach.',
    socialScale: 'Wielkie imperia agrarne i metropolie liczące setki tysięcy obywateli (Rzym, Aleksandria, Chang\'an).',
    ritualMode: 'Zinstytucjonalizowany tryb doktrynalny: święte księgi, kasta kapłańska, sformalizowane wyznanie wiary i codzienne powtarzalne modlitwy.',
    confidenceLevel: 'level1'
  },
  {
    id: 'stage-5',
    stageNumber: 5,
    name: '5. Nowoczesność, Sekularyzacja i Migracja Sacrum (XVIII w. – 2050+)',
    timeframe: 'XVIII wiek do dziś i dalej',
    coreMilestone: 'Oświecenie, postęp nauk przyrodniczych i teoria bezpieczeństwa egzystencjalnego (Pippa Norris, Ronald Inglehart): spadek tradycyjnej religijności w krajach o wysokim poziomie opieki socjalnej i medycznej. Jednocześnie prastare moduły poznawcze religii migrują w sferę świeckich ideologii, fandomów, kultu samorozwoju i technologicznej eschatologii AI.',
    cognitiveSubstrate: 'Trwałość ewolucyjnej architektury umysłu: wygaszenie tradycyjnej wiary nie usuwa modułów HADD, myślenia teleologicznego ani potrzeby rytuału, które zostają podłączone pod narracje polityczne i popkulturę.',
    archaeologicalProof: 'Spadek praktyk religijnych w Europie Zachodniej i Skandynawii przy jednoczesnym rozkwicie nowych ruchów parareligijnych i transhumanizmu technologicznego.',
    socialScale: 'Globalne sieci cyfrowe liczące miliardy połączonych użytkowników.',
    ritualMode: 'Rozproszony, spersonalizowany rynek wierzeń konsumpcyjnych i cyfrowych plemion tożsamościowych.',
    confidenceLevel: 'level1'
  }
];

export const CSR_TOPICS: CSRTopic[] = [
  {
    id: 'csr-hadd',
    name: 'Moduł HADD (Hyperactive Agency Detection Device)',
    acronym: 'HADD',
    coreConcept: 'Nadaktywny detektor intencjonalności i sprawstwa: ewolucyjna tendencja umysłu do przypisywania celowych intencji, woli i planu zjawiskom czysto losowym lub mechanicznym (Justin Barrett, Stewart Guthrie).',
    pleistoceneRoots: 'Asymetria kosztów przetrwania (Teoria Zarządzania Błędem): uznanie szelestu trawy za polującego lamparta kosztowało ucieczkę i kilka kalorii; uznanie lamparta za wiatr kosztowało życie. Selekcja faworyzowała umysły widzące za zjawiskami przyrody duchy, przodków i bóstwa.',
    modernEchoes: 'Paliwo dla współczesnych teorii spiskowych: w świecie chaotycznych rynków i kryzysów mózg nie znosi losowości i szuka ukrytych intencji decydentów za każdym przypadkowym zdarzeniem.',
    bioNeuroSubstrate: 'Sprzężenie bruzdy skroniowej górnej (STS — percepcja biologicznego ruchu) z ciałem migdałowatym i korą przedczołową, interpretujące ruch martwych obiektów jako ożywione działanie.',
    keyResearchers: ['Justin Barrett', 'Stewart Guthrie', 'Pascal Boyer'],
    confidenceLevel: 'level1'
  },
  {
    id: 'csr-intuitive-dualism',
    name: 'Intuicyjny Dualizm i Teoria Umysłu (ToM)',
    acronym: 'ToM / Dualism',
    coreConcept: 'Wrodzona skłonność człowieka do postrzegania ciała i umysłu jako dwóch niezależnych substancji (Paul Bloom). Śmierć ciała nie pociąga za sobą automatycznego wyobrażenia zniszczenia świadomości, co rodzi uniwersalną wiarę w życie pozagrobowe i duchy.',
    pleistoceneRoots: 'Dwa odrębne systemy poznawcze w mózgu: fizyka intuicyjna (operowanie przedmiotami martwymi) vs psychologia intuicyjna (czytanie intencji ludzi). Rozdzielenie to sprawia, że umysł z łatwością symuluje zmarłego przodka tak, jakby nadal istniał bez ciała.',
    modernEchoes: 'Wiara w cyfrową nieśmiertelność i transfer świadomości (mind uploading) do chmury obliczeniowej – współczesna technologiczna reinkarnacja kartezjańskiego dualizmu.',
    bioNeuroSubstrate: 'Styk skroniowo-ciemieniowy (TPJ) oraz przyśrodkowa kora przedczołowa (mPFC). Drażnienie prawej okolicy TPJ w badaniach Olafa Blanke (2004) wywołuje wrażenie obecności niewidzialnej istoty stojącej za plecami (felt presence).',
    keyResearchers: ['Paul Bloom', 'Olaf Blanke', 'Jesse Bering'],
    confidenceLevel: 'level1'
  },
  {
    id: 'csr-mci',
    name: 'Pojęcia Minimalnie Kontrintuicyjne (MCI)',
    acronym: 'MCI',
    coreConcept: 'Koncepcje, które naruszają dokładnie JEDNO lub DWA fundamentalne założenia ontologiczne (np. posąg, który krwawi; niewidzialny duch, który słyszy myśli), są optymalnie zapamiętywane i najchętniej przekazywane w kulturze (Pascal Boyer).',
    pleistoceneRoots: 'Pojęcia w 100% intuicyjne są nudne i ulegają zapomnieniu; pojęcia naruszające zbyt wiele reguł (np. kamień, który jest jednocześnie rybą, lata we wtorki i pamięta prababcię) są zbyt chaotyczne do przetworzenia. Idee MCI mają maksymalną „zaraźliwość” kulturową.',
    modernEchoes: 'Komiksowi superbohaterowie (Superman to zwykły człowiek, który jedynie lata i ma rentgen w oczach), virale w social media oraz mity o autonomicznych maszynach obdarzonych ludzką złością.',
    bioNeuroSubstrate: 'Umiarkowane wzbudzenie przedniego zakrętu obręczy (ACC — detekcja błędu i niezgodności schematu) stymulujące konsolidację pamięciową w hipokampie bez wywoływania paraliżu kognitywnego.',
    keyResearchers: ['Pascal Boyer', 'Justin Barrett', 'Ara Norenzayan'],
    confidenceLevel: 'level1'
  },
  {
    id: 'csr-costly-signaling',
    name: 'Kosztowna Sygnalizacja i Rytuały Solidarności',
    acronym: 'Costly Signaling',
    coreConcept: 'Trudne, bolesne i kosztowne energetycznie praktyki religijne (posty, obrzezanie, pielgrzymki, tabu pokarmowe) służą jako wiarygodny biologiczny sygnał lojalności wobec grupy, eliminujący gapowiczów (Richard Sosis, Harvey Whitehouse).',
    pleistoceneRoots: 'W małej wspólnocie deklaracja słowna „kocham wasze plemię” była zbyt tania. Poddanie się bolesnej skaryfikacji lub głodówce dowodziło, że jednostka jest trwale związana z grupą i nie zdradzi jej w obliczu wroga.',
    modernEchoes: 'Kultury startupowe wymagające 80-godzinnego tygodnia pracy, elitarne korporacje, subkultury crossfitowe i rytuały inicjacyjne w bractwach uniwersyteckich.',
    bioNeuroSubstrate: 'Wspólne przeżywanie stresu i wysiłku fizycznego stymuluje wydzielanie endorfin i oksytocyny, wywołując zjawisko fuzji tożsamościowej (Identity Fusion — Swann), w której granice jednostki zlewają się z grupą.',
    keyResearchers: ['Richard Sosis', 'Harvey Whitehouse', 'William Swann', 'Amotz Zahavi'],
    confidenceLevel: 'level1'
  },
  {
    id: 'csr-mystical-trance',
    name: 'Neurobiologia Transu, Modlitwy i Doświadczeń Mistycznych',
    acronym: 'Neurotheology',
    coreConcept: 'Doświadczenie jedności z kosmosem, rozpuszczenia ego i obecności transcendencji ma precyzyjny fizjologiczny korelat w postaci przejściowej reorganizacji wielkoskalowych sieci mózgowia.',
    pleistoceneRoots: 'Szamańskie techniki ekstazy: wielogodzinny taniec synchroniczny przy bębnach, hiperwentylacja, deprywacja sensoryczna oraz użycie roślinnych enteogenów (psylocybina, ibogaina) jako narzędzie leczenia traumy i spajania klanu.',
    modernEchoes: 'Renesans psychodeliczny w neuropsychiatrii (terapie psylocybiną w depresji lekoopornej) oraz festiwale muzyki elektronicznej (Tomorrowland, Burning Man) jako świeckie formy szamańskiego transu zbiorowego.',
    bioNeuroSubstrate: 'Wyciszenie tylnej kory zakrętu obręczy (PCC) w sieci DMN (odpowiedzialnej za narracyjne „ja”) połączone ze spadkiem aktywności tylnego płata ciemieniowego (odpowiedzialnego za orientację przestrzenną ciała w 3D), co układ nerwowy interpretuje jako zniknięcie granicy między „mną” a wszechświatem.',
    keyResearchers: ['Roland Griffiths', 'Robin Carhart-Harris', 'Andrew Newberg', 'David Lewis-Williams'],
    confidenceLevel: 'level1'
  }
];

export const JAYNES_VS_FRITH_DATA: JaynesVsFrithData = {
  title: 'Analiza Krytyczna: Głosy Bogów u Homera, Ciało Modzelowate i Umysł Dwuizbowy',
  leftColumnJaynes: {
    thesisTitle: 'Koncepcja Juliana Jaynesa (1976): Umysł Dwuizbowy (Bicameral Mind)',
    badge: 'level3',
    authorAndYear: 'Julian Jaynes (1976: „The Origin of Consciousness in the Breakdown of the Bicameral Mind”)',
    coreClaim: 'Postulował, że człowiek jeszcze 3000 lat temu (w czasach wojny trojańskiej opisywanej w Iliadzie) nie posiadał współczesnej świadomości introspekcyjnej. Bohaterowie Homera nie podejmowali autonomicznych decyzji; gdy Achill popadał w konflikt, „słyszał głos bogini Ateny szarpiącej go za włosy”.',
    homericEvidence: 'W grece homeryckiej brak słów oznaczających nowoczesny „umysł” czy „wolę” (psyche oznaczała oddech/życie, thumos krew/emocję, noos widzenie).',
    neurologicalSpeculation: 'Jaynes spekulował, że prawa półkula mózgu generowała halucynacje słuchowe w ośrodkach analogicznych do pola Wernickego, które przez spoidło przednie i ciało modzelowate były przesyłane do lewej półkuly i odbierane jako realne głosy bóstw.',
    whyRejectedBiologically: 'Współczesna paleoantropologia i genetyka kategorycznie odrzucają tezę o skokowej zmianie anatomii czy mielinizacji mózgu w I tysiącleciu p.n.e. Ludzki mózg anatomiczny z ukształtowanym ciałem modzelowatym istniał w pełni od co najmniej 200–300 tysięcy lat. Ponadto teksty ze starożytnego Egiptu i Mezopotamii sprzed Homera wykazują wyraźne ślady introspekcji.',
    culturalValueRetained: 'Koncepcja ta, choć biologicznie błędna, zachowuje gigantyczną wartość w kognitywistyce kulturowej: pokazała, jak rozwój pisma, kodyfikacji praw i metropolii wymusił powstanie kulturowego „oprogramowania” nowoczesnego, narracyjnego „ja” (Daniel Dennett).'
  },
  rightColumnFrithConsensus: {
    thesisTitle: 'Konsensus Współczesnej Neuronauki: Kopia Eferentna i Monitorowanie Źródła',
    badge: 'level1',
    primaryResearchers: ['Chris Frith', 'Daniel Dennett', 'Stanislas Dehaene', 'Sarah-Jayne Blakemore'],
    corollaryDischargeMechanism: 'Mózg ludzki podczas generowania mowy wewnętrznej wysyła tzw. kopię eferentną (corollary discharge) do kory słuchowej, informując układ zmysłowy: „To ja sam mówię, nie reaguj jak na dźwięk zewnętrzny”.',
    sourceMonitoringFailure: 'W warunkach ekstremalnego stresu, wyczerpania, transu religijnego, głodu lub uszkodzeń szlaków czołowo-skroniowych mechanizm monitorowania źródła (source monitoring) ulega rozprzężeniu. Mowa wewnętrzna traci znacznik sprawstwa „ja”, w wyniku czego człowiek doświadcza własnej myśli jako obcego głosu dochodzącego z zewnątrz (auditory verbal hallucination).',
    neuroanatomyEvidence: 'Ciało modzelowate (corpus callosum) i szlaki korowo-podkorowe u Homo sapiens były identyczne 3000 lat temu jak dziś. Różnica leży w strukturach kulturowych i dyskursywnych.',
    dennettCulturalSoftwareView: 'Jak trafnie ujął Daniel Dennett: Jaynes mylił się co do hardware\'u (anatomii mózgu), lecz miał rację co do software\'u: introspekcja i narracyjne poczucie tożsamości to nie wrodzony odruch pnia mózgu, lecz zaawansowany nawyk kognitywny instalowany w umyśle przez alfabetyzację, poezję i instytucje cywilizacji.'
  }
};

export const SACRED_MIGRATION_MATRIX: SacredMigrationItem[] = [
  {
    id: 'mig-1',
    evolutionaryModule: 'HADD (Nadaktywne wykrywanie sprawstwa i intencji)',
    pleistoceneSacredState: 'Duchy lasu, bóstwa pogody, demony zsyłające zarazę.',
    antiquityAndTraditionalState: 'Wszechmogący Bóg, opatrzność boska, aniołowie i demony.',
    modern21stSecularMetamorphosis: 'Teorie spiskowe w internecie: tajne stowarzyszenia (Illuminati, WEF), fałszywe operacje, przekonanie, że każdy kryzys jest sterowany z ukrycia.',
    underlyingPsychologicalNeed: 'Lęk przed chaosem i przypadkowością; potrzeba odnalezienia winnego agenta.',
    riskOrPathology: 'Paranoja polityczna, ataki na infrastrukturę, erozja zaufania do instytucji demokratycznych.'
  },
  {
    id: 'mig-2',
    evolutionaryModule: 'Wartości Święte i Wstręt Moralny (Tabu & Heresy)',
    pleistoceneSacredState: 'Święte totemy klanu, tabu kazirodcze, zakaz dotykania zwłok.',
    antiquityAndTraditionalState: 'Herezja religijna, bluźnierstwo, inkwizycja, profanacja świątyń.',
    modern21stSecularMetamorphosis: 'Wojny kulturowe w sieci: „święte” dogmaty polityczne (z prawa i lewa), zjawisko cyfrowej ekskomuniki (cancel culture), deplatforming „heretyków”.',
    underlyingPsychologicalNeed: 'Ochrona granic moralnych plemienia; sygnalizacja czystości ideologicznej.',
    riskOrPathology: 'Brak debaty racjonalnej, dogmatyzm, agresja cyfrowa i cenzura akademicka.'
  },
  {
    id: 'mig-3',
    evolutionaryModule: 'Kosztowny Rytuał Wspólnotowy i Asceza',
    pleistoceneSacredState: 'Obrzędy przejścia, bolesne skaryfikacje, tańce transowe wokół ogniska.',
    antiquityAndTraditionalState: 'Wielki Post, pielgrzymki do Mekki lub Rzymu, zakonne śluby ubóstwa.',
    modern21stSecularMetamorphosis: 'Mordercze maratony, reżimy dietetyczne (keto/carnivore/posty przerywane), obozy boot-camp, subkultury biohackingu i morsowania.',
    underlyingPsychologicalNeed: 'Przezwyciężenie słabości ciała; sygnalizacja dyscypliny i statusu moralnego.',
    riskOrPathology: 'Ortoreksja, destrukcyjne przeciążenia somatyczne, sekciarski elitaryzm fitnessowy.'
  },
  {
    id: 'mig-4',
    evolutionaryModule: 'Eschatologia, Sąd Ostateczny i Zbawiciel',
    pleistoceneSacredState: 'Mity o cyklicznym odrodzeniu świata i wędrówce dusz.',
    antiquityAndTraditionalState: 'Apokalipsa św. Jana, Sąd Ostateczny, Mesjasz ratujący wybranych.',
    modern21stSecularMetamorphosis: 'Narracje o Sztucznej Superinteligencji (ASI): Techno-Zbawienie (Singularity, upload umysłu) vs. Techno-Apokalipsa (zagłada ludzkości z rąk maszyn).',
    underlyingPsychologicalNeed: 'Poszukiwanie nadrzędnego sensu historii; lęk przed śmiercią biologiczną gatunku.',
    riskOrPathology: 'Fatalizm technologiczny, zaniedbanie realnych kryzysów ekologicznych na rzecz wyimaginowanych dystopii.'
  }
];
