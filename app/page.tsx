"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ─────────────────────────── helpers ─────────────────────────── */

function GuitarSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44 4 L60 20 L38 42 C40 46 40 52 36 56 C30 62 20 62 14 56 C8 50 8 40 14 34 C18 30 24 30 28 32 L44 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="22" cy="46" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M36 10 L54 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 14 L50 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DiamondIcon() {
  return <span className="text-[#c8922a]">&#9670;</span>;
}

function Divider() {
  return (
    <div className="flex items-center gap-4 my-4">
      <div className="flex-1 h-px bg-[#3a3020]" />
      <DiamondIcon />
      <div className="flex-1 h-px bg-[#3a3020]" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#c8922a] tracking-[0.35em] uppercase text-xs font-sans mb-3">
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div className="text-center mb-14">
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="font-serif text-4xl md:text-5xl text-[#e8d5b0]">
        {children}
      </h2>
      <Divider />
    </div>
  );
}

function PlaceholderImg({
  className,
  label,
  src = "/majo-bio.jpeg",
}: {
  className?: string;
  label?: string;
  src?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-[#1c1812] border border-[#2e2818] overflow-hidden ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={label ?? "Imagen"}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {label && (
        <p className="text-[#3a3020] text-[10px] tracking-widest uppercase mt-2">
          {label}
        </p>
      )}
    </div>
  );
}

