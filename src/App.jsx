import { useState, useEffect } from 'react'
import './App.css'
import PackageDetail from './PackageDetail'
import CommunityPackagePage from './CommunityPackagePage'
import UpvoteButton from './UpvoteButton'

function TermsOfService({ onBack }) {
  return (
    <div className="legal-page">
      <nav className="nav">
        <div className="logo" onClick={onBack} style={{cursor:"pointer"}}>AgentStandard <span className="logo-dot">&#x2736;</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>&larr; Back</button>
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
        <p>AgentStandard provides a curated marketplace of AI agent configuration packages ("Packages"). Packages are made available for download and use under the terms stated in each Package's individual licence. We do not provide AI services directly - Packages are configurations for third-party AI platforms (such as OpenClaw, Anthropic Claude, OpenAI, Google Gemini, and others) that you operate independently under your own agreements with those providers.</p>

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
        <p>The "AgentStandard Certified" designation (&#x2736;) indicates a Package passed our internal review process at the time of certification. Certification is:</p>
        <ul>
          <li>Not a guarantee of fitness for any particular purpose</li>
          <li>Not a guarantee of continued functionality as third-party platforms evolve</li>
          <li>Subject to revocation if a Package no longer meets our standards</li>
        </ul>
        <p>Where certification fees apply, pricing will be clearly displayed in full before any payment is required, in accordance with the DMCC Act 2024.</p>

        <h2>8. Content Integrity</h2>
        <p>In compliance with the UK Digital Markets, Competition and Consumers Act 2024, we prohibit fake or incentivised reviews, install counts, or ratings. We take reasonable steps to verify the authenticity of community data on the Site. If you believe any content is false or misleading, contact us at <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>.</p>

        <h2>9. Intellectual Property</h2>
        <p>The AgentStandard name, logo, and &#x2736; certification mark are our proprietary marks. You may not use them to imply endorsement without our prior written consent. Package content hosted on our GitHub is subject to the individual licences specified in each repository. Nothing in these Terms transfers any IP rights to you beyond what is expressly stated.</p>

        <h2>10. Copyright Takedown</h2>
        <p>If you believe content on the Site or our GitHub repositories infringes your copyright under the Copyright, Designs and Patents Act 1988, please send a written notice to <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a> including: (a) identification of the copyrighted work; (b) identification of the infringing material and its location; (c) your contact details; (d) a statement that you have a good-faith belief the use is not authorised; and (e) a statement that the information is accurate and you are the rights holder or authorised to act on their behalf. We will respond within a reasonable timeframe.</p>

        <h2>11. Disclaimers</h2>
        <p>THE SITE AND ALL PACKAGES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>

        <h2>12. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, our total liability to you for any claims arising under these Terms shall not exceed �100. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business opportunity, even if advised of the possibility of such damages.</p>
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
        <div className="logo" onClick={onBack} style={{cursor:"pointer"}}>AgentStandard <span className="logo-dot">&#x2736;</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>&larr; Back</button>
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
          <li><strong>Email address</strong> - collected when you submit our "Notify me" form. Used to send product updates, new package announcements, and AgentStandard news. Legal basis: <strong>consent</strong> (Art. 6(1)(a) UK GDPR).</li>
          <li><strong>Enquiry content</strong> - if you email us directly, we retain your email address and message content to respond to your enquiry. Legal basis: <strong>legitimate interests</strong> (Art. 6(1)(f)) - responding to your own request.</li>
        </ul>

        <h2>3b. Data Collected Automatically</h2>
        <ul>
          <li><strong>Server logs and technical data</strong> - our hosting provider, Vercel, Inc., automatically collects standard server log data when you visit the Site. This may include your IP address, browser type, operating system, referring URL, pages visited, and timestamps. We use this data solely for security, performance monitoring, and diagnosing technical issues. Legal basis: <strong>legitimate interests</strong> (Art. 6(1)(f)). This data is not used to identify you personally and is not combined with your email address.</li>
        </ul>

        <h2>3c. Cookies</h2>
        <p>We do not currently use our own cookies, tracking pixels, or analytics scripts. Vercel may set technical cookies necessary for delivering the Site (e.g., load balancing). These are strictly necessary and do not require your consent under PECR. If we introduce analytics or marketing cookies in future, we will update this policy and implement a consent mechanism.</p>

        <h2>4. How We Use Your Data</h2>
        <p>We use your data only for the purposes stated above. We will never sell, rent, or share your email address or personal data with third parties for their marketing purposes.</p>

        <h2>5. Third-Party Data Processors</h2>
        <p>We use the following sub-processors who process personal data on our behalf under appropriate data processing agreements:</p>
        <ul>
          <li><strong>Formspree, Inc.</strong> (USA) - processes form submissions containing your email address. Formspree participates in the EU-U.S. Data Privacy Framework and uses Standard Contractual Clauses (SCCs) for UK-to-US transfers. Privacy policy: <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noreferrer">formspree.io/legal/privacy-policy</a></li>
          <li><strong>Vercel, Inc.</strong> (USA) - hosts the Site and processes server log data. Vercel participates in the EU-U.S. Data Privacy Framework and uses SCCs for international transfers. Privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">vercel.com/legal/privacy-policy</a></li>
          <li><strong>GitHub, Inc.</strong> (USA, owned by Microsoft) - hosts our public package repositories. Package submission data (GitHub usernames, PR content) is processed by GitHub under their own terms. Privacy policy: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">github.com/privacy</a></li>
          <li><strong>Telegram Messenger Inc.</strong> (UAE/USA) - if you interact with the AgentStandard bot (@AgentStandardAI_bot), your messages are transmitted via Telegram's infrastructure. Telegram acts as both a platform and a data processor for message delivery. Conversation content passes through Telegram's servers. Privacy policy: <a href="https://telegram.org/privacy" target="_blank" rel="noreferrer">telegram.org/privacy</a></li>
          <li><strong>Anthropic, PBC</strong> (USA) - AI responses generated by the AgentStandard bot are processed by Anthropic's Claude API. Message content sent to the bot is transmitted to Anthropic's servers for processing. Anthropic does not use API inputs to train models by default. Privacy policy: <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noreferrer">anthropic.com/legal/privacy</a></li>
          <li><strong>DigitalOcean, LLC</strong> (USA) - our bot server infrastructure is hosted on DigitalOcean. Conversation data processed by the bot is stored on DigitalOcean servers located in London (UK). DigitalOcean is compliant with GDPR and uses SCCs for applicable transfers. Privacy policy: <a href="https://www.digitalocean.com/legal/privacy-policy" target="_blank" rel="noreferrer">digitalocean.com/legal/privacy-policy</a></li>
        </ul>
        <p className="legal-note">Note: We are in the process of confirming UK Addendum documentation with Formspree, Vercel, and Anthropic. In the interim, transfers rely on Standard Contractual Clauses (SCCs) as approved by the ICO. We will update this section once UK Addendum status is confirmed. DigitalOcean's London region keeps bot conversation data within the UK.</p>

        <h2>6. International Data Transfers</h2>
        <p>Several of our sub-processors are US-based companies (Formspree, Vercel, Anthropic, GitHub). Transfers of your personal data to the USA are made under Standard Contractual Clauses (SCCs) approved by the UK Information Commissioner's Office, providing equivalent protection to UK GDPR. Bot conversation data is stored on DigitalOcean's London region (UK). You may request a copy of the relevant transfer safeguards by contacting us.</p>

        <h2>7. Data Retention</h2>
        <p>We retain your email address for as long as you remain subscribed or until you request deletion. Server log data is retained by Vercel per their own retention policy (typically 30-90 days). You may request deletion of your email address at any time - we will action this within 30 days.</p>

        <h2>8. Your Rights</h2>
        <p>Under UK GDPR and the DUAA 2025, you have the following rights:</p>
        <ul>
          <li><strong>Access</strong> - receive a copy of the personal data we hold about you</li>
          <li><strong>Rectification</strong> - have inaccurate data corrected</li>
          <li><strong>Erasure</strong> - request deletion of your data ("right to be forgotten")</li>
          <li><strong>Restriction</strong> - request that we limit processing in certain circumstances</li>
          <li><strong>Portability</strong> - receive your data in a machine-readable format</li>
          <li><strong>Object</strong> - object to processing based on legitimate interests</li>
          <li><strong>Withdraw consent</strong> - at any time, without affecting prior lawful processing</li>
          <li><strong>Complaint procedure</strong> - if you raise a complaint with us, we will acknowledge it within 30 days (as required under DUAA 2025, effective June 2026) and provide a substantive response as soon as practicable</li>
        </ul>
        <p>To exercise any right, email <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>. We respond within 30 days. We may ask you to verify your identity before processing your request.</p>
        <p>You have the right to lodge a complaint with the <strong>Information Commissioner's Office (ICO)</strong> at <a href="https://ico.org.uk" target="_blank" rel="noreferrer">ico.org.uk</a> or by calling 0303 123 1113.</p>

        <h2>9. Automated Decision-Making</h2>
        <p>We do not currently make any automated decisions with legal or similarly significant effects based on your personal data.</p>

        <h2>10. Security</h2>
        <p>We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. However, no internet transmission is 100% secure. Please contact us immediately at <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a> if you believe your data may have been compromised.</p>

        <h2>11. Changes to This Policy</h2>
        <p>We will update this policy as the Site evolves - for example, when we add payment processing, analytics, or user accounts. We will update the "Last updated" date and, for material changes, notify email subscribers in advance where possible.</p>

        <h2>12. Contact</h2>
        <p>All data protection queries, requests, and complaints: <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>.</p>
      </div>
    </div>
  )
}

function ContributorTerms({ onBack }) {
  return (
    <div className="legal-page">
      <nav className="nav">
        <div className="logo" onClick={onBack} style={{cursor:"pointer"}}>AgentStandard <span className="logo-dot">&#x2736;</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>&larr; Back</button>
      </nav>
      <div className="legal-content">
        <h1>Contributor Terms</h1>
        <p className="legal-date">Effective: 3 March 2026</p>
        <p>These terms apply when you submit a package to AgentStandard for listing or certification.</p>

        <h2>1. You own it</h2>
        <p>By submitting, you confirm you own or have the rights to the package and all its contents. You are not submitting anyone else's work without permission.</p>

        <h2>2. You grant us a licence to list it</h2>
        <p>You grant AgentStandard a non-exclusive, royalty-free, worldwide licence to display, reproduce, and review your package on agentstandard.ai and associated repositories. We do not claim ownership. You keep all rights to your work.</p>

        <h2>3. You are responsible for it</h2>
        <p>You are solely responsible for the behaviour of your package and any claims arising from its use - including harm to users, third-party IP infringement, and regulatory breaches. AgentStandard's review does not transfer that responsibility to us.</p>

        <h2>4. No hidden instructions</h2>
        <p>All agent instructions must be fully declared in the <code>system_prompt</code> field of the manifest. Packages with concealed or obfuscated instructions will be rejected and may be reported.</p>

        <h2>5. Open source only</h2>
        <p>Your package must be licensed under MIT, Apache 2.0, CC0, or ISC. Proprietary or restrictive licences are not accepted.</p>

        <h2>6. We can remove it</h2>
        <p>AgentStandard reserves the right to remove or de-list any package at any time - for safety, legal, or quality reasons. We will notify you where possible.</p>

        <h2>7. No fee</h2>
        <p>Submitting a package is free. Certification review is free for the first cohort of packages. Future certification fees, if introduced, will be announced in advance and will not apply retroactively.</p>

        <p style={{marginTop:'2rem'}}>Questions: <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a></p>
      </div>
    </div>
  )
}

function Manifesto({ onBack }) {
  return (
    <div className="manifesto-page">
      <nav className="nav">
        <div className="logo" onClick={onBack} style={{cursor:"pointer"}}>AgentStandard <span className="logo-dot">&#x2736;</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>&larr; Back</button>
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
    telegram: true,
    tags: ['beginner', 'onboarding', 'any platform'],
    discussionUrl: 'https://github.com/AgentStandard/packages/discussions/1',
    discussionNumber: 1,
    description: 'The fastest path from zero to a working AI agent. This package gives you a tested, minimal configuration that gets any LLM set up with memory, identity, and context - no coding required.',
    whatItDoes: [
      'Walks you through installing and configuring OpenClaw from scratch',
      'Establishes your agent\'s identity, memory structure, and daily routines',
      'Sets up operator and agent profiles so your AI knows who you are from session one',
      'Tests the full conversation loop to confirm everything is working before you leave',
    ],
    whoItsFor: 'Anyone who has tried (and failed) to get a useful AI agent running - no coding background required.',
    skills: [
      { name: 'Memory Setup', description: 'Persistent session memory across conversations' },
      { name: 'Identity Config', description: 'Name, tone, and personality for your agent' },
      { name: 'Daily Routine', description: 'Morning briefing and context-loading patterns' },
    ],
    userLevel: 'beginner',
    keywords: ['onboarding', 'setup', 'memory', 'beginner', 'openclaw', 'no-code'],
  },
  {
    slug: 'finance-analyst',
    hidden: true, // hidden until April 15 - garden leave caution
    name: 'Finance Analyst Stack',
    tagline: 'Live market data, earnings research, and daily briefings - no terminal required.',
    vertical: 'Finance',
    tier: 'Pro',
    setupTime: 30,
    rating: null,
    installs: 0,
    certified: false,
    tags: ['equities', 'markets', 'investing'],
    discussionUrl: 'https://github.com/AgentStandard/packages/discussions/2',
    discussionNumber: 2,
    description: 'A markets research agent for investors who want an edge without a Bloomberg terminal. Pulls live equity prices, macro data, and earnings news - and turns it into analysis you can actually act on.',
    whatItDoes: [
      'Delivers a daily morning briefing: equity futures, key macro moves, sector performance, and what to watch',
      'Fetches live stock prices, ETF data, and earnings results from Yahoo Finance and FRED',
      'Researches any company or sector on demand - fundamentals, recent news, analyst consensus',
      'Tracks your watchlist and flags anything that moved overnight',
      'Remembers your positions and preferences across sessions - no re-explaining yourself',
    ],
    whoItsFor: 'Individual investors, traders, and finance professionals who want research-quality market analysis without paying for a terminal.',
    skills: [
      { name: 'Live Market Data', description: 'Real-time equity prices, ETF data, indices, and FRED macro series' },
      { name: 'Morning Briefing', description: 'Daily pre-market summary: futures, macro, sectors, earnings calendar' },
      { name: 'Company Research', description: 'On-demand fundamentals, news, and earnings analysis for any ticker' },
      { name: 'Watchlist Tracker', description: 'Monitor your positions and flag overnight moves automatically' },
    ],
    userLevel: 'intermediate',
    keywords: ['finance', 'equities', 'markets', 'investing', 'macro', 'earnings'],
  },
  {
    slug: 'content-creator',
    name: 'Content Creator Stack',
    tagline: 'Write, research, schedule, and publish - from one conversation.',
    vertical: 'Content',
    tier: 'Pro',
    setupTime: 25,
    rating: null,
    installs: 0,
    certified: false,
    tags: ['content', 'writing', 'social'],
    discussionUrl: 'https://github.com/AgentStandard/packages/discussions/3',
    discussionNumber: 3,
    description: 'A full content production stack for creators, marketers, and founders. Research a topic, draft long-form and short-form content, repurpose across formats, and plan your publishing calendar - all in conversation.',
    whatItDoes: [
      'Researches topics and competitor content before you write a single word',
      'Drafts blog posts, LinkedIn articles, newsletters, and Twitter/X threads to your voice',
      'Repurposes one piece of content into multiple formats automatically',
      'Maintains a content calendar and tracks what has been published',
      'Learns your tone and style across sessions so drafts need less editing over time',
    ],
    whoItsFor: 'Founders, marketers, and solo creators who need to produce high-quality content consistently without a full team.',
    skills: [
      { name: 'Content Research', description: 'Web search and source synthesis before drafting' },
      { name: 'Long-form Writing', description: 'Blog posts, articles, and newsletter drafts' },
      { name: 'Social Repurposing', description: 'LinkedIn, X/Twitter, and short-form from long-form' },
      { name: 'Calendar Planning', description: 'Publishing schedule tracking and gap analysis' },
    ],
    userLevel: 'beginner',
    keywords: ['content', 'writing', 'social media', 'marketing', 'blog', 'newsletter'],
  },
  {
    slug: 'dev-productivity',
    name: 'Dev Productivity Stack',
    tagline: 'Code review, documentation, and PR workflows - on autopilot.',
    vertical: 'Dev',
    tier: 'Pro',
    setupTime: 30,
    rating: null,
    installs: 0,
    certified: false,
    tags: ['development', 'code review', 'github'],
    discussionUrl: 'https://github.com/AgentStandard/packages/discussions/4',
    discussionNumber: 4,
    description: 'A developer productivity stack that handles the work around the code - PR reviews, documentation generation, issue triage, and changelog writing. Cuts the admin so you can stay in flow.',
    whatItDoes: [
      'Reviews pull requests with structured feedback: correctness, performance, security, and style',
      'Generates and updates documentation from code automatically',
      'Triages GitHub issues and suggests priority and assignment',
      'Writes changelogs and release notes from commit history',
      'Maintains a project context file so the agent understands your codebase architecture',
    ],
    whoItsFor: 'Solo developers and small engineering teams who spend too much time on process and not enough on building.',
    skills: [
      { name: 'PR Review', description: 'Structured code review across correctness, perf, and security' },
      { name: 'Docs Generation', description: 'Auto-generated documentation from source code and comments' },
      { name: 'Issue Triage', description: 'Label, prioritise, and route GitHub issues automatically' },
      { name: 'Changelog Writer', description: 'Release notes and changelogs from git history' },
    ],
    userLevel: 'developer',
    keywords: ['developer', 'github', 'code review', 'documentation', 'CI/CD', 'productivity'],
  },
  {
    slug: 'ecommerce-ops',
    name: 'Ecommerce Strategy Stack',
    tagline: 'Competitor research, product copy, and growth strategy for online sellers.',
    vertical: 'Ecommerce',
    tier: 'Pro',
    setupTime: 35,
    rating: null,
    installs: 0,
    certified: false,
    tags: ['shopify', 'ecommerce', 'operations'],
    discussionUrl: 'https://github.com/AgentStandard/packages/discussions/5',
    discussionNumber: 5,
    description: 'Research competitors, spot pricing opportunities, write product copy, and build your launch and growth strategy. Your AI co-pilot for selling online — no Shopify integration required.',
    whatItDoes: [
      'Monitors Shopify inventory and flags low-stock products before you run out',
      'Drafts customer service responses for common order issues in your brand voice',
      'Tracks refund and dispute patterns to surface operational problems early',
      'Generates weekly sales and ops summaries with actionable recommendations',
      'Maintains a store context file so the agent knows your products, policies, and tone',
    ],
    whoItsFor: 'Online sellers and ecommerce operators who want sharper market intelligence, better product copy, and a strategic edge — without an agency.',
    skills: [
      { name: 'Inventory Monitor', description: 'Low-stock alerts and reorder point tracking' },
      { name: 'Customer Service', description: 'Drafted responses for order issues, returns, and complaints' },
      { name: 'Ops Reporting', description: 'Weekly summaries of sales, returns, and fulfilment metrics' },
      { name: 'Dispute Triage', description: 'Pattern detection for refund and chargeback trends' },
    ],
    userLevel: 'intermediate',
    keywords: ['shopify', 'ecommerce', 'inventory', 'customer service', 'operations', 'fulfilment'],
  },
  // -- New packages ----------------------------------------------------------
  {
    slug: 'gp-prep',
    isNew: true,
    name: 'GP Prep',
    tagline: 'Walk into any appointment knowing exactly what to say.',
    vertical: 'Health',
    tier: 'Free',
    setupTime: 3,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['health', 'medical', 'appointments', 'nhs'],
    description: 'Turns your symptoms, questions, and medical history into a structured pre-appointment brief. You arrive prepared; your doctor gets the information they need fast.',
    whatItDoes: [
      'Guides you through capturing symptoms with timeline and severity',
      'Asks the clarifying questions a good doctor would want answered',
      'Produces a structured brief you can share or read from in the appointment',
      'Tracks medications and supplements so nothing gets missed',
    ],
    whoItsFor: 'Anyone who leaves appointments wishing they had said something differently.',
    skills: [
      { name: 'Symptom Intake', description: 'Structured symptom capture with timeline and severity' },
      { name: 'Appointment Brief', description: 'Formatted pre-appointment document' },
      { name: 'Medication Log', description: 'Tracks current medications and supplements' },
    ],
    userLevel: 'beginner',
    keywords: ['health', 'medical', 'appointments', 'nhs', 'gp', 'doctor'],
  },
  {
    slug: 'wine-log',
    isNew: true,
    name: 'Wine Log',
    tagline: "Remember every bottle. Build a palate that's genuinely yours.",
    vertical: 'Lifestyle',
    tier: 'Free',
    setupTime: 2,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['wine', 'lifestyle', 'taste', 'food-and-drink'],
    description: 'Log wines you have tried, rate them, track what you like and why. Over time your agent builds a real picture of your palate and makes recommendations that fit how you drink.',
    whatItDoes: [
      'Logs each bottle with producer, vintage, region, and your tasting notes',
      'Builds a palate profile from your preferences over time',
      'Recommends bottles based on what you have enjoyed - not generic lists',
      'Remembers what disappointed you so you stop making the same mistakes',
    ],
    whoItsFor: 'Anyone who wants to remember and build on what they drink.',
    skills: [
      { name: 'Wine Logger', description: 'Records bottles with producer, vintage, and tasting notes' },
      { name: 'Palate Profiler', description: 'Builds and refines your taste profile over time' },
      { name: 'Wine Recommender', description: 'Suggests bottles based on your documented preferences' },
    ],
    userLevel: 'beginner',
    keywords: ['wine', 'lifestyle', 'taste', 'drinks', 'food-and-drink'],
  },
  {
    slug: 'relationship-graph',
    isNew: true,
    name: 'Relationship Graph',
    tagline: 'Your people, remembered properly.',
    vertical: 'Social',
    tier: 'Free',
    setupTime: 3,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['relationships', 'social', 'networking', 'contacts'],
    description: 'Your agent learns the people in your life - who they are, what they do, when you last spoke, what matters to them. Surface the right person at the right time.',
    whatItDoes: [
      'Learns context about the people you mention - relationships, background, what matters to them',
      'Tracks when you last spoke with each person',
      'Surfaces relevant context before you reach out or meet',
      'Gently notices when someone important has gone quiet',
    ],
    whoItsFor: 'Anyone who wants to be more intentional about the relationships they care about.',
    skills: [
      { name: 'Contact Memory', description: 'Stores and recalls context about the people in your life' },
      { name: 'Last-Contact Tracker', description: 'Notes when you last interacted with each person' },
      { name: 'Relationship Context', description: 'Surfaces relevant context before interactions' },
    ],
    userLevel: 'beginner',
    keywords: ['relationships', 'social', 'networking', 'contacts', 'memory'],
  },
  {
    slug: 'week-in-review',
    isNew: true,
    name: 'Week in Review',
    tagline: 'Sunday digest. What you did, what slipped, what matters next week.',
    vertical: 'Productivity',
    tier: 'Free',
    setupTime: 2,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['productivity', 'reflection', 'goals', 'weekly-review'],
    description: 'Every Sunday your agent reviews your week - what you accomplished, what did not happen, and what needs attention. Delivered proactively. No prompting required.',
    whatItDoes: [
      'Reaches out to you every Sunday with a digest - you do not have to ask',
      'Tracks achievements, setbacks, and intentions you mention during the week',
      'Identifies what slipped and helps you decide whether it still matters',
      'Sets the agenda for the week ahead based on what you have told it',
    ],
    whoItsFor: 'Anyone who wants a weekly reset without having to build one themselves.',
    skills: [
      { name: 'Weekly Synthesis', description: 'Collects and summarises the week\'s activity' },
      { name: 'Goal Tracker', description: 'Tracks what you said you would do and whether it happened' },
      { name: 'Proactive Delivery', description: 'Reaches out on Sunday without being prompted' },
    ],
    userLevel: 'beginner',
    keywords: ['productivity', 'reflection', 'goals', 'weekly-review', 'proactive'],
  },
  {
    slug: 'memory-architect',
    isNew: true,
    name: 'Memory Architect',
    tagline: 'An agent that remembers who you are.',
    vertical: 'Productivity',
    tier: 'Free',
    setupTime: 5,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['memory', 'productivity', 'identity', 'personal'],
    description: 'Structures your agent\'s long-term memory - daily notes distilled into lasting context, key decisions captured, important context surfaced when relevant.',
    whatItDoes: [
      'Asks good questions and remembers the answers across every conversation',
      'Distils what it learns into a lasting profile that improves over time',
      'Surfaces relevant context from past conversations without being prompted',
      'After months of use, knows your patterns and preferences well enough to anticipate needs',
    ],
    whoItsFor: 'Anyone who wants an agent that genuinely builds on itself rather than starting fresh each time.',
    skills: [
      { name: 'Diary Synthesis', description: 'Distils daily notes into lasting memory entries' },
      { name: 'Context Surface', description: 'Proactively surfaces relevant memory when applicable' },
      { name: 'Profile Builder', description: 'Builds and refines your personal profile over time' },
    ],
    userLevel: 'beginner',
    keywords: ['memory', 'productivity', 'identity', 'long-term', 'personal'],
  },
  {
    slug: 'skill-tracker',
    isNew: true,
    name: 'Skill Tracker',
    tagline: "Know what you're learning. Know what you're not.",
    vertical: 'Learning',
    tier: 'Free',
    setupTime: 3,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['learning', 'skills', 'career', 'growth'],
    description: 'Track your skills, what you are actively developing, where the gaps are, and what to focus on next. Surfaces your own progress back to you in plain language.',
    whatItDoes: [
      'Maintains a live map of what you know and what you are working on',
      'Identifies gaps relative to your stated goals',
      'Surfaces your own progress back to you periodically',
      'Recommends what to focus on next based on where you are and where you want to go',
    ],
    whoItsFor: 'Anyone in a field where staying sharp is not optional.',
    skills: [
      { name: 'Skill Inventory', description: 'Maintains a live map of your skills and learning areas' },
      { name: 'Gap Analysis', description: 'Identifies what is missing relative to your goals' },
      { name: 'Progress Tracker', description: 'Records and surfaces your own development over time' },
    ],
    userLevel: 'beginner',
    keywords: ['learning', 'skills', 'career', 'growth', 'development'],
  },
  {
    slug: 'book-brain',
    isNew: true,
    name: 'Book Brain',
    tagline: 'Read it and remember it. For real this time.',
    vertical: 'Learning',
    tier: 'Free',
    setupTime: 2,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['reading', 'books', 'learning', 'knowledge'],
    description: 'Log books as you read them. Capture key ideas, quotes, and reactions. Your agent resurfaces relevant insights when they become useful - weeks or months later.',
    whatItDoes: [
      'Logs books with key ideas, quotes, and your reactions as you read',
      'Builds your reading history and what genuinely stayed with you',
      'Resurfaces relevant ideas naturally when they apply to something you are doing now',
      'Builds a picture of your reading taste and recommends what to read next',
    ],
    whoItsFor: 'Anyone who reads a lot but struggles to retain and apply what they learn.',
    skills: [
      { name: 'Book Logger', description: 'Records books with key ideas, quotes, and your reactions' },
      { name: 'Insight Retrieval', description: 'Resurfaces relevant ideas when they apply to current context' },
      { name: 'Reading Profile', description: 'Builds your reading history and taste map over time' },
    ],
    userLevel: 'beginner',
    keywords: ['reading', 'books', 'learning', 'knowledge', 'retention'],
  },
  {
    slug: 'network-pulse',
    isNew: true,
    name: 'Network Pulse',
    tagline: 'Know who to reach out to before the moment passes.',
    vertical: 'Social',
    tier: 'Free',
    setupTime: 3,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['networking', 'social', 'relationships', 'professional'],
    description: 'Tracks the people in your professional and personal network. Notices when connections have gone quiet, surfaces who to reach out to, and gives you context before you do.',
    whatItDoes: [
      'Learns who matters in your network and tracks when you last spoke',
      'Surfaces connections that have gone quiet without making you feel guilty about it',
      'Gives you context on a person before you reach out so the conversation starts well',
      'Tracks what you talked about so follow-ups feel natural',
    ],
    whoItsFor: 'Anyone who wants to maintain relationships intentionally without it feeling like a CRM.',
    skills: [
      { name: 'Contact Tracker', description: 'Logs key people and last-contact dates' },
      { name: 'Pulse Check', description: 'Surfaces dormant connections and suggests outreach' },
      { name: 'Context Brief', description: 'Gives you context on a person before you reach out' },
    ],
    userLevel: 'beginner',
    keywords: ['networking', 'social', 'relationships', 'professional', 'contacts'],
  },
  {
    slug: 'gift-curator',
    isNew: true,
    name: 'Gift Curator',
    tagline: 'Thoughtful gifts. Every time.',
    vertical: 'Social',
    tier: 'Free',
    setupTime: 2,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['gifts', 'social', 'occasions', 'shopping'],
    description: 'Learns the preferences of people in your life over time. When an occasion comes up, suggests gifts that genuinely fit � with links.',
    whatItDoes: [
      'Learns what people in your life care about from what you mention in conversation',
      'Tracks upcoming occasions so you are never caught off guard',
      'Suggests gifts that fit the person specifically - not generic recommendations',
      'Finds options with links and price ranges based on your budget',
    ],
    whoItsFor: 'Anyone who puts thought into gifts but could use a brain that holds all the details.',
    skills: [
      { name: 'Preference Tracker', description: 'Learns what people in your life like and care about' },
      { name: 'Occasion Calendar', description: 'Tracks upcoming birthdays, anniversaries, and events' },
      { name: 'Gift Suggestions', description: 'Recommends thoughtful gifts with search and links' },
    ],
    userLevel: 'beginner',
    keywords: ['gifts', 'social', 'occasions', 'shopping', 'relationships'],
  },
  {
    slug: 'taste-map',
    isNew: true,
    name: 'Taste Map',
    tagline: 'Your taste in everything. Mapped and growing.',
    vertical: 'Lifestyle',
    tier: 'Free',
    setupTime: 2,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['taste', 'culture', 'music', 'film', 'food', 'lifestyle'],
    description: 'Builds a rich profile of your preferences across music, film, food, books, and culture. Recommendations that get better the more you use it.',
    whatItDoes: [
      'Builds your taste profile across music, film, food, books, and culture from conversation',
      'Makes recommendations that are genuinely personal - not generic top-ten lists',
      'Remembers what you loved and what disappointed you',
      'Gets more specific and accurate the more you share',
    ],
    whoItsFor: 'Anyone tired of algorithmic recommendations that feel random.',
    skills: [
      { name: 'Taste Profiler', description: 'Builds your taste profile across multiple categories' },
      { name: 'Cross-Category Rec', description: 'Makes recommendations that connect across taste areas' },
      { name: 'Preference Memory', description: 'Remembers what you loved and what fell flat' },
    ],
    userLevel: 'beginner',
    keywords: ['taste', 'culture', 'music', 'film', 'food', 'lifestyle', 'recommendations'],
  },
  {
    slug: 'read-it-later',
    isNew: true,
    name: 'Read It Later',
    tagline: 'Save it. Read it. Let it stick.',
    vertical: 'Learning',
    tier: 'Free',
    setupTime: 2,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['reading', 'articles', 'links', 'learning', 'curation'],
    description: 'Save links and articles into your agent. It summarises them, extracts key ideas, and resurfaces them when relevant - not just a list you never open.',
    whatItDoes: [
      'Paste any link and get an instant summary with key ideas extracted',
      'Builds a reading queue that works - the agent resurfaces things at the right moment',
      'References saved articles when they become relevant to what you are discussing',
      'Builds a reading graph of what you save and what you engage with over time',
    ],
    whoItsFor: 'Anyone with a Pocket or Instapaper graveyard of unread articles.',
    skills: [
      { name: 'URL Fetch & Summarise', description: 'Fetches any URL and extracts key ideas automatically' },
      { name: 'Reading Queue', description: 'Maintains your saved articles with summaries' },
      { name: 'Smart Resurface', description: 'Surfaces saved articles when they become relevant' },
    ],
    userLevel: 'beginner',
    keywords: ['reading', 'articles', 'links', 'learning', 'knowledge', 'curation'],
  },
  {
    slug: 'home-stack',
    isNew: true,
    name: 'Home Stack',
    tagline: 'Your home, tracked and remembered.',
    vertical: 'Lifestyle',
    tier: 'Free',
    setupTime: 5,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['home', 'lifestyle', 'maintenance', 'appliances', 'property'],
    description: 'Tracks appliances, warranties, maintenance schedules, and service contacts. Reminds you when something needs attention. Knows your home better than you do.',
    whatItDoes: [
      'Builds a registry of your appliances with purchase dates, models, and warranties',
      'Schedules maintenance reminders - filters, services, annual checks',
      'Stores tradespeople, service providers, and emergency contacts',
      'References home context when you raise an issue so you are not starting from scratch',
    ],
    whoItsFor: 'Anyone who has ever forgotten when they last serviced the boiler.',
    skills: [
      { name: 'Appliance Registry', description: 'Tracks appliances with purchase date, model, and warranty' },
      { name: 'Maintenance Calendar', description: 'Scheduled reminders for filters, services, and checks' },
      { name: 'Service Contacts', description: 'Stores tradespeople, service providers, and emergency contacts' },
    ],
    userLevel: 'beginner',
    keywords: ['home', 'lifestyle', 'maintenance', 'appliances', 'warranties', 'property'],
  },
  {
    slug: 'supplement-stack',
    isNew: true,
    name: 'Supplement Stack',
    tagline: "What you're taking. When to take it. What to watch.",
    vertical: 'Health',
    tier: 'Free',
    setupTime: 5,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['health', 'supplements', 'medication', 'wellness'],
    description: 'Tracks your supplement and medication routine. Flags potential interactions. Reminds you at the right time. Keeps a log so you can see what is working.',
    whatItDoes: [
      'Logs your supplement and medication stack with dosages and timing',
      'Flags known interactions - and always recommends checking with a pharmacist',
      'Reminds you to take things at the right times',
      'Tracks your routine over time so you can see what is and is not working',
    ],
    whoItsFor: 'Anyone whose supplement drawer has gotten complicated.',
    skills: [
      { name: 'Supplement Logger', description: 'Tracks your full stack with dosages and timing' },
      { name: 'Interaction Checker', description: 'Flags known supplement and drug interactions' },
      { name: 'Routine Reminders', description: 'Reminds you to take supplements at the right times' },
    ],
    userLevel: 'beginner',
    keywords: ['health', 'supplements', 'medication', 'wellness', 'routine'],
  },
  {
    slug: 'salary-scout',
    isNew: true,
    name: 'Salary Scout',
    tagline: "Know your market value. Know when you're underpaid.",
    vertical: 'Career',
    tier: 'Free',
    setupTime: 3,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    tags: ['salary', 'career', 'compensation', 'jobs', 'negotiation'],
    description: 'Tracks compensation benchmarks in your field using web search. Tells you where you sit and when the market has moved relative to what you earn.',
    whatItDoes: [
      'Searches live comp benchmarks across Glassdoor, Levels.fyi, LinkedIn Salary, and more',
      'Compares your current compensation to market rates for your role and location',
      'Tells you honestly where you sit - and says so directly if you are underpaid',
      'Tracks how the market moves over time so you know when it is time to renegotiate',
    ],
    whoItsFor: 'Anyone who suspects they might be underpaid but has not done the research.',
    skills: [
      { name: 'Comp Research', description: 'Searches live compensation benchmarks across multiple sources' },
      { name: 'Market Comparison', description: 'Compares your current comp to market rates by role and location' },
      { name: 'Benchmark Tracker', description: 'Tracks how the market moves over time relative to your pay' },
    ],
    userLevel: 'beginner',
    keywords: ['salary', 'career', 'compensation', 'jobs', 'market-value', 'negotiation'],
  },
  {
    slug: 'bid-auditor',
    name: 'Bid Auditor',
    tagline: 'Find where the money went.',
    vertical: 'Real Estate',
    tier: 'Free',
    setupTime: 3,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    isNew: true,
    tags: ['construction', 'real-estate', 'bidding', 'contractors', 'renovation'],
    description: 'Feed it your bid package, plans, and specs. It cross-references what the contractor quoted against what is actually in scope — and flags every line where the numbers do not match the drawings. What takes a pre-con manager two weeks, done in 15 minutes.',
    whatItDoes: [
      'Flags inflated line items with specific numbers, not vague warnings',
      'Catches padding patterns — vague allowances, stacked fees, duplicate scope, unit prices above market',
      'Compares multiple contractor bids side by side',
      'Prepares RFI and clarification requests for scope review meetings',
    ],
    whoItsFor: 'Property owners, developers, and project managers who are tired of contractors stuffing their budgets.',
    skills: [
      { name: 'Bid Line Analysis', description: 'Cross-references quoted amounts against scope in plans and specs' },
      { name: 'Red Flag Detection', description: 'Identifies padding patterns — allowances, stacked fees, duplicate scope' },
      { name: 'Bid Comparison', description: 'Compares multiple contractor bids side by side' },
    ],
    userLevel: 'intermediate',
    keywords: ['construction', 'real-estate', 'bidding', 'contractors', 'renovation', 'property', 'development'],
  },
  {
    slug: 'pantry-chef',
    name: 'Pantry Chef',
    tagline: "What's in the fridge? Let's cook.",
    vertical: 'Food',
    tier: 'Free',
    setupTime: 2,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    isNew: true,
    tags: ['cooking', 'food', 'recipes', 'meal-planning', 'fridge'],
    description: "Tell it what's in your fridge and it tells you what to make. Remembers what you liked, what you avoid, and how you actually cook. Gets better every time you use it.",
    whatItDoes: [
      "Suggests recipes from whatever is actually in your fridge — steps, quantities, timing",
      'Prioritises ingredients close to going off so nothing gets wasted',
      'Remembers dietary restrictions, dislikes, skill level, and what you have enjoyed',
      'Plans a week of meals and generates the shopping list for the gaps',
    ],
    whoItsFor: 'Anyone who opens the fridge, stares at it for a minute, and closes it again.',
    skills: [
      { name: 'Ingredient-to-Recipe', description: 'Suggests recipes based on what you have' },
      { name: 'Taste Memory', description: 'Remembers what you liked, avoided, and want to eat less of' },
      { name: 'Meal Planner', description: 'Plans a week of meals and generates the shopping list for gaps' },
    ],
    userLevel: 'beginner',
    keywords: ['cooking', 'food', 'recipes', 'meal-planning', 'fridge', 'pantry'],
  },
  {
    slug: 'job-hunt-agent',
    name: 'Job Hunt Agent',
    tagline: 'Your job search, organised and moving.',
    vertical: 'Career',
    tier: 'Free',
    setupTime: 3,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    isNew: true,
    tags: ['jobs', 'career', 'interviews', 'job-search', 'applications'],
    description: 'Tracks every application, prep conversation, and interview. Surfaces what to do next. Keeps the momentum going when job hunting gets demoralising.',
    whatItDoes: [
      'Tracks every role you are pursuing with status, contacts, and next steps',
      'Surfaces follow-ups going cold and applications that need attention',
      'Helps you prep for specific interviews — company research, likely questions, your best stories',
      'Stays honest when things are slow without catastrophising',
    ],
    whoItsFor: 'Anyone in an active job search who needs a system that actually keeps up.',
    skills: [
      { name: 'Application Tracker', description: 'Tracks every role with status, contacts, and next steps' },
      { name: 'Interview Prep', description: 'Prepares you for specific companies and roles' },
      { name: 'Follow-up Radar', description: 'Surfaces applications going cold and overdue follow-ups' },
    ],
    userLevel: 'beginner',
    keywords: ['jobs', 'career', 'interviews', 'job-search', 'applications'],
  },
  {
    slug: 'freelancer-guard',
    name: 'Freelancer Guard',
    tagline: 'Read it before you sign it.',
    vertical: 'Career',
    tier: 'Free',
    setupTime: 2,
    rating: null,
    installs: 0,
    certified: false,
    telegram: true,
    isNew: true,
    tags: ['freelance', 'contracts', 'legal', 'career', 'consulting'],
    description: 'Reads client contracts, scopes of work, and proposals. Flags the clauses that will cause problems — late payment, scope creep, IP traps, liability gaps. Plain English, no legal jargon.',
    whatItDoes: [
      'Flags risky contract clauses specifically — not generic advice, specific problems',
      'Checks for unlimited revisions, vague deliverables, IP traps, and payment term gaps',
      'Suggests better contract language and negotiation positions',
      'Helps when scope creep is already happening — what to say, how to handle it',
    ],
    whoItsFor: 'Any freelancer, consultant, or contractor who has ever been burned by a bad contract.',
    skills: [
      { name: 'Contract Analyser', description: 'Reads contracts and flags risky clauses in plain English' },
      { name: 'Scope Guard', description: 'Identifies scope creep risks and vague deliverable definitions' },
      { name: 'Negotiation Coach', description: 'Suggests better contract language and negotiation positions' },
    ],
    userLevel: 'beginner',
    keywords: ['freelance', 'contracts', 'legal', 'career', 'consulting', 'scope-creep'],
  },
]

const verticals = ['All', 'General', 'Productivity', 'Health', 'Lifestyle', 'Social', 'Learning', 'Career', 'Content', 'Ecommerce', 'Dev'] // Finance hidden until April 15

function PackageCard({ pkg }) {
  const isCommunity = !pkg.certified

  const handleCardClick = (e) => {
    // Don't trigger if clicking upvote button or discussion link
    if (e.target.closest('.upvote-btn') || e.target.closest('.discussion-link')) return
    if (pkg.slug === 'first-conversation') {
      window.dispatchEvent(new CustomEvent('navigate', { detail: 'package-first-conversation' }))
    } else if (isCommunity) {
      window.dispatchEvent(new CustomEvent('navigate', { detail: `community-${pkg.slug}` }))
    }
  }

  return (
    <div className="package-card package-card-clickable" onClick={handleCardClick}>
      <div className="card-header">
        <span className={`vertical-badge vertical-${pkg.vertical.toLowerCase()}`}>{pkg.vertical}</span>
        {pkg.certified && <span className="certified-badge"><span className="star-glyph">&#x2736;</span> Certified</span>}
        {pkg.isNew && <span className="new-pill">New</span>}
        {pkg.telegram && <span className="telegram-pill">Telegram</span>}
      </div>
      <h3>{pkg.name}</h3>
      <p className="tagline">{pkg.tagline}</p>
      <div className="card-stats">
        <span>{pkg.setupTime} min setup</span>
        {pkg.rating && <span>{pkg.rating}</span>}
        <span className={`tier-badge tier-${pkg.tier.toLowerCase()}`}>{pkg.tier}</span>
      </div>
      <div className="card-tags">
        {pkg.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
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

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [activeVertical, setActiveVertical] = useState('All')
  const [page, setPage] = useState('home')
  const [selectedPkg, setSelectedPkg] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      const detail = e.detail
      if (detail && detail.startsWith('community-')) {
        const slug = detail.replace('community-', '')
        const pkg = packages.find(p => p.slug === slug)
        if (pkg) setSelectedPkg(pkg)
      }
      setPage(detail)
    }
    window.addEventListener('navigate', handler)
    return () => window.removeEventListener('navigate', handler)
  }, [])

  if (page === 'manifesto') return <Manifesto onBack={() => setPage('home')} />
  if (page === 'terms') return <TermsOfService onBack={() => setPage('home')} />
  if (page === 'privacy') return <PrivacyPolicy onBack={() => setPage('home')} />
  if (page === 'contributor-terms') return <ContributorTerms onBack={() => setPage('home')} />
  if (page === 'package-first-conversation') return <PackageDetail onBack={() => setPage('home')} />
  if (page && page.startsWith('community-') && selectedPkg) {
    return <CommunityPackagePage pkg={selectedPkg} onBack={() => setPage('home')} />
  }

  const filtered = (activeVertical === 'All'
    ? packages
    : packages.filter(p => p.vertical === activeVertical)
  ).filter(p => !p.hidden)

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
          <div className="logo" onClick={() => setPage('home')} style={{cursor:"pointer"}}>AgentStandard <span className="logo-dot">&#x2736;</span></div>
          <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
            <button className="nav-link" onClick={() => setPage('manifesto')} style={{background:'none',border:'none',cursor:'pointer'}}>Manifesto</button>
            <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer" className="nav-link">Submit a Package</a>
          </div>
        </nav>

        <div className="hero-split">
          <div className="hero-image-col">
            <img src="/hero-logo.png" alt="AgentStandard - Per Aspera Ad Astra" className="hero-logo-img" />
          </div>
          <div className="hero-text-col">
            <div className="hero-badge"><span className="hero-badge-star">&#x2736;</span> Ready in 60 seconds. No download.</div>
            <h1>Stop starting over.</h1>
            <p className="hero-sub">
              Not a chatbot you prompt. An agent you build a relationship with. Remembers what matters, follows your rules, reaches out when it's useful. Start in Telegram - talking in under a minute.
            </p>
            <div className="hero-stats">
              <div className="stat"><strong>23</strong> packages</div>
              <div className="stat-divider" />
              <div className="stat"><strong>9</strong> verticals</div>
              <div className="stat-divider" />
              <div className="stat"><strong>Any</strong> platform</div>
            </div>
          </div>
        </div>
      </header>

      {/* Two paths */}
      <section className="two-paths-section">
        <div className="two-paths-inner">
          <div className="section-eyebrow">Two paths. Same destination.</div>
          <h2>Where do you want to start?</h2>
          <div className="paths-grid">
            <div className="path-card path-lite">
              <div className="path-icon">&#x2736;</div>
              <h3>I want to manage my life better.</h3>
              <p>Telegram. 60 seconds. No terminal, no download, no setup. Packages for the things that actually matter.</p>
              <ul className="path-list">
                <li>Ready in 60 seconds — just open Telegram</li>
                <li>Remembers every conversation. Builds over time.</li>
                <li>Packages for career, health, home, relationships</li>
                <li>Start free. Add packages as you grow.</li>
              </ul>
              <a href="https://t.me/AgentStandardAI_bot" target="_blank" rel="noreferrer" className="path-cta path-cta-lite">Start on Telegram →</a>
              <p className="path-upgrade-hint">Want the full stack? OpenClaw is the next step.</p>
            </div>
            <div className="path-card path-builder">
              <div className="path-icon">&#x26A1;</div>
              <h3>I want to build something with AI.</h3>
              <p>Full agent teams, real tools, and the infrastructure to actually ship — without knowing how to code.</p>
              <ul className="path-list">
                <li>Full agent team — research, writing, analysis, execution</li>
                <li>Sub-agents that work while you sleep</li>
                <li>Real tools: code execution, file access, web search</li>
                <li><strong>This platform was built with it. In 24 hours.</strong></li>
              </ul>
              <a href="https://openclaw.ai" target="_blank" rel="noreferrer" className="path-cta path-cta-builder">Get OpenClaw →</a>
            </div>
          </div>
        </div>
      </section>

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
                <span className="q-icon">01</span>
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
                <span className="q-icon">02</span>
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
            <p>Your agent is ready. Start a conversation. It knows what it's doing - because the package set it up properly.</p>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="certification-section">
        <div className="cert-content">
          <div className="cert-badge-large"><span className="star-glyph">&#x2736;</span></div>
          <h2>AgentStandard Certified</h2>
          <p>
            Every certified package has been manually reviewed, benchmarked, and tested.
            Not community guesswork - an actual standard. Like Morningstar ratings, but for agents.
          </p>
          <div className="cert-stats">
            <div className="cert-stat"><strong><span class="star-glyph">&#x2736;</span></strong><span>Manually reviewed</span></div>
            <div className="cert-stat"><strong><span class="star-glyph">&#x2736;</span></strong><span>Install-tested on Mac + Windows</span></div>
            <div className="cert-stat"><strong><span class="star-glyph">&#x2736;</span></strong><span>Open source - inspect everything</span></div>
          </div>
          <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer" className="cert-link">
            Submit your package for certification &#x2736;
          </a>
        </div>
      </section>

      {/* Email capture */}
      <section className="waitlist-section">
        <h2>Stay ahead of the standard.</h2>
        <p>New packages, certification updates, and platform news - direct to your inbox.</p>
        {submitted ? (
          <div className="submitted-msg">? You're on the list. We'll be in touch.</div>
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
        <div className="footer-logo">AgentStandard ?</div>
        <div className="footer-links">
          <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:hello@agentstandard.ai">hello@agentstandard.ai</a>
          <button className="footer-link-btn" onClick={() => setPage('terms')}>Terms of Service</button>
          <button className="footer-link-btn" onClick={() => setPage('privacy')}>Privacy Policy</button>
          <button className="footer-link-btn" onClick={() => setPage('contributor-terms')}>Contributor Terms</button>
        </div>
        <div className="footer-copy">Setting the standard for agent packages. � England & Wales</div>
      </footer>
    </div>
  )
}
