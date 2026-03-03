import { useState } from 'react'
import './App.css'

const packages = [
  {
    slug: 'first-conversation',
    name: 'First Conversation Setup',
    tagline: 'From PowerShell to dialogue in 20 minutes.',
    vertical: 'General',
    tier: 'Starter',
    setupTime: 20,
    rating: 4.9,
    installs: 0,
    certified: true,
    tags: ['beginner', 'onboarding', 'any platform'],
  },
  {
    slug: 'finance-analyst',
    name: 'Finance Analyst Stack',
    tagline: 'Credit research, market data, and macro briefings — automated.',
    vertical: 'Finance',
    tier: 'Pro',
    setupTime: 30,
    rating: null,
    installs: 0,
    certified: false,
    tags: ['finance', 'markets', 'research'],
  },
  {
    slug: 'content-creator',
    name: 'Content Creator Stack',
    tagline: 'Write, research, schedule, and publish — from one conversation.',
    vertical: 'Content',
    tier: 'Pro',
    setupTime: 25,
    rating: null,
    installs: 0,
    certified: false,
    tags: ['content', 'writing', 'social'],
  },
  {
    slug: 'ecommerce-ops',
    name: 'Ecommerce Ops Stack',
    tagline: 'Shopify, inventory, and customer comms on autopilot.',
    vertical: 'Ecommerce',
    tier: 'Pro',
    setupTime: 35,
    rating: null,
    installs: 0,
    certified: false,
    tags: ['shopify', 'ecommerce', 'operations'],
  },
]

const verticals = ['All', 'General', 'Finance', 'Content', 'Ecommerce', 'Dev', 'SEO']

function PackageCard({ pkg }) {
  return (
    <div className="package-card">
      <div className="card-header">
        <span className={`vertical-badge vertical-${pkg.vertical.toLowerCase()}`}>{pkg.vertical}</span>
        {pkg.certified && <span className="certified-badge">✦ Certified</span>}
      </div>
      <h3>{pkg.name}</h3>
      <p className="tagline">{pkg.tagline}</p>
      <div className="card-stats">
        <span>⏱ {pkg.setupTime} min setup</span>
        {pkg.rating && <span>⭐ {pkg.rating}</span>}
        <span className={`tier-badge tier-${pkg.tier.toLowerCase()}`}>{pkg.tier}</span>
      </div>
      <div className="card-tags">
        {pkg.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <button className="install-btn">
        {pkg.certified ? 'Install Package →' : 'Coming Soon'}
      </button>
    </div>
  )
}

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [activeVertical, setActiveVertical] = useState('All')

  const filtered = activeVertical === 'All'
    ? packages
    : packages.filter(p => p.vertical === activeVertical)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="app">
      {/* Hero */}
      <header className="hero">
        <nav className="nav">
          <div className="logo">AgentStandard <span className="logo-dot">✦</span></div>
          <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer" className="nav-link">
            Submit a Package
          </a>
        </nav>

        <div className="hero-content">
          <div className="hero-badge">Setting the standard for agent packages</div>
          <h1>Your AI agent,<br />ready in minutes.</h1>
          <p className="hero-sub">
            Stop staring at the terminal. AgentStandard packages take you from zero
            to a fully working AI agent — no coding required.
          </p>
          <div className="hero-stats">
            <div className="stat"><strong>1</strong> certified package</div>
            <div className="stat-divider" />
            <div className="stat"><strong>5</strong> verticals</div>
            <div className="stat-divider" />
            <div className="stat"><strong>Any</strong> platform</div>
          </div>
        </div>
      </header>

      {/* Packages */}
      <section className="packages-section">
        <div className="section-header">
          <h2>Browse Packages</h2>
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
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <h3>Browse</h3>
            <p>Find a package for your use case. Each one shows exactly what you'll get and how long setup takes.</p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h3>Install</h3>
            <p>Follow the step-by-step guide. No code. No YouTube. Just clear instructions that actually work.</p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h3>Talk</h3>
            <p>Your agent is ready. Start a conversation. It knows what it's doing — because the package set it up properly.</p>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="certification-section">
        <div className="cert-content">
          <div className="cert-badge-large">✦</div>
          <h2>AgentStandard Certified</h2>
          <p>
            Every certified package has been manually reviewed, benchmarked, and tested.
            Not community guesswork — an actual standard. Like Morningstar ratings, but for agents.
          </p>
          <div className="cert-stats">
            <div className="cert-stat"><strong>97%</strong><span>avg task completion</span></div>
            <div className="cert-stat"><strong>&lt;2s</strong><span>avg response time</span></div>
            <div className="cert-stat"><strong>$0.04</strong><span>avg cost/session</span></div>
          </div>
          <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer" className="cert-link">
            Submit your package for certification →
          </a>
        </div>
      </section>

      {/* Email capture */}
      <section className="waitlist-section">
        <h2>Stay ahead of the standard.</h2>
        <p>New packages, certification updates, and platform news — direct to your inbox.</p>
        {submitted ? (
          <div className="submitted-msg">✦ You're on the list. We'll be in touch.</div>
        ) : (
          <form className="email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">Notify me</button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">AgentStandard ✦</div>
        <div className="footer-links">
          <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>
        </div>
        <div className="footer-copy">Setting the standard for agent packages.</div>
      </footer>
    </div>
  )
}
