import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import heroImage from '../img/hornet_pic_2.JPG'
import logoImage from '../img/hornet_outdoors_and_tactical_logo.PNG'
import TopBanner from '../components/TopBanner'
import { useCart } from '../context/CartContext'

export default function RootLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { getTotalItems } = useCart();

  return (
    <div className="app-shell">
      <TopBanner />

      <header className="nav">
        <div className="nav__inner">
          <NavLink to="/" className="brand">
            <img src={logoImage} alt="Hornet Outdoors & Tactical" className="brand__logo" />
          </NavLink>

          <nav className="links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">Our Story</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/cart" className="pill cart-link">
              Cart
              {getTotalItems() > 0 && (
                <span className="cart-badge">{getTotalItems()}</span>
              )}
            </NavLink>
          </nav>
        </div>
      </header>

      {isHomePage && (
        <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero__overlay" />
          <div className="hero__content">
            <h1>Get <span className="accent">O</span>n <span className="accent">T</span>arget.</h1>
            <p className="hero__subtitle-hint">Hornet <strong>O</strong>utdoors &amp; <strong>T</strong>actical</p>
            <p>Premium gear vetted by a Marine Corps aviator, built for those who demand only the best.</p>
            <div className="hero__actions">
              <Link to="/shop" className="hero__cta">
                Shop the Collection
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/about" className="hero__cta hero__cta--ghost">
                Our Story
              </Link>
            </div>
          </div>
          <div className="hero__scroll">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </div>
        </div>
      )}

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>&copy; {new Date().getFullYear()} Hornet Outdoors &amp; Tactical</span>
          <span className="muted">Veteran-owned &bull; Field-tested &bull; Get <strong style={{color:'var(--accent)'}}>O</strong>n <strong style={{color:'var(--accent)'}}>T</strong>arget</span>
        </div>
      </footer>
    </div>
  )
}
