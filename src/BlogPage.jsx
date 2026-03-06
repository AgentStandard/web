import { useState } from 'react'
import './App.css'

const posts = [
  {
    slug: 'claude-projects-from-underperforming-to-outperforming',
    title: "Claude Projects: From Underperforming to Outperforming",
    date: 'March 2026',
    readTime: '7 min read',
    description: "Most Claude Projects underdeliver - not because of the model, but because of the configuration layer nobody told you to build.",
    tags: ['Claude Projects', 'Agent Configuration', 'Tips'],
    content: () => (
      <div className="blog-body">
        <p>You set up a Claude Project. You gave it a name, maybe dropped in some files, wrote a few lines in the system prompt box. You used it for a week. Now it kind of works, but it's not the assistant you imagined when you first saw the demos.</p>
        <p>It forgets things it should know. It answers questions you never asked. It's helpful in the generic sense - like a competent stranger who knows a lot but knows nothing about you.</p>
        <p>You've probably blamed Claude. Or the context window. Or the fact that AI just isn't there yet.</p>
        <p><strong>Here's the thing: the model is almost certainly not your problem.</strong></p>

        <h2>The Real Problem Is Configuration Debt</h2>
        <p>Claude is a powerful reasoning engine. But a reasoning engine without the right context is like hiring a senior analyst and giving them zero briefing materials on their first day. They'll do their best. It won't be great.</p>
        <p>What most people call "AI limitations" are actually configuration gaps. The model doesn't know:</p>
        <ul>
          <li>Who it's talking to</li>
          <li>What it's supposed to care about</li>
          <li>What it should never do</li>
          <li>How it should communicate</li>
          <li>What it already knows about you</li>
        </ul>
        <p>Without answers to these questions baked in before the first message, every conversation starts from scratch. You're not getting a capable agent. You're getting a generic language model doing improv.</p>

        <h2>Why This Keeps Happening</h2>
        <p>In February 2026, a thread on r/ChatGPT hit 15,000 upvotes. The complaint: ChatGPT's memory was broken. Users were describing a product they'd come to rely on suddenly not knowing who they were, reverting to generic responses, failing to carry forward context they'd explicitly set. It wasn't just frustrating - it broke trust.</p>
        <p>That thread is a symptom of something deeper: we've built a massive user base that expects AI assistants to <em>know</em> them, but we've handed those users no meaningful way to define what "knowing them" actually means.</p>

        <h2>The 80/20 of Agent Configuration</h2>

        <h3>1. Identity before instructions</h3>
        <p>Your system prompt should start with who the agent <em>is</em>, not what it should do.</p>
        <p><strong>Bad:</strong> <em>"You are a helpful assistant. Help me with my work."</em></p>
        <p><strong>Better:</strong> <em>"You are Marcus, a senior financial research analyst. You work with me - a credit portfolio manager - as a thought partner. You are direct, quantitative, and never hedge when you have a view. You push back when something doesn't add up."</em></p>
        <p>Same model. Radically different output.</p>

        <h3>2. Memory as architecture, not afterthought</h3>
        <p>A 500-word memory file that captures your professional background, communication preferences, and recurring context is worth more than ten uploaded PDFs. It's not about storage - it's about making relevant context immediately available.</p>

        <h3>3. Skills over instructions</h3>
        <p>Generic instructions are brittle. Skills are modular: a specific task the agent performs, with its own context, behaviour, and output format. They compose cleanly and can be swapped without touching the rest of the configuration.</p>

        <h3>4. Constraints as a feature</h3>
        <p>Most system prompts focus entirely on what the agent should do. Almost none spend enough time on what it should <em>not</em> do. Constraints are where agents start to feel trustworthy.</p>

        <h3>5. Consistent formatting</h3>
        <p>An agent that switches unpredictably between markdown and prose, between formal and casual - based on nothing you can predict - creates cognitive overhead with every message. Define the format explicitly.</p>

        <h2>What a Well-Configured Agent Actually Looks Like</h2>
        <p>You stop re-explaining yourself. The agent knows who you are. You start in the middle of the conversation instead of spending 30% of every exchange on setup. You stop managing the agent and start working with it.</p>
        <p>The model was always capable of this. The configuration just wasn't there.</p>

        <h2>What Packages Are</h2>
        <p>This is the gap AgentStandard was built to address. An AgentStandard package is a structured configuration manifest - an <code>agentstandard.json</code> file that captures everything needed to instantiate a well-configured agent: identity, memory architecture, skills, constraints, formatting rules, and system prompt.</p>
        <p>The packages in the library are curated by people who have spent serious time figuring out what actually makes these agents work. Not theoretical best practices. Actual configuration patterns that produce better outputs.</p>
        <p>The spec is open. The packages are free to use, fork, and modify.</p>

        <h2>The Honest Version</h2>
        <p>You don't need AgentStandard to build a great Claude agent. Everything in this post you can implement yourself, today, in a standard Claude Project.</p>
        <p>What you need is to take the configuration layer seriously. Stop treating the system prompt as an afterthought and start treating it as the architecture it is.</p>
        <p>If you'd rather start from a configuration that's already been stress-tested, that's what <a href="https://agentstandard.ai" target="_blank" rel="noreferrer">agentstandard.ai</a> is for.</p>
        <p>Either way - the model was never the problem.</p>
      </div>
    )
  },
  {
    slug: 'agentstandard-json-spec',
    title: "The agentstandard.json Spec: An Open Standard for AI Agent Packages",
    date: 'March 2026',
    readTime: '5 min read',
    description: "Why we chose to open-source the agent package format, what it contains, and how to contribute.",
    tags: ['Open Source', 'Spec', 'Developer'],
    content: () => (
      <div className="blog-body">
        <p>When we started building AgentStandard, the first question we had to answer was: what exactly is an "agent package"? Not philosophically. Practically. If you want to share a well-configured AI agent with someone, what does the file look like?</p>
        <p>There was no answer. No standard. Just people copying system prompts into Notion docs and hoping the next person understood the intent. So we wrote one.</p>

        <h2>Why an Open Spec</h2>
        <p>We had two options: build a closed ecosystem, or write an open spec and publish it on GitHub - letting anyone build on it, including our competitors.</p>
        <p>We chose open. Here's why.</p>
        <p>AI agent configuration is genuinely early. No single team has a monopoly on good ideas. A closed format will either calcify or get abandoned. An open spec that the community can contribute to has a better shot at becoming something durable.</p>
        <p>There's also a trust argument. If you're going to use a configuration format to define how an AI agent behaves - its identity, its memory, its constraints - you should be able to read the spec yourself. Open means auditable.</p>

        <h2>What the Spec Contains</h2>
        <p>The <code>agentstandard.json</code> manifest is designed to be complete but not overwhelming. A minimal valid package can be as short as 20 lines. A fully-specified production package might run to 150.</p>
        <p><strong>meta</strong> - Package identity: name, version, author, description, target model, license.</p>
        <p><strong>identity</strong> - Who the agent is: name, role, persona, communication style. A well-defined identity produces more consistent behaviour than a list of rules.</p>
        <p><strong>memory</strong> - What the agent knows before the conversation starts: persistent context structure, file formats, load order.</p>
        <p><strong>skills</strong> - Named capabilities with their own context, activation conditions, and output format. Skills are modular and composable.</p>
        <p><strong>constraints</strong> - What the agent won't do. Explicit, enumerated, unambiguous. This is where trust is built.</p>
        <p><strong>system_prompt</strong> - The compiled output, or left empty for the consuming tool to generate.</p>
        <p><strong>formatting</strong> - Output format preferences: markdown vs plain text, response length, list conventions.</p>

        <h2>A Simplified Example</h2>
        <pre className="blog-code">{`{
  "meta": {
    "name": "research-analyst",
    "version": "1.2.0",
    "description": "Senior credit research analyst",
    "model": "claude-opus-4",
    "license": "MIT"
  },
  "identity": {
    "name": "Griffin",
    "role": "Senior Credit Research Analyst",
    "style": "Direct, quantitative, pushes back when warranted"
  },
  "skills": [
    {
      "name": "credit-analysis",
      "description": "Deep-dive fundamental credit analysis",
      "activation": "when asked to analyze a company or sector"
    }
  ],
  "constraints": [
    "Never give advice without flagging uncertainty",
    "Always present the bear case before the bull case"
  ]
}`}</pre>

        <h2>How to Contribute</h2>
        <p>The spec lives at <a href="https://github.com/AgentStandard/packages" target="_blank" rel="noreferrer">github.com/AgentStandard/packages</a>. It's MIT licensed.</p>
        <p><strong>To propose a spec change:</strong> Open an issue with the <code>spec</code> label. Describe what the current spec doesn't handle.</p>
        <p><strong>To contribute a package:</strong> Fork the repo, add your <code>agentstandard.json</code>, open a PR. We review for spec compliance and quality.</p>
        <p>We're early. The spec will evolve. We'll version it properly - breaking changes will never happen silently.</p>

        <h2>Why Open Beats Closed for Agent Ecosystems</h2>
        <p>The history of developer tooling is clear: open standards win. REST beat SOAP. JSON beat XML. Git beat everything else.</p>
        <p>Closed agent configuration formats will fragment the ecosystem. An open spec means a package you configure today for Claude can be adapted for another model tomorrow. The tooling ecosystem can build against a stable public interface.</p>
        <p>We don't think we'll get the spec perfect on the first try. We think the community will make it better than we ever could alone. That's the point.</p>
      </div>
    )
  }
]

