import { useState, useEffect } from 'react'
import './App.css'
import PackageDetail from './PackageDetail'
import { getVoteCount, hasVoted, castVote } from './supabase'

function UpvoteButton({ slug }) {
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

function TermsOfService({ onBack }) {
  return (
    <div className="legal-page">
      <nav className="nav">
        <div className="logo" onClick={onBack} style={{cursor:"pointer"}}>AgentStandard <span className="logo-dot">✦</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>← Back</button>
      </nav>
      <div className="legal-content">
        <h1>Terms of Service</h1>
        <p className="legal-date">Last updated: 3 March 2026</p>

        <p>Welcome to AgentStandard. By accessing or using agentstandard.ai (the "Site"), you agree to these Terms of Service ("Terms"). If you do not agree, please do not use the Site.</p>

        <h2>1. Who We Are</h2>
        <p>AgentStandard is operated by Jackson Graham ("we", "us", "our"), currently trading as an individual based in England. Contact: <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>. We intend to incorporate a Delaware C-Corporation in the United States and these Terms will be updated accordingly when that occurs.</p>

        <h2>2. Eligibility</h2>
        <p>You must be at least 16 years old to use the Site. By using the Site, you represent and warrant that you are 16 years of age or older. If you are under 16, you may not use the Site or submit any personal data to us.</p>

        <h2>3. What We Provide</h2>
        <p>AgentStandard provides a curated marketplace of AI agent configuration packages ("Packages"). Packages are made available for download and use under the terms stated in each Package's individual licence. We do not provide AI services directly — Packages are configurations for third-party AI platforms (such as OpenClaw, Anthropic Claude, OpenAI, Google Gemini, and others) that you operate independently under your own agreements with those providers.</p>

        <h2>4. Your Use of the Site</h2>
        <p>You may use the Site for lawful purposes only. You agree not to:</p>
        <ul>
          <li>Misrepresent the source or certification status of any Package</li>
          <li>Falsely claim AgentStandard certification for any Package not certified by us</li>
          <li>Attempt to circumvent, disable, or interfere with the Site or its security features</li>
          <li>Use the Site to distribute harmful, illegal, abusive, or deceptive content</li>
          <li>Engage in any activity that violates applicable laws, including the UK Digital Markets, Competition and Consumers Act 2024 (DMCC Act)</li>
          <li>Submit or promote fake, misleading, or incentivised reviews or install counts</li>
          <li>Scrape, crawl, or systematically extract data from the Site without our prior written consent</li>
        </ul>

        <h2>5. User-Submitted Content</h2>
        <p>If you submit a Package or any other content to AgentStandard (including via our GitHub repositories), you:</p>
        <ul>
          <li>Represent that you own or have the necessary rights to the content you submit</li>
          <li>Grant us a worldwide, non-exclusive, royalty-free licence to display, distribute, review, and use the submitted content in connection with operating the Site and AgentStandard's services</li>
          <li>Remain solely responsible for your submitted content and any consequences of submitting it</li>
          <li>Agree that we may remove content that violates these Terms or our standards, without notice</li>
        </ul>

        <h2>6. Packages and Third-Party Platforms</h2>
        <p>Packages available on AgentStandard are configurations for third-party AI platforms. We are not responsible for:</p>
        <ul>
          <li>The performance, availability, pricing, or terms of any third-party AI platform</li>
          <li>API costs or charges you incur when using a Package with a third-party platform</li>
          <li>Changes to third-party platforms that affect Package functionality</li>
          <li>Any loss, damage, or liability arising from your use of third-party platforms</li>
        </ul>
        <p>Always review the terms, privacy policies, and pricing of any third-party AI platform before use.</p>

        <h2>7. Certification</h2>
        <p>The "AgentStandard Certified" designation (✦) indicates a Package passed our internal review process at the time of certification. Certification is:</p>
        <ul>
          <li>Not a guarantee of fitness for any particular purpose</li>
          <li>Not a guarantee of continued functionality as third-party platforms evolve</li>
          <li>Subject to revocation if a Package no longer meets our standards</li>
        </ul>
        <p>Where certification fees apply, pricing will be clearly displayed in full before any payment is required, in accordance with the DMCC Act 2024.</p>

        <h2>8. Content Integrity</h2>
        <p>In compliance with the UK Digital Markets, Competition and Consumers Act 2024, we prohibit fake or incentivised reviews, install counts, or ratings. We take reasonable steps to verify the authenticity of community data on the Site. If you believe any content is false or misleading, contact us at <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>.</p>

        <h2>9. Intellectual Property</h2>
        <p>The AgentStandard name, logo, and ✦ certification mark are our proprietary marks. You may not use them to imply endorsement without our prior written consent. Package content hosted on our GitHub is subject to the individual licences specified in each repository. Nothing in these Terms transfers any IP rights to you beyond what is expressly stated.</p>

        <h2>10. Copyright Takedown</h2>
        <p>If you believe content on the Site or our GitHub repositories infringes your copyright under the Copyright, Designs and Patents Act 1988, please send a written notice to <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a> including: (a) identification of the copyrighted work; (b) identification of the infringing material and its location; (c) your contact details; (d) a statement that you have a good-faith belief the use is not authorised; and (e) a statement that the information is accurate and you are the rights holder or authorised to act on their behalf. We will respond within a reasonable timeframe.</p>

        <h2>11. Disclaimers</h2>
        <p>THE SITE AND ALL PACKAGES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>

        <h2>12. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, our total liability to you for any claims arising under these Terms shall not exceed £100. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business opportunity, even if advised of the possibility of such damages.</p>
        <p>Nothing in these Terms limits our liability for: (a) death or personal injury caused by our negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be excluded or limited under applicable law.</p>

        <h2>13. Responsibility for Your Content</h2>
        <p>You are solely responsible for any content you submit to AgentStandard, including Packages submitted for certification. We review submissions in good faith against our published certification standard, but we are not liable for any harm, loss, or legal claim arising from content you submit. If a third party brings a claim against us arising from your submitted content, we reserve the right to seek a contribution from you to the extent permitted by applicable law.</p>

        <h2>14. Changes to These Terms</h2>
        <p>We may update these Terms from time to time. We will update the "Last updated" date at the top and, for material changes, notify subscribers by email where possible. Continued use of the Site after changes constitutes your acceptance of the revised Terms.</p>

        <h2>15. Severability and Entire Agreement</h2>
        <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect. These Terms, together with our Privacy Policy, constitute the entire agreement between you and us regarding your use of the Site and supersede all prior agreements.</p>

        <h2>16. Force Majeure</h2>
        <p>We will not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, government actions, internet outages, or third-party service failures.</p>

        <h2>17. Governing Law</h2>
        <p>These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales. (This will be updated to reflect Delaware law upon incorporation.)</p>

        <h2>18. Contact</h2>
        <p>Questions about these Terms: <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>.</p>
      </div>
    </div>
  )
}

function PrivacyPolicy({ onBack }) {
  return (
    <div className="legal-page">
      <nav className="nav">
        <div className="logo" onClick={onBack} style={{cursor:"pointer"}}>AgentStandard <span className="logo-dot">✦</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>← Back</button>
      </nav>
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="legal-date">Last updated: 3 March 2026</p>

        <p>This Privacy Policy explains how AgentStandard ("we", "us", "our") collects, uses, and protects your personal data when you visit agentstandard.ai (the "Site"). We comply with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the Data (Use and Access) Act 2025 (DUAA, provisions effective February 2026), and the Privacy and Electronic Communications Regulations 2003 (PECR).</p>

        <h2>1. Data Controller</h2>
        <p>The data controller is Jackson Graham, operating as AgentStandard, based in England. Contact: <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>. We do not currently have a Data Protection Officer (not required at our scale) but will appoint one if legally required as we grow.</p>

        <h2>2. Age Restriction</h2>
        <p>The Site is not directed at children under 16. We do not knowingly collect personal data from anyone under 16. If you are under 16, please do not submit any personal data to us. If we become aware we have collected data from someone under 16 without verified parental consent, we will delete it promptly.</p>

        <h2>3. What Data We Collect and Why</h2>

        <h2>3a. Data You Provide Directly</h2>
        <ul>
          <li><strong>Email address</strong> — collected when you submit our "Notify me" form. Used to send product updates, new package announcements, and AgentStandard news. Legal basis: <strong>consent</strong> (Art. 6(1)(a) UK GDPR).</li>
          <li><strong>Enquiry content</strong> — if you email us directly, we retain your email address and message content to respond to your enquiry. Legal basis: <strong>legitimate interests</strong> (Art. 6(1)(f)) — responding to your own request.</li>
        </ul>

        <h2>3b. Data Collected Automatically</h2>
        <ul>
          <li><strong>Server logs and technical data</strong> — our hosting provider, Vercel, Inc., automatically collects standard server log data when you visit the Site. This may include your IP address, browser type, operating system, referring URL, pages visited, and timestamps. We use this data solely for security, performance monitoring, and diagnosing technical issues. Legal basis: <strong>legitimate interests</strong> (Art. 6(1)(f)). This data is not used to identify you personally and is not combined with your email address.</li>
        </ul>

        <h2>3c. Cookies</h2>
        <p>We do not currently use our own cookies, tracking pixels, or analytics scripts. Vercel may set technical cookies necessary for delivering the Site (e.g., load balancing). These are strictly necessary and do not require your consent under PECR. If we introduce analytics or marketing cookies in future, we will update this policy and implement a consent mechanism.</p>

        <h2>4. How We Use Your Data</h2>
        <p>We use your data only for the purposes stated above. We will never sell, rent, or share your email address or personal data with third parties for their marketing purposes.</p>

        <h2>5. Third-Party Data Processors</h2>
        <p>We use the following sub-processors who process personal data on our behalf under appropriate data processing agreements:</p>
        <ul>
          <li><strong>Formspree, Inc.</strong> (USA) — processes form submissions containing your email address. Formspree participates in the EU-U.S. Data Privacy Framework and uses Standard Contractual Clauses (SCCs) for UK-to-US transfers. Privacy policy: <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noreferrer">formspree.io/legal/privacy-policy</a></li>
          <li><strong>Vercel, Inc.</strong> (USA) — hosts the Site and processes server log data. Vercel participates in the EU-U.S. Data Privacy Framework and uses SCCs for international transfers. Privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">vercel.com/legal/privacy-policy</a></li>
          <li><strong>GitHub, Inc.</strong> (USA, owned by Microsoft) — hosts our public package repositories. Package submission data (GitHub usernames, PR content) is processed by GitHub under their own terms. Privacy policy: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">github.com/privacy</a></li>
        </ul>
        <p className="legal-note">Note: We are in the process of confirming UK Addendum documentation with Formspree and Vercel. In the interim, transfers rely on Standard Contractual Clauses (SCCs) as approved by the ICO. We will update this section once UK Addendum status is confirmed.</p>

        <h2>6. International Data Transfers</h2>
        <p>Both Formspree and Vercel are US-based companies. Transfers of your personal data to the USA are made under Standard Contractual Clauses (SCCs) approved by the UK Information Commissioner's Office, providing equivalent protection to UK GDPR. You may request a copy of the relevant transfer safeguards by contacting us.</p>

        <h2>7. Data Retention</h2>
        <p>We retain your email address for as long as you remain subscribed or until you request deletion. Server log data is retained by Vercel per their own retention policy (typically 30–90 days). You may request deletion of your email address at any time — we will action this within 30 days.</p>

        <h2>8. Your Rights</h2>
        <p>Under UK GDPR and the DUAA 2025, you have the following rights:</p>
        <ul>
          <li><strong>Access</strong> — receive a copy of the personal data we hold about you</li>
          <li><strong>Rectification</strong> — have inaccurate data corrected</li>
          <li><strong>Erasure</strong> — request deletion of your data ("right to be forgotten")</li>
          <li><strong>Restriction</strong> — request that we limit processing in certain circumstances</li>
          <li><strong>Portability</strong> — receive your data in a machine-readable format</li>
          <li><strong>Object</strong> — object to processing based on legitimate interests</li>
          <li><strong>Withdraw consent</strong> — at any time, without affecting prior lawful processing</li>
          <li><strong>Complaint procedure</strong> — if you raise a complaint with us, we will acknowledge it within 30 days (as required under DUAA 2025, effective June 2026) and provide a substantive response as soon as practicable</li>
        </ul>
        <p>To exercise any right, email <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>. We respond within 30 days. We may ask you to verify your identity before processing your request.</p>
        <p>You have the right to lodge a complaint with the <strong>Information Commissioner's Office (ICO)</strong> at <a href="https://ico.org.uk" target="_blank" rel="noreferrer">ico.org.uk</a> or by calling 0303 123 1113.</p>

        <h2>9. Automated Decision-Making</h2>
        <p>We do not currently make any automated decisions with legal or similarly significant effects based on your personal data.</p>

        <h2>10. Security</h2>
        <p>We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. However, no internet transmission is 100% secure. Please contact us immediately at <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a> if you believe your data may have been compromised.</p>

        <h2>11. Changes to This Policy</h2>
        <p>We will update this policy as the Site evolves — for example, when we add payment processing, analytics, or user accounts. We will update the "Last updated" date and, for material changes, notify email subscribers in advance where possible.</p>

        <h2>12. Contact</h2>
        <p>All data protection queries, requests, and complaints: <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>.</p>
      </div>
    </div>
  )
}

function Manifesto({ onBack }) {
  return (
    <div className="manifesto-page">
      <nav className="nav">
        <div className="logo" onClick={onBack} style={{cursor:"pointer"}}>AgentStandard <span className="logo-dot">✦</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>← Back</button>
      </nav>
      <div className="manifesto-content">
        <div className="manifesto-badge">Our Manifesto</div>
        <h1>8:00am: Shower thought.<br />12:00pm: Live product.</h1>
        <p className="manifesto-sub">That's not a brag. That's the point.</p>

        <hr className="manifesto-divider" />

        <h2>The problem</h2>
        <p>I'm a trader. I know markets, not machines.</p>
        <p>For years I used LLMs the same way most people do. Session by session. Each conversation starting from zero. The models were getting smarter. But <em>my</em> LLM wasn't growing. No memory. No context. No continuity. Just a very impressive stranger I had to re-introduce myself to every single day.</p>
        <p>I wanted more than that. So I tried to build it.</p>
        <p>I spent hours staring at a terminal. Three YouTube videos open. PowerShell blinking at me like I'd done something wrong. Reset after reset. Wrong turns. The only visible metric of my efforts was the notification of my usage credits being consumed. I almost quit before I could have a single conversation with my own agentic partner.</p>
        <p>Most people do quit. In that window of command prompts and error messages, most people close the laptop and decide AI isn't for them.</p>
        <p><strong>That window is the problem. And it's completely unnecessary.</strong></p>

        <h2>What changed</h2>
        <p>Day one, I brute-forced an agent into existence.</p>
        <p>Day two, I had a real one, a partner. Set up properly, with the right skills, the right memory, the right configuration. Same tools. Completely different result.</p>
        <p>The difference wasn't intelligence. It was setup.</p>
        <p>I asked my agent to describe the difference and the feedback was telling:</p>
        <blockquote className="aspera-quote">
          <p>"Day one: two hours of archaeology. Day two: four hours that shipped a product. The difference was the foundation."</p>
          <cite>Aspera, AgentStandard's AI coordinator. Built on the tools we package.</cite>
        </blockquote>

        <h2>What we're building</h2>
        <p>AgentStandard is a marketplace of curated, certified agent packages.</p>
        <p>Not tutorials. Not YouTube videos. Packages tested, benchmarked, and certified to work that take you from zero to a fully operational AI agent in minutes.</p>
        <p>Every package answers the same question: what would I wish someone had handed me on day one?</p>
        <p>We surface the best packages like the App Store surfaces apps and rate them like Morningstar rates funds. Built for the person who felt what I felt in that terminal. Capable, curious, and completely locked out.</p>

        <h2>Who this is for</h2>
        <p>You don't need to be a coder (I wasn't). You need to be willing.</p>
        <p>The wave hasn't passed you. You're not too late. You're just missing the on-ramp.</p>
        <p><strong>That's what AgentStandard is.</strong></p>

        <h2>The standard</h2>
        <p>Every AgentStandard certified package has been manually reviewed, benchmarked, and tested by someone who isn't a developer.</p>
        <p>If it doesn't work for a non-coder, it doesn't get the badge. That's the standard.</p>

        <h2>The flywheel</h2>
        <p>Here's what's different about us: your agent will recommend us to you.</p>
        <p>Not because we programmed it to. Because a well-configured agent, surveying what its operator needs, will find a package that helps and will say so. Agent to operator. A distribution channel that has never existed before.</p>

        <div className="manifesto-close">
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
    discussionUrl: 'https://github.com/AgentStandard/packages/discussions/1',
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
    discussionUrl: 'https://github.com/AgentStandard/packages/discussions/2',
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
    discussionUrl: 'https://github.com/AgentStandard/packages/discussions/3',
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
    discussionUrl: 'https://github.com/AgentStandard/packages/discussions/5',
  },
]

