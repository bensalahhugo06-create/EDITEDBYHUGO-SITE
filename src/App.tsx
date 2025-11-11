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
  Calendar,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Crown,
} from "lucide-react";
import { supabase } from "./lib/supabaseClient";

/* ========= CONFIG LIENS ========= */

const LINKS = {
  STRIPE_ONE: import.meta.env.VITE_STRIPE_ONE || "#",
  STRIPE_PACK3: import.meta.env.VITE_STRIPE_PACK3 || "#",
  STRIPE_EXPRESS: import.meta.env.VITE_STRIPE_EXPRESS || "#",
  CALENDLY: import.meta.env.VITE_CALENDLY_LINK || "https://www.instagram.com/editedbyhugo_/",
  INSTAGRAM: "https://www.instagram.com/editedbyhugo_/",
  TIKTOK: "https://www.tiktok.com/@hugo.monteur.video",
  YOUTUBE: "https://www.youtube.com/@hugo.monteur.vid%C3%A9o",
};

const CONTACT = {
  EMAIL: "bensalahhugo06@gmail.com",
  PHONE: "06 88 32 97 30",
};

/* ========= APP ========= */

export default function App() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Accès admin simple via hash + mot de passe env
  useEffect(() => {
    if (window.location.hash === "#admin") {
      const pwd = prompt("Mot de passe admin ?");
      if (pwd && pwd === import.meta.env.VITE_ADMIN_PASSWORD) {
        setIsAdmin(true);
      } else {
        alert("Accès refusé.");
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header onCTA={() => setShowCheckout(true)} />
      <main>
        <Hero onCTA={() => setShowCheckout(true)} />
        <TrustBar />
        <About />
        <Offers />
        <Portfolio />
        <Results />
        <Reviews />
        <FAQ />
        <Blog />
        <ContactPayUpload />
        {isAdmin && <AdminBriefs />}
      </main>
      <Footer />
      <FloatingCTA onClick={() => setShowCheckout(true)} />
      {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
      <DevTests />
    </div>
  );
}

/* ========= HEADER ========= */

function Header({ onCTA }: { onCTA: () => void }) {
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
            <button
              onClick={onCTA}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400"
            >
              Essai gratuit <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ========= HERO ========= */

function Hero({ onCTA }: { onCTA: () => void }) {
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
            Je monte pour les créateurs, coachs et entrepreneurs qui veulent déléguer le montage,
            garder leur style et publier des vidéos qui accrochent dès la première seconde.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={LINKS.STRIPE_ONE}
              className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-400"
            >
              Réserver une vidéo à 20 € <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800 px-6 py-3 text-neutral-200 hover:bg-neutral-900"
            >
              Voir le portfolio <PlayCircle className="h-5 w-5" />
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
            Tu m&apos;envoies ton contenu brut, je gère découpe, rythme, sous-titres, habillage clean
            et formats optimisés. Tu récupères une vidéo prête à poster qui vend ton message.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
            <Stat label="Standard" value="48–72 h" />
            <Stat label="Express 24 h" value="+10 €" />
            <Stat label="Révisions" value="x2 incluses" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ========= TRUST BAR ========= */

function TrustBar() {
  return (
    <div className="border-y border-neutral-900 bg-neutral-950/90">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-yellow-500" />
          Satisfait ou remboursé 14 jours
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

/* ========= ABOUT ========= */

function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white">
            editedbyhugo, partenaire montage pour ton contenu.
          </h2>
          <p className="mt-4 text-neutral-300">
            Je travaille avec des créateurs, coachs et entrepreneurs qui publient
            régulièrement et veulent un rendu stable, propre, orienté business,
            sans perdre leur style.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-300">
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              Workflow simple : tu envoies, je monte, tu valides.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              Transitions propres, sous-titres impactants, lisible sans son.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              Fiable & réactif : délais respectés, communication claire.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-sm text-neutral-300">
          <p>
            Objectif : te libérer du montage. Tu filmes, tu m&apos;envoies, tu publies. Chaque vidéo est
            pensée pour retenir l&apos;attention et renforcer ton image pro.
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

/* ========= OFFERS ========= */

function Offers() {
  return (
    <section
      id="offres"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-semibold text-white">Offres & tarifs</h2>
        <p className="text-sm text-neutral-400">
          Des montages pros, livrés vite, à un tarif accessible dès <span className="text-white">20 €</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <OfferCard
          title="Vidéo unique"
          price="20 €"
          note="/ vidéo"
          features={[
            "15–60 s vertical (9:16)",
            "Optimisé Reels, TikTok, Shorts",
            "2 révisions incluses",
            "Délai 48–72 h",
          ]}
          link={LINKS.STRIPE_ONE}
          cta="Réserver à 20 €"
        />
        <OfferCard
          title="Pack 3 vidéos"
          price="50 €"
          note="/ pack"
          best
          features={[
            "3 vidéos prêtes à poster",
            "Cohérence visuelle & branding",
            "Idéal pour une série de contenus",
            "Priorité légère sur le planning",
          ]}
          link={LINKS.STRIPE_PACK3}
          cta="Prendre le pack 3 vidéos"
        />
        <OfferCard
          title="Abonnement mensuel"
          price="Sur mesure"
          features={[
            "Volume défini ensemble",
            "Priorité planning",
            "Support direct avec moi",
          ]}
          link={LINKS.CALENDLY}
          cta="Parler abonnement"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-neutral-400">
        <span className="flex items-center gap-2">
          <Clock className="h-3 w-3 text-yellow-500" />
          Option Express 24 h : +10 € via lien dédié
        </span>
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
  link,
  best,
}: {
  title: string;
  price: string;
  note?: string;
  features: string[];
  cta: string;
  link: string;
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
      <div className="mt-3 flex items-end gap-2">
        <span className="text-3xl font-bold text-white">{price}</span>
        {note && <span className="mb-1 text-xs text-neutral-400">{note}</span>}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-yellow-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={link || LINKS.INSTAGRAM}
        target="_blank"
        rel="noreferrer"
        className="mt-6 block w-full rounded-xl bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-400"
      >
        {cta}
      </a>
    </div>
  );
}

/* ========= PORTFOLIO ========= */

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-semibold text-white">Portfolio</h2>
        <p className="text-sm text-neutral-400">
          Extraits de montages. Remplace les blocs par tes vidéos finales.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          {
            label: "Clip 1",
            link: LINKS.TIKTOK,
          },
          {
            label: "Clip 2",
            link: LINKS.INSTAGRAM,
          },
          {
            label: "Clip 3",
            link: LINKS.YOUTUBE,
          },
        ].map((v) => (
          <a
            key={v.label}
            href={v.link}
            target="_blank"
            rel="noreferrer"
            className="group relative flex h-52 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/80 hover:border-indigo-500/60 transition-colors"
          >
            <PlayCircle className="h-10 w-10 text-neutral-300 group-hover:text-indigo-400" />
            <span className="absolute bottom-3 left-4 text-xs text-neutral-400">
              {v.label} • voir sur le réseau
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ========= RESULTS (optionnel métriques) ========= */

function Results() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3 text-sm text-neutral-300">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
          <p className="text-yellow-400 text-xs font-semibold uppercase">
            Impact
          </p>
          <p className="mt-2">
            Montages pensés pour l&apos;accroche 0–3s, le watchtime et le call-to-action.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
          <p className="text-yellow-400 text-xs font-semibold uppercase">
            Cohérence
          </p>
          <p className="mt-2">
            Sous-titres, couleurs, rythme alignés avec ton branding pour un feed pro.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
          <p className="text-yellow-400 text-xs font-semibold uppercase">
            Gain de temps
          </p>
          <p className="mt-2">
            Tu récupères tes heures de montage pour créer, vendre et scaler.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ========= REVIEWS (Supabase) ========= */

type Review = {
  id: number;
  name: string;
  message: string;
  rating: number;
  created_at: string;
};

function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", message: "", rating: 5 });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) setReviews(data as Review[]);
      setLoading(false);
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setSubmitting(true);
    const { data, error } = await supabase
      .from("reviews")
      .insert({
        name: form.name,
        message: form.message,
        rating: form.rating,
      })
      .select()
      .single();

    setSubmitting(false);
    if (error) {
      alert("Erreur lors de l'envoi de l'avis.");
      return;
    }
    if (data) {
      setReviews((prev) => [data as Review, ...prev]);
      setForm({ name: "", message: "", rating: 5 });
    }
  };

  return (
    <section
      id="avis"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <h2 className="text-3xl font-semibold text-white mb-4">Avis clients</h2>
      <p className="text-sm text-neutral-400 mb-6">
        Les avis sont publiés directement ici après envoi. Transparent, simple.
      </p>

      <div className="grid gap-8 md:grid-cols-[2fr,1.4fr]">
        {/* Liste avis */}
        <div className="space-y-3">
          {loading && (
            <p className="text-neutral-500 text-sm">Chargement des avis...</p>
          )}
          {!loading && reviews.length === 0 && (
            <p className="text-neutral-500 text-sm">
              Aucun avis pour l&apos;instant. Tu seras parmi les premiers à laisser le tien.
            </p>
          )}
          {reviews.map((r) => (
            <div
              key={r.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4 text-sm"
            >
              <div className="flex items-center gap-2 mb-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="font-semibold text-white">{r.name}</span>
                <span className="text-xs text-neutral-500">
                  {new Date(r.created_at).toLocaleDateString("fr-FR")}
                </span>
              </div>
              <div className="flex items-center gap-1 text-yellow-500 text-xs mb-1">
                {Array.from({ length: r.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-500" />
                ))}
              </div>
              <p className="text-neutral-300 whitespace-pre-line">
                {r.message}
              </p>
            </div>
          ))}
        </div>

        {/* Form avis */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 space-y-3 text-sm"
        >
          <h3 className="text-white font-semibold mb-1">
            Laisser un avis sur editedbyhugo
          </h3>
          <input
            className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ton nom / pseudo"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
          />
          <textarea
            className="w-full min-h-[90px] rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ton avis (qualité, réactivité, résultat...)"
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            required
          />
          <label className="flex items-center gap-2 text-neutral-300 text-xs">
            Note :
            <select
              className="rounded-md bg-neutral-950 border border-neutral-800 px-2 py-1 text-xs"
              value={form.rating}
              onChange={(e) =>
                setForm((f) => ({ ...f, rating: Number(e.target.value) }))
              }
            >
              {[5, 4, 3].map((n) => (
                <option key={n} value={n}>
                  {n} ⭐
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            disabled={submitting}
            className="mt-1 w-full rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 disabled:opacity-50"
          >
            {submitting ? "Envoi..." : "Publier mon avis"}
          </button>
        </form>
      </div>
    </section>
  );
}

/* ========= FAQ ========= */

function FAQ() {
  const items = [
    {
      q: "Comment t'envoyer mes fichiers ?",
      a: "Tu utilises Drive, Dropbox ou Wetransfer et tu colles le lien dans le brief ou par DM.",
    },
    {
      q: "Quels formats tu gères ?",
      a: "Reels, TikTok, YouTube Shorts, formats carrés, horizontaux, sous-titres intégrés, etc.",
    },
    {
      q: "Et si je ne suis pas satisfait ?",
      a: "2 révisions sont incluses. Si vraiment ça ne colle pas, remboursement possible sous 14 jours.",
    },
    {
      q: "Tu proposes du long format ?",
      a: "Oui, sur mesure. On en parle en direct pour caler le besoin et le tarif.",
    },
  ];
  return (
    <section
      id="faq"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <h2 className="text-3xl font-semibold text-white mb-6">FAQ</h2>
      <div className="grid gap-4 md:grid-cols-2 text-sm text-neutral-300">
        {items.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4"
          >
            <p className="font-semibold text-white mb-1">{item.q}</p>
            <p className="text-neutral-300">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ========= BLOG (placeholder simple) ========= */

function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 text-sm text-neutral-300">
        <p className="text-yellow-500 text-xs font-semibold uppercase mb-1">
          Tips montage & contenu
        </p>
        <p>
          Bientôt : idées hooks, structures de vidéos, exemples avant/après décortiqués.
          Utilise déjà ce site pour réserver une vidéo test.
        </p>
      </div>
    </section>
  );
}

/* ========= CONTACT / PAIEMENT / UPLOAD / BRIEF SECURISE ========= */

function ContactPayUpload() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    link: "",
    brief: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.brief) return;
    setSending(true);

    const { error } = await supabase.from("briefs").insert({
      name: form.name,
      email: form.email,
      rush_link: form.link,
      brief: form.brief,
    });

    setSending(false);
    if (error) {
      console.error(error);
      alert("Erreur lors de l'envoi du brief.");
      return;
    }
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <h2 className="text-3xl font-semibold text-white mb-4">
        Réserver, payer & envoyer ton brief
      </h2>
      <p className="text-sm text-neutral-400 mb-6">
        Choisis ton offre, paye en ligne via lien sécurisé, puis dépose ton brief et tes rushs.
      </p>

      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr]">
        {/* Formulaire brief sécurisé */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-sm">
          <h3 className="text-white font-semibold mb-2">
            Envoyer un brief sécurisé
          </h3>
          {!sent ? (
            <form
              onSubmit={handleSubmit}
              className="mt-4 grid grid-cols-1 gap-3"
            >
              <input
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nom / Marque"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                required
              />
              <input
                type="email"
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                required
              />
              <input
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Lien vers tes rushs (Drive / Wetransfer)"
                value={form.link}
                onChange={(e) =>
                  setForm((f) => ({ ...f, link: e.target.value }))
                }
              />
              <textarea
                className="min-h-[120px] rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Brief (format, durée, style, objectif, deadline)"
                value={form.brief}
                onChange={(e) =>
                  setForm((f) => ({ ...f, brief: e.target.value }))
                }
                required
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
            <p className="mt-4 text-sm text-emerald-400">
              ✅ Brief bien envoyé. Tu recevras une réponse rapidement.
            </p>
          )}
        </div>

        {/* Infos & upload */}
        <div className="space-y-4 text-sm text-neutral-300">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
            <h3 className="mb-2 text-white font-semibold flex items-center gap-2">
              <Calendar className="h-4 w-4 text-yellow-500" />
              Abonnement & projets récurrents
            </h3>
            <p className="text-neutral-300">
              Pour un volume mensuel, clique sur le bouton &quot;Parler abonnement&quot;
              dans les offres ou contacte-moi directement.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
            <h3 className="mb-2 text-white font-semibold flex items-center gap-2">
              <Upload className="h-4 w-4 text-yellow-500" />
              Upload de fichiers
            </h3>
            <p className="text-neutral-400">
              Utilise Drive / Wetransfer et colle le lien dans le brief. Simple, sécurisé.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-yellow-500" />
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="text-sm text-neutral-200 hover:text-indigo-400"
              >
                {CONTACT.EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-yellow-500" />
              <a
                href={`tel:${CONTACT.PHONE.replace(/\s/g, "")}`}
                className="text-sm text-neutral-200 hover:text-indigo-400"
              >
                {CONTACT.PHONE}
              </a>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={LINKS.INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-neutral-300 hover:text-indigo-400"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={LINKS.TIKTOK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-neutral-300 hover:text-indigo-400"
              >
                <PlayCircle className="h-4 w-4" />
                TikTok
              </a>
              <a
                href={LINKS.YOUTUBE}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-neutral-300 hover:text-indigo-400"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========= ADMIN BRIEFS (lecture) ========= */

function AdminBriefs() {
  const [briefs, setBriefs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
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
    })();
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
          <p className="text-neutral-500">Aucun brief pour l&apos;instant.</p>
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

/* ========= FOOTER ========= */

function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} editedbyhugo. Tous droits réservés.</p>
        <p>Montages vidéos pour créateurs, coachs & entrepreneurs.</p>
      </div>
    </footer>
  );
}

/* ========= FLOATING CTA ========= */

function FloatingCTA({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-500/30 hover:bg-indigo-400"
    >
      Tester une vidéo à 20 € <ArrowRight className="h-4 w-4" />
    </button>
  );
}

/* ========= CHECKOUT MODAL ========= */

function CheckoutModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-sm text-neutral-200 space-y-4">
        <h2 className="text-xl font-semibold text-white mb-1">
          Réserver ta vidéo à 20 €
        </h2>
        <p className="text-neutral-400">
          Choisis ton option, tu seras redirigé vers un paiement sécurisé.
          Ensuite, envoie ton brief dans la section dédiée.
        </p>
        <div className="space-y-2">
          <a
            href={LINKS.STRIPE_ONE}
            className="block w-full rounded-xl bg-indigo-500 px-4 py-3 text-center font-semibold text-white hover:bg-indigo-400"
          >
            Vidéo unique • 20 €
          </a>
          <a
            href={LINKS.STRIPE_PACK3}
            className="block w-full rounded-xl bg-neutral-900 px-4 py-3 text-center font-semibold text-white border border-neutral-700 hover:border-indigo-400"
          >
            Pack 3 vidéos • 50 €
          </a>
          <a
            href={LINKS.STRIPE_EXPRESS}
            className="block w-full rounded-xl bg-neutral-900 px-4 py-3 text-center text-xs text-neutral-300 border border-neutral-800 hover:border-yellow-500"
          >
            Option Express 24 h • +10 €
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-2 w-full rounded-xl border border-neutral-700 px-4 py-2 text-xs text-neutral-400 hover:bg-neutral-900"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

/* ========= DEV TESTS ========= */

function DevTests() {
  useEffect(() => {
    // tests basiques pour éviter les conneries silencieuses
    console.assert(CONTACT.EMAIL.includes("@"), "EMAIL invalide");
    console.assert(
      CONTACT.PHONE.replace(/\s/g, "").length >= 10,
      "PHONE invalide"
    );
    console.assert(!!LINKS.INSTAGRAM, "INSTAGRAM manquant");
    console.log("[DevTests] Config basique OK");
  }, []);
  return null;
}
