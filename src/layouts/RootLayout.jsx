import { NavLink, Outlet, useLocation } from 'react-router-dom'
import heroImage from '../img/LouisianaBayouMilitia.jpg'
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
            <span className="brand__full">Hornet Outdoors & Tactical</span>
            <span className="brand__short">Hornet</span>
          </NavLink>

          <nav className="links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
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
            <h1>Rugged gear. Mission-ready.</h1>
            <p>Designed for hunters, outdoorsmen, and those who live by the checklist.</p>
          </div>
        </div>
      )}

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
