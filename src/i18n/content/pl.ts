import type { ContentOverlay } from './types'

export const pl: ContentOverlay = {
  // ─────────────── Tier 1 — Porządki ───────────────
  'google-yourself': {
    title: 'Wyszukaj siebie w Google',
    summary:
      'Wpisz swoje imię i nazwisko (+ miasto, + telefon) w prywatnym oknie i zrób zrzuty ekranu najlepszych wyników. To Twój punkt wyjścia — możesz mierzyć usuwanie tylko względem tego, co widzisz.',
    steps: [
      'Otwórz prywatne/anonimowe okno, żeby spersonalizowane wyniki Cię nie myliły.',
      'Wyszukaj: swoje imię i nazwisko, następnie „imię nazwisko + miasto", potem numer telefonu, a na koniec adres e-mail.',
      'Zrób zrzuty ekranu pierwszych dwóch stron każdego wyszukiwania. Zanotuj każdą stronę, która ujawnia adres, telefon, krewnych lub zdjęcia.',
      'Te strony stają się Twoją listą celów w sekcji Brokerzy danych.',
    ],
    urlLabel: 'Wyszukaj w Google',
  },
  'hibp': {
    title: 'Sprawdź Have I Been Pwned',
    summary:
      'Wpisz swój adres e-mail, aby zobaczyć, które wycieki go ujawniły i które hasła musisz zmienić. Kanoniczna, bezpłatna baza danych wycieków.',
    urlLabel: 'Sprawdź HIBP',
  },
  'mozilla-monitor': {
    title: 'Skonfiguruj Mozilla Monitor',
    summary: 'Bezpłatne powiadomienia o wyciekach dla nawet 20 adresów e-mail, korzystające z bazy HIBP.',
    urlLabel: 'Otwórz Monitor',
  },
  'password-manager': {
    title: 'Zainstaluj menedżera haseł',
    summary:
      'Sięgnij po Bitwarden lub KeePass. To fundament dla unikalnych haseł i do odnajdowania każdego konta, jakie kiedykolwiek założyłeś.',
    urlLabel: 'Pobierz Bitwarden',
  },
  'change-breached-passwords': {
    title: 'Zmień hasła wielokrotnie używane i z wycieków',
    summary:
      'Dla każdego konta wskazanego przez Have I Been Pwned — i wszędzie, gdzie używałeś tego samego hasła — ustaw nowe, unikalne hasło wygenerowane przez menedżera.',
    steps: [
      'Zacznij od kluczowych dostępów: e-mail, potem bankowość, potem menedżer haseł.',
      'Nigdy nie używaj tego samego hasła na dwóch stronach. Niech menedżer je generuje.',
      'Jeśli konto było w wycieku, zakładaj, że stare hasło jest już publiczne.',
    ],
  },
  'delete-dormant-accounts': {
    title: 'Usuń nieaktywne konta',
    summary:
      'Każde stare konto to potencjalny wyciek i źródło danych dla brokerów. Skorzystaj z katalogu bezpośrednich linków do usunięcia kont w stylu JustDeleteMe, posortowanego według trudności.',
    steps: [
      'Twój menedżer haseł i wyszukiwanie w starej skrzynce („witamy", „zweryfikuj swoje konto") ujawnią zapomniane konta.',
      'Użyj oceny trudności: zielone = jedno kliknięcie, czerwone = musisz napisać do obsługi.',
      'Usuń, nie tylko dezaktywuj — zdezaktywowane konta wciąż przechowują Twoje dane.',
    ],
    urlLabel: 'Otwórz JustDeleteMe',
  },
  'optout-truepeoplesearch': {
    title: 'Zrezygnuj z TruePeopleSearch',
    summary: 'Prześlij zgłoszenie o usunięcie — bez e-maila ani dokumentu, prawie natychmiastowe. Jedna z najszybszych widocznych wygranych.',
    urlLabel: 'Usuń mnie',
  },
  'optout-fastpeoplesearch': {
    title: 'Zrezygnuj z FastPeopleSearch',
    summary: 'Szybkie usunięcie formularzem, bez dokumentów.',
    urlLabel: 'Usuń mnie',
  },
  'optout-usphonebook': {
    title: 'Zrezygnuj z USPhoneBook',
    summary: 'Szybkie usunięcie, bez dokumentów.',
    urlLabel: 'Usuń mnie',
  },
  'google-results-about-you': {
    title: 'Narzędzie Google „Wyniki o Tobie"',
    summary:
      'Skorzystaj z własnego narzędzia Google, aby poprosić o usunięcie stron ujawniających Twój telefon, adres domowy lub e-mail z wyników wyszukiwania.',
    urlLabel: 'Otwórz narzędzie',
  },
  'google-ad-personalization': {
    title: 'Wyłącz personalizację reklam Google',
    summary: 'Wyłącz reklamy spersonalizowane powiązane z Twoim profilem konta Google.',
    urlLabel: 'Ustawienia reklam',
  },
  'reset-advertising-id': {
    title: 'Zresetuj identyfikator reklamowy telefonu',
    summary: 'Odetnij trwały identyfikator, którego reklamodawcy używają do śledzenia Cię między aplikacjami.',
    steps: [
      'iOS: Ustawienia → Prywatność i bezpieczeństwo → Śledzenie → wyłącz „Pozwalaj aplikacjom żądać śledzenia".',
      'iOS: Ustawienia → Prywatność i bezpieczeństwo → Reklamy Apple → wyłącz Spersonalizowane reklamy.',
      'Android: Ustawienia → Prywatność → Reklamy → Usuń identyfikator reklamowy (lub zresetuj go).',
    ],
  },
  'prune-social-profiles': {
    title: 'Ogranicz publiczne profile społecznościowe',
    summary:
      'Ustaw stare posty i profile jako prywatne; usuń datę urodzenia, telefon, adres i miejscowość z wszystkiego, co jest publiczne.',
    steps: [
      'Facebook: Ustawienia → Prywatność → „Ogranicz wcześniejsze posty"; przejrzyj sekcję O mnie pole po polu.',
      'Instagram/X: przejdź na konto prywatne, jeśli możesz; usuń lokalizację, dane kontaktowe i datę urodzenia z bio.',
      'LinkedIn: ukryj połączenia i dane kontaktowe przed osobami spoza sieci.',
    ],
  },
  'bulk-delete-posts': {
    title: 'Masowo usuń stare posty',
    summary: 'Wyczyść historyczne posty za pomocą natywnych narzędzi do pobierania i usuwania danych.',
    steps: [
      'X: Ustawienia → najpierw „Pobierz archiwum", potem użyj masowego usuwania.',
      'Facebook: Dziennik aktywności → filtruj według roku → masowo usuń lub zarchiwizuj.',
      'Zawsze eksportuj archiwum dla siebie przed masowym usuwaniem.',
    ],
  },
  'unsubscribe-marketing': {
    title: 'Wypisz się z list marketingowych',
    summary:
      'Masowo wypisz się z newsletterów. Zmniejsza bieżący ślad danych i zawęża zasięg kolejnego wycieku.',
    steps: [
      'Przeszukaj skrzynkę pod kątem słowa „wypisz" i pracuj od góry.',
      'Preferuj link wypisania w e-mailu zamiast oznaczania jako spam (czystsze usunięcie).',
      'Dla nadawców, którzy ignorują Twoje prośby, to kandydat na pismo RODO/CCPA później.',
    ],
  },
  'unlist-caller-id': {
    title: 'Usuń swój numer z aplikacji do identyfikacji rozmówców',
    summary: 'Usuń swój numer z crowdsourcingowych baz identyfikatorów rozmówców, takich jak Truecaller i Hiya.',
    urlLabel: 'Usunięcie z Truecaller',
  },
  'revoke-third-party-apps': {
    title: 'Sprawdź i cofnij dostęp aplikacji zewnętrznych',
    summary:
      'Przejrzyj aplikacje połączone z Twoim kontem Google/Apple/Facebook/Microsoft i cofnij dostęp tym, których już nie używasz.',
    urlLabel: 'Połączenia Google',
  },
  'enable-2fa': {
    title: 'Włącz dwuskładnikowe uwierzytelnianie na kluczowych kontach',
    summary:
      'Włącz aplikacyjne (nie SMS-owe) uwierzytelnianie dwuskładnikowe dla e-maila, banku i menedżera haseł. Kody SMS można przechwycić przez atak SIM-swap.',
    steps: [
      'Użyj aplikacji authenticator (Aegis, Ente Auth lub swojego menedżera haseł).',
      'Priorytety: e-mail → menedżer haseł → bank → media społecznościowe.',
      'Zapisz kody zapasowe w menedżerze haseł, nie na papierze przy biurku.',
    ],
  },
  'wipe-old-devices': {
    title: 'Wymaż dane przed pozbyciem się urządzeń',
    summary: 'Przed sprzedażą lub recyklingiem telefonów, laptopów i dysków przywróć ustawienia fabryczne i zaszyfruj.',
    steps: [
      'Najpierw upewnij się, że szyfrowanie pełnego dysku jest włączone (sprawia, że wymazanie jest praktycznie nieodwracalne).',
      'Wyloguj się ze wszystkich kont (zwłaszcza blokady Find My / konta Google) przed resetem.',
      'Następnie przywróć ustawienia fabryczne. Dla dysków talerzowych wieloprzebiegowe wymazanie; dyski SSD — wbudowane bezpieczne kasowanie.',
    ],
  },
  'optout-smartbackgroundchecks': {
    title: 'Zrezygnuj z SmartBackgroundChecks',
    summary: 'Szybkie usunięcie formularzem, bez dokumentów — kolejna strona do wyszukiwania osób, pojawiająca się w wynikach wyszukiwania.',
    urlLabel: 'Usuń mnie',
  },
  'ad-industry-optout': {
    title: 'Zrezygnuj z behawioralnych reklam (DAA/NAI)',
    summary:
      'Skorzystaj z samoregulacyjnych narzędzi branży reklamowej, aby wypisać tę przeglądarkę z targetowania behawioralnego jednym podejściem. Oparte na ciasteczkach — powtórz po wyczyszczeniu ciasteczek lub w nowej przeglądarce.',
    urlLabel: 'DAA WebChoices',
  },

  // ─────────────── Tier 2 — Redukcja ───────────────
  'optout-spokeo': {
    title: 'Zrezygnuj ze Spokeo',
    summary: 'Wklej adres URL swojego profilu i potwierdź e-mailem.',
    urlLabel: 'Zrezygnuj',
  },
  'optout-whitepages': {
    title: 'Zrezygnuj z Whitepages',
    summary: 'Prześlij wniosek o wyciszenie; często wymaga weryfikacji telefonicznej. Strona wysoko pozycjonowana w wynikach wyszukiwania imion.',
    urlLabel: 'Wniosek o wyciszenie',
  },
  'optout-peopleconnect': {
    title: 'Zrezygnuj z sieci PeopleConnect',
    summary:
      'Jedno wyciszenie obejmuje Intelius, BeenVerified, Instant Checkmate, TruthFinder i USSearch. Najbardziej opłacalne działanie dotyczące brokerów.',
    urlLabel: 'Wycisz wszystkie 5',
  },
  'optout-radaris': {
    title: 'Zrezygnuj z Radaris',
    summary: 'Przejmij i usuń swój profil; wymaga potwierdzenia e-mailem.',
    urlLabel: 'Zarządzaj prywatnością',
  },
  'optout-mylife': {
    title: 'Zrezygnuj z MyLife',
    summary: 'Prześlij wniosek o prywatność/CCPA. MyLife prowadzi trwałe profile z „oceną reputacji" i jest wyjątkowo oporny na usuwanie.',
    urlLabel: 'Wniosek CCPA',
  },
  'optout-nuwber': {
    title: 'Zrezygnuj z Nuwber',
    summary: 'Usuń przez link plus potwierdzenie e-mailem.',
    urlLabel: 'Usuń mnie',
  },
  'optout-thatsthem': {
    title: "Zrezygnuj z That's Them",
    summary: 'Proste usunięcie formularzem.',
    urlLabel: 'Zrezygnuj',
  },
  'optout-peoplefinders': {
    title: 'Zrezygnuj z PeopleFinders',
    summary: 'Formularz i potwierdzenie e-mailem.',
    urlLabel: 'Zrezygnuj',
  },
  'optout-familytreenow': {
    title: 'Zrezygnuj z FamilyTreeNow',
    summary: 'Usuwa zaskakująco szczegółowe dane o adresach i krewnych.',
    urlLabel: 'Zrezygnuj',
  },
  'optout-acxiom': {
    title: 'Zrezygnuj z Acxiom',
    summary: 'Jeden z największych agregatorów danych marketingowych — odcięcie go zmniejsza zasilanie wielu mniejszych brokerów.',
    urlLabel: 'Zrezygnuj',
  },
  'optout-oracle': {
    title: 'Zrezygnuj z Oracle Data Cloud',
    summary: 'Prześlij rezygnację z usług data cloud. Oracle zamyka swoją działalność reklamową — zweryfikuj aktualny proces.',
    urlLabel: 'Prywatność / rezygnacja',
  },
  'optout-epsilon': {
    title: 'Zrezygnuj z Epsilon',
    summary: 'Rezygnacja u agregatora danych marketingowych.',
    urlLabel: 'Zrezygnuj',
  },
  'optout-experian-marketing': {
    title: 'Zrezygnuj z marketingu Experian',
    summary: 'Rezygnacja z marketingu, oddzielna od Twojego pliku kredytowego.',
    urlLabel: 'Zrezygnuj',
  },
  'private-browser': {
    title: 'Przejdź na prywatną przeglądarkę',
    summary: 'Zainstaluj Firefox lub Brave z domyślnie włączoną ochroną przed śledzeniem.',
    urlLabel: 'Pobierz Firefox',
  },
  'tracker-blocker': {
    title: 'Dodaj blokadę treści i śledzenia',
    summary: 'Zainstaluj uBlock Origin, aby blokować reklamy i śledzenie w całej sieci.',
    urlLabel: 'Pobierz uBlock Origin',
  },
  'private-search': {
    title: 'Zmień domyślną wyszukiwarkę',
    summary: 'Przejdź na wyszukiwarkę nieśledząca, taką jak DuckDuckGo, Startpage lub Brave Search.',
    urlLabel: 'Wypróbuj DuckDuckGo',
  },
  'email-aliases': {
    title: 'Zacznij używać aliasów e-mail',
    summary:
      'Użyj unikalnego aliasu dla każdej usługi, żeby przyszły wyciek nie powiązał Twoich kont — i możesz wyłączyć każdy alias, który zacznie dostawać spam.',
    urlLabel: 'Pobierz SimpleLogin',
  },
  'optout-prescreen': {
    title: 'Zrezygnuj z preselekcyjnych ofert kredytowych w USA',
    summary: 'Zatrzymaj preselekcyjne oferty kredytowe i ubezpieczeniowe — to hurtowa sprzedaż Twoich danych kredytowych.',
    urlLabel: 'Zrezygnuj (5 lat / na stałe)',
  },
  'freeze-credit': {
    title: 'Zamroź swoją zdolność kredytową',
    summary: 'Złóż blokadę we wszystkich trzech biurach, aby uniemożliwić oszustwa przy otwieraniu nowych kont. Bezpłatne w USA.',
    urlLabel: 'Blokada Equifax',
    steps: [
      'Zamroź wszystkie trzy: Equifax, Experian i TransUnion (każde oddzielnie).',
      'Blokada uniemożliwia otwarcie nowego kredytu na Twoje imię; tymczasowo „rozmrażasz", gdy potrzebujesz kredytu.',
      'Nie wpływa na Twoją ocenę i jest bezpłatna z mocy prawa.',
    ],
  },
  'disable-location-history': {
    title: 'Wyłącz historię lokalizacji telefonu',
    summary: 'Wyłącz Historię lokalizacji Google / Znaczące miejsca iOS i wyczyść zapisaną historię.',
    urlLabel: 'Kontrole aktywności',
  },
  'schedule-broker-recheck': {
    title: 'Zaplanuj ponowne sprawdzenie brokerów',
    summary:
      'Brokerzy ponownie dodają Cię w ciągu 3–6 miesięcy. Vanish śledzi, kiedy każda rezygnacja wymaga ponowienia — to potwierdza, że zobowiązujesz się do regularnego cyklu.',
  },
  'broker-letter': {
    title: 'Pismo: usuń mnie (brak formularza samoobsługowego)',
    summary:
      'Dla brokerów i firm bez formularza samoobsługowego wygeneruj pismo o usunięcie danych zgodne z RODO/CCPA i wyślij je samodzielnie.',
  },
  'optout-checkpeople': {
    title: 'Zrezygnuj z CheckPeople',
    summary: 'Usunięcie formularzem dla kolejnego agregatora danych do wyszukiwania osób.',
    urlLabel: 'Zrezygnuj',
  },
  'optout-dmachoice': {
    title: 'Zrezygnuj z marketingu pocztowego (DMAchoice)',
    summary:
      'Zarejestruj się w usłudze preferencji pocztowych Data & Marketing Association, aby ograniczyć niechcianą pocztę. Niewielka jednorazowa opłata obejmuje rejestrację na wiele lat.',
    urlLabel: 'DMAchoice',
  },
  'youronlinechoices': {
    title: 'Zrezygnuj z reklam behawioralnych w UE',
    summary:
      'Skorzystaj z narzędzia EDAA YourOnlineChoices, aby wypisać tę przeglądarkę z targetowania behawioralnego uczestniczących sieci. Oparte na ciasteczkach — powtórz po ich wyczyszczeniu.',
    urlLabel: 'Your Online Choices',
  },
  'encrypted-dns-devices': {
    title: 'Ustaw szyfrowane DNS na każdym urządzeniu',
    summary:
      'Skieruj telefon i laptop na szyfrowany, przyjazny prywatności resolver, żeby dostawca internetu nie rejestrował każdej odwiedzanej strony.',
    steps: [
      'Wybierz resolver bez logowania: Quad9 (9.9.9.9) lub NextDNS.',
      'iOS/macOS: zainstaluj profil konfiguracyjny dostawcy lub ustaw DNS-over-HTTPS w Ustawieniach.',
      'Android 9+: Ustawienia → Sieć → Prywatne DNS → wpisz nazwę hosta dostawcy.',
      'Uzupełnia DNS na poziomie routera — urządzenia zachowują go poza siecią domową.',
    ],
    urlLabel: 'Quad9',
  },
  'harden-messaging-privacy': {
    title: 'Wzmocnij ustawienia prywatności w komunikatorach',
    summary: 'Włącz kontrole prywatności wbudowane w używane aplikacje — zanim cokolwiek zmienisz.',
    steps: [
      'Włącz domyślnie znikające wiadomości tam, gdzie to możliwe (Signal, WhatsApp, Telegram).',
      'Ukryj „ostatnio widziany", potwierdzenia przeczytania i zdjęcie profilowe przed osobami spoza kontaktów.',
      'Zablokuj aplikację kodem PIN/biometrią i wyłącz podgląd wiadomości na ekranie blokady.',
      'Sprawdź ustawienia zaproszeń do grup, żeby obcy nie mogli Cię dodawać.',
    ],
  },
  'remove-outdated-google': {
    title: 'Usuń nieaktualne strony z Google',
    summary:
      'Gdy strona o Tobie została zmieniona lub usunięta, ale w wynikach wyszukiwania nadal pojawia się stara pamięć podręczna, poproś Google o odświeżenie lub usunięcie.',
    urlLabel: 'Usuń nieaktualne treści',
  },
  'optout-es-listarobinson': {
    title: 'Zarejestruj się na Liście Robinson (Hiszpania)',
    summary:
      'Oficjalna hiszpańska lista wykluczeń reklamowych (prowadzona przez Adigital). Po rejestracji firmy członkowskie nie mogą kontaktować się z Tobą telefonicznie, SMS-em, pocztą ani e-mailem w celach marketingowych.',
    urlLabel: 'Lista Robinson',
  },
  'optout-it-rpo': {
    title: 'Zarejestruj się w Registro Pubblico delle Opposizioni (Włochy)',
    summary:
      'Włoski publiczny rejestr sprzeciwów. Zarejestruj swój numer telefonu (i adres pocztowy), aby zablokować operatorów zobowiązanych go sprawdzać przed marketingiem.',
    urlLabel: 'Registro Opposizioni',
  },
  'optout-fr-bloctel': {
    title: 'Zarejestruj się w Bloctel (Francja)',
    summary:
      'Oficjalny francuski rejestr „nie dzwoń". Zarejestrowane numery nie mogą być legalnie wykorzystywane do marketingu telefonicznego przez firmy, z którymi nie masz umowy.',
    urlLabel: 'Bloctel',
  },
  'optout-de-robinsonliste': {
    title: 'Zarejestruj się na Robinsonliste (Niemcy)',
    summary:
      'Centralna niemiecka lista rezygnacji z reklam (prowadzona przez DDV). Ogranicza adresowaną pocztę marketingową, połączenia i e-maile od firm partnerskich.',
    urlLabel: 'Robinsonliste (DDV)',
  },
  'optout-be-donotcallme': {
    title: 'Zarejestruj się na liście Do Not Call Me (Belgia)',
    summary:
      'Oficjalna belgijska lista „nie dzwoń". Po rejestracji Twój numer nie może być używany do marketingu telefonicznego. Rejestracja odbywa się telefonicznie.',
    urlLabel: 'Do Not Call Me',
  },
  'optout-pt-amd': {
    title: 'Dołącz do Listy Sprzeciwów AMD (Portugalia)',
    summary:
      'Portugálska lista sprzeciwów konsumentów. Zarejestruj się, aby zatrzymać połączenia i pocztę marketingową od firm zobowiązanych do jej sprawdzania.',
    urlLabel: 'Lista de Oposição',
  },
  'optout-se-hitta': {
    title: 'Usuń swoją stronę kontaktową z Hitta.se (Szwecja)',
    summary:
      'Szwedzka zasada jawności rejestrów publicznych sprawia, że Twój adres jest łatwy do znalezienia. Ukryj swoją stronę kontaktową na Hitta.se — usunięcie wymaga BankID.',
    urlLabel: 'Usuń mnie',
  },
  'optout-se-ratsit': {
    title: 'Usuń swój wpis z Ratsit (Szwecja)',
    summary: 'Ratsit republishes szwedzkie rejestry publiczne — adres, wiek, finanse. Usuń swój bezpłatny wpis za pomocą BankID.',
    urlLabel: 'Ta bort',
  },
  'optout-se-mrkoll': {
    title: 'Ukryj swoje dane na MrKoll (Szwecja)',
    summary: 'MrKoll republishes szwedzkie rejestry publiczne. Ukryj adres i numer telefonu — wymagane BankID.',
    urlLabel: 'Ändra uppgifter',
  },
  'optout-de-dastelefonbuch': {
    title: 'Usuń swój wpis z DasTelefonbuch / DasÖrtliche (Niemcy)',
    summary: 'Usuń lub ogranicz swój wpis w głównych niemieckich książkach telefonicznych (DasTelefonbuch, DasÖrtliche).',
    urlLabel: 'Zarządzaj wpisem',
  },
  'optout-at-ecg': {
    title: 'Dodaj się do ECG-Liste (Austria)',
    summary:
      'Austriacka lista wykluczeń marketingu elektronicznego (prowadzona przez RTR). Rejestracja adresu wyklucza Cię z niechcianych e-maili i SMS-ów marketingowych.',
    urlLabel: 'ECG-Liste',
  },
  'optout-dk-robinson': {
    title: 'Dołącz do Robinsonlisten (Dania)',
    summary:
      'Oficjalna duńska lista ochrony przed reklamami, prowadzona przez centralny rejestr osób (CPR). Blokuje adresowaną pocztę reklamową i połączenia marketingowe.',
    urlLabel: 'Robinsonlisten',
  },
  'optout-fi-kieltopalvelu': {
    title: 'Zarejestruj zakaz marketingowy (ASML, Finlandia)',
    summary:
      'Fińska lista rezygnacji Robinson, prowadzona przez stowarzyszenie marketingowe ASML. Zarejestruj się, aby zatrzymać telefoniczny i adresowany marketing bezpośredni.',
    urlLabel: 'Kieltopalvelut',
  },
  'optout-hr-nezovi': {
    title: 'Zarejestruj się w NE ZOVI (Chorwacja)',
    summary:
      'Oficjalny chorwacki rejestr „nie dzwoń" (prowadzony przez regulatora HAKOM). Bezpłatne — rejestrujesz się przez swojego operatora telekomunikacyjnego, żeby blokować połączenia marketingowe.',
    urlLabel: 'NE ZOVI',
  },

  // ─────────────── Tier 3 — Blokada ───────────────
  'private-email-provider': {
    title: 'Przenieś się do prywatnego dostawcy poczty',
    summary: 'Przenieś swoją główną skrzynkę do Proton lub Tuta i zacznij przekierowywać oraz migrować swoje konta.',
    urlLabel: 'Proton Mail',
  },
  'signal': {
    title: 'Przejdź na Signal w komunikacji',
    summary: 'Ustaw Signal jako domyślny komunikator i stopniowo rezygnuj z SMS/WhatsApp dla spraw wrażliwych.',
    urlLabel: 'Pobierz Signal',
  },
  'hardware-keys': {
    title: 'Dodaj sprzętowe klucze bezpieczeństwa',
    summary: 'Zarejestruj klucze FIDO2 (np. YubiKey) na e-mailu, banku, menedżerze haseł i kontach chmurowych.',
    steps: [
      'Kup dwa klucze — jeden podstawowy, jeden zapasowy przechowywany w bezpiecznym miejscu.',
      'Zarejestruj oba na każdym krytycznym koncie przed usunięciem słabszych metod 2FA.',
      'Klucze sprzętowe są odporne na phishing; to najsilniejszy drugi składnik uwierzytelniania.',
    ],
  },
  'full-broker-sweep': {
    title: 'Pełne czyszczenie brokerów',
    summary: 'Przejdź całą listę brokerów od początku do końca, zapisując datę każdej rezygnacji, żeby timery ponownych sprawdzeń były dokładne.',
  },
  'e2ee-storage': {
    title: 'Przejdź na szyfrowany magazyn danych (E2EE)',
    summary: 'Zastąp Drive/Dropbox end-to-end szyfrowanym przechowywaniem plików, żeby dostawca nie mógł ich odczytać.',
    urlLabel: 'Proton Drive',
  },
  'degoogle-services': {
    title: 'Odgoogle podstawowe usługi',
    summary: 'Zastąp Maps, Docs i Photos alternatywami szanującymi prywatność.',
    steps: [
      'Maps → Organic Maps / OsmAnd. Docs → CryptPad / OnlyOffice. Photos → Ente / Immich.',
      'Migruj jedną usługę naraz, żeby nie utracić dostępu do niczego ważnego.',
      'Przed usunięciem czegokolwiek wyeksportuj dane z Google Takeout.',
    ],
    urlLabel: 'Alternatywy (Privacy Guides)',
  },
  'masked-phone': {
    title: 'Używaj maskowanego numeru telefonu / VoIP',
    summary: 'Podawaj pomocniczy numer przy rejestracji i zachowaj swój prawdziwy numer w tajemnicy.',
    steps: [
      'Opcje: Google Voice (USA), MySudo lub tania druga karta SIM/eSIM.',
      'Używaj maskowanego numeru przy kartach lojalnościowych, rejestracji i wszystkim mało istotnym.',
      'Prawdziwy numer zachowaj tylko dla zaufanych kontaktów i awaryjnego 2FA.',
    ],
  },
  'masked-cards': {
    title: 'Używaj wirtualnych/maskowanych kart płatniczych',
    summary: 'Jednorazowe lub osobne numery kart na sprzedawcę przełamują połączenie danych płatniczych kupowanych przez brokerów.',
    steps: [
      'Opcje: Privacy.com (USA), karty jednorazowe Revolut lub wirtualne karty Twojego banku.',
      'Utwórz osobną kartę dla każdego sprzedawcy; anuluj tę, która wycieknie lub obciąży za dużo.',
    ],
  },
  'strip-exif': {
    title: 'Usuń metadane zdjęć przed publikacją',
    summary: 'Usuń dane EXIF/GPS ze zdjęć udostępnianych publicznie, żeby zdjęcia nie zdradzały, gdzie mieszkasz lub byłeś.',
    steps: [
      'Wiele platform usuwa EXIF przy przesyłaniu — ale nie wszystkie, i nie przy udostępnianiu oryginalnych plików.',
      'iOS: menu udostępniania → Opcje → wyłącz Lokalizację. Android: użyj aplikacji do usuwania metadanych.',
      'Komputer: ExifTool lub „Usuń właściwości" we właściwościach pliku w systemie Windows.',
    ],
  },
  'harden-router-dns': {
    title: 'Wzmocnij router domowy i DNS',
    summary: 'Zmień domyślne hasło administratora, włącz szyfrowany DNS i wyłącz UPnP/WPS.',
    steps: [
      'Natychmiast zmień domyślne hasło administratora routera.',
      'Ustaw szyfrowany DNS (DoH/DoT) — np. Quad9 (9.9.9.9) lub NextDNS — żeby dostawca internetu nie logował każdego zapytania.',
      'Wyłącz UPnP i WPS; aktualizuj firmware routera.',
    ],
  },
  'segment-iot': {
    title: 'Oddziel urządzenia IoT w sieci',
    summary: 'Umieść urządzenia inteligentnego domu na sieci gościnnej lub VLAN, żeby ograniczyć to, co mogą widzieć i do czego docierać.',
  },
  'anti-fingerprint': {
    title: 'Zablokuj fingerprinting przeglądarki',
    summary: 'Użyj ustawień anti-fingerprint, żeby śledzący nie mogli identyfikować Twojej przeglądarki bez ciasteczek.',
    steps: [
      'Firefox: ustaw privacy.resistFingerprinting lub użyj Mullvad Browser / Tor Browser do wrażliwych sesji.',
      'Unikaj nakładania egzotycznych rozszerzeń — każde czyni Cię bardziej rozpoznawalnym, a nie mniej.',
    ],
    urlLabel: 'Sprawdź swój odcisk palca',
  },
  'retire-old-email': {
    title: 'Wycofaj i usuń stare konto e-mail',
    summary: 'Po migracji zaktualizuj pozostałe usługi, a następnie usuń starą skrzynkę, żeby nie mogła zostać naruszona ani prześwietlona.',
    steps: [
      'Przekierowuj starą skrzynkę do nowej przez okres przejściowy (3–6 miesięcy).',
      'Za każdym razem, gdy coś wpłynie na stary adres, zaktualizuj tę usługę na nowy.',
      'Gdy ruch ustanie, wyeksportuj, a następnie usuń stare konto.',
    ],
  },
  'gdpr-access-letter': {
    title: 'Wyślij wnioski o dostęp do danych (RODO SAR)',
    summary: 'Zmuszaj dużych posiadaczy danych do ujawnienia dokładnie tego, co mają na Twój temat — rekonesans przed wnioskiem o usunięcie.',
  },
  'optout-lexisnexis': {
    title: 'Zrezygnuj z LexisNexis',
    summary: 'Cenny agregator FCRA zasilający sprawdzenia przeszłości; może wymagać dokumentu tożsamości.',
    urlLabel: 'Zrezygnuj',
  },
  'broker-registry': {
    title: 'Zrezygnuj przez rejestry brokerów danych',
    summary: 'Skorzystaj z rejestrów stanowych brokerów (Kalifornia, Vermont), żeby znaleźć i zrezygnować z pominiętych brokerów.',
    urlLabel: 'Rejestr CA',
  },
  'maps-contributions': {
    title: 'Usuń adres z wkładu do Map',
    summary: 'Usuń recenzje, zdjęcia i etykiety, które po cichu zdradzają Twój dom lub miejsce pracy.',
    urlLabel: 'Aktywność w Mapach',
  },
  'cross-app-tracking-off': {
    title: 'Wyłącz śledzenie między aplikacjami wszędzie',
    summary: 'iOS App Tracking Transparency wyłączone, Android bez identyfikatora reklamowego, lokalizacja dla każdej aplikacji ustawiona na „nigdy/pytaj".',
  },
  'optout-eu-brokers': {
    title: 'Zrezygnuj z brokerów unijnych',
    summary: 'Mieszkańcy UE/UK: złóż rezygnacje oraz pisma RODO Art. 17 do brokerów działających w UE (Acxiom, Criteo, Experian UK).',
    urlLabel: 'Acxiom (globalny)',
  },
  'optout-criteo': {
    title: 'Zrezygnuj z Criteo',
    summary: 'Zrezygnuj z profilu retargetingowego Criteo — jednej z największych sieci reklamowych behawioralnych działających w UE.',
    urlLabel: 'Prywatność / rezygnacja',
  },
  'optout-192': {
    title: 'Zrezygnuj z 192.com (UK)',
    summary:
      'Usuń swój wpis z głównej brytyjskiej strony do wyszukiwania osób. Wiele danych pochodzi z otwartego rejestru wyborczego — zrezygnuj z niego też w swoim urzędzie.',
    urlLabel: 'Usuń moje dane',
  },
  'optout-experian-uk': {
    title: 'Zrezygnuj z marketingu Experian UK',
    summary: 'Skorzystaj z portalu danych Experian UK, żeby kontrolować marketingowe wykorzystanie Twoich danych — oddzielnie od pliku kredytowego.',
    urlLabel: 'Portal danych',
  },
  'google-rtbf-delisting': {
    title: 'Złóż wniosek o usunięcie z wyników wyszukiwania UE/UK (prawo do bycia zapomnianym)',
    summary:
      'Mieszkańcy UE/UK mogą poprosić Google o usunięcie określonych URL-i z wyników wyszukiwania po swoim nazwisku. Usuwa link z wyszukiwania, nie samą stronę.',
    urlLabel: 'Formularz RTBF',
  },
  'disable-os-telemetry': {
    title: 'Ogranicz telemetrię systemu operacyjnego w Windows i macOS',
    summary: 'Zmniejsz ilość danych diagnostycznych i reklamowych wysyłanych domyślnie przez system operacyjny.',
    steps: [
      'Windows: Ustawienia → Prywatność i bezpieczeństwo → Diagnostyka i opinie → ustaw na Wymagane; wyłącz identyfikator reklamowy i spersonalizowane środowisko.',
      'macOS: Ustawienia → Prywatność i ochrona → Analityka i ulepszenia → wyłącz Udostępniaj dane analityczne; Reklamy Apple → wyłącz Spersonalizowane reklamy.',
      'Przy okazji przejrzyj uprawnienia do kamery, mikrofonu i lokalizacji dla poszczególnych aplikacji.',
    ],
  },

  // ─────────────── Tier 4 — Duch ───────────────
  'private-mailing-address': {
    title: 'Zdobądź prywatny adres korespondencyjny',
    summary:
      'Używaj adresu CMRA/skrytki i przestań podawać adres domowy przy dostawach i rejestracjach. Przerywa publiczne powiązanie nazwisko ↔ adres domowy.',
    steps: [
      'Opcje: komercyjna agencja odbioru poczty (CMRA), wirtualna skrzynka pocztowa lub skrytka pocztowa.',
      'Stopniowo aktualizuj adres na kontach, zaczynając od tych z największą ekspozycją.',
      'Nigdy więcej nie wpisuj prawdziwego adresu domowego w żadnym formularzu rejestracji.',
    ],
  },
  'optout-electoral-register': {
    title: 'Zrezygnuj z otwartego rejestru wyborczego',
    summary:
      'Usuń się z publicznie sprzedawanego spisu wyborców (otwarty rejestr w UK) lub ze sprzedaży danych wyborców (USA, zależnie od stanu).',
    steps: [
      'UK: skontaktuj się z lokalnym urzędem gminy, żeby zrezygnować z „otwartego" rejestru wyborczego (pozostajesz w pełnym rejestrze do głosowania).',
      'USA: przepisy dotyczące spisów wyborców są stanowe; niektóre pozwalają na statusy poufny/ukryty, szczególnie dla ocalonych.',
    ],
  },
  'suppress-public-records': {
    title: 'Wycisz adres domowy w rejestrach publicznych',
    summary:
      'Skorzystaj z programów poufności adresu lub wyciszenia danych z ksiąg wieczystych, jeśli masz do tego prawo (szczególnie dla ocalonych z przemocy).',
    steps: [
      'USA: większość stanów prowadzi Program Poufności Adresu (ACP) dla ocalonych ze stalkingu/przemocy.',
      'Rejestry nieruchomości: niektóre powiaty pozwalają na wyciszenie danych dla osób zagrożonych — zapytaj w rejestrze powiatu.',
      'To jest jurysdykcyjnie specyficzne; lokalna organizacja pomocowa może Ci pomóc złożyć wniosek.',
    ],
  },
  'compartmentalize-identities': {
    title: 'Compartmentalizuj tożsamości',
    summary: 'Używaj osobnego e-maila, telefonu i karty dla każdego kontekstu życiowego (praca / prywatne / zakupy / finanse), żeby żaden jeden wyciek nie zmapował całego Twojego życia.',
  },
  'degoogled-phone': {
    title: 'Przejdź na telefon bez Google (GrapheneOS)',
    summary: 'Używaj na co dzień wzmocnionego systemu operacyjnego bez wbudowanych usług Google.',
    urlLabel: 'GrapheneOS',
  },
  'always-vpn-tor': {
    title: 'Stałe VPN / Tor do wrażliwego użytku',
    summary: 'Kieruj wrażliwe przeglądanie przez zaufane VPN bez logowania (np. Mullvad) lub przez Tor.',
    urlLabel: 'Mullvad VPN',
  },
  'burner-devices': {
    title: 'Urządzenia jednorazowe / zastępcze w podróży',
    summary: 'Przy przekraczaniu granic i w ryzykownych sytuacjach korzystaj z urządzeń z minimalną ilością danych.',
  },
  'trust-llc-home': {
    title: 'Użyj trustu/spółki dla domu i majątku',
    summary:
      'Przerwij publiczne powiązanie nazwisko ↔ adres w rejestrach nieruchomości, trzymając majątek w truście lub spółce. Skonsultuj się z prawnikiem — to nie jest porada prawna.',
  },
  'quarterly-reremoval': {
    title: 'Kwartalna kampania ponownego usuwania',
    summary: 'Powtarzaj pełne czyszczenie brokerów co kwartał i zapisuj daty. Usuwanie to nawyk, nie jednorazowa czynność.',
  },
  'threat-model-review': {
    title: 'Przegląd modelu zagrożeń co kwartał',
    summary:
      'Na nowo oceń, przed kim się chronisz, i dostosuj działania. Skorzystaj z frameworka EFF Surveillance Self-Defense.',
    urlLabel: 'Plan EFF SSD',
  },
  'remove-osint-aggregators': {
    title: 'Usuń się z serwisów OSINT i wycieków',
    summary: 'Gdzie to możliwe, poproś o usunięcie z serwisów agregujących wycieki danych i informacje OSINT.',
  },
  'scrub-org-sites': {
    title: 'Wyczyść się ze stron byłych pracodawców i organizacji',
    summary: 'Poproś o usunięcie biogramów, stron pracowniczych i wzmianek prasowych ujawniających Twoje dane. Użyj pisma, jeśli zostaniesz zignorowany.',
  },
  'optout-court-arrest-records': {
    title: 'Wycisz agregatory rejestrów sądowych i aresztowań',
    summary:
      'Strony republishujące zdjęcia z policyjnych archiwów, rejestry aresztowań i akta sądowe to wysoko szkodliwa ekspozycja, nawet jeśli zarzuty zostały oddalone. Poproś każdą z nich o usunięcie; niektóre wymagają dokumentu lub dyspozycji sądowej.',
    steps: [
      'Wylistuj strony ujawniające Twoje dane (z bazowego wyszukiwania z Poziomu 1).',
      'Skorzystaj ze strony usuwania każdej z nich; dla serwisów mugshot nigdy nie płać „opłaty za usunięcie" — to finansowanie procederu. Powołaj się na lokalne przepisy przeciw mugshot tam, gdzie istnieją.',
      'Dla oficjalnych portali sądowych zapytaj urzędnika o pieczętowanie/wymazanie — jedyna trwała naprawa.',
      'Jeśli strona Cię ignoruje, eskaluj pismem o usunięcie RODO/CCPA.',
    ],
  },
  'optout-gb-open-register': {
    title: 'Zrezygnuj z otwartego rejestru wyborczego UK',
    summary:
      'Otwarty rejestr jest sprzedawany marketerom i stronom do wyszukiwania osób. Zrezygnuj przez lokalny urząd gminy — pozostajesz w pełnym rejestrze do głosowania i sprawdzeń kredytowych.',
    urlLabel: 'Jak zrezygnować',
  },
  'optout-ie-edited-register': {
    title: 'Przejdź do edytowanego rejestru wyborczego (Irlandia)',
    summary:
      'Pełny irlandzki rejestr może być używany w celach niewyborczych; rejestr edytowany nie jest sprzedawany na potrzeby marketingu. Wybierz rejestr edytowany przy rejestracji lub aktualizacji danych.',
    urlLabel: 'Sprawdź rejestr',
  },

  // ─────────────── Applied privacy research ───────────────
  'es-asnef': {
    title: 'Sprawdź swój plik kredytowy ASNEF (Equifax Iberia)',
    summary:
      'ASNEF (prowadzony przez Equifax) to główny hiszpański rejestr zadłużenia/kredytów — tu trafiają fałszywe nieopłacone konta otwarte na Twoje imię. Hiszpania nie ma prewencyjnego zamrożenia, więc sprawdzanie pliku to sposób na wykrycie oszustwa.',
    steps: [
      'Na stronie Equifax znajdź „derecho de acceso" (prawo dostępu) i prześlij wniosek z kopią DNI.',
      'Muszą odpowiedzieć w ciągu miesiąca, bezpłatnie.',
      'Sprawdź każde konto lub dług, którego nie rozpoznajesz — to sygnał ostrzegawczy oszustwa.',
      'Powtarzaj mniej więcej raz w roku i po każdym powiadomieniu o wycieku.',
    ],
    urlLabel: 'Equifax — consumidores',
  },
  'es-cirbe': {
    title: 'Zamów raport CIRBE (Banco de España)',
    summary:
      'CIRBE to centralny rejestr kredytowy Banco de España — zawiera wszystkie pożyczki/kredyty zarejestrowane na Twój identyfikator. Najwygodniejszy sposób na wykrycie kredytów wziętych na Twoje imię.',
    steps: [
      'Wejdź na Sede Electrónica Banco de España → CIRBE → zamów raport.',
      'Zidentyfikuj się certyfikatem cyfrowym lub Cl@ve (lub złóż wniosek pocztą / osobiście z DNI).',
      'Bezpłatne i zwykle natychmiastowe online.',
      'Sprawdź, czy nie ma pożyczki, której nie zaciągałeś.',
    ],
    urlLabel: 'Banco de España (sede)',
  },
  'uk-cifas-pr': {
    title: 'Dodaj Cifas Protective Registration (UK)',
    summary:
      'Najbliższe Wielkiej Brytanii zamrożenie kredytowe: flaga na Twoim pliku informująca pożyczkodawców o konieczności dodatkowej weryfikacji przed otwarciem kredytu na Twoje imię. Płatna (~30 funtów za dwa lata), warta uwagi przy podwyższonym ryzyku.',
    steps: [
      'Złóż wniosek o Protective Registration na stronie Cifas.',
      'Pożyczkodawcy zobaczą flagę i będą musieli podjąć dodatkowe kroki weryfikacji.',
      'Spodziewaj się wolniejszego rozpatrywania własnych wniosków kredytowych, gdy jest aktywna — o to chodzi.',
    ],
    urlLabel: 'Cifas',
  },
  'pihole': {
    title: 'Blokuj śledzenie w całej sieci za pomocą Pi-hole',
    summary:
      'Pi-hole pochłania domeny śledzące i reklamowe dla każdego urządzenia w sieci — telefonów, telewizorów, wszystkiego — na poziomie DNS, zanim jeszcze nawiążą połączenie. Jedno urządzenie, ochrona dla całego domu.',
    steps: [
      'Zainstaluj Pi-hole na Raspberry Pi lub dowolnym komputerze z Linuksem działającym non-stop.',
      'Skieruj DNS routera na Pi-hole, żeby każde urządzenie było automatycznie chronione.',
      'Dodaj listy blokowania; przejrzyj dziennik zapytań, żeby zobaczyć, do czego Twoje urządzenia się łączyły.',
    ],
    urlLabel: 'Pi-hole',
  },
  'code-word': {
    title: 'Ustal rodzinne „słowo kodowe" przeciwko oszustwom z klonowaniem głosu',
    summary:
      'AI może sklonować głos z kilku sekund nagrania i sfabrykowować panikę: „to ja, prześlij pieniądze". Wspólne słowo kodowe, które tylko Ty znasz, natychmiast to neutralizuje — tanie i jedno z działań o największej dźwigni.',
    steps: [
      'Uzgodnij słowo lub frazę z bliskimi, której obca osoba nie mogłaby odgadnąć.',
      'Zasada: każda pilna prośba o pieniądze lub poufna sprawa przez telefon lub wiadomość musi je zawierać, w przeciwnym razie traktuj ją jako fałszywą.',
      'Nigdy nie przechowuj ani nie wysyłaj słowa cyfrowo tam, gdzie mogłoby wyciec.',
    ],
    internalLabel: '🔑 Ustaw swoje słowo kodowe',
  },
  'dont-pay-removers': {
    title: 'Nie płać za usługi usuwania danych od brokerów',
    summary:
      'Płatne usługi (DeleteMe, Incogni…) czyszczą tylko mały wycinek brokerów, zawyżają liczby „usuniętych wpisów" i pobierają opłaty w nieskończoność — a wiele pochlebnych recenzji to płatne sponsorowania. Rezygnacje, za które pobierają opłaty, to te bezpłatne dostępne w tej aplikacji.',
    steps: [
      'Wykonaj bezpłatne rezygnacje u brokerów samodzielnie — ci sami brokerzy, bez abonamentu.',
      'Dane biur kredytowych i danych wywnioskowanych / marketingowych i tak przeważnie nie mogą być usunięte przez te usługi.',
      'Jeśli cenisz wygodę, to Twój wybór — wiedz tylko, co naprawdę kupujesz.',
    ],
  },
  'poison-profile': {
    title: 'Zatruj, nie usuwaj — rozcieńcz swój profil',
    summary:
      'Brokerzy i platformy ponownie dodają i odbudowują dane, więc usuwanie to bieżnia bez końca. Dodawanie wiarygodnego szumu do WŁASNYCH kont niskiej stawki podważa pewność co do tego, które dane są prawdziwe. Zestaw wabika generuje ten szum.',
    steps: [
      'Używaj wyłącznie kont, które należą do Ciebie; celuj w banalność i ogólność, nie w przekonującą fałszywą osobę.',
      'Nigdy nie podszywaj się pod nikogo, nie pisz fałszywych opinii ani nie rejestruj innych osób.',
      'Otwórz Zestaw wabika po warianty imienia i przykładowe bio gotowe do wklejenia.',
    ],
    internalLabel: '⬡ Otwórz Zestaw wabika',
  },
  'vary-writing-style': {
    title: 'Zmieniaj styl pisania między tożsamościami',
    summary:
      'Stylometria może powiązać Twoje konta po sposobie pisania — ulubione zwroty, interpunkcja, nawyki emoji — nawet bez wspólnego imienia czy adresu IP. Jeśli utrzymujesz oddzielne tożsamości, pisz je inaczej.',
    steps: [
      'Wybierz celowo różne nawyki dla każdej tożsamości: długość zdań, interpunkcja, wielkie litery, emoji.',
      'Unikaj charakterystycznych zwrotów i wewnętrznych żartów, które powtarzają się na wielu kontach.',
      'Dla wysokich stawek: napisz, a następnie przepisz innym głosem przed opublikowaniem.',
    ],
  },
  'behavioral-fingerprint': {
    title: 'Poznaj swój cyfrowy odcisk behawioralny',
    summary:
      'Poza ciasteczkami strony profilują Twoje zachowanie — rytm pisania, prędkość przewijania, a nawet chód mierzony akcelerometrem telefonu. Nie możesz tego całkowicie wyeliminować, ale przeglądarki anti-fingerprint i osobne profile to tępią.',
    steps: [
      'Używaj przeglądarki odpornej na fingerprinting (Tor Browser lub Brave z włączoną ochroną).',
      'Utrzymuj osobne profile/urządzenia dla różnych tożsamości, żeby zachowania nie mogły być powiązane.',
      'Wyłącz dostęp do czujników ruchu dla stron, które ich nie potrzebują.',
    ],
  },
  'recognize-phishing': {
    title: 'Rozpoznaj phishing i go unikaj',
    summary:
      'Większość przejęć kont zaczyna się od przekonującego e-maila lub SMS-a, a nie od włamania. Naucz się sygnałów ostrzegawczych, żeby fałszywa strona logowania nigdy nie dostała Twojego hasła.',
    steps: [
      'Traktuj każdą niezamówioną wiadomość „zweryfikuj konto" / „podejrzana aktywność" jako podejrzaną — banki i platformy nigdy nie proszą o hasło e-mailem.',
      'Nigdy nie loguj się przez link w wiadomości. Otwórz stronę samodzielnie z zakładki lub wpisując adres.',
      'Sprawdź prawdziwy adres nadawcy i najedź kursorem na linki, żeby zobaczyć, dokąd naprawdę prowadzą.',
      'Niech menedżer haseł będzie Twoim strażnikiem: jeśli nie autouzupełni, domena jest prawdopodobnie fałszywa.',
      'Tam gdzie to możliwe, używaj sprzętowego klucza bezpieczeństwa — jest odporny na phishing, nawet jeśli dasz się nabrać.',
    ],
    urlLabel: 'EFF: jak unikać phishingu',
  },
  'iphone-lockdown-mode': {
    title: 'Włącz Lockdown Mode na iPhone lub Mac',
    summary:
      'Lockdown Mode Apple usuwa rzadko używane funkcje, które są nadużywane przez komercyjne oprogramowanie szpiegowskie. Dla osób narażonych na podwyższone ryzyko znacznie zmniejsza powierzchnię ataku.',
    steps: [
      'Najpierw zaktualizuj do najnowszej wersji iOS/iPadOS/macOS.',
      'Otwórz Ustawienia → Prywatność i bezpieczeństwo → Lockdown Mode (na dole listy).',
      'Włącz i uruchom ponownie urządzenie. Działa na wszystkich urządzeniach Apple zalogowanych na to samo konto.',
      'Spodziewaj się, że niektóre linki, załączniki i funkcje internetowe będą ograniczone — to właśnie ta ochrona działa.',
    ],
    urlLabel: 'Apple: Lockdown Mode',
  },
  'verify-signal-safety-numbers': {
    title: 'Zweryfikuj numery bezpieczeństwa Signal',
    summary:
      'Szyfrowanie end-to-end chroni Cię tylko wtedy, gdy rozmawiasz z prawdziwą osobą. Weryfikacja numeru bezpieczeństwa wyklucza atak man-in-the-middle.',
    steps: [
      'Otwórz rozmowę w Signal → naciśnij imię kontaktu → Wyświetl numer bezpieczeństwa.',
      'Osobiście zeskanujcie nawzajem swoje kody QR; zdalnie porównajcie numer przez oddzielny zaufany kanał.',
      'Naciśnij „Oznacz jako zweryfikowany", gdy numery się zgadzają.',
      'Jeśli numer bezpieczeństwa kiedykolwiek zmieni się niespodziewanie, wyjaśnij przyczynę przed wysłaniem czegokolwiek wrażliwego.',
    ],
    urlLabel: 'Signal: numery bezpieczeństwa',
  },
  'detect-bluetooth-trackers': {
    title: 'Wykryj ukryte urządzenia śledzące Bluetooth',
    summary:
      'AirTagi i urządzenia podobne do Tile to tanie narzędzia stalkingu. Telefony mogą teraz ostrzegać Cię o nieznanym urządzeniu śledzącym podróżującym z Tobą — upewnij się, że wykrywanie jest włączone i wiesz, jak skanować.',
    steps: [
      'iPhone: utrzymuj Bluetooth i lokalizację włączone; iOS ostrzega Cię o nieznanym AirTagu lub urządzeniu Find My poruszającym się razem z Tobą. Naciśnij alert, żeby urządzenie wydało dźwięk.',
      'Android: alerty o nieznanych urządzeniach śledzących są wbudowane (Ustawienia → Bezpieczeństwo i nagłe przypadki → Alerty o nieznanych urządzeniach śledzących) lub zainstaluj aplikację Apple „Tracker Detect" do ręcznego skanowania.',
      'Jeśli znajdziesz urządzenie śledzące, którego nie jesteś właścicielem, możesz je wyłączyć, wyjmując baterię — jednak jeśli czujesz się zagrożony, zachowaj je jako dowód i najpierw skontaktuj się z lokalnymi służbami pomocowymi lub organami ścigania.',
    ],
    urlLabel: 'Apple: niechciane śledzenie',
  },
}
