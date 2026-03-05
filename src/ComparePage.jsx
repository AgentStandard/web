export default function ComparePage({ onBack }) {
  return (
    <div className="legal-page">
      <nav className="nav">
        <div className="logo" onClick={onBack} style={{cursor:'pointer'}}>AgentStandard <span className="logo-dot">&#x2736;</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>&larr; Back</button>
      </nav>
      <div className="legal-content" style={{maxWidth:'900px'}}>

        <h1 style={{fontSize:'2.2rem',lineHeight:1.3,marginBottom:'12px'}}>AgentStandard vs Claude Projects</h1>
        <p style={{fontSize:'1.1rem',color:'#8899aa',marginBottom:'40px',lineHeight:1.7}}>These aren't competitors. One gives you the canvas. One gives you something worth putting on it.</p>

        <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'24px',marginBottom:'40px'}}>
          <p style={{lineHeight:1.8,color:'#ccd0d6'}}>We're going to be direct with you, because you'll figure it out anyway.</p>
          <p style={{lineHeight:1.8,color:'#ccd0d6',marginTop:'12px'}}>Claude Projects isn't a product we're trying to replace. Anthropic built something genuinely useful — persistent context, file access, custom instructions, team sharing. If you haven't set it up yet, you probably should.</p>
          <p style={{lineHeight:1.8,color:'#ccd0d6',marginTop:'12px'}}>AgentStandard packages are what a subset of those users reach for when they've hit the limits of what they can configure on their own. Not everyone hits that ceiling. If you haven't, you might not need us yet.</p>
          <p style={{lineHeight:1.8,color:'#ccd0d6',marginTop:'12px'}}>But if you're here, you're probably the kind of person who has.</p>
        </div>

        <h2 style={{fontSize:'1.4rem',marginBottom:'20px'}}>The Comparison</h2>
        <div style={{overflowX:'auto',marginBottom:'40px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.9rem'}}>
            <thead>
              <tr>
                <th style={{textAlign:'left',padding:'14px 16px',borderBottom:'2px solid rgba(255,255,255,0.15)',color:'#8899aa',fontWeight:600}}></th>
                <th style={{textAlign:'left',padding:'14px 16px',borderBottom:'2px solid rgba(255,255,255,0.15)',color:'#8899aa',fontWeight:600}}>Claude Projects</th>
                <th style={{textAlign:'left',padding:'14px 16px',borderBottom:'2px solid rgba(255,255,255,0.15)',color:'#8899aa',fontWeight:600}}>AgentStandard Package</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['What it is', 'A persistent workspace with custom context', 'A curated, field-tested agent persona and workflow'],
                ['Who builds the context', 'You', 'Practitioners who know your domain'],
                ['Setup time', '30–60 min to do it well', 'One click'],
                ['Quality ceiling', 'As good as what you write', 'As good as what experts built and tested'],
                ['Maintenance', 'You maintain it', 'We maintain it'],
                ['Versioning', 'None — it\'s whatever you last edited', 'Package updates ship automatically'],
                ['Consistency across team', 'Depends on whoever sets it up', 'Standardised across all installs'],
                ['Cost', 'Included in Claude.ai subscription', 'Package marketplace pricing'],
                ['Works offline/standalone', 'Yes', 'Requires Claude subscription'],
                ['Deep domain knowledge', 'Only what you upload', 'Built into the package from day one'],
                ['Customisation', 'Fully flexible — blank canvas', 'Structured — opinionated by design'],
                ['Best for', 'Getting started, general context', 'When "general" isn\'t good enough'],
              ].map(([label, col1, col2], i) => (
                <tr key={i} style={{background: i%2===0 ? 'rgba(255,255,255,0.02)' : 'transparent'}}>
                  <td style={{padding:'14px 16px',color:'#8899aa',borderBottom:'1px solid rgba(255,255,255,0.04)',fontWeight:600}}>{label}</td>
                  <td style={{padding:'14px 16px',color:'#aab',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>{col1}</td>
                  <td style={{padding:'14px 16px',color:'#ccd',borderBottom:'1px solid rgba(255,255,255,0.04)',fontWeight:500}}>{col2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{fontSize:'1.4rem',marginBottom:'20px'}}>Where Claude Projects Wins</h2>
        <p style={{color:'#8899aa',marginBottom:'20px'}}>Let's be specific.</p>
        {[
          {
            title: 'You know exactly what you want.',
            desc: 'If you have strong opinions about your AI setup, can write clear instructions, and enjoy tuning your own tools — Claude Projects gives you total control. Packages are opinionated. If you disagree with those opinions, a blank canvas is better.'
          },
          {
            title: 'Your use case is general.',
            desc: 'Not everything needs a specialist. If you're using Claude for general research, writing assistance, or tasks that don't require deep domain context — Projects is perfectly sufficient. Don't over-engineer it.'
          },
          {
            title: 'You're still figuring out what you need.',
            desc: 'Claude Projects is a great learning environment. Try things. See what context actually matters. Once you know what works, you might find a package that already built the answer — or you might decide your own setup is fine.'
          },
          {
            title: 'Cost matters at the margin.',
            desc: 'Claude Projects is included in your subscription. Packages cost extra. If budget is tight and Claude Projects is getting the job done, stay there.'
          },
          {
            title: 'Team control and customisation.',
            desc: 'For teams that need fine-grained control over what their agents know and how they behave — and have the capacity to maintain that — a well-managed Claude Project gives you flexibility packages don't.'
          }
        ].map((item, i) => (
          <div key={i} style={{borderLeft:'2px solid rgba(255,255,255,0.1)',paddingLeft:'20px',marginBottom:'24px'}}>
            <p style={{fontWeight:700,color:'#ccd',marginBottom:'8px}}>{item.title}</p>
            <p style={{color:'#8899aa',lineHeight:1.7}}>{item.desc}</p>
          </div>
        ))}

        <h2 style={{fontSize:'1.4rem',marginBottom:'20px',marginTop:'40px'}}>Where AgentStandard Wins</h2>
        {[
          {
            title: 'You've hit the ceiling of what you know to write.',
            desc: 'The hardest part of Claude Projects isn't the setup — it's knowing what to put in it. Most people's custom instructions are too generic to change behaviour in meaningful ways. Packages are built by people who've already solved that problem for your specific situation.'
          },
          {
            title: 'You need consistency without overhead.',
            desc: 'Getting one person to set up a great Claude Project is hard. Getting a team to all set it up to the same standard is nearly impossible. Packages install the same way every time. The output standard doesn't depend on whoever happened to configure it.'
          },
          {
            title: 'Your domain requires operational depth.',
            desc: 'Writing, research, admin — Claude handles these well with general context. Credit analysis, biotech research, client relationship management, structured decision-making — these require a level of operational knowledge that takes time to build and encode. Packages encode it once. You benefit immediately.'
          },
          {
            title: 'You want something that stays current.',
            desc: 'A Claude Project is a snapshot. It reflects what you knew when you set it up. Packages are versioned — when better approaches emerge, when Claude changes, when the community identifies failure modes, the package updates. Your agent improves without you doing anything.'
          },
          {
            title: 'Your time is worth more than the package costs.',
            desc: 'An afternoon spent writing good Claude Project instructions is real time. A one-click install that arrives ready to work is a different value proposition. The math depends on your hourly rate and how often you'd revisit the instructions.'
          }
        ].map((item, i) => (
          <div key={i} style={{borderLeft:'2px solid rgba(255,255,255,0.1)',paddingLeft:'20px',marginBottom:'24px'}}>
            <p style={{fontWeight:700,color:'#ccd',marginBottom:'8px}}>{item.title}</p>
            <p style={{color:'#8899aa',lineHeight:1.7}}>{item.desc}</p>
          </div>
        ))}

        <h2 style={{fontSize:'1.4rem',marginBottom:'20px',marginTop:'40px'}}>They Work Better Together</h2>
        <p style={{color:'#8899aa',marginBottom:'20px'}}>Here's the use case a lot of our users land on:</p>
        <ol style={{lineHeight:2,paddingLeft:'20px',color:'#aabbcc',marginBottom:'32px',listStyle:'decimal'}}>
          <li><strong>Keep your Claude Project</strong> — it's where you store your files, your team access, your high-level context</li>
          <li><strong>Install a package</strong> — it provides the deep operational knowledge and consistent behaviour your instructions alone couldn't achieve</li>
          <li><strong>Add your own customisation on top</strong> — the package handles the foundation, you handle the edges</li>
        </ol>
        <p style={{color:'#8899aa'}}>The result: an agent that knows your field <em>and</em> knows your specifics. Neither product alone gets you there.</p>

        <h2 style={{fontSize:'1.4rem',marginBottom:'20px',marginTop:'40px'}}>The Honest Bottom Line</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px',marginBottom:'40px'}}>
          <div style={{background:'rgba(100,150,255,0.05)',border:'1px solid rgba(100,150,200,0.15)',borderRadius:'10px',padding:'16px'}}>
            <p style={{fontWeight:700,color:'#aac',marginBottom:'8px'}}>Start with Claude Projects if...</p>
            <p style={{color:'#8899aa',lineHeight:1.7,fontSize:'0.95rem'}}>You're new to persistent context, or your needs are general enough that basic customisation covers it.</p>
          </div>
          <div style={{background:'rgba(100,200,150,0.05)',border:'1px solid rgba(100,200,150,0.15)',borderRadius:'10px',padding:'16px'}}>
            <p style={{fontWeight:700,color:'#aac',marginBottom:'8px'}}>Add AgentStandard if...</p>
            <p style={{color:'#8899aa',lineHeight:1.7,fontSize:'0.95rem'}}>You've used Claude Projects and know something's still missing — you just haven't been able to name it.</p>
          </div>
        </div>

        <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'28px',textAlign:'center',marginTop:'48px'}}>
          <h3 style={{fontSize:'1.3rem',marginBottom:'8px'}}>Ready to go deeper?</h3>
          <p style={{color:'#8899aa',marginBottom:'20px'}}>Browse our package marketplace and see if something's built for your situation.</p>
          <button onClick={onBack} style={{background:'linear-gradient(135deg,#1a1a2e,#2d2d5e)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:'8px',color:'#fff',padding:'14px 32px',cursor:'pointer',fontSize:'1rem',fontWeight:700,letterSpacing:'0.05em'}}>Browse Packages &#x2736;</button>
        </div>

      </div>
    </div>
  )
}
