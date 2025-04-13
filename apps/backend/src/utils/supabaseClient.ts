// utils/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

export const getSupabaseClient = (env: { SUPABASE_URL: string; SUPABASE_ANON_KEY: string }): SupabaseClient => {
  return createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)
}
