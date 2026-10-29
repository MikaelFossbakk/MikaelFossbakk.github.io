// Alt innholdet på siden ligger her. Endre tekstene, så oppdateres siden.
// Bildefiler legges i public/img/, PDF-er i public/filer/.

export const profil = {
  navn: "Mikael Fossbakk",
  tittel: "Masterstudent i informatikk ved UiO",
  undertittel: "Jeg utvikler løsninger som starter med brukerne, og koder dem helt fram.",
  bilde: "img/mikael.jpg",
  epost: "fossbakkm@gmail.com",
  //linkedin: "",
  github: "https://github.com/MikaelFossbakk",
  cv: "filer/CV-Mikael-Fossbakk.pdf",
};

export const omMeg = [
  "Jeg tar master i programmering og systemarkitektur ved Universitetet i Oslo, etter en bachelor i design, bruk og interaksjon. Jeg trives best der de to fagfeltene møtes: å finne ut hva folk faktisk trenger, og så bygge noe som fungerer for dem.",
  "Før jeg begynte å studere informatikk, jobbet jeg seks år i helse- og omsorgssektoren, blant annet som ansvarsvakt ved en sikkerhetsavdeling på UNN i Tromsø. Der lærte jeg å ta ansvar når det gjelder, lede et team og kommunisere med mennesker med svært ulike behov. Det tar jeg med meg inn i hvert prosjekt.",
  "Nå ser jeg etter en sommerjobb der jeg kan bidra som utvikler og lære av erfarne folk.",
];

export const ferdigheter = {
  fagomrader: [
    "Systemutvikling",
    "Algoritmer og datastrukturer",
    "UX-design",
    "Brukertesting",
  ],
  teknologi: [
    "Java",
    "Kotlin",
    "Python",
    "JavaScript",
    "React",
    "HTML",
    "C++ (Arduino)",
  ],
};

