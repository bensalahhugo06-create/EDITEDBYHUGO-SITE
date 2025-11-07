import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase env vars manquantes", {
    supabaseUrlPresent: !!supabaseUrl,
    supabaseAnonKeyPresent: !!supabaseAnonKey,
  });
  // On évite de throw pour ne pas blackscreen le site
}

export const supabase = createClient(
  supabaseUrl || "https://example.supabase.co",
  supabaseAnonKey || "invalid"
);