function SpotifyEmbed({ trackId }: { trackId: string }) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${trackId}`}
      width="300"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="mt-2"
    ></iframe>
  );
}

/* ─────────────────────────── page ─────────────────────────── */

const NAV_LINKS = [
  ["Bio", "#bio"],
  ["Galería", "#galeria"],
  ["Música", "#musica"],
  ["TV", "#tv"],
  ["Servicios", "#servicios"],
  ["Contacto", "#contacto"],
] as const;

const SINGLES = [
  { title: "El Universo Nos Repara", year: "2023", trackId: "6ysKetjkShbyG7POGLs4Ic" },
  { title: "Rock N' Roll X Siempre", year: "2022", trackId: "7HNAr2UAKube5CEOgq8Dee" },
  { title: "Candela Nena", year: "2022", trackId: "7pXMYhPtTnOtOSRv9LrDdm" },
  { title: "Pervertir Tu Mente", year: "2020", trackId: "3HFEaKzj4gNqnn347ouYcK" },
  { title: "El Naranja y El Azul", year: "2020", trackId: "7EOqUxA7RVqZnvJjK0z1t5" },
  { title: "Descifrándome", year: "2018", trackId: "7cAYOnGp9ZxewXbLqzi4fW" },
];

const EPS = [
  { title: "Live Sessions El Cuarto", year: "2020", type: "EP" },
  { title: "Somos Re-cuerdos", year: "2015", type: "EP" },
];

const TV_SHOWS = [
  {
    show: "La Voz Kids",
    channel: "Caracol TV",
    year: "2022",
    desc: "Guitarrista y corista compartiendo escenario con los coaches del programa en una de las ediciones más especiales.",
    artists: ["Kany García", "Andrés Cepeda", "Nacho"],
  },
  {
    show: "La Voz Senior",
    channel: "Caracol TV",
    year: "2022",
    desc: "Guitarrista y corista junto a los entrenadores de esta edición del reconocido programa de talentos.",
    artists: ["Kany García", "Andrés Cepeda", "Nacho"],
  },
  {
    show: "La Descarga",
    channel: "Caracol TV",
    year: "2022",
    desc: "Tocó junto a reconocidos artistas colombianos en este exitoso programa musical de prime time.",
    artists: ["Santiago Cruz", "Marbelle", "Maía", "Gusi"],
  },
];

const STAGE_ARTISTS = [
  "Maná",
  "Ricardo Arjona",
  "Carlos Vives",
  "Aterciopelados",
  "Rubén Albarrán",
  "Manuel Medrano",
  "Marc Anthony",
  "Chayanne",
  "Kany García",
  "Andrés Cepeda",
  "Santiago Cruz",
  "Marbelle",
];

const SERVICES_EXTRA = [
  {
    title: "Conciertos & Shows",
    desc: "Presentaciones como artista solista con su propio repertorio de composiciones originales.",
  },
  {
    title: "Eventos Corporativos",
    desc: "Shows adaptados para lanzamientos de productos, eventos empresariales y celebraciones.",
  },
  {
    title: "Eventos Privados",
    desc: "Bodas, fiestas y celebraciones especiales con una propuesta musical exclusiva.",
  },
  {
    title: "Festivales",
    desc: "Disponible para festivales y grandes escenarios. Experiencia en Rock al Parque.",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openTrack, setOpenTrack] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <main className="bg-[#0d0b08] text-[#e8d5b0] min-h-screen overflow-x-hidden">

      {/* ── NOISE OVERLAY ── */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      />

      {/* ══════════════════════════════════
           NAVBAR
      ══════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0b08]/95 backdrop-blur-sm border-b border-[#1e1a12]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#hero"
            className="font-serif italic text-[#c8922a] text-xl tracking-wider"
          >
            Majo Gutierrez
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[#a09070] hover:text-[#c8922a] transition-colors text-xs tracking-[0.2em] uppercase"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#a09070] flex flex-col gap-1.5"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className="w-6 h-px bg-current block" />
            <span className="w-4 h-px bg-current block" />
            <span className="w-6 h-px bg-current block" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0d0b08] border-t border-[#1e1a12] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-[#a09070] hover:text-[#c8922a] transition-colors text-xs tracking-[0.2em] uppercase py-2 border-b border-[#1e1a12]"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════
           HERO — BANNER
      ══════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center md:items-end md:justify-start overflow-hidden bg-[#0d0b08]"
      >
        {/* ── PHOTO ── coloca tu foto en /public/majo-hero.jpg */}
        <Image
          src="/majo-hero.jpg"
          alt="Majo Gutierrez"
          fill
          priority
          className="hidden md:block object-cover object-top"
          sizes="100vw"
        />

        {/* ── OVERLAYS ── */}
        {/* Oscurece suavemente toda la imagen */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Gradiente fuerte desde abajo para que el texto sea legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b08] via-[#0d0b08]/60 to-transparent" />
        {/* Gradiente lateral derecho sutil */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0d0b08]/70 via-transparent to-transparent" />

        {/* ── CONTENT ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14 pb-20 md:pb-28 flex flex-col items-center text-center md:items-end md:text-right">

          {/* Grammy badge */}
          <div className="inline-flex items-center gap-2 bg-[#0d0b08]/60 backdrop-blur-sm border border-[#c8922a]/30 text-[#c8922a] px-5 py-2 text-[10px] tracking-[0.3em] uppercase mb-8">
            &#9733; Nominada Latin Grammy&apos;s &middot; Mejor Álbum de Rock en Vivo
          </div>

          {/* Name */}
          <div className="mb-5">
            <h1 className="font-serif font-black text-[clamp(4.5rem,16vw,11rem)] leading-[0.88] tracking-tight text-[#e8d5b0] drop-shadow-2xl">
              MAJO
            </h1>
            <h1 className="font-serif font-black italic text-[clamp(4rem,14vw,10rem)] leading-[0.88] tracking-tight text-[#c8922a] drop-shadow-2xl">
              Gutierrez
            </h1>
          </div>

          <p className="text-[#d4c09a] tracking-[0.4em] uppercase text-xs md:text-sm mb-1">
            Cantante &amp; Guitarrista
          </p>
          <p className="text-[#a09070] tracking-[0.3em] uppercase text-[10px] mb-8">
            Blues &nbsp;&middot;&nbsp; Rock &amp; Roll &nbsp;&middot;&nbsp; Indie Pop &nbsp;&middot;&nbsp; Reggae
          </p>

          {/* Sponsors */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[#5a4a30] tracking-widest uppercase text-[10px]">
              Patrocinada por
            </span>
            <span className="border border-[#5a4a30] text-[#a09070] px-3 py-1 text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm">
              EPIPHONE
            </span>
            <span className="border border-[#5a4a30] text-[#a09070] px-3 py-1 text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm">
              GIBSON
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#musica"
              className="bg-[#c8922a] text-[#0d0b08] px-9 py-3.5 text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#e8b84b] transition-colors w-fit"
            >
              Escuchar Música
            </a>
            <a
              href="#servicios"
              className="border border-[#c8922a] text-[#c8922a] px-9 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-[#c8922a]/10 transition-colors w-fit backdrop-blur-sm"
            >
              Contratar
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-10 flex flex-col items-center gap-2 text-[#5a4a30]">
          <div className="w-px h-12 bg-gradient-to-b from-[#c8922a]/40 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════
           BIO
      ══════════════════════════════════ */}
      <section id="bio" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="Su historia">Biografía</SectionTitle>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div className="space-y-5 text-[#a09070] leading-relaxed text-sm">
              <blockquote className="font-serif italic text-[#e8d5b0] text-lg leading-relaxed border-l-2 border-[#c8922a] pl-5 mb-8">
                &ldquo;La expresividad y calidad vocal de Majo, combinadas con
                sus habilidades improvisativas en la guitarra, crean una
                combinación perfecta que define su carrera como solista.&rdquo;
              </blockquote>

              <p>
                Comenzó en la música desde muy temprana edad, explorando el
                piano y la flauta traversa. Al descubrir las melodías y armonías
                del Blues a sus 12 años, decidió volcarse por la guitarra
                eléctrica y empezó a componer sus primeras canciones.
              </p>
              <p>
                El Blues es su mayor influencia: gracias a él aprendió a
                improvisar y desarrollar nuevos sonidos hasta alcanzar un nivel
                profesional. Ha compartido escenario con{" "}
                <span className="text-[#c8922a]">
                  Maná, Marc Anthony, Chayanne, Ricardo Arjona
                </span>{" "}
                y{" "}
                <span className="text-[#c8922a]">Carlos Vives</span>, entre
                muchos otros.
              </p>
              <p>
                En 2018 recibió una beca de{" "}
                <span className="text-[#c8922a]">
                  Berklee College of Music
                </span>{" "}
                en Boston. En 2021,{" "}
                <span className="text-[#c8922a]">Epiphone y Gibson</span> la
                invitan a ser patrocinadora oficial, integrando sus instrumentos
                a sus nuevas composiciones y sonoridades.
              </p>
              <p>
                En 2023 formó parte del concierto de{" "}
                <span className="text-[#c8922a]">Aterciopelados</span>{" "}
                nominado al Latin Grammy, tocando junto a Carlos Vives y Rubén
                Albarrán de Café Tacvba. Ese mismo año se presentó en{" "}
                <span className="text-[#c8922a]">Rock al Parque</span>, el
                festival de rock más importante de Latinoamérica.
              </p>
              <p>
                En 2024 lanzó su álbum homónimo{" "}
                <span className="text-[#c8922a]">&ldquo;Majo Gutierrez&rdquo;</span>,
                donde la guitarra se destaca como protagonista indiscutible.
              </p>

              <div className="pt-4 flex gap-6">
                <a
                  href="mailto:majogutierrezoficial@gmail.com"
                  className="text-[#c8922a] text-xs tracking-[0.2em] uppercase border-b border-[#c8922a]/40 pb-1 hover:border-[#c8922a] transition-colors"
                >
                  Descargar EPK &rarr;
                </a>
                <a
                  href="#contacto"
                  className="text-[#a09070] text-xs tracking-[0.2em] uppercase border-b border-[#3a3020] pb-1 hover:text-[#c8922a] hover:border-[#c8922a] transition-colors"
                >
                  Contacto &rarr;
                </a>
              </div>
            </div>

            {/* Portrait placeholder */}
            <div className="relative">
              <PlaceholderImg
                className="w-full aspect-[3/4]"
                label="Foto de artista"
              />
              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c8922a]/15 -z-10" />
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#3a3020]/50 -z-10" />

              {/* Info card overlaid */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0d0b08]/90 backdrop-blur-sm p-5 border-t border-[#3a3020]">
                <p className="text-[#c8922a] text-[10px] tracking-[0.3em] uppercase mb-1">
                  Patrocinada por
                </p>
                <p className="text-[#e8d5b0] text-sm font-serif">
                  Epiphone &amp; Gibson
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
           GALLERY
      ══════════════════════════════════ */}
      <section id="galeria" className="py-28 px-6 bg-[#090807]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="Momentos">Galería</SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {[
              { src: "/galeria-1.jpeg", label: "En concierto", span: "col-span-1 row-span-2 aspect-[2/3]" },
              { src: "/galeria-2.jpeg", label: "Con la guitarra", span: "aspect-square" },
              { src: "/galeria-3.jpg", label: "En estudio", span: "aspect-square" },
              { src: "/galeria-4.jpg", label: "Rock al Parque", span: "aspect-square" },
              { src: "/galeria-5.jpeg", label: "La Voz", span: "aspect-square" },
              { src: "/galeria-6.jpeg", label: "Backstage", span: "aspect-square" },
              { src: "/galeria-7.jpeg", label: "Live sessions", span: "col-span-2 aspect-[16/6]" },
            ].map((item, i) => (
              <PlaceholderImg
                key={i}
                className={`w-full ${item.span}`}
                src={item.src}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
           DISCOGRAPHY
      ══════════════════════════════════ */}
      <section id="musica" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Su obra">Música</SectionTitle>

          {/* Featured album */}
          <div className="mb-14 bg-[#1c1812] border border-[#3a3020] p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:border-[#c8922a]/30 transition-colors">
            <img src="/album-cover.jpeg" alt="Portada del álbum" className="w-full md:w-44 h-44 shrink-0" />
            <div className="flex flex-col justify-center">
              <p className="text-[#c8922a] tracking-[0.3em] uppercase text-[10px] mb-1">
                Álbum &middot; 2024
              </p>
              <h3 className="font-serif text-3xl text-[#e8d5b0] mb-3">
                Majo Gutierrez
              </h3>
              <p className="text-[#a09070] text-sm leading-relaxed mb-5">
                Su álbum más reciente donde la guitarra se destaca como
                protagonista indiscutible. Diez canciones que fusionan Blues,
                Rock &amp; Roll, Indie Pop y Reggae en un sonido propio e
                inconfundible.
              </p>
              <a
                href="https://open.spotify.com/artist/0nnZOEsioGa3WuIBEBVCYB?si=VTyOFRADRcSq9FT-ZRvCsw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit text-[10px] tracking-[0.25em] uppercase text-[#c8922a] border border-[#c8922a]/30 px-5 py-2.5 hover:bg-[#c8922a]/10 transition-colors"
              >
                Escuchar
              </a>
            </div>
          </div>

          {/* Singles + EPs */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Singles */}
            <div>
              <h3 className="font-serif text-xl text-[#e8d5b0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#c8922a] inline-block" />
                Singles
              </h3>
              <div className="space-y-1">
                {SINGLES.map((s) => (
                  <div key={s.title}>
                    <div
                      className="group flex items-center justify-between py-3.5 border-b border-[#1e1a12] cursor-pointer"
                      onClick={() => setOpenTrack(openTrack === s.trackId ? null : s.trackId)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#2e2818] group-hover:text-[#c8922a] transition-colors text-xs">
                          {openTrack === s.trackId ? "▼" : "▶"}
                        </span>
                        <span className="text-sm text-[#e8d5b0] group-hover:text-[#c8922a] transition-colors">
                          {s.title}
                        </span>
                      </div>
                      <span className="text-[#5a4a30] text-xs">{s.year}</span>
                    </div>
                    {openTrack === s.trackId && <SpotifyEmbed trackId={s.trackId} />}
                  </div>
                ))}
              </div>
            </div>

            {/* EPs */}
            <div>
              <h3 className="font-serif text-xl text-[#e8d5b0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#c8922a] inline-block" />
                EPs &amp; Proyectos
              </h3>
              <div className="space-y-3">
                {EPS.map((ep) => (
                  <div
                    key={ep.title}
                    className="bg-[#1c1812] border border-[#2e2818] p-4 flex gap-4 items-center hover:border-[#c8922a]/30 transition-colors"
                  >
                    <img src={"/eps.jpeg"} alt="Portada del EP" className="w-14 h-14 shrink-0" />
                    <div>
                      <p className="text-[#c8922a] text-[10px] tracking-wider uppercase">
                        {ep.type} &middot; {ep.year}
                      </p>
                      <p className="text-[#e8d5b0] text-sm">{ep.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
           TV APPEARANCES
      ══════════════════════════════════ */}
      <section id="tv" className="py-28 px-6 bg-[#090807]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Televisión">Apariciones en TV</SectionTitle>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {TV_SHOWS.map((show) => (
              <div
                key={show.show}
                className="bg-[#1c1812] border border-[#2e2818] p-6 flex flex-col hover:border-[#c8922a]/30 transition-colors"
              >
                <p className="text-[#c8922a] text-[10px] tracking-[0.3em] uppercase mb-1">
                  {show.channel} &middot; {show.year}
                </p>
                <h3 className="font-serif text-2xl text-[#e8d5b0] mb-3">
                  {show.show}
                </h3>
                <p className="text-[#a09070] text-sm leading-relaxed mb-5 flex-1">
                  {show.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {show.artists.map((a) => (
                    <span
                      key={a}
                      className="text-[10px] border border-[#2e2818] text-[#5a4a30] px-2 py-1 tracking-wider"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Artists marquee-style */}
          <div className="text-center">
            <p className="text-[#3a3020] tracking-[0.35em] uppercase text-[10px] mb-6">
              Ha compartido escenario con
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {STAGE_ARTISTS.map((artist) => (
                <span
                  key={artist}
                  className="font-serif italic text-[#a09070] text-sm border-b border-[#2e2818] pb-px"
                >
                  {artist}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
           SERVICES
      ══════════════════════════════════ */}
      <section id="servicios" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Disponible para">Servicios</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured: Banda Covers */}
            <div className="bg-[#1c1812] border border-[#c8922a]/25 p-8 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#c8922a]/20 border-r-transparent" />

              <p className="text-[#c8922a] tracking-[0.3em] uppercase text-[10px] mb-2">
                Servicio principal
              </p>
              <h3 className="font-serif text-3xl text-[#e8d5b0] mb-4">
                Banda Covers
              </h3>
              <p className="text-[#a09070] leading-relaxed text-sm mb-6">
                Majo Gutierrez y su banda ofrecen un show de covers de alta
                calidad con un repertorio que abarca los mejores clásicos del
                Blues, Rock &amp; Roll e Indie Pop. Una experiencia musical
                única con la energía y versatilidad que solo ella puede ofrecer.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Repertorio personalizable",
                  "Equipo técnico profesional",
                  "Sonido en vivo de alta calidad",
                  "Adaptable a diferentes espacios y formatos",
                  "Show con puesta en escena completa",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#a09070]"
                  >
                    <DiamondIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="inline-block bg-[#c8922a] text-[#0d0b08] px-7 py-3 text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#e8b84b] transition-colors"
              >
                Solicitar Cotización
              </a>
            </div>

            {/* Other services */}
            <div className="space-y-4">
              {SERVICES_EXTRA.map((s) => (
                <div
                  key={s.title}
                  className="bg-[#1c1812] border border-[#2e2818] p-5 hover:border-[#c8922a]/25 transition-colors group"
                >
                  <h4 className="text-[#e8d5b0] text-sm font-bold mb-1 group-hover:text-[#c8922a] transition-colors tracking-wide">
                    {s.title}
                  </h4>
                  <p className="text-[#5a4a30] text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}

              {/* Quick contact prompt */}
              <div className="bg-[#0d0b08] border border-[#3a3020] p-5 text-center">
                <p className="text-[#5a4a30] text-xs tracking-wider mb-3">
                  Preguntas sobre disponibilidad o tarifas
                </p>
                <a
                  href="mailto:majogutierrezoficial@gmail.com"
                  className="text-[#c8922a] text-xs tracking-[0.2em] uppercase border-b border-[#c8922a]/30 pb-px hover:border-[#c8922a] transition-colors"
                >
                  Escríbenos &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
           CONTACT
      ══════════════════════════════════ */}
      <section
        id="contacto"
        className="py-28 px-6 bg-[#090807] border-t border-[#1e1a12]"
      >
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle label="Hablemos">Contacto</SectionTitle>

          <p className="text-[#a09070] text-sm leading-relaxed mb-10 max-w-lg mx-auto">
            Para bookings, cotizaciones de banda covers, prensa y cualquier otra
            consulta, no dudes en escribir directamente.
          </p>

          <a
            href="mailto:majogutierrezoficial@gmail.com"
            className="inline-block bg-[#c8922a] text-[#0d0b08] px-10 py-4 text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#e8b84b] transition-colors mb-4"
          >
            majogutierrezoficial@gmail.com
          </a>
          <p className="text-[#3a3020] text-[10px] tracking-widest uppercase">
            Respuesta en 24&ndash;48 horas
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
           FOOTER
      ══════════════════════════════════ */}
      <footer className="bg-[#0d0b08] border-t border-[#1e1a12] px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-serif italic text-[#c8922a] text-base">
              Majo Gutierrez
            </p>
            <p className="text-[#3a3020] text-[10px] tracking-widest uppercase mt-1">
              Cantante &amp; Guitarrista
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[#3a3020] hover:text-[#c8922a] transition-colors text-[10px] tracking-[0.2em] uppercase"
              >
                {label}
              </a>
            ))}
          </div>

          <p className="text-[#2e2818] text-[10px] tracking-wider">
            &copy; {new Date().getFullYear()} Majo Gutierrez
          </p>
        </div>
      </footer>
    </main>
  );
}
