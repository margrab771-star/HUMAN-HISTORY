import { PairwiseComparisonData } from '../types';
import { SPECIES_DATA } from './speciesData';

export const KEY_PAIRWISE_COMPARISONS: Record<string, PairwiseComparisonData> = {
  'homo-neanderthalensis-vs-homo-sapiens': {
    pairId: 'homo-neanderthalensis-vs-homo-sapiens',
    speciesAId: 'homo-neanderthalensis',
    speciesBId: 'homo-sapiens',
    title: 'Homo neanderthalensis vs. Homo sapiens',
    subtitle: 'Zderzenie w Eurazji: Siła Fizyczna i Megafauna kontra Sieci Społeczne i Broń Miotana',
    dailyEcology: {
      speciesA: {
        dailyCaloriesKcal: 'ok. 4000 – 5000 kcal/dzień (ekstremalny koszt metaboliczny krępej sylwetki w klimacie peryglacjalnym).',
        huntingAndDietDetail: 'Szczytowy drapieżnik troficzny (apex predator); bezpośrednie starcia z megafauną (mamuty, nosorożce włochate) przy użyciu ciężkich włóczni kłutych z bliska.',
        shelterAndMobility: 'Wykorzystanie jaskiń i wiatrochronów skalnych; ograniczony promień koczowania (zazwyczaj do 30–50 km wokół stałego schroniska).',
        childhoodAndLifespan: 'Szybsze tempo mineralizacji zębów i wcześniejsza dojrzałość szkieletowa (~15 lat); rzadko dożywali powyżej 40. roku życia.',
        skeletalTraumaPattern: 'Wzorce złamań i urazów kośćca identyczne jak u współczesnych ujeżdżaczy rodeo (częste urazy głowy, szyi i klatki piersiowej na skutek bliskiego kontaktu z miotającymi się wielkimi ssakami).'
      },
      speciesB: {
        dailyCaloriesKcal: 'ok. 2200 – 3000 kcal/dzień (smukła budowa ciała obniżająca spoczynkowy wydatek energetyczny o ~25–35%).',
        huntingAndDietDetail: 'Rewolucja szerokiego spektrum (broad-spectrum revolution): rybołówstwo, harpuny, ptactwo, dzikie nasiona zbóż oraz broń miotana na odległość (atlatl / miotacz oszczepów z zasięgiem do 60–80 m).',
        shelterAndMobility: 'Skomplikowane obozowiska z kości mamucich (np. Mezhyrich, Dolní Věstonice) oraz szałasy skórzane; wysoka mobilność sezonowa.',
        childhoodAndLifespan: 'Wydłużone dzieciństwo i powolny rozwój mózgu wspomagany alloparentingiem; znacznie wyższy odsetek osobników dożywających wieku postreprodukcyjnego (obecność babć).',
        skeletalTraumaPattern: 'Brak traum typu rodeo; znacznie mniej ciężkich urazów głowy dzięki polowaniu na dystans; pojawienie się w zapisie kopalnym ran kłutych od strzał i oszczepów zadanych w starciach międzygrupowych.'
      }
    },
    spatiotemporalEncounter: {
      coexistenceStatus: 'direct_overlap',
      coexistenceLabel: 'Bezpośrednia Koegzystencja i Strefa Kontaktu',
      keyGeographicZones: ['Lewant (Jaskinie Skhul, Qafzeh, Kebara, Amud)', 'Europa Środkowa i Półwysep Iberyjski', 'Góry Ałtaj (Syberia)'],
      datingOverlap: 'ok. 100 000 – 40 000 lat temu (w Lewancie falowa koegzystencja przez ponad 50 tys. lat; w Europie ok. 5–10 tys. lat bezpośredniego kontaktu).',
      archaeologicalSites: ['Skhul / Qafzeh (Izrael)', 'Jaskinia Bacho Kiro (Bułgaria)', 'Grotte Mandrin (Francja)', 'Peștera cu Oase (Rumunia)'],
      encounterNarrative: 'Przez tysiąclecia obie populacje wymieniały się terytoriami w zależności od fal ciepła i zlodowaceń. Około 55 000 lat temu w rejonie Bliskiego Wschodu doszło do kluczowego epizodu krzyżowania, z którego pochodzi domieszka w genomie wszystkich współczesnych ludzi pozaafrykańskich.'
    },
    displacementMechanisms: {
      winnerSpeciesId: 'homo-sapiens',
      primaryHypothesis: 'Przewaga demograficzno-sieciowa i broń dystansowa przy niestabilności klimatycznej MIS 3.',
      demographicDensity: 'Grupy Sapiens były 8–10 krotnie liczniejsze w skali regionalnej, tworząc odporniejsze na kryzysy sieci demograficzne.',
      tradeAndMaterialNetworks: 'Sapiens wymieniali surowce (np. obsydian, krzemień bałtycki, muszle morskie) na dystansach ponad 300–500 km; Neandertalczycy ograniczali się do surowców lokalnych (<50 km).',
      climaticEnergeticCost: 'Podczas gwałtownych epizodów ochłodzenia (zdarzenia Dansgaarda-Oeschgera i Heinricha) zwierzyna uciekała na południe; krępy Neandertalczyk potrzebujący 4500 kcal cierpiał głód, podczas gdy Sapiens polował na zające i ptaki miotaczami oszczepu.',
      dietaryBroadness: 'Neandertalczycy byli wyspecjalizowani w wielkich roślinożercach; gdy megafauna uległa przetrzebieniu, brak elastyczności żywieniowej okazał się pułapką ewolucyjną.',
      socialCohesionAndDomestication: 'Sapiens posiadali wyższy stopień samoudomowienia (redukcja agresji reaktywnej), co pozwalało na pokojowe łączenie się wielu obozów w rytualne makrogrupy liczące setki osób.'
    },
    geneticLegacy: {
      introgressionRate: '1,5% – 2,1% w genomie współczesnych ludzi pochodzenia pozaafrykańskiego.',
      introgressedTraits: [
        'Układ odpornościowy: archaiczne receptory TLR (Toll-like receptors) chroniące przed patogenami euroazjatyckimi',
        'Krzepnięcie krwi: szybsza agregacja płytek (adaptacja do ran, dziś zwiększająca ryzyko udarów)',
        'Skóra i włosy: metabolizm lipidów w naskórku i warianty barwy ułatwiające syntezę witaminy D w chłodnym klimacie',
        'Zegar biologiczny: warianty regulujące rytm okołodobowy w wysokich szerokościach geograficznych'
      ],
      hybridFitnessAndInfertility: 'Wykryto tzw. „pustynie neandertalskie” w genomie (obszary całkowicie pozbawione DNA neandertalskiego), zwłaszcza na chromosomie X i w genach związanych z jądrami, co dowodzi częściowej bezpłodności męskich hybryd pierwszych pokoleń (reguła Haldane’a).',
      keyGenesIdentified: ['TLR1/TLR6', 'SLC16A11', 'POU2F3', 'BNC2', 'klaster 3p21.31'],
      paleogeneticSummary: 'Svante Pääbo (Nagroda Nobla 2022) udowodnił, że Neandertalczycy nie zniknęli bez śladu – zostali częściowo zasymilowani genetycznie przez ekspandujące populacje Sapiens.'
    },
    confidenceLevel: 'level1'
  },
  'denisovans-vs-homo-sapiens': {
    pairId: 'denisovans-vs-homo-sapiens',
    speciesAId: 'denisovans',
    speciesBId: 'homo-sapiens',
    title: 'Denisowianie vs. Homo sapiens',
    subtitle: 'Władcy Azji i Płaskowyżu Tybetańskiego kontra Wędrowcy na Krańce Pacyfiku',
    dailyEcology: {
      speciesA: {
        dailyCaloriesKcal: 'ok. 3800 – 4600 kcal/dzień; przystosowanie do surowego, zimnego klimatu Syberii i wysokogórskiej hipoksji Tybetu.',
        huntingAndDietDetail: 'Polowanie na konie dzikie, jaki, nosorożce stepowe i owce ałtajskie; wysoka zawartość tłuszczu zwierzęcego w diecie.',
        shelterAndMobility: 'Długotrwałe zasiedlenie głębokich jaskiń krasowych (Denisowa, Baishiya w Xiahe); mistrzostwo technologii kościanej i mikro-retuszu.',
        childhoodAndLifespan: 'Potężne zęby trzonowe i żuchwy wskazują na potężny aparat żucia i powolne ścieranie szkliwa.',
        skeletalTraumaPattern: 'Z uwagi na ograniczony materiał kostny postkranialny wzorce urazów są nadal badane.'
      },
      speciesB: {
        dailyCaloriesKcal: 'ok. 2400 – 3000 kcal/dzień; wysoka plastyczność termiczna.',
        huntingAndDietDetail: 'Eksploatacja fauny morskiej, ryb, nasion i drobnych ssaków; żegluga przybrzeżna (łodzie bambusowe) umożliwiająca dotarcie do Sahulu (Australii).',
        shelterAndMobility: 'Szybkie przemieszczanie się wzdłuż wybrzeży Oceanu Indyjskiego i Azji Południowo-Wschodniej.',
        childhoodAndLifespan: 'Wydłużone dzieciństwo i przekazywanie wiedzy morskiej.',
        skeletalTraumaPattern: 'Zróżnicowane wzorce nadrzewno-wodne i łowieckie.'
      }
    },
    spatiotemporalEncounter: {
      coexistenceStatus: 'direct_overlap',
      coexistenceLabel: 'Koegzystencja w Azji i Australazji',
      keyGeographicZones: ['Góry Ałtaj (Jaskinia Denisowa)', 'Płaskowyż Tybetański (Jaskinia Baishiya)', 'Sundaland i Wallacea (Azja Płd.-Wsch.)'],
      datingOverlap: 'ok. 80 000 – 30 000 lat temu.',
      archaeologicalSites: ['Jaskinia Denisowa (Syberia)', 'Jaskinia Baishiya Karst (Tybet)', 'Tam Pa Ling (Laos)'],
      encounterNarrative: 'Sapiens napotkali Denisowian w trakcie marszu przez Azję Centralną oraz w gęstych lasach i wyspach Azji Południowo-Wschodniej. Doszło do co najmniej dwóch odrębnych epizodów krzyżowania z różnymi populacjami denisowskimi.'
    },
    displacementMechanisms: {
      winnerSpeciesId: 'homo-sapiens',
      primaryHypothesis: 'Demograficzna przewaga Sapiens połączona z asymilacją genetyczną.',
      demographicDensity: 'Podobnie jak u Neandertalczyków, mała efektywna liczebność populacji Denisowian doprowadziła do ich rozmycia w rosnącej fali Sapiens.',
      tradeAndMaterialNetworks: 'Sapiens stworzyli rozległe szlaki wymiany ochry i surowców kamiennych w całej Azji.',
      climaticEnergeticCost: 'Zmienność monsunowa i wahania poziomu morza premiowały elastyczność łowiecko-zbieracką Sapiens.',
      dietaryBroadness: 'Dieta szerokiego spektrum u Sapiens vs wyspecjalizowana baza ssaków kopytnych.',
      socialCohesionAndDomestication: 'Większe sieci koalicyjne Sapiens.'
    },
    geneticLegacy: {
      introgressionRate: 'Do 4% – 6% u rdzennych mieszkańców Melanezji, Papui-Nowej Gwinei i australijskich Aborygenów; ok. 0,2% u mieszkańców Azji Wschodniej.',
      introgressedTraits: [
        'Gen EPAS1: kluczowa adaptacja Tybetańczyków zapobiegająca nadprodukcji hemoglobiny i zakrzepom w warunkach niedotlenienia powyżej 4000 m n.p.m.',
        'Gen TBX15 / WARS2: adaptacja metaboliczna u Inuitów stymulująca termogenezę w brunatnej tkance tłuszczowej (BAT)',
        'Odporność immunologiczna: unikalne warianty antygenów leukocytarnych HLA w rejonie Pacyfiku'
      ],
      hybridFitnessAndInfertility: 'Obecność hybrydy pierwszego pokolenia „Denny” (Denisova 11 — matka Neandertalka, ojciec Denisowianin) dowodzi bezpośredniej wymiany genów między archaicznymi hominidami.',
      keyGenesIdentified: ['EPAS1', 'TBX15', 'WARS2', 'HLA-A*11'],
      paleogeneticSummary: 'Denisowianie przekazali współczesnym ludziom jedne z najbardziej spektakularnych adaptacji fizjologicznych do środowisk skrajnych (wysokie góry i arktyczny mróz).'
    },
    confidenceLevel: 'level1'
  },
  'homo-erectus-vs-homo-floresiensis': {
    pairId: 'homo-erectus-vs-homo-floresiensis',
    speciesAId: 'homo-erectus',
    speciesBId: 'homo-floresiensis',
    title: 'Homo erectus vs. Homo floresiensis',
    subtitle: 'Kolos z Sawanny i Pustyni a Karzeł Wyspowy: Siła Prawa Fostera',
    dailyEcology: {
      speciesA: {
        dailyCaloriesKcal: 'ok. 2800 – 3500 kcal/dzień; duża masa ciała (~65 kg), długie kończyny przystosowane do biegu maratońskiego.',
        huntingAndDietDetail: 'Polowanie wytrzymałościowe w południowym słońcu aż do hipertermii ofiary; systematyczne cięcie mięsa pięściakami aszelskimi i pieczenie na ogniu.',
        shelterAndMobility: 'Szerokie terytoria łowieckie sawanny afrykańskiej i azjatyckiej; obozy otwarte przy rzekach i jeziorach.',
        childhoodAndLifespan: 'Szybsze dojrzewanie niż u Sapiens, lecz wolniejsze niż u australopiteków.',
        skeletalTraumaPattern: 'Ślady zakażeń okostnej i urazów od zębów drapieżników.'
      },
      speciesB: {
        dailyCaloriesKcal: 'ok. 1200 – 1500 kcal/dzień; miniaturowa masa ciała (~25–30 kg, wzrost 106 cm) drastycznie redukująca koszt podtrzymania życia na ubogiej w zasoby wyspie.',
        huntingAndDietDetail: 'Zasadzki na karłowatego stegodona, polowanie na szczury olbrzymie i unikanie waranów z Komodo; użycie drobnych retuszowanych odłupków.',
        shelterAndMobility: 'Życie skupione wokół jaskini Liang Bua na Flores; ograniczona przestrzeń wyspowa.',
        childhoodAndLifespan: 'Krótki cykl życiowy typowy dla małych ssaków wyspiarskich.',
        skeletalTraumaPattern: 'Złamania i ślady ataków wielkich gadów drapieżnych.'
      }
    },
    spatiotemporalEncounter: {
      coexistenceStatus: 'ancestor_descendant',
      coexistenceLabel: 'Prawdopodobna Relacja Przodek–Potomek w Izolacji',
      keyGeographicZones: ['Indonezja (Wyspa Flores, Mata Menge vs Liang Bua)'],
      datingOverlap: 'Homo erectus dotarł na Flores (Mata Menge) ok. 800–700 tys. lat temu; Homo floresiensis w Liang Bua przetrwał do ok. 50 tys. lat temu.',
      archaeologicalSites: ['Mata Menge (Flores)', 'Jaskinia Liang Bua (Flores)', 'Trinil / Sangiran (Jawa)'],
      encounterNarrative: 'Populacja azjatyckiego Homo erectus uwięziona na Flores na wschód od Linii Wallace\'a uległa w ciągu setek tysięcy lat gwałtownej karłowatości wyspowej (reguła Fostera) w odpowiedzi na brak dużych drapieżników lądowych i ograniczone zasoby kalorii.'
    },
    displacementMechanisms: {
      winnerSpeciesId: 'homo-floresiensis',
      primaryHypothesis: 'Selekcja w kierunku miniaturyzacji na wyspie; ostateczne wymarcie po przybyciu Homo sapiens.',
      demographicDensity: 'Małe populacje wyspiarskie rzędu kilkuset osobników na całej wyspie.',
      tradeAndMaterialNetworks: 'Brak handlu zamorskiego; całkowita izolacja biogeograficzna.',
      climaticEnergeticCost: 'Karłowatość była doskonałą adaptacją energetyczną: mózg skurczył się do 417 cm³, co oszczędzało kalorie.',
      dietaryBroadness: 'Eksploatacja endemicznej fauny wyspiarskiej.',
      socialCohesionAndDomestication: 'Kooperacja małych grup rodzinnych w głębi jaskiń.'
    },
    geneticLegacy: {
      introgressionRate: 'Brak zachowanego kopalnego DNA z powodu gorącego i wilgotnego klimatu tropikalnego Flores.',
      introgressedTraits: [
        'Współcześni pigmeje Rampasasa żyjący w pobliżu jaskini Liang Bua są anatomicznie niscy, lecz badania genomowe wykazały, że ich niski wzrost to niezależna konwergencja ewolucyjna wewnątrz Homo sapiens bez domieszki DNA floresiensis.'
      ],
      hybridFitnessAndInfertility: 'Brak danych aDNA.',
      keyGenesIdentified: ['Brak danych kopalnych'],
      paleogeneticSummary: 'Klasyczny podręcznikowy przykład plastyczności ewolucyjnej rzędu naczelnych: rodzaj Homo potrafił w warunkach wyspiarskich zredukować masę ciała i mózgu o ponad połowę, zachowując złożone zachowania narzędziowe.'
    },
    confidenceLevel: 'level1'
  },
  'homo-habilis-vs-homo-erectus': {
    pairId: 'homo-habilis-vs-homo-erectus',
    speciesAId: 'homo-habilis',
    speciesBId: 'homo-erectus',
    title: 'Homo habilis vs. Homo erectus / ergaster',
    subtitle: 'Narodziny Biegu Długodystansowego i Ognia: Jak Przemysł Aszelski Zastąpił Otoczaki',
    dailyEcology: {
      speciesA: {
        dailyCaloriesKcal: 'ok. 1800 – 2200 kcal/dzień; małe ciało, wciąż częściowo nadrzewne proporcje kończyn.',
        huntingAndDietDetail: 'Oportunistyczny padlinożerca konfrontacyjny i zbieracz; rozbijanie kości otoczakami oldowajskimi w celu pozyskania szpiku kostnego.',
        shelterAndMobility: 'Noclegi na drzewach dla ochrony przed tygrysami szablozębnymi i hienami; ograniczony promień poruszania się pieszo.',
        childhoodAndLifespan: 'Szybkie tempo wzrostu zbliżone do szympansów; wysoka śmiertelność młodych.',
        skeletalTraumaPattern: 'Ślady zębów wielkich kotów na kościach czaszki (np. SK 54 z Swartkrans).'
      },
      speciesB: {
        dailyCaloriesKcal: 'ok. 3000 – 3800 kcal/dzień; potężny wydatek energetyczny na bieg wytrzymałościowy i zasilanie mózgu o pojemności dochodzącej do 1000 cm³.',
        huntingAndDietDetail: 'Aktywne polowanie na grubego zwierza i pieczenie mięsa na ogniu; symetryczne pięściaki aszelskie do patroszenia tusz słoni i hipopotamów.',
        shelterAndMobility: 'Życie wyłącznie naziemne; utrata adaptacji nadrzewnych; wędrówki na tysiące kilometrów przez kontynenty.',
        childhoodAndLifespan: 'Wydłużenie okresu młodocianego (Turkana Boy KNM-WT 15000); początki alloparentingu.',
        skeletalTraumaPattern: 'Złamania zmęczeniowe kości stóp i podudzia od długodystansowego marszu i biegu.'
      }
    },
    spatiotemporalEncounter: {
      coexistenceStatus: 'direct_overlap',
      coexistenceLabel: 'Długotrwała Koegzystencja we Wschodniej Afryce',
      keyGeographicZones: ['Kotlina Jeziora Turkana (Kenia)', 'Wąwóz Olduvai (Tanzania)'],
      datingOverlap: 'ok. 1,9 – 1,4 mln lat temu (ponad 400 tysięcy lat współistnienia w tych samych dolinach ryftowych).',
      archaeologicalSites: ['Koobi Fora (Kenia)', 'Wąwóz Olduvai (Tanzania)', 'Ileret'],
      encounterNarrative: 'Słynne odkrycie z 2007 r. (Spoor et al., Nature) czaszek Homo habilis (KNM-ER 42703, datowanej na zaledwie 1,44 Ma) oraz Homo erectus (KNM-ER 42700, 1,55 Ma) w tej samej formacji dowiodło, że erectus nie zastąpił habilis z dnia na dzień, lecz oba gatunki dzieliły ekosystem, zajmując odmienne nisze troficzne.'
    },
    displacementMechanisms: {
      winnerSpeciesId: 'homo-erectus',
      primaryHypothesis: 'Przewaga biomechaniczna biegu, termoregulacji i opanowanie ognia.',
      demographicDensity: 'Erectus dzięki diecie wysokobiałkowej i pieczeniu pokarmu uzyskał wyższą płodność i skolonizował cały Stary Świat.',
      tradeAndMaterialNetworks: 'Przenoszenie wyselekcjonowanych brył surowca aszelskiego na odległość kilkunastu kilometrów.',
      climaticEnergeticCost: 'Erectus dzięki gruczołom potowym i utracie futra polował w samo południe, gdy drapieżniki spały.',
      dietaryBroadness: 'Obróbka termiczna mięsa i bulw skrobiowych (hipoteza Richarda Wranghama).',
      socialCohesionAndDomestication: 'Dzielenie się pieczonym mięsem przy bezpiecznym ognisku (home bases).'
    },
    geneticLegacy: {
      introgressionRate: 'Brak danych molekularnych z uwagi na wiek próbek (>1,5 mln lat).',
      introgressedTraits: [
        'Anatomiczne dziedzictwo: to Homo erectus ukształtował biomechanikę stopy, miednicy i klatki piersiowej, którą odziedziczył współczesny człowiek.'
      ],
      hybridFitnessAndInfertility: 'Brak danych',
      keyGenesIdentified: ['MC1R (melanizacja skóry)', 'geny amylazy ślinowej AMY1'],
      paleogeneticSummary: 'Przełomowy moment w dziejach hominidów: przejście od małego oportunistycznego padlinożercy (habilis) do globalnego drapieżnika sawanny (erectus).'
    },
    confidenceLevel: 'level1'
  }
};

