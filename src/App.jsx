import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
  return (
    <div className="container" style={{maxWidth: 960, margin: '0 auto', padding: '3rem 1.25rem', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2rem'}}>
        <h1 style={{margin:0}}>Hornet Outdoors & Tactical</h1>
        <nav style={{display:'flex', gap:'1rem'}}>
          <a href="#gear">Gear</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section style={{padding:'2rem', borderRadius:16, boxShadow:'0 6px 24px rgba(0,0,0,0.08)', marginBottom:'2rem'}}>
        <h2 style={{marginTop:0}}>Rugged gear for the field and the weekend</h2>
        <p>Launching soon. Sign up to hear when we go live.</p>
        <form onSubmit={(e)=>e.preventDefault()} style={{display:'flex', gap:8, marginTop:12}}>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{flex:1, padding:'0.75rem 0.9rem', borderRadius:10, border:'1px solid #ddd'}}
          />
          <button style={{padding:'0.75rem 1rem', borderRadius:10, border:'none', background:'#111', color:'#fff', cursor:'pointer'}}>
            Notify me
          </button>
        </form>
      </section>

      <section id="gear" style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:16}}>
        {['Packs','Blades','Lights','Apparel'].map((t,i)=>(
          <div key={i} style={{padding:'1.25rem', border:'1px solid #eee', borderRadius:14}}>
            <h3 style={{marginTop:0}}>{t}</h3>
            <p style={{marginBottom:0}}>Durable, field-tested {t.toLowerCase()} coming soon.</p>
          </div>
        ))}
      </section>

      <footer style={{marginTop:'3rem', fontSize:14, color:'#666'}}>
        {new Date().getFullYear()} Hornet Outdoors & Tactical
      </footer>
    </div>
  )
}
