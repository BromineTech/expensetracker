import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// In browser, these will be replaced with actual values at build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are missing. Make sure to set them in your .env.local file.');
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