export const prosjekter = [
  {
    id: "soppsporer",
    tittel: "SoppSporer",
    kontekst: "IN2000 · Software engineering med prosjektarbeid · våren 2026",
    kort: "Android-app som beregner sjansen for å finne sopp forksjellige steder i norge",
    rolle: "Hovedansvar for koding og utvikling av appen",
    team: "Team på seks: tre utviklere og tre designere",
    tags: ["Kotlin", "Android", "Maskinlæring", "REST-API-er", "Scrum"],
    forsidebilde: "img/sopp-skjerm2.jpg",
    forsidebildeAlt: "Kartvisning i SoppSporer med en score på 73 for et valgt punkt",
    seksjoner: [
      {
        overskrift: "Om prosjektet",
        avsnitt: [
          "SoppSporer er det store prosjektet vårt i IN2000. Vi valgte et åpent case basert på de felles datakatalogene data.norge.no og GeoNorge. Brukeren velger en sopp, trykker i kartet og får en score fra 0 til 100 som sier hvor gode forholdene er på det stedet akkurat nå.",
          "Andre soppapper viser hvor det er funnet sopp før. Vår app ser framover og peker på nye områder med gode forhold, slik at sankerne sprer seg i stedet for å samles på de samme stedene.",
        ],
      },
      {
        overskrift: "Min rolle",
        avsnitt: [
          "Jeg hadde hovedansvaret for kodingen og utviklingen av appen, og jobbet tett med designerne for å få brukerinnsikten inn i løsningen.",
        ],
      },
      {
        overskrift: "Teknisk løsning",
        avsnitt: [
          "Appen er laget for Android og kombinerer værdata, skogdata og historiske soppfunn fra en rekke åpne API-er: MET Frost og Locationforecast, GBIF, NIBIO SAT-SKOG og AR5, og Kartverkets søk etter adresser og stedsnavn.",
          "For å beregne scoren trente vi én maskinlæringsmodell per sopp med Isolation Forest. Modellene er lagret som ONNX-filer og kjører lokalt på telefonen.",
        ],
        liste: [
          "Frost-API-et brukte 8–10 sekunder på å finne nærmeste værstasjon. Vi lagret alle norske stasjoner lokalt og regnet ut nærmeste stasjon med Haversine-formelen. Det kuttet ventetiden til under ett sekund.",
          "Nettverkskallene for historiske funn feilet av og til. Siden alle funnene for de 11 soppene bare tok rundt 5 MB, lastet vi dem ned på forhånd. Appen ble raskere og fungerer også uten dekning ute i skogen.",
          "NIBIO-tjenestene er laget for å vise kartbilder, ikke for å gi rådata. Vi hentet ut verdiene ved å spørre etter et lite område rundt punktet og tolke GML-svaret.",
        ],
      },
      {
        overskrift: "Prosess",
        avsnitt: [
          "Vi jobbet etter Scrum med sprinter på én uke. Fem intervjuer og en spørreundersøkelse avgjorde hvilke funksjoner vi prioriterte. Wireframes i Figma ble testet med tre brukere, og den ferdige appen med en geriljatest og en planlagt brukertest. Vi skrev også enhetstester og sjekket at fargekontrastene oppfyller WCAG 2.1 nivå AA.",
        ],
      },
      {
        overskrift: "Hva jeg lærte",
        avsnitt: [
          "Jeg lærte hvordan man jobber flere sammen i én kodebase: å merge ofte, skrive kode andre kan lese, og kommunisere tydelig om hvem som gjør hva.",
        ],
      },
    ],
    bilder: [
      { src: "img/sopp-skjerm1.jpg", alt: "Kartskjermen med søkefelt og valgt sopp", tekst: "Kartet", type: "mobil" },
      { src: "img/sopp-skjerm3.jpg", alt: "Heatmap som farger kartet fra grønt til rødt etter sankepotensial", tekst: "Heatmap", type: "mobil" },
      { src: "img/sopp-skjerm4.jpg", alt: "Tidligere funn fra Artsdatabanken vist som klynger på kartet", tekst: "Tidligere funn", type: "mobil" },
      { src: "img/sopp-skjerm6.jpg", alt: "Profilsiden for kantarell", tekst: "Sopp-profil", type: "mobil" },
      { src: "img/sopp-skjerm5.jpg", alt: "Soppsiden og menysiden i appen", tekst: "Soppsiden og menyen", type: "bred" },
    ],
    lenker: [
      { tekst: "Les rapporten (PDF)", href: "filer/SoppSporer-rapport-IN2000.pdf" },
    ],
  },
  {
    id: "neatheat",
    tittel: "NeatHeat",
    kontekst: "IN1060 · Design for, med og av brukere · våren 2025",
    kort: "Velferdsteknologi som varsler eldre hvis de går hjemmefra mens et stearinlys fortsatt brenner.",
    rolle: "Arduino-oppsett og koding, brukertesting og analyse",
    team: "Gruppe på fem",
    tags: ["C++", "Arduino", "Brukertesting", "Prototyping"],
    forsidebilde: "img/neatheat-prototype.png",
    forsidebildeAlt: "De to ferdige NeatHeat-enhetene i hvite, 3D-printede skall",
    seksjoner: [
      {
        overskrift: "Om prosjektet",
        avsnitt: [
          "Målet var å gjøre det tryggere for eldre å bo hjemme. Gjennom dagbøker, intervjuer og en workshop med to eldre brukere fant vi ut at gjenglemte stearinlys var en reell bekymring. Resultatet ble NeatHeat: en liten sensor som henges på en vase ved lyset, og en varsler ved ytterdøra.",
        ],
      },
      {
        overskrift: "Min rolle",
        avsnitt: [
          "Jeg satte opp Arduino-enhetene og skrev koden, og var med på planlegging og analyse av brukertestene. Prosjektet koblet bakgrunnen min fra helsesektoren med teknologi.",
        ],
      },
      {
        overskrift: "Teknisk løsning",
        avsnitt: [
          "Løsningen består av to Arduino-enheter i 3D-printede skall som snakker trådløst sammen via nRF24L01-moduler.",
        ],
        nummerertListe: [
          "En IR-flammesensor ved stearinlyset oppdager flammen og sender signal til varsleren.",
          "Varsleren ved døra slår på bevegelsessensoren sin.",
          "Går noen ut døra mens lyset brenner, gir en piezo-buzzer en varsellyd.",
          "Når flammen slukkes, slås bevegelsessensoren av, og ingen alarm går.",
        ],
      },
      {
        overskrift: "Brukertesting",
        avsnitt: [
          "Vi testet tre situasjoner hjemme hos brukerne: bytte batteri, sette opp enhetene og forlate boligen med et tent lys. Testene avslørte to ting:",
        ],
        liste: [
          "Batterikoblingen var for fiklete. Den ene brukeren har leddgikt og klarte nesten ikke å koble sammen de små ledningene. Vi hadde prioritert et minimalistisk design på bekostning av bruken.",
          "Varsleren ga alarm når ingen gikk forbi, og var stille da brukerne gikk ut. Vi feilsøkte sammen med brukerne og fant ut at alt virket når enhetene fikk strøm fra PC-en, så problemet var strømforsyningen. Etter testen endret vi koden slik at enhetene fungerte stabilt på 9V-batteri.",
        ],
      },
      {
        overskrift: "Hva jeg lærte",
        avsnitt: [
          "Det viktigste var hvor mye brukerne fanget opp som vi ikke så selv. Jeg lærte også å teste maskinvare under ekte forhold, med batteri og i et ekte hjem, og ikke bare koblet til PC-en på lesesalen.",
        ],
      },
    ],
    bilder: [
      { src: "img/neatheat-storyboard.png", alt: "Håndtegnet storyboard som viser hvordan varslingen fungerer", tekst: "Storyboard fra konseptfasen", type: "bred" },
      { src: "img/neatheat-brukertest.png", alt: "To eldre brukere som ser på en prototype på en PC under en workshop", tekst: "Workshop med brukerne", type: "bred" },
      { src: "img/neatheat-logo.png", alt: "NeatHeat-logoen: et stearinlys med et hjerte i en varseltrekant", tekst: "Logo", type: "bred" },
    ],
    lenker: [
      { tekst: "Les rapporten (PDF)", href: "filer/NeatHeat-rapport-IN1060.pdf" },
      { tekst: "Konseptvideo", href: "https://www.uio.no/studier/emner/matnat/ifi/IN1060/v25/prosjektgrupper/CybSed/neatheat.mp4" },
      { tekst: "Teknisk video", href: "https://www.uio.no/studier/emner/matnat/ifi/IN1060/v25/prosjektgrupper/CybSed/tekninsk_video.mp4" },
    ],
  },
];

export const utenforStudiene = {
  tittel: "Snowboard",
  periode: "2018–2023",
  avsnitt: [
    "Fra 2018 til 2023 var jeg team Kjører for Papahop (Snowboard butikk). Jeg produserte videoklipp og edits for butikken, og jeg var med på eventene de arrangerte.",
    "Å filme kjøring i utsatte fjellpartier krever nøye planlegging, gode risikovurderinger og god kommunikasjon med teamet. Produksjon av innhold for en sponsor handler om å levere noe de kan bruke. Begge deler er gode erfaringer jeg tar med meg videre.",
  ],
  video: "video/snowboard.mp4",
  plakat: "img/snowboard-plakat.jpg",
};