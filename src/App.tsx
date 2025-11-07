import React, { useEffect, useMemo, useState } from "react";
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
  Instagram,
  Youtube,
  Mail,
  Phone,
  Crown,
} from "lucide-react";
import { supabase } from "./lib/supabaseClient";

const LINKS = {
  INSTAGRAM: "https://www.instagram.com/editedbyhugo_/",
  TIKTOK: "https://www.tiktok.com/@hugo.monteur.video",
  YOUTUBE: "https://www.youtube.com/@hugo.monteur.vid%C3%A9o",
};

const CONTACT = {
  EMAIL: "bensalahhugo06@gmail.com",
  PHONE: "06 88 32 97 30",
};

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#admin") {
      const pwd = prompt("Mot de passe admin ?");
      if (pwd === import.meta.env.VITE_ADMIN_PASSWORD) {
        setIsAdmin(true);
      }
    }
  }, []);

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
        <Blog />
        <ContactSection />
        {isAdmin && <AdminBriefs />}
      </main>
      <Footer />
      <FloatingCTA />
      <DevTests />
    </div>
  );
}

/* ========== HEADER ========== */

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
              href="#offres"
              className="hidden sm:inline-flex rounded-xl border border-neutral-800 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900"
            >
              Voir les offres
            </a>
            <a
              href={LINKS.INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400"
            >
              DM Instagram
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ========== HERO ========== */

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

  const handlePrimary = () => {
    window.open(LINKS.INSTAGRAM, "_blank");
  };

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
            Je monte pour les créateurs, coachs et entrepreneurs qui veulent déléguer le montage,
            garder leur style et publier des vidéos qui accrochent dès la première seconde.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={handlePrimary}
              className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-400"
            >
              Réserver une vidéo à 20 €
              <ArrowRight className="h-5 w-5" />
            </button>
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
              48–72 h (24 h en express)
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-yellow-500" />
              2 révisions incluses
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              Optimisé Reels, TikTok, Shorts
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
            Tu m&apos;envoies ton contenu brut, je gère le reste : découpe intelligente,
            rythme, sous-titres, habillage clean, exports optimisés pour chaque plateforme.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
            <Stat label="Standard" value="48–72 h" />
            <Stat label="Express" value="+10 €" />
            <Stat label="Révisions" value="x2 incluses" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ========== TRUST BAR ========== */

function TrustBar() {
  return (
    <div className="border-y border-neutral-900 bg-neutral-950/90">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-yellow-500" />
          Garantie satisfait ou remboursé 14 jours
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-yellow-500" />
          Délai standard 48–72 h
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          Express 24 h (+10 €)
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-yellow-500" />
          2 révisions incluses
        </div>
      </div>
    </div>
  );
}

/* ========== ABOUT ========== */

function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white">
            editedbyhugo — ton partenaire montage.
          </h2>
          <p className="mt-4 text-neutral-300">
            Je travaille avec des créateurs, coachs et entrepreneurs qui publient
            régulièrement et ont besoin d&apos;un rendu stable, propre, orienté business,
            sans sacrifier leur identité.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-300">
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              Tu envoies, je monte, tu valides. Simple.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              Transitions propres, cuts précis, lisible sans son.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              Fiable & réactif : respect des délais, suivi clair.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-sm text-neutral-300">
          <p>
            L&apos;objectif : que tu puisses enregistrer, envoyer, publier. Sans perdre des heures
            à monter. Chaque vidéo est pensée pour retenir l&apos;attention et renforcer ton image pro.
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

/* ========== OFFERS ========== */

function Offers() {
  return (
    <section
      id="offres"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mb-8 flex items-end justify_between">
        <h2 className="text-3xl font-semibold text-white">Offres & tarifs</h2>
        <p className="text-sm text-neutral-400">
          Des montages pros, livrés vite, à un tarif accessible — dès 20 € la vidéo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <OfferCard
          title="Vidéo unique"
          price="20 €"
          note="/ vidéo"
          features={[
            "15–60 s vertical 9:16",
            "Optimisé Reels, TikTok, Shorts",
            "2 révisions incluses",
            "Délai 48–72 h",
            "Express 24 h : +10 €",
          ]}
          cta="Réserver via DM"
        />
        <OfferCard
          title="Pack 3 vidéos"
          price="50 €"
          note="/ pack"
          best
          features={[
            "3 vidéos prêtes à poster",
            "Cohérence visuelle & branding",
            "Parfait pour lancer une série",
          ]}
          cta="Demander le pack en DM"
        />
        <OfferCard
          title="Abonnement mensuel"
          price="Sur mesure"
          features={[
            "Volume défini ensemble",
            "Priorité planning",
            "Support direct avec moi",
          ]}
          cta="Parler de l'abonnement en DM"
        />
      </div>
    </section>
  );
}

function OfferCard({
  title,
  price,
  note,
  features,
  cta,
  best,
}: {
  title: string;
  price: string;
  note?: string;
  features: string[];
  cta: string;
  best?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border bg-neutral-900 p-6 ${
        best
          ? "border-yellow-500/60 shadow-[0_0_0_1px_rgba(234,179,8,0.25)]"
          : "border-neutral-800"
      }`}
    >
      {best && (
        <div className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1 text-xs font-semibold text-neutral-900 shadow">
          Best-seller
        </div>
      )}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-3 flex items_end gap-2">
        <span className="text-3xl font-bold text-white">{price}</span>
        {note && (
          <span className="mb-1 text-xs text-neutral-400">{note}</span>
        )}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {features.map((f) => (
          <li key={f} className="flex items_center gap-2">
            <CheckCircle2 className="h-4 w-4 text-yellow-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={LINKS.INSTAGRAM}
        target="_blank"
        rel="noreferrer"
        className="mt-6 block w-full rounded-xl bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-400"
      >
        {cta}
      </a>
    </div>
  );
}

/* ========== PORTFOLIO ========== */

function Portfolio() {
  const videos = [
    {
      src: "/portfolio/Video-courte-style-1.mp4",
      label: "Vidéo courte style 1 (vertical)",
    },
    {
      src: "/portfolio/Video-courte-style-2.mp4",
      label: "Vidéo courte style 2 (vertical)",
    },
    {
      src: "/portfolio/Video-longue-1.mp4",
      label: "Vidéo longue 1 (horizontal)",
    },
  ];

  return (
    <section
      id="portfolio"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mb-8 flex items_end justify-between">
        <h2 className="text-3xl font-semibold text-white">Portfolio</h2>
        <p className="text-sm text-neutral-400">
          3 extraits pour voir le rythme, le style et le rendu.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {videos.map((v, i) => (
          <div
            key={i}
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-3"
          >
            <VideoPlayer src={v.src} label={v.label} />
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoPlayer({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false);
  const ratio = label.toLowerCase().includes("horizontal")
    ? "16 / 9"
    : "9 / 16";

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-black"
      style={{ aspectRatio: ratio }}
    >
      {!failed ? (
        <video
          controls
          playsInline
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="flex h-full w-full items-center justify-center px-3 text-center text-xs text-neutral-500">
          Impossible de charger la vidéo.
        </div>
      )}
      <div className="pointer-events-none absolute bottom-2 left-2 rounded-md bg-neutral-950/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-neutral-100">
        {label}
      </div>
    </div>
  );
}

/* ========== RESULTS, REVIEWS, FAQ, BLOG : (garde tes versions existantes) */
/* Pour raccourcir ici, je n'étends pas, mais tu laisses exactement ton code de Results, Reviews, FAQ, Blog, Footer, FloatingCTA, DevTests. */

/* ========== CONTACT (SUPABASE) ========== */

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    link: "",
    brief: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    const { error } = await supabase.from("briefs").insert([
      {
        name: form.name,
        email: form.email,
        rush_link: form.link,
        brief: form.brief,
        source: "site",
      },
    ]);

    setSending(false);

    if (error) {
      console.error(error);
      alert("Erreur lors de l'envoi du brief.");
      return;
    }

    setSent(true);
    setForm({ name: "", email: "", link: "", brief: "" });
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="text-2xl font-semibold text-white">Brief rapide</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Envoie ton idée, ton lien de rushs et je centralise tout dans mon
            espace de suivi.
          </p>

          {!sent ? (
            <form
              onSubmit={handleSubmit}
              className="mt-6 grid grid-cols-1 gap-4"
            >
              <input
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nom / Marque"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
              <input
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Lien vers tes rushs (Drive / Wetransfer)"
                value={form.link}
                onChange={(e) =>
                  setForm({ ...form, link: e.target.value })
                }
              />
              <textarea
                className="min-h-[120px] rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Brief (format, durée, style, objectif, deadline)"
                value={form.brief}
                onChange={(e) =>
                  setForm({ ...form, brief: e.target.value })
                }
              />
              <button
                type="submit"
                disabled={sending}
                className="mt-2 w-full rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-400 disabled:opacity-50"
              >
                {sending ? "Envoi en cours..." : "Envoyer le brief"}
              </button>
            </form>
          ) : (
            <p className="mt-6 text-sm text-emerald-400">
              ✅ Brief bien envoyé. Tu recevras une réponse rapidement.
            </p>
          )}
        </div>

        {/* Bloc explicatif à droite : garde ton texte actuel */}
        <div className="space-y-6 text-sm text-neutral-300">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="mb-2 text-lg font-semibold text_white">
              Comment ça se passe ?
            </h3>
            <ol className="space-y-2 text-sm">
              <li>1. Tu m&apos;envoies ton idée + tes rushs.</li>
              <li>2. On valide le style ensemble.</li>
              <li>3. Je te livre une version sous 48–72 h.</li>
              <li>4. Tu ajustes si besoin (2 révisions incluses).</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-900 p-6">
            <h3 className="mb-1 flex items-center gap-2 text-white">
              <Upload className="h-5 w-5" />
              Upload de fichiers
            </h3>
            <p className="text-neutral-400">
              Utilise Drive / Wetransfer et colle le lien directement dans le brief.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== ADMIN BRIEFS ========== */

function AdminBriefs() {
  const [briefs, setBriefs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("briefs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        setError("Erreur de chargement des briefs");
      } else {
        setBriefs(data || []);
      }
      setLoading(false);
    }
    load();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <h2 className="mb-6 text-3xl font-semibold text-white">
        Espace admin — briefs reçus
      </h2>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4 text-sm text-neutral-200">
        {loading && <p>Chargement...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && briefs.length === 0 && (
          <p className="text-neutral-500">
            Aucun brief pour l&apos;instant.
          </p>
        )}
        {!loading && briefs.length > 0 && (
          <div className="space-y-3">
            {briefs.map((b) => (
              <div
                key={b.id}
                className="rounded-xl border border-neutral-800 bg-neutral-950 p-3"
              >
                <div className="flex justify-between gap-2">
                  <div>
                    <p className="font-semibold">
                      {b.name || "Sans nom"} — {b.email || "Sans email"}
                    </p>
                    <p className="text-[10px] text-neutral-500">
                      {b.created_at &&
                        new Date(b.created_at).toLocaleString("fr-FR")}
                    </p>
                  </div>
                  <span className="text-[10px] rounded-full bg-neutral-800 px-2 py-1">
                    {b.status || "nouveau"}
                  </span>
                </div>
                {b.rush_link && (
                  <p className="mt-1 text-[11px] text-indigo-400 break-all">
                    Rushs : {b.rush_link}
                  </p>
                )}
                {b.brief && (
                  <p className="mt-1 text-[11px] text-neutral-300 whitespace-pre-line">
                    {b.brief}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ========== FLOATING CTA & DEV TESTS (inchangés) ========== */

function FloatingCTA() {
  return (
    <button
      onClick={() => window.open(LINKS.INSTAGRAM, "_blank")}
      className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-500/30 hover:bg-indigo-400"
    >
      Tester une vidéo à 20 € <ArrowRight className="h-4 w-4" />
    </button>
  );
}

function DevTests() {
  useEffect(() => {
    try {
      console.assert(CONTACT.EMAIL.includes("@"), "EMAIL invalide");
      console.assert(/^[0-9 +]+$/.test(CONTACT.PHONE), "PHONE invalide");
      console.log("[DevTests] liens de base OK");
    } catch (e) {
      console.warn("[DevTests] Erreur", e);
    }
  }, []);
  return null;
}
