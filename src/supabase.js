import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://nbtzzfvbaecngcijugqi.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_lGDkq8OMogfPTYVPiQIklQ_Z4jlIe6q'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Get or create an anonymous session ID (persisted in localStorage)
export function getSessionId() {
  let sid = localStorage.getItem('as_session_id')
  if (!sid) {
    sid = crypto.randomUUID()
    localStorage.setItem('as_session_id', sid)
  }
  return sid
}

// Get vote count for a package
export async function getVoteCount(packageSlug) {
  const { count, error } = await supabase
    .from('package_votes')
    .select('*', { count: 'exact', head: true })
    .eq('package_slug', packageSlug)
  if (error) return 0
  return count || 0
}

// Check if current session has voted
export async function hasVoted(packageSlug) {
  const sid = getSessionId()
  const { data, error } = await supabase
    .from('package_votes')
    .select('id')
    .eq('package_slug', packageSlug)
    .eq('session_id', sid)
    .maybeSingle()
  if (error) return false
  return !!data
}

// Cast a vote (one per session)
export async function castVote(packageSlug) {
  const sid = getSessionId()
  const { error } = await supabase
    .from('package_votes')
    .insert({ package_slug: packageSlug, session_id: sid })
  return !error
}
