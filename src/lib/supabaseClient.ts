import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Log non bloquant si les envs sont absentes
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase env vars manquantes", {
    supabaseUrlPresent: !!supabaseUrl,
    supabaseAnonKeyPresent: !!supabaseAnonKey,
  });
}

// On crée quand même un client pour éviter de faire crasher l'app
export const supabase = createClient(
  supabaseUrl || "https://example.supabase.co",
  supabaseAnonKey || "ey.fake"
);
