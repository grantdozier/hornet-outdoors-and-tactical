import { NavLink, Outlet } from 'react-router-dom'
import heroImage from '../img/LouisianaBayouMilitia.jpg'

export default function RootLayout() {
  return (
    <div className="app-shell">
      <header className="nav">
        <div className="nav__inner">
          <NavLink to="/" className="brand">
            <span className="brand__mark" aria-hidden>◆</span>
            Hornet Outdoors & Tactical
          </NavLink>

          <nav className="links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/cart" className="pill">Cart</NavLink>
          </nav>
        </div>
      </header>

      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1>Rugged gear. Mission-ready.</h1>
          <p>Designed for hunters, outdoorsmen, and those who live by the checklist.</p>
        </div>
      </div>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span> {new Date().getFullYear()} Hornet Outdoors & Tactical</span>
          <span className="muted">Aviator-owned • Field-tested</span>
        </div>
      </footer>
    </div>
  )
}
