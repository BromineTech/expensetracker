// index.ts
import { Hono } from 'hono'
import { getSupabaseClient } from './utils/supabaseClient'

type Bindings = {
  SUPABASE_URL: string
  SUPABASE_ANON_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {

  const env = {
    SUPABASE_URL: c.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: c.env.SUPABASE_ANON_KEY
  }
  const supabase = getSupabaseClient(env)

  const { data, error } = await supabase.from('demo').select('*').limit(10)

  return c.json({ data, error })
})

export default app
