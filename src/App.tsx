import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  PlayCircle,
  ShieldCheck,
  Upload,
  Star,
  Calendar,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Crown,
  ArrowRightCircle,
} from "lucide-react";

import { supabase } from "./lib/supabaseClient";


/* CONFIG SIMPLE */

const LINKS = {
  INSTAGRAM: "https://www.instagram.com/editedbyhugo_/",
  TIKTOK: "https://www.tiktok.com/@hugo.monteur.video",
  YOUTUBE: "https://www.youtube.com/@hugo.monteur.vid%C3%A9o",
};

const CONTACT = {
  EMAIL: "bensalahhugo06@gmail.com",
  PHONE: "06 88 32 97 30",
};

/* APP */

export default function App() {
  const [showTopCTA, setShowTopCTA] = useState(false); // juste pour éviter les warnings futurs, on garde propre

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Offers />
        <Portfolio />
        <Results />
        <Reviews />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

/* HEADER */

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Crown className="h-6 w-6 text-yellow-500" />
            <span className="font-semibold tracking-wide text-neutral-50">
              editedbyhugo
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            {[
              ["Accueil", "#top"],
              ["Offres", "#offres"],
              ["Portfolio", "#portfolio"],
              ["Avis", "#avis"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={LINKS.INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex rounded-xl border border-neutral-800 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900"
            >
              Voir le portfolio
            </a>
            <a
              href={LINKS.INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400"
            >
              Essai gratuit sur Instagram
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* HERO */

function Hero() {
  const gradientTitle = useMemo(
    () => ({
      background: "linear-gradient(180deg, #FACC15 0%, #A855F7 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    }),
    []
  );

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl"
          >
            <span style={gradientTitle}>Des montages qui captent,</span>
            <br />
            des vidéos qui convertissent.
          </motion.h1>

          <p className="mt-5 max-w-xl text-neutral-300">
            Je monte pour les créateurs, coachs et entrepreneurs qui veulent
            déléguer le montage, garder leur style et publier des vidéos qui
            accrochent dès la première seconde.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={LINKS.INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-400"
            >
              Réserver un montage
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800 px-6 py-3 text-neutral-200 hover:bg-neutral-900"
            >
              Voir le portfolio
              <PlayCircle className="h-5 w-5" />
            </a>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-300 sm:max-w-md">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-yellow-500" />
              Rendu propre & dynamique
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-yellow-500" />
              Délais rapides, option 24 h
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-yellow-500" />
              2 révisions incluses
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              Pensé pour Reels, TikTok, Shorts
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-2xl"
        >
          <div className="mb-3 flex items-center justify-between text-xs text-neutral-400">
            <span className="uppercase tracking-[0.18em]">Présentation</span>
            <span className="flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              editedbyhugo
            </span>
          </div>
          <p className="text-sm text-neutral-300">
            Tu filmes, tu m&apos;envoies, je gère : découpe intelligente, rythme
            maîtrisé, sous-titres impactants, identité respectée. Tu postes sans
            perdre des heures dans la timeline.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
            <Stat label="Délais standard" value="48–72 h" />
            <Stat label="Option 24 h" value="sur demande" />
            <Stat label="Révisions" value="x2 incluses" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* TRUST BAR (sans remboursement) */

function TrustBar() {
  return (
    <div className="border-y border-neutral-900 bg-neutral-950/90">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-yellow-500" />
          Délais rapides et annoncés dès le départ
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-yellow-500" />
          2 révisions incluses
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          Option express 24 h disponible
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-yellow-500" />
          Process clair & communication directe
        </div>
      </div>
    </div>
  );
}

/* ABOUT */

function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white">
            editedbyhugo, ton monteur dédié.
          </h2>
          <p className="mt-4 text-neutral-300">
            Je travaille avec des créateurs, coachs et entrepreneurs qui
            publient régulièrement et veulent un rendu stable, propre, orienté
            résultat, sans perdre leur style.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-300 text-sm">
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              Workflow simple : DM, brief, upload, validation.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              Rendu premium : lisible sans son, codes socials maîtrisés.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              Communication directe avec moi, pas d&apos;intermédiaires.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-sm text-neutral-300">
          <p>
            Objectif : que tu te concentres sur le contenu et le business. Je
            m&apos;occupe du montage pour que chaque vidéo renforce ton image et
            donne envie de suivre, cliquer ou réserver.
          </p>
          <p className="mt-4 text-neutral-400">— Hugo / editedbyhugo</p>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-3">
      <p className="text-[10px] uppercase tracking-widest text-neutral-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

/* OFFRES (SUR MESURE, PAS DE PRIX) */

function Offers() {
  return (
    <section
      id="offres"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-semibold text-white">Offres</h2>
        <p className="text-sm text-neutral-400">
          Vidéo unique, pack multi-contenus ou abonnement mensuel : tout est
          construit sur mesure selon ton volume et tes objectifs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <OfferCard
          title="Vidéo unique"
          description="Parfait pour tester le flow : un montage propre, dynamique, calibré pour ton audience."
        />
        <OfferCard
          title="Pack 3 vidéos"
          highlight="Best-seller"
          description="3 contenus cohérents pour enchaîner une série, valider un angle ou accompagner un lancement."
        />
        <OfferCard
          title="Abonnement mensuel"
          description="Pour les créateurs sérieux : volume défini ensemble, priorité planning et suivi continu."
        />
      </div>
    </section>
  );
}

function OfferCard({
  title,
  description,
  highlight,
}: {
  title: string;
  description: string;
  highlight?: string;
}) {
  return (
    <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      {highlight && (
        <div className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1 text-xs font-semibold text-neutral-900 shadow">
          {highlight}
        </div>
      )}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-neutral-300">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        <li className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-yellow-500" />
          Rendu sur mesure selon ton univers
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-yellow-500" />
          Optimisé Reels, TikTok, Shorts
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-yellow-500" />
          Option express 24 h disponible
        </li>
      </ul>
      <a
        href={LINKS.INSTAGRAM}
        target="_blank"
        rel="noreferrer"
        className="mt-6 block w-full rounded-xl bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-400"
      >
        Discuter sur Instagram
      </a>
    </div>
  );
}

/* PORTFOLIO : utilise tes 3 vidéos dans public/portfolio */

function Portfolio() {
  const videos = [
    {
      src: "/portfolio/video-courte-style-1.mp4",
      label: "Format court • Style 1",
    },
    {
      src: "/portfolio/video-courte-style-2.mp4",
      label: "Format court • Style 2",
    },
    {
      src: "/portfolio/video-longue-1.mp4",
      label: "Format long",
    },
  ];

  return (
    <section
      id="portfolio"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-semibold text-white">Portfolio</h2>
        <p className="text-sm text-neutral-400">
          Extraits réels : rythme, découpes, sous-titres, habillage. Le rendu
          que tu peux attendre.
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {videos.map((v, i) => (
          <div
            key={i}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-3"
          >
            <VideoPlayer src={v.src} label={v.label} />
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoPlayer({ src, label }: { src: string; label: string }) {
  const isLong = label.toLowerCase().includes("long");
  const ratio = isLong ? "16 / 9" : "9 / 16";

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-black"
      style={{ aspectRatio: ratio }}
    >
      <video
        controls
        playsInline
        className="h-full w-full object-contain"
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute bottom-2 left-2 rounded-md bg-neutral-950/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-neutral-100">
        {label}
      </div>
    </div>
  );
}

/* RÉSULTATS SIMPLES */

function Results() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-sm text-neutral-300">
        <ResultCard title="Pensé pour l'attention">
          Hooks rapides, cuts propres, lisible sans son : conçu pour scroller
          moins et regarder plus.
        </ResultCard>
        <ResultCard title="Aligné à ton branding">
          Couleurs, typographies, ton et rythme adaptés à ton univers.
        </ResultCard>
        <ResultCard title="Focus business">
          Le montage sert ton offre, ton image et tes appels à l&apos;action.
        </ResultCard>
      </div>
    </section>
  );
}

function ResultCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-yellow-500">
        {title}
      </p>
      <p className="mt-2 text-neutral-300 text-sm">{children}</p>
    </div>
  );
}

/* AVIS (local, pas de BDD) */

function Reviews() {
  const [reviews, setReviews] = useState<
    { id: number; name: string; message: string; created_at: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  // Récupérer les avis au chargement
  React.useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setReviews(
          data.map((r: any) => ({
            id: r.id,
            name: r.name,
            message: r.message,
            created_at: r.created_at,
          }))
        );
      }
      setLoading(false);
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    setSubmitting(true);

    const { data, error } = await supabase
      .from("reviews")
      .insert({
        name: form.name.trim(),
        message: form.message.trim(),
      })
      .select()
      .single();

    setSubmitting(false);

    if (error || !data) {
      console.error(error);
      alert("Impossible d'enregistrer ton avis. Réessaie plus tard.");
      return;
    }

    setReviews((prev) => [
      {
        id: data.id,
        name: data.name,
        message: data.message,
        created_at: data.created_at,
      },
      ...prev,
    ]);
    setForm({ name: "", message: "" });
  };

  return (
    <section
      id="avis"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-semibold text-white">Avis clients</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.6fr,1.4fr]">
        {/* Liste des avis */}
        <div className="space-y-3">
          {loading && (
            <p className="text-sm text-neutral-500">
              Chargement des avis...
            </p>
          )}

          {!loading && reviews.length === 0 && (
            <p className="text-sm text-neutral-500">
              Aucun avis publié pour l&apos;instant. Tu peux être le premier.
            </p>
          )}

          {reviews.map((r) => (
            <figure
              key={r.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 text-sm"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="font-semibold text-white">
                    {r.name}
                  </span>
                </div>
                <span className="text-[10px] text-neutral-500">
                  {new Date(r.created_at).toLocaleDateString("fr-FR")}
                </span>
              </div>
              <p className="mt-1 text-neutral-300 whitespace-pre-line">
                {r.message}
              </p>
            </figure>
          ))}
        </div>

        {/* Formulaire avis */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-sm"
        >
          <h3 className="text-lg font-semibold text-white mb-1">
            Laisser un avis
          </h3>
          <p className="text-xs text-neutral-500 mb-3">
            Ton avis s&apos;affichera directement sur cette page.
          </p>
          <input
            value={form.name}
            onChange={(e) =>
              setForm((f) => ({ ...f, name: e.target.value }))
            }
            className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ton pseudo / @"
            required
          />
          <textarea
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            className="mt-3 w-full min-h-[100px] rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ton retour sur le montage, la com', la qualité..."
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className="mt-4 w-full rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-400 disabled:opacity-50"
          >
            {submitting ? "Envoi..." : "Publier mon avis"}
          </button>
        </form>
      </div>
    </section>
  );
}

/* FAQ : ACCORDÉON AVEC FLÈCHES */

function FAQ() {
  const items = [
    {
      q: "Comment on commence ?",
      a: "Tu m'écris en DM sur Instagram (@editedbyhugo_), on valide le besoin, le style, le volume et le délai.",
    },
    {
      q: "Quels formats tu gères ?",
      a: "Reels, TikTok, YouTube Shorts, formats horizontaux et carrés. Sous-titres intégrés et exports optimisés.",
    },
    {
      q: "Option express 24 h ?",
      a: "Oui, possible selon la charge. On confirme le délai ensemble en amont en DM.",
    },
    {
      q: "Comment j'envoie mes rushs ?",
      a: "Via Drive ou Wetransfer, lien partagé en DM ou par mail.",
    },
    {
      q: "Tu respectes mon style ?",
      a: "Oui. Tu m'envoies des références, je cale le montage sur ton ton, ton rythme et ton branding.",
    },
  ];

  return (
    <section
      id="faq"
      className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <h2 className="mb-6 text-center text-3xl font-semibold text-white">
        FAQ
      </h2>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 divide-y divide-neutral-800">
        {items.map((item, i) => (
          <details
            key={i}
            className="group cursor-pointer"
          >
            <summary className="flex items-center justify-between px-5 py-4 text-sm text-white list-none">
              <span>{item.q}</span>
              <ArrowRightCircle className="h-4 w-4 text-neutral-500 transition-transform group-open:rotate-90" />
            </summary>
            <div className="px-5 pb-4 text-sm text-neutral-300">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* CONTACT : UNIQUEMENT DM / MAIL / TEL */

function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-sm">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Discuter d&apos;un montage ou d&apos;un pack
          </h2>
          <p className="text-neutral-300 mb-4">
            Tout se passe en direct avec moi. Tu m&apos;écris, on valide le
            besoin, le budget, le planning et on lance.
          </p>
          <a
            href={LINKS.INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
          >
            M&apos;écrire sur Instagram
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-5 space-y-2 text-neutral-300">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-yellow-500" />
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="hover:text-indigo-400"
              >
                {CONTACT.EMAIL}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-yellow-500" />
              <a
                href={`tel:${CONTACT.PHONE.replace(/\s/g, "")}`}
                className="hover:text-indigo-400"
              >
                {CONTACT.PHONE}
              </a>
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs text-neutral-400">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
            <h3 className="text-sm font-semibold text-white mb-1">
              Comment ça se passe concrètement ?
            </h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>DM sur Instagram avec ton besoin.</li>
              <li>On cale le format, le style, le volume et le délai.</li>
              <li>Tu envoies tes rushs via Drive / Wetransfer.</li>
              <li>Je livre, tu demandes tes ajustements, on finalise.</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-900 p-4 flex items-start gap-3">
            <Upload className="h-5 w-5 text-yellow-500 mt-0.5" />
            <p>
              Module d&apos;upload direct possible plus tard. Pour l&apos;instant, les
              liens Drive / Wetransfer suffisent largement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* FOOTER + CTA FLOTTANT */

function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col gap-3 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Crown className="h-4 w-4 text-yellow-500" />
          <span>editedbyhugo • Montage vidéo sur mesure</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={LINKS.INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-indigo-400"
          >
            <Instagram className="h-3 w-3" /> Instagram
          </a>
          <a
            href={LINKS.TIKTOK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-indigo-400"
          >
            <PlayCircle className="h-3 w-3" /> TikTok
          </a>
          <a
            href={LINKS.YOUTUBE}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-indigo-400"
          >
            <Youtube className="h-3 w-3" /> YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <a
      href={LINKS.INSTAGRAM}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-500/30 hover:bg-indigo-400"
    >
      Discuter sur Instagram
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
