import { Link } from 'react-router-dom'
import { categories, products, getCategoryProductCount } from '../data/inventory'
import ProductCard from '../components/ProductCard'

const categoryIcons = {
  hunting: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>,
  fishing: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 2l-4 4m0 0V2m0 4h4"/><path d="M14 6l-6.3 6.3a2.1 2.1 0 000 3l.6.6a2.1 2.1 0 003 0L14 13"/><path d="M10 17v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2h1"/><circle cx="6" cy="20" r="1"/></svg>,
  waterfowl: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 4v12"/><path d="M12 4l7 8h-7"/><path d="M4 18l2-2h12l2 2"/><path d="M3 21c2-1 4 0 6-1s4 0 6-1 4 0 6-1"/></svg>,
  archery: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/><circle cx="12" cy="12" r="2" fill="currentColor"/><line x1="2" y1="12" x2="22" y2="12" strokeWidth="1"/><path d="M22 12l-3-2m3 2l-3 2"/></svg>,
  retrievers: <svg fill="currentColor" viewBox="0 0 24 24"><circle cx="7" cy="10" r="2"/><circle cx="17" cy="10" r="2"/><circle cx="9" cy="5" r="2"/><circle cx="15" cy="5" r="2"/><ellipse cx="12" cy="16" rx="4" ry="5"/></svg>,
  tactical: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  camping: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/><path d="M12 2l4 10-4 4-4-4 4-10z" opacity=".3"/><line x1="2" y1="22" x2="22" y2="22"/><path d="M9 22v-4a3 3 0 016 0v4"/></svg>,
  apparel: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M16 3l5 3-2 4-3-1v11H8V9L5 10 3 6l5-3"/><path d="M9 3c0 0 1.5 2 3 2s3-2 3-2"/></svg>,
}

export default function Shop() {
  return (
    <section className="stack">
      <div style={{textAlign:'center',maxWidth:'640px',margin:'0 auto'}}>
        <div className="badge badge--available" style={{marginBottom:'1rem'}}>Browse Our Selection</div>
        <h2>Shop by Category</h2>
        <p>
          Explore our product categories below. We're continually expanding our inventory to serve outdoor enthusiasts and tactical professionals with top-quality gear.
        </p>
      </div>

      <div className="grid-4" style={{marginTop:'1rem'}}>
        {categories.map((category) => (
          <Link key={category.id} to={`/shop/${category.slug}`} className="card category-card">
            <div className="card__body">
              <div className="category-card__icon">
                {categoryIcons[category.slug] || categoryIcons.hunting}
              </div>
              <h3>{category.name}</h3>
              <p className="category-card__status">
                {category.comingSoon && getCategoryProductCount(category.slug) === 0 ? (
                  <span className="badge badge--coming-soon">Coming {category.availableDate}</span>
                ) : (
                  <span className="badge badge--available">{getCategoryProductCount(category.slug)} {getCategoryProductCount(category.slug) === 1 ? 'item' : 'items'}</span>
                )}
              </p>
              <p className="text-muted">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {products.length > 0 && (
        <>
          <div className="section-header" style={{marginTop:'2rem'}}>
            <h2>Featured Products</h2>
          </div>

          <div className="grid-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price.toFixed(2)}
                imageSrc={product.image}
                link={`/shop/${product.category.toLowerCase()}/${product.subcategory || 'all'}/${product.slug}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
