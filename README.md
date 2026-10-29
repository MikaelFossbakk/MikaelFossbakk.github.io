# Porteføljen til Mikael Fossbakk

Laget med React og Vite. Siden publiseres automatisk på GitHub Pages hver gang du pusher til `main`.

## Legg den ut på GitHub Pages (første gang)

1. Opprett et nytt, offentlig repo på GitHub som heter **`<ditt-brukernavn>.github.io`**.
   Da blir adressen `https://<ditt-brukernavn>.github.io`.
2. Last opp alle filene i denne mappen til repoet. Fra terminalen, inne i mappen:
   ```bash
   git init
   git add .
   git commit -m "Første versjon av porteføljen"
   git branch -M main
   git remote add origin https://github.com/<ditt-brukernavn>/<ditt-brukernavn>.github.io.git
   git push -u origin main
   ```
3. På GitHub: gå til **Settings → Pages**, og velg **GitHub Actions** under *Source*.
4. Gå til fanen **Actions** og vent til jobben er grønn (1–2 minutter). Da er siden ute.

## Kjør siden på din egen maskin

Du trenger [Node.js](https://nodejs.org) (versjon 20.19 eller nyere, helst 22).

```bash
npm install
npm run dev
```

Åpne adressen som vises i terminalen (vanligvis http://localhost:5173).

## Endre innholdet

Alt innhold ligger i **`src/data.js`**: tekstene om deg, ferdighetene og prosjektene.

- **Nytt prosjekt:** kopier et av prosjektene i `prosjekter`-listen og endre teksten.
- **Bilder:** legg dem i `public/img/` og skriv `"img/filnavn.jpg"` i `data.js`.
  Bilder med `type: "mobil"` vises side om side som telefonskjermer; `type: "bred"` vises større under teksten.
- **PDF-er:** legg dem i `public/filer/`.
- **CV:** eksporter CV-en som PDF, gi den navnet `CV-Mikael-Fossbakk.pdf` og legg den i `public/filer/`.
- **LinkedIn og GitHub:** fyll inn lenkene i `profil` øverst i `data.js`. Tomme lenker skjules.

Utseendet (farger, fonter, avstander) styres fra `src/styles.css`. Fargene står øverst under `:root`.

## Før du publiserer

- **SoppSporer-rapporten** (`public/filer/SoppSporer-rapport-IN2000.pdf`) inneholder bilder og
  beskrivelser av alle på teamet. Spør dem om det er greit at den ligger åpent på nettet.
  Hvis ikke: slett filen og fjern lenken i `data.js`.
- **Bildene av SoppSporer** er hentet fra rapporten og har lav oppløsning. Bytt dem gjerne ut med
  ekte skjermbilder fra appen.
