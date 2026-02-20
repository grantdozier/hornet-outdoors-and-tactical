import { useParams, Link, NavLink } from 'react-router-dom';
import { getCategoryBySlug, getProductsByCategory, getProductsBySubcategory, getCategoryProductCount } from '../data/inventory';
import ProductCard from '../components/ProductCard';
import ComingSoon from '../components/ComingSoon';

function CategoryLanding({ cat }) {
  const landing = cat.landing;
  const totalProducts = getCategoryProductCount(cat.slug);

  return (
    <div className="cat-landing">
      {landing?.heroImage ? (
        <div className="cat-landing__hero" style={{ backgroundImage: `url(${landing.heroImage})`, ...(landing.heroStyle || {}) }}>
          <div className="cat-landing__hero-overlay" />
          <div className="cat-landing__hero-content">
            <h1>{landing.headline || cat.name}</h1>
            {landing.tagline && <p className="cat-landing__tagline">{landing.tagline}</p>}
            <div className="cat-landing__hero-actions">
              {cat.comingSoon && totalProducts === 0 ? (
                <span className="badge badge--coming-soon" style={{fontSize:'.9rem',padding:'.5rem 1.25rem'}}>Coming {cat.availableDate}</span>
              ) : (
                <Link to={`/shop/${cat.slug}/all`} className="btn">
                  Browse All Products
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="cat-landing__hero-text">
          <h1>{landing?.headline || cat.name}</h1>
          {landing?.tagline && <p className="cat-landing__tagline">{landing.tagline}</p>}
          {cat.comingSoon && totalProducts === 0 && (
            <span className="badge badge--coming-soon" style={{fontSize:'.9rem',padding:'.5rem 1.25rem'}}>Coming {cat.availableDate}</span>
          )}
        </div>
      )}

      {landing?.blurb && (
        <div className="cat-landing__about">
          <p>{landing.blurb}</p>
        </div>
      )}

      {landing?.brands && landing.brands.length > 0 && (
        <div className="cat-landing__brands">
          <h2>Our Brand Partners</h2>
          <div className="cat-landing__brands-grid">
            {landing.brands.map((brand) => (
              <a key={brand.name} href={brand.url} target="_blank" rel="noopener noreferrer" className="cat-landing__brand-card">
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
                {brand.url && <span className="cat-landing__brand-link">Visit Partner →</span>}
              </a>
            ))}
          </div>
        </div>
      )}

      {landing?.images && landing.images.length > 1 && (
        <div className="cat-landing__gallery">
          {landing.images.map((img, i) => (
            <div key={i} className="cat-landing__gallery-item">
              <img src={img} alt={`${cat.name} ${i + 1}`} />
            </div>
          ))}
        </div>
      )}

      <div className="cat-landing__subcategories">
        <h2>Shop {cat.name}</h2>
        <div className="cat-landing__sub-grid">
          <Link to={`/shop/${cat.slug}/all`} className="cat-landing__sub-card">
            <span className="cat-landing__sub-name">All {cat.name}</span>
            {totalProducts > 0 && <span className="badge badge--available">{totalProducts} {totalProducts === 1 ? 'item' : 'items'}</span>}
          </Link>
          {cat.subcategories.map((sub) => (
            <Link key={sub.slug} to={`/shop/${cat.slug}/${sub.slug}`} className="cat-landing__sub-card">
              <span className="cat-landing__sub-name">{sub.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function SubcategoryContent({ cat, subcategory }) {
  const isAll = subcategory === 'all';
  const products = isAll
    ? getProductsByCategory(cat.name)
    : getProductsBySubcategory(cat.name, subcategory);
  const totalProducts = getCategoryProductCount(cat.slug);
  const subName = isAll
    ? `All ${cat.name}`
    : cat.subcategories.find(s => s.slug === subcategory)?.name || subcategory;

  return (
    <div className="category-layout">
      <aside className="category-sidebar">
        <h3 className="category-sidebar__title">{cat.name}</h3>
        <nav className="category-sidebar__nav">
          <NavLink
            to={`/shop/${cat.slug}/all`}
            className={({ isActive }) => `category-sidebar__link ${isActive ? 'active' : ''}`}
          >
            All {cat.name}
            {totalProducts > 0 && <span className="category-sidebar__count">{totalProducts}</span>}
          </NavLink>
          {cat.subcategories.map((sub) => (
            <NavLink
              key={sub.slug}
              to={`/shop/${cat.slug}/${sub.slug}`}
              className={({ isActive }) => `category-sidebar__link ${isActive ? 'active' : ''}`}
            >
              {sub.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="category-content">
        {products.length > 0 ? (
          <div className="grid-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price.toFixed(2)}
                imageSrc={product.image}
                link={`/shop/${cat.slug}/${product.subcategory || 'all'}/${product.slug}`}
              />
            ))}
          </div>
        ) : (
          <div className="category-empty">
            <div className="category-empty__icon">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="48" height="48">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <h3>No Products Yet</h3>
            <p className="text-muted">
              Products for {subName} are coming soon. Check back later!
            </p>
            <Link to={`/shop/${cat.slug}`} className="btn btn--ghost">
              Back to {cat.name}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CategoryPage() {
  const { category, subcategory } = useParams();
  const cat = getCategoryBySlug(category);

  if (!cat) {
    return (
      <section className="stack">
        <h2>Category Not Found</h2>
        <p className="text-muted">The category you're looking for doesn't exist.</p>
        <Link to="/shop" className="btn">Back to Shop</Link>
      </section>
    );
  }

  return (
    <section className="stack">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb__separator">›</span>
        <Link to="/shop">Shop</Link>
        <span className="breadcrumb__separator">›</span>
        {subcategory ? (
          <>
            <Link to={`/shop/${cat.slug}`}>{cat.name}</Link>
            <span className="breadcrumb__separator">›</span>
            <span className="breadcrumb__current">
              {subcategory === 'all' ? `All ${cat.name}` : (cat.subcategories.find(s => s.slug === subcategory)?.name || subcategory)}
            </span>
          </>
        ) : (
          <span className="breadcrumb__current">{cat.name}</span>
        )}
      </div>

      {subcategory ? (
        <SubcategoryContent cat={cat} subcategory={subcategory} />
      ) : (
        <CategoryLanding cat={cat} />
      )}
    </section>
  );
}
