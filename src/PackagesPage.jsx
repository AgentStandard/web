import { useState, useMemo } from 'react'
import UpvoteButton from './UpvoteButton'
import WaitlistForm from './WaitlistForm'

const verticals = ['All', 'General', 'Productivity', 'Health', 'Lifestyle', 'Social', 'Learning', 'Career', 'Content', 'Ecommerce', 'Dev', 'Builder', 'Trust']

const FEATURED_SLUGS = ['first-conversation', 'memory-architect', 'week-in-review', 'agent-transparency']

function RichPackageCard({ pkg, featured = false }) {
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
    <div
      className={`package-card package-card-clickable${pkg.tier === 'Pro' ? ' package-card-pro' : ''}${pkg.comingSoon ? ' package-card-coming-soon' : ''}${featured ? ' package-card-featured' : ''}`}
      onClick={handleCardClick}
    >
      <div className="card-header">
        <span className={`vertical-badge vertical-${pkg.vertical.toLowerCase()}`}>{pkg.vertical}</span>
        {pkg.certified && <span className="certified-badge"><span className="star-glyph">&#x2736;</span> Certified</span>}
        {pkg.isNew && !featured && <span className="new-pill">New</span>}
        {pkg.comingSoon && <span className="coming-soon-pill">Coming Soon</span>}
      </div>
      {featured && <div className="featured-editors-label">&#x2736; Editor&apos;s Pick</div>}
      <h3>{pkg.name}</h3>
      <p className="tagline">{pkg.tagline}</p>

      {/* Install method badges */}
      <div className="install-methods">
        {pkg.telegram && <span className="method-badge method-telegram">Telegram</span>}
        <span className="method-badge method-openclaw">OpenClaw</span>
      </div>

      <div className="card-stats">
        <span>{pkg.setupTime} min setup</span>
        {pkg.rating && <span>&#x2736; {pkg.rating}</span>}
        {pkg.tier === 'Pro' ? (
          <span className="tier-badge tier-pro">Pro</span>
        ) : pkg.tier === 'Starter' ? (
          <span className="tier-badge tier-starter">Starter</span>
        ) : (
          <span className="tier-badge tier-free">Free</span>
        )}
      </div>
      <div className="card-tags">
        {(pkg.tags || []).slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      {!pkg.comingSoon && (
        <button
          className="install-btn"
          onClick={(e) => {
            e.stopPropagation()
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
  const [searchQuery, setSearchQuery] = useState('')

  const totalVisible = packages.filter(p => !p.hidden).length

  const verticalCounts = useMemo(() => {
    const counts = { All: packages.filter(p => !p.hidden).length }
    verticals.slice(1).forEach(v => {
      counts[v] = packages.filter(p => !p.hidden && p.vertical === v).length
    })
    return counts
  }, [packages])

  const featuredPackages = useMemo(() => {
    return FEATURED_SLUGS.map(slug => packages.find(p => p.slug === slug)).filter(Boolean)
  }, [packages])

  const filtered = useMemo(() => {
    let result = packages.filter(p => !p.hidden)

    if (activeVertical !== 'All') {
      result = result.filter(p => p.vertical === activeVertical)
    }

    if (platformFilter === 'telegram') {
      result = result.filter(p => p.telegram === true && p.vertical !== 'Builder')
    } else if (platformFilter === 'builder') {
      result = result.filter(p => p.vertical === 'Builder')
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.tags || []).some(t => t.toLowerCase().includes(q)) ||
        (p.keywords && p.keywords.some(k => k.toLowerCase().includes(q)))
      )
    }

    return result
  }, [packages, activeVertical, platformFilter, searchQuery])

  const showFeatured = activeVertical === 'All' && platformFilter === 'all' && !searchQuery.trim()
  const nonFeaturedPackages = showFeatured
    ? filtered.filter(p => !FEATURED_SLUGS.includes(p.slug))
    : filtered

  return (
    <div className="app">
      {/* Nav */}
      <nav className="nav">
        <div className="logo" onClick={onBack} style={{cursor: 'pointer'}}>
          AgentStandard <span className="logo-dot">&#x2736;</span>
        </div>
        <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
          <button className="nav-link packages-nav-link" style={{background:'none',border:'none',cursor:'pointer',fontWeight:700}}>Packages</button>
          <button className="nav-link" onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'blog' }))} style={{background:'none',border:'none',cursor:'pointer'}}>Blog</button>
          <button className="nav-link" onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'manifesto' }))} style={{background:'none',border:'none',cursor:'pointer'}}>Manifesto</button>
          <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer" className="nav-link">Submit a Package &#x2736;</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="packages-page-hero">
        <div className="packages-hero-inner">
          <div className="section-eyebrow">&#x2736; The Agent Package Library</div>
          <h1 className="packages-hero-headline">
            {totalVisible} agent packages.<br />Built for real life.
          </h1>
          <p className="packages-hero-sub">
            Curated, tested, and ready to install. Every package is a complete configuration &mdash; memory, skills,
            and context included. Drop one in and your agent knows what it&apos;s doing from the first message.
          </p>
          <div className="packages-hero-stats">
            <div className="ph-stat">
              <span className="ph-stat-num">{totalVisible}</span>
              <span className="ph-stat-label">packages</span>
            </div>
            <div className="ph-stat-divider" />
            <div className="ph-stat">
              <span className="ph-stat-num">12</span>
              <span className="ph-stat-label">verticals</span>
            </div>
            <div className="ph-stat-divider" />
            <div className="ph-stat">
              <span className="ph-stat-num">2</span>
              <span className="ph-stat-label">platforms</span>
            </div>
          </div>
        </div>
      </header>

      {/* Search + Filters */}
      <section className="packages-filters-section">
        {/* Search */}
        <div className="packages-search-wrap">
          <input
            type="search"
            className="packages-search-input"
            placeholder="Search packages by name, tag, or description..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Platform filter */}
        <div className="platform-filter-row" style={{display:'flex', gap:'12px', justifyContent:'center', marginBottom:'1.25rem', flexWrap:'wrap'}}>
          <button className={`filter-btn${platformFilter === 'all' ? ' active' : ''}`} onClick={() => setPlatformFilter('all')}>All Platforms</button>
          <button className={`filter-btn${platformFilter === 'telegram' ? ' active' : ''}`} onClick={() => setPlatformFilter('telegram')}>Telegram</button>
          <button className={`filter-btn${platformFilter === 'builder' ? ' active' : ''}`} onClick={() => setPlatformFilter('builder')}>Builder / OpenClaw</button>
        </div>

        {/* Vertical pills with counts */}
        <div className="vertical-filters vertical-filters-counts">
          {verticals.map(v => (
            <button
              key={v}
              className={`filter-btn filter-btn-with-count${activeVertical === v ? ' active' : ''}`}
              onClick={() => setActiveVertical(v)}
            >
              {v}
              {verticalCounts[v] > 0 && <span className="filter-count-badge">{verticalCounts[v]}</span>}
            </button>
          ))}
        </div>
      </section>

      {/* Featured / Editor's picks row */}
      {showFeatured && featuredPackages.length > 0 && (
        <section className="packages-featured-section">
          <div className="packages-featured-inner">
            <div className="featured-section-header">
              <div className="featured-eyebrow">&#x2736; Editor&apos;s Picks</div>
              <p className="featured-section-sub">
                Handpicked for first-timers and power users alike. Install any of these and
                you&apos;ll understand why AgentStandard exists.
              </p>
            </div>
            <div className="packages-grid packages-grid-featured">
              {featuredPackages.map(pkg => (
                <RichPackageCard key={pkg.slug} pkg={pkg} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main package grid */}
      <section className="packages-section" style={{paddingTop: showFeatured ? '1rem' : '3rem'}}>
        <div className="packages-section-inner">
          {showFeatured && nonFeaturedPackages.length > 0 && (
            <div className="all-packages-header">
              <h3 className="all-packages-heading">All Packages</h3>
              <span className="all-packages-count">{nonFeaturedPackages.length} packages</span>
            </div>
          )}
          <div className="packages-grid">
            {nonFeaturedPackages.map(pkg => <RichPackageCard key={pkg.slug} pkg={pkg} />)}
          </div>
          {filtered.length === 0 && (
            <p style={{textAlign:'center', color:'var(--text-muted)', padding:'3rem'}}>
              {searchQuery ? `No packages found for "${searchQuery}". Try a different term.` : 'No packages found for this filter.'}
            </p>
          )}
        </div>
      </section>

      {/* OpenClaw power-user callout */}
      <section className="openclaw-callout-section">
        <div className="openclaw-callout-inner">
          <div className="openclaw-callout-badge">&#x26A1; Power User</div>
          <h2 className="openclaw-callout-heading">Install any package with one command.</h2>
          <p className="openclaw-callout-sub">
            Running OpenClaw? Skip the manual setup. Every package in this library is one command away.
          </p>
          <div className="openclaw-install-block">
            <code className="openclaw-install-cmd">openclaw skills install &lt;package-url&gt;</code>
          </div>
          <div className="openclaw-callout-links">
            <a href="https://openclaw.ai" target="_blank" rel="noreferrer" className="openclaw-callout-link">Get OpenClaw &#x2192;</a>
            <span className="openclaw-callout-divider">&#xB7;</span>
            <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer" className="openclaw-callout-link">Browse on GitHub &#x2192;</a>
          </div>
        </div>
      </section>

      {/* Submit CTA */}
      <section className="packages-submit-section">
        <div className="packages-submit-inner">
          <div className="packages-submit-eyebrow">Missing something?</div>
          <h3 className="packages-submit-heading">Can&apos;t find what you need? Submit a package.</h3>
          <p className="packages-submit-sub">
            The library grows from community contributions. If you&apos;ve built something good, submit it for review.
          </p>
          <a
            href="https://github.com/AgentStandard/packages"
            target="_blank"
            rel="noreferrer"
            className="packages-submit-btn"
          >
            Submit a Package on GitHub &#x2736;
          </a>
        </div>
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
