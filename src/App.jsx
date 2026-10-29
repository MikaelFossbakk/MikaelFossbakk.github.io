import { useEffect, useRef, useState } from "react";
import { profil, omMeg, ferdigheter, prosjekter } from "./data.js";

const lenker = [
  { href: "#om-meg", tekst: "Om meg" },
  { href: "#ferdigheter", tekst: "Ferdigheter" },
  { href: "#prosjekter", tekst: "Prosjekter" },
  { href: "#kontakt", tekst: "Kontakt" },
];

function Ikon({ navn }) {
  const felles = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (navn === "epost")
    return (
      <svg {...felles}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    );
  if (navn === "lenke")
    return (
      <svg {...felles}>
        <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
        <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
      </svg>
    );
  if (navn === "last-ned")
    return (
      <svg {...felles}>
        <path d="M12 3v12" />
        <path d="M7 10l5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    );
  if (navn === "pil")
    return (
      <svg {...felles}>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    );
  if (navn === "lukk")
    return (
      <svg {...felles}>
        <path d="M6 6l12 12" />
        <path d="M18 6L6 18" />
      </svg>
    );
  return null;
}

function Meny() {
  const [apen, setApen] = useState(false);
  return (
    <header className="topp">
      <nav className="meny" aria-label="Hovedmeny">
        <a className="logo" href="#top">
          {profil.navn}
        </a>
        <button
          className="meny-knapp"
          aria-expanded={apen}
          aria-controls="meny-lenker"
          onClick={() => setApen(!apen)}
        >
          Meny
        </button>
        <ul id="meny-lenker" className={apen ? "meny-lenker apen" : "meny-lenker"}>
          {lenker.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setApen(false)}>
                {l.tekst}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="innhold hero-innhold">
        <img className="portrett" src={profil.bilde} alt={`Portrett av ${profil.navn}`} />
        <div>
          <p className="hero-kicker">{profil.tittel}</p>
          <h1>Hei, jeg er {profil.navn.split(" ")[0]}.</h1>
          <p className="hero-tekst">{profil.undertittel}</p>
          <div className="knapper">
            <a className="knapp knapp-primar" href="#prosjekter">
              Se prosjektene mine <Ikon navn="pil" />
            </a>
            {profil.cv && (
              <a className="knapp knapp-lys" href={profil.cv} download>
                <Ikon navn="last-ned" /> Last ned CV
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function OmMeg() {
  return (
    <section className="seksjon" id="om-meg">
      <div className="innhold smal">
        <h2>Om meg</h2>
        {omMeg.map((a, i) => (
          <p key={i} className="brodtekst">
            {a}
          </p>
        ))}
      </div>
    </section>
  );
}

function Ferdigheter() {
  return (
    <section className="seksjon seksjon-farget" id="ferdigheter">
      <div className="innhold">
        <h2>Ferdigheter</h2>
        <div className="ferdighet-grid">
          <div className="kort">
            <h3>Fagområder</h3>
            <ul className="chips">
              {ferdigheter.fagomrader.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="kort">
            <h3>Teknologi</h3>
            <ul className="chips">
              {ferdigheter.teknologi.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProsjektKort({ p, onApne }) {
  return (
    <article className="prosjekt-kort">
      <div className="prosjekt-bilde">
        <img src={p.forsidebilde} alt={p.forsidebildeAlt} loading="lazy" />
      </div>
      <div className="prosjekt-tekst">
        <p className="kontekst">{p.kontekst}</p>
        <h3>{p.tittel}</h3>
        <p>{p.kort}</p>
        <p className="rolle">
          <strong>Min rolle:</strong> {p.rolle}
        </p>
        <ul className="tags" aria-label="Teknologi og metoder">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <button className="knapp knapp-primar" onClick={() => onApne(p)}>
          Les om prosjektet <Ikon navn="pil" />
        </button>
      </div>
    </article>
  );
}

function ProsjektDetalj({ p, onLukk }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (p && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add("las-scroll");
    }
    if (!p && dialog.open) dialog.close();
  }, [p]);

  const lukk = () => {
    document.body.classList.remove("las-scroll");
    onLukk();
  };

  const mobilBilder = p ? p.bilder.filter((b) => b.type === "mobil") : [];
  const bredeBilder = p ? p.bilder.filter((b) => b.type !== "mobil") : [];

  return (
    <dialog
      ref={ref}
      className="detalj"
      aria-labelledby="detalj-tittel"
      onClose={lukk}
      onClick={(e) => {
        if (e.target === ref.current) ref.current.close();
      }}
    >
      {p && (
        <div className="detalj-innhold">
          <button className="lukk" onClick={() => ref.current.close()} aria-label="Lukk prosjektet">
            <Ikon navn="lukk" />
          </button>
          <p className="kontekst">{p.kontekst}</p>
          <h2 id="detalj-tittel">{p.tittel}</h2>
          <p className="ingress">{p.kort}</p>
          <dl className="fakta">
            <div>
              <dt>Min rolle</dt>
              <dd>{p.rolle}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{p.team}</dd>
            </div>
          </dl>
          <ul className="tags" aria-label="Teknologi og metoder">
            {p.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          {mobilBilder.length > 0 && (
            <div className="mobil-galleri">
              {mobilBilder.map((b) => (
                <figure key={b.src}>
                  <img src={b.src} alt={b.alt} loading="lazy" />
                  <figcaption>{b.tekst}</figcaption>
                </figure>
              ))}
            </div>
          )}

          {p.seksjoner.map((s) => (
            <section key={s.overskrift} className="detalj-seksjon">
              <h3>{s.overskrift}</h3>
              {s.avsnitt && s.avsnitt.map((a, i) => <p key={i}>{a}</p>)}
              {s.liste && (
                <ul>
                  {s.liste.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              )}
              {s.nummerertListe && (
                <ol>
                  {s.nummerertListe.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ol>
              )}
            </section>
          ))}

          {bredeBilder.length > 0 && (
            <div className="bred-galleri">
              {bredeBilder.map((b) => (
                <figure key={b.src}>
                  <img src={b.src} alt={b.alt} loading="lazy" />
                  <figcaption>{b.tekst}</figcaption>
                </figure>
              ))}
            </div>
          )}

          {p.lenker.length > 0 && (
            <div className="knapper">
              {p.lenker.map((l) => (
                <a
                  key={l.href}
                  className="knapp knapp-sekundar"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Ikon navn="lenke" /> {l.tekst}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}

function Prosjekter() {
  const [valgt, setValgt] = useState(null);
  return (
    <section className="seksjon" id="prosjekter">
      <div className="innhold">
        <h2>Prosjekter</h2>
        <p className="seksjon-ingress">
          Et utvalg prosjekter fra studiene, fra brukerinnsikt og prototyper til ferdig kode.
        </p>
        <div className="prosjekt-liste">
          {prosjekter.map((p) => (
            <ProsjektKort key={p.id} p={p} onApne={setValgt} />
          ))}
        </div>
      </div>
      <ProsjektDetalj p={valgt} onLukk={() => setValgt(null)} />
    </section>
  );
}

function Kontakt() {
  return (
    <footer className="kontakt" id="kontakt">
      <div className="innhold smal">
        <h2>Kontakt</h2>
        <p className="brodtekst">
          Jeg søker sommerjobb for 2027. Send meg gjerne en e-post hvis du vil vite mer.
        </p>
        <div className="knapper">
          <a className="knapp knapp-lys" href={`mailto:${profil.epost}`}>
            <Ikon navn="epost" /> {profil.epost}
          </a>
          {profil.linkedin && (
            <a className="knapp knapp-omriss" href={profil.linkedin} target="_blank" rel="noopener noreferrer">
              <Ikon navn="lenke" /> LinkedIn
            </a>
          )}
          {profil.github && (
            <a className="knapp knapp-omriss" href={profil.github} target="_blank" rel="noopener noreferrer">
              <Ikon navn="lenke" /> GitHub
            </a>
          )}
        </div>
        <p className="bunntekst">© {new Date().getFullYear()} {profil.navn}</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="hopp" href="#hoved">
        Hopp til innhold
      </a>
      <Meny />
      <main id="hoved">
        <Hero />
        <OmMeg />
        <Ferdigheter />
        <Prosjekter />
      </main>
      <Kontakt />
    </>
  );
}
