import { Link } from 'react-router-dom'
import { categories } from '../data/inventory'

export default function Shop() {
  return (
    <section className="stack">
      <h2>Shop</h2>
      <p>
        Explore our product categories below. We're continually expanding our inventory to serve outdoor enthusiasts and tactical professionals with top-quality gear.
      </p>

      <div className="grid-3">
        {categories.map((category) => (
          <Link key={category.id} to={`/shop/${category.slug}`} className="card category-card">
            <div className="card__body">
              <h3>{category.name}</h3>
              <p className="category-card__status">
                {category.comingSoon ? (
                  <span className="badge badge--coming-soon">Coming {category.availableDate}</span>
                ) : (
                  <span className="badge badge--available">{category.itemCount} {category.itemCount === 1 ? 'item' : 'items'}</span>
                )}
              </p>
              <p className="text-muted">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