// Generic dynamic comparison generator for any pair from SPECIES_DATA
export function getOrGeneratePairwiseComparison(idA: string, idB: string): PairwiseComparisonData {
  const directKey = `${idA}-vs-${idB}`;
  const reverseKey = `${idB}-vs-${idA}`;

  if (KEY_PAIRWISE_COMPARISONS[directKey]) {
    return KEY_PAIRWISE_COMPARISONS[directKey];
  }

  if (KEY_PAIRWISE_COMPARISONS[reverseKey]) {
    const rev = KEY_PAIRWISE_COMPARISONS[reverseKey];
    return {
      ...rev,
      pairId: directKey,
      speciesAId: idA,
      speciesBId: idB,
      title: `${rev.title.split(' vs. ')[1]} vs. ${rev.title.split(' vs. ')[0]}`,
      dailyEcology: {
        speciesA: rev.dailyEcology.speciesB,
        speciesB: rev.dailyEcology.speciesA
      }
    };
  }

  // Fallback dynamic generator using speciesData
  const spA = SPECIES_DATA.find(s => s.id === idA) || SPECIES_DATA[0];
  const spB = SPECIES_DATA.find(s => s.id === idB) || SPECIES_DATA[1];

  const maxStart = Math.min(spA.yearsAgoRange[0], spB.yearsAgoRange[0]);
  const minEnd = Math.max(spA.yearsAgoRange[1], spB.yearsAgoRange[1]);
  const hasTimeOverlap = maxStart >= minEnd;

  return {
    pairId: directKey,
    speciesAId: idA,
    speciesBId: idB,
    title: `${spA.name} vs. ${spB.name}`,
    subtitle: `Komparatystyka Paleoantropologiczna: Objętość Mózgu, Ekologia i Kultura Narzędziowa`,
    dailyEcology: {
      speciesA: {
        dailyCaloriesKcal: `Szacowane zapotrzebowanie: ${Math.round(spA.brainCapacityCm3.avg * 2.2 + 1200)} kcal/dzień.`,
        huntingAndDietDetail: spA.dietAndSurvivalStrategy,
        shelterAndMobility: `Zasięg: ${spA.geographicRange}. Narzędzia: ${spA.toolIndustry}.`,
        childhoodAndLifespan: spA.boundaryBehaviors.careDescription,
        skeletalTraumaPattern: spA.boundaryBehaviors.violenceAndCooperation
      },
      speciesB: {
        dailyCaloriesKcal: `Szacowane zapotrzebowanie: ${Math.round(spB.brainCapacityCm3.avg * 2.2 + 1200)} kcal/dzień.`,
        huntingAndDietDetail: spB.dietAndSurvivalStrategy,
        shelterAndMobility: `Zasięg: ${spB.geographicRange}. Narzędzia: ${spB.toolIndustry}.`,
        childhoodAndLifespan: spB.boundaryBehaviors.careDescription,
        skeletalTraumaPattern: spB.boundaryBehaviors.violenceAndCooperation
      }
    },
    spatiotemporalEncounter: {
      coexistenceStatus: hasTimeOverlap ? 'contact_zone' : 'no_overlap',
      coexistenceLabel: hasTimeOverlap ? 'Możliwy Kontakt Czasowy w Zapisie Kopalnym' : 'Rozbieżność Chronologiczna w Zapisie Kopalnym',
      keyGeographicZones: [spA.geographicRange, spB.geographicRange],
      datingOverlap: hasTimeOverlap ? `Współistnienie w przedziale ok. ${maxStart} – ${minEnd} tys. lat temu.` : `Brak bezpośredniej koegzystencji (różnica epok geologicznych).`,
      archaeologicalSites: [spA.discoveryInfo.split(';')[0], spB.discoveryInfo.split(';')[0]],
      encounterNarrative: hasTimeOverlap
        ? `Oba taksony funkcjonowały w zbliżonym horyzoncie czasowym, reprezentując alternatywne strategie adaptacji biomechanicznej i kognitywnej.`
        : `Taksony reprezentują odmienne stadia radiacji adaptacyjnej rodzaju Homo, oddzielone setkami tysięcy lat ewolucji morfologicznej.`
    },
    displacementMechanisms: {
      primaryHypothesis: `Różnice w pojemności puszki mózgowej (${spA.brainCapacityCm3.avg} cm³ vs ${spB.brainCapacityCm3.avg} cm³) oraz złożoności narzędziowej.`,
      demographicDensity: `Szacowane wielkości grup: ${spA.estimatedGroupSize.min}–${spA.estimatedGroupSize.max} osób vs ${spB.estimatedGroupSize.min}–${spB.estimatedGroupSize.max} osób.`,
      tradeAndMaterialNetworks: `Przemysły: ${spA.toolIndustry.split(':')[0]} vs ${spB.toolIndustry.split(':')[0]}.`,
      climaticEnergeticCost: `Przystosowanie do zróżnicowanych nisz: ${spA.epochRange} vs ${spB.epochRange}.`,
      dietaryBroadness: `Strategie: ${spA.dietAndSurvivalStrategy.substring(0, 100)}... vs ${spB.dietAndSurvivalStrategy.substring(0, 100)}...`,
      socialCohesionAndDomestication: spA.bioNeuroHighlights.socialBrainRatio
    },
    geneticLegacy: {
      introgressionRate: spA.paleogeneticsAndHybridization,
      introgressedTraits: [spA.bioNeuroHighlights.vocalAndSymbolicSubstrate, spB.bioNeuroHighlights.vocalAndSymbolicSubstrate],
      hybridFitnessAndInfertility: 'Badania aDNA realizowane w ramach paleogenetyki ewolucyjnej (Max Planck Institute).',
      keyGenesIdentified: ['FOXP2', 'EPAS1', 'MC1R'],
      paleogeneticSummary: `${spA.paleogeneticsAndHybridization} | ${spB.paleogeneticsAndHybridization}`
    },
    confidenceLevel: 'level2'
  };
}

export const getPairwiseComparison = getOrGeneratePairwiseComparison;