export default function BlogPage({ onBack }) {
  const [activePost, setActivePost] = useState(null)

  if (activePost) {
    const post = posts.find(p => p.slug === activePost)
    return (
      <div className="legal-page">
        <nav className="nav">
          <div className="logo" onClick={onBack} style={{cursor:'pointer'}}>AgentStandard <span className="logo-dot">&#x2736;</span></div>
          <button className="nav-link" onClick={() => setActivePost(null)} style={{background:'none',border:'none',cursor:'pointer'}}>&larr; All Posts</button>
        </nav>
        <div className="legal-content" style={{maxWidth:'720px'}}>
          <div style={{marginBottom:'8px',display:'flex',gap:'8px',flexWrap:'wrap'}}>
            {post.tags.map(t => (
              <span key={t} style={{fontSize:'0.75rem',background:'rgba(255,255,255,0.06)',padding:'3px 10px',borderRadius:'20px',color:'#8899aa',letterSpacing:'0.05em'}}>{t}</span>
            ))}
          </div>
          <h1 style={{fontSize:'2rem',lineHeight:1.3,marginBottom:'8px'}}>{post.title}</h1>
          <p style={{fontSize:'0.85rem',color:'#667788',marginBottom:'32px'}}>{post.date} &middot; {post.readTime}</p>
          {post.content()}
          <div style={{marginTop:'48px',paddingTop:'32px',borderTop:'1px solid rgba(255,255,255,0.08)',textAlign:'center'}}>
            <p style={{marginBottom:'16px',color:'#8899aa'}}>Ready to configure your agent properly?</p>
            <button onClick={onBack} style={{background:'linear-gradient(135deg,#1a1a2e,#2d2d5e)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'8px',color:'#fff',padding:'12px 28px',cursor:'pointer',fontSize:'0.95rem',fontWeight:600}}>Browse Packages &#x2736;</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="legal-page">
      <nav className="nav">
        <div className="logo" onClick={onBack} style={{cursor:'pointer'}}>AgentStandard <span className="logo-dot">&#x2736;</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>&larr; Home</button>
      </nav>
      <div className="legal-content" style={{maxWidth:'720px'}}>
        <h1 style={{fontSize:'2.2rem',marginBottom:'8px'}}>Blog</h1>
        <p style={{color:'#667788',marginBottom:'40px'}}>Thinking on AI agents, configuration, and building in public.</p>
        <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
          {posts.map(post => (
            <article key={post.slug} onClick={() => setActivePost(post.slug)} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'24px',cursor:'pointer',transition:'all 0.2s'}}
              onMouseEnter={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}
            >
              <div style={{display:'flex',gap:'8px',marginBottom:'10px',flexWrap:'wrap'}}>
                {post.tags.map(t => (
                  <span key={t} style={{fontSize:'0.72rem',background:'rgba(255,255,255,0.06)',padding:'2px 8px',borderRadius:'20px',color:'#8899aa'}}>{t}</span>
                ))}
              </div>
              <h2 style={{fontSize:'1.2rem',fontWeight:700,marginBottom:'8px',lineHeight:1.4}}>{post.title}</h2>
              <p style={{color:'#8899aa',fontSize:'0.9rem',marginBottom:'12px',lineHeight:1.6}}>{post.description}</p>
              <p style={{fontSize:'0.8rem',color:'#556677'}}>{post.date} &middot; {post.readTime}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