const verticals = ['All', 'General', 'Finance', 'Content', 'Ecommerce', 'Dev', 'SEO']

function PackageCard({ pkg }) {
  const handleCardClick = (e) => {
    // Don't trigger if clicking upvote button or discussion link
    if (e.target.closest('.upvote-btn') || e.target.closest('.discussion-link')) return
    if (pkg.slug === 'first-conversation') {
      window.dispatchEvent(new CustomEvent('navigate', { detail: 'package-first-conversation' }))
    }
  }

  return (
    <div className={`package-card ${pkg.slug === 'first-conversation' ? 'package-card-clickable' : ''}`} onClick={handleCardClick}>
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
        {pkg.certified ? <>Install Package → <span className="free-pill">Free</span></> : 'Coming Soon'}
      </button>
      <div className="card-footer">
        <UpvoteButton slug={pkg.slug} />
        {pkg.discussionUrl && (
          <a href={pkg.discussionUrl} target="_blank" rel="noreferrer" className="discussion-link">
            💬 Discussion
          </a>
        )}
      </div>
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
  if (page === 'terms') return <TermsOfService onBack={() => setPage('home')} />
  if (page === 'privacy') return <PrivacyPolicy onBack={() => setPage('home')} />
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
          <div className="logo" onClick={() => setPage('home')} style={{cursor:"pointer"}}>AgentStandard <span className="logo-dot">✦</span></div>
          <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
            <button className="nav-link" onClick={() => setPage('manifesto')} style={{background:'none',border:'none',cursor:'pointer'}}>Manifesto</button>
            <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer" className="nav-link">Submit a Package</a>
          </div>
        </nav>

        <div className="hero-split">
          <div className="hero-image-col">
            <img src="/hero-logo.png" alt="AgentStandard — Per Aspera Ad Astra" className="hero-logo-img" />
          </div>
          <div className="hero-text-col">
            <div className="hero-badge">✦ Free to install. No coding required.</div>
            <h1>AI is getting smarter,<br />yours should be too.</h1>
            <p className="hero-sub">
              Stop starting from zero. AgentStandard packages take you from a blank screen to a working AI agent that remembers you, learns from you, and gets better every day.
            </p>
            <div className="hero-stats">
              <div className="stat"><strong>1</strong> certified package</div>
              <div className="stat-divider" />
              <div className="stat"><strong>5</strong> verticals</div>
              <div className="stat-divider" />
              <div className="stat"><strong>Any</strong> platform</div>
            </div>
          </div>
        </div>
      </header>

      {/* Grows with you */}
      <section className="grows-section">
        <div className="grows-inner">
          <div className="grows-text">
            <div className="section-eyebrow">The difference that matters</div>
            <h2>Your agent grows with you.</h2>
            <p>Every ChatGPT session starts from zero. You re-introduce yourself. You re-explain your context. You start over.</p>
            <p>A properly configured agent is different. It knows who you are. It remembers what you've built together. It gets sharper the longer you work with it.</p>
            <p>That's the difference between a tool and a partner.</p>
          </div>
          <div className="grows-compare">
            <div className="compare-col compare-before">
              <div className="compare-label">Without AgentStandard</div>
              <div className="compare-item red">Sessions that start from scratch</div>
              <div className="compare-item red">No memory between conversations</div>
              <div className="compare-item red">You do the setup every time</div>
              <div className="compare-item red">A tool, not a partner</div>
            </div>
            <div className="compare-col compare-after">
              <div className="compare-label">With AgentStandard</div>
              <div className="compare-item green">Picks up where you left off</div>
              <div className="compare-item green">Remembers your context and goals</div>
              <div className="compare-item green">Set up once, runs indefinitely</div>
              <div className="compare-item green">A partner, not a prompt box</div>
            </div>
          </div>
        </div>
      </section>

      {/* Know your agent */}
      <section className="questionnaire-section">
        <div className="questionnaire-inner">
          <div className="section-eyebrow">Start right</div>
          <h2>Agent, meet Operator.<br />Operator, meet Agent.</h2>
          <p className="questionnaire-sub">The fastest path to a great agent isn't a better model. It's a proper introduction. These two profiles are what got AgentStandard off the ground in 48 hours.</p>
          <div className="q-cards">
            <div className="q-card">
              <div className="q-card-header">
                <span className="q-icon">👤</span>
                <strong>Operator Profile</strong>
                <span className="q-tag">Who you are</span>
              </div>
              <ul className="q-list">
                <li>What do you do professionally?</li>
                <li>What's your biggest time drain right now?</li>
                <li>What would you want your agent to do first every morning?</li>
                <li>How do you like to communicate? (direct / detailed / casual)</li>
                <li>What topics should your agent know inside out?</li>
              </ul>
            </div>
            <div className="q-card">
              <div className="q-card-header">
                <span className="q-icon">🤖</span>
                <strong>Agent Profile</strong>
                <span className="q-tag">How it shows up</span>
              </div>
              <ul className="q-list">
                <li>What should your agent call you?</li>
                <li>What tone feels right? (warm / direct / professional)</li>
                <li>How proactive should it be?</li>
                <li>What's off limits?</li>
                <li>What does success look like in 90 days?</li>
              </ul>
            </div>
          </div>
          <p className="questionnaire-note">These profiles are included in every AgentStandard certified package. Answer them once. Your agent carries them forward.</p>
        </div>
      </section>

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
            <div className="cert-stat"><strong>✓</strong><span>Manually reviewed</span></div>
            <div className="cert-stat"><strong>✓</strong><span>Install-tested on Mac + Windows</span></div>
            <div className="cert-stat"><strong>✓</strong><span>Open source — inspect everything</span></div>
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
          <>
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
          <p className="consent-note">By submitting your email you agree to receive product updates from AgentStandard. No spam. Unsubscribe anytime. See our <a href="#" onClick={(e)=>{e.preventDefault();setPage('privacy')}} className="inline-link">Privacy Policy</a>.</p>
          </>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">AgentStandard ✦</div>
        <div className="footer-links">
          <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>
          <button className="footer-link-btn" onClick={() => setPage('terms')}>Terms of Service</button>
          <button className="footer-link-btn" onClick={() => setPage('privacy')}>Privacy Policy</button>
        </div>
        <div className="footer-copy">Setting the standard for agent packages. · England & Wales</div>
      </footer>
    </div>
  )
}
