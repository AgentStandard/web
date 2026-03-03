import { useState } from 'react'
import './App.css'
import PackageDetail from './PackageDetail'

function Manifesto({ onBack }) {
  return (
    <div className="manifesto-page">
      <nav className="nav">
        <div className="logo">AgentStandard <span className="logo-dot">✦</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>← Back</button>
      </nav>
      <div className="manifesto-content">
        <div className="manifesto-badge">Our Manifesto</div>
        <h1>I showered at 8am.<br />By noon I had a live website and an MVP.</h1>
        <p className="manifesto-sub">That's not a brag. That's the point.</p>

        <hr className="manifesto-divider" />

        <h2>The problem</h2>
        <p>Yesterday I spent two hours staring at a terminal.</p>
        <p>Three YouTube videos open. PowerShell blinking at me like I'd done something wrong. Reset after reset. High token burn. Wrong turns. I'm not a coder — I'm a credit trader. I know markets, not machines. And I almost quit before I could have a single conversation with my AI agent.</p>
        <p>Most people do quit. In that two-hour window of LEGO instructions and command prompts and error messages, most people close the laptop and decide AI isn't for them.</p>
        <p><strong>That window is the problem. And it's completely unnecessary.</strong></p>

        <h2>What changed</h2>
        <p>On day two, I had an agent. A real one — set up properly, with the right skills, the right memory, the right configuration.</p>
        <p>The difference wasn't intelligence. It was setup.</p>
        <p>With the right foundation, a non-coder went from shower thought to live product in under four hours. Business plan. Domain. GitHub org. Schema. Five certified packages. Landing page. Done.</p>
        <p><em>The agent that helped build AgentStandard is the first proof that AgentStandard works.</em></p>

        <h2>What we're building</h2>
        <p>AgentStandard is a marketplace of curated, certified agent packages.</p>
        <p>Not tutorials. Not YouTube videos. Packages — tested, benchmarked, and certified to work — that take you from zero to a fully operational AI agent in minutes.</p>
        <p>Every package answers the same question: <em>what would I wish someone had handed me on day one?</em></p>
        <p>We rate packages like Morningstar rates funds. We surface the best ones like the App Store surfaces apps. We build for the person who felt what I felt in that terminal — capable, curious, and completely locked out.</p>

        <h2>Who this is for</h2>
        <p>You don't need to be a coder. You need to be willing.</p>
        <p>The wave hasn't passed you. You're not too late. You're just missing the on-ramp.</p>
        <p><strong>That's what AgentStandard is.</strong></p>

        <h2>The standard</h2>
        <p>Every AgentStandard certified package has been manually reviewed, independently benchmarked, and tested by someone who isn't a developer.</p>
        <p>If it doesn't work for a non-coder, it doesn't get the badge. That's the standard.</p>

        <h2>The flywheel</h2>
        <p>Here's what's different about us: your agent will recommend us to you.</p>
        <p>Not because we programmed it to. Because a well-configured agent, surveying what its operator needs, will find a package that helps — and it will say so. Agent to operator. A distribution channel that has never existed before.</p>

        <div className="manifesto-close">
          <p>This was built in four hours. By a former head of CDS trading who couldn't code. Using the exact tools we're packaging for you.</p>
          <p className="latin"><em>Per Aspera Ad Astra. Through hardship to the stars.</em></p>
          <p>The hardship is the terminal. The stars are what comes after.</p>
        </div>
      </div>
    </div>
  )
}

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
      <button className="install-btn" onClick={() => pkg.slug === 'first-conversation' ? window.dispatchEvent(new CustomEvent('navigate', {detail: 'package-first-conversation'})) : null}>
        {pkg.certified ? 'Install Package →' : 'Coming Soon'}
      </button>
    </div>
  )
}

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [activeVertical, setActiveVertical] = useState('All')
  const [page, setPage] = useState('home')

  useState(() => {
    const handler = (e) => setPage(e.detail)
    window.addEventListener('navigate', handler)
    return () => window.removeEventListener('navigate', handler)
  }, [])

  if (page === 'manifesto') return <Manifesto onBack={() => setPage('home')} />
  if (page === 'package-first-conversation') return <PackageDetail onBack={() => setPage('home')} />

  const filtered = activeVertical === 'All'
    ? packages
    : packages.filter(p => p.vertical === activeVertical)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/xreawdry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email })
      })
    } catch (_) {}
    setSubmitted(true)
  }

  return (
    <div className="app">
      {/* Hero */}
      <header className="hero">
        <nav className="nav">
          <div className="logo">AgentStandard <span className="logo-dot">✦</span></div>
          <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
            <button className="nav-link" onClick={() => setPage('manifesto')} style={{background:'none',border:'none',cursor:'pointer'}}>Manifesto</button>
            <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer" className="nav-link">Submit a Package</a>
          </div>
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
