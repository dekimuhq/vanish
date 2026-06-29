import type { Dict } from './en'

export const pl: Dict = {
  // App chrome / nav
  'app.name': 'Vanish',
  'app.tagline': 'znikaj warstwa po warstwie',
  'offline.badge': '⬡ 100% offline',
  'offline.title': 'Żadne dane nie opuszczają Twojego urządzenia',
  'nav.dashboard': 'Panel',
  'nav.plan': 'Drabina',
  'nav.brokers': 'Brokerzy',
  'nav.letters': 'Pisma',
  'nav.panic': 'Panika',
  'nav.settings': 'Ustawienia',

  // Common
  'common.back': '← Wróć',
  'common.next': 'Dalej →',
  'common.cancel': 'Anuluj',

  // Country group labels (select optgroups)
  'countryGroup.eu': 'Unia Europejska',
  'countryGroup.eea': 'Europejski Obszar Gospodarczy',
  'countryGroup.uk': 'Wielka Brytania',
  'countryGroup.us': 'Stany Zjednoczone',
  'countryGroup.other': 'Inne kraje',

  // Tiers
  'tier.tidy.name': 'Porządki',
  'tier.tidy.tagline': 'Mało wysiłku, duża ulga',
  'tier.tidy.who': 'Dla każdego. 20 minut, które warto poświęcić.',
  'tier.reduce.name': 'Redukcja',
  'tier.reduce.tagline': 'Zmniejsz swój ślad',
  'tier.reduce.who': 'Interesujesz się prywatnością i chcesz realnie zdystansować się od Big Tech i brokerów danych.',
  'tier.lockdown.name': 'Blokada',
  'tier.lockdown.tagline': 'Zabezpiecz wszystko',
  'tier.lockdown.who': 'Chcesz być naprawdę trudny do śledzenia, profilowania i doksowania.',
  'tier.ghost.name': 'Duch',
  'tier.ghost.tagline': 'Zniknij',
  'tier.ghost.who': 'Aktywiści, ocaleni, osoby zagrożone. Maksymalne odcięcie od swojego nazwiska.',

  // Categories
  'category.accounts': 'Konta',
  'category.data-brokers': 'Brokerzy danych',
  'category.devices': 'Urządzenia',
  'category.browser': 'Przeglądarka',
  'category.social': 'Media społecznościowe',
  'category.search': 'Wyszukiwanie',
  'category.messaging': 'Komunikatory',
  'category.email': 'E-mail',
  'category.finance': 'Finanse',
  'category.network': 'Sieć',
  'category.legal': 'Prawa i przepisy',

  // Score labels + ring
  'score.wideOpen': 'Całkowicie odsłonięty',
  'score.exposed': 'Narażony',
  'score.guarded': 'Chroniony',
  'score.ghosting': 'Prawie niewidzialny',
  'score.ariaLabel': 'Wynik prywatności: {score} na 100',

  // Effort / impact pills
  'pills.effort.low': 'Łatwe',
  'pills.effort.med': 'Umiarkowane',
  'pills.effort.high': 'Wymagające',
  'pills.effortTitle': 'Ile wysiłku wymaga to działanie',
  'pills.impact.low': 'Niski efekt',
  'pills.impact.med': 'Dobry efekt',
  'pills.impact.high': 'Duży efekt',

  // Adversaries (onboarding concern → adversary phrase)
  'adversary.stalking': 'konkretna osoba próbująca Cię odnaleźć',
  'adversary.bigtech': 'profilowanie przez Big Tech i sieci reklamowe',
  'adversary.brokers': 'brokerzy danych sprzedający Twój profil',
  'adversary.breaches': 'wycieki danych i przejęcia kont',
  'adversary.recruiters': 'przypadkowi szukający — randki, rekruterzy',
  'adversary.spam': 'spamerzy i listy reklamowe',

  // Onboarding
  'onboarding.subtitle': 'Znikaj z internetu warstwa po warstwie.',
  'onboarding.bullet1': 'Działa w 100% na Twoim urządzeniu. Żadnego konta, serwerów ani śledzenia.',
  'onboarding.bullet2': 'Prowadzona krok po kroku drabina realnych działań — od podstawowego porządku do pełnego zniknięcia.',
  'onboarding.bullet3': 'Generuje pisma o usunięcie danych zgodne z RODO/CCPA, które wysyłasz samodzielnie.',
  'onboarding.privacyNote': 'Trzy krótkie pytania dopasują Twój plan. Odpowiedzi nigdy nie opuszczają tego urządzenia.',
  'onboarding.start': 'Zacznij →',
  'onboarding.step1.title': 'Gdzie jesteś?',
  'onboarding.step1.hint': 'Dopasowuje brokerów i przysługujące Ci prawa — i wskazuje Twój organ ochrony danych w pismach.',
  'onboarding.selectCountry': 'Wybierz kraj…',
  'onboarding.authority': 'Twój organ nadzorczy:',
  'onboarding.step2.title': 'Co najbardziej Cię niepokoi?',
  'onboarding.step2.hint': 'Wybierz dowolnie. Pasujące działania pojawią się na górze.',
  'onboarding.concern.recruiters': 'Ludzie szukający mnie w Google (randki, rekruterzy)',
  'onboarding.concern.brokers': 'Brokerzy danych sprzedający moje informacje',
  'onboarding.concern.bigtech': 'Profilowanie przez Big Tech i reklamy',
  'onboarding.concern.breaches': 'Wycieki danych i przejęcia kont',
  'onboarding.concern.stalking': 'Konkretna osoba próbująca mnie znaleźć',
  'onboarding.concern.spam': 'Spam telefoniczny, SMS-owy i poczta śmieciowa',
  'onboarding.step3.title': 'Jak daleko chcesz się posunąć?',
  'onboarding.step3.hint': 'To cel, nie pułap — możesz sięgać wyżej w każdej chwili.',
  'onboarding.adversaryLead': 'Na podstawie Twoich obaw, Twoim głównym przeciwnikiem jest {adversary}.',
  'onboarding.rationale':
    'Twoje główne obawy — {adversary} — wskazują na {tier}. Dopasuj wysiłek do tego, przed kim naprawdę się ukrywasz; wychodzenie dalej niż Twój model zagrożeń kosztuje wygodę bez realnych korzyści.',
  'onboarding.useRecommended': 'Użyj zalecanego: T{tier} · {name}',
  'onboarding.build': 'Zbuduj mój plan →',
  'onboarding.restore': 'Wracasz? Przywróć kopię zapasową',
  'onboarding.restoreCta': 'Wybierz plik .vanish',
  'onboarding.restorePass': 'Hasło kopii zapasowej',
  'onboarding.restoreErr': 'Błędne hasło lub to nie jest kopia zapasowa Vanish.',

  // Dashboard
  'dashboard.title': 'Twój wynik prywatności',
  'dashboard.actionsDone': '{done} z {total} działań wykonanych · cel',
  'dashboard.encouragement.danger':
    'Jesteś teraz całkowicie odsłonięty — ale pierwsze działania mają największy efekt i zajmują kilka minut. Zacznij od góry.',
  'dashboard.encouragement.warn':
    'Dobry start. Załatwiłeś łatwe luki; następny poziom to prawdziwy dystans od brokerów i Big Tech.',
  'dashboard.encouragement.ok':
    'Jesteś teraz naprawdę trudny do śledzenia. Utrzymuj nawyk ponownych sprawdzeń i co kwartał weryfikuj swój model zagrożeń.',
  'dashboard.openLadder': 'Otwórz drabinę →',
  'dashboard.printPlan': '🖨 Wydrukuj mój plan',
  'dashboard.rechecksDue.one': '↻ {count} sprawdzenie do ponowienia',
  'dashboard.rechecksDue.other': '↻ {count} sprawdzeń do ponowienia',
  'dashboard.streak': '🔥 {count}-dniowa seria',
  'dashboard.doneThisWeek': '{count} wykonanych w tym tygodniu',
  'dashboard.rechecksHeading': '↻ Sprawdzenia do ponowienia',
  'dashboard.rechecksBody': 'Brokerzy danych ponownie dodają Cię po kilku miesiącach. Te rezygnacje należy odświeżyć:',
  'dashboard.overdue': 'zaległe',
  'dashboard.dueNowHeading': '⏰ Do zrobienia teraz',
  'dashboard.dueNowBody': 'Zadania pilne: ponowne rezygnacje u brokerów i terminy odpowiedzi na pisma:',
  'dashboard.dueLetterFallback': 'Wniosek listowny',
  'dashboard.recommendedNext': 'Zalecane następne',
  'dashboard.seeAll': 'Pokaż wszystkie',
  'dashboard.allDone': '🎉 Każde istotne działanie jest wykonane lub pominięte. Zniknąłeś — pamiętaj o ponownych sprawdzeniach.',

  // Plan / The Ladder
  'plan.title': 'Drabina',
  'plan.subtitle': 'Wspinaj się we własnym tempie. Wybieraj działania o największym efekcie z dowolnego poziomu — prywatność jest osobista.',
  'plan.results.one': '{count} wynik dla „{query}"',
  'plan.results.other': '{count} wyników dla „{query}"',
  'plan.allTiers': 'Wszystkie poziomy',
  'plan.allCategories': 'Wszystkie kategorie',
  'plan.hideCompleted': 'Ukryj wykonane',
  'plan.searchPlaceholder': 'Przeszukaj wszystkie działania… (np. „Spokeo", „2FA", „email")',
  'plan.filterByCategory': 'Filtruj według kategorii',
  'plan.searchAria': 'Przeszukaj działania',

  // Brokers
  'brokers.title': 'Lista brokerów danych do usunięcia',
  'brokers.subtitle':
    'To brokerzy umieszczają Twój adres i telefon w wynikach wyszukiwania obcych. Zacznij od szybkich wygranych bez konieczności podawania dokumentów, potem przejdź do agregatorów zasilających wszystkich pozostałych.',
  'brokers.cleared': '{done}/{total} usuniętych.',
  'brokers.dueToRedo.one': '↻ {count} do ponowienia.',
  'brokers.dueToRedo.other': '↻ {count} do ponowienia.',
  'brokers.relistBody':
    'Brokerzy po cichu ponownie dodają Cię po 3–6 miesiącach — dlatego usługi kasują za miesięczny abonament. Vanish po prostu przypomina, kiedy ponowić bezpłatną rezygnację.',
  'brokers.honestLabel': '⚠️ Uczciwie mówiąc:',
  'brokers.honestBody':
    'rezygnacje zmniejszają Twoją ekspozycję, ale nie gwarantują trwałej niewidoczności. Linki się zmieniają, a dane wracają. Traktuj to jako regularny nawyk, nie jednorazową czynność — i nigdy nie płać za „gwarancję usunięcia".',

  // Letters (chrome only — generated letter body/subject stay English)
  'letters.title': 'Generator pism',
  'letters.subtitle':
    'Wygeneruj prawnie sformułowane pismo o usunięcie lub dostęp do danych. Powstaje w całości na Twoim urządzeniu na podstawie danych poniżej — nic nie jest wysyłane za Ciebie. Sam kopiujesz lub wysyłasz je e-mailem.',
  'letters.authorityLabel': 'Twój organ nadzorczy ({flag} {name}):',
  'letters.authorityNote': 'Wymieniony w piśmie — eskaluj tutaj, jeśli zostaniesz zignorowany.',
  'letters.noAuthority': 'Ustaw swój kraj w Ustawieniach, aby w tym piśmie pojawił się właściwy organ nadzorczy.',
  'letters.recipientOrg': 'Organizacja odbiorcy',
  'letters.orgPlaceholder': 'np. Spokeo, Inc.',
  'letters.recipientEmail': 'E-mail odbiorcy (opcjonalnie)',
  'letters.yourDetails': 'Twoje dane — przechowywane tylko na tym urządzeniu, używane do wypełnienia pisma',
  'letters.fullName': 'Imię i nazwisko',
  'letters.namePlaceholder': 'Twoje imię i nazwisko',
  'letters.email': 'E-mail',
  'letters.postalAddress': 'Adres pocztowy',
  'letters.addressPlaceholder': 'Dla brokerów kontaktujących się wyłącznie pocztą',
  'letters.subject': 'Temat:',
  'letters.copy': '⧉ Kopiuj tekst',
  'letters.copied': '✓ Skopiowano',
  'letters.download': '↓ Pobierz .txt',
  'letters.openEmail': '✉️ Otwórz w kliencie e-mail',
  'letters.disclaimerPre': '⚖️ Szablon dla wygody, ',
  'letters.disclaimerStrong': 'nie porada prawna',
  'letters.disclaimerPost': '. Przed wysłaniem sprawdź właściwego adresata i swoje lokalne prawa.',
  'letters.trackThis': '+ Śledź jako wysłane',
  'letters.trackedConfirm': '✓ Śledzone',
  'letters.status.drafted': 'Szkic',
  'letters.status.sent': 'Oczekuje na odpowiedź',
  'letters.status.responded': 'Otrzymano odpowiedź',
  'letters.status.escalated': 'Eskalowane',
  'letters.status.resolved': 'Zakończone',
  'letters.tracked.title': 'Moje pisma',
  'letters.tracked.empty': 'Śledzone pisma pojawią się tutaj wraz z odliczaniem do terminu.',
  'letters.tracked.sentOn': 'Wysłano {date}',
  'letters.tracked.daysLeft': '{days} dni do terminu odpowiedzi',
  'letters.tracked.overdue': 'Przekroczono termin o {days} dni',
  'letters.tracked.responded': 'Oznacz jako odpowiedziane',
  'letters.tracked.resolved': 'Oznacz jako zakończone',
  'letters.tracked.escalate': 'Eskaluj do {authority}',
  'letters.tracked.copyEscalation': '⧉ Kopiuj skargę',
  'letters.tracked.copied': '✓ Skopiowano',
  'letters.tracked.delete': 'Usuń',

  // Panic
  'panic.title': '🆘 Tryb paniki',
  'panic.intro':
    'Jeśli ktoś aktywnie próbuje Cię znaleźć, nękać lub doksować, wykonaj te kroki po kolei. Mają największy efekt w zerwaniu powiązania między Twoim imieniem a lokalizacją — najszybsze pierwsze.',
  'panic.danger': 'Jeśli jesteś w bezpośrednim niebezpieczeństwie, najpierw zadzwoń na numer alarmowy.',
  'panic.resources':
    'Zasoby dla osób pokrzywdzonych: w Polsce pomocą służą Niebieska Linia i lokalne centra pomocy. Wiele krajów ma podobne organizacje. Lokalna organizacja pomocowa może pomóc w złożeniu wniosków o wycofanie danych z rejestrów publicznych.',
  'panic.doNow': 'Zrób to teraz',
  'panic.doneCount': '{done}/{total} wykonanych',

  // Report / Disappearance Plan
  'report.title': 'Twój plan znikania',
  'report.subtitle': 'Lista kontrolna tego, co zostało. Zapisz jako PDF lub wydrukuj.',
  'report.print': '🖨 Drukuj / Zapisz jako PDF',
  'report.costNote':
    'Vanish podnosi koszt Twojego odnalezienia. Żadne zabezpieczenie nie jest absolutne wobec zdeterminowanego i dobrze finansowanego przeciwnika — a najczęstszą przyczyną wpadek nie jest technologia, lecz brak konsekwencji i ego (ten sam nick, jeden błąd). Dopasuj wysiłek do tego, przed kim naprawdę się ukrywasz.',
  'report.docTitle': 'Vanish — Plan znikania',
  'report.meta': 'Wygenerowano {date} · cel {tier} · region {region}',
  'report.privacyScore': 'wynik prywatności',
  'report.tierHeading': 'Poziom {tier} · {name} — {count} do wykonania',
  'report.allDone': 'Nic nie zostało — każde istotne działanie jest wykonane lub pominięte. Pamiętaj o ponownych sprawdzeniach.',
  'report.footer':
    'Stworzono z Vanish — w pełni offline działającym asystentem prywatności. Linki do rezygnacji się zmieniają; weryfikuj przed działaniem. Nie jest to porada prawna.',

  // Settings
  'settings.title': 'Ustawienia',
  'settings.language': 'Język',
  'settings.languageHint': 'Zmienia wszystkie ekrany. Przechowywane tylko na tym urządzeniu.',
  'settings.yourPlan': 'Twój plan',
  'settings.country': 'Kraj',
  'settings.notSet': 'Nie ustawiono',
  'settings.supervisoryAuthority': 'Organ nadzorczy:',
  'settings.region': 'Region: {region}',
  'settings.targetTier': 'Docelowy poziom',
  'settings.codeWordTitle': '🔑 Rodzinne słowo kodowe',
  'settings.codeWordBody':
    'Wspólne słowo, które neutralizuje oszustwa z klonowaniem głosu przez AI: „to ja, przelej pieniądze". Uzgodnij je z bliskimi — przechowywane tylko na tym urządzeniu, nigdzie nie wysyłane.',
  'settings.codeWordPlaceholder': 'np. niebieski pingwin',
  'settings.printCard': '🖨 Wydrukuj kartę do portfela',
  'settings.codeWordRule':
    'Zasada: każda pilna prośba o pieniądze lub poufna sprawa musi zawierać to słowo, w przeciwnym razie traktuj ją jako fałszywą. Nigdy nie wysyłaj tego słowa SMS-em ani e-mailem.',
  'settings.cardDocTitle': 'Vanish — słowo kodowe',
  'settings.cardLabel': 'Rodzinne słowo kodowe',
  'settings.cardNote':
    'Każda pilna prośba o pieniądze lub poufna sprawa musi zawierać to słowo, w przeciwnym razie traktuj ją jako fałszywą. Nie wysyłaj słowa SMS-em ani e-mailem.',
  'settings.backupTitle': 'Kopia zapasowa i transfer',
  'settings.backupBody':
    'Brak konta oznacza brak synchronizacji w chmurze — celowo. Wyeksportuj zaszyfrowany przez Ciebie plik JSON, aby przenieść swój plan na inne urządzenie. Plik zawiera Twoje postępy i dane wprowadzone do pism.',
  'settings.export': '↓ Eksportuj plan',
  'settings.import': '↑ Importuj plan',
  'settings.importOk': '✓ Plan zaimportowany.',
  'settings.restorePreviewTitle': 'Podejrzyj tę kopię przed przywróceniem',
  'settings.restorePreviewWarn': 'Przywrócenie zastąpi wszystko, co jest teraz na tym urządzeniu.',
  'settings.restoreNow': 'Teraz',
  'settings.restoreBackup': 'Kopia',
  'settings.restoreActions': 'Ukończone działania',
  'settings.restoreLetters': 'Śledzone pisma',
  'settings.restoreLang': 'Język',
  'settings.restoreProfile': 'Profil',
  'settings.restoreApply': 'Zastąp moje dane',
  'settings.restoreNoProfile': 'Nie ustawiono',
  'settings.importErr': '✗ Nie można odczytać tego pliku.',
  'settings.encBackupTitle': 'Szyfrowana kopia zapasowa',
  'settings.encBackupBody': 'Wyczyszczenie danych przeglądarki usuwa stąd wszystko — i tak ma być. Jedyną kopią, która przetrwa, jest plik, który zachowasz. Ta kopia jest zaszyfrowana hasłem, więc sam plik nie jest wyciekiem prywatności. Przechowaj hasło w bezpiecznym miejscu; nie możemy go odzyskać.',
  'settings.exportEncrypted': '↓ Zapisz szyfrowaną kopię (.vanish)',
  'settings.importEncrypted': '↥ Przywróć szyfrowaną kopię',
  'settings.passphrase': 'Hasło kopii zapasowej',
  'settings.passphrasePlaceholder': 'Hasło, które znasz tylko Ty',
  'settings.passphraseRequired': 'Najpierw wpisz hasło.',
  'settings.backupSaved': '✓ Kopia zapisana',
  'settings.backupErr': 'Tworzenie kopii nie powiodło się.',
  'settings.wipeTitle': 'Wyczyść wszystko',
  'settings.wipeBody':
    'Usuń wszystkie postępy i dane osobowe z tego urządzenia. Tego nie można cofnąć. (Na żadnym serwerze nic nie ma — i nigdy nie było.)',
  'settings.wipeBtn': 'Usuń wszystkie dane lokalne',
  'settings.wipeConfirm': 'Na pewno? To usuwa wszystko.',
  'settings.wipeYes': 'Tak, usuń',
  'settings.dataTitle': 'Jak Vanish obchodzi się z Twoimi danymi',
  'settings.dataBullet1': 'Wszystko jest przechowywane w lokalnym magazynie tej przeglądarki. Nic nigdy nie jest przesyłane.',
  'settings.dataBullet2':
    'Polityka Content-Security-Policy strony blokuje wszelkie żądania do sieci zewnętrznych — możesz to zweryfikować w narzędziach deweloperskich przeglądarki.',
  'settings.dataBullet3': 'Brak analityki, ciasteczek, konta i telemetrii — sprawdź sam w narzędziach deweloperskich przeglądarki.',
  'settings.dataBullet4':
    'Linki do stron rezygnacji otwierają się w nowej karcie — to jedyne „połączenia sieciowe" i każde z nich inicjujesz sam.',

  // Sources
  'settings.sourcesTitle': 'Źródła',
  'settings.sourcesIntro':
    'Wskazówki Vanish opierają się na cenionych, niezależnych źródłach o prywatności — nie na naszej opinii. Zgłęb temat u źródła:',

  // Backup nudge
  'nudge.backup': 'Twoje postępy istnieją tylko w tej przeglądarce. Zrób kopię zapasową, aby wyczyszczenie danych ich nie usunęło.',
  'nudge.backupCta': 'Zrób kopię teraz',
  'nudge.dismiss': 'Później',

  // Decoy Kit
  'decoy.title': '⬡ Zestaw wabika',
  'decoy.subtitle':
    'Zatruj, nie usuwaj. Brokerzy i platformy ponownie dodają i odbudowują dane, więc dodawanie banalnego szumu do własnych kont niskiej stawki jest skuteczniejsze niż ciągłe gonić za usunięciami. Ten zestaw działa w całości na Twoim urządzeniu.',
  'decoy.responsibly': 'Używaj odpowiedzialnie',
  'decoy.do': 'Rób',
  'decoy.never': 'Nigdy',
  'decoy.rulesDo': [
    'Używaj wyłącznie na kontach, które są TWOJE.',
    'Stosuj na mało ważnych profilach jednorazowych — nigdy tam, gdzie w grę wchodzą pieniądze lub tożsamość.',
    'Celuj w banalność i ogólność — szum, nie przekonująca fałszywa osoba.',
  ],
  'decoy.rulesDont': [
    'Nigdy nie podszywaj się pod prawdziwą, konkretną osobę.',
    'Nigdy nie pisz fałszywych opinii ani recenzji.',
    'Nigdy nie rejestruj kogoś innego ani nie używaj cudzych danych.',
    'Nigdy nie używaj tego do ukrywania się przed wierzycielem, sądem ani organami ścigania.',
  ],
  'decoy.nameVariants': 'Warianty imienia',
  'decoy.noVariants': 'Brak wariantów dla jednowyrazowego imienia — dodaj nazwisko w Ustawieniach, aby wygenerować więcej.',
  'decoy.addNamePre': 'Dodaj imię w ',
  'decoy.addNameLink': 'Ustawieniach',
  'decoy.addNamePost': ', aby wygenerować alternatywne pisownie do rozsiania po jednorazowych profilach.',
  'decoy.fillerBio': 'Przykładowe bio',
  'decoy.regenerate': '↻ Wygeneruj nowe',
  'decoy.copyBio': '⧉ Kopiuj bio',
  'decoy.copied': '✓ Skopiowano',
  'decoy.footer':
    'Celowo generyczne — chodzi o statystyczny szum, nie o przekonującą fałszywą osobę. Wklej do profili, które należą do Ciebie i są mało znaczące.',
  'decoy.interests': [
    'rośliny doniczkowe', 'jazda na rowerze', 'pieczenie chleba na zakwasie', 'obserwowanie ptaków', 'gry planszowe',
    'piesze wycieczki', 'fotografia analogowa', 'jazz', 'garncarstwo', 'krzyżówki',
    'ogrodnictwo', 'bieganie', 'gotowanie', 'astronomia', 'pływanie w zimnej wodzie',
    'szachy', 'robótki na drutach', 'wycieczki samochodem', 'kawa', 'muzyka na żywo',
  ],
  'decoy.bioTemplate': 'Tu głównie dla {list}. Milej bez kłótni. Zdania własne.',
  'decoy.bioAnd': 'i',

  // Action card
  'actionCard.markDone': 'Oznacz „{title}" jako wykonane',
  'actionCard.markNotDone': 'Oznacz „{title}" jako niewykonane',
  'actionCard.open': 'Otwórz',
  'actionCard.recheckEvery': '↻ ponowne sprawdzenie co {days} dni',
  'actionCard.recheckTitle': 'Brokerzy ponownie Cię dodają; powtarzaj to regularnie',
  'actionCard.searchCurrent': '🔎 Wyszukaj aktualną stronę',
  'actionCard.linkDead': 'link nie działa?',
  'actionCard.linkDeadTitle': 'Adresy URL rezygnacji często się zmieniają',
  'actionCard.generateLetter': '✍️ Wygeneruj pismo',
  'actionCard.openTool': 'Otwórz narzędzie',
  'actionCard.howTo': 'Jak to zrobić',
  'actionCard.hideSteps': 'Ukryj kroki',
  'actionCard.notRelevant': 'Nieistotne',
  'actionCard.restore': 'Przywróć',
  'actionCard.verified': 'Zweryfikowano {date}',
  'actionCard.verifiedTitle': 'Kiedy ostatnio sprawdzono to działanie i jego link. Zgłoś nieaktywny link, jeśli adres się zmienił.',

  // EFF SSD: scenario playlists
  'nav.scenarios': 'Scenariusze',
  'scenarios.title': 'Zacznij od swojej sytuacji',
  'scenarios.lead':
    'Ścieżki dostosowane do konkretnych sytuacji. Każda to starannie dobrana kolejność działań, które już masz — zacznij od góry.',
  'scenarios.notFound': 'Ten scenariusz nie istnieje.',
  'scenario.survivor.title': 'Ofiara stalkingu lub przemocy',
  'scenario.survivor.intro':
    'Oddzielenie lokalizacji i danych kontaktowych od swojego imienia oraz wykluczenie ukrytych urządzeń śledzących. Jeśli jesteś w bezpośrednim niebezpieczeństwie, najpierw skontaktuj się z lokalnymi służbami pomocowymi.',
  'scenario.job-seeker.title': 'Porządki przed szukaniem pracy',
  'scenario.job-seeker.intro':
    'Co rekruter lub menedżer ds. rekrutacji znajdzie, szukając Twojego imienia — i jak to posprzątać, zanim spojrzą.',
  'scenario.activist.title': 'Aktywista / udział w proteście',
  'scenario.activist.intro':
    'Zabezpieczenie telefonu i komunikacji przed organizowaniem akcji lub demonstracją i w jej trakcie.',
  'scenario.journalist.title': 'Dziennikarz chroniący źródła',
  'scenario.journalist.intro':
    'Poufna komunikacja i utrzymywanie rozdzielności tożsamości zawodowej i prywatnej.',
  'scenario.breach.title': 'Po wycieku danych',
  'scenario.breach.intro':
    'Znalazłeś się w wycieku (lub podejrzewasz to). Ogranicz szkody i zamknij drzwi za sobą.',

  // EFF SSD: learn primers
  'nav.learn': 'Wiedza',
  'learn.title': 'Zrozum, dlaczego to ważne',
  'learn.lead':
    'Krótkie, zrozumiałe wyjaśnienia stojące za poszczególnymi działaniami. Aby przeczytać pełny przewodnik, każde z nich prowadzi do EFF Surveillance Self-Defense.',
  'learn.related': 'Powiązane działania',
  'learn.readMore': 'Pełny przewodnik',
  'learn.notFound': 'Ten temat nie istnieje.',
  'learn.threat-model.title': 'Czym jest model zagrożeń?',
  'learn.threat-model.body': [
    'Model zagrożeń to pięć szczerych pytań: co chcesz chronić, przed kim to chronić, jak prawdopodobne jest, że będziesz potrzebować tej ochrony, jakie będą konsekwencje, jeśli się nie uda, oraz ile wysiłku jesteś gotów włożyć w zapobieganie?',
    'Nie ma jednego właściwego poziomu prywatności. Dostosowanie wysiłku do ludzi, których naprawdę się boisz, to cała sztuka — wychodzenie dalej, niż wymaga Twoja sytuacja, kosztuje wygodę bez realnego przyrostu bezpieczeństwa.',
  ],
  'learn.metadata.title': 'Co ujawniają metadane',
  'learn.metadata.body': [
    'Metadane to dane o Twoich danych: kiedy zdjęcie zostało zrobione, jakim telefonem i często dokładne współrzędne GPS. Metadane wiadomości — kto, kiedy, jak często — mogą być tak samo wymowne jak same słowa.',
    'Nie zawsze możesz kontrolować, jakie metadane serwisy przechowują, ale możesz przestać je rozdawać: usuń dane lokalizacji i urządzenia ze zdjęć przed ich publikacją.',
  ],
  'learn.encryption.title': 'Czym jest szyfrowanie end-to-end',
  'learn.encryption.body': [
    'Szyfrowanie end-to-end (E2EE) oznacza, że tylko Ty i osoba, z którą rozmawiasz, możecie odczytać wiadomości — nie twórca aplikacji, sieć ani nikt, kto przechwytuje je w drodze.',
    'To różnica między pocztówką a zapieczętowaną kopertą. Używaj narzędzi E2EE do wszystkiego, co wrażliwe, i pamiętaj, że chroni treść, ale nie zawsze metadane wokół niej.',
  ],
  'learn.phishing.title': 'Jak działa phishing',
  'learn.phishing.body': [
    'Phishing nakłania Cię do oddania hasła lub kodu — zazwyczaj pilną wiadomością i linkiem do fałszywej strony logowania. Tak zaczyna się większość przejęć kont — bez żadnego hakowania.',
    'Obroną są nawyki, nie narzędzia: nigdy nie loguj się przez link w wiadomości, weryfikuj nadawcę i polegaj na menedżerze haseł (który nie automatycznie wypełni złej domeny) oraz kluczach sprzętowych (które są odporne na phishing).',
  ],
  'learn.data-brokers.title': 'Kim są brokerzy danych',
  'learn.data-brokers.body': [
    'Brokerzy danych kupują, scrapują i odsprzedają Twoje profile — imię, adres, krewni, numery telefonów — reklamodawcom, rekruterom i każdemu, kto zapłaci. Strony do wyszukiwania osób to publiczna witryna sklepowa tej branży.',
    'Rezygnacje działają, ale nie są trwałe: brokerzy ponownie pozyskują i wystawiają Cię na nowo ze świeżych rejestrów publicznych, więc usuwanie to nawyk z licznikiem, a nie jednorazowa czynność.',
  ],
  'learn.vpn.title': 'Co VPN robi, a czego nie robi',
  'learn.vpn.body': [
    'VPN ukrywa Twoje przeglądanie przed siecią i dostawcą internetu oraz Twój adres IP przed odwiedzanymi stronami — przydatne w niezaufanej sieci Wi-Fi lub żeby uniknąć profilowania przez jednego dostawcę internetu.',
    'Nie czyni Cię anonimowym: teraz ufasz dostawcy VPN zamiast ISP, a VPN nie powstrzymuje stron przed śledzeniem Cię po zalogowaniu. Przy silnej anonimowości Tor jest lepszym narzędziem.',
  ],
  'learn.key-verification.title': 'Dlaczego warto weryfikować klucze',
  'learn.key-verification.body': [
    'Szyfrowanie zakłada, że rozmawiasz z prawdziwą osobą. Atak man-in-the-middle polega na siedzeniu między Wami i podmienianiu kluczy — nadal widziałbyś zamkniętą kłódkę.',
    'Weryfikacja numeru bezpieczeństwa (osobiście przez kod QR lub przez oddzielny zaufany kanał) potwierdza, że nie ma żadnego pośrednika. Zrób to raz dla najważniejszych kontaktów.',
  ],
} satisfies Dict
