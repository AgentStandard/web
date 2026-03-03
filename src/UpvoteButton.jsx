import { useState, useEffect } from 'react'
import { getVoteCount, hasVoted, castVote } from './supabase'

export default function UpvoteButton({ slug }) {
  const [count, setCount] = useState(null)
  const [voted, setVoted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getVoteCount(slug).then(setCount)
    hasVoted(slug).then(setVoted)
  }, [slug])

  const handleVote = async () => {
    if (voted || loading) return
    setLoading(true)
    const ok = await castVote(slug)
    if (ok) {
      setVoted(true)
      setCount(c => (c || 0) + 1)
    }
    setLoading(false)
  }

  return (
    <button
      className={`upvote-btn ${voted ? 'upvote-voted' : ''}`}
      onClick={handleVote}
      disabled={voted || loading}
      title={voted ? 'You voted for this' : 'Upvote this package'}
    >
      <span className="upvote-arrow">▲</span>
      <span className="upvote-count">{count === null ? '—' : count}</span>
    </button>
  )
}
