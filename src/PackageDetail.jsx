import { useState } from 'react'
import './PackageDetail.css'

const firstConversation = {
  id: 'first-conversation',
  name: 'First Conversation Setup',
  tagline: 'From PowerShell to dialogue in 20 minutes.',
  description: 'Everything you need to go from a blank terminal to a real conversation with your AI agent. No coding required.',
  certified: true,
  benchmarks: {
    task_completion_rate: 0.97,
    avg_response_ms: 1100,
    estimated_cost_per_session_usd: 0.04,
  },
  skills: [
    { name: 'weather', description: 'Current weather and forecasts for any location.' },
    { name: 'web-search', description: 'Search the web from inside your conversation.' },
  ],
  steps: [
    {
      order: 1,
      title: 'Download OpenClaw',
      description: 'OpenClaw is the free app that runs your AI agent locally on your machine. Download and install it — takes about 3 minutes.',
      url: 'https://openclaw.ai/download',
      cta: 'Download OpenClaw →',
      estimated_minutes: 3,
      type: 'install',
      tip: 'Available for Windows, Mac, and Linux.',
    },
    {
      order: 2,
      title: 'Get your Claude API key',
      description: 'You need a free API key from Anthropic to connect your agent to Claude. Sign up, create a key, and copy it — you\'ll use it in the next step.',
      url: 'https://console.anthropic.com/api-keys',
      cta: 'Get API key →',
      estimated_minutes: 5,
      type: 'browse',
      tip: 'Free tier is more than enough to get started.',
    },
    {
      order: 3,
      title: 'Add your API key to OpenClaw',
      description: 'Open OpenClaw, go to Settings, and paste your API key. This connects your agent to Claude\'s intelligence.',
      estimated_minutes: 2,
      type: 'config',
      tip: 'Settings → API Keys → paste and save.',
    },
    {
      order: 4,
      title: 'Install your first skills',
      description: 'Copy and run this command in your terminal. It installs weather and web search — your agent\'s first two abilities.',
      command: 'clawhub install weather web-search',
      estimated_minutes: 3,
      type: 'command',
      tip: 'Just copy, paste, and hit enter. That\'s it.',
    },
    {
      order: 5,
      title: 'Start your first conversation',
      description: 'Open a new chat in OpenClaw and type: "What\'s the weather like in London today?" — if it answers, you\'re done.',
      estimated_minutes: 1,
      type: 'done',
      tip: 'Welcome. You\'re an AI operator now.',
    },
  ],
}

const stepIcons = { install: '⬇️', browse: '🔑', config: '⚙️', command: '💻', done: '🎉' }

export default function PackageDetail({ onBack }) {
  const pkg = firstConversation
  const [currentStep, setCurrentStep] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [copied, setCopied] = useState(false)

  const step = pkg.steps[currentStep]
  const progress = ((currentStep) / pkg.steps.length) * 100

  const handleNext = () => {
    if (currentStep < pkg.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCompleted(true)
    }
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tweetText = encodeURIComponent(`Just set up my AI agent in 20 minutes with @AgentStandardAI 🤖\n\nNo coding. No YouTube tutorials. Just a package that worked.\n\nagentstandard.ai/packages/first-conversation`)
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`

  if (completed) {
    return (
      <div className="detail-page">
        <nav className="nav">
          <div className="logo">AgentStandard <span className="logo-dot">✦</span></div>
        </nav>
        <div className="completion-screen">
          <div className="confetti-emoji">🎉</div>
          <h1>You did it.</h1>
          <p className="completion-sub">
            Your AI agent is live. You went from a blank screen<br />to your first conversation.
          </p>
          <div className="completion-stats">
            <div className="c-stat"><strong>20</strong><span>minutes</span></div>
            <div className="c-stat-div"/>
            <div className="c-stat"><strong>0</strong><span>lines of code</span></div>
            <div className="c-stat-div"/>
            <div className="c-stat"><strong>∞</strong><span>conversations ahead</span></div>
          </div>
          <div className="share-section">
            <p className="share-eyebrow">Tell someone.</p>
            <p className="share-label">This is the part that spreads. The person who felt what you felt yesterday is out there right now, staring at a terminal. Send them this.</p>
            <div className="share-buttons">
              <a href={tweetUrl} target="_blank" rel="noreferrer" className="share-btn share-x">
                𝕏 Share on X
              </a>
              <button className="share-btn share-copy" onClick={() => handleCopy('https://agentstandard.ai')}>
                {copied ? '✓ Copied' : '🔗 Copy link'}
              </button>
            </div>
          </div>
          <div className="next-steps">
            <p className="next-label">What's next?</p>
            <p className="next-desc">Now that you're set up, explore what your agent can actually do. Browse more packages to add capabilities — finance, content, ecommerce, and more.</p>
          </div>
          <button className="back-link" onClick={onBack}>Browse more packages →</button>
        </div>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <nav className="nav">
        <div className="logo">AgentStandard <span className="logo-dot">✦</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>← Back</button>
      </nav>

      {currentStep === 0 && (
        <div className="package-hero">
          <div className="pkg-header">
            <span className="certified-badge">✦ AgentStandard Certified</span>
          </div>
          <h1>{pkg.name}</h1>
          <p className="pkg-tagline">{pkg.tagline}</p>
          <div className="pkg-meta">
            <span>⏱ 20 min total</span>
            <span>🤖 No coding required</span>
            <span>💰 ${pkg.benchmarks.estimated_cost_per_session_usd}/session</span>
          </div>
          <div className="cli-callout">
            <span className="cli-label">Developer? Run:</span>
            <code>npx agentstandard install first-conversation</code>
            <button className="cli-copy" onClick={() => handleCopy('npx agentstandard install first-conversation')}>{copied ? '✓' : 'Copy'}</button>
          </div>
          <div className="skills-included">
            <p className="skills-label">Includes:</p>
            {pkg.skills.map(s => (
              <div key={s.name} className="skill-pill">
                <strong>{s.name}</strong> — {s.description}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="step-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{width: `${progress}%`}} />
        </div>
        <div className="step-counter">Step {currentStep + 1} of {pkg.steps.length}</div>

        <div className="step-card">
          <div className="step-icon">{stepIcons[step.type]}</div>
          <h2>{step.title}</h2>
          <p className="step-desc">{step.description}</p>

          {step.command && (
            <div className="command-block">
              <code>{step.command}</code>
              <button className="copy-btn" onClick={() => handleCopy(step.command)}>
                {copied ? '✓' : 'Copy'}
              </button>
            </div>
          )}

          {step.tip && (
            <div className="step-tip">💡 {step.tip}</div>
          )}

          <div className="step-actions">
            {step.url && (
              <a href={step.url} target="_blank" rel="noreferrer" className="step-link-btn">
                {step.cta || 'Open →'}
              </a>
            )}
            <button className="next-btn" onClick={handleNext}>
              {currentStep === pkg.steps.length - 1 ? "I'm done ✓" : 'Done, next step →'}
            </button>
          </div>
        </div>

        {currentStep > 0 && (
          <button className="prev-btn" onClick={() => setCurrentStep(currentStep - 1)}>
            ← Previous step
          </button>
        )}
      </div>
    </div>
  )
}
