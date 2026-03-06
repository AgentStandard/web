import { useState } from 'react'
import UpvoteButton from './UpvoteButton'
import WaitlistForm from './WaitlistForm'

const verticals = ['All', 'General', 'Productivity', 'Health', 'Lifestyle', 'Social', 'Learning', 'Career', 'Content', 'Ecommerce', 'Dev', 'Builder', 'Trust']

function PackageCard({ pkg }) {
  const isCommunity = !pkg.certified

  const handleCardClick = (e) => {
    if (e.target.closest('.upvote-btn') || e.target.closest('.discussion-link')) return
    if (pkg.comingSoon) return
    if (pkg.slug === 'first-conversation') {
      window.dispatchEvent(new CustomEvent('navigate', { detail: 'package-first-conversation' }))
    } else if (isCommunity) {
      window.dispatchEvent(new CustomEvent('navigate', { detail: `community-${pkg.slug}` }))
    }
  }

  return (
    <div className={`package-card package-card-clickable${pkg.tier === 'Pro' ? ' package-card-pro' : ''}${pkg.comingSoon ? ' package-card-coming-soon' : ''}`} onClick={handleCardClick}>
      <div className="card-header">
        <span className={`vertical-badge vertical-${pkg.vertical.toLowerCase()}`}>{pkg.vertical}</span>
        {pkg.certified && <span className="certified-badge"><span className="star-glyph">&#x2736;</span> Certified</span>}
        {pkg.isNew && <span className="new-pill">New</span>}
        {pkg.comingSoon && <span className="coming-soon-pill">Coming Soon</span>}
        {pkg.telegram && <span className="telegram-pill">Telegram</span>}
      </div>
      <h3>{pkg.name}</h3>
      <p className="tagline">{pkg.tagline}</p>
      <div className="card-stats">
        <span>{pkg.setupTime} min setup</span>
        {pkg.rating && <span>{pkg.rating}</span>}
        {pkg.tier === 'Pro' ? (
          <span className="tier-badge tier-pro">Pro</span>
        ) : pkg.tier === 'Starter' ? (
          <span className="tier-badge tier-starter">Starter</span>
        ) : (
          <span className="tier-badge tier-free">Free</span>
        )}
      </div>
      <div className="card-tags">
        {pkg.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      {!pkg.comingSoon && (
        <button
          className="install-btn"
          onClick={() => {
            if (pkg.slug === 'first-conversation') {
              window.dispatchEvent(new CustomEvent('navigate', { detail: 'package-first-conversation' }))
            } else if (isCommunity) {
              window.dispatchEvent(new CustomEvent('navigate', { detail: `community-${pkg.slug}` }))
            }
          }}
        >
          {pkg.certified ? <>Install Package &#x2736; <span className="free-pill">Free</span></> : <>View Package &#x2736;</>}
        </button>
      )}
      {pkg.comingSoon && (
        <div className="coming-soon-cta">April 2026 &#x2736;</div>
      )}
      <div className="card-footer">
        <UpvoteButton slug={pkg.slug} />
        {pkg.discussionUrl && (
          <a href={pkg.discussionUrl} target="_blank" rel="noreferrer" className="discussion-link">
            Discussion
          </a>
        )}
      </div>
    </div>
  )
}

export default function PackagesPage({ packages, onBack }) {
  const [activeVertical, setActiveVertical] = useState('All')
  const [platformFilter, setPlatformFilter] = useState('all')

  const filtered = (activeVertical === 'All'
    ? packages
    : packages.filter(p => p.vertical === activeVertical)
  ).filter(p => !p.hidden)
   .filter(p => {
     if (platformFilter === 'telegram') return p.telegram === true && p.vertical !== 'Builder'
     if (platformFilter === 'builder') return p.vertical === 'Builder'
     return true
   })

  const totalVisible = packages.filter(p => !p.hidden).length

  return (
    <div className="app">
      <header className="hero" style={{paddingBottom: '2rem'}}>
        <nav className="nav">
          <div className="logo" onClick={onBack} style={{cursor:'pointer'}}>AgentStandard <span className="logo-dot">&#x2736;</span></div>
          <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
            <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>&larr; Back</button>
          </div>
        </nav>
        <div style={{textAlign:'center', padding:'3rem 1rem 1rem'}}>
          <div className="section-eyebrow">&#x2736; {totalVisible} packages and counting</div>
          <h1 style={{fontSize:'2.5rem', marginBottom:'0.75rem'}}>Package Library</h1>
          <p style={{color:'var(--text-muted)', maxWidth:'540px', margin:'0 auto', fontSize:'1.1rem'}}>
            Curated agent packages for OpenClaw, Telegram, and beyond.
          </p>
        </div>
      </header>

      <section className="packages-section" id="packages-section" style={{paddingTop:'2rem'}}>
        <div className="section-header">
          <div className="platform-filter-row" style={{display:'flex', gap:'12px', justifyContent:'center', marginBottom:'1rem', flexWrap:'wrap'}}>
            <button
              className={`filter-btn${platformFilter === 'all' ? ' active' : ''}`}
              onClick={() => setPlatformFilter('all')}
            >All Platforms</button>
            <button
              className={`filter-btn${platformFilter === 'telegram' ? ' active' : ''}`}
              onClick={() => setPlatformFilter('telegram')}
            >Telegram</button>
            <button
              className={`filter-btn${platformFilter === 'builder' ? ' active' : ''}`}
              onClick={() => setPlatformFilter('builder')}
            >Builder / OpenClaw</button>
          </div>
          <div className="vertical-filters">
            {verticals.map(v => (
              <button
                key={v}
                className={`filter-btn ${activeVertical === v ? 'active' : ''}`}
                onClick={() => setActiveVertical(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        <div className="packages-grid">
          {filtered.map(pkg => <PackageCard key={pkg.slug} pkg={pkg} />)}
        </div>
        {filtered.length === 0 && (
          <p style={{textAlign:'center', color:'var(--text-muted)', padding:'3rem'}}>No packages found for this filter.</p>
        )}
      </section>

      <section className="waitlist-capture-section">
        <WaitlistForm />
      </section>

      <footer className="footer">
        <div className="footer-logo">AgentStandard <span className="star-glyph">&#x2736;</span></div>
        <div className="footer-links">
          <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>
        </div>
        <div className="footer-copy">Setting the standard for agent packages. &copy; England &amp; Wales</div>
      </footer>
    </div>
  )
}
