import { useState, useEffect } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [count, setCount] = useState(null)
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const API_URL = 'http://64.227.34.11:7843/waitlist'

  // Fetch count on mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(`${API_URL}/count`)
        if (res.ok) {
          const data = await res.json()
          setCount(data.count || 0)
        }
      } catch (err) {
        console.error('Failed to fetch count:', err)
      }
    }
    fetchCount()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || 'Guest',
          source: 'homepage'
        })
      })

      if (res.ok) {
        setStatus('success')
        setMessage("You're in. We'll reach out before April 15.")
        setEmail('')
        setName('')
        // Refresh count
        const countRes = await fetch(`${API_URL}/count`)
        if (countRes.ok) {
          const data = await countRes.json()
          setCount(data.count || 0)
        }
      } else {
        setStatus('error')
        setMessage('Something went wrong — email hello@agentstandard.ai')
      }
    } catch (err) {
      console.error('Error submitting:', err)
      setStatus('error')
      setMessage('Something went wrong — email hello@agentstandard.ai')
    }
  }

  return (
    <div className="waitlist-form-container">
      <div className="waitlist-form-inner">
        {count !== null && (
          <p className="waitlist-count">
            <strong>Join {count.toLocaleString()} others on the waitlist</strong>
          </p>
        )}

        {status === 'success' ? (
          <div className="waitlist-success">
            <p>{message}</p>
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === 'loading'}
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
            />
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <div className="waitlist-error">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  )
}
