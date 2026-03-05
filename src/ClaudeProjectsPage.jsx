export default function ClaudeProjectsPage({ onBack }) {
  return (
    <div className="legal-page">
      <nav className="nav">
        <div className="logo" onClick={onBack} style={{cursor:'pointer'}}>AgentStandard <span className="logo-dot">&#x2736;</span></div>
        <button className="nav-link" onClick={onBack} style={{background:'none',border:'none',cursor:'pointer'}}>&larr; Back</button>
      </nav>
      <div className="legal-content" style={{maxWidth:'720px'}}>

        <p style={{fontSize:'0.8rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'#556677',marginBottom:'12px'}}>For Claude Projects Users</p>
        <h1 style={{fontSize:'2.2rem',lineHeight:1.3,marginBottom:'12px'}}>Already using Claude Projects?<br />Here&rsquo;s what you&rsquo;re still missing.</h1>
        <p style={{fontSize:'1.1rem',color:'#8899aa',marginBottom:'40px',lineHeight:1.7}}>Claude Projects lets you set context. Packages give your agent something worth knowing.</p>

        <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'24px',marginBottom:'40px'}}>
          <p style={{lineHeight:1.8,color:'#ccd0d6'}}>You set up a Claude Project. You wrote some instructions. You pasted in a document or two. And it&rsquo;s&hellip; better than nothing.</p>
          <p style={{lineHeight:1.8,color:'#ccd0d6',marginTop:'12px'}}>Better than starting from scratch every time. But if you&rsquo;re honest, your AI still doesn&rsquo;t quite <em>get</em> it. It knows you work in biotech. It doesn&rsquo;t know you think risk in three tiers and never make a call without seeing the downside first.</p>
          <p style={{lineHeight:1.8,color:'#ccd0d6',marginTop:'12px'}}>That gap &mdash; between &ldquo;knows about you&rdquo; and &ldquo;knows how you think&rdquo; &mdash; is what packages close.</p>
        </div>

        <h2 style={{fontSize:'1.4rem',marginBottom:'16px'}}>What Claude Projects does well</h2>
        <ul style={{lineHeight:2,paddingLeft:'20px',color:'#aabbcc',marginBottom:'32px'}}>
          <li><strong>Persistent context</strong> &mdash; your agent remembers the background without repeating it</li>
          <li><strong>File uploads</strong> &mdash; attach docs, transcripts, reference material</li>
          <li><strong>Custom instructions</strong> &mdash; basic personality and output preferences</li>
          <li><strong>Team access</strong> &mdash; share a Project with collaborators</li>
        </ul>
        <p style={{color:'#8899aa',marginBottom:'40px'}}>If you&rsquo;ve set this up properly, you&rsquo;ve already saved yourself hours. That&rsquo;s real.</p>

        <h2 style={{fontSize:'1.4rem',marginBottom:'20px'}}>Where it runs out</h2>

        {[
          {
            q: '"I don\'t know what to put in the instructions."',
            a: "You know your work. You don't necessarily know how to translate it into AI instructions that actually change behaviour. Most Claude Projects instructions are too vague to do anything meaningful. Packages are written by people who've already solved that translation problem."
          },
          {
            q: '"It still doesn\'t sound like my agent."',
            a: "Custom instructions are one layer. A well-built package covers persona, workflow, communication style, decision-making priors, and what the agent should push back on — not just how it should format a reply."
          },
          {
            q: '"It doesn\'t stay consistent."',
            a: "Long conversations, context windows, edge cases — Claude Projects context can drift. Packages are built to maintain coherence across a full working session."
          },
          {
            q: '"My team sets it up differently every time."',
            a: "One person's Claude Project isn't another's. Packages standardise what \"good\" looks like across a team — same briefing, same standards, same output quality."
          }
        ].map((item, i) => (
          <div key={i} style={{borderLeft:'2px solid rgba(255,255,255,0.1)',paddingLeft:'20px',marginBottom:'24px'}}>
            <p style={{fontWeight:700,color:'#ccd',marginBottom:'8px',fontStyle:'italic'}}>{item.q}</p>
            <p style={{color:'#8899aa',lineHeight:1.7}}>{item.a}</p>
          </div>
        ))}

        <h2 style={{fontSize:'1.4rem',margin:'40px 0 20px'}}>What a package adds</h2>
        <p style={{color:'#8899aa',marginBottom:'20px'}}>Think of it this way: Claude Projects is the <strong>folder</strong>. A package is the <strong>expert you put in it</strong>.</p>

        <div style={{overflowX:'auto',marginBottom:'40px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.9rem'}}>
            <thead>
              <tr>
                <th style={{textAlign:'left',padding:'10px 16px',borderBottom:'1px solid rgba(255,255,255,0.1)',color:'#8899aa',fontWeight:600}}>Claude Projects</th>
                <th style={{textAlign:'left',padding:'10px 16px',borderBottom:'1px solid rgba(255,255,255,0.1)',color:'#8899aa',fontWeight:600}}>AgentStandard Package</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['You write the instructions','Instructions written by practitioners'],
                ['General context','Specific operational knowledge'],
                ['One-time setup','Maintained and versioned'],
                ['You maintain it','We maintain it'],
                ['Works with what you know to ask for','Built to know what you didn\'t think to ask'],
              ].map(([l, r], i) => (
                <tr key={i} style={{background: i%2===0 ? 'rgba(255,255,255,0.02)' : 'transparent'}}>
                  <td style={{padding:'12px 16px',color:'#aab',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>{l}</td>
                  <td style={{padding:'12px 16px',color:'#ccd',borderBottom:'1px solid rgba(255,255,255,0.04)',fontWeight:500}}>{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{fontSize:'1.4rem',marginBottom:'20px'}}>What it looks like in practice</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px',marginBottom:'40px'}}>
          <div style={{background:'rgba(255,50,50,0.05)',border:'1px solid rgba(255,100,100,0.15)',borderRadius:'10px',padding:'20px'}}>
            <p style={{fontSize:'0.75rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'#cc6666',marginBottom:'12px'}}>Before (Claude Projects only)</p>
            <p style={{fontSize:'0.9rem',color:'#aab',lineHeight:1.7,fontStyle:'italic'}}>&ldquo;I need to review this vendor proposal.&rdquo;</p>
            <p style={{fontSize:'0.9rem',color:'#8899aa',lineHeight:1.7,marginTop:'8px',fontStyle:'italic'}}>&ldquo;Sure! I&rsquo;d be happy to help. What criteria should I use?&rdquo;</p>
          </div>
          <div style={{background:'rgba(50,200,100,0.05)',border:'1px solid rgba(50,200,100,0.15)',borderRadius:'10px',padding:'20px'}}>
            <p style={{fontSize:'0.75rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'#66bb88',marginBottom:'12px'}}>After (with a package)</p>
            <p style={{fontSize:'0.9rem',color:'#aab',lineHeight:1.7,fontStyle:'italic'}}>&ldquo;I need to review this vendor proposal.&rdquo;</p>
            <p style={{fontSize:'0.9rem',color:'#ccd',lineHeight:1.7,marginTop:'8px',fontStyle:'italic'}}>&ldquo;I&rsquo;ve reviewed it against your standard three-tier criteria. Red flags on pricing lock-in and the SLA clause. Do you want the short version or full analysis?&rdquo;</p>
          </div>
        </div>

        <h2 style={{fontSize:'1.4rem',marginBottom:'16px'}}>Who this is for</h2>
        <p style={{color:'#8899aa',marginBottom:'8px'}}>You&rsquo;re the right fit if:</p>
        <ul style={{lineHeight:2,paddingLeft:'20px',color:'#aabbcc',marginBottom:'20px'}}>
          <li>You&rsquo;ve set up Claude Projects but feel like you&rsquo;re still doing all the heavy lifting</li>
          <li>Your team uses AI inconsistently and you want a shared standard</li>
          <li>You know what good output looks like in your field &mdash; you just can&rsquo;t get your AI to produce it reliably</li>
        </ul>

        <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'28px',textAlign:'center',marginTop:'48px'}}>
          <h3 style={{fontSize:'1.3rem',marginBottom:'8px'}}>Ready to see what your Claude Project is missing?</h3>
          <p style={{color:'#8899aa',marginBottom:'20px'}}>No setup call. No onboarding. One click and your agent knows what it&rsquo;s doing.</p>
          <button onClick={onBack} style={{background:'linear-gradient(135deg,#1a1a2e,#2d2d5e)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:'8px',color:'#fff',padding:'14px 32px',cursor:'pointer',fontSize:'1rem',fontWeight:700,letterSpacing:'0.05em'}}>Browse Packages &#x2736;</button>
        </div>

      </div>
    </div>
  )
}
