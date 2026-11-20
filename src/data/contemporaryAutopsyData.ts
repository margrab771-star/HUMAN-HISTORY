import { PhenomenonAutopsy } from '../types';

export const CONTEMPORARY_AUTOPSIES: PhenomenonAutopsy[] = [
  {
    id: 'wypalenie-zawodowe',
    title: '1. Chroniczne Wypalenie Zawodowe (Burnout)',
    subtitle: 'Niewygaszalna oś HPA w bezosobowej strukturze korporacyjnej',
    category: 'praca_i_status',
    categoryLabel: 'Praca i Status',
    bioNeuroMechanism: 'Permanentna aktywacja osi podwzgórze-przysadka-nadnercza (HPA). Nadmiar krążącego kortyzolu wywołuje atrofię dendrytów w hipokampie i korze przedczołowej (dlPFC) przy jednoczesnym rozroście ciała migdałowatego, prowadząc do przewlekłego stanu zapalnego (IL-6, TNF-alpha) i anhedonii.',
    pleistoceneFunction: 'Układ alarmowy wyewoluował na ostre, krótkotrwałe zagrożenia fizyczne (atak drapieżnika trwający minuty). Po ucieczce następował powrót do stada, rozluźnienie i wyrzut oksytocyny.',
    historicalShift: 'W Antyku praca fizyczna spoczywała na niewolnikach, a obywatele znali pojęcie otium (czasu wolnego na filozofię i politykę). W Erze Przemysłowej pojawił się zegar fabryczny i mechaniczna dyscyplina, lecz istniał wyraźny koniec 8-godzinnej szychty fizycznej.',
    modernOverdrive: 'W epoce smartfonów i powiadomień granica między pracą a regeneracją została zniszczona. Układ nerwowy traktuje e-mail od przełożonego o 22:30 tak samo jak szarżującego drapieżnika, nie przechodząc nigdy w przywspółczulną fazę odpoczynku (rest-and-digest).',
    mitigationProtocol: {
      individual: [
        'Sztywny post cyfrowy: całkowite odcięcie powiadomień służbowych po godzinie 18:00.',
        'Wysiłek tlenowy strefy 2 (Zone 2 cardio) przez 45 minut: fizyczne „spalenie” glukokortykoidów imitujące ucieczkę przed zagrożeniem.',
        'Codzienna 20-minutowa ekspozycja na zieleń i naturalne światło (obniżenie kortyzolu o ~21%).'
      ],
      environmental: [
        'Instytucjonalne prawo do odłączenia (Right to Disconnect) w umowach o pracę.',
        'Likwidacja komunikatorów czasu rzeczywistego (Slack/Teams) na rzecz asynchronicznej korespondencji projektowej.'
      ],
      scientificRationale: 'Odtworzenie plejstoceńskiego cyklu stresu: po mobilizacji musi nastąpić bezwzględna faza somatycznego bezpieczeństwa klanowego.'
    },
    keySources: ['Robert Sapolsky (2004 „Why Zebras Don\'t Get Ulcers”) ground-breaking neuroendocrinology', 'Michael Meaney epigenetics']
  },
  {
    id: 'polaryzacja-nienawisc-siec',
    title: '2. Polaryzacja i Plemienność w Sieci (Outgroup Hostility)',
    subtitle: 'Koalicyjny umysł plemienny stymulowany algorytmami zaangażowania',
    category: 'poznanie_i_media',
    categoryLabel: 'Poznanie i Media',
    bioNeuroMechanism: 'Przednia kora wyspy i ciało migdałowate przetwarzają oponenta ideologicznego jak zanieczyszczenie patogenowe lub zagrożenie koalicyjne. Jednocześnie krytyka „obcych” wyzwala wyrzut dopaminy w prążkowiu (nagroda za obronę plemienia).',
    pleistoceneFunction: 'Lojalność koalicyjna decydowała o życiu i śmierci w konfliktach terytorialnych z sąsiednimi bandami. Brak solidarności z własnym klanem oznaczał śmierć z rąk wroga.',
    historicalShift: 'W Antyku i Średniowieczu plemienność kanalizowano w wojny państwowe, religijne oraz igrzyska cyrkowe (np. frakcje Błękitnych i Zielonych w Bizancjum). Istniały jednak wspólne rytuały obywatelskie jednoczące całe polis.',
    modernOverdrive: 'Algorytmy mediów społecznościowych odkryły, że oburzenie moralne generuje najwyższy czas spędzony na platformie (watch-time). Użytkownik jest bombardowany najbardziej skrajnymi karykaturami obozu przeciwnego 24/7.',
    mitigationProtocol: {
      individual: [
        'Reguła 10 sekund przed publikacją: zaangażowanie kory przedczołowej (dlPFC) w celu wygaszenia reaktywnej złości ciała migdałowatego.',
        'Celowa lektura najinteligentniejszych argumentów strony przeciwnej (zasada Steelmanning zamiast Strawmanningu).'
      ],
      environmental: [
        'Likwidacja algorytmów optymalizujących pod kątem zaangażowania opartego na wstręcie (outrage-based ranking).',
        'Wprowadzenie opóźnień (friction) przy udostępnianiu treści politycznych.'
      ],
      scientificRationale: 'Wyciszenie behawioralnego układu odpornościowego i aktywacja analitycznych obwodów teorii umysłu (ToM/TPJ).'
    },
    keySources: ['Jonathan Haidt (2012 „The Righteous Mind”) moral foundations', 'Mark Schaller behavioral immune system']
  },
  {
    id: 'zmeczenie-aplikacjami-randkowymi',
    title: '3. Zmęczenie Aplikacjami Randkowymi i Kryzys Intymności',
    subtitle: 'Efekt Coolidge’a i nieskończony wybór a archaiczny mechanizm przywiązania',
    category: 'relacje',
    categoryLabel: 'Relacje i Rozród',
    bioNeuroMechanism: 'Układ dopaminowy w prążkowiu koduje nowość percepcyjną (nowy profil/zdjęcie) jako szansę reprodukcyjną, hamując układ oksytocynowo-wazopresynowy odpowiedzialny za powolne budowanie głębokiej więzi partnerskiej.',
    pleistoceneFunction: 'Lokalna pula partnerska obejmowała 10–25 rówieśników w całym życiu. Wybór partnera opierał się na wielomiesięcznej obserwacji jego kompetencji, charakteru i lojalności w obozie.',
    historicalShift: 'W Antyku i Epoce Agrarnej małżeństwa były zorganizowanymi kontraktami sojuszniczymi rodów (wymóg posagu, prawa spadkowe). W Erze Przemysłowej pojawiła się romantyczna miłość miejska, lecz nadal ograniczona do lokalnego sąsiedztwa i zakładu pracy.',
    modernOverdrive: 'Globalna asymetria algorytmiczna: użytkownik przegląda tysiące profili w godzinę (bodziec nadnormalny). Mężczyźni z dołu rozkładu doświadczają 99% odrzuceń, a kobiety paraliżu wyboru i instrumentalizacji seksualnej.',
    mitigationProtocol: {
      individual: [
        'Rezygnacja z aplikacji swipe\'ujących na rzecz poznawania ludzi w stałych, powtarzalnych grupach zainteresowań (zasada mere-exposure Roberta Zajonca).',
        'Zasada jednej randki na raz: zakaz równoległego czatowania z kilkoma osobami w celu umożliwienia konsolidacji układu oksytocyny.'
      ],
      environmental: [
        'Projektowanie platform randkowych z dziennym limitem kontaktów (np. 1 rekomendacja dziennie z wymogiem pogłębionej rozmowy).'
      ],
      scientificRationale: 'Odtworzenie plejstoceńskiej skali wyboru, w której człowiek jest w stanie emocjonalnie docenić i zaangażować się w drugą istotę.'
    },
    keySources: ['David Buss (2016 „The Evolution of Desire”) sexual strategies', 'Barry Schwartz (2004 „The Paradox of Choice”)']
  },
  {
    id: 'psychopatia-korporacyjna',
    title: '4. Psychopatia i Cynizm w Strukturach Korporacyjnych',
    subtitle: 'Zdjęcie hamulców reputacyjnych w anonimowej biurokracji kapitałowej',
    category: 'praca_i_status',
    categoryLabel: 'Praca i Status',
    bioNeuroMechanism: 'Niska pobudliwość ciała migdałowatego na sygnały cierpienia i brak hamowania w vmPFC połączona z nienaruszoną, chłodną teorią umysłu (cognitive ToM) i sprawnym dlPFC kalkulującym zyski.',
    pleistoceneFunction: 'Rzadka strategia zależna od częstości (~1%). W małej wspólnocie koczowniczej psychopata był natychmiast demaskowany przez pamięć reputacyjną i dyscyplinowany przez odwróconą hierarchię dominacji Boehma.',
    historicalShift: 'W starożytnym Rzymie bezwzględność była częściowo nagradzana w podbojach militarnych, lecz arystokracja podlegała surowej kontroli cenzorów i tradycji przodków (mos maiorum). W kapitalizmie przemysłowym pojawiły się spółki z o.o. oddzielające moralność od zysku.',
    modernOverdrive: 'Wielkie międzynarodowe korporacje z ciągłą rotacją kadr stanowią idealną niszę pasożytniczą: urok powierzchowny i brak skrupułów są mylone z „charyzmatycznym przywództwem kryzysowym”. Menedżer niszczy zespół, inkasuje premię i przenosi się do innej firmy przed ujawnieniem strat.',
    mitigationProtocol: {
      individual: [
        'Zasada 360-stopniowego audytu moralnego: ocena liderów przez ich bezpośrednich podwładnych, a nie tylko przez przełożonych zachwyconych cyframi.',
        'Edukacja zespołów w zakresie demaskowania technik manipulacji gaslightingu i bombardowania miłością korporacyjną.'
      ],
      environmental: [
        'Osobista odpowiedzialność karna i majątkowa zarządów za niszczenie zdrowia pracowników i fałszerstwa strukturalne.',
        'Wprowadzenie rygorystycznych testów klinicznych (np. PCL-R) na kluczowych stanowiskach decyzyjnych.'
      ],
      scientificRationale: 'Przywrócenie plejstoceńskiej przezroczystości reputacyjnej uniemożliwiającej ukrycie destrukcyjnych skutków cynizmu.'
    },
    keySources: ['Paul Babiak & Robert Hare (2006 „Snakes in Suits”)', 'Clive Boddy (2011 corporate psychopathy research)']
  },
  {
    id: 'zapasc-dzietnosci',
    title: '5. Zapaść Dzietności w Krajach Rozwiniętych (TFR < 1,3)',
    subtitle: 'Rozpad alloparentingu i wyścig o dobra pozycyjne w późnym kapitalizmie',
    category: 'relacje',
    categoryLabel: 'Relacje i Rozród',
    bioNeuroMechanism: 'Oś HPA u młodych dorosłych rejestruje chroniczny brak zasobów (koszt metra kwadratowego mieszkania, brak babci do pomocy, niepewność zatrudnienia) jako środowisko niesprzyjające rozrodowi, wyzwalając odruchowe odraczanie ciąży.',
    pleistoceneFunction: 'Wychowanie dziecka wymagało 13 milionów kalorii do osiągnięcia dojrzałości. Matka polegała na 6–8 osobach w alloparentingu; dziecko nigdy nie było wychowywane w samotności.',
    historicalShift: 'W cywilizacjach agrarnych Antyku i Wieków Średnich dzieci były darmową siłą roboczą w gospodarstwie i jedynym zabezpieczeniem emerytalnym rodziców (stąd presja na wielodzietność). W epoce fabrycznej zakaz pracy dzieci i szkoła zamieniły potomstwo w koszt finansowy.',
    modernOverdrive: 'Współczesna rodzina nuklearna żyje w izolacji w wielkim mieście bez krewnych. Wychowanie dziecka stało się prywatnym, tytanicznym ciężarem kobiety, przy jednoczesnym wymogu uczestnictwa w 40-letnim wyścigu kariery zawodowej.',
    mitigationProtocol: {
      individual: [
        'Tworzenie lokalnych komun opiekuńczych i kooperatyw sąsiedzkich (współczesna rekonstrukcja alloparentingu).',
        'Rezygnacja z perfekcjonistycznego kultu „intensywnego rodzicielstwa” (helicopter parenting) generującego skrajne wypalenie matek.'
      ],
      environmental: [
        'Darmowe, powszechne, wysokiej jakości żłobki i przedszkola zintegrowane z miejscami pracy.',
        'Tanie budownictwo komunalne dla młodych rodzin w centrach miast zamiast kredytów na 30 lat.'
      ],
      scientificRationale: 'Jedynym biologicznym sposobem na podniesienie dzietności jest redukcja postrzeganego obciążenia psychofizycznego matki poprzez alloparenting.'
    },
    keySources: ['Sarah Blaffer Hrdy (2009 „Mothers and Others”)', 'Kong et al. (2017 PNAS demographic genetics)']
  },
  {
    id: 'doomscrolling-uzaleznienie-wideo',
    title: '6. Doomscrolling i Uzależnienie od Krótkich Wideo (TikTok)',
    subtitle: 'Hiperstymulacja szlaku mezolimbicznego przez algorytmiczną zmienność losową',
    category: 'poznanie_i_media',
    categoryLabel: 'Poznanie i Media',
    bioNeuroMechanism: 'Układ dopaminowy w jądrze półleżącym (NAcc) reaguje z maksymalną siłą na nieregularny harmonogram wzmocnień (Variable Ratio Schedule — zasada jednorękiego bandyty). Krótkie wideo (15 sekund) co chwila dostarcza nowego bodźca bez wysiłku poznawczego, prowadząc do downregulacji receptorów D2 i upośledzenia pamięci roboczej.',
    pleistoceneFunction: 'Poszukiwanie rzadkich śladów zwierzyny lub jagód: każdy krok w nieznanym terenie mógł przynieść niespodziewaną nagrodę kaloryczną. Mózg musiał być stale czujny na nowość.',
    historicalShift: 'W Antyku i wiekach dawnych informacja podróżowała z prędkością piechura lub konia; nowości docierały raz na miesiąc. Książki drukowane wymusiły linearną, wielogodzinną uwagę głęboką.',
    modernOverdrive: 'Sztuczna inteligencja TikToka analizuje mikrosekundy zawieszenia wzroku na ekranie i generuje spersonalizowany, nieskończony strumień bodźców nadnormalnych (supernormal stimuli), uniemożliwiając wejście w kojącą sieć DMN.',
    mitigationProtocol: {
      individual: [
        'Przełączenie ekranu smartfona w tryb skali szarości (Greyscale): drastyczne obniżenie pobudzenia kory wzrokowej i wyrzutu dopaminy o ~40%.',
        'Fizyczne usunięcie telefonu z sypialni i zastąpienie go tradycyjnym budzikiem.'
      ],
      environmental: [
        'Ustawowy zakaz stosowania mechanizmu nieskończonego przewijania (infinite scroll) i autoodtwarzania w aplikacjach konsumenckich.',
        'Wymóg przerw konstrukcyjnych co 20 minut sesji wideo.'
      ],
      scientificRationale: 'Odbudowa wrażliwości receptorów dopaminowych D2 i przywrócenie naturalnych punktów domknięcia poznawczego (efekt Zeigarnik).'
    },
    keySources: ['Anna Lembke (2021 „Dopamine Nation”)', 'Wolfram Schultz (1997 reward prediction error)']
  },
  {
    id: 'teorie-spiskowe-hadd',
    title: '7. Plaga Teorii Spiskowych i Paranoidalnego Myślenia',
    subtitle: 'Przesterowany moduł HADD w środowisku informacyjnego chaosu',
    category: 'poznanie_i_media',
    categoryLabel: 'Poznanie i Media',
    bioNeuroMechanism: 'Nadaktywny detektor intencjonalności (HADD) sprzężony z błędem negatywności w ciele migdałowatym. Gdy człowiek czuje brak kontroli nad życiem, kora przedczołowa zaczyna łączyć przypadkowe punkty danych w spójną narrację o „ukrytym wrogu”, redukując niepewność poznawczą.',
    pleistoceneFunction: 'Asymetria kosztów przetrwania (Teoria Zarządzania Błędem Haselton i Bussa): lepiej uznać wiatr w krzakach za czającego się lamparta niż zignorować realnego wroga. Selekcja naturalna bezlitośnie faworyzowała jednostki doszukujące się intencji za każdym przypadkowym zjawiskiem.',
    historicalShift: 'W Antyku za pioruny odpowiadał Zeus, a za zarazę gniew Apollina (spójny panteon wyjaśniający kryzysy). W Erze Nowożytnej nauka wyjaśniła prawa fizyki, lecz rozbiła poczucie osobistego sensu kosmosu.',
    modernOverdrive: 'W dobie kryzysów geopolitycznych, pandemii i skomplikowanych rynków finansowych przeciętny człowiek nie rozumie mechanizmów makroekonomicznych. Mózg natychmiast wraca do archaicznej heurystyki: „Ktoś za tym stoi i celowo spiskuje przeciwko nam”.',
    mitigationProtocol: {
      individual: [
        'Zastosowanie Brzytwy Hanlona: „Nigdy nie przypisuj złośliwości tego, co można łatwo wyjaśnić ludzką niekompetencją lub chaosem statystycznym”.',
        'Edukacja w zakresie myślenia probabilistycznego i losowości (zamiast szukania ukrytych intencji).'
      ],
      environmental: [
        'Odbudowa transparentności i zaufania do instytucji publicznych i akademickich.',
        'Depolaryzacja komunikacji kryzysowej w mediach.'
      ],
      scientificRationale: 'Świadome hamowanie pierwotnego modułu HADD za pomocą analitycznych procedur falsyfikacji Popperowskiej.'
    },
    keySources: ['Justin Barrett (2000 HADD theory)', 'Martie Haselton & David Buss (2000 Error Management Theory)']
  },
  {
    id: 'epidemia-samotnosci',
    title: '8. Epidemia Samotności Mimo Tysięcy Cyfrowych Kontaktów',
    subtitle: 'Głód fizycznej ko-obecności i neurochemiczna pustka tekstu na ekranie',
    category: 'zdrowie_psychiczne',
    categoryLabel: 'Zdrowie Psychiczne',
    bioNeuroMechanism: 'Do uwalniania endorfin i oksytocyny mózg naczelnych wymaga fizycznej ko-obecności: trójwymiarowego kontaktu wzrokowego, zapachów feromonowych, wspólnego śmiechu, synchronii oddechowej i mikromimiki odczytywanej przez neurony von Economo (VENs). Komunikacja tekstowa i lajki nie aktywują tych szlaków.',
    pleistoceneFunction: 'Bycie otoczonym przez współplemieńców 24 godziny na dobę: spanie w jednym szałasie, wspólny śpiew i opowieści przy ognisku. Samotność była synonimem wygnania i śmierci.',
    historicalShift: 'W Antyku obywatele spędzali dzień na agorze lub w termach miejskich w stałym kontakcie cielesnym. Społeczności wiejskie aż do XX wieku wspólnie darły pierze, kosiły zboże i bawiły się na weselach.',
    modernOverdrive: 'Atomizacja w mieszkaniach w blokach, praca zdalna zza laptopa, zamawianie jedzenia przez aplikacje bez słowa rozmowy z kurierem. Człowiek ma 5000 kontaktów w telefonie, lecz nikt nie dotknął jego ramienia od tygodni.',
    mitigationProtocol: {
      individual: [
        'Wprowadzenie stałego rytuału fizycznej kooperacji: chór amatorski, sporty drużynowe, taniec towarzyski (aktywacja endorfinowej synchronii grupowej Dunbara).',
        'Zastąpienie pisania wiadomości spotkaniem twarzą w twarz bez telefonów na stole.'
      ],
      environmental: [
        'Urbanistyka sprzyjająca interakcjom społecznym: wspólne ogrody osiedlowe, deptaki, likwidacja grodzonych osiedli.',
        'Wspieranie trzecich miejsc (Third Places): bibliotek, domów kultury, kawiarni społecznych.'
      ],
      scientificRationale: 'Zaspokojenie somatycznej potrzeby ssaczego przywiązania, której żaden piksel ani algorytm AI nie jest w stanie biologicznie zastąpić.'
    },
    keySources: ['Robin Dunbar (2021 „Friends”)', 'John Cacioppo (2008 „Loneliness: Human Nature and the Need for Social Connection”)']
  }
];
