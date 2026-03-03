import { useState, useEffect, useRef } from 'react'
import './CommunityPackagePage.css'
import UpvoteButton from './UpvoteButton'

const USER_LEVEL_LABELS = {
  beginner: '🟢 Beginner-friendly',
  intermediate: '🟡 Intermediate',
  advanced: '🔴 Advanced',
  developer: '🔵 Developer',
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch (_) {
    return ''
  }
}

function truncate(str, max) {
  if (!str) return ''
  return str.length > max ? str.slice(0, max).trimEnd() + '…' : str
}

function GitHubComments({ discussionNumber, discussionUrl }) {
  const [comments, setComments] = useState(null)
  const [error, setError] = useState(false)
  const fetchedFor = useRef(null)

  useEffect(() => {
    if (!discussionNumber || fetchedFor.current === discussionNumber) return
    fetchedFor.current = discussionNumber

    fetch(`https://api.github.com/repos/AgentStandard/packages/discussions/${discussionNumber}/comments`)
      .then(res => {
        if (!res.ok) throw new Error('fetch failed')
        return res.json()
      })
      .then(data => {
        // Latest 5 comments
        const latest = Array.isArray(data) ? data.slice(-5) : []
        setComments(latest)
      })
      .catch(() => {
        setError(true)
        setComments([])
      })
  }, [discussionNumber])

  if (comments === null) {
    return <p className="community-comments-loading">Loading comments…</p>
  }

  if (error || comments.length === 0) {
    return (
      <div className="community-no-comments">
        <p>{error ? 'Could not load comments.' : 'No comments yet.'}</p>
        {discussionUrl && (
          <a href={discussionUrl} target="_blank" rel="noreferrer" className="community-discussion-link">
            💬 Be the first to share your experience →
          </a>
        )}
      </div>
    )
  }

  return (
    <div className="community-comments-list">
      {comments.map(comment => (
        <div key={comment.id} className="community-comment">
          {comment.user?.avatar_url ? (
            <img
              src={comment.user.avatar_url}
              alt={comment.user.login}
              className="community-comment-avatar"
            />
          ) : (
            <div className="community-comment-avatar-placeholder">
              {(comment.user?.login || '?')[0].toUpperCase()}
            </div>
          )}
          <div className="community-comment-body">
            <div className="community-comment-meta">
              <span className="community-comment-user">{comment.user?.login || 'Unknown'}</span>
              <span className="community-comment-date">{formatDate(comment.created_at)}</span>
            </div>
            <p className="community-comment-text">{truncate(comment.body, 200)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function CommunityPackagePage({ pkg, onBack }) {
  const [copied, setCopied] = useState(false)

  const installCmd = `clawhub install ${pkg.slug}`

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const discussionUrl = pkg.discussionUrl || (pkg.discussionNumber
    ? `https://github.com/AgentStandard/packages/discussions/${pkg.discussionNumber}`
    : null)

  return (
    <div className="community-page">
      {/* Nav */}
      <nav className="nav">
        <div className="logo" onClick={onBack}>
          AgentStandard <span className="logo-dot">✦</span>
        </div>
        <button className="community-back-btn" onClick={onBack}>← Back</button>
      </nav>

      {/* Hero */}
      <div className="community-hero">
        <div className="community-hero-badges">
          {pkg.vertical && (
            <span className={`vertical-badge vertical-${pkg.vertical.toLowerCase()} community-vertical-badge`}>
              {pkg.vertical}
            </span>
          )}
          <span className={`community-status-badge ${pkg.certified ? 'certified' : ''}`}>
            {pkg.certified ? '✦ Certified' : 'Community'}
          </span>
        </div>
        <h1 className="community-page-title">{pkg.name}</h1>
        <p className="community-hero-tagline">{pkg.tagline}</p>
      </div>

      {/* Body */}
      <div className="community-body">
        {/* LEFT */}
        <div className="community-left">
          {pkg.description && (
            <section>
              <div className="community-section-heading">About</div>
              <p className="community-description">{pkg.description}</p>
            </section>
          )}

          {pkg.whatItDoes && pkg.whatItDoes.length > 0 && (
            <section>
              <div className="community-section-heading">What it does</div>
              <ul className="community-what-list">
                {pkg.whatItDoes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {pkg.whoItsFor && (
            <section>
              <div className="community-section-heading">Who it's for</div>
              <p className="community-who">{pkg.whoItsFor}</p>
            </section>
          )}

          {pkg.skills && pkg.skills.length > 0 && (
            <section>
              <div className="community-section-heading">Skills &amp; Tools</div>
              <div className="community-skills-list">
                {pkg.skills.map((skill, i) => (
                  <div key={i} className="community-skill-item">
                    <div className="community-skill-name">{skill.name}</div>
                    {skill.description && (
                      <div className="community-skill-desc">{skill.description}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <div className="community-section-heading">Install</div>
            <div className="community-install-block">
              <span className="community-install-cmd">{installCmd}</span>
              <button
                className={`community-copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </section>

          {pkg.userLevel && (
            <section>
              <div className="community-section-heading">Skill level</div>
              <span className={`community-level-badge ${pkg.userLevel}`}>
                {USER_LEVEL_LABELS[pkg.userLevel] || pkg.userLevel}
              </span>
            </section>
          )}

          {pkg.keywords && pkg.keywords.length > 0 && (
            <section>
              <div className="community-section-heading">Keywords</div>
              <div className="community-keywords">
                {pkg.keywords.map((kw, i) => (
                  <span key={i} className="community-keyword">{kw}</span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT */}
        <div className="community-right">
          {/* Upvote */}
          <div className="community-upvote-card">
            <div>
              <div className="community-upvote-label">Upvote this package</div>
              <div className="community-upvote-sub">Help surface great community work</div>
            </div>
            <UpvoteButton slug={pkg.slug} />
          </div>

          {/* GitHub Discussion */}
          <div className="community-discussion-card">
            <div className="community-discussion-title">
              💬 Community discussion
            </div>
            <GitHubComments
              discussionNumber={pkg.discussionNumber}
              discussionUrl={discussionUrl}
            />
            {discussionUrl && (
              <a
                href={discussionUrl}
                target="_blank"
                rel="noreferrer"
                className="community-join-link"
              >
                Join the discussion →
              </a>
            )}
          </div>

          {/* Certification CTA (uncertified only) */}
          {!pkg.certified && (
            <div className="community-cert-cta">
              <div className="community-cert-cta-star">✦</div>
              <div className="community-cert-cta-heading">Ready for certification?</div>
              <p className="community-cert-cta-sub">
                Is this package polished, well-documented, and install-tested?
                Submit it for the AgentStandard ✦ certification review.
              </p>
              <a
                href="https://github.com/AgentStandard/packages/pulls"
                target="_blank"
                rel="noreferrer"
                className="community-cert-cta-link"
              >
                Is this package ready for ✦ certification? Submit a review request →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
