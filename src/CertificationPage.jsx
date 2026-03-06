import './App.css'

export default function CertificationPage({ onBack }) {
  return (
    <div className="cert-page">
      <nav className="nav">
        <div className="logo" onClick={onBack} style={{cursor:'pointer'}}>AgentStandard <span className="logo-dot">&#x2736;</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>&larr; Back</button>
      </nav>

      <div className="cert-page-inner">

        {/* Header */}
        <div className="cert-page-header">
          <div className="cert-page-star">&#x2736;</div>
          <h1 className="cert-page-title">The &#x2736; Standard</h1>
          <p className="cert-page-subhead">What it means when a package carries our mark.</p>
        </div>

        {/* Section 1: Why it matters */}
        <section className="cert-page-section">
          <h2>Why it matters</h2>
          <p>
            The AI agent space is moving fast. ClawHub &mdash; the largest AI skills marketplace &mdash; pulled over 1,100 malicious packages in a single incident in January 2026. Prompt injection, info-stealers, obfuscated commands. Most users had no idea.
          </p>
          <p>
            AgentStandard was built to be the answer to that. Every package that carries the &#x2736; mark has been reviewed against our published standard. Not automated scanning &mdash; human review.
          </p>
        </section>

        {/* Section 2: What we check */}
        <section className="cert-page-section">
          <h2>What we check</h2>
          <div className="cert-criteria-grid">
            <div className="cert-criterion">
              <div className="cert-criterion-num">01</div>
              <h3>Security</h3>
              <p>No hidden instructions, no external data fetching without disclosure, no prompt injection vectors.</p>
            </div>
            <div className="cert-criterion">
              <div className="cert-criterion-num">02</div>
              <h3>Accuracy</h3>
              <p>Claims in the package description are tested against actual behaviour.</p>
            </div>
            <div className="cert-criterion">
              <div className="cert-criterion-num">03</div>
              <h3>Transparency</h3>
              <p>System prompt fully disclosed in the manifest. No hidden instructions.</p>
            </div>
            <div className="cert-criterion">
              <div className="cert-criterion-num">04</div>
              <h3>Conflict of interest</h3>
              <p>Package author relationships disclosed. No paid placement disguised as curation.</p>
            </div>
          </div>
        </section>

        {/* Section 3: What certification is NOT */}
        <section className="cert-page-section cert-page-section-muted">
          <h2>What certification is not</h2>
          <p>
            Certification is not a guarantee of outcomes. AI outputs depend on the model and your inputs. &#x2736; means the package itself is what it says it is &mdash; not that it will solve every problem perfectly.
          </p>
        </section>

        {/* Section 4: Free for first cohort */}
        <section className="cert-page-section">
          <h2>Certification is free for the first cohort</h2>
          <p>
            Submitting a package for certification is free. We review submissions on a rolling basis. Future certification fees, if introduced, will be announced with 90 days notice and will not apply retroactively to current packages.
          </p>
        </section>

        {/* CTA */}
        <div className="cert-page-cta-block">
          <a
            href="https://github.com/AgentStandard/packages"
            target="_blank"
            rel="noreferrer"
            className="cert-page-cta"
          >
            Submit a package for review &#x2192;
          </a>
          <p className="cert-page-cta-hint">Reviewed on a rolling basis. Free. No commitment.</p>
        </div>

      </div>
    </div>
  )
}
